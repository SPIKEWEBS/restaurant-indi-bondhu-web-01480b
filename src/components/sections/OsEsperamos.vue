<template>
  <section class="esperamos" aria-labelledby="esperamos-heading">
    <div class="esperamos__container">
      <h2 id="esperamos-heading" class="esperamos__title">Os esperamos!</h2>
      <div class="section-divider"></div>
      <a
        :href="`tel:${site.telefonoRaw}`"
        class="btn btn-accent"
        aria-label="Llamar y reservar ahora en Bondhu Indian Premium Restaurant"
      >
        Llama y Reserva Ahora >>>
      </a>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.esperamos {
  background: var(--color-primary);
  padding: 60px 0;
  text-align: center;
}

.esperamos__container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.esperamos__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-text-light);
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0 auto 2rem;
  border-radius: 2px;
}

.btn-accent {
  display: inline-block;
  padding: 0.9rem 2.5rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-align: center;
  background: var(--color-accent);
  color: var(--color-text);
  border: 2px solid var(--color-accent);
  text-decoration: none;
  transition: background var(--transition-base), color var(--transition-base), transform var(--transition-fast);
}

.btn-accent:hover {
  background: var(--color-accent-light);
  border-color: var(--color-accent-light);
  transform: translateY(-2px);
}
</style>