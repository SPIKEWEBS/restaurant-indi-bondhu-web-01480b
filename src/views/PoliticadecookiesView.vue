<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <div class="legal-page__hero-overlay" aria-hidden="true"></div>
      <div class="legal-page__hero-content">
        <h1 class="legal-page__title">Política de Cookies</h1>
        <p class="legal-page__subtitle">{{ site.subtitulo }}</p>
      </div>
    </div>

    <section class="legal-page__content" aria-labelledby="cookies-heading">
      <div class="legal-page__container">
        <h2 id="cookies-heading" class="legal-page__section-title">Política de Cookies</h2>
        <div class="section-divider"></div>

        <div class="legal-page__text">
          <h3>¿Qué son las cookies?</h3>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.
          </p>

          <h3>¿Qué cookies utilizamos?</h3>
          <p>
            Este sitio web utiliza únicamente las cookies necesarias para permitir un correcto funcionamiento y seguridad de la página, así como para ofrecer la mejor experiencia posible al usuario.
          </p>

          <div class="cookies-cards">
            <div class="cookie-card">
              <span class="cookie-card__icon" aria-hidden="true">🔒</span>
              <strong class="cookie-card__title">Cookies necesarias</strong>
              <p class="cookie-card__desc">Imprescindibles para el funcionamiento básico del sitio web. No almacenan información de identificación personal.</p>
            </div>
            <div class="cookie-card">
              <span class="cookie-card__icon" aria-hidden="true">📊</span>
              <strong class="cookie-card__title">Cookies analíticas</strong>
              <p class="cookie-card__desc">Permiten contabilizar las visitas y las fuentes de tráfico para medir y mejorar el rendimiento del sitio.</p>
            </div>
          </div>

          <h3>¿Cómo gestionar las cookies?</h3>
          <p>
            Puede configurar su navegador para rechazar o eliminar las cookies. Tenga en cuenta que si deshabilita las cookies, es posible que algunas funciones del sitio web no estén disponibles.
          </p>

          <h3>Contacto</h3>
          <p>
            Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>
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
  document.title = 'Política de Cookies — Bondhu Indian Premium Restaurant'
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

/* Cookie cards grid */
.cookies-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 2rem;
}

.cookie-card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cookie-card__icon {
  font-size: 2rem;
  line-height: 1;
}

.cookie-card__title {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-primary);
}

.cookie-card__desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

@media (min-width: 768px) {
  .legal-page__content {
    padding: var(--section-py) 0;
  }
}
</style>