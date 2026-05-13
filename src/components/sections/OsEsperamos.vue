<template>
  <section class="esperamos" aria-labelledby="esperamos-titulo">
    <div class="esperamos__bg" aria-hidden="true"></div>

    <!-- Animated gradient overlay -->
    <div class="esperamos__gradient-anim" aria-hidden="true"></div>

    <div class="esperamos__container">
      <span class="esperamos__eyebrow reveal">Ferreries · Menorca</span>
      <h2 id="esperamos-titulo" class="esperamos__title reveal reveal-delay-1">{{ siteData.esperamos.titulo }}</h2>
      <span class="esperamos__deco reveal reveal-delay-2" aria-hidden="true">✦ ✦ ✦</span>

      <!-- Stats row -->
      <div class="esperamos__stats reveal reveal-delay-2">
        <div class="esperamos__stat">
          <span class="esperamos__stat-value" ref="ratingRef">0</span>
          <span class="esperamos__stat-label">⭐ Rating Google</span>
        </div>
        <div class="esperamos__stat-sep" aria-hidden="true"></div>
        <div class="esperamos__stat">
          <span class="esperamos__stat-value" ref="reviewsRef">0</span>
          <span class="esperamos__stat-label">💬 Reseñas</span>
        </div>
      </div>

      <p class="esperamos__address reveal reveal-delay-3">
        📍 {{ siteData.direccion }}
      </p>
      <a :href="siteData.telefonoHref" class="esperamos__phone reveal reveal-delay-3" :aria-label="`Llamar al restaurante: ${siteData.telefono}`">
        ☎ (+34) {{ siteData.telefono }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import siteData from '../../data/siteData.js'

const ratingRef = ref(null)
const reviewsRef = ref(null)

function animateCounter(el, end, decimals = 0, duration = 1400) {
  if (!el) return
  const step = duration / 28
  let current = 0
  const increment = end / (duration / step)
  const timer = setInterval(() => {
    current += increment
    if (current >= end) {
      current = end
      clearInterval(timer)
    }
    el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current)
  }, step)
}

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

  // Counter animation triggered when section enters view
  let countersStarted = false
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true
          animateCounter(ratingRef.value, parseFloat(siteData.rating), 1, 1200)
          animateCounter(reviewsRef.value, parseInt(siteData.ratingTotal), 0, 1400)
          counterObserver.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  const section = document.querySelector('.esperamos')
  if (section) counterObserver.observe(section)
})
</script>

<style scoped>
@keyframes floatBlobSlow {
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-18px) scale(1.05); }
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

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

.esperamos {
  position: relative;
  padding: var(--section-padding) 0;
  background: linear-gradient(160deg, #1a0e02 0%, #0f0600 55%, #2a1200 100%);
  text-align: center;
  overflow: hidden;
}

.esperamos__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 20% 50%, rgba(200,169,110,0.16) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 40%, rgba(139,0,0,0.18) 0%, transparent 70%);
  pointer-events: none;
  animation: floatBlobSlow 9s ease-in-out infinite;
}

/* Animated gradient accent strip */
.esperamos__gradient-anim {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(120deg,
    var(--color-primary),
    var(--color-secondary),
    #e8c882,
    var(--color-primary),
    var(--color-secondary)
  );
  background-size: 300% 300%;
  animation: gradientShift 6s ease infinite;
  pointer-events: none;
}

.esperamos__container {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.esperamos__eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(200, 169, 110, 0.75);
}

.esperamos__title {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 800;
  font-style: italic;
  letter-spacing: 0.04em;
  line-height: 1.1;
  background: linear-gradient(135deg, #e8c882 0%, var(--color-primary) 50%, #d4a55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.esperamos__deco {
  font-size: 0.75rem;
  letter-spacing: 0.65em;
  color: rgba(200, 169, 110, 0.45);
  margin: 0.25rem 0;
}

/* Stats */
.esperamos__stats {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin: var(--space-sm) 0;
  padding: var(--space-md) var(--space-xl);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(200, 169, 110, 0.22);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(8px);
}

.esperamos__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.esperamos__stat-value {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  min-width: 3.5ch;
  display: inline-block;
  text-align: center;
}

.esperamos__stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
}

.esperamos__stat-sep {
  width: 1px;
  height: 40px;
  background: rgba(200, 169, 110, 0.25);
  border-radius: 2px;
}

.esperamos__address {
  color: rgba(255,255,255,0.58);
  font-size: 0.9rem;
  line-height: 1.6;
  letter-spacing: 0.03em;
}

.esperamos__phone {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 1.9rem;
  border: 1px solid rgba(200, 169, 110, 0.42);
  border-radius: 100px;
  color: var(--color-primary);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(200, 169, 110, 0.08);
  backdrop-filter: blur(8px);
  margin-top: var(--space-sm);
}

.esperamos__phone:hover {
  background: rgba(200, 169, 110, 0.20);
  border-color: var(--color-primary);
  color: #e8c882;
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 28px rgba(200, 169, 110, 0.22);
}

@media (max-width: 768px) {
  .esperamos {
    padding: var(--section-padding-mobile) 0;
  }

  .esperamos__stats {
    padding: var(--space-md);
    gap: var(--space-md);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .esperamos__bg {
    animation: none;
  }
  .esperamos__gradient-anim {
    animation: none;
  }
}
</style>
