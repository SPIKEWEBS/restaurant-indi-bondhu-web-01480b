<template>
  <main id="main-content" class="carta-page">
    <div class="carta-page__hero">
      <div class="carta-page__hero-overlay"></div>
      <div class="carta-page__gradient-anim" aria-hidden="true"></div>
      <div class="carta-page__hero-content">
        <span class="carta-page__eyebrow reveal">Bondhu Indian Premium Restaurant</span>
        <h1 class="carta-page__title reveal reveal-delay-1">{{ siteData.carta.titulo }}</h1>
        <span class="carta-page__title-line reveal reveal-delay-2" aria-hidden="true"></span>
      </div>
    </div>

    <section class="carta-page__body section container" aria-labelledby="carta-titulo">
      <div class="carta-page__intro">
        <p class="carta-page__desc reveal">{{ siteData.carta.descripcion }}</p>
        <div class="carta-page__ctas">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary carta-page__cta reveal reveal-delay-1"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            ☎ {{ siteData.carta.ctaLabel }}
          </a>
          <a
            :href="siteData.telefonoHref"
            class="btn btn-outline carta-page__cta reveal reveal-delay-2"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            Llama y reserva Ahora >>>
          </a>
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary carta-page__cta reveal reveal-delay-3"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            Llama y reserva Ahora >>>
          </a>
          <a
            :href="siteData.telefonoHref"
            class="btn btn-outline carta-page__cta reveal reveal-delay-1"
            aria-label="Llamar y reservar ahora en Bondhu Restaurant"
          >
            Llama y reserva Ahora >>>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Nuestra Carta — Bondhu Indian Premium Restaurant'

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
/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
.reveal-delay-1 { transition-delay: 0.12s; }
.reveal-delay-2 { transition-delay: 0.24s; }
.reveal-delay-3 { transition-delay: 0.38s; }

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.carta-page {
  padding-top: var(--navbar-height);
}

.carta-page__hero {
  position: relative;
  background: linear-gradient(160deg, #1a0e02 0%, #0f0600 55%, #2a1500 100%);
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carta-page__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 80% at 15% 60%, rgba(200,169,110,0.15) 0%, transparent 65%),
    radial-gradient(ellipse 40% 60% at 85% 30%, rgba(139,0,0,0.20) 0%, transparent 65%);
  pointer-events: none;
}

.carta-page__gradient-anim {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(120deg,
    var(--color-primary),
    var(--color-secondary),
    #e8c882,
    var(--color-primary)
  );
  background-size: 300% 300%;
  animation: gradientShift 6s ease infinite;
  pointer-events: none;
}

.carta-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.22);
}

.carta-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.carta-page__eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(200, 169, 110, 0.82);
}

.carta-page__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.1em;
  text-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

.carta-page__title-line {
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin-top: 0.5rem;
}

.carta-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  text-align: center;
}

.carta-page__intro {
  max-width: 700px;
  margin: 0 auto;
}

.carta-page__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-2xl);
}

.carta-page__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
}

.carta-page__cta {
  min-width: 220px;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.carta-page__cta:hover {
  transform: translateY(-3px) scale(1.03);
}

@media (max-width: 768px) {
  .carta-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }

  .carta-page__ctas {
    flex-direction: column;
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .carta-page__gradient-anim {
    animation: none;
  }
}
</style>
