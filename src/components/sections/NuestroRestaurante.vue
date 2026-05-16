<template>
  <section class="restaurante" aria-labelledby="restaurante-heading">
    <div class="restaurante__container">
      <h2 id="restaurante-heading" class="restaurante__title">NUESTRO RESTAURANTE</h2>
      <div class="section-divider"></div>
      <h3 class="restaurante__subtitle">DIFERENTES ESPACIOS PARA CADA OCASIÓN</h3>
      <p class="restaurante__text">
        Aquí puedes ver nuestro restaurante y elegir el lugar que mas te apetezca, para un grupo, más romántico, totalmente a tu gusto.
      </p>
      <p class="restaurante__text">
        Elige tu mesa y coméntanoslo en tu reserva online o telefónica.
      </p>
      <div class="restaurante__cta">
        <a
          :href="`tel:${site.telefonoRaw}`"
          class="btn btn-primary"
          aria-label="Llamar para reservar mesa en Bondhu Indian Premium Restaurant"
        >
          Llama y Reserva Ahora >>>
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
</script>

<style scoped>
.restaurante {
  background: var(--color-surface);
  padding: var(--section-py-mobile) 0;
}

.restaurante__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.restaurante__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--color-accent);
  margin: 0.75rem auto 1.25rem;
  border-radius: 2px;
}

.restaurante__subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  letter-spacing: 0.1em;
  color: var(--color-text);
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  font-weight: 600;
}

.restaurante__text {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

.restaurante__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.btn-outline-dark {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-align: center;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background: transparent;
  text-decoration: none;
  transition: background var(--transition-base), color var(--transition-base);
}

.btn-outline-dark:hover {
  background: var(--color-primary);
  color: var(--color-text-light);
}

@media (min-width: 768px) {
  .restaurante {
    padding: var(--section-py) 0;
  }
}
</style>