<template>
  <section class="hero" aria-label="Portada principal de Bondhu Indian Premium Restaurant">
    <!-- Background -->
    <div class="hero__bg">
      <img
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
    <div class="hero__content">
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

      <!-- Subtitle -->
      <p class="hero__subtitle">{{ site.subtitulo }}</p>

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
import site from '../../data/siteData.js'
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
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(10, 4, 0, 0.72) 0%,
    rgba(60, 15, 10, 0.55) 50%,
    rgba(10, 4, 0, 0.8) 100%
  );
}

/* Glow blobs */
.hero__blob {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
  animation: blobFloat 7s ease-in-out infinite;
}

.hero__blob--left {
  background: radial-gradient(circle, rgba(139, 26, 26, 0.35) 0%, transparent 70%);
  left: -120px;
  top: 20%;
  animation-delay: 0s;
}

.hero__blob--right {
  background: radial-gradient(circle, rgba(212, 160, 23, 0.22) 0%, transparent 70%);
  right: -100px;
  bottom: 15%;
  animation-delay: 3.5s;
}

@keyframes blobFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-28px) scale(1.05); }
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
}

/* Rating badge */
.hero__rating-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 100px;
  padding: 0.4rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
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
  border: 2px solid rgba(212, 160, 23, 0.7);
  padding: 5px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 30px rgba(212, 160, 23, 0.25);
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
  filter: drop-shadow(0 2px 20px rgba(212, 160, 23, 0.35));
}

/* Subtitle */
.hero__subtitle {
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  letter-spacing: 0.16em;
  color: var(--color-accent);
  text-transform: uppercase;
  margin-bottom: 0.9rem;
  font-weight: 500;
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
  box-shadow: 0 4px 24px rgba(139, 26, 26, 0.45);
}

.hero__cta-btn:hover {
  box-shadow: 0 8px 36px rgba(139, 26, 26, 0.55);
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.hero__scroll-dot {
  display: block;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(10px); opacity: 1; }
}
</style>
