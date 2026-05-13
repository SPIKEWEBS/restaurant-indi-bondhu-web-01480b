<template>
  <section class="hero" aria-label="Portada Bondhu Indian Premium Restaurant">
    <div class="hero__bg" ref="heroBgRef">
      <img
        :src="siteData.hero.imagen"
        :alt="siteData.hero.imagenAlt"
        class="hero__img"
        width="800"
        height="600"
        fetchpriority="high"
      />
      <div class="hero__overlay"></div>
    </div>

    <!-- Decorative glow blob -->
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__glow hero__glow--2" aria-hidden="true"></div>

    <div class="hero__content">
      <!-- Eyebrow -->
      <div class="hero__eyebrow reveal reveal-delay-0">
        <span class="hero__eyebrow-dot"></span>
        Indian Premium Restaurant
        <span class="hero__eyebrow-dot"></span>
      </div>

      <h1 class="hero__title reveal reveal-delay-1">{{ siteData.hero.titulo }}</h1>

      <!-- Typewriter tagline -->
      <p class="hero__tagline reveal reveal-delay-2">
        <span class="hero__typewriter">{{ typewriterText }}</span><span class="hero__cursor" aria-hidden="true">|</span>
      </p>

      <!-- CTA row -->
      <div class="hero__actions reveal reveal-delay-3">
        <a
          :href="siteData.telefonoHref"
          class="hero__cta-btn"
          aria-label="Reservar mesa en Bondhu Restaurant"
        >
          ☎ Reservar Mesa
        </a>

        <!-- Google Rating badge -->
        <div class="hero__rating" role="img" :aria-label="`Valoración Google: ${siteData.rating} de 5 estrellas basada en ${siteData.ratingTotal} reseñas`">
          <span class="hero__rating-star">⭐</span>
          <span class="hero__rating-score">{{ siteData.rating }}</span>
          <span class="hero__rating-label">Google · {{ siteData.ratingTotal }} reseñas</span>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="hero__scroll" aria-hidden="true">
      <span class="hero__scroll-line"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import siteData from '../../data/siteData.js'

const heroBgRef = ref(null)
let rafId = null

// Parallax on scroll
function onScroll() {
  if (!heroBgRef.value) return
  const y = window.scrollY
  heroBgRef.value.style.transform = `translateY(${y * 0.3}px)`
}

// Typewriter
const phrases = [
  'Los sabores de la India en Menorca',
  'Recetas auténticas de Tandoori',
  'Curry · Biryanis · Balti · Naan',
  'Un ambiente sofisticado y acogedor',
]
const typewriterText = ref('')
let phraseIdx = 0
let charIdx = 0
let isDeleting = false
let twTimer = null

function typeStep() {
  const current = phrases[phraseIdx]
  if (!isDeleting) {
    typewriterText.value = current.slice(0, charIdx + 1)
    charIdx++
    if (charIdx === current.length) {
      isDeleting = true
      twTimer = setTimeout(typeStep, 2000)
      return
    }
  } else {
    typewriterText.value = current.slice(0, charIdx - 1)
    charIdx--
    if (charIdx === 0) {
      isDeleting = false
      phraseIdx = (phraseIdx + 1) % phrases.length
    }
  }
  twTimer = setTimeout(typeStep, isDeleting ? 42 : 68)
}

onMounted(() => {
  // Parallax
  window.addEventListener('scroll', onScroll, { passive: true })

  // Scroll reveal fallback
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
  }, 1500)

  // Reveal elements already in view
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) el.classList.add('visible')
  })

  // Typewriter
  twTimer = setTimeout(typeStep, 600)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (twTimer) clearTimeout(twTimer)
})
</script>

<style scoped>
@keyframes floatBlob {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-24px) scale(1.06); }
}

@keyframes floatBlob2 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(20px) scale(1.08); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.35); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Reveal system */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
.reveal-delay-0 { transition-delay: 0.05s; }
.reveal-delay-1 { transition-delay: 0.18s; }
.reveal-delay-2 { transition-delay: 0.32s; }
.reveal-delay-3 { transition-delay: 0.46s; }

.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: var(--navbar-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  will-change: transform;
}

.hero__img {
  width: 100%;
  height: 110%;
  object-fit: cover;
  display: block;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    170deg,
    rgba(15, 8, 0, 0.68) 0%,
    rgba(10, 4, 0, 0.50) 50%,
    rgba(80, 30, 0, 0.60) 100%
  );
}

/* Glow blobs */
.hero__glow {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 650px;
  height: 320px;
  background: radial-gradient(ellipse, rgba(200, 169, 110, 0.24) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(42px);
  animation: floatBlob 7s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

.hero__glow--2 {
  top: 10%;
  right: 10%;
  left: auto;
  transform: none;
  width: 380px;
  height: 260px;
  background: radial-gradient(ellipse, rgba(139, 0, 0, 0.18) 0%, transparent 70%);
  animation: floatBlob2 9s ease-in-out infinite;
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: var(--space-xl) var(--space-md);
  max-width: 860px;
}

/* Eyebrow */
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(200, 169, 110, 0.38);
  border-radius: 100px;
  backdrop-filter: blur(8px);
  background: rgba(200, 169, 110, 0.08);
}

.hero__eyebrow-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}

/* Title */
.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(3.5rem, 11vw, 7.5rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.16em;
  text-shadow: 0 4px 40px rgba(0,0,0,0.5);
  margin-bottom: var(--space-md);
  line-height: 1;
  will-change: transform;
  background: linear-gradient(160deg, #fff 30%, rgba(232,200,130,0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Tagline / typewriter */
.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  color: rgba(255, 255, 255, 0.88);
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.7;
  max-width: 580px;
  margin: 0 auto var(--space-xl);
  min-height: 2.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
}

.hero__typewriter {
  display: inline;
}

.hero__cursor {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 300;
  animation: blink 1.1s step-end infinite;
  margin-left: 1px;
}

/* Actions row */
.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* CTA button */
.hero__cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  border-radius: var(--radius-btn);
  text-decoration: none;
  box-shadow: 0 6px 30px rgba(200, 169, 110, 0.45);
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.hero__cta-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.22s ease;
}

.hero__cta-btn:hover::before {
  opacity: 1;
}

.hero__cta-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 40px rgba(200, 169, 110, 0.55);
  color: #fff;
}

/* Rating badge */
.hero__rating {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.2rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 100px;
  color: #fff;
  transition: all var(--transition-fast);
}

.hero__rating:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(200, 169, 110, 0.5);
}

.hero__rating-star {
  font-size: 1rem;
  line-height: 1;
}

.hero__rating-score {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-primary);
}

.hero__rating-label {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.78);
  letter-spacing: 0.04em;
}

/* Scroll cue */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.hero__scroll-line {
  display: block;
  width: 2px;
  height: 52px;
  background: linear-gradient(to bottom, rgba(200,169,110,0.85), transparent);
  border-radius: 2px;
  margin: 0 auto;
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero__content {
    padding: var(--space-lg) var(--space-sm);
  }

  .hero__glow {
    width: 340px;
    height: 200px;
  }

  .hero__glow--2 {
    display: none;
  }

  .hero__actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .hero__title {
    -webkit-text-fill-color: #fff;
    background: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .hero__glow,
  .hero__glow--2,
  .hero__scroll-line {
    animation: none;
  }
  .hero__cursor {
    animation: none;
  }
}
</style>
