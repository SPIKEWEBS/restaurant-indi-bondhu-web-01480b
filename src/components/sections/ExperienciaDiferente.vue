<template>
  <section class="experiencia" aria-labelledby="experiencia-heading">
    <div class="experiencia__inner">
      <div class="experiencia__image-col">
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
            <strong>{{ site.rating }}</strong>
            <span>en Google</span>
          </div>
        </div>
      </div>
      <div class="experiencia__text-col">
        <p class="experiencia__eyebrow">Ferreries · Menorca</p>
        <h2 id="experiencia-heading" class="experiencia__title">Una experiencia diferente</h2>
        <div class="experiencia__divider"></div>
        <p class="experiencia__desc">{{ site.descripcion }}</p>
        <div class="experiencia__tags">
          <span v-for="tag in tags" :key="tag" class="experiencia__tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
const tags = ['Tandoori', 'Curry', 'Biryani', 'Balti', 'Naan']
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
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 160, 23, 0.12) 0%, transparent 70%);
  pointer-events: none;
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
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.experiencia__img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.experiencia__img-wrapper:hover .experiencia__img {
  transform: scale(1.04);
}

.experiencia__img-badge {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(10, 4, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 160, 23, 0.3);
  border-radius: 100px;
  padding: 0.4rem 0.9rem;
  font-size: 0.82rem;
  color: #fff;
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
  line-height: 1.8;
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
  background: rgba(212, 160, 23, 0.12);
  border: 1px solid rgba(212, 160, 23, 0.3);
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
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
</style>
