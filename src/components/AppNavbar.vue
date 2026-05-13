<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__container container">
      <!-- Logo / Brand -->
      <RouterLink to="/" class="navbar__brand" aria-label="Bondhu Indian Premium Restaurant — Ir al inicio">
        <span class="navbar__brand-name">BONDHU</span>
        <span class="navbar__brand-sub">Indian Premium Restaurant</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="navbar__nav" aria-label="Menú principal">
        <ul class="navbar__list" role="list">
          <li v-for="link in site.navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="navbar__link"
              :aria-label="link.label"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="navbar__toggle"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú de navegación"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav
      class="navbar__mobile"
      :class="{ 'navbar__mobile--open': menuOpen }"
      aria-label="Menú móvil"
    >
      <ul class="navbar__mobile-list" role="list">
        <li v-for="link in site.navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="navbar__mobile-link"
            @click="menuOpen = false"
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
import site from '../data/siteData.js'

const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 40
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
  background: var(--navbar-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition-base), background var(--transition-base);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.97);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
}

/* Brand */
.navbar__brand {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-decoration: none;
  color: var(--color-secondary);
}
.navbar__brand-name {
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-primary);
}
.navbar__brand-sub {
  font-size: var(--fs-xs);
  letter-spacing: 0.08em;
  color: var(--color-text-light);
  text-transform: uppercase;
}

/* Desktop nav */
.navbar__nav {
  display: none;
}

.navbar__list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.navbar__link {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  font-size: var(--fs-sm);
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--color-secondary);
  text-transform: uppercase;
  border-radius: var(--border-radius-sm);
  transition: color var(--transition-fast), background var(--transition-fast);
  text-decoration: none;
}
.navbar__link:hover,
.navbar__link.router-link-active {
  color: var(--color-primary);
  background: rgba(200, 149, 42, 0.08);
}

/* Hamburger */
.navbar__toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  cursor: pointer;
  background: none;
  border: none;
}
.navbar__toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-secondary);
  border-radius: 2px;
  transition: background var(--transition-fast);
}
.navbar__toggle:hover .navbar__toggle-bar {
  background: var(--color-primary);
}

/* Mobile menu */
.navbar__mobile {
  display: none;
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid var(--color-border);
  padding: 1rem 0;
}
.navbar__mobile--open {
  display: block;
}
.navbar__mobile-list {
  display: flex;
  flex-direction: column;
}
.navbar__mobile-link {
  display: block;
  padding: 0.75rem 1.5rem;
  font-size: var(--fs-base);
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-secondary);
  text-transform: uppercase;
  text-decoration: none;
  transition: color var(--transition-fast), background var(--transition-fast);
}
.navbar__mobile-link:hover,
.navbar__mobile-link.router-link-active {
  color: var(--color-primary);
  background: rgba(200, 149, 42, 0.06);
}

/* Responsive */
@media (min-width: 900px) {
  .navbar__nav {
    display: flex;
  }
  .navbar__toggle {
    display: none;
  }
  .navbar__mobile {
    display: none !important;
  }
}
</style>