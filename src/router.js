import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CartaView from './views/CartaView.vue'
import EligeTuMesaView from './views/EligeTuMesaView.vue'
import ContactoView from './views/ContactoView.vue'
import AvisoLegalView from './views/AvisoLegalView.vue'
import PoliticaPrivacidadView from './views/PoliticaPrivacidadView.vue'
import PoliticaCookiesView from './views/PoliticaCookiesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/carta',
    name: 'carta',
    component: CartaView,
  },
  {
    path: '/elige-tu-mesa',
    name: 'elige-tu-mesa',
    component: EligeTuMesaView,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView,
  },
  {
    path: '/aviso-legal',
    name: 'aviso-legal',
    component: AvisoLegalView,
  },
  {
    path: '/politica-de-privacidad',
    name: 'politica-de-privacidad',
    component: PoliticaPrivacidadView,
  },
  {
    path: '/politica-de-cookies',
    name: 'politica-de-cookies',
    component: PoliticaCookiesView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
