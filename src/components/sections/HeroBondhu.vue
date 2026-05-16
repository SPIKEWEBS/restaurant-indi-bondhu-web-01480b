<template>
  <section class="hero" aria-label="Portada principal de Bondhu Indian Premium Restaurant">
    <!-- Background -->
    <div class="hero__bg">
      <img
        ref="heroImgRef"
        :src="site.images.hero"
        alt="Interior del restaurante Bondhu Indian Premium Restaurant en Ferreries"
        class="hero__img"
        width="800"
        height="600"
        fetchpriority="high"
      />
      <div class="hero__overlay" aria-hidden="true"></div>
    </div>

    <!-- Decorative glow blobs -->
    <div class="hero__blob hero__blob--left" aria-hidden="true"></div>
    <div class="hero__blob hero__blob--right" aria-hidden="true"></div>

    <!-- Content -->
    <div class="hero__content" :class="{ 'hero__content--visible': contentVisible }">
      <!-- Rating badge -->
      <div class="hero__rating-badge" aria-label="Valoración Google: 4.8 sobre 5">
        <span class="hero__rating-star" aria-hidden="true">⭐</span>
        <span class="hero__rating-number">{{ site.rating }}</span>
        <span class="hero__rating-count">({{ site.ratingCount }} reseñas)</span>
      </div>

      <!-- Logo -->
      <div class="hero__logo-block">
        <img
          :src="site.images.logo"
          alt="Logo Bondhu Indian Premium Restaurant"
          class="hero__logo"
          width="200"
          height="200"
          loading="lazy"
        />
      </div>

      <!-- Eyebrow -->
      <p class="hero__eyebrow">Indian Premium Restaurant · Ferreries, Menorca</p>

      <!-- Title -->
      <h1 class="hero__title">{{ site.nombreCorto }}</h1>

      <!-- Subtitle typewriter -->
      <p class="hero__subtitle" aria-label="Indian Premium Restaurant">{{ displayedSubtitle }}<span class="hero__cursor" aria-hidden="true">|</span></p>

      <!-- Tagline -->
      <p class="hero__tagline">{{ site.tagline }}</p>

      <!-- CTA -->
      <div class="hero__cta">
        <a
          :href="`tel:${site.telefonoRaw}`"
          class="btn btn-primary hero__cta-btn"
          aria-label="Llamar y reservar mesa en Bondhu"
        >
          <span aria-hidden="true">📞</span> Llama y Reserva Ahora
        </a>
        <RouterLink to="/carta/" class="btn btn-outline" aria-label="Ver la carta de Bondhu">
          Ver Carta
        </RouterLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <span class="hero__scroll-dot"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import site from '../../data/siteData.js'

const heroImgRef = ref(null)
const contentVisible = ref(false)

// Typewriter
const typewriterWords = ['Indian Premium Restaurant', 'Tandoori · Curry · Naan', 'Biryanis · Balti · Masala', 'La India en Menorca']
let twIndex = 0
let twCharIndex = 0
let twDeleting = false
let twTimer = null
const displayedSubtitle = ref('')

function typewriterTick() {
  const current = typewriterWords[twIndex]
  if (!twDeleting) {
    twCharIndex++
    displayedSubtitle.value = current.slice(0, twCharIndex)
    if (twCharIndex === current.length) {
      twDeleting = true
      twTimer = setTimeout(typewriterTick, 1800)
      return
    }
    twTimer = setTimeout(typewriterTick, 60)
  } else {
    twCharIndex--
    displayedSubtitle.value = current.slice(0, twCharIndex)
    if (twCharIndex === 0) {
      twDeleting = false
      twIndex = (twIndex + 1) % typewriterWords.length
      twTimer = setTimeout(typewriterTick, 400)
      return
    }
    twTimer = setTimeout(typewriterTick, 32)
  }
}

// Parallax
let rafId = null
function handleParallax() {
  if (!heroImgRef.value) return
  const offset = window.scrollY * 0.28
  heroImgRef.value.style.transform = `scale(1.04) translateY(${offset}px)`
}

function onScroll() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    handleParallax()
    rafId = null
  })
}

onMounted(() => {
  // Fade-in content
  requestAnimationFrame(() => {
    setTimeout(() => { contentVisible.value = true }, 120)
  })

  // Typewriter start
  twTimer = setTimeout(typewriterTick, 900)

  // Parallax
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  clearTimeout(twTimer)
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  will-change: transform;
  transition: transform 0.1s linear;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(10, 4, 0, 0.72) 0%,
    rgba(60, 15, 10, 0.55) 50%,
    rgba(10, 4, 0, 0.82) 100%
  );
}

/* Glow blobs */
.hero__blob {
  position: absolute;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
  animation: blobFloat 7s ease-in-out infinite;
}

.hero__blob--left {
  background: radial-gradient(circle, rgba(139, 26, 26, 0.38) 0%, transparent 70%);
  left: -120px;
  top: 20%;
  animation-delay: 0s;
}

.hero__blob--right {
  background: radial-gradient(circle, rgba(212, 160, 23, 0.24) 0%, transparent 70%);
  right: -100px;
  bottom: 15%;
  animation-delay: 3.5s;
}

@keyframes blobFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-28px) scale(1.06); }
}

/* Content */
.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-text-light);
  padding: calc(var(--navbar-height) + 2rem) var(--spacing-md) 5rem;
  max-width: 820px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero__content--visible {
  opacity: 1;
  transform: none;
}

/* Rating badge */
.hero__rating-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 100px;
  padding: 0.4rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.hero__rating-badge:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 20px rgba(212, 160, 23, 0.25);
}

.hero__rating-star { font-size: 0.95rem; }
.hero__rating-number {
  font-weight: 700;
  color: var(--color-accent);
  font-size: 0.92rem;
}
.hero__rating-count { color: rgba(255,255,255,0.65); font-size: 0.78rem; }

/* Logo */
.hero__logo-block {
  margin-bottom: 1.5rem;
}

.hero__logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid rgba(212, 160, 23, 0.75);
  padding: 5px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 36px rgba(212, 160, 23, 0.3), 0 0 0 6px rgba(212, 160, 23, 0.08);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.hero__logo:hover {
  transform: scale(1.06) rotate(2deg);
  box-shadow: 0 0 52px rgba(212, 160, 23, 0.45), 0 0 0 10px rgba(212, 160, 23, 0.1);
}

/* Eyebrow */
.hero__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

/* Title */
.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(3.2rem, 10vw, 7rem);
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  line-height: 1;
  background: linear-gradient(135deg, #ffffff 30%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 24px rgba(212, 160, 23, 0.38));
}

/* Subtitle typewriter */
.hero__subtitle {
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  letter-spacing: 0.16em;
  color: var(--color-accent);
  text-transform: uppercase;
  margin-bottom: 0.9rem;
  font-weight: 500;
  min-height: 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.hero__cursor {
  display: inline-block;
  color: var(--color-accent);
  font-weight: 300;
  margin-left: 1px;
  animation: cursorBlink 1s step-end infinite;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Tagline */
.hero__tagline {
  font-size: clamp(1rem, 2.2vw, 1.22rem);
  font-style: italic;
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 2.5rem;
  font-weight: 400;
  max-width: 560px;
  line-height: 1.7;
  opacity: 0.92;
}

/* CTA */
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.hero__cta-btn {
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: var(--radius-btn);
  letter-spacing: 0.04em;
  background: var(--color-primary);
  box-shadow: 0 4px 28px rgba(139, 26, 26, 0.5);
}

.hero__cta-btn:hover {
  box-shadow: 0 10px 40px rgba(139, 26, 26, 0.6);
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.hero__scroll-dot {
  display: block;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(10px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__content { opacity: 1; transform: none; transition: none; }
  .hero__blob { animation: none; }
  .hero__scroll-dot { animation: none; opacity: 0.7; }
  .hero__cursor { animation: none; opacity: 1; }
  .hero__img { transition: none; }
}
</style>
