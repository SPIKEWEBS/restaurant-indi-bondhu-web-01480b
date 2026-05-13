<template>
  <main id="main-content" class="contacto-page">
    <div class="contacto-page__hero">
      <div class="contacto-page__hero-overlay"></div>
      <div class="contacto-page__hero-content">
        <span class="contacto-page__eyebrow">Bondhu Restaurant · Ferreries</span>
        <h1 class="contacto-page__title">Cómo Llegar / Contacto</h1>
        <span class="contacto-page__title-line" aria-hidden="true"></span>
      </div>
    </div>

    <section class="contacto-page__body section container" aria-labelledby="contacto-info">
      <div class="contacto-page__grid">
        <!-- Contact info -->
        <div class="contacto-page__info" id="contacto-info">
          <h2 class="contacto-page__section-heading">
            Dónde estamos
            <span class="contacto-page__heading-line"></span>
          </h2>

          <div class="contacto-page__cards">
            <div class="contacto-page__card">
              <span class="contacto-page__icon">📍</span>
              <div>
                <strong>{{ siteData.nombre }} Restaurant</strong>
                <p>{{ siteData.direccion }}</p>
              </div>
            </div>

            <div class="contacto-page__card">
              <span class="contacto-page__icon">☎️</span>
              <div>
                <strong>Teléfono</strong>
                <a
                  :href="siteData.telefonoHref"
                  class="contacto-page__link"
                  :aria-label="`Llamar al restaurante al número ${siteData.telefono}`"
                >
                  (+34) {{ siteData.telefono }}
                </a>
              </div>
            </div>

            <div class="contacto-page__card">
              <span class="contacto-page__icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a
                  :href="siteData.emailHref"
                  class="contacto-page__link"
                  :aria-label="`Enviar email a ${siteData.email}`"
                >
                  {{ siteData.email }}
                </a>
              </div>
            </div>
          </div>

          <h2 class="contacto-page__section-heading">
            Nuestros horarios
            <span class="contacto-page__heading-line"></span>
          </h2>
          <div class="contacto-page__cards">
            <div class="contacto-page__card">
              <span class="contacto-page__icon">🕐</span>
              <div>
                <strong>{{ siteData.horarios.activos }}</strong>
                <div class="contacto-page__hours-row">
                  <span class="contacto-page__hours-label">Mediodía</span>
                  <span class="contacto-page__hours-time">{{ siteData.horarios.mediodiaInicio }} – {{ siteData.horarios.mediodiaCierre }}</span>
                </div>
                <div class="contacto-page__hours-row">
                  <span class="contacto-page__hours-label">Noche</span>
                  <span class="contacto-page__hours-time">{{ siteData.horarios.nocheInicio }} – {{ siteData.horarios.nocheCierre }}</span>
                </div>
              </div>
            </div>
            <div class="contacto-page__card contacto-page__card--closed">
              <span class="contacto-page__icon">🔒</span>
              <div>
                <strong>{{ siteData.horarios.cerrado }}</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="contacto-page__map" aria-label="Mapa de ubicación de Bondhu Restaurant">
          <div class="contacto-page__map-placeholder">
            <span class="contacto-page__map-icon">🗺️</span>
            <div class="contacto-page__map-address">
              <strong>Plaça Jaume II, 3 A</strong>
              <span>07750 Ferreries, Illes Balears</span>
            </div>
            <a
              href="https://maps.google.com/?q=Plaça+Jaume+II+3A+07750+Ferreries+Menorca"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
              aria-label="Ver en Google Maps cómo llegar a Bondhu Restaurant"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Cómo Llegar / Contacto — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.contacto-page {
  padding-top: var(--navbar-height);
}

.contacto-page__hero {
  position: relative;
  background: linear-gradient(160deg, #1a0e02 0%, #0f0600 55%, #2a1200 100%);
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.contacto-page__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 70% at 20% 55%, rgba(200,169,110,0.14) 0%, transparent 65%),
    radial-gradient(ellipse 45% 60% at 80% 35%, rgba(139,0,0,0.18) 0%, transparent 65%);
  pointer-events: none;
}

.contacto-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
}

.contacto-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.contacto-page__eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(200, 169, 110, 0.8);
}

.contacto-page__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.08em;
}

.contacto-page__title-line {
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin-top: 0.5rem;
}

.contacto-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.contacto-page__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}

.contacto-page__section-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: var(--space-md);
  margin-top: var(--space-xl);
  display: block;
}

.contacto-page__section-heading:first-child {
  margin-top: 0;
}

.contacto-page__heading-line {
  display: block;
  width: 40px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  margin-top: 6px;
  margin-bottom: var(--space-md);
}

.contacto-page__cards {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: var(--space-md);
}

.contacto-page__card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.9rem 1.1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border-gold);
  border-radius: var(--border-radius);
  transition: box-shadow var(--transition-fast), transform var(--transition-fast);
}

.contacto-page__card:hover {
  box-shadow: var(--shadow-card);
  transform: translateX(3px);
}

.contacto-page__card--closed {
  border-color: rgba(139, 0, 0, 0.2);
  background: rgba(139, 0, 0, 0.04);
}

.contacto-page__icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.contacto-page__link {
  display: block;
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
  margin-top: 0.2rem;
}

.contacto-page__link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.contacto-page__hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 0.3rem;
  font-size: var(--font-size-sm);
}

.contacto-page__hours-label {
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.contacto-page__hours-time {
  color: var(--color-text-light);
  font-weight: 600;
}

.contacto-page__map {
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border-gold);
  position: sticky;
  top: calc(var(--navbar-height) + 1.5rem);
}

.contacto-page__map-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  background: linear-gradient(160deg, var(--color-surface) 0%, #f0ece3 100%);
  padding: var(--space-xl);
  text-align: center;
  gap: var(--space-md);
}

.contacto-page__map-icon {
  font-size: 3.5rem;
  opacity: 0.7;
}

.contacto-page__map-address {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.5;
}

.contacto-page__map-address strong {
  color: var(--color-heading);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .contacto-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }

  .contacto-page__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .contacto-page__map {
    position: static;
  }
}
</style>
