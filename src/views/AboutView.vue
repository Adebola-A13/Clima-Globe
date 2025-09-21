<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="container mx-auto px-6 py-12">
      <!-- Header Section -->
      <section class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl mb-6">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          About <span class="text-indigo-600">ClimaGlobe</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Your trusted partner for global weather data,
          offering accurate forecasts and real-time climate information
          to inform your daily decisions.
        </p>
      </section>

      <!-- Mission Section -->
      <section class="mb-16">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-12">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h2 class="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                At ClimaGlobe, we democratize access to professional weather data.
                Our mission is to transform complex climate data
                into accessible and actionable information.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p class="text-gray-600">Accurate and continuously updated weather data</p>
                </div>
                
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p class="text-gray-600">Intuitive interface for all levels of expertise</p>
                </div>
                
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p class="text-gray-600">Robust API for integration into your applications</p>
                </div>
              </div>

              <h2 class="text-2xl font-bold text-gray-900 mt-8">Why choose ClimaGlobe?</h2>
              <p class="text-lg text-gray-600 leading-relaxed mb-6 mt-6">
                Features designed to meet all your weather needs
                with accurate forecasts up to 14 days, an integrable API, and interactive analyses.
              </p>

            </div>
            
            <div class="bg-gradient-to-br from-indigo-950 to-indigo-950 p-12 flex items-center justify-center">
              <div class="text-center">
                <div class="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">
                  Accurate data,<br />informed decisions
                </h3>
                <p class="text-blue-100">
                  Power your projects with our professional-quality weather data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <!-- CTA Section -->
      <section class="text-center">
        <div class="bg-gradient-to-r from-indigo-950 to-indigo-950 rounded-3xl p-12 shadow-2xl">
          <div class="max-w-3xl mx-auto">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            
            <h2 class="text-4xl font-bold text-white mb-6">
              Ready to transform your weather approach?
            </h2>
            <p class="text-xl text-blue-100 mb-10 leading-relaxed">
              Join over 10,000 users who trust ClimaGlobe
              for their critical weather data needs.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link 
                to="/" 
                class="group bg-white text-indigo-950 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <span class="mr-2">Get Started Now</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
              
              <router-link 
                to="/api" 
                class="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-950 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span>Explore the API</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for this static page
</script>

<style scoped>
/* Custom animations and transitions */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>