<template>
  <section class="especialidades section" aria-labelledby="especialidades-heading">
    <div class="container">
      <div class="especialidades__header text-center">
        <h1 id="especialidades-heading" class="especialidades__heading">
          {{ site.especialidades.heading }}
        </h1>
        <span class="divider"></span>
        <h3 class="especialidades__subheading">
          {{ site.especialidades.subheading }}
        </h3>
        <p class="especialidades__body">
          {{ site.especialidades.body }}
        </p>
        <RouterLink :to="site.especialidades.ctaTo" class="especialidades__cta">
          {{ site.especialidades.ctaLabel }}
        </RouterLink>
      </div>

      <!-- Image grid -->
      <div class="especialidades__grid">
        <div
          v-for="(img, i) in site.especialidades.images"
          :key="i"
          class="especialidades__card"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="especialidades__img"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.especialidades {
  background: var(--color-bg);
}

.especialidades__header {
  max-width: 800px;
  margin-inline: auto;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.especialidades__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.especialidades__subheading {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2vw, 1.35rem);
  color: var(--color-primary);
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
}

.especialidades__body {
  font-size: var(--fs-md);
  color: var(--color-text-light);
  line-height: 1.8;
  text-align: center;
  max-width: 680px;
}

.especialidades__cta {
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
  margin-top: 0.5rem;
}
.especialidades__cta:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-1px);
}

/* Image grid */
.especialidades__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.especialidades__card {
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}
.especialidades__card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.especialidades__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
</style>