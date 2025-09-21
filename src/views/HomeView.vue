<template>
  <div>
    <HeroSection 
      @search="fetchCountryData"
      :loading="loading"
      :error="error"
    />
    <CountryDetails v-if="countryData" :country="countryData" />
    <CountryMeteo v-if="countryData" :weatherData="weatherData" :city="countryData?.name?.common || ''" />
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
