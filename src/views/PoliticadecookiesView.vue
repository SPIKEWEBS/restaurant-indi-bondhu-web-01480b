<template>
  <main id="main-content" class="legal-view">
    <div class="legal-hero">
      <div class="container">
        <h1 class="legal-hero__title">Política de Cookies</h1>
      </div>
    </div>
    <section class="legal-content section bg-surface">
      <div class="container legal-content__inner">
        <h2 class="legal-content__heading">Política de Cookies — Bondhu Indian Premium Restaurant</h2>
        <p class="legal-content__text">
          Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación del usuario y para ofrecer un servicio correcto y seguro.
        </p>
        <p class="legal-content__text">
          <strong>¿Qué son las cookies?</strong><br />
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita una página web. Permiten recordar información sobre su visita, lo que puede hacer que sea más fácil volver a visitar el sitio y hacer que el sitio le resulte más útil.
        </p>
        <p class="legal-content__text">
          <strong>Cookies esenciales:</strong> Son necesarias para el correcto funcionamiento del sitio web. No pueden desactivarse en nuestros sistemas.
        </p>
        <p class="legal-content__text">
          Puede configurar su navegador para rechazar todas las cookies o para recibir una alerta cuando se envíe una cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de este sitio no funcionen correctamente.
        </p>
        <RouterLink to="/" class="btn btn-primary legal-back-btn" aria-label="Volver a la página de inicio de Bondhu">
          ← Volver al inicio
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Política de Cookies — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.legal-view {
  padding-top: var(--navbar-height);
}

.legal-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4a2e22 100%);
  padding: var(--sp-4xl) var(--sp-lg);
  text-align: center;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.legal-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.legal-content {
  padding: var(--sp-section) 0;
}

.legal-content__inner {
  max-width: 800px;
}

.legal-content__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--sp-xl);
}

.legal-content__text {
  font-size: var(--fs-base);
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: var(--sp-lg);
}

.legal-back-btn {
  margin-top: var(--sp-xl);
  display: inline-block;
}
</style>