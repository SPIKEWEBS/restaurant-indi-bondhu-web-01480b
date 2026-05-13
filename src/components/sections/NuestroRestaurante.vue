<template>
  <section class="restaurante section" aria-labelledby="restaurante-heading">
    <div class="container">
      <div class="restaurante__header text-center">
        <h1 id="restaurante-heading" class="restaurante__heading">
          {{ site.restaurante.heading }}
        </h1>
        <span class="divider"></span>
        <h3 class="restaurante__subheading">
          {{ site.restaurante.subheading }}
        </h3>
      </div>

      <div class="restaurante__body">
        <p class="restaurante__text">{{ site.restaurante.body1 }}</p>
        <p class="restaurante__text">{{ site.restaurante.body2 }}</p>
        <div class="restaurante__cta-wrap">
          <a :href="site.restaurante.ctaHref" class="restaurante__cta" :aria-label="site.restaurante.ctaLabel + ' al restaurante Bondhu'">
            {{ site.restaurante.ctaLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.restaurante {
  background: var(--color-surface);
}

.restaurante__header {
  max-width: 800px;
  margin-inline: auto;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.restaurante__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.restaurante__subheading {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2vw, 1.35rem);
  color: var(--color-primary);
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
}

.restaurante__body {
  max-width: 680px;
  margin-inline: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.restaurante__text {
  font-size: var(--fs-md);
  color: var(--color-text-light);
  line-height: 1.8;
}

.restaurante__cta-wrap {
  margin-top: 1rem;
}

.restaurante__cta {
  display: inline-block;
  padding: 0.875rem 2.25rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: var(--border-radius-sm);
  transition: background var(--transition-base), transform var(--transition-fast);
}
.restaurante__cta:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-1px);
}
</style>