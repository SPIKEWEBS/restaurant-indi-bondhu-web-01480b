<template>
  <section class="experiencia" aria-labelledby="experiencia-heading">
    <div class="experiencia__inner">
      <div class="experiencia__image-col">
        <img
          :src="site.images.experiencia"
          alt="Experiencia gastronómica diferente en Bondhu Indian Premium Restaurant"
          class="experiencia__img"
          width="800"
          height="600"
          loading="lazy"
        />
      </div>
      <div class="experiencia__text-col">
        <h2 id="experiencia-heading" class="experiencia__title">ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ</h2>
        <div class="section-divider"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.experiencia {
  background: var(--color-surface-dark);
  padding: var(--section-py-mobile) 0;
  color: var(--color-text-light);
}

.experiencia__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

.experiencia__image-col {
  overflow: hidden;
  border-radius: var(--radius-md);
}

.experiencia__img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: var(--radius-md);
  display: block;
}

.experiencia__text-col {
  text-align: center;
}

.experiencia__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-accent);
  font-style: italic;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 1rem auto 0;
  border-radius: 2px;
}

@media (min-width: 768px) {
  .experiencia {
    padding: var(--section-py) 0;
  }
  .experiencia__inner {
    grid-template-columns: 1fr 1fr;
  }
  .experiencia__text-col {
    text-align: left;
  }
  .section-divider {
    margin-left: 0;
  }
}
</style>