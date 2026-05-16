<template>
  <section class="experiencia" aria-labelledby="experiencia-heading">
    <div class="experiencia__inner">
      <div class="experiencia__image-col reveal">
        <div class="experiencia__img-wrapper">
          <img
            :src="site.images.experiencia"
            alt="Experiencia gastronómica diferente en Bondhu Indian Premium Restaurant"
            class="experiencia__img"
            width="800"
            height="600"
            loading="lazy"
          />
          <div class="experiencia__img-badge" aria-hidden="true">
            <span class="experiencia__img-badge-star">⭐</span>
            <strong>{{ animatedRating }}</strong>
            <span>en Google</span>
          </div>
        </div>
      </div>
      <div class="experiencia__text-col">
        <p class="experiencia__eyebrow reveal reveal-delay-1">Ferreries · Menorca</p>
        <h2 id="experiencia-heading" class="experiencia__title reveal reveal-delay-2">Una experiencia diferente</h2>
        <div class="experiencia__divider reveal reveal-delay-2"></div>
        <p class="experiencia__desc reveal reveal-delay-3">{{ site.descripcion }}</p>
        <div class="experiencia__tags reveal reveal-delay-4">
          <span v-for="tag in tags" :key="tag" class="experiencia__tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import site from '../../data/siteData.js'

const tags = ['Tandoori', 'Curry', 'Biryani', 'Balti', 'Naan']
const animatedRating = ref('0.0')

onMounted(() => {
  // Scroll reveal
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
    { threshold: 0.12 }
  )
  revealEls.forEach((el) => observer.observe(el))

  // Fallback safety
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
  }, 1500)

  // Counter animation for rating
  const target = site.rating
  const duration = 1400
  const steps = 60
  const stepTime = duration / steps
  let current = 0
  const increment = target / steps
  const counterObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(interval)
          }
          animatedRating.value = current.toFixed(1)
        }, stepTime)
        counterObserver.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  const badge = document.querySelector('.experiencia__img-badge')
  if (badge) counterObserver.observe(badge)
})
</script>

<style scoped>
.experiencia {
  background: var(--color-surface-dark);
  padding: var(--section-py-mobile) 0;
  color: var(--color-text-light);
  overflow: hidden;
  position: relative;
}

.experiencia::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 160, 23, 0.13) 0%, transparent 70%);
  pointer-events: none;
  animation: blobFloat 9s ease-in-out infinite;
}

@keyframes blobFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-22px) scale(1.06); }
}

.experiencia__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

/* Image */
.experiencia__img-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 24px 72px rgba(0, 0, 0, 0.55);
}

.experiencia__img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow) cubic-bezier(0.16, 1, 0.3, 1);
}

.experiencia__img-wrapper:hover .experiencia__img {
  transform: scale(1.05);
}

.experiencia__img-badge {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(10, 4, 0, 0.72);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 160, 23, 0.35);
  border-radius: 100px;
  padding: 0.4rem 0.9rem;
  font-size: 0.82rem;
  color: #fff;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.experiencia__img-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(212, 160, 23, 0.3);
}

.experiencia__img-badge strong {
  color: var(--color-accent);
  font-size: 0.95rem;
}

.experiencia__img-badge-star {
  font-size: 0.9rem;
}

/* Text */
.experiencia__text-col {
  text-align: center;
}

.experiencia__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
  opacity: 0.85;
}

.experiencia__title {
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 4.5vw, 3.2rem);
  font-style: italic;
  letter-spacing: 0.01em;
  margin-bottom: 0.5rem;
  color: #fff;
  line-height: 1.15;
}

.experiencia__divider {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 0.9rem auto 1.75rem;
  border-radius: 2px;
}

.experiencia__desc {
  font-size: 1rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.78);
  max-width: 520px;
  margin: 0 auto 1.75rem;
}

/* Tags */
.experiencia__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.experiencia__tag {
  background: rgba(212, 160, 23, 0.13);
  border: 1px solid rgba(212, 160, 23, 0.32);
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
  transition: background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
}

.experiencia__tag:hover {
  background: rgba(212, 160, 23, 0.22);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(212, 160, 23, 0.2);
}

@media (min-width: 768px) {
  .experiencia {
    padding: var(--section-py) 0;
  }
  .experiencia__inner {
    grid-template-columns: 1fr 1fr;
  }
  .experiencia__text-col {
    text-align: left;
  }
  .experiencia__divider {
    margin-left: 0;
  }
  .experiencia__tags {
    justify-content: flex-start;
  }
  .experiencia__desc {
    margin-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .experiencia::before { animation: none; }
}
</style>
