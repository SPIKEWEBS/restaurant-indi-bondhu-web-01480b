<template>
  <main id="main-content" class="mesa-page">
    <div class="mesa-page__hero">
      <div class="mesa-page__hero-overlay"></div>
      <div class="mesa-page__hero-content">
        <h1 class="mesa-page__title">{{ siteData.eligeTuMesa.titulo }}</h1>
      </div>
    </div>

    <section class="mesa-page__body section container" aria-labelledby="mesa-subtitulo">
      <div class="mesa-page__card">
        <h2 id="mesa-subtitulo" class="mesa-page__subtitle">{{ siteData.eligeTuMesa.comedor.titulo }}</h2>
        <p class="mesa-page__desc">{{ siteData.eligeTuMesa.comedor.descripcion }}</p>

        <div class="mesa-page__cta">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary"
            aria-label="Llamar y reservar mesa ahora en Bondhu Restaurant"
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
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Elige Tu Mesa — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.mesa-page {
  padding-top: var(--navbar-height);
}

.mesa-page__hero {
  position: relative;
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, #1e1000 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mesa-page__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.mesa-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
}

.mesa-page__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  color: #fff;
  letter-spacing: 0.1em;
}

.mesa-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.mesa-page__card {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-2xl);
  background: var(--color-surface);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  text-align: center;
}

.mesa-page__subtitle {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
}

.mesa-page__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.mesa-page__cta {
  margin-top: var(--space-lg);
}

@media (max-width: 768px) {
  .mesa-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }

  .mesa-page__card {
    padding: var(--space-lg);
  }
}
</style>