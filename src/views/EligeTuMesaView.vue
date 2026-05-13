<template>
  <main id="main-content" class="mesa-page">
    <div class="mesa-page__hero">
      <div class="mesa-page__overlay" aria-hidden="true"></div>
      <div class="mesa-page__hero-content container">
        <h1 class="mesa-page__heading">{{ site.eligeTuMesa.heading }}</h1>
        <span class="divider"></span>
      </div>
    </div>

    <section class="mesa-page__body section" aria-labelledby="mesa-heading-comedor">
      <div class="container">
        <div class="mesa-page__grid">
          <!-- Comedor -->
          <div class="mesa-page__card">
            <span class="mesa-page__card-icon" aria-hidden="true">🍽</span>
            <h2 id="mesa-heading-comedor" class="mesa-page__card-title">
              {{ site.eligeTuMesa.comedor.title }}
            </h2>
            <p class="mesa-page__card-text">{{ site.eligeTuMesa.comedor.body }}</p>
          </div>
          <!-- Terraza -->
          <div class="mesa-page__card">
            <span class="mesa-page__card-icon" aria-hidden="true">🌿</span>
            <h2 class="mesa-page__card-title">Nuestra Terraza</h2>
            <p class="mesa-page__card-text">{{ site.eligeTuMesa.terraza.body }}</p>
          </div>
          <!-- Prioridad -->
          <div class="mesa-page__card">
            <span class="mesa-page__card-icon" aria-hidden="true">⭐</span>
            <h2 class="mesa-page__card-title">Tu Satisfacción</h2>
            <p class="mesa-page__card-text">{{ site.eligeTuMesa.prioridad.body }}</p>
          </div>
        </div>

        <div class="mesa-page__cta-wrap text-center">
          <a
            :href="site.phoneHref"
            class="mesa-page__cta"
            aria-label="Llamar al restaurante Bondhu para reservar mesa"
          >
            Llama y Reserva Ahora >>>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../data/siteData.js'

onMounted(() => {
  document.title = 'Elige Tu Mesa — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.mesa-page__hero {
  position: relative;
  min-height: 40vh;
  background: var(--color-dark-section);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--navbar-height);
}

.mesa-page__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-secondary) 100%);
  opacity: 0.95;
}

.mesa-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.mesa-page__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  text-transform: uppercase;
}

.mesa-page__body {
  background: var(--color-surface);
}

.mesa-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.mesa-page__card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-bg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mesa-page__card-icon {
  font-size: 2rem;
}

.mesa-page__card-title {
  font-family: var(--font-heading);
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mesa-page__card-text {
  font-size: var(--fs-base);
  color: var(--color-text-light);
  line-height: 1.75;
}

.mesa-page__cta-wrap {
  padding-top: 1rem;
}

.mesa-page__cta {
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
.mesa-page__cta:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-1px);
}
</style>