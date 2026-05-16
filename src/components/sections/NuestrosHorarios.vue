<template>
  <section class="horarios" aria-labelledby="horarios-heading">
    <div class="horarios__container">
      <h2 id="horarios-heading" class="horarios__title">Nuestros horarios</h2>
      <div class="section-divider"></div>
      <div class="horarios__grid">
        <div
          v-for="(item, index) in site.horarios"
          :key="index"
          class="horarios__card"
        >
          <span class="horarios__icon" aria-hidden="true">🕐</span>
          <strong class="horarios__dias">{{ item.dias }}</strong>
          <div class="horarios__franjas">
            <span
              v-for="(franja, fi) in item.franjas"
              :key="fi"
              class="horarios__franja"
              :class="{ 'horarios__franja--closed': franja === 'Cerrado' }"
            >
              {{ franja }}
            </span>
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
.horarios {
  background: var(--color-surface);
  padding: var(--section-py-mobile) 0;
}

.horarios__container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.horarios__title {
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

.horarios__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.horarios__card {
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
}

.horarios__icon {
  font-size: 2rem;
  line-height: 1;
}

.horarios__dias {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-text);
}

.horarios__franjas {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.horarios__franja {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  background: var(--color-surface);
  padding: 0.2rem 0.75rem;
  border-radius: var(--radius-xl);
  display: inline-block;
}

.horarios__franja--closed {
  color: var(--color-primary);
  background: rgba(139, 26, 26, 0.08);
  font-weight: 600;
}

@media (min-width: 768px) {
  .horarios {
    padding: var(--section-py) 0;
  }
}
</style>