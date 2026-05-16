import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import CartaView from './views/CartaView.vue'
import EligetumesaView from './views/EligetumesaView.vue'
import ContactoView from './views/ContactoView.vue'
import AvisolegalView from './views/AvisolegalView.vue'
import PoliticadeprivacidadView from './views/PoliticadeprivacidadView.vue'
import PoliticadecookiesView from './views/PoliticadecookiesView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/carta/', component: CartaView },
  { path: '/elige-tu-mesa/', component: EligetumesaView },
  { path: '/contacto/', component: ContactoView },
  { path: '/aviso-legal/', component: AvisolegalView },
  { path: '/politica-de-privacidad/', component: PoliticadeprivacidadView },
  { path: '/politica-de-cookies/', component: PoliticadecookiesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
