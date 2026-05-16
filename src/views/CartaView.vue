<template>
  <main id="main-content" class="carta-view">
    <div class="carta-hero">
      <div class="carta-hero__overlay"></div>
      <div class="carta-hero__content container">
        <h1 class="carta-hero__title">NUESTRA CARTA</h1>
        <h3 class="carta-hero__subtitle">Indian Premium Restaurant</h3>
      </div>
    </div>

    <section class="carta-content section bg-surface">
      <div class="container carta-content__inner">
        <h2 class="carta-content__heading">NUESTRA CARTA</h2>
        <p class="carta-content__desc">
          En Bondhu Indian Premium Restaurant utilizamos las recetas típicas de la India. Te las explicamos a continuación.
        </p>
        <div class="carta-ctas">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary carta-cta-btn"
            aria-label="Llamar al restaurante Bondhu para reservar"
          >
            📞 Llama y Reserva Ahora >>>
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
.carta-view {
  padding-top: var(--navbar-height);
}

.carta-hero {
  position: relative;
  background: var(--color-primary);
  padding: var(--sp-4xl) var(--sp-lg);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.carta-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, #4a2e22 100%);
}

.carta-hero__content {
  position: relative;
  z-index: 1;
}

.carta-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: 0.04em;
  margin-bottom: var(--sp-md);
}

.carta-hero__subtitle {
  font-family: var(--font-nav);
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: var(--color-secondary);
  font-weight: 400;
  letter-spacing: 0.08em;
}

.carta-content {
  padding: var(--sp-section) 0;
}

.carta-content__inner {
  max-width: 700px;
}

.carta-content__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--sp-lg);
}

.carta-content__desc {
  font-size: var(--fs-lg);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: var(--sp-2xl);
}

.carta-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-md);
}

.carta-cta-btn {
  font-size: var(--fs-base);
  padding: var(--sp-md) var(--sp-xl);
}

@media (max-width: 600px) {
  .carta-view {
    padding-top: var(--navbar-height);
  }
}
</style>