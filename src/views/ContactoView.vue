<template>
  <main id="main-content" class="contacto-page">
    <div class="contacto-page__hero">
      <div class="contacto-page__hero-overlay"></div>
      <div class="contacto-page__hero-content">
        <h1 class="contacto-page__title">Cómo Llegar / Contacto</h1>
      </div>
    </div>

    <section class="contacto-page__body section container" aria-labelledby="contacto-info">
      <div class="contacto-page__grid">
        <!-- Contact info -->
        <div class="contacto-page__info" id="contacto-info">
          <h2 class="contacto-page__section-heading">Dónde estamos</h2>

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

          <h2 class="contacto-page__section-heading">Nuestros horarios</h2>
          <div class="contacto-page__cards">
            <div class="contacto-page__card">
              <span class="contacto-page__icon">🕐</span>
              <div>
                <strong>{{ siteData.horarios.activos }}</strong>
                <p>{{ siteData.horarios.mediodiaInicio }} - {{ siteData.horarios.mediodiaCierre }}</p>
                <p>{{ siteData.horarios.nocheInicio }} - {{ siteData.horarios.nocheCierre }}</p>
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
            <p>Plaça Jaume II, 3 A<br>07750 Ferreries, Illes Balears</p>
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
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, #2d1b00 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacto-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.contacto-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
}

.contacto-page__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #fff;
  letter-spacing: 0.1em;
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
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: var(--color-heading);
  margin-bottom: var(--space-md);
  margin-top: var(--space-xl);
  padding-bottom: var(--space-xs);
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
}

.contacto-page__section-heading:first-child {
  margin-top: 0;
}

.contacto-page__cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.contacto-page__card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.contacto-page__card--closed {
  border-color: rgba(139, 0, 0, 0.2);
  background: rgba(139, 0, 0, 0.05);
}

.contacto-page__icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.contacto-page__link {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contacto-page__link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.contacto-page__map {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.contacto-page__map-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: var(--color-surface);
  padding: var(--space-xl);
  text-align: center;
  gap: var(--space-md);
}

.contacto-page__map-icon {
  font-size: 4rem;
}

@media (max-width: 768px) {
  .contacto-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }

  .contacto-page__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
</style>