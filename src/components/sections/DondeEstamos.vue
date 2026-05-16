<template>
  <section class="donde" aria-labelledby="donde-heading">
    <div class="donde__container">
      <p class="donde__eyebrow">Visítanos</p>
      <h2 id="donde-heading" class="donde__title">Dónde estamos</h2>
      <div class="section-divider"></div>

      <div class="donde__layout">
        <!-- Cards column -->
        <div class="donde__cards">
          <div class="donde__card">
            <div class="donde__card-icon-wrap" aria-hidden="true">
              <span class="donde__icon">📍</span>
            </div>
            <div class="donde__card-body">
              <strong>{{ site.nombreCorto }} Restaurant</strong>
              <p>{{ site.direccion }}</p>
            </div>
          </div>
          <div class="donde__card">
            <div class="donde__card-icon-wrap" aria-hidden="true">
              <span class="donde__icon">☎</span>
            </div>
            <div class="donde__card-body">
              <strong>Teléfono</strong>
              <a :href="`tel:${site.telefonoRaw}`" class="donde__tel-link" aria-label="Llamar al restaurante Bondhu">
                {{ site.telefono }}
              </a>
            </div>
          </div>
          <div class="donde__card">
            <div class="donde__card-icon-wrap" aria-hidden="true">
              <span class="donde__icon">✉</span>
            </div>
            <div class="donde__card-body">
              <strong>Email</strong>
              <a :href="`mailto:${site.email}`" aria-label="Enviar email a Bondhu Restaurant">
                {{ site.email }}
              </a>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="donde__map" aria-label="Mapa de ubicación del restaurante Bondhu">
          <div class="donde__map-inner">
            <span class="donde__map-icon" aria-hidden="true">🗺️</span>
            <p class="donde__map-text">{{ site.direccion }}</p>
            <a
              href="https://maps.google.com/?q=Plaça+Jaume+II+3+A+Ferreries+Menorca"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary donde__map-btn"
              aria-label="Abrir en Google Maps"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.donde {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.donde__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.donde__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.donde__title {
  font-family: var(--font-heading);
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 0.75rem auto 2.5rem;
  border-radius: 2px;
}

/* Layout */
.donde__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

.donde__cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.donde__card {
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.donde__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card-hover);
}

.donde__card-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(139, 26, 26, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.donde__icon {
  font-size: 1.3rem;
  line-height: 1;
}

.donde__card-body strong {
  display: block;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text);
  margin-bottom: 0.3rem;
}

.donde__card-body p,
.donde__card-body a {
  font-size: 0.93rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.5;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.donde__tel-link {
  font-size: 1rem !important;
  font-weight: 700 !important;
  color: var(--color-primary) !important;
  transition: color var(--transition-fast);
}

.donde__card-body a:hover,
.donde__tel-link:hover {
  color: var(--color-primary-dark) !important;
}

/* Map */
.donde__map {
  background: var(--color-surface-alt);
  border-radius: var(--radius-card);
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--color-border);
  box-shadow: var(--shadow-card);
}

.donde__map-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem var(--spacing-md);
}

.donde__map-icon {
  font-size: 2.5rem;
}

.donde__map-text {
  font-size: 0.92rem;
  color: var(--color-text-muted);
  text-align: center;
  line-height: 1.5;
  margin: 0;
  max-width: 260px;
}

.donde__map-btn {
  margin-top: 0.25rem;
}

@media (min-width: 768px) {
  .donde {
    padding: var(--section-py) 0;
  }
  .donde__layout {
    grid-template-columns: 1fr 1.4fr;
    align-items: stretch;
  }
  .donde__map {
    min-height: 300px;
  }
}
</style>
