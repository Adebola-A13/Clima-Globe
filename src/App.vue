<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ScrollToTop from './components/ui/ScrollToTop.vue';
  import GoToChatButton from './components/ui/GoToChatButton.vue';

  const route = useRoute()
  const isOnChatPage = computed(() => route.name === 'Chat')

</script>


<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
  <!-- Conteneur unique pour les deux boutons, positionné en bas à droite -->
  <div
    v-if="!isOnChatPage"
    class="fixed bottom-6 right-6 z-50 flex space-x-3 md:space-x-4"
  >
    <GoToChatButton />
    <ScrollToTop />
  </div>

  <!-- Si tu veux quand même afficher ScrollToTop sur la page /chat (optionnel) -->
  <div v-if="isOnChatPage" class="fixed bottom-6 right-6 z-50">
    <ScrollToTop />
  </div>
</template>


<style scoped>

</style>
