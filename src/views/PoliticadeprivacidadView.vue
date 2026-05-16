<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <div class="legal-page__hero-overlay" aria-hidden="true"></div>
      <div class="legal-page__hero-content">
        <h1 class="legal-page__title">Política de Privacidad</h1>
        <p class="legal-page__subtitle">{{ site.subtitulo }}</p>
      </div>
    </div>

    <section class="legal-page__content" aria-labelledby="privacidad-heading">
      <div class="legal-page__container">
        <h2 id="privacidad-heading" class="legal-page__section-title">Política de Privacidad</h2>
        <div class="section-divider"></div>

        <div class="legal-page__text">
          <h3>Responsable del tratamiento</h3>
          <p>
            <strong>{{ site.nombre }}</strong><br />
            {{ site.direccion }}<br />
            {{ site.telefono }}<br />
            {{ site.email }}
          </p>

          <h3>Finalidad del tratamiento</h3>
          <p>
            Los datos personales que nos facilite a través de los formularios de contacto o reserva serán utilizados únicamente para atender su solicitud, gestionar su reserva y enviarle información relacionada con nuestros servicios, siempre con su consentimiento.
          </p>

          <h3>Derechos del usuario</h3>
          <p>
            Tiene derecho a acceder, rectificar, suprimir y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos en: <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
          </p>

          <h3>Conservación de datos</h3>
          <p>
            Los datos personales proporcionados se conservarán mientras sean necesarios para la finalidad para la que fueron recabados, o mientras el usuario no solicite su supresión.
          </p>

          <h3>Legitimación</h3>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento otorgado por el usuario al rellenar y enviar el formulario de contacto o reserva.
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
  document.title = 'Política de Privacidad — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.legal-page__hero {
  position: relative;
  background: var(--color-surface-dark);
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--navbar-height);
}

.legal-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-overlay-dark);
}

.legal-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-text-light);
  padding: 2.5rem var(--spacing-md);
}

.legal-page__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  letter-spacing: 0.08em;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
}

.legal-page__subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  text-transform: uppercase;
}

.legal-page__content {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.legal-page__container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.legal-page__section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-primary);
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem 0 2rem;
  border-radius: 2px;
}

.legal-page__text h3 {
  font-size: 1.15rem;
  color: var(--color-primary);
  margin: 2rem 0 0.75rem;
}

.legal-page__text p {
  font-size: 0.97rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

.legal-page__text a {
  color: var(--color-primary);
  text-decoration: underline;
}

@media (min-width: 768px) {
  .legal-page__content {
    padding: var(--section-py) 0;
  }
}
</style>