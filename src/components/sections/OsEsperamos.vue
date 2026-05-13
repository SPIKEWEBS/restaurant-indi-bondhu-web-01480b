<template>
  <section class="esperamos section" aria-labelledby="esperamos-titulo">
    <div class="container esperamos__container">
      <h2 id="esperamos-titulo" class="esperamos__title">{{ siteData.esperamos.titulo }}</h2>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.esperamos {
  background: var(--color-bg);
  padding: var(--section-padding) 0;
  text-align: center;
}

.esperamos__container {
  max-width: 700px;
  margin: 0 auto;
}

.esperamos__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--color-heading);
  letter-spacing: 0.05em;
  font-style: italic;
}

@media (max-width: 768px) {
  .esperamos {
    padding: var(--section-padding-mobile) 0;
  }
}
</style>