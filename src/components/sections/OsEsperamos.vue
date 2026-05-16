<template>
  <section class="esperamos" aria-labelledby="esperamos-heading">
    <!-- Decorative blob -->
    <div class="esperamos__blob" aria-hidden="true"></div>

    <div class="esperamos__container">
      <p class="esperamos__eyebrow">¡Os esperamos!</p>
      <h2 id="esperamos-heading" class="esperamos__title">Reserva tu mesa hoy</h2>
      <div class="section-divider"></div>
      <p class="esperamos__sub">Llama y asegura tu lugar en una experiencia gastronómica única</p>
      <a
        :href="`tel:${site.telefonoRaw}`"
        class="btn btn-accent"
        aria-label="Llamar y reservar ahora en Bondhu Indian Premium Restaurant"
      >
        <span aria-hidden="true">📞</span> Llama y Reserva Ahora
      </a>

      <!-- Phone chip -->
      <div class="esperamos__phone-chip">
        <span class="esperamos__phone-chip-icon" aria-hidden="true">☎</span>
        <a :href="`tel:${site.telefonoRaw}`" class="esperamos__phone-chip-num">
          {{ site.telefono }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.esperamos {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, #a02020 100%);
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.esperamos__blob {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 160, 23, 0.2) 0%, transparent 65%);
  pointer-events: none;
  animation: blobPulse 8s ease-in-out infinite;
}

@keyframes blobPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.12); opacity: 1; }
}

.esperamos__container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
  z-index: 1;
}

.esperamos__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.6rem;
}

.esperamos__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-text-light);
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.section-divider {
  width: 56px;
  height: 3px;
  background: var(--color-accent);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.esperamos__sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.btn-accent {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 2.5rem;
  border-radius: var(--radius-btn);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-align: center;
  background: var(--color-accent);
  color: #1a1009;
  border: 2px solid var(--color-accent);
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(212, 160, 23, 0.35);
  transition: background var(--transition-base), color var(--transition-base),
    transform var(--transition-fast), box-shadow var(--transition-base);
}

.btn-accent:hover {
  background: var(--color-accent-light);
  border-color: var(--color-accent-light);
  transform: translateY(-3px);
  box-shadow: 0 8px 36px rgba(212, 160, 23, 0.5);
}

/* Phone chip */
.esperamos__phone-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 100px;
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
}

.esperamos__phone-chip-icon {
  font-size: 0.95rem;
}

.esperamos__phone-chip-num {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.esperamos__phone-chip-num:hover {
  color: var(--color-accent);
}
</style>
