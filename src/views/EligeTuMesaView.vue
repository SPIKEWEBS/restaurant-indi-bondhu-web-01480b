<template>
  <main id="main-content" class="subpage">
    <div class="subpage__hero">
      <div class="subpage__hero-overlay" aria-hidden="true"></div>
      <div class="subpage__hero-content">
        <h1 class="subpage__title">ELIGE TU MESA</h1>
        <p class="subpage__subtitle">{{ site.subtitulo }}</p>
      </div>
    </div>

    <section class="mesa-section" aria-labelledby="mesa-heading">
      <div class="mesa-section__container">
        <h2 id="mesa-heading" class="mesa-section__title">Nuestro Comedor</h2>
        <div class="section-divider"></div>
        <p class="mesa-section__text">{{ site.comedor.descripcion }}</p>

        <div class="mesa-section__cards">
          <div class="mesa-card">
            <span class="mesa-card__icon" aria-hidden="true">🪑</span>
            <strong class="mesa-card__label">Comedor interior</strong>
            <p class="mesa-card__desc">Amplio y acogedor comedor con mullidas sillas de gran comodidad y decoración ecléctica de inspiración hindú.</p>
          </div>
          <div class="mesa-card">
            <span class="mesa-card__icon" aria-hidden="true">☀️</span>
            <strong class="mesa-card__label">Terraza exterior</strong>
            <p class="mesa-card__desc">Los meses de verano o si hace buen tiempo, disponemos de una agradable terraza para disfrutar al aire libre.</p>
          </div>
          <div class="mesa-card">
            <span class="mesa-card__icon" aria-hidden="true">✨</span>
            <strong class="mesa-card__label">Tu satisfacción</strong>
            <p class="mesa-card__desc">Nuestra prioridad es tu máxima satisfacción. Si tienes alguna sugerencia, no dudes en hacérnoslo saber.</p>
          </div>
        </div>

        <div class="mesa-section__cta">
          <a
            :href="`tel:${site.telefonoRaw}`"
            class="btn btn-primary"
            aria-label="Llamar para reservar mesa en Bondhu Indian Premium Restaurant"
          >
            Llama y Reserva Ahora >>>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../data/siteData.js'

onMounted(() => {
  document.title = 'Elige tu Mesa — Bondhu Indian Premium Restaurant'
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

/* ---- Mesa Section ---- */
.mesa-section {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.mesa-section__container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.mesa-section__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  color: var(--color-primary);
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem auto 1.5rem;
  border-radius: 2px;
}

.mesa-section__text {
  max-width: 750px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

/* Cards */
.mesa-section__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.mesa-card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.mesa-card__icon {
  font-size: 2.2rem;
  line-height: 1;
}

.mesa-card__label {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-primary);
}

.mesa-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

.mesa-section__cta {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .mesa-section {
    padding: var(--section-py) 0;
  }
}
</style>