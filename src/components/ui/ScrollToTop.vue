<!--
  ====================================================================================
  COMPONENT: ScrollToTop.vue
  ====================================================================================

  @description: Bouton de retour en haut de page qui apparaît lors du défilement
  @features: Animation fluide, responsive, icône héroïcons
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
      v-if="showButton"
      @click="scrollToTop"
      class="bg-blue-600 hover:bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:ring-offset-2"
      aria-label="Retour en haut de page"
      title="Retour en haut de page"
    >
      <ChevronUpIcon class="h-6 w-6 transform group-hover:scale-110 transition-transform duration-200" />

      <!-- Effet de cercle au hover -->
      <div class="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ChevronUpIcon } from '@heroicons/vue/24/outline'

/**
 * ====================================================================================
 * REACTIVE DATA
 * ====================================================================================
 */
const showButton = ref(false)
const scrollThreshold = 300 // Seuil de défilement en pixels

/**
 * ====================================================================================
 * METHODS
 * ====================================================================================
 */

/**
 * Gestion du défilement pour afficher/masquer le bouton
 */
const handleScroll = () => {
  showButton.value = window.scrollY > scrollThreshold
}

/**
 * Fonction pour remonter en haut de page avec animation fluide
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/**
 * ====================================================================================
 * LIFECYCLE HOOKS
 * ====================================================================================
 */
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
