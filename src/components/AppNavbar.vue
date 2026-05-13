<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__container">
      <RouterLink to="/" class="navbar__brand" aria-label="Bondhu Indian Premium Restaurant - Inicio">
        <span class="navbar__brand-name">BONDHU</span>
        <span class="navbar__brand-sub">Indian Premium Restaurant</span>
      </RouterLink>

      <nav class="navbar__nav" aria-label="Menú principal">
        <ul class="navbar__links">
          <li v-for="link in siteData.navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="navbar__link"
              :class="{ 'navbar__link--active': isActive(link.to) }"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--open': menuOpen }"
        @click="toggleMenu"
        aria-label="Abrir menú de navegación"
        :aria-expanded="menuOpen.toString()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav
      class="navbar__mobile"
      :class="{ 'navbar__mobile--open': menuOpen }"
      aria-label="Menú principal móvil"
    >
      <ul class="navbar__mobile-links">
        <li v-for="link in siteData.navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="navbar__mobile-link"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import siteData from '../data/siteData.js'

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

function handleScroll() {
  scrolled.value = window.scrollY > 30
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-navbar-bg);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(200, 169, 110, 0.18);
  transition:
    background var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 32px rgba(0, 0, 0, 0.12);
  border-bottom-color: rgba(200, 169, 110, 0.35);
}

.navbar__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.navbar__brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 1.1;
  transition: opacity var(--transition-fast);
}

.navbar__brand:hover {
  opacity: 0.85;
}

.navbar__brand-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1;
  background: linear-gradient(135deg, var(--color-primary) 0%, #e8c882 60%, var(--color-primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar__brand-sub {
  font-family: var(--font-body);
  font-size: 0.6rem;
  color: var(--color-text-muted);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 2px;
}

.navbar__nav {
  display: flex;
  align-items: center;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: var(--color-navbar-text);
  text-decoration: none;
  letter-spacing: 0.08em;
  font-weight: 600;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  border-bottom: 2px solid transparent;
  transition: all var(--transition-fast);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), #e8c882);
  border-radius: 2px;
  transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 72%;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-primary);
  background: rgba(200, 169, 110, 0.08);
}

/* Burger */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background var(--transition-fast);
}

.navbar__burger:hover {
  background: rgba(200, 169, 110, 0.08);
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-navbar-text);
  border-radius: 2px;
  transition: all var(--transition-base);
  will-change: transform;
}

.navbar__burger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: var(--color-primary);
}

.navbar__burger--open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar__burger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: var(--color-primary);
}

.navbar__mobile {
  display: none;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--color-border-gold);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__mobile--open {
  max-height: 420px;
}

.navbar__mobile-links {
  padding: var(--space-sm) 0;
}

.navbar__mobile-link {
  display: block;
  padding: 0.85rem var(--space-md);
  font-size: var(--font-size-sm);
  color: var(--color-navbar-text);
  text-decoration: none;
  letter-spacing: 0.07em;
  font-weight: 600;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  border-left: 3px solid transparent;
}

.navbar__mobile-link:hover {
  color: var(--color-primary);
  background: var(--color-surface);
  border-left-color: var(--color-primary);
  padding-left: calc(var(--space-md) + 8px);
}

@media (max-width: 900px) {
  .navbar__nav {
    display: none;
  }

  .navbar__burger {
    display: flex;
  }

  .navbar__mobile {
    display: flex;
  }
}
</style>
