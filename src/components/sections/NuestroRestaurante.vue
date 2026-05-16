<template>
  <section class="restaurante" aria-labelledby="restaurante-heading">
    <div class="restaurante__container">
      <p class="restaurante__eyebrow">Espacios únicos</p>
      <h2 id="restaurante-heading" class="restaurante__title">NUESTRO RESTAURANTE</h2>
      <div class="section-divider"></div>
      <h3 class="restaurante__subtitle">DIFERENTES ESPACIOS PARA CADA OCASIÓN</h3>
      <p class="restaurante__text">
        Aquí puedes ver nuestro restaurante y elegir el lugar que mas te apetezca, para un grupo, más romántico, totalmente a tu gusto.
      </p>
      <p class="restaurante__text">
        Elige tu mesa y coméntanoslo en tu reserva online o telefónica.
      </p>

      <!-- Feature chips -->
      <div class="restaurante__features">
        <div class="restaurante__feature" v-for="f in features" :key="f.label">
          <span class="restaurante__feature-icon" aria-hidden="true">{{ f.icon }}</span>
          <span class="restaurante__feature-label">{{ f.label }}</span>
        </div>
      </div>

      <div class="restaurante__cta">
        <a
          :href="`tel:${site.telefonoRaw}`"
          class="btn btn-primary"
          aria-label="Llamar para reservar mesa en Bondhu Indian Premium Restaurant"
        >
          <span aria-hidden="true">📞</span> Llama y Reserva Ahora
        </a>
        <RouterLink
          to="/elige-tu-mesa/"
          class="btn btn-outline-dark"
          aria-label="Elegir tu mesa en Bondhu Indian Premium Restaurant"
        >
          Elige tu mesa
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
const features = [
  { icon: '🪑', label: 'Comedor interior acogedor' },
  { icon: '☀️', label: 'Terraza al aire libre' },
  { icon: '🎭', label: 'Decoración hindú auténtica' },
  { icon: '👥', label: 'Ideal para grupos' },
]
</script>

<style scoped>
.restaurante {
  background: var(--color-surface);
  padding: var(--section-py-mobile) 0;
  position: relative;
  overflow: hidden;
}

.restaurante::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 26, 26, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.restaurante__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
  position: relative;
  z-index: 1;
}

.restaurante__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.restaurante__title {
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 4.5vw, 3.2rem);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}

.section-divider {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 0.75rem auto 1.25rem;
  border-radius: 2px;
}

.restaurante__subtitle {
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  letter-spacing: 0.1em;
  color: var(--color-text);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.restaurante__text {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 0.6rem;
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
}

/* Feature chips */
.restaurante__features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 2rem 0;
}

.restaurante__feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 100px;
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-base);
}

.restaurante__feature:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.restaurante__feature-icon {
  font-size: 1.1rem;
}

.restaurante__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.btn-outline-dark {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: var(--radius-btn);
  font-weight: 600;
  font-size: 0.97rem;
  letter-spacing: 0.04em;
  text-align: center;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background: transparent;
  text-decoration: none;
  transition: background var(--transition-base), color var(--transition-base),
    transform var(--transition-fast), box-shadow var(--transition-base);
}

.btn-outline-dark:hover {
  background: var(--color-primary);
  color: var(--color-text-light);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

@media (min-width: 768px) {
  .restaurante {
    padding: var(--section-py) 0;
  }
}
</style>
