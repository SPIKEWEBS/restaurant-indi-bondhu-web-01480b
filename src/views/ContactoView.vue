<template>
  <main id="main-content" class="contacto-page">
    <!-- Page hero -->
    <div class="contacto-page__hero">
      <div class="contacto-page__overlay" aria-hidden="true"></div>
      <div class="contacto-page__hero-content container">
        <h1 class="contacto-page__heading">Cómo Llegar / Contacto</h1>
        <span class="divider"></span>
      </div>
    </div>

    <!-- Content -->
    <section class="contacto-page__body section" aria-labelledby="contacto-donde">
      <div class="container">
        <div class="contacto-page__grid">

          <!-- Address card -->
          <div class="contacto-page__card">
            <span class="contacto-page__icon" aria-hidden="true">📍</span>
            <h2 id="contacto-donde" class="contacto-page__card-title">Dónde estamos</h2>
            <p class="contacto-page__card-text">
              BONDHU Restaurant<br />
              {{ site.address }}
            </p>
          </div>

          <!-- Phone card -->
          <div class="contacto-page__card">
            <span class="contacto-page__icon" aria-hidden="true">☎</span>
            <h2 class="contacto-page__card-title">Teléfono</h2>
            <a
              :href="site.phoneHref"
              class="contacto-page__link"
              :aria-label="'Llamar al ' + site.phone"
            >
              (+34) {{ site.phone }}
            </a>
          </div>

          <!-- Email card -->
          <div class="contacto-page__card">
            <span class="contacto-page__icon" aria-hidden="true">✉</span>
            <h2 class="contacto-page__card-title">Email</h2>
            <a
              :href="site.emailHref"
              class="contacto-page__link"
              :aria-label="'Enviar email a ' + site.email"
            >
              {{ site.email }}
            </a>
          </div>

          <!-- Hours card -->
          <div class="contacto-page__card">
            <span class="contacto-page__icon" aria-hidden="true">🕐</span>
            <h2 class="contacto-page__card-title">Nuestros horarios</h2>
            <div class="contacto-page__card-text">
              <p v-for="h in site.hours" :key="h.days">
                <strong>{{ h.days }}</strong>: {{ h.time }}
              </p>
            </div>
          </div>

        </div>

        <!-- CTA -->
        <div class="contacto-page__cta-wrap text-center">
          <a
            :href="site.phoneHref"
            class="contacto-page__cta"
            aria-label="Llamar al restaurante Bondhu para reservar"
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
  document.title = 'Cómo Llegar / Contacto — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.contacto-page__hero {
  position: relative;
  min-height: 40vh;
  background: var(--color-dark-section);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--navbar-height);
}

.contacto-page__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-secondary) 100%);
  opacity: 0.95;
}

.contacto-page__hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contacto-page__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  text-transform: uppercase;
}

.contacto-page__body {
  background: var(--color-surface);
}

.contacto-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contacto-page__card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-bg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.contacto-page__icon {
  font-size: 2rem;
}

.contacto-page__card-title {
  font-family: var(--font-heading);
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contacto-page__card-text {
  font-size: var(--fs-base);
  color: var(--color-text-light);
  line-height: 1.75;
}

.contacto-page__link {
  font-size: var(--fs-base);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-fast);
}
.contacto-page__link:hover {
  color: var(--color-primary-dark);
}

.contacto-page__cta-wrap {
  padding-top: 1rem;
}

.contacto-page__cta {
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
.contacto-page__cta:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-1px);
}
</style>