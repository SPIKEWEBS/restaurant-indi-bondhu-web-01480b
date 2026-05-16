<template>
  <main id="main-content" class="legal-view">
    <div class="legal-hero">
      <div class="container">
        <h1 class="legal-hero__title">Aviso Legal</h1>
      </div>
    </div>
    <section class="legal-content section bg-surface">
      <div class="container legal-content__inner">
        <h2 class="legal-content__heading">Aviso Legal — Bondhu Indian Premium Restaurant</h2>
        <p class="legal-content__text">
          En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los datos identificativos del titular del sitio web.
        </p>
        <p class="legal-content__text">
          <strong>Nombre del establecimiento:</strong> Bondhu Restaurant<br />
          <strong>Dirección:</strong> Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears<br />
          <strong>Teléfono:</strong> (+34) 971 37 34 73<br />
          <strong>Email:</strong> majspice.bondhu@gmail.com
        </p>
        <p class="legal-content__text">
          El uso de este sitio web implica la aceptación plena de los términos y condiciones aquí indicados. Si el usuario no acepta los presentes términos, deberá abstenerse de hacer uso del presente sitio web.
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
  document.title = 'Aviso Legal — Bondhu Indian Premium Restaurant'
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