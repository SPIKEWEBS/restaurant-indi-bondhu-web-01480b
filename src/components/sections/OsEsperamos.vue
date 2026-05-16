<template>
  <section class="esperamos" aria-labelledby="esperamos-heading">
    <!-- Decorative blobs -->
    <div class="esperamos__blob esperamos__blob--top" aria-hidden="true"></div>
    <div class="esperamos__blob esperamos__blob--bottom" aria-hidden="true"></div>

    <div class="esperamos__container">
      <p class="esperamos__eyebrow reveal">¡Os esperamos!</p>
      <h2 id="esperamos-heading" class="esperamos__title reveal reveal-delay-1">Reserva tu mesa hoy</h2>
      <div class="section-divider reveal reveal-delay-1"></div>
      <p class="esperamos__sub reveal reveal-delay-2">Llama y asegura tu lugar en una experiencia gastronómica única</p>
      <a
        :href="`tel:${site.telefonoRaw}`"
        class="btn btn-accent reveal reveal-delay-3"
        aria-label="Llamar y reservar ahora en Bondhu Indian Premium Restaurant"
      >
        <span aria-hidden="true">📞</span> Llama y Reserva Ahora
      </a>

      <!-- Phone chip -->
      <div class="esperamos__phone-chip reveal reveal-delay-4">
        <span class="esperamos__phone-chip-icon" aria-hidden="true">☎</span>
        <a :href="`tel:${site.telefonoRaw}`" class="esperamos__phone-chip-num">
          {{ site.telefono }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../../data/siteData.js'

onMounted(() => {
  const revealEls = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  revealEls.forEach((el) => observer.observe(el))

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
  }, 1500)
})
</script>

<style scoped>
.esperamos {
  background: linear-gradient(
    120deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 45%,
    #a02020 80%,
    #7a1010 100%
  );
  background-size: 300% 300%;
  animation: gradientShift 10s ease infinite;
  padding: 88px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.esperamos__blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.esperamos__blob--top {
  top: -100px;
  right: -100px;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(212, 160, 23, 0.22) 0%, transparent 65%);
  animation: blobPulse 8s ease-in-out infinite;
}

.esperamos__blob--bottom {
  bottom: -80px;
  left: -80px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 65%);
  animation: blobPulse 11s ease-in-out infinite reverse;
}

@keyframes blobPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.14); opacity: 1; }
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
  color: rgba(255, 255, 255, 0.62);
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
  box-shadow: 0 0 16px rgba(212, 160, 23, 0.5);
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
  box-shadow: 0 4px 28px rgba(212, 160, 23, 0.4);
  transition:
    background var(--transition-base),
    color var(--transition-base),
    transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow var(--transition-base),
    filter var(--transition-base);
}

.btn-accent:hover {
  background: var(--color-accent-light);
  border-color: var(--color-accent-light);
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 12px 40px rgba(212, 160, 23, 0.55);
  filter: brightness(1.07);
}

/* Phone chip */
.esperamos__phone-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
  border-radius: 100px;
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.esperamos__phone-chip:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: scale(1.04);
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

@media (prefers-reduced-motion: reduce) {
  .esperamos { animation: none; }
  .esperamos__blob { animation: none; }
}
</style>
