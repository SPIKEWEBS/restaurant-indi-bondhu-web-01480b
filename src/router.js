import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carta/',
    name: 'carta',
    component: () => import('./views/CartaView.vue')
  },
  {
    path: '/elige-tu-mesa/',
    name: 'elige-tu-mesa',
    component: () => import('./views/EligeTuMesaView.vue')
  },
  {
    path: '/contacto/',
    name: 'contacto',
    component: () => import('./views/ContactoView.vue')
  },
  {
    path: '/aviso-legal/',
    name: 'aviso-legal',
    component: () => import('./views/AvisoLegalView.vue')
  },
  {
    path: '/politica-de-privacidad/',
    name: 'politica-de-privacidad',
    component: () => import('./views/PoliticadeprivacidadView.vue')
  },
  {
    path: '/politica-de-cookies/',
    name: 'politica-de-cookies',
    component: () => import('./views/PoliticadecookiesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
