<template>
  <section class="experiencia section" aria-labelledby="experiencia-titulo">
    <div class="container experiencia__container">
      <div class="experiencia__content">
        <!-- Label -->
        <span class="experiencia__label reveal">Nuestra Propuesta</span>
        <h2 id="experiencia-titulo" class="experiencia__title reveal reveal-delay-1">{{ siteData.experiencia.titulo }}</h2>
        <span class="experiencia__title-line reveal reveal-delay-1" aria-hidden="true"></span>

        <!-- Feature pills -->
        <div class="experiencia__features">
          <div class="experiencia__feature reveal reveal-delay-1">
            <span class="experiencia__feature-icon">🌶️</span>
            <span>Recetas auténticas</span>
          </div>
          <div class="experiencia__feature reveal reveal-delay-2">
            <span class="experiencia__feature-icon">🍛</span>
            <span>Horno Tandoori</span>
          </div>
          <div class="experiencia__feature reveal reveal-delay-3">
            <span class="experiencia__feature-icon">✨</span>
            <span>Ambiente sofisticado</span>
          </div>
        </div>
      </div>

      <div class="experiencia__image-wrap reveal reveal-delay-2">
        <img
          :src="siteData.experiencia.imagen"
          :alt="siteData.experiencia.imagenAlt"
          class="experiencia__img"
          width="800"
          height="600"
          loading="lazy"
        />
        <div class="experiencia__image-badge">
          <span class="experiencia__badge-icon">⭐</span>
          <span class="experiencia__badge-text">Premium<br>Experience</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../../data/siteData.js'

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
    { threshold: 0.12 }
  )

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* Reveal system */
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
.reveal-delay-1 { transition-delay: 0.12s; }
.reveal-delay-2 { transition-delay: 0.24s; }
.reveal-delay-3 { transition-delay: 0.36s; }

.experiencia {
  background: var(--color-surface);
  padding: var(--section-padding) 0;
  position: relative;
  overflow: hidden;
}

.experiencia::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(200, 169, 110, 0.10) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.experiencia__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

.experiencia__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.experiencia__label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.experiencia__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.8rem);
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.25;
  letter-spacing: 0.01em;
  margin-bottom: 0.5rem;
}

.experiencia__title-line {
  display: block;
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
  margin-bottom: var(--space-lg);
}

.experiencia__features {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.experiencia__feature {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.1rem;
  background: rgba(255,255,255,0.75);
  border: 1px solid var(--color-border-gold);
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-text-light);
  backdrop-filter: blur(6px);
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.experiencia__feature:hover {
  background: #fff;
  box-shadow: 0 6px 28px rgba(200, 169, 110, 0.18);
  transform: translateX(6px);
  border-color: rgba(200, 169, 110, 0.45);
  color: var(--color-text);
}

.experiencia__feature-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.experiencia__image-wrap {
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  position: relative;
}

.experiencia__img {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.experiencia__image-wrap:hover .experiencia__img {
  transform: scale(1.05);
}

.experiencia__image-badge {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.1rem;
  background: rgba(15, 8, 0, 0.78);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(200, 169, 110, 0.42);
  border-radius: 100px;
  color: #fff;
  transition: all var(--transition-fast);
}

.experiencia__image-wrap:hover .experiencia__image-badge {
  background: rgba(15, 8, 0, 0.88);
  border-color: rgba(200, 169, 110, 0.65);
}

.experiencia__badge-icon {
  font-size: 1rem;
}

.experiencia__badge-text {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-primary);
  line-height: 1.2;
}

@media (max-width: 768px) {
  .experiencia {
    padding: var(--section-padding-mobile) 0;
  }

  .experiencia__container {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .experiencia::before {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
