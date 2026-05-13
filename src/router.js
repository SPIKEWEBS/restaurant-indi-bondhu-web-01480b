import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/carta',
    name: 'carta',
    component: () => import('./views/CartaView.vue'),
  },
  {
    path: '/elige-tu-mesa',
    name: 'elige-tu-mesa',
    component: () => import('./views/EligeTuMesaView.vue'),
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('./views/ContactoView.vue'),
  },
  {
    path: '/aviso-legal',
    name: 'aviso-legal',
    component: () => import('./views/AvisoLegalView.vue'),
  },
  {
    path: '/politica-de-privacidad',
    name: 'politica-de-privacidad',
    component: () => import('./views/PoliticaPrivacidadView.vue'),
  },
  {
    path: '/politica-de-cookies',
    name: 'politica-de-cookies',
    component: () => import('./views/PoliticaCookiesView.vue'),
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
