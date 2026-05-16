<template>
  <main id="main-content" class="mesa-view">
    <div class="mesa-hero">
      <div class="mesa-hero__content container">
        <h1 class="mesa-hero__title">ELIGE TU MESA</h1>
        <h3 class="mesa-hero__subtitle">Indian Premium Restaurant</h3>
      </div>
    </div>

    <section class="mesa-content section bg-surface">
      <div class="container">
        <h2 class="mesa-content__heading">Nuestro Comedor</h2>
        <p class="mesa-content__desc">
          Disponemos de un amplio y acogedor comedor con mullidas sillas de gran comodidad. Una decoración ecléctica de inspiración hindú que junto a nuestras recetas te harán vivir una experiencia gastronómica diferente. Viaja a la India más chic sin salir de Menorca.
        </p>
        <p class="mesa-content__desc">
          Los meses de verano o si hace buen tiempo, también disponemos de una agradable terraza para disfrutar al aire libre, si lo prefieres.
        </p>
        <p class="mesa-content__desc">
          Nuestra prioridad es tu máxima satisfacción, si tienes alguna sugerencia, no dudes en hacérnoslo saber, estamos a tu disposición.
        </p>

        <div class="mesa-cta">
          <a
            :href="siteData.telefonoHref"
            class="btn btn-primary"
            aria-label="Llamar al restaurante Bondhu para reservar mesa"
          >
            📞 Llama y Reserva Ahora >>>
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
.mesa-view {
  padding-top: var(--navbar-height);
}

.mesa-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4a2e22 100%);
  padding: var(--sp-4xl) var(--sp-lg);
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mesa-hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: 0.04em;
  margin-bottom: var(--sp-md);
}

.mesa-hero__subtitle {
  font-family: var(--font-nav);
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: var(--color-secondary);
  font-weight: 400;
  letter-spacing: 0.08em;
}

.mesa-content {
  padding: var(--sp-section) 0;
}

.mesa-content__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--sp-xl);
}

.mesa-content__desc {
  font-size: var(--fs-lg);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: var(--sp-lg);
  max-width: 700px;
}

.mesa-cta {
  margin-top: var(--sp-2xl);
}
</style>