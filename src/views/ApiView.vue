<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
    <div class="container mx-auto px-6 py-12">
      <!-- Header Section -->
      <section class="text-center mb-16">
        <!-- Conteneur flex pour centrer l'icône et le titre côte à côte -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <!-- Icône -->
          <div class="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>

          <!-- Titre -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center leading-tight mt-0">
            APIs <span class="text-indigo-600">Documentation</span>
          </h1>
        </div>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover the services that power ClimaGlobe. These are two public APIs seamlessly integrated to provide you with accurate, reliable, and real-time country and weather data, plus another API for the DeepSeek chatbot.
        </p>
      </section>

      <!-- API Documentation -->
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- REST Countries API -->
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">GET</span>
                  <h3 class="text-xl font-bold text-white mt-2">REST Countries API</h3>
                </div>
              </div>
              <p class="text-blue-100">Complete information on all countries in the world</p>
            </div>

            <div class="p-8">
              <div class="bg-gray-100 rounded-xl p-4 mb-6">
                <code class="text-sm font-mono text-gray-800 break-all">
                  https://restcountries.com/v3.1/name/{name}
                </code>
              </div>

              <h4 class="font-bold text-gray-900 mb-4">Extracted Data:</h4>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Official and common country name</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Capital and geographic coordinates</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Population and area</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Timezones and region</span>
                </div>
              </div>

              <div class="bg-gray-900 rounded-xl p-4">
                <div class="text-green-400 text-xs font-mono">
                  <div class="text-gray-500">// Example response</div>
                  <div>{</div>
                  <div class="ml-2">"name": {</div>
                  <div class="ml-4">"common": "France",</div>
                  <div class="ml-4">"official": "French Republic"</div>
                  <div class="ml-2">},</div>
                  <div class="ml-2">"capital": ["Paris"],</div>
                  <div class="ml-2">"population": 67391582,</div>
                  <div class="ml-2">"latlng": [46.0, 2.0]</div>
                  <div class="ml-2">etc......</div>
                  <div>}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Open-Meteo API -->
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-green-600 to-green-700 p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <div>
                  <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">GET</span>
                  <h3 class="text-xl font-bold text-white mt-2">Open-Meteo API</h3>
                </div>
              </div>
              <p class="text-green-100">Accurate and real-time weather data</p>
            </div>

            <div class="p-8">
              <div class="bg-gray-100 rounded-xl p-4 mb-6">
                <code class="text-xs font-mono text-gray-800 break-all">
                  https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lng}&current=...
                </code>
              </div>

              <h4 class="font-bold text-gray-900 mb-4">Parameters Used:</h4>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Latitude/longitude coordinates</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Current weather conditions</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Detailed hourly forecasts</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Local time zone</span>
                </div>
              </div>

              <div class="bg-gray-900 rounded-xl p-4">
                <div class="text-green-400 text-xs font-mono">
                  <div class="text-gray-500">// Example request</div>
                  <div>fetch(`api.open-meteo.com/v1/forecast?</div>
                  <div class="ml-2">latitude=48.86&</div>
                  <div class="ml-2">longitude=2.36&</div>
                  <div class="ml-2">current=temperature_2m,wind_speed&</div>
                  <div class="ml-2">timezone=Europe/Paris`)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Implementation -->
      <section class="mb-16">
        <div class="bg-white rounded-3xl shadow-xl p-10">
          <div class="flex items-center mb-8">
            <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h2 class="text-4xl font-bold text-gray-900">Technical Implementation</h2>
          </div>

          <div class="bg-gray-900 rounded-2xl p-8 mb-8">
            <div class="text-green-400 font-mono text-sm">
              <div class="text-yellow-400 mb-4">// API Integration Flow</div>

              <div class="mb-4">
                <div class="text-gray-500">// 1. Country Lookup</div>
                <div>const countryResponse = await fetch(</div>
                <div class="ml-4">`https://restcountries.com/v3.1/name/${countryName}`</div>
                <div>);</div>
                <div>const countryData = await countryResponse.json();</div>
              </div>

              <div class="mb-4">
                <div class="text-gray-500">// 2. Extract coordinates</div>
                <div>const [latitude, longitude] = countryData[0].latlng;</div>
                <div>const timezone = countryData[0].timezones[0];</div>
              </div>

              <div class="mb-4">
                <div class="text-gray-500">// 3. Weather Request</div>
                <div>const weatherUrl = `https://api.open-meteo.com/v1/forecast?` +</div>
                <div class="ml-4">`latitude=${latitude}&longitude=${longitude}&` +</div>
                <div class="ml-4">`current=temperature_2m,wind_speed_10m&` +</div>
                <div class="ml-4">`hourly=temperature_2m,precipitation&` +</div>
                <div class="ml-4">`timezone=${encodeURIComponent(timezone)}`;</div>
              </div>

              <div>
                <div class="text-gray-500">// 4. Process & Display</div>
                <div>const weatherData = await fetch(weatherUrl).then(r => r.json());</div>
                <div>return { country: countryData[0], weather: weatherData };</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why These APIs Section -->
      <section class="mb-16">
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-10">
          <div class="flex items-center mb-8">
            <div class="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h2 class="text-4xl font-bold text-gray-900">Why These APIs?</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Proven Reliability</h3>
                  <p class="text-gray-600">REST Countries and Open-Meteo are globally recognized services, used by thousands of applications.</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Free & Accessible</h3>
                  <p class="text-gray-600">Generous free tiers that more than cover the needs of an application like ClimaGlobe.</p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Perfect Complementarity</h3>
                  <p class="text-gray-600">The combination offers a complete view: detailed geographic data and precise weather.</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Excellent Documentation</h3>
                  <p class="text-gray-600">Well-documented APIs with clear examples, making development and maintenance easy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Support Section -->
      <section>
        <div class="bg-gradient-to-r from-indigo-950 to-indigo-950 rounded-3xl p-12 text-center shadow-2xl">
          <div class="max-w-4xl mx-auto">
            <div class="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions about our architecture?
            </h2>
            <p class="text-xl text-indigo-100 mb-10 leading-relaxed">
              This technical documentation explains the inner workings of ClimaGlobe in detail.
              Our team is available to answer your specific questions.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:ibrahim.adehan@imsp-uac.org,aeman.adehan@gmail.com"
                class="group bg-white text-indigo-600 px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Contact Us</span>
              </a>

              <a
                href="https://github.com/Adebola-A13/Clima-Globe"
                target="_blank"
                rel="noopener noreferrer"
                class="group border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for this documentation page
</script>

<style scoped>
/* Custom animations and smooth transitions */
code {
  font-family: 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  color: #374151;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for code blocks */
.font-mono::-webkit-scrollbar {
  height: 6px;
}

.font-mono::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.font-mono::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.font-mono::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Progress bars animation */
@keyframes progressFill {
  from { width: 0%; }
}

.bg-green-500, .bg-blue-500, .bg-purple-500 {
  animation: progressFill 1.5s ease-out;
}
</style>