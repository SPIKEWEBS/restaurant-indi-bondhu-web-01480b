<template>
  <section class="hero" aria-label="Portada Bondhu Indian Premium Restaurant">
    <div class="hero__bg">
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

    <div class="hero__content">
      <!-- Eyebrow -->
      <div class="hero__eyebrow">
        <span class="hero__eyebrow-dot"></span>
        Indian Premium Restaurant
        <span class="hero__eyebrow-dot"></span>
      </div>

      <h1 class="hero__title">{{ siteData.hero.titulo }}</h1>
      <p class="hero__tagline">{{ siteData.hero.descripcion }}</p>

      <!-- CTA row -->
      <div class="hero__actions">
        <a
          :href="siteData.telefonoHref"
          class="hero__cta-btn"
          aria-label="Reservar mesa en Bondhu Restaurant"
        >
          Reservar Mesa
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
import siteData from '../../data/siteData.js'
</script>

<style scoped>
@keyframes floatBlob {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-24px) scale(1.06); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.3); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

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
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    170deg,
    rgba(15, 8, 0, 0.62) 0%,
    rgba(10, 4, 0, 0.48) 50%,
    rgba(80, 30, 0, 0.55) 100%
  );
}

/* Glow blob */
.hero__glow {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(200, 169, 110, 0.22) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  animation: floatBlob 7s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: var(--space-xl) var(--space-md);
  max-width: 820px;
  animation: fadeUp 0.9s ease both;
}

/* Eyebrow */
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  padding: 0.4rem 1.1rem;
  border: 1px solid rgba(200, 169, 110, 0.35);
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
  letter-spacing: 0.14em;
  text-shadow: 0 4px 32px rgba(0,0,0,0.45);
  margin-bottom: var(--space-md);
  line-height: 1;
  will-change: transform;
}

/* Tagline */
.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  color: rgba(255, 255, 255, 0.88);
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto var(--space-xl);
  opacity: 0.9;
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
  padding: 0.95rem 2.4rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-btn);
  text-decoration: none;
  box-shadow: 0 6px 28px rgba(200, 169, 110, 0.45);
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.hero__cta-btn:hover {
  background: linear-gradient(135deg, #e0be80 0%, var(--color-primary) 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 36px rgba(200, 169, 110, 0.55);
  color: #fff;
}

/* Rating badge */
.hero__rating {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 100px;
  color: #fff;
}

.hero__rating-star {
  font-size: 1rem;
  line-height: 1;
}

.hero__rating-score {
  font-family: var(--font-heading);
  font-size: 1rem;
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
  height: 48px;
  background: linear-gradient(to bottom, rgba(200,169,110,0.8), transparent);
  border-radius: 2px;
  margin: 0 auto;
  animation: scrollPulse 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero__content {
    padding: var(--space-lg) var(--space-sm);
  }

  .hero__glow {
    width: 340px;
    height: 200px;
  }

  .hero__actions {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
