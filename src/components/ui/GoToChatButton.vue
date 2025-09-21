<!--
  ====================================================================================
  COMPONENT: GoToChatButton.vue
  ====================================================================================

  @description: Bouton flottant qui redirige vers la page de chat
  @features: Animation fluide, responsive, icône héroïcons, ferme le menu mobile
  @author: Équipe Data-For-Earth
  @created: 2025
  ====================================================================================
-->

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="transform scale-0 opacity-0 translate-y-4"
    enter-to-class="transform scale-100 opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100 translate-y-0"
    leave-to-class="transform scale-0 opacity-0 translate-y-4"
  >
    <button
      @click="goToChat"
      class="fixed bottom-20 right-6 z-50 bg-blue-600 hover:bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:ring-offset-2"
      aria-label="Aller au chat d'assistance"
      title="Chatbot Assistance"
    >
      <ChatBubbleOvalLeftIcon class="h-6 w-6 transform group-hover:scale-110 transition-transform duration-200" />

      <!-- Effet de cercle au hover -->
      <div class="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/outline'

/**
 * ====================================================================================
 * COMPOSABLES & REACTIVE DATA
 * ====================================================================================
 */
const router = useRouter()
const showButton = ref(true) // Toujours visible, ou tu peux le conditionner si besoin

/**
 * ====================================================================================
 * METHODS
 * ====================================================================================
 */

/**
 * Ferme le menu mobile (si tu utilises une ref ou un store)
 * → À adapter selon ton implémentation réelle (Pinia, ref parent, etc.)
 */
const closeMobileMenu = () => {
  // Exemple avec un event global (à remplacer selon ton système)
  // window.dispatchEvent(new CustomEvent('close-mobile-menu'))
  
  // OU si tu utilises un store Pinia :
  // const menuStore = useMenuStore()
  // menuStore.closeMobileMenu()

  // OU si tu passes une méthode via props/emit → ici on le laisse vide pour l'exemple
  console.log('Fermeture du menu mobile (à implémenter)')
}

/**
 * Redirige vers la page de chat
 */
const goToChat = () => {
  closeMobileMenu() // Ferme le menu mobile si ouvert
  router.push('/chat') // Redirection vers la route /chat
}

/**
 * ====================================================================================
 * LIFECYCLE HOOKS (optionnel ici, mais utile si tu veux cacher le bouton sur certaines pages)
 * ====================================================================================
 */
// Exemple : Cacher le bouton sur la page /chat
/*
onMounted(() => {
  const updateVisibility = () => {
    showButton.value = router.currentRoute.value.path !== '/chat'
  }
  updateVisibility()
  router.afterEach(updateVisibility)
})
*/
</script>

<style scoped>
/* Styles supplémentaires pour les animations plus fluides */
button {
  backdrop-filter: blur(10px);
}

/* Animation du bouton au survol */
button:hover {
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

/* Responsive pour mobile */
@media (max-width: 640px) {
  button {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem;
  }
}
</style>