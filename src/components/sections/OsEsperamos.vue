<template>
  <section class="esperamos section" aria-labelledby="esperamos-heading">
    <div class="container">
      <div class="esperamos__inner text-center">
        <h1 id="esperamos-heading" class="esperamos__heading">
          Os esperamos!
        </h1>
        <span class="divider"></span>
        <div class="esperamos__contact-grid">
          <!-- Address -->
          <div class="esperamos__card">
            <span class="esperamos__card-icon" aria-hidden="true">📍</span>
            <h3 class="esperamos__card-title">Dónde estamos</h3>
            <p class="esperamos__card-text">
              BONDHU Restaurant<br />
              {{ site.address }}
            </p>
          </div>
          <!-- Phone -->
          <div class="esperamos__card">
            <span class="esperamos__card-icon" aria-hidden="true">☎</span>
            <h3 class="esperamos__card-title">Teléfono</h3>
            <a :href="site.phoneHref" class="esperamos__card-link" :aria-label="'Llamar al ' + site.phone">
              (+34) {{ site.phone }}
            </a>
          </div>
          <!-- Email -->
          <div class="esperamos__card">
            <span class="esperamos__card-icon" aria-hidden="true">✉</span>
            <h3 class="esperamos__card-title">Email</h3>
            <a :href="site.emailHref" class="esperamos__card-link" :aria-label="'Enviar email a ' + site.email">
              {{ site.email }}
            </a>
          </div>
          <!-- Hours -->
          <div class="esperamos__card">
            <span class="esperamos__card-icon" aria-hidden="true">🕐</span>
            <h3 class="esperamos__card-title">Nuestros horarios</h3>
            <p class="esperamos__card-text">
              Miércoles - Domingo<br />
              13:00h - 16:00h<br />
              19.30h - 23:00h<br />
              <strong>Lunes y Martes Cerrado</strong>
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
.esperamos {
  background: var(--color-dark-section);
  color: var(--color-white);
}

.esperamos__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.esperamos__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.1em;
}

.esperamos__contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
}

.esperamos__card {
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.esperamos__card-icon {
  font-size: 1.75rem;
}

.esperamos__card-title {
  font-family: var(--font-heading);
  font-size: var(--fs-base);
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.esperamos__card-text {
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.esperamos__card-link {
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.esperamos__card-link:hover {
  color: var(--color-primary);
}
</style>