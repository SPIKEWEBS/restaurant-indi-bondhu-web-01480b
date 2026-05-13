<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <h1 class="legal-page__title">Política de Cookies</h1>
    </div>

    <section class="legal-page__body section container">
      <div class="legal-page__content">
        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que los sitios web colocan en el dispositivo del usuario al visitarlos. Permiten que el sitio web recuerde las acciones y preferencias del usuario durante un período de tiempo determinado.</p>

        <h2>Tipos de cookies que utilizamos</h2>
        <p><strong>Cookies necesarias:</strong> Son imprescindibles para que el sitio web funcione correctamente. Incluyen cookies de sesión y de seguridad.</p>
        <p><strong>Cookies de análisis:</strong> Nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio.</p>
        <p><strong>Cookies de preferencias:</strong> Permiten que el sitio web recuerde las preferencias del usuario (como el idioma o la región) para ofrecerle funcionalidades mejoradas y personalizadas.</p>

        <h2>Gestión de cookies</h2>
        <p>El usuario puede configurar su navegador para rechazar todas las cookies o para recibir un aviso cuando se envíe una cookie. Sin embargo, si rechaza las cookies, es posible que algunas funcionalidades del sitio no estén disponibles.</p>
        <p>Para más información sobre cómo gestionar las cookies en los diferentes navegadores, consulte la ayuda de su navegador.</p>

        <h2>Contacto</h2>
        <p>Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
          <a :href="siteData.emailHref" class="legal-page__link" :aria-label="`Enviar email sobre política de cookies a ${siteData.email}`">
            {{ siteData.email }}
          </a>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Política de Cookies — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.legal-page {
  padding-top: var(--navbar-height);
}

.legal-page__hero {
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, #2d1b00 100%);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
}

.legal-page__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: #fff;
  letter-spacing: 0.08em;
}

.legal-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.legal-page__content {
  max-width: 800px;
  margin: 0 auto;
}

.legal-page__content h2 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  font-size: 1.4rem;
  margin: var(--space-lg) 0 var(--space-sm);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-border);
}

.legal-page__content p {
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-sm);
}

.legal-page__link {
  color: var(--color-primary);
  text-decoration: none;
}

.legal-page__link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }
}
</style>