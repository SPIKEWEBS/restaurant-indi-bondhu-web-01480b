<template>
  <section class="horarios" aria-labelledby="horarios-heading">
    <div class="horarios__container">
      <p class="horarios__eyebrow reveal">Planifica tu visita</p>
      <h2 id="horarios-heading" class="horarios__title reveal reveal-delay-1">Nuestros horarios</h2>
      <div class="section-divider reveal reveal-delay-1"></div>

      <div class="horarios__grid">
        <div
          v-for="(item, index) in site.horarios"
          :key="index"
          class="horarios__card reveal"
          :class="[
            { 'horarios__card--closed': item.franjas[0] === 'Cerrado' },
            `reveal-delay-${index + 2}`
          ]"
        >
          <div class="horarios__card-header">
            <span class="horarios__icon" aria-hidden="true">
              {{ item.franjas[0] === 'Cerrado' ? '🔒' : '🕐' }}
            </span>
            <strong class="horarios__dias">{{ item.dias }}</strong>
          </div>
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
    { threshold: 0.1 }
  )
  revealEls.forEach((el) => observer.observe(el))

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
  }, 1500)
})
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

.horarios__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.horarios__title {
  font-family: var(--font-heading);
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.section-divider {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 0.75rem auto 2.5rem;
  border-radius: 2px;
}

.horarios__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.horarios__card {
  padding: 2rem 1.75rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-card);
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.horarios__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: var(--radius-card) var(--radius-card) 0 0;
  transition: height var(--transition-base);
}

.horarios__card:hover::before {
  height: 5px;
}

.horarios__card--closed::before {
  background: rgba(139, 26, 26, 0.28);
}

.horarios__card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 36px rgba(var(--color-primary-rgb), 0.16), var(--shadow-card-hover);
}

.horarios__card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.horarios__icon {
  font-size: 2.4rem;
  line-height: 1;
  transition: transform var(--transition-base);
}

.horarios__card:hover .horarios__icon {
  transform: scale(1.12) rotate(-5deg);
}

.horarios__dias {
  font-size: 0.88rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text);
  font-weight: 700;
}

.horarios__franjas {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.horarios__franja {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  background: var(--color-surface);
  padding: 0.35rem 1rem;
  border-radius: 100px;
  display: block;
  font-weight: 500;
  border: 1px solid var(--color-border-light);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.horarios__card:hover .horarios__franja:not(.horarios__franja--closed) {
  background: rgba(var(--color-primary-rgb), 0.04);
  color: var(--color-text);
}

.horarios__franja--closed {
  color: var(--color-primary);
  background: rgba(139, 26, 26, 0.07);
  border-color: rgba(139, 26, 26, 0.2);
  font-weight: 700;
  letter-spacing: 0.08em;
}

@media (min-width: 768px) {
  .horarios {
    padding: var(--section-py) 0;
  }
}
</style>
