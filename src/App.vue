<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ScrollToTop from './components/ui/ScrollToTop.vue';
  import GoToChatButton from './components/ui/GoToChatButton.vue';

  const route = useRoute()
  const isOnChatPage = computed(() => route.name === 'Chat')

</script>


<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
  <GoToChatButton v-if="!isOnChatPage" />
  <ScrollToTop />
</template>


<style scoped>

</style>
