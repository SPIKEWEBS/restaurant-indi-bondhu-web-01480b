<template>
  <section class="especialidades section bg-surface">
    <div class="container">
      <div class="especialidades__grid">
        <!-- Left column: Especialidades -->
        <div class="especialidades__col">
          <div class="especialidades__text">
            <h1 class="especialidades__title">ESPECIALIDADES HINDÚES</h1>
            <h3 class="especialidades__subtitle">TANDOORI - CURRY - BIRYANIS - BALTI - NAAN</h3>
            <h3 class="especialidades__desc">
              Entre nuestras especialidades encontrarás todos los platos típicos de la India, desde Biryanis cocinados en nuestro horno Tandoori hasta diferentes Curry, platos Balti estilo Punjal y tamién los famosos Naan. Te lo explicamos todo en nuestra Carta.
            </h3>
          </div>
          <RouterLink to="/carta/" class="especialidades__img-link" aria-label="Ver la carta de Bondhu Indian Premium Restaurant">
            <img
              src="/images/boton-20romo-20carta-0.jpg"
              alt="Ver la carta del restaurante Bondhu"
              width="870"
              height="788"
              class="especialidades__img"
              loading="lazy"
            />
          </RouterLink>
        </div>

        <!-- Right column: Restaurante -->
        <div class="especialidades__col">
          <div class="especialidades__text">
            <h1 class="especialidades__title especialidades__title--restaurante">NUESTRO RESTAURANTE</h1>
            <h3 class="especialidades__subtitle">DIFERENTES ESPACIOS PARA CADA OCASIÓN</h3>
            <h3 class="especialidades__desc">
              Aquí puedes ver nuestro restaurante y elegir el lugar que mas te apetezca, para un grupo, más romántico, totalmente a tu gusto.
            </h3>
            <h3 class="especialidades__desc">
              Elige tu mesa y coméntanoslo en tu reserva online o telefónica.
            </h3>
          </div>
          <RouterLink to="/elige-tu-mesa/" class="especialidades__img-link" aria-label="Elegir tu mesa en el restaurante Bondhu">
            <img
              src="/images/boton-20romo-20mesa-6.jpg"
              alt="Elegir mesa en el restaurante Bondhu"
              width="870"
              height="788"
              class="especialidades__img"
              loading="lazy"
            />
          </RouterLink>
        </div>
      </div>

      <!-- CTA Row -->
      <div class="especialidades__cta-row">
        <div class="especialidades__cta-col">
          <p class="especialidades__cta-text">Llama y Reserva Ahora &gt;&gt;&gt;</p>
        </div>
        <div class="especialidades__cta-col">
          <a
            :href="siteData.telefonoHref"
            class="especialidades__cta-phone"
            aria-label="Llamar para reservar mesa en Bondhu: 971 37 34 73"
          >
            ☎ {{ siteData.telefono }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.especialidades {
  padding: var(--sp-section) 0;
}

.especialidades__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-xl);
  align-items: start;
}

.especialidades__col {
  display: flex;
  flex-direction: column;
  gap: var(--sp-lg);
}

.especialidades__text {
  display: flex;
  flex-direction: column;
  gap: var(--sp-md);
}

.especialidades__title {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
  letter-spacing: 0.02em;
}

.especialidades__title--restaurante {
  font-size: clamp(1.2rem, 2vw, 1.7rem);
}

.especialidades__subtitle {
  font-family: var(--font-nav);
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.04em;
}

.especialidades__desc {
  font-family: var(--font-body);
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  font-weight: 400;
  color: var(--color-text);
  line-height: 1.6;
}

.especialidades__img-link {
  display: block;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.especialidades__img-link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.especialidades__img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--border-radius-lg);
}

/* CTA Row */
.especialidades__cta-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-xl);
  margin-top: var(--sp-xl);
  align-items: center;
}

.especialidades__cta-col {
  display: flex;
  align-items: center;
}

.especialidades__cta-text {
  font-size: var(--fs-base);
  color: var(--color-text);
  font-weight: 400;
}

.especialidades__cta-phone {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-sm);
  background: var(--color-accent);
  color: var(--color-primary);
  font-size: var(--fs-lg);
  font-weight: 700;
  padding: var(--sp-md) var(--sp-xl);
  border-radius: var(--border-radius-full);
  text-decoration: none;
  transition: background var(--transition-normal), transform var(--transition-fast);
}

.especialidades__cta-phone:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .especialidades__grid {
    grid-template-columns: 1fr;
  }
  .especialidades__cta-row {
    grid-template-columns: 1fr;
    gap: var(--sp-md);
  }
}

@media (max-width: 480px) {
  .especialidades {
    padding: var(--sp-section-mobile) 0;
  }
}
</style>