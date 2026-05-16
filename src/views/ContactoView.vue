<template>
  <main id="main-content" class="contacto-view">
    <div class="contacto-hero">
      <div class="contacto-hero__content container">
        <h1 class="contacto-hero__title">Cómo Llegar / Contacto</h1>
        <h3 class="contacto-hero__subtitle">Bondhu Indian Premium Restaurant</h3>
      </div>
    </div>

    <section class="contacto-info section bg-surface">
      <div class="container">
        <h2 class="contacto-info__heading">Dónde estamos</h2>
        <div class="contacto-cards">
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">📍</span>
            <div class="contacto-card__content">
              <strong class="contacto-card__label">Dirección</strong>
              <p class="contacto-card__text">BONDHU Restaurant</p>
              <p class="contacto-card__text">Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears</p>
            </div>
          </div>
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">☎️</span>
            <div class="contacto-card__content">
              <strong class="contacto-card__label">Teléfono</strong>
              <a :href="siteData.telefonoHref" class="contacto-card__link" aria-label="Llamar al restaurante Bondhu">
                (+34) {{ siteData.telefono }}
              </a>
            </div>
          </div>
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">✉️</span>
            <div class="contacto-card__content">
              <strong class="contacto-card__label">Email</strong>
              <a :href="siteData.emailHref" class="contacto-card__link" aria-label="Enviar email a Bondhu Restaurant">
                {{ siteData.email }}
              </a>
            </div>
          </div>
          <div class="contacto-card">
            <span class="contacto-card__icon" aria-hidden="true">🕐</span>
            <div class="contacto-card__content">
              <strong class="contacto-card__label">Horarios</strong>
              <p class="contacto-card__text">Miércoles - Domingo</p>
              <p class="contacto-card__text">13:00h - 16:00h</p>
              <p class="contacto-card__text">19.30h - 23:00h</p>
              <p class="contacto-card__text contacto-card__text--cerrado">Lunes y Martes: Cerrado</p>
            </div>
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
.contacto-view {
  padding-top: var(--navbar-height);
}

.contacto-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4a2e22 100%);
  padding: var(--sp-4xl) var(--sp-lg);
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacto-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: 0.03em;
  margin-bottom: var(--sp-md);
}

.contacto-hero__subtitle {
  font-family: var(--font-nav);
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--color-secondary);
  font-weight: 400;
  letter-spacing: 0.06em;
}

.contacto-info {
  padding: var(--sp-section) 0;
}

.contacto-info__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--sp-xl);
}

.contacto-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--sp-lg);
}

.contacto-card {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-md);
  padding: var(--sp-lg);
  background: var(--color-white);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--color-accent);
}

.contacto-card__icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.contacto-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
}

.contacto-card__label {
  font-size: var(--fs-sm);
  color: var(--color-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.contacto-card__text {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.5;
}

.contacto-card__text--cerrado {
  color: var(--color-gray);
  font-style: italic;
}

.contacto-card__link {
  font-size: var(--fs-base);
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contacto-card__link:hover {
  color: var(--color-accent);
}

@media (max-width: 480px) {
  .contacto-info {
    padding: var(--sp-section-mobile) 0;
  }
}
</style>