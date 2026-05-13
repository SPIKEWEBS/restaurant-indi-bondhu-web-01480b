<template>
  <section class="restaurante section section--surface" aria-labelledby="restaurante-titulo">
    <div class="container">
      <div class="restaurante__header">
        <h2 id="restaurante-titulo" class="restaurante__title">{{ siteData.restaurante.titulo }}</h2>
        <h3 class="restaurante__subtitle">{{ siteData.restaurante.subtitulo }}</h3>
        <p class="restaurante__desc">{{ siteData.restaurante.descripcion1 }}</p>
        <p class="restaurante__desc">{{ siteData.restaurante.descripcion2 }}</p>
        <div class="restaurante__cta">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary restaurante__btn"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            {{ siteData.restaurante.ctaLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.restaurante {
  padding: var(--section-padding) 0;
}

.restaurante__header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.restaurante__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-heading);
  letter-spacing: 0.08em;
  margin-bottom: var(--space-sm);
}

.restaurante__subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: var(--color-primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.restaurante__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-sm);
}

.restaurante__cta {
  margin-top: var(--space-xl);
}

.restaurante__btn {
  font-size: var(--font-size-lg);
  padding: 1rem 2.5rem;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .restaurante {
    padding: var(--section-padding-mobile) 0;
  }
}
</style>