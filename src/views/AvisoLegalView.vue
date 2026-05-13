<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <div class="legal-page__overlay" aria-hidden="true"></div>
      <div class="legal-page__hero-content container">
        <h1 class="legal-page__heading">Aviso Legal</h1>
        <span class="divider"></span>
      </div>
    </div>

    <section class="legal-page__body section">
      <div class="container">
        <div class="legal-page__content">
          <h2>Información Legal</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y Comercio Electrónico (LSSICE), se informa:
          </p>
          <h3>Titular del sitio web</h3>
          <p>
            <strong>Restaurante Bondhu</strong><br />
            {{ site.address }}<br />
            Teléfono: (+34) {{ site.phone }}<br />
            Email: {{ site.email }}
          </p>
          <h3>Objeto y ámbito de aplicación</h3>
          <p>
            El presente aviso legal regula el uso del sitio web del Restaurante Bondhu. El acceso y
            uso del sitio web implica la aceptación plena de las condiciones aquí recogidas.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../data/siteData.js'

onMounted(() => {
  document.title = 'Aviso Legal — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.legal-page__hero {
  position: relative;
  min-height: 30vh;
  background: var(--color-dark-section);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--navbar-height);
}

.legal-page__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-secondary) 100%);
  opacity: 0.95;
}

.legal-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-block: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.legal-page__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-primary);
}

.legal-page__body {
  background: var(--color-surface);
}

.legal-page__content {
  max-width: 800px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.legal-page__content h2 {
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  color: var(--color-secondary);
  font-weight: 700;
}

.legal-page__content h3 {
  font-family: var(--font-heading);
  font-size: var(--fs-lg);
  color: var(--color-primary);
  font-weight: 700;
  margin-top: 0.5rem;
}

.legal-page__content p {
  font-size: var(--fs-base);
  color: var(--color-text-light);
  line-height: 1.8;
}
</style>