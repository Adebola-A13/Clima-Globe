<template>
  <header class="bg-blue-950 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-2">
            <router-link to="/" class="flex items-center">
                <img src="@/assets/image/Logo.png" alt="ClimaGlobe Logo" class="h-10 w-auto" />
            </router-link>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6">
            <router-link 
                to="/" 
                class="text-xl text-neutre-20 hover:text-blue-500 transition"
                :class="{ 'text-blue-200': $route.name === 'Home' }"
            >
                Accueil
            </router-link>
            <router-link 
                to="/about" 
                class="text-xl text-neutre-20 hover:text-blue-500 transition"
                :class="{ 'text-blue-200': $route.name === 'About' }"
            >
                About
            </router-link>
            <router-link 
                to="/api" 
                class="text-xl text-neutre-20 hover:text-blue-500 transition"
                :class="{ 'text-blue-200': $route.name === 'Api' }"
            >
                API
            </router-link>
            <router-link 
                to="/chat" 
                class="text-xl text-neutre-20 hover:text-blue-500 transition"
                :class="{ 'text-blue-200': $route.name === 'Chat' }"
            >
                chatbot_Assistance
            </router-link>
        </div>


        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-white hover:text-blue-200 focus:outline-none"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-blue-500">
        <div class="flex flex-col space-y-3 pt-4">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="hover:text-blue-200 transition-colors font-medium"
            :class="{ 'text-blue-200': $route.name === 'Home' }"
          >
            Accueil
          </router-link>
          <router-link 
            to="/about" 
            @click="closeMobileMenu"
            class="hover:text-blue-200 transition-colors font-medium"
            :class="{ 'text-blue-200': $route.name === 'About' }"
          >
            À propos
          </router-link>
          <router-link 
            to="/api" 
            @click="closeMobileMenu"
            class="hover:text-blue-200 transition-colors font-medium"
            :class="{ 'text-blue-200': $route.name === 'Api' }"
          >
            API
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.router-link-active {
  color: rgb(191 219 254);
}
</style>