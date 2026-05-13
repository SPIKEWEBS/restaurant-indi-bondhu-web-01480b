<template>
  <main id="main-content" class="mesa-page">
    <div class="mesa-page__hero">
      <div class="mesa-page__hero-overlay"></div>
      <div class="mesa-page__gradient-anim" aria-hidden="true"></div>
      <div class="mesa-page__hero-content">
        <span class="mesa-page__eyebrow reveal">Bondhu Restaurant</span>
        <h1 class="mesa-page__title reveal reveal-delay-1">{{ siteData.eligeTuMesa.titulo }}</h1>
        <span class="mesa-page__title-line reveal reveal-delay-2" aria-hidden="true"></span>
      </div>
    </div>

    <section class="mesa-page__body section container" aria-labelledby="mesa-subtitulo">
      <div class="mesa-page__card reveal">
        <h2 id="mesa-subtitulo" class="mesa-page__subtitle reveal reveal-delay-1">{{ siteData.eligeTuMesa.comedor.titulo }}</h2>
        <span class="mesa-page__subtitle-line reveal reveal-delay-1" aria-hidden="true"></span>
        <p class="mesa-page__desc reveal reveal-delay-2">{{ siteData.eligeTuMesa.comedor.descripcion }}</p>

        <div class="mesa-page__cta reveal reveal-delay-3">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary"
            aria-label="Llamar y reservar mesa ahora en Bondhu Restaurant"
          >
            ☎ Llama y Reserva Ahora >>>
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
  document.title = 'Elige Tu Mesa — Bondhu Indian Premium Restaurant'

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

.mesa-page {
  padding-top: var(--navbar-height);
}

.mesa-page__hero {
  position: relative;
  background: linear-gradient(160deg, #120900 0%, #1e1000 55%, #0f0600 100%);
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.mesa-page__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 70% at 70% 50%, rgba(200,169,110,0.14) 0%, transparent 65%),
    radial-gradient(ellipse 45% 55% at 20% 40%, rgba(139,0,0,0.18) 0%, transparent 65%);
  pointer-events: none;
}

.mesa-page__gradient-anim {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(120deg,
    var(--color-secondary),
    var(--color-primary),
    #e8c882,
    var(--color-secondary)
  );
  background-size: 300% 300%;
  animation: gradientShift 7s ease infinite;
  pointer-events: none;
}

.mesa-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.22);
}

.mesa-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.mesa-page__eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(200, 169, 110, 0.82);
}

.mesa-page__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.1em;
  text-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

.mesa-page__title-line {
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin-top: 0.5rem;
}

.mesa-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.mesa-page__card {
  max-width: 820px;
  margin: 0 auto;
  padding: var(--space-2xl);
  background: var(--color-surface);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border-gold);
  box-shadow: var(--shadow-card);
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.mesa-page__card:hover {
  box-shadow: 0 12px 48px rgba(200, 169, 110, 0.14);
}

.mesa-page__subtitle {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.4rem;
}

.mesa-page__subtitle-line {
  display: block;
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin: 0.4rem auto var(--space-lg);
}

.mesa-page__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.mesa-page__cta {
  margin-top: var(--space-lg);
}

.mesa-page__cta .btn {
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.mesa-page__cta .btn:hover {
  transform: translateY(-3px) scale(1.03);
}

@media (max-width: 768px) {
  .mesa-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }

  .mesa-page__card {
    padding: var(--space-lg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .mesa-page__gradient-anim {
    animation: none;
  }
}
</style>
