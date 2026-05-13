<template>
  <main id="main-content" class="carta-page">
    <div class="carta-page__hero">
      <div class="carta-page__hero-overlay"></div>
      <div class="carta-page__hero-content">
        <span class="carta-page__eyebrow">Bondhu Indian Premium Restaurant</span>
        <h1 class="carta-page__title">{{ siteData.carta.titulo }}</h1>
        <span class="carta-page__title-line" aria-hidden="true"></span>
      </div>
    </div>

    <section class="carta-page__body section container" aria-labelledby="carta-titulo">
      <div class="carta-page__intro">
        <p class="carta-page__desc">{{ siteData.carta.descripcion }}</p>
        <div class="carta-page__ctas">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary carta-page__cta"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            {{ siteData.carta.ctaLabel }}
          </a>
          <a
            :href="siteData.telefonoHref"
            class="btn btn-outline carta-page__cta"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            Llama y reserva Ahora >>>
          </a>
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary carta-page__cta"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            Llama y reserva Ahora >>>
          </a>
          <a
            :href="siteData.telefonoHref"
            class="btn btn-outline carta-page__cta"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            Llama y reserva Ahora >>>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Nuestra Carta — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.carta-page {
  padding-top: var(--navbar-height);
}

.carta-page__hero {
  position: relative;
  background: linear-gradient(160deg, #1a0e02 0%, #0f0600 55%, #2a1500 100%);
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carta-page__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 80% at 15% 60%, rgba(200,169,110,0.15) 0%, transparent 65%),
    radial-gradient(ellipse 40% 60% at 85% 30%, rgba(139,0,0,0.20) 0%, transparent 65%);
  pointer-events: none;
}

.carta-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

.carta-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.carta-page__eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(200, 169, 110, 0.8);
}

.carta-page__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.1em;
}

.carta-page__title-line {
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin-top: 0.5rem;
}

.carta-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  text-align: center;
}

.carta-page__intro {
  max-width: 700px;
  margin: 0 auto;
}

.carta-page__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-2xl);
}

.carta-page__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
}

.carta-page__cta {
  min-width: 220px;
}

@media (max-width: 768px) {
  .carta-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }

  .carta-page__ctas {
    flex-direction: column;
    align-items: center;
  }
}
</style>
