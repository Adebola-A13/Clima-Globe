<template>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto mt-8">
        <!-- Header avec drapeau et nom -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div class="flex flex-col md:flex-row items-center gap-6">
                <img
                    v-if="country.flags"
                    :src="country.flags.png"
                    :alt="country.flags.alt || `Flag of ${country.name.common}`"
                    class="w-32 h-24 object-contain border-2 border-white rounded-lg"
                />
                <div>
                    <h1 class="text-4xl font-bold">{{ country.name.common }}</h1>
                    <p class="text-xl opacity-90">{{ country.name.official }}</p>
                </div>
            </div>
        </div>

        <div class="p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Colonne de gauche -->
                <div class="space-y-6">
                    <!-- Informations de base -->
                    <div class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Basic Information</h3>
                        <div class="space-y-2">
                            <p><span class="font-medium">Capital:</span> {{ country.capital?.[0] || 'N/A' }}</p>
                            <p><span class="font-medium">Population:</span> {{ formatNumber(country.population) || 'N/A' }}</p>
                            <p><span class="font-medium">Area:</span> {{ formatNumber(country.area) }} km²</p>
                            <p><span class="font-medium">Region:</span> {{ country.region || 'N/A' }}</p>
                            <p><span class="font-medium">Subregion:</span> {{ country.subregion || 'N/A' }}</p>
                            <p><span class="font-medium">Continents:</span> {{ country.continents?.join(', ') || 'N/A' }}</p>
                        </div>
                    </div>

                    <!-- Codes et identifiants -->
                    <div class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Codes & Identifiers</h3>
                        <div class="space-y-2">
                            <p><span class="font-medium">CCA2:</span> {{ country.cca2 || 'N/A' }}</p>
                            <p><span class="font-medium">CCA3:</span> {{ country.cca3 || 'N/A' }}</p>
                            <p><span class="font-medium">CCN3:</span> {{ country.ccn3 || 'N/A' }}</p>
                            <p><span class="font-medium">CIOC:</span> {{ country.cioc || 'N/A' }}</p>
                            <p><span class="font-medium">TLD:</span> {{ country.tld?.join(', ') || 'N/A' }}</p>
                        </div>
                    </div>

                    <!-- Langues -->
                    <div v-if="country.languages" class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Languages</h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="(language, code) in country.languages"
                                :key="code"
                                class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >
                                {{ language }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Colonne de droite -->
                <div class="space-y-6">
                    <!-- Devises -->
                    <div v-if="country.currencies" class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Currencies</h3>
                        <div class="space-y-2">
                            <div v-for="(currency, code) in country.currencies" :key="code">
                                <p><span class="font-medium">{{ code }}:</span> {{ currency.name }} ({{ currency.symbol || 'N/A' }})</p>
                            </div>
                        </div>
                    </div>

                    <!-- Indicatif téléphonique -->
                    <div v-if="country.idd" class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Phone Code</h3>
                        <p>{{ country.idd.root }}{{ country.idd.suffixes?.[0] || '' }}</p>
                    </div>

                    <!-- Timezones -->
                        <div v-if="country.timezones" class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Timezones</h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="timezone in country.timezones"
                                :key="timezone"
                                class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                >
                                {{ timezone }}
                            </span>
                        </div>
                    </div>

                    <!-- Frontières -->
                    <div v-if="country.borders" class="bg-gray-50 rounded-lg p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Border Countries</h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="border in country.borders"
                                :key="border"
                                class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                                >
                                {{ border }}
                            </span>
                        </div>
                    </div>

                    <!-- Coordonnées -->
                    <div v-if="country.latlng" class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Coordinates</h3>
                        <p>Latitude: {{ country.latlng[0] }}, Longitude: {{ country.latlng[1] }}</p>
                    </div>
                </div>
            </div>

            <!-- Sections supplémentaires -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <!-- Cartes -->
                <div v-if="country.maps" class="bg-gray-50 rounded-lg p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Maps</h3>
                    <div class="space-y-2">
                        <a :href="country.maps.googleMaps" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                            Google Maps
                        </a>
                        <br>
                        <a :href="country.maps.openStreetMaps" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                            OpenStreetMap
                        </a>
                    </div>
                </div>

                <!-- Démographie -->
                <div v-if="country.demonyms" class="bg-gray-50 rounded-lg p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Nationality</h3>
                    <div class="space-y-2">
                        <p v-for="(demonym, lang) in country.demonyms" :key="lang">
                            <span class="font-medium">{{ getLanguageName(lang) }}:</span> 
                            {{ demonym.m }} ( M ), {{ demonym.f }} ( F )
                        </p>
                    </div>
                </div>
            </div>

            <!-- Autres informations -->
            <div class="mt-8 bg-gray-50 rounded-lg p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Additional Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <p><span class="font-medium">independent country:</span> {{ country.independent ? 'Yes' : 'No' }}</p>
                    <p><span class="font-medium">UN Member:</span> {{ country.unMember ? 'Yes' : 'No' }}</p>
                    <p><span class="font-medium">Landlocked:</span> {{ country.landlocked ? 'Yes' : 'No' }}</p>
                    <p><span class="font-medium">Start of Week:</span> {{ country.startOfWeek }}</p>
                    <p v-if="country.fifa"><span class="font-medium">FIFA Code:</span> {{ country.fifa }}</p>
                    <p v-if="country.gini"><span class="font-medium">Gini Coefficient:</span> {{ Object.values(country.gini)[0] }} ({{ Object.keys(country.gini)[0] }})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        country: {
            type: Object,
            required: true
        }
        });

        // Helper functions
        const formatNumber = (number) => {
        if (!number) return 'N/A';
        return new Intl.NumberFormat().format(number);
    };

    const getLanguageName = (code) => {
        const languageNames = {
            'eng': 'English',
            'fra': 'French',
            'spa': 'Spanish',
            'deu': 'German',
            'ita': 'Italian',
            'por': 'Portuguese',
            'nld': 'Dutch',
            'rus': 'Russian',
            'ara': 'Arabic',
            'jpn': 'Japanese',
            'kor': 'Korean',
            'zho': 'Chinese'
            // Ajoutez d'autres codes si nécessaire
        };
        return languageNames[code] || code;
    };
</script>

<style scoped>  
    /* Styles supplémentaires si nécessaire */
</style>