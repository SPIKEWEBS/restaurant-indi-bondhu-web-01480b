<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__container">
      <!-- Logo / Brand -->
      <RouterLink to="/" class="navbar__brand" aria-label="Bondhu Indian Premium Restaurant – Inicio">
        <span class="navbar__brand-name">BONDHU</span>
        <span class="navbar__brand-sub">Indian Premium Restaurant</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="navbar__nav" aria-label="Menú principal">
        <RouterLink
          v-for="link in site.navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': $route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="navbar__toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú de navegación"
      >
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav
      class="navbar__mobile-menu"
      :class="{ 'navbar__mobile-menu--open': menuOpen }"
      aria-label="Menú principal móvil"
    >
      <RouterLink
        v-for="link in site.navLinks"
        :key="link.to"
        :to="link.to"
        class="navbar__mobile-link"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import site from '../data/siteData.js'

const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: background var(--transition-base), box-shadow var(--transition-base);
}

.navbar--scrolled {
  background: var(--navbar-bg);
  box-shadow: var(--shadow-md);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: var(--navbar-height);
}

/* Brand */
.navbar__brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 1.1;
}

.navbar__brand-name {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.08em;
}

.navbar__brand-sub {
  font-size: 0.65rem;
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Desktop nav */
.navbar__nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

.navbar__link {
  padding: 0.4rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--color-text);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-primary);
  background: rgba(139, 26, 26, 0.07);
}

/* Toggle */
.navbar__toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
}

.navbar__toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: background var(--transition-fast);
}

/* Mobile menu */
.navbar__mobile-menu {
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--transition-slow);
  border-top: 1px solid var(--color-border);
}

.navbar__mobile-menu--open {
  max-height: 320px;
}

.navbar__mobile-link {
  padding: 0.9rem var(--spacing-md);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.navbar__mobile-link:hover {
  color: var(--color-primary);
  background: var(--color-surface);
}

/* Responsive */
@media (min-width: 900px) {
  .navbar__nav {
    display: flex;
  }
  .navbar__toggle {
    display: none;
  }
}
</style>