<template>
  <section class="experiencia section" aria-labelledby="experiencia-heading">
    <div class="experiencia__inner container">
      <div class="experiencia__image-col">
        <img
          :src="site.experiencia.image"
          :alt="site.experiencia.imageAlt"
          class="experiencia__img"
          width="800"
          height="600"
          loading="lazy"
        />
      </div>
      <div class="experiencia__text-col">
        <h1 id="experiencia-heading" class="experiencia__heading">
          {{ site.experiencia.heading }}
        </h1>
        <span class="divider"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.experiencia {
  background: var(--color-surface);
}

.experiencia__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .experiencia__inner {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.experiencia__img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  object-fit: cover;
}

.experiencia__text-col {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .experiencia__text-col {
    text-align: left;
    align-items: flex-start;
  }
}

.experiencia__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 0.04em;
  line-height: 1.15;
}
</style>