<!-- src/components/CountryMeteo.vue -->
<template>
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="bg-white rounded-xl  p-4 sm:p-6 mt-6">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center sm:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
                Weather in {{ city || 'Unknown' }}
            </h3>

            <!-- Current Weather Card -->
            <div v-if="weatherData && weatherData.current" class="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-xl p-4 sm:p-6 mb-6 relative overflow-hidden">
                <!-- Background pattern (subtle) -->
                <div class="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="1" fill="currentColor" class="text-gray-400" />
                    </svg>
                </div>
                
                <div class="relative z-10">
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <!-- Température à Gauche -->
                        <div class="text-center lg:text-left">
                            <p class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">{{ Math.round(weatherData.current.temperature_2m) }}°</p>
                            <p class="text-sm sm:text-base text-gray-600 mt-1">Feels like {{ Math.round(weatherData.current.temperature_2m * 0.9) }}°</p>
                            <p class="text-base sm:text-lg font-medium text-gray-700 mt-2">{{ getWeatherDescription(weatherData.current.temperature_2m) }}</p>
                        </div>
                        
                        <!-- Détails à Droite -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto">
                            <div class="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4 text-center">
                                <p class="text-xs sm:text-sm text-gray-500 mb-1">Humidity</p>
                                <p class="text-lg sm:text-xl font-semibold text-gray-800">{{ weatherData.current.relative_humidity_2m || 'N/A' }}<span class="text-sm">%</span></p>
                            </div>
                            <div class="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4 text-center">
                                <p class="text-xs sm:text-sm text-gray-500 mb-1">Wind</p>
                                <p class="text-lg sm:text-xl font-semibold text-gray-800">{{ Math.round(weatherData.current.wind_speed_10m) }}<span class="text-sm"> km/h</span></p>
                            </div>
                            <div class="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4 text-center">
                                <p class="text-xs sm:text-sm text-gray-500 mb-1">Pressure</p>
                                <p class="text-lg sm:text-xl font-semibold text-gray-800">{{ Math.round(weatherData.current.surface_pressure) || 'N/A' }}<span class="text-sm"> hPa</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:text-right mt-4 text-sm text-gray-600">
                        Last updated: {{ formatTime(weatherData.current.time) }}
                    </div>
                </div>
            </div>

            <!-- 7-Day Forecast -->
            <div v-if="weatherData && weatherData.daily?.time?.length" class="mb-6">
                <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center sm:text-left">7-Day Forecast</h4>
                
                <!-- Mobile: Grid layout pour économiser l'espace -->
                <div class="block sm:hidden">
                    <div class="grid grid-cols-2 gap-3">
                        <div
                            v-for="(time, index) in weatherData.daily.time.slice(0, 7)"
                            :key="index"
                            class="bg-gray-50 rounded-lg p-3 text-center"
                        >
                            <p class="text-xl font-medium text-gray-700">
                                {{ getDayName(time) }}
                            </p>
                            <p class="text-xs text-gray-500">
                                {{ new Date(time).getDate() }}
                            </p>
                            <div class="flex justify-center items-center gap-2 mt-1">
                                <p class="text-base font-bold text-blue-600">
                                    {{ Math.round(weatherData.daily.temperature_2m_max[index]) }}°
                                </p>
                                <p class="text-sm text-gray-500">
                                    {{ Math.round(weatherData.daily.temperature_2m_min[index]) }}°
                                </p>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">
                                {{ getDailyWeatherCondition(weatherData.daily.temperature_2m_max[index]) }}
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Desktop/Tablet: Scroll horizontal -->
                <div class="hidden sm:block ">
                    <div class="overflow-x-auto pb-2">
                        <div class="flex space-x-3 min-w-max">
                            <div
                                v-for="(time, index) in weatherData.daily.time.slice(0, 7)"
                                :key="index"
                                class="flex-shrink-0 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-4 text-center min-w-[150px]"
                            >
                                <p class="text-xl font-medium text-gray-700">
                                    {{ getDayName(time) }}
                                </p>
                                <p class="text-xs text-gray-500 mb-2">
                                    {{ new Date(time).getDate() }}
                                </p>
                                <p class="text-xl font-bold text-blue-600">
                                    {{ Math.round(weatherData.daily.temperature_2m_max[index]) }}°
                                </p>
                                <p class="text-sm text-gray-500">
                                    {{ Math.round(weatherData.daily.temperature_2m_min[index]) }}°
                                </p>
                                <p class="text-xs text-gray-500 mt-2">
                                    {{ getDailyWeatherCondition(weatherData.daily.temperature_2m_max[index]) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Error State -->
            <div v-else-if="weatherData === null" class="text-center text-gray-500 py-4">
                Weather data is not available for this location.
            </div>
            <div v-else class="text-center text-gray-500 py-4">
                Loading weather data...
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        weatherData: {
            type: [Object, null],
            default: null
        },
        city: {
            type: String,
            default: ''
        }
    });

    // Helper functions
    const formatTime = (isoString) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getDayName = (isoString) => {
        if (!isoString) return 'N/A';
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(isoString);
        return dayNames[date.getDay()];
    };

    const getDailyWeatherCondition = (maxTemp) => {
        // Simulation des conditions météo basées sur la température maximale
        if (!maxTemp) return 'N/A';
        
        if (maxTemp > 30) return 'Sunny';
        if (maxTemp > 25) return 'Partly Cloudy';
        if (maxTemp > 20) return 'Cloudy';
        if (maxTemp > 15) return 'Rainy';
        if (maxTemp > 10) return 'Cool';
        return 'Cold';
    };

    const getWeatherDescription = (temperature) => {
        if (!temperature) return 'N/A';
        
        if (temperature > 30) return 'Hot and Sunny';
        if (temperature > 25) return 'Warm';
        if (temperature > 20) return 'Pleasant';
        if (temperature > 15) return 'Mild';
        if (temperature > 10) return 'Cool';
        if (temperature > 0) return 'Cold';
        return 'Very Cold';
    };
</script>

<style scoped>
    /* Styles supplémentaires pour améliorer la responsivité */
    details > summary {
        outline: none;
    }
    details > summary::marker {
        color: #4b5563; /* gray-600 */
    }
    
    /* Amélioration du scroll horizontal sur mobile */
    .overflow-x-auto::-webkit-scrollbar {
        height: 6px;
    }
    
    .overflow-x-auto::-webkit-scrollbar-track {
        background: #f1f5f9;
        border-radius: 3px;
    }
    
    .overflow-x-auto::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 3px;
    }
    
    .overflow-x-auto::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
    }
    
    /* Animation subtle au hover */
    .transition-colors {
        transition: background-color 0.2s ease-in-out;
    }
    
    /* Responsive text sizing */
    @media (max-width: 480px) {
        .text-4xl {
            font-size: 2.5rem;
        }
    }
    
    @media (max-width: 360px) {
        .text-4xl {
            font-size: 2rem;
        }
    }
</style>
