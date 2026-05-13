<template>
  <section class="esperamos" aria-labelledby="esperamos-titulo">
    <div class="esperamos__bg" aria-hidden="true"></div>
    <div class="esperamos__container">
      <span class="esperamos__eyebrow">Ferreries · Menorca</span>
      <h2 id="esperamos-titulo" class="esperamos__title">{{ siteData.esperamos.titulo }}</h2>
      <span class="esperamos__deco" aria-hidden="true">✦ ✦ ✦</span>
      <p class="esperamos__address">{{ siteData.direccion }}</p>
      <a :href="siteData.telefonoHref" class="esperamos__phone" :aria-label="`Llamar al restaurante: ${siteData.telefono}`">
        📞 (+34) {{ siteData.telefono }}
      </a>
    </div>
  </section>
</template>

<script setup>
import siteData from '../../data/siteData.js'
</script>

<style scoped>
@keyframes floatBlobSlow {
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-18px) scale(1.05); }
}

.esperamos {
  position: relative;
  padding: var(--section-padding) 0;
  background: linear-gradient(160deg, #1a0e02 0%, #0f0600 55%, #2a1200 100%);
  text-align: center;
  overflow: hidden;
}

.esperamos__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 20% 50%, rgba(200,169,110,0.16) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 40%, rgba(139,0,0,0.18) 0%, transparent 70%);
  pointer-events: none;
  animation: floatBlobSlow 9s ease-in-out infinite;
}

.esperamos__container {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.esperamos__eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(200, 169, 110, 0.75);
}

.esperamos__title {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 800;
  font-style: italic;
  letter-spacing: 0.04em;
  line-height: 1.1;
  /* Gradient text */
  background: linear-gradient(135deg, #e8c882 0%, var(--color-primary) 50%, #d4a55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.esperamos__deco {
  font-size: 0.75rem;
  letter-spacing: 0.6em;
  color: rgba(200, 169, 110, 0.45);
  margin: 0.25rem 0;
}

.esperamos__address {
  color: rgba(255,255,255,0.55);
  font-size: 0.9rem;
  line-height: 1.6;
  letter-spacing: 0.03em;
}

.esperamos__phone {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.8rem;
  border: 1px solid rgba(200, 169, 110, 0.4);
  border-radius: 100px;
  color: var(--color-primary);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all var(--transition-base);
  background: rgba(200, 169, 110, 0.07);
  backdrop-filter: blur(8px);
  margin-top: var(--space-sm);
}

.esperamos__phone:hover {
  background: rgba(200, 169, 110, 0.18);
  border-color: var(--color-primary);
  color: #e8c882;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(200, 169, 110, 0.2);
}

@media (max-width: 768px) {
  .esperamos {
    padding: var(--section-padding-mobile) 0;
  }
}
</style>
