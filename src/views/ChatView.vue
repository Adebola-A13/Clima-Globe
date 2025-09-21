<template>
    <div class="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl border border-slate-200/50 backdrop-blur-sm">
        <!-- Header avec gradient -->
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DeepSeek Chat
            </h3>
        <div class="flex items-center space-x-2 text-sm text-slate-500">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>En ligne</span>
        </div>
    </div>

    <!-- Messages avec design moderne -->
    <div ref="chatContainer" class="h-96 overflow-y-auto mb-6 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-inner">
        <div v-if="messages.length === 0" class="flex flex-col items-center justify-center h-full text-slate-400">
            <div class="text-6xl mb-4">💬</div>
            <p class="text-lg font-medium">Commencez la conversation</p>
            <p class="text-sm">Posez votre première question à DeepSeek</p>
        </div>

        <div v-for="(msg, i) in messages" :key="i" class="mb-4">
            <!-- Message utilisateur -->
            <div v-if="msg.role === 'user'" class="flex justify-end">
                <div class="max-w-xs lg:max-w-md px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl rounded-tr-sm shadow-lg">
                    <p class="text-sm font-medium">{{ msg.content }}</p>
                </div>
            </div>
            
            <!-- Message assistant -->
            <div v-else class="flex justify-start">
                <div class="max-w-xs lg:max-w-md px-4 py-3 bg-white border border-slate-200 rounded-2xl rounded-tl-sm shadow-lg">
                    <div class="flex items-start space-x-2">
                        <div class="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                            DS
                        </div>
                        <p class="text-sm text-slate-700 leading-relaxed">{{ msg.content }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Loader amélioré -->
        <div v-if="isLoading" class="flex justify-start mb-4">
            <div class="max-w-xs lg:max-w-md px-4 py-3 bg-white border border-slate-200 rounded-2xl rounded-tl-sm shadow-lg">
                <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    DS
                    </div>
                    <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Formulaire avec design moderne -->
    <form @submit.prevent="sendMessage" class="relative">
        <div class="flex items-center space-x-3 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg focus-within:ring-2 focus-within:ring-indigo-300 focus-within:border-transparent transition-all duration-200">
            <input
                v-model="userInput"
                type="text"
                placeholder="Tapez votre message..."
                class="flex-grow px-4 py-3 bg-transparent text-slate-700 placeholder-slate-400 focus:outline-none"
                :disabled="isLoading"
            />
            <button
                type="submit"
                class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                :disabled="isLoading || !userInput.trim()"
            >
                <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
        </div>
    </form>

    <!-- Erreur avec design moderne -->
    <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
        <div class="flex items-center space-x-2">
            <div class="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                </div>
                <p class="text-sm text-red-700 font-medium">{{ error }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, nextTick } from "vue";

    const messages = ref([]);
    const userInput = ref("");
    const isLoading = ref(false);
    const error = ref(null);
    const chatContainer = ref(null);

    const scrollToBottom = () => {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    };

    const sendMessage = async () => {
        const message = userInput.value.trim();
        if (!message) return;

        // Ajouter le message utilisateur
        messages.value.push({ role: "user", content: message });
        userInput.value = "";
        isLoading.value = true;
        error.value = null;

        await nextTick();
        scrollToBottom();

        try {
            const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: messages.value }),
            });

            if (!res.ok) throw new Error("Erreur API");

            const data = await res.json();
            const assistantMessage = data.choices?.[0]?.message?.content?.trim();

            if (assistantMessage) {
            messages.value.push({ role: "assistant", content: assistantMessage });
            } else {
            throw new Error("Pas de réponse reçue");
            }
        } catch (err) {
            console.error(err);
            error.value = err.message || "Erreur inconnue";
        } finally {
            isLoading.value = false;
            await nextTick();
            scrollToBottom();
        }
    };
</script>