<template>
  <section class="hero" aria-label="Portada Bondhu Indian Premium Restaurant">
    <div class="hero__bg">
      <img
        :src="siteData.hero.imagen"
        :alt="siteData.hero.imagenAlt"
        class="hero__img"
        width="800"
        height="600"
        fetchpriority="high"
      />
      <div class="hero__overlay"></div>
    </div>

    <div class="hero__content">
      <h1 class="hero__title">{{ siteData.hero.titulo }}</h1>
      <h3 class="hero__subtitle">{{ siteData.hero.subtitulo }}</h3>
      <h3 class="hero__tagline">{{ siteData.hero.descripcion }}</h3>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: var(--navbar-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: var(--color-overlay-hero);
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  padding: var(--space-xl) var(--space-md);
  max-width: 800px;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
  margin-bottom: var(--space-md);
  will-change: transform;
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.9rem, 2.5vw, 1.4rem);
  color: var(--color-primary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: var(--space-sm);
}

.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .hero__content {
    padding: var(--space-lg) var(--space-sm);
  }
}
</style>