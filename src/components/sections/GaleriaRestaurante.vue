<template>
  <section class="galeria section bg-white" aria-label="Galería del restaurante Bondhu">
    <div class="container">
      <!-- Gallery grid -->
      <div class="galeria__grid">
        <div
          v-for="(item, index) in galeria"
          :key="index"
          class="galeria__item"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            :width="item.width"
            :height="item.height"
            class="galeria__img"
            loading="lazy"
          />
        </div>
      </div>

      <hr class="galeria__divider" />

      <!-- Os esperamos -->
      <h1 class="galeria__esperamos">Os esperamos!</h1>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'

const galeria = siteData.galeria
</script>

<style scoped>
.galeria {
  padding: var(--sp-section) 0;
}

.galeria__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--sp-md);
}

.galeria__item {
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  aspect-ratio: 3 / 4;
}

.galeria__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-lg);
  transition: transform var(--transition-slow);
  display: block;
}

.galeria__item:hover .galeria__img {
  transform: scale(1.03);
}

.galeria__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-mid);
  border: none;
  margin: var(--sp-2xl) 0;
}

.galeria__esperamos {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  letter-spacing: 0.02em;
}

@media (max-width: 600px) {
  .galeria {
    padding: var(--sp-section-mobile) 0;
  }
  .galeria__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-sm);
  }
}
</style>