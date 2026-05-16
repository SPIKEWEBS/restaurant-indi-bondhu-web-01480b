<template>
  <section class="especialidades" aria-labelledby="especialidades-heading">
    <div class="especialidades__container">
      <h2 id="especialidades-heading" class="especialidades__title">ESPECIALIDADES HINDÚES</h2>
      <div class="section-divider"></div>
      <h3 class="especialidades__subtitle">{{ site.especialidades }}</h3>
      <p class="especialidades__desc">{{ site.descripcion }}</p>

      <!-- Image gallery grid -->
      <div class="especialidades__gallery">
        <div
          v-for="(img, index) in site.images.especialidades"
          :key="index"
          class="especialidades__gallery-item"
        >
          <img
            :src="img"
            :alt="`Plato de especialidad hindú en Bondhu Restaurant – imagen ${index + 1}`"
            class="especialidades__gallery-img"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </div>

      <div class="especialidades__cta">
        <RouterLink to="/carta/" class="btn btn-primary" aria-label="Ver la carta de Bondhu Indian Premium Restaurant">
          Ver nuestra Carta
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.especialidades {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.especialidades__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.especialidades__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem auto 1.25rem;
  border-radius: 2px;
}

.especialidades__subtitle {
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  color: var(--color-accent);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.especialidades__desc {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

/* Gallery grid */
.especialidades__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.especialidades__gallery-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.especialidades__gallery-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.especialidades__gallery-item:hover .especialidades__gallery-img {
  transform: scale(1.04);
}

.especialidades__cta {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .especialidades {
    padding: var(--section-py) 0;
  }
}
</style>