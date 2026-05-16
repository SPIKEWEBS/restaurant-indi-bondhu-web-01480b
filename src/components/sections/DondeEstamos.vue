<template>
  <section class="donde section bg-surface">
    <div class="container">
      <hr class="donde__divider" />
      <div class="donde__grid">
        <!-- Left: contact info -->
        <div class="donde__col">
          <h2 class="donde__heading">Dónde estamos</h2>
          <div class="donde__cards">
            <div class="donde__card">
              <span class="donde__icon" aria-hidden="true">🏠</span>
              <div class="donde__card-content">
                <strong class="donde__restaurant-name">BONDHU Restaurant</strong>
                <p class="donde__address">Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears</p>
              </div>
            </div>
            <div class="donde__card">
              <span class="donde__icon" aria-hidden="true">📞</span>
              <div class="donde__card-content">
                <a :href="siteData.telefonoHref" class="donde__link" aria-label="Llamar al restaurante Bondhu">
                  (+34) {{ siteData.telefono }}
                </a>
              </div>
            </div>
            <div class="donde__card">
              <span class="donde__icon" aria-hidden="true">✉️</span>
              <div class="donde__card-content">
                <a :href="siteData.emailHref" class="donde__link" aria-label="Enviar email al restaurante Bondhu">
                  {{ siteData.email }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: empty (original had no map) -->
        <div class="donde__col donde__col--map">
        </div>
      </div>
      <hr class="donde__divider" />
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
.donde {
  padding: var(--sp-section) 0;
}

.donde__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-mid);
  border: none;
  margin: 0 0 var(--sp-2xl);
}

.donde__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-2xl);
  align-items: start;
}

.donde__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--sp-xl);
}

.donde__cards {
  display: flex;
  flex-direction: column;
  gap: var(--sp-md);
}

.donde__card {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-md);
  padding: var(--sp-md) var(--sp-lg);
  background: var(--color-white);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: var(--border-radius-lg);
}

.donde__icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.donde__card-content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
}

.donde__restaurant-name {
  font-size: var(--fs-base);
  color: var(--color-primary);
  font-weight: 700;
}

.donde__address {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.5;
}

.donde__link {
  font-size: var(--fs-base);
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.donde__link:hover {
  color: var(--color-accent);
}

.donde__col--map {
  min-height: 200px;
}

@media (max-width: 768px) {
  .donde__grid {
    grid-template-columns: 1fr;
  }
  .donde__col--map {
    display: none;
  }
}

@media (max-width: 480px) {
  .donde {
    padding: var(--sp-section-mobile) 0;
  }
}
</style>