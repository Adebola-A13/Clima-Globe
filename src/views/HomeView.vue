<template>
  <div>
    <HeroSection 
      @search="fetchCountryData"
      :loading="loading"
      :error="error"
    />
    <CountryDetails v-if="countryData" :country="countryData" />
    <CountryMeteo v-if="countryData" :weatherData="weatherData" :city="countryData?.name?.common || ''" />
    
    <!-- Image SVG animée affichée quand aucun pays n'est sélectionné -->
    <div v-if="!countryData && !loading" class="flex justify-center items-center my-16">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md">
        <!-- Arrière-plan -->
        <rect width="400" height="300" fill="#1a1a2e"/>
        
        <!-- Étoiles scintillantes -->
        <circle cx="50" cy="40" r="1" fill="#fff">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="150" cy="30" r="1" fill="#fff">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="320" cy="50" r="1" fill="#fff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Écran d'ordinateur -->
        <rect x="80" y="120" width="240" height="140" rx="8" fill="#2d3748" stroke="#4a5568" stroke-width="3"/>
        <rect x="90" y="130" width="220" height="120" fill="#1a202c"/>
        
        <!-- Code sur l'écran -->
        <text x="100" y="150" font-family="monospace" font-size="8" fill="#68d391">{ Merci de </text>
        <text x="110" y="165" font-family="monospace" font-size="8" fill="#90cdf4">  visiter </text>
        <text x="110" y="180" font-family="monospace" font-size="8" fill="#fbb6ce">   CLIMAGLOBE  </text>
        <text x="110" y="195" font-family="monospace" font-size="8" fill="#faf089">  Bonne visite </text>
        <text x="100" y="210" font-family="monospace" font-size="8" fill="#68d391">};</text>
        
        <!-- Curseur clignotant -->
        <rect x="130" y="205" width="1" height="10" fill="#68d391">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </rect>
        
        <!-- Personnage du développeur -->
        <g transform="translate(200,80)">
          <!-- Tête -->
          <circle cx="0" cy="0" r="25" fill="#fdbcb4"/>
          
          <!-- Cheveux -->
          <path d="M-20,-15 Q0,-35 20,-15 Q15,-25 0,-25 Q-15,-25 -20,-15" fill="#8b4513"/>
          
          <!-- Yeux contents -->
          <path d="M-12,-5 Q-8,-10 -4,-5" stroke="#2d3748" stroke-width="2" fill="none"/>
          <path d="M4,-5 Q8,-10 12,-5" stroke="#2d3748" stroke-width="2" fill="none"/>
          
          <!-- Sourire -->
          <path d="M-10,8 Q0,18 10,8" stroke="#2d3748" stroke-width="2" fill="none">
            <animate attributeName="d" values="M-10,8 Q0,18 10,8;M-12,8 Q0,20 12,8;M-10,8 Q0,18 10,8" dur="3s" repeatCount="indefinite"/>
          </path>
          
          <!-- Corps -->
          <rect x="-20" y="25" width="40" height="50" rx="5" fill="#4299e1"/>
          
          <!-- Bras -->
          <ellipse cx="-25" cy="35" rx="8" ry="15" fill="#fdbcb4">
            <animateTransform attributeName="transform" type="rotate" values="0 -25 35;10 -25 35;0 -25 35" dur="2s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="25" cy="35" rx="8" ry="15" fill="#fdbcb4">
            <animateTransform attributeName="transform" type="rotate" values="0 25 35;-10 25 35;0 25 35" dur="2s" repeatCount="indefinite"/>
          </ellipse>
          
          <!-- Jambes -->
          <rect x="-15" y="75" width="12" height="25" fill="#2d3748"/>
          <rect x="3" y="75" width="12" height="25" fill="#2d3748"/>
        </g>
        
        <!-- Tasse de café avec vapeur -->
        <g transform="translate(320,180)">
          <ellipse cx="0" cy="20" rx="12" ry="8" fill="#8b4513"/>
          <rect x="-10" y="10" width="20" height="15" fill="#d69e2e"/>
          <path d="M10,15 Q20,15 20,25 Q20,35 10,35" stroke="#8b4513" stroke-width="2" fill="none"/>
          
          <!-- Vapeur animée -->
          <path d="M-5,5 Q-3,0 -5,-5" stroke="#e2e8f0" stroke-width="1" fill="none" opacity="0.7">
            <animate attributeName="d" values="M-5,5 Q-3,0 -5,-5;M-5,5 Q-7,0 -5,-5;M-5,5 Q-3,0 -5,-5" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M0,5 Q2,0 0,-5" stroke="#e2e8f0" stroke-width="1" fill="none" opacity="0.7">
            <animate attributeName="d" values="M0,5 Q2,0 0,-5;M0,5 Q-2,0 0,-5;M0,5 Q2,0 0,-5" dur="1.5s" repeatCount="indefinite"/>
          </path>
          <path d="M5,5 Q7,0 5,-5" stroke="#e2e8f0" stroke-width="1" fill="none" opacity="0.7">
            <animate attributeName="d" values="M5,5 Q7,0 5,-5;M5,5 Q3,0 5,-5;M5,5 Q7,0 5,-5" dur="2.5s" repeatCount="indefinite"/>
          </path>
        </g>
        
        <!-- Particules de bonheur -->
        <g>
          <circle cx="150" cy="60" r="2" fill="#fbb6ce" opacity="0.8">
            <animate attributeName="cy" values="60;40;60" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="250" cy="70" r="3" fill="#90cdf4" opacity="0.6">
            <animate attributeName="cy" values="70;50;70" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="180" cy="50" r="2" fill="#faf089" opacity="0.7">
            <animate attributeName="cy" values="50;30;50" dur="5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;0.1;0.7" dur="5s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeroSection from '@/components/HeroSection.vue'
import CountryDetails from '@/components/CountryDetails.vue';
import CountryMeteo from '@/components/CountryMeteo.vue';

const loading = ref(false);
const error = ref(null);
const countryData = ref(null);
const weatherData = ref(null);

const fetchWeatherData = async (latitude, longitude, timezone) => {
  try {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,surface_pressure&hourly=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=${encodeURIComponent(timezone)}`
    );

    if (!weatherResponse.ok) {
      console.warn("Weather API request failed:", weatherResponse.status);
      return null;
    }

    const weatherJson = await weatherResponse.json();
    console.log("Weather data received:", weatherJson);
    return weatherJson;
  } catch (err) {
    console.error("Weather fetch error:", err);
    return null;
  }
};

const fetchCountryData = async (query) => {
  if (!query) {
    error.value = 'Please enter a country name.';
    return;
  }

  loading.value = true;
  error.value = null;
  countryData.value = null;
  weatherData.value = null;

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`We couldn't find a country named "${query}". Please make sure the name is in English (e.g., "France", "Germany", "Japan").`);
      }
      throw new Error(`API request failed with status ${response.status}.`);
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error(`We couldn't find a country named "${query}". Please make sure the name is in English (e.g., "France", "Germany", "Japan").`);
    }

    countryData.value = data[0];
    console.log('Country data received:', countryData.value);

    // Récupération des données météo
    if (countryData.value.latlng && countryData.value.latlng.length >= 2) {
      const lat = countryData.value.latlng[0];
      const lng = countryData.value.latlng[1];
      const tz = countryData.value.timezones?.[0] || 'GMT';

      console.log(`Fetching weather for ${lat}, ${lng} (timezone: ${tz})`);
      const weather = await fetchWeatherData(lat, lng, tz);
      weatherData.value = weather;
    } else {
      console.warn("Coordinates not found for this country, skipping weather fetch.");
      weatherData.value = null;
    }

  } catch (err) {
    console.error("Fetch error:", err);
    error.value = err.message;
    countryData.value = null;
    weatherData.value = null;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
