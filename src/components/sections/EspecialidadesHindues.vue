<template>
  <section class="especialidades section" aria-labelledby="especialidades-titulo">
    <div class="container">
      <div class="especialidades__header">
        <h2 id="especialidades-titulo" class="especialidades__title">{{ siteData.especialidades.titulo }}</h2>
        <h3 class="especialidades__subtitle">{{ siteData.especialidades.subtitulo }}</h3>
        <p class="especialidades__desc">{{ siteData.especialidades.descripcion }}</p>
      </div>

      <div class="especialidades__grid">
        <div
          v-for="(img, idx) in siteData.especialidades.imagenes"
          :key="idx"
          class="especialidades__card"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="especialidades__card-img"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.especialidades {
  background: var(--color-bg);
  padding: var(--section-padding) 0;
}

.especialidades__header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.especialidades__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-heading);
  letter-spacing: 0.08em;
  margin-bottom: var(--space-sm);
}

.especialidades__subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: var(--color-primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.especialidades__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.8;
}

.especialidades__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-md);
}

.especialidades__card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  will-change: transform;
}

.especialidades__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.especialidades__card-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .especialidades {
    padding: var(--section-padding-mobile) 0;
  }

  .especialidades__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
  }

  .especialidades__card-img {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .especialidades__grid {
    grid-template-columns: 1fr;
  }
}
</style>