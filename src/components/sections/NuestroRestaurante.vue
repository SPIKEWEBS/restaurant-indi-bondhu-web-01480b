<template>
  <section class="restaurante section section--surface" aria-labelledby="restaurante-titulo">
    <div class="container">
      <div class="restaurante__header">
        <span class="restaurante__eyebrow">Bienvenido</span>
        <h2 id="restaurante-titulo" class="restaurante__title">{{ siteData.restaurante.titulo }}</h2>
        <span class="restaurante__title-line" aria-hidden="true"></span>
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
  position: relative;
  overflow: hidden;
}

.restaurante::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(200, 169, 110, 0.09) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.restaurante__header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.restaurante__eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.restaurante__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
}

.restaurante__title-line {
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin: 0.5rem auto var(--space-sm);
}

.restaurante__subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.82rem, 2vw, 1rem);
  color: var(--color-primary);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: var(--space-lg);
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
  font-size: 1rem;
  padding: 1rem 2.8rem;
  letter-spacing: 0.05em;
  border-radius: var(--radius-btn);
}

@media (max-width: 768px) {
  .restaurante {
    padding: var(--section-padding-mobile) 0;
  }
}
</style>
