<template>
  <section class="especialidades section" aria-labelledby="especialidades-titulo">
    <div class="container">
      <div class="especialidades__header">
        <span class="especialidades__eyebrow">Lo mejor de la India</span>
        <h2 id="especialidades-titulo" class="especialidades__title">{{ siteData.especialidades.titulo }}</h2>
        <span class="especialidades__title-line" aria-hidden="true"></span>
        <h3 class="especialidades__subtitle">{{ siteData.especialidades.subtitulo }}</h3>
        <p class="especialidades__desc">{{ siteData.especialidades.descripcion }}</p>
      </div>

      <!-- Marquee strip -->
      <div class="especialidades__marquee-wrap" aria-hidden="true">
        <div class="especialidades__marquee">
          <span v-for="item in marqueeItems" :key="item" class="especialidades__marquee-item">{{ item }}</span>
        </div>
      </div>

      <div class="especialidades__grid">
        <div
          v-for="(img, idx) in siteData.especialidades.imagenes"
          :key="idx"
          class="especialidades__card"
        >
          <div class="especialidades__card-img-wrap">
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
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'

const marqueeItems = [
  '🍛 Biryanis', '🌶️ Curry', '🔥 Tandoori', '🫓 Naan', '🥘 Balti', '🫙 Masala', '🍲 Dal Makhani', '✨ Mango Lassi',
  '🍛 Biryanis', '🌶️ Curry', '🔥 Tandoori', '🫓 Naan', '🥘 Balti', '🫙 Masala', '🍲 Dal Makhani', '✨ Mango Lassi',
]
</script>

<style scoped>
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.especialidades {
  background: var(--color-bg);
  padding: var(--section-padding) 0;
}

.especialidades__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.especialidades__eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.especialidades__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
  /* Gradient text */
  background: linear-gradient(135deg, var(--color-heading) 30%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.especialidades__title-line {
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin: 0.5rem auto var(--space-sm);
}

.especialidades__subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.82rem, 2vw, 1rem);
  color: var(--color-primary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.especialidades__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Marquee */
.especialidades__marquee-wrap {
  overflow: hidden;
  margin: var(--space-xl) 0;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
  border-top: 1px solid var(--color-border-gold);
  border-bottom: 1px solid var(--color-border-gold);
  padding: 0.7rem 0;
  background: var(--color-surface-alt);
}

.especialidades__marquee {
  display: flex;
  width: max-content;
  animation: marqueeScroll 28s linear infinite;
}

.especialidades__marquee-item {
  padding: 0 2.5rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-light);
  white-space: nowrap;
}

/* Grid */
.especialidades__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-md);
}

.especialidades__card {
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border-gold);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  will-change: transform;
  background: var(--color-surface);
}

.especialidades__card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
}

.especialidades__card-img-wrap {
  overflow: hidden;
}

.especialidades__card-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.55s ease;
}

.especialidades__card:hover .especialidades__card-img {
  transform: scale(1.06);
}

@media (max-width: 768px) {
  .especialidades {
    padding: var(--section-padding-mobile) 0;
  }

  .especialidades__grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
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
