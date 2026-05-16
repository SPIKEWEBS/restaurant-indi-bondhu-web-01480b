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
        <span class="navbar__toggle-bar" :class="{ open: menuOpen }"></span>
        <span class="navbar__toggle-bar" :class="{ open: menuOpen }"></span>
        <span class="navbar__toggle-bar" :class="{ open: menuOpen }"></span>
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
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    background 350ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 350ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar--scrolled {
  background: rgba(26, 16, 9, 0.97);
  border-bottom-color: rgba(212, 160, 23, 0.25);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.45), 0 1px 0 rgba(212, 160, 23, 0.15);
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
  line-height: 1.15;
  transition: opacity var(--transition-fast);
}
.navbar__brand:hover { opacity: 0.88; }

.navbar__brand-name {
  font-family: var(--font-heading);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.12em;
  text-shadow: 0 0 20px rgba(212, 160, 23, 0.45);
}

.navbar__brand-sub {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Desktop nav */
.navbar__nav {
  display: none;
  align-items: center;
  gap: 0.15rem;
}

.navbar__link {
  padding: 0.4rem 0.8rem;
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    transform var(--transition-fast);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0.8rem;
  right: 0.8rem;
  height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar__link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.09);
  transform: translateY(-1px);
}

.navbar__link--active {
  color: var(--color-accent);
}

.navbar__link--active::after,
.navbar__link:hover::after {
  transform: scaleX(1);
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
  transition: transform var(--transition-fast);
}
.navbar__toggle:hover { transform: scale(1.1); }

.navbar__toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 2px;
  transition:
    background var(--transition-fast),
    transform var(--transition-base),
    opacity var(--transition-base);
}

.navbar__toggle-bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__toggle-bar.open:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.navbar__toggle-bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.navbar__mobile-menu {
  display: flex;
  flex-direction: column;
  background: rgba(26, 16, 9, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--transition-slow) cubic-bezier(0.16, 1, 0.3, 1);
  border-top: 1px solid rgba(212, 160, 23, 0.15);
}

.navbar__mobile-menu--open {
  max-height: 380px;
}

.navbar__mobile-link {
  padding: 1rem var(--spacing-md);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    padding-left var(--transition-base);
}

.navbar__mobile-link:hover {
  color: var(--color-accent);
  background: rgba(212, 160, 23, 0.08);
  padding-left: calc(var(--spacing-md) + 0.5rem);
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
