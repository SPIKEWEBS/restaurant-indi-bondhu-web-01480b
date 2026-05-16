<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar__logo" aria-label="Bondhu Restaurant — Inicio">
        <img
          src="/images/lrm-export 20180713-124339.jpg"
          alt="Bondhu Indian Premium Restaurant"
          width="50"
          height="63"
          class="navbar__logo-img"
          fetchpriority="high"
        />
        <span class="navbar__logo-text">Indian Premium Restaurant</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="navbar__nav" aria-label="Menú principal">
        <ul role="menubar" class="navbar__list">
          <li v-for="link in navLinks" :key="link.href" role="none" class="navbar__item">
            <RouterLink
              :to="link.href"
              class="navbar__link"
              role="menuitem"
              :aria-current="isActive(link.href) ? 'page' : undefined"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--open': menuOpen }"
        @click="toggleMenu"
        aria-label="Abrir menú de navegación"
        :aria-expanded="menuOpen"
      >
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-label">Menú</span>
      </button>
    </div>

    <!-- Mobile Nav Drawer -->
    <nav
      class="navbar__mobile"
      :class="{ 'navbar__mobile--open': menuOpen }"
      aria-label="Menú móvil"
    >
      <ul class="navbar__mobile-list">
        <li v-for="link in navLinks" :key="link.href">
          <RouterLink
            :to="link.href"
            class="navbar__mobile-link"
            @click="closeMenu"
            :aria-current="isActive(link.href) ? 'page' : undefined"
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

const route = useRoute()
const menuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = siteData.navLinks

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function isActive(href) {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
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
  background: rgba(43, 31, 26, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background var(--transition-normal);
}

.navbar--scrolled {
  background: rgba(43, 31, 26, 0.97);
  box-shadow: var(--shadow-md);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
  gap: var(--sp-lg);
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-img {
  width: 50px;
  height: auto;
  border-radius: var(--border-radius-sm);
  object-fit: contain;
}

.navbar__logo-text {
  font-size: var(--fs-sm);
  color: var(--color-secondary);
  font-family: var(--font-nav);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.3;
  max-width: 120px;
}

/* Desktop Nav */
.navbar__nav {
  display: flex;
}

.navbar__list {
  display: flex;
  align-items: center;
  gap: var(--sp-xl);
  list-style: none;
}

.navbar__link {
  font-family: var(--font-nav);
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: var(--sp-xs) 0;
  border-bottom: 2px solid transparent;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.navbar__link:hover,
.navbar__link[aria-current="page"] {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

/* Mobile Toggle */
.navbar__toggle {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--sp-sm);
}

.navbar__toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

.navbar__toggle--open .navbar__toggle-bar:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.navbar__toggle--open .navbar__toggle-bar:nth-child(2) {
  opacity: 0;
}
.navbar__toggle--open .navbar__toggle-bar:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.navbar__toggle-label {
  font-size: var(--fs-xs);
  color: var(--color-white);
  font-weight: 700;
  letter-spacing: 0.05em;
}

/* Mobile Nav */
.navbar__mobile {
  display: none;
  background: var(--color-primary);
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--transition-slow);
}

.navbar__mobile--open {
  max-height: 400px;
}

.navbar__mobile-list {
  list-style: none;
  padding: var(--sp-md) 0;
}

.navbar__mobile-link {
  display: block;
  padding: var(--sp-md) var(--sp-xl);
  font-size: var(--fs-base);
  font-weight: 700;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.navbar__mobile-link:hover,
.navbar__mobile-link[aria-current="page"] {
  color: var(--color-accent);
  background: rgba(255,255,255,0.05);
}

/* Responsive */
@media (max-width: 900px) {
  .navbar__nav {
    display: none;
  }
  .navbar__toggle {
    display: flex;
  }
  .navbar__mobile {
    display: block;
  }
}

@media (max-width: 480px) {
  .navbar__logo-text {
    display: none;
  }
}
</style>