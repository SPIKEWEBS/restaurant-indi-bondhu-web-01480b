<template>
  <main id="main-content" class="subpage">
    <div class="subpage__hero">
      <div class="subpage__hero-overlay" aria-hidden="true"></div>
      <div class="subpage__hero-content">
        <h1 class="subpage__title">COMO LLEGAR / CONTACTO</h1>
        <p class="subpage__subtitle">{{ site.subtitulo }}</p>
      </div>
    </div>

    <section class="contacto-section" aria-labelledby="contacto-heading">
      <div class="contacto-section__container">
        <h2 id="contacto-heading" class="contacto-section__title">Dónde estamos</h2>
        <div class="section-divider"></div>

        <div class="contacto-section__grid">
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">📍</span>
            <strong class="contacto-card__label">Dirección</strong>
            <p class="contacto-card__text">{{ site.nombreCorto }} Restaurant</p>
            <p class="contacto-card__text">{{ site.direccion }}</p>
          </div>
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">☎</span>
            <strong class="contacto-card__label">Teléfono</strong>
            <a
              :href="`tel:${site.telefonoRaw}`"
              class="contacto-card__link"
              aria-label="Llamar al restaurante Bondhu"
            >
              {{ site.telefono }}
            </a>
          </div>
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">✉</span>
            <strong class="contacto-card__label">Email</strong>
            <a
              :href="`mailto:${site.email}`"
              class="contacto-card__link"
              aria-label="Enviar email a Bondhu Restaurant"
            >
              {{ site.email }}
            </a>
          </div>
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">🕐</span>
            <strong class="contacto-card__label">Horarios</strong>
            <div v-for="(h, i) in site.horarios" :key="i" class="contacto-card__horario">
              <p class="contacto-card__text contacto-card__text--dias">{{ h.dias }}</p>
              <p
                v-for="(franja, fi) in h.franjas"
                :key="fi"
                class="contacto-card__text"
              >
                {{ franja }}
              </p>
            </div>
          </div>
        </div>

        <div class="contacto-section__map">
          <p class="contacto-section__map-placeholder">
            🗺️ Google Maps — Plaça Jaume II, 3 A, 07750 Ferreries
          </p>
        </div>

        <div class="contacto-section__cta">
          <a
            :href="`tel:${site.telefonoRaw}`"
            class="btn btn-primary"
            aria-label="Llamar y reservar mesa en Bondhu Indian Premium Restaurant"
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
  document.title = 'Contacto y Cómo Llegar — Bondhu Indian Premium Restaurant'
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
  font-size: clamp(1.6rem, 5vw, 3.5rem);
  letter-spacing: 0.1em;
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

/* ---- Contacto Section ---- */
.contacto-section {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.contacto-section__container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.contacto-section__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  color: var(--color-primary);
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem auto 2rem;
  border-radius: 2px;
}

/* Grid de cards */
.contacto-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.contacto-card {
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
}

.contacto-card__icon {
  font-size: 2.2rem;
  line-height: 1;
}

.contacto-card__label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text);
}

.contacto-card__text {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.5;
}

.contacto-card__text--dias {
  font-weight: 600;
  color: var(--color-text);
}

.contacto-card__horario {
  width: 100%;
}

.contacto-card__link {
  font-size: 0.95rem;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-fast);
}

.contacto-card__link:hover {
  color: var(--color-primary-dark);
}

/* Map placeholder */
.contacto-section__map {
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  padding: 3rem 1rem;
  margin-bottom: 2rem;
  background: var(--color-surface);
}

.contacto-section__map-placeholder {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin: 0;
}

.contacto-section__cta {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .contacto-section {
    padding: var(--section-py) 0;
  }
}
</style>