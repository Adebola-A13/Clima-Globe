<!-- src/components/DeepSeekChat.vue -->
<template>
    <div class="mt-10 mb-10 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 shadow-xl border border-gray-200 max-w-5xl mx-auto">
        <!-- En-tête avec titre et bouton clear -->
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-3xl font-bold text-gray-800 flex items-center">
            <div class="w-10 h-10 bg-gradient-to-r from-indigo-950 to-indigo-950 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </div>
            <span class="bg-gradient-to-r from-indigo-950 to-indigo-950 bg-clip-text text-transparent">
                DeepSeek Chat
            </span>
            <span class="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Free</span>
            </h3>
            
            <button
            @click="clearChat"
            class="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            :disabled="messages.length === 0"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span class="text-sm font-medium">Clear Chat</span>
            </button>
        </div>

        <!-- Message d'information important -->
        <div class="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div class="text-amber-800">
                    <p class="text-sm font-medium mb-1">Important: Temporary Session</p>
                    <p class="text-xs leading-relaxed">
                        This is a DeepSeek chat to help you simply. It is not a personal AI.
                        <strong class="font-semibold">All conversations will disappear permanently when you close this window.</strong>
                        No data is saved on the server.
                    </p>
                </div>
            </div>
        </div>

        <!-- Zone d'affichage des messages -->
        <div ref="chatContainer" class="h-96 overflow-y-auto mb-6 p-4 bg-white rounded-xl shadow-inner border border-gray-100 chat-container">
            <div v-if="messages.length === 0" class="flex items-center justify-center h-full text-gray-400">
                <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p class="text-lg font-medium">Start a conversation</p>
                    <p class="text-sm">Ask me anything to begin!</p>
                </div>
            </div>

            <div v-for="(message, index) in messages" :key="index" class="mb-6 group">
                <!-- Message utilisateur -->
                <div v-if="message.role === 'user'" class="flex justify-end items-start space-x-3">
                    <div class="flex flex-col items-end max-w-xs lg:max-w-md">
                    <!-- Boutons d'action pour l'utilisateur -->
                    <div class="flex items-center space-x-1 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                        @click="editMessage(index)"
                        class="text-gray-400 hover:text-indigo-500 p-1 rounded transition-colors duration-200"
                        title="Edit message"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        </button>
                        <button
                        @click="deleteMessage(index)"
                        class="text-gray-400 hover:text-red-500 p-1 rounded transition-colors duration-200"
                        title="Delete message"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </button>
                    </div>
                    
                    <!-- Contenu du message ou input d'édition -->
                    <div v-if="editingIndex === index" class="w-full max-w-md">
                        <textarea
                        v-model="editingContent"
                        ref="editTextarea"
                        @keyup.enter.ctrl="saveEdit"
                        @keyup.escape="cancelEdit"
                        class="w-full p-3 border border-indigo-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                        rows="3"
                        ></textarea>
                        <div class="flex justify-end space-x-2 mt-2">
                            <button
                                @click="cancelEdit"
                                class="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                @click="saveEdit"
                                class="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                        <div v-else class="bg-gradient-to-r from-indigo-950 to-indigo-950 text-white p-4 rounded-2xl rounded-br-sm shadow-md">
                            <p class="whitespace-pre-wrap text-sm leading-relaxed">{{ message.content }}</p>
                        </div>
                    </div>
                    <div class="w-8 h-8 bg-indigo-950 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <span class="text-white text-xs font-bold">You</span>
                    </div>
                </div>

                <!-- Message assistant -->
                <div v-else class="flex justify-start items-start space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <div class="flex flex-col max-w-xs lg:max-w-md">
                        <!-- Bouton de suppression pour l'assistant -->
                        <div class="flex items-center mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <button
                            @click="deleteMessage(index)"
                            class="text-gray-400 hover:text-red-500 p-1 rounded transition-colors duration-200"
                            title="Delete message"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            </button>
                        </div>
                        <div class="bg-gray-100 text-gray-800 p-4 rounded-2xl rounded-bl-sm shadow-md border border-gray-200">
                            <p class="whitespace-pre-wrap text-sm leading-relaxed">{{ message.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Indicateur de chargement -->
            <div v-if="isLoading" class="flex justify-start items-start space-x-3 mb-6">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <div class="bg-gray-100 text-gray-600 p-4 rounded-2xl rounded-bl-sm shadow-md border border-gray-200 flex items-center space-x-2">
                    <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                    <span class="text-sm">DeepSeek is thinking...</span>
                </div>
            </div>
        </div>

        <!-- Formulaire de saisie -->
        <div class="relative">
            <div class="flex items-end space-x-3 bg-white rounded-xl shadow-lg border border-gray-200 p-3">
                <textarea
                    v-model="userInput"
                    @keyup.enter.ctrl="sendMessage"
                    @keydown.enter="handleEnter"
                    placeholder="Type your message here..."
                    class="flex-grow py-3 px-4 rounded-lg border-0 focus:outline-none focus:ring-0 resize-none text-gray-700 placeholder-gray-400"
                    :disabled="isLoading"
                    rows="1"
                    ref="messageInput"
                    @input="adjustTextareaHeight"
                ></textarea>
                <button
                    @click="sendMessage"
                    :disabled="isLoading || !userInput.trim()"
                    class="bg-gradient-to-r from-red-600 to-red-600 hover:from-purple-600 hover:to-indigo-700 text-white p-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 min-w-12 min-h-12 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
                
            <!-- Message d'aide -->
            <div class="flex justify-between items-center mt-2 text-xs text-gray-400 px-2">
                <span>Press Enter for new line, Ctrl+Enter to send</span>
                <span v-if="userInput.length > 0">{{ userInput.length }} characters</span>
            </div>
        </div>

        <!-- Message d'erreur -->
        <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-red-700 text-sm font-medium">Error: {{ error }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, nextTick, onMounted } from 'vue';

    // --- Configuration ---
    // const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
    // if (!OPENROUTER_API_KEY) {
    // console.error("Missing VITE_OPENROUTER_API_KEY in .env file");
    // }
    // const YOUR_SITE_URL = window.location.origin;
    // const YOUR_SITE_NAME = document.title || "My Vue App";

    // --- État réactif ---
    const messages = ref([]);
    const userInput = ref('');
    const isLoading = ref(false);
    const error = ref(null);
    const chatContainer = ref(null);
    const messageInput = ref(null);

    // Variables pour l'édition
    const editingIndex = ref(-1);
    const editingContent = ref('');
    const editTextarea = ref(null);

    // --- Fonctions utilitaires ---
    const scrollToBottom = () => {
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
    };

    const adjustTextareaHeight = () => {
    const textarea = messageInput.value;
    if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
    };

    const handleEnter = (event) => {
        if (event.shiftKey) {
            // Permet le saut de ligne si l'utilisateur fait Shift + Enter
            return;
        }
        event.preventDefault(); // ⚠️ Empêche le saut de ligne par défaut
        sendMessage();          // ✅ Envoie le message
    };

    // --- Fonctions de gestion des messages ---
    const clearChat = () => {
    if (messages.value.length > 0 && confirm('Are you sure you want to clear all messages?')) {
        messages.value = [];
        error.value = null;
    }
    };

    const deleteMessage = (index) => {
    if (confirm('Are you sure you want to delete this message?')) {
        // Supprimer le message et potentiellement la réponse associée
        const message = messages.value[index];
        if (message.role === 'user' && index + 1 < messages.value.length && messages.value[index + 1].role === 'assistant') {
        // Supprimer aussi la réponse de l'assistant
        messages.value.splice(index, 2);
        } else {
        messages.value.splice(index, 1);
        }
    }
    };

    const editMessage = (index) => {
    editingIndex.value = index;
    editingContent.value = messages.value[index].content;
    nextTick(() => {
        if (editTextarea.value) {
        editTextarea.value.focus();
        editTextarea.value.select();
        }
    });
    };

    const cancelEdit = () => {
    editingIndex.value = -1;
    editingContent.value = '';
    };

    const saveEdit = async () => {
    const content = editingContent.value.trim();
    if (!content) return;

    const index = editingIndex.value;
    messages.value[index].content = content;
    
    // Supprimer les réponses suivantes si on édite un message utilisateur
    if (messages.value[index].role === 'user') {
        messages.value = messages.value.slice(0, index + 1);
        cancelEdit();
        
        // Renvoyer automatiquement le message édité
        await sendMessage(true);
    } else {
        cancelEdit();
    }
    };

    // --- Fonction principale d'envoi de message ---
    const sendMessage = async (isResend = false) => {
        let message;

        if (isResend) {
            message = messages.value[messages.value.length - 1].content;
        } else {
            message = userInput.value.trim();
            if (!message || isLoading.value) return;

            messages.value.push({ role: 'user', content: message });
            userInput.value = '';

            if (messageInput.value) {
                messageInput.value.style.height = 'auto';
            }
        }

        isLoading.value = true;
        error.value = null;

        await nextTick();
        scrollToBottom();

        try {
        // Appel à votre fonction API Vercel sécurisée
        const response = await fetch('/api/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [...messages.value]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Erreur ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const assistantMessage = data.choices?.[0]?.message?.content?.trim();

        if (assistantMessage) {
            messages.value.push({ role: 'assistant', content: assistantMessage });
        } else {
            throw new Error("Aucune réponse reçue du service de chat");
        }

        } catch (err) {
            console.error("Erreur API Chat:", err);
            error.value = err.message;

            // Messages d'erreur conviviaux
            let errorMessage = "Désolé, une erreur est survenue. Veuillez réessayer.";
            if (err.message.includes('fetch')) {
                errorMessage = "Problème de connexion. Vérifiez votre connexion internet.";
            } else if (err.message.includes('429')) {
                errorMessage = "Trop de requêtes. Attendez quelques secondes avant de réessayer.";
            }

            messages.value.push({ 
                role: 'assistant', 
                content: errorMessage
            });
        } finally {
        isLoading.value = false;
            await nextTick();
            scrollToBottom();
        }
    };

    // --- Lifecycle hooks ---
    onMounted(() => {
    if (messageInput.value) {
        messageInput.value.focus();
    }
    });
</script>

<style scoped>
    .chat-container::-webkit-scrollbar {
    width: 6px;
    }
    .chat-container::-webkit-scrollbar-track {
    background: #f8f9fa;
    border-radius: 10px;
    }
    .chat-container::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #a855f7, #6366f1);
    border-radius: 10px;
    }
    .chat-container::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #9333ea, #4f46e5);
    }

    /* Animation pour les messages */
    .group {
    animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    /* Style pour le textarea auto-resize */
    textarea {
    resize: none;
    overflow-y: hidden;
    min-height: 24px;
    max-height: 120px;
    }
</style>