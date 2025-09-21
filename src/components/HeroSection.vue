<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 text-center">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Explore Countries & Weather</h2>
      <p class="text-xl text-gray-600 mb-8">
        Discover detailed country information and real-time weather forecasts in one place
      </p>

      <!-- Search Bar -->
      <div class="relative max-w-xl mx-auto">
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Enter a country name (in English)..."
          class="w-full py-4 px-6 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition search-bar"
        />
        <button
          @click="handleSearch"
          class="absolute right-2 top-2 bg-indigo-950 hover:bg-indigo-700 text-white p-2 rounded-full transition"
          :disabled="loading"
          aria-label="Search for a country"
        >
          <div v-if="loading" class="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
          <svg v-else xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-8 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        </button>
      </div>

      <!-- Loading, Error & Results Display -->
      <div class="mt-8">
        <div v-if="loading" class="flex justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>

        <!-- Message d'avertissement personnalisé -->
        <div v-if="error" class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded" role="alert">
          <p class="font-bold">Please Note</p>
          <p>{{ error }}</p>
          <p class="mt-2 text-sm">Tip: Use our chat feature or an online translator to find the English name of the country.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['search']);

const searchQuery = ref('');

const handleSearch = () => {
  const query = searchQuery.value.trim();
  if (query) {
    emit('search', query);
  }
};
</script>

<style scoped>
/* Optionnel: Ajouter du style pour l'animation de chargement ou autres éléments */
</style>