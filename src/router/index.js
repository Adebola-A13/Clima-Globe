import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ApiView from '../views/ApiView.vue'
import ChatView from '@/views/ChatView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta :{ 
      title : 'Home - ClimaGlobe'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta :{
      title : 'About - ClimaGlobe'
    }
  },
  {
    path: '/api',
    name: 'Api',
    component: ApiView,
    meta :{
      title : 'API - ClimaGlobe'
    }
  },
  {
    path : '/chat',
    name : 'Chat',
    component : ChatView,
    meta :{
      title : 'DeepSeek Chat - ClimaGlobe'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Garde de navigation pour changer le titre de la page
router.beforeEach((to, from, next) => {
  // Mettre à jour le titre de la page
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'ClimaGlobe'
  }
  
  // Forcer le rafraîchissement du favicon
  const favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
  if (favicon) {
    const href = favicon.href
    favicon.href = ''
    setTimeout(() => {
      favicon.href = href
    }, 10)
  }
  
  next()
})

export default router