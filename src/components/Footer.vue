<template>
<footer class="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
            <div class="container mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center space-x-2">
                                <router-link to="/" class="flex items-center">
                                    <img src="@/assets/image/Logo.png" alt="ClimaGlobe Logo" class="h-10 w-auto" />
                                </router-link>
                            </div>
                            <div class="flex justify-between items-center mt-2 text-xs text-gray-400 px-1">
                                <span>By Ibrahim ADEHAN </span>
                            </div>
                        </div>
                        <p class="text-gray-400 mt-2">Explore the world and its weather</p>
                    </div>
                    <div class="flex space-x-6">
                        <!-- GitHub SVG -->
                        <a href="https://github.com/Adebola-A13/Clima-Globe" class="text-gray-400 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.609-2.807 5.624-5.479 5.921.429.369.823 1.096.823 2.21v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <!-- Mail SVG -->
                        <a href="mailto:ibrahim.adehan@imsp-uac.org,aeman.adehan@gmail.com" class="text-gray-400 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.25 4.5A2.25 2.25 0 004.5 6.75h15a2.25 2.25 0 002.25-2.25v0a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 002.25 4.5v0zM21 8.25l-9 6-9-6V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25z"/>
                            </svg>
                        </a>
                        <!-- LinkedIn SVG -->
                        <a href="https://www.linkedin.com/in/adehan-ibrahim-126675355" class="text-gray-400 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.46-2.154 2.969v5.698h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.558 2.839-1.558 3.036 0 3.599 2 3.599 4.594v5.597z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p class="text-gray-400 text-sm">
                        © {{ currentYear }} ClimaGlobe. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Custom styles if needed */
</style>