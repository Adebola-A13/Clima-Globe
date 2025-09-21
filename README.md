# 🌍 ClimaGlobe

**Explorez les pays et leurs conditions météorologiques en temps réel.**

## 💡 Motivation

Ce projet a été conçu dans le cadre d'un travail purement personnel visant à explorer l'intégration et l'utilisation d'APIs tierces dans une application web moderne et à ameliorer mon utilisation d'un framework. L'objectif principal était de créer une plateforme permettant de centraliser des informations géographiques et climatiques de manière simple et accessible. En combinant les données de `restcountries.com` et `open-meteo.com`, ClimaGlobe démontre comment des services gratuits peuvent être orchestrés pour offrir une expérience utilisateur riche sans nécessiter de base de données interne complexe. Ce projet illustre également l'application pratique des concepts de développement frontend avec Vue3.js et la gestion de données asynchrones.

## 🚀 Fonctionnalités

*   **🔍 Recherche de Pays :** Entrez le nom d'un pays (de préférence en anglais) pour obtenir ses informations de base : capitale, population, superficie, coordonnées géographiques, langues, monnaies, etc.
*   **🌤️ Données Météorologiques :** Affiche automatiquement la météo actuelle (température, vent, humidité) et un aperçu des prévisions pour la capitale du pays recherché.
*   **🤖 Assistant IA (DeepSeek) :** (Fonctionnalité potentielle basée sur nos discussions) Posez des questions générales via un chatbot alimenté par l'IA DeepSeek (gratuit via OpenRouter).
*   **📄 Documentation API :** (Fonctionnalité potentielle) Fournit des informations sur les API tierces utilisées (`restcountries.com`, `open-meteo.com`).

## 🛠️ Technologies Utilisées

*   **Frontend :** Vue 3 (Options ou Composition API), Tailwind CSS
*   **APIs Tierces :**
    *   `restcountries.com` : Pour les données détaillées sur les pays.
    *   `open-meteo.com` : Pour les données météorologiques précises.
    *   `openrouter.ai` (avec modèle `deepseek/deepseek-chat-v3.1:free`) : Pour l'assistant IA (si implémenté).
*   **Déploiement :** (À spécifier selon ton choix : Vercel, Netlify, etc.)

## 📦 Installation (Pour les développeurs)

1.  Clonez ce dépôt : `git clone https://github.com/TonNomUtilisateur/climaglobe.git`
2.  Accédez au dossier du projet : `cd climage`
3.  Installez les dépendances : `npm install`
4.  Créez un fichier `.env` à la racine et ajoutez votre clé API OpenRouter :
    `VITE_OPENROUTER_API_KEY=sk-or-v1-VOTRE_CLE_ICI`
5.  Démarrez le serveur de développement : `npm run dev`

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une *issue* ou une *pull request*.

## 📄 Licence

Ce projet est sous la licence MIT (à confirmer selon ton choix). Voir le fichier `LICENSE` pour plus de détails.
