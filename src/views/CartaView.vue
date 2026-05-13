<template>
  <main id="main-content" class="carta-page">
    <div class="carta-page__hero">
      <div class="carta-page__overlay" aria-hidden="true"></div>
      <div class="carta-page__hero-content container">
        <h1 class="carta-page__heading">{{ site.carta.heading }}</h1>
        <span class="divider"></span>
      </div>
    </div>

    <section class="carta-page__body section" aria-labelledby="carta-heading-main">
      <div class="container">
        <div class="carta-page__content">
          <h2 id="carta-heading-main" class="carta-page__tagline">Indian Premium Restaurant</h2>
          <p class="carta-page__intro">{{ site.carta.intro }}</p>

          <div class="carta-page__cta-group">
            <a :href="site.carta.ctaHref" class="carta-page__cta" :aria-label="site.carta.ctaLabel + ' — restaurante Bondhu'">
              {{ site.carta.ctaLabel }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../data/siteData.js'

onMounted(() => {
  document.title = 'Nuestra Carta — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.carta-page__hero {
  position: relative;
  min-height: 40vh;
  background: var(--color-dark-section);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--navbar-height);
}

.carta-page__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-secondary) 100%);
  opacity: 0.95;
}

.carta-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.carta-page__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  text-transform: uppercase;
}

.carta-page__body {
  background: var(--color-surface);
}

.carta-page__content {
  max-width: 680px;
  margin-inline: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.carta-page__tagline {
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  color: var(--color-secondary);
  letter-spacing: 0.08em;
}

.carta-page__intro {
  font-size: var(--fs-md);
  color: var(--color-text-light);
  line-height: 1.8;
}

.carta-page__cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.carta-page__cta {
  display: inline-block;
  padding: 0.875rem 2.25rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: var(--border-radius-sm);
  transition: background var(--transition-base), transform var(--transition-fast);
}
.carta-page__cta:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-1px);
}
</style>