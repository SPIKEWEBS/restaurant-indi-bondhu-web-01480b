<template>
  <section class="donde" aria-labelledby="donde-heading">
    <div class="donde__container">
      <h2 id="donde-heading" class="donde__title">Dónde estamos</h2>
      <div class="section-divider"></div>
      <div class="donde__grid">
        <div class="donde__card">
          <span class="donde__icon" aria-hidden="true">📍</span>
          <div class="donde__card-body">
            <strong>{{ site.nombreCorto }} Restaurant</strong>
            <p>{{ site.direccion }}</p>
          </div>
        </div>
        <div class="donde__card">
          <span class="donde__icon" aria-hidden="true">☎</span>
          <div class="donde__card-body">
            <strong>Teléfono</strong>
            <p>
              <a :href="`tel:${site.telefonoRaw}`" aria-label="Llamar al restaurante Bondhu">
                {{ site.telefono }}
              </a>
            </p>
          </div>
        </div>
        <div class="donde__card">
          <span class="donde__icon" aria-hidden="true">✉</span>
          <div class="donde__card-body">
            <strong>Email</strong>
            <p>
              <a :href="`mailto:${site.email}`" aria-label="Enviar email a Bondhu Restaurant">
                {{ site.email }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.donde {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.donde__container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.donde__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem auto 2rem;
  border-radius: 2px;
}

.donde__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.donde__card {
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.donde__icon {
  font-size: 2rem;
  line-height: 1;
}

.donde__card-body strong {
  display: block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}

.donde__card-body p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0;
}

.donde__card-body a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.donde__card-body a:hover {
  color: var(--color-primary-dark);
}

@media (min-width: 768px) {
  .donde {
    padding: var(--section-py) 0;
  }
}
</style>