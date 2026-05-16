<template>
  <section class="especialidades" aria-labelledby="especialidades-heading">
    <div class="especialidades__container">
      <p class="especialidades__eyebrow reveal">Auténtica cocina india</p>
      <h2 id="especialidades-heading" class="especialidades__title reveal reveal-delay-1">ESPECIALIDADES HINDÚES</h2>
      <div class="section-divider reveal reveal-delay-1"></div>

      <!-- Marquee of specialties -->
      <div class="especialidades__marquee reveal reveal-delay-2" aria-hidden="true">
        <div class="especialidades__marquee-track">
          <span v-for="i in 3" :key="i">
            <span v-for="item in marqueeItems" :key="item + i" class="especialidades__marquee-item">
              {{ item }}
            </span>
          </span>
        </div>
      </div>

      <p class="especialidades__desc reveal reveal-delay-2">{{ site.descripcion }}</p>

      <!-- Image gallery grid -->
      <div class="especialidades__gallery">
        <div
          v-for="(img, index) in site.images.especialidades"
          :key="index"
          class="especialidades__gallery-item reveal"
          :class="[
            index === 0 ? 'especialidades__gallery-item--featured' : '',
            `reveal-delay-${index + 1}`
          ]"
        >
          <img
            :src="img"
            :alt="`Plato de especialidad hindú en Bondhu Restaurant – imagen ${index + 1}`"
            class="especialidades__gallery-img"
            width="800"
            height="600"
            loading="lazy"
          />
          <div class="especialidades__gallery-overlay" aria-hidden="true"></div>
        </div>
      </div>

      <div class="especialidades__cta reveal reveal-delay-3">
        <RouterLink to="/carta/" class="btn btn-primary" aria-label="Ver la carta de Bondhu Indian Premium Restaurant">
          <span aria-hidden="true">🍛</span> Ver nuestra Carta
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../../data/siteData.js'

const marqueeItems = ['Tandoori', '✦', 'Curry', '✦', 'Biryanis', '✦', 'Balti', '✦', 'Naan', '✦']

onMounted(() => {
  const revealEls = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  revealEls.forEach((el) => observer.observe(el))

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
  }, 1500)
})
</script>

<style scoped>
.especialidades {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
  overflow: hidden;
}

.especialidades__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.especialidades__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.especialidades__title {
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 4.5vw, 3.2rem);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}

.section-divider {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 0.75rem auto 2rem;
  border-radius: 2px;
}

/* Marquee */
.especialidades__marquee {
  overflow: hidden;
  margin-bottom: 2.5rem;
  -webkit-mask-image: linear-gradient(90deg, transparent, #fff 15%, #fff 85%, transparent);
  mask-image: linear-gradient(90deg, transparent, #fff 15%, #fff 85%, transparent);
}

.especialidades__marquee-track {
  display: flex;
  align-items: center;
  gap: 0;
  animation: marqueeScroll 22s linear infinite;
  width: max-content;
}

.especialidades__marquee-item {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: 0 1.25rem;
  white-space: nowrap;
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
}

.especialidades__desc {
  max-width: 680px;
  margin: 0 auto 3rem;
  font-size: 1.02rem;
  color: var(--color-text-muted);
  line-height: 1.85;
}

/* Gallery grid */
.especialidades__gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.especialidades__gallery-item {
  border-radius: var(--radius-card);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: var(--shadow-card);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.especialidades__gallery-item--featured {
  grid-column: 1 / -1;
}

.especialidades__gallery-item:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 0 40px rgba(var(--color-primary-rgb), 0.22), var(--shadow-card-hover);
}

.especialidades__gallery-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow) cubic-bezier(0.16, 1, 0.3, 1);
}

.especialidades__gallery-item--featured .especialidades__gallery-img {
  height: 320px;
}

.especialidades__gallery-item:hover .especialidades__gallery-img {
  transform: scale(1.07);
}

.especialidades__gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,4,0,0.5) 0%, transparent 55%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.especialidades__gallery-item:hover .especialidades__gallery-overlay {
  opacity: 1;
}

.especialidades__cta {
  display: flex;
  justify-content: center;
}

@media (min-width: 640px) {
  .especialidades__gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  .especialidades__gallery-item--featured {
    grid-column: span 2;
  }
}

@media (min-width: 900px) {
  .especialidades {
    padding: var(--section-py) 0;
  }
  .especialidades__gallery {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
  .especialidades__gallery-item--featured {
    grid-column: span 2;
    grid-row: span 1;
  }
  .especialidades__gallery-img {
    height: 260px;
  }
  .especialidades__gallery-item--featured .especialidades__gallery-img {
    height: 260px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .especialidades__marquee-track { animation: none; }
}
</style>
