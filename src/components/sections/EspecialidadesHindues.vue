<template>
  <section class="especialidades section" aria-labelledby="especialidades-titulo">
    <div class="container">
      <div class="especialidades__header">
        <span class="especialidades__eyebrow reveal">Lo mejor de la India</span>
        <h2 id="especialidades-titulo" class="especialidades__title reveal reveal-delay-1">{{ siteData.especialidades.titulo }}</h2>
        <span class="especialidades__title-line reveal reveal-delay-1" aria-hidden="true"></span>
        <h3 class="especialidades__subtitle reveal reveal-delay-2">{{ siteData.especialidades.subtitulo }}</h3>
        <p class="especialidades__desc reveal reveal-delay-2">{{ siteData.especialidades.descripcion }}</p>
      </div>

      <!-- Marquee strip -->
      <div class="especialidades__marquee-wrap" aria-hidden="true">
        <div class="especialidades__marquee">
          <span v-for="item in marqueeItems" :key="item + Math.random()" class="especialidades__marquee-item">{{ item }}</span>
        </div>
      </div>

      <div class="especialidades__grid">
        <div
          v-for="(img, idx) in siteData.especialidades.imagenes"
          :key="idx"
          class="especialidades__card reveal"
          :class="`reveal-delay-${idx + 1}`"
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
            <div class="especialidades__card-overlay" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../../data/siteData.js'

const marqueeItems = [
  '🍛 Biryanis', '🌶️ Curry', '🔥 Tandoori', '🫓 Naan', '🥘 Balti', '🫙 Masala', '🍲 Dal Makhani', '✨ Mango Lassi',
  '🍛 Biryanis', '🌶️ Curry', '🔥 Tandoori', '🫓 Naan', '🥘 Balti', '🫙 Masala', '🍲 Dal Makhani', '✨ Mango Lassi',
]

onMounted(() => {
  // Safety fallback
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
  }, 1500)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
.reveal-delay-1 { transition-delay: 0.10s; }
.reveal-delay-2 { transition-delay: 0.20s; }
.reveal-delay-3 { transition-delay: 0.30s; }
.reveal-delay-4 { transition-delay: 0.40s; }

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
  letter-spacing: 0.22em;
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
  letter-spacing: 0.16em;
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
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
  border-top: 1px solid var(--color-border-gold);
  border-bottom: 1px solid var(--color-border-gold);
  padding: 0.8rem 0;
  background: var(--color-surface-alt);
}

.especialidades__marquee {
  display: flex;
  width: max-content;
  animation: marqueeScroll 26s linear infinite;
}

.especialidades__marquee-item {
  padding: 0 2.6rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
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
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  background: var(--color-surface);
  position: relative;
}

.especialidades__card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0,0,0,0.16), 0 0 0 1px rgba(200,169,110,0.25);
}

.especialidades__card-img-wrap {
  overflow: hidden;
  position: relative;
}

.especialidades__card-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.especialidades__card:hover .especialidades__card-img {
  transform: scale(1.07);
}

.especialidades__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15,8,0,0.35) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.especialidades__card:hover .especialidades__card-overlay {
  opacity: 1;
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

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .especialidades__marquee {
    animation: none;
  }
}
</style>
