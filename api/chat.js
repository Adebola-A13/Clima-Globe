// api/chat.js
export default async function handler(req, res) {
    // Configuration CORS pour Vercel
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Gérer les requêtes OPTIONS (preflight CORS)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Accepter seulement les requêtes POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;

        // Validation des données d'entrée
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Format de messages invalide' });
        }

        // Récupérer la clé API depuis les variables d'environnement Vercel
        const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
        if (!OPENROUTER_API_KEY) {
            console.error('OPENROUTER_API_KEY non configurée dans les variables d\'environnement Vercel');
            return res.status(500).json({ 
                error: 'Erreur de configuration du serveur - clé API manquante' 
            });
        }

        // Déterminer l'URL du site pour les headers OpenRouter
        const siteUrl = process.env.VERCEL_URL 
            ? `https://${process.env.VERCEL_URL}` 
            : (req.headers.origin || 'https://localhost:3000');
        const siteName = process.env.SITE_NAME || 'Vue DeepSeek Chat';

        // Appel sécurisé à l'API OpenRouter
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": siteUrl,
            "X-Title": siteName,
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            "model": "deepseek/deepseek-chat-v3.1:free",
            "messages": messages,
            "temperature": 0.7,
            "max_tokens": 2000
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Erreur API OpenRouter: ${response.status} - ${errorText}`);
            
            // Messages d'erreur explicites pour l'utilisateur
            let userMessage = 'Une erreur est survenue avec le service de chat';
            if (response.status === 401) {
                userMessage = 'Erreur d\'authentification avec le service de chat';
            } else if (response.status === 429) {
                userMessage = 'Limite de requêtes atteinte, veuillez réessayer plus tard';
            } else if (response.status === 500) {
                userMessage = 'Erreur du serveur de chat, veuillez réessayer';
            }
            
            return res.status(response.status).json({ 
                error: userMessage,
                details: `API Error: ${response.status} ${response.statusText}`
            });
        }

        const data = await response.json();

        // Vérification de la structure de la réponse
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error('Structure de réponse invalide d\'OpenRouter:', data);
            return res.status(500).json({ error: 'Réponse invalide du service de chat' });
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error('Erreur API Chat:', error);
        return res.status(500).json({ 
            error: 'Erreur interne du serveur',
            details: error.message 
        });
    }
}
