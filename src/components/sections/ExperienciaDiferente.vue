<template>
  <section class="experiencia section" aria-labelledby="experiencia-titulo">
    <div class="container experiencia__container">
      <div class="experiencia__content">
        <h2 id="experiencia-titulo" class="experiencia__title">{{ siteData.experiencia.titulo }}</h2>
      </div>
      <div class="experiencia__image-wrap">
        <img
          :src="siteData.experiencia.imagen"
          :alt="siteData.experiencia.imagenAlt"
          class="experiencia__img"
          width="800"
          height="600"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.experiencia {
  background: var(--color-surface);
  padding: var(--section-padding) 0;
}

.experiencia__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

.experiencia__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.experiencia__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.8rem);
  color: var(--color-heading);
  line-height: 1.3;
  letter-spacing: 0.02em;
}

.experiencia__image-wrap {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.experiencia__img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-base);
}

.experiencia__image-wrap:hover .experiencia__img {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .experiencia {
    padding: var(--section-padding-mobile) 0;
  }

  .experiencia__container {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>