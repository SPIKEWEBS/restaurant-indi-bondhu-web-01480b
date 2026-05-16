<template>
  <section class="hero" aria-label="Portada principal de Bondhu Indian Premium Restaurant">
    <div class="hero__bg">
      <img
        :src="site.images.hero"
        alt="Interior del restaurante Bondhu Indian Premium Restaurant en Ferreries"
        class="hero__img"
        width="800"
        height="600"
        fetchpriority="high"
      />
      <div class="hero__overlay" aria-hidden="true"></div>
    </div>
    <div class="hero__content">
      <div class="hero__logo-block">
        <img
          :src="site.images.logo"
          alt="Logo Bondhu Indian Premium Restaurant"
          class="hero__logo"
          width="200"
          height="200"
          loading="lazy"
        />
      </div>
      <h1 class="hero__title">{{ site.nombreCorto }}</h1>
      <h3 class="hero__subtitle">{{ site.subtitulo }}</h3>
      <h3 class="hero__tagline">{{ site.tagline }}</h3>
      <div class="hero__cta">
        <a :href="`tel:${site.telefonoRaw}`" class="btn btn-primary" aria-label="Llamar y reservar mesa en Bondhu">
          Llama y Reserva Ahora >>>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
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
  margin-top: 0;
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
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: var(--color-overlay-dark);
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-text-light);
  padding: calc(var(--navbar-height) + 2rem) var(--spacing-md) 3rem;
  max-width: 800px;
  width: 100%;
}

.hero__logo-block {
  margin-bottom: 1.5rem;
}

.hero__logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid var(--color-accent);
  padding: 4px;
  background: rgba(255,255,255,0.08);
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-text-light);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 16px rgba(0,0,0,0.5);
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  letter-spacing: 0.12em;
  color: var(--color-accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.hero__tagline {
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.hero__cta {
  display: flex;
  justify-content: center;
}

.hero__cta .btn-primary {
  font-size: 1rem;
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius-sm);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
</style>