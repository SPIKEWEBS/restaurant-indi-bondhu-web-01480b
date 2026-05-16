<template>
  <main id="main-content" class="subpage">
    <div class="subpage__hero">
      <div class="subpage__hero-overlay" aria-hidden="true"></div>
      <div class="subpage__hero-content">
        <h1 class="subpage__title">NUESTRA CARTA</h1>
        <p class="subpage__subtitle">{{ site.subtitulo }}</p>
      </div>
    </div>

    <section class="carta-section" aria-labelledby="carta-heading">
      <div class="carta-section__container">
        <h2 id="carta-heading" class="carta-section__title">NUESTRA CARTA</h2>
        <div class="section-divider"></div>
        <p class="carta-section__text">{{ site.cartaTexto }}</p>

        <div class="carta-section__cta-grid">
          <div class="carta-cta-card">
            <span class="carta-cta-card__icon" aria-hidden="true">📞</span>
            <p class="carta-cta-card__text">¿Tienes alguna duda sobre nuestra carta o quieres reservar?</p>
            <a
              :href="`tel:${site.telefonoRaw}`"
              class="btn btn-primary"
              aria-label="Llamar y reservar mesa en Bondhu Indian Premium Restaurant"
            >
              Llama y Reserva Ahora >>>
            </a>
          </div>
          <div class="carta-cta-card">
            <span class="carta-cta-card__icon" aria-hidden="true">🍛</span>
            <p class="carta-cta-card__text">Especialidades: Tandoori, Curry, Biryanis, Balti y Naan elaborados con las mejores recetas de la India.</p>
          </div>
          <div class="carta-cta-card">
            <span class="carta-cta-card__icon" aria-hidden="true">📍</span>
            <p class="carta-cta-card__text">{{ site.direccion }}</p>
            <p class="carta-cta-card__phone">{{ site.telefono }}</p>
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
/* ---- Hero ---- */
.subpage__hero {
  position: relative;
  background: var(--color-surface-dark);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--navbar-height);
}

.subpage__hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-overlay-dark);
}

.subpage__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-text-light);
  padding: 3rem var(--spacing-md);
}

.subpage__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 6vw, 4rem);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
}

.subpage__subtitle {
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  text-transform: uppercase;
}

/* ---- Carta Section ---- */
.carta-section {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.carta-section__container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.carta-section__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem auto 1.5rem;
  border-radius: 2px;
}

.carta-section__text {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

/* Cards grid */
.carta-section__cta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.carta-cta-card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  text-align: center;
}

.carta-cta-card__icon {
  font-size: 2.2rem;
  line-height: 1;
}

.carta-cta-card__text {
  font-size: 0.93rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

.carta-cta-card__phone {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
}

@media (min-width: 768px) {
  .carta-section {
    padding: var(--section-py) 0;
  }
}
</style>