<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <div class="legal-page__overlay" aria-hidden="true"></div>
      <div class="legal-page__hero-content container">
        <h1 class="legal-page__heading">Política de Cookies</h1>
        <span class="divider"></span>
      </div>
    </div>

    <section class="legal-page__body section">
      <div class="container">
        <div class="legal-page__content">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web guardan en su dispositivo
            cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de
            manera eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>
          <h3>Cookies utilizadas en este sitio</h3>
          <p>
            Este sitio web utiliza cookies propias y de terceros para permitir un correcto
            funcionamiento y seguridad, y para ofrecer la mejor experiencia posible al usuario.
          </p>
          <h3>Cookies técnicas (necesarias)</h3>
          <p>
            Son aquellas que permiten al usuario navegar por el sitio web y utilizar sus
            funcionalidades. Son estrictamente necesarias para el correcto funcionamiento del sitio.
          </p>
          <h3>Cómo desactivar las cookies</h3>
          <p>
            Puede configurar su navegador para rechazar todas o algunas cookies, o para que le avise
            cuando los sitios web instalan o acceden a las cookies. Consulte la ayuda de su
            navegador para obtener más información.
          </p>
          <h3>Contacto</h3>
          <p>
            Para cualquier consulta relacionada con nuestra política de cookies, puede contactarnos
            en: {{ site.email }}
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