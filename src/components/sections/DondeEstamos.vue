<template>
  <section class="donde" aria-labelledby="donde-heading">
    <div class="donde__container">
      <p class="donde__eyebrow reveal">Visítanos</p>
      <h2 id="donde-heading" class="donde__title reveal reveal-delay-1">Dónde estamos</h2>
      <div class="section-divider reveal reveal-delay-1"></div>

      <div class="donde__layout">
        <!-- Cards column -->
        <div class="donde__cards">
          <div
            v-for="(card, i) in cards"
            :key="card.key"
            class="donde__card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="donde__card-icon-wrap" aria-hidden="true">
              <span class="donde__icon">{{ card.icon }}</span>
            </div>
            <div class="donde__card-body">
              <strong>{{ card.label }}</strong>
              <a v-if="card.href" :href="card.href" :class="card.cls" :aria-label="card.ariaLabel">
                {{ card.value }}
              </a>
              <p v-else>{{ card.value }}</p>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="donde__map reveal reveal-delay-3" aria-label="Mapa de ubicación del restaurante Bondhu">
          <div class="donde__map-inner">
            <span class="donde__map-icon" aria-hidden="true">🗺️</span>
            <p class="donde__map-text">{{ site.direccion }}</p>
            <a
              href="https://maps.google.com/?q=Plaça+Jaume+II+3+A+Ferreries+Menorca"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary donde__map-btn"
              aria-label="Abrir en Google Maps"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import site from '../../data/siteData.js'

const cards = [
  {
    key: 'dir',
    icon: '📍',
    label: `${site.nombreCorto} Restaurant`,
    value: site.direccion,
    href: null,
    cls: '',
    ariaLabel: '',
  },
  {
    key: 'tel',
    icon: '☎',
    label: 'Teléfono',
    value: site.telefono,
    href: `tel:${site.telefonoRaw}`,
    cls: 'donde__tel-link',
    ariaLabel: 'Llamar al restaurante Bondhu',
  },
  {
    key: 'email',
    icon: '✉',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    cls: '',
    ariaLabel: 'Enviar email a Bondhu Restaurant',
  },
]

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
.donde {
  background: var(--color-bg);
  padding: var(--section-py-mobile) 0;
}

.donde__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.donde__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.donde__title {
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

/* Layout */
.donde__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

.donde__cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.donde__card {
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;
  box-shadow: var(--shadow-card);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color var(--transition-base);
}

.donde__card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 0 32px rgba(var(--color-primary-rgb), 0.15), var(--shadow-card-hover);
  border-color: rgba(var(--color-primary-rgb), 0.15);
}

.donde__card-icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: var(--radius-md);
  background: rgba(139, 26, 26, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.donde__card:hover .donde__card-icon-wrap {
  background: rgba(139, 26, 26, 0.16);
  transform: scale(1.08);
}

.donde__icon {
  font-size: 1.3rem;
  line-height: 1;
}

.donde__card-body strong {
  display: block;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text);
  margin-bottom: 0.3rem;
}

.donde__card-body p,
.donde__card-body a {
  font-size: 0.93rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.5;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.donde__tel-link {
  font-size: 1rem !important;
  font-weight: 700 !important;
  color: var(--color-primary) !important;
}

.donde__card-body a:hover,
.donde__tel-link:hover {
  color: var(--color-primary-dark) !important;
}

/* Map */
.donde__map {
  background: linear-gradient(135deg, var(--color-surface-alt) 0%, var(--color-surface) 100%);
  border-radius: var(--radius-card);
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--color-border);
  box-shadow: var(--shadow-card);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.donde__map:hover {
  border-color: rgba(var(--color-primary-rgb), 0.25);
  box-shadow: 0 0 32px rgba(var(--color-primary-rgb), 0.1), var(--shadow-card-hover);
}

.donde__map-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem var(--spacing-md);
}

.donde__map-icon {
  font-size: 2.8rem;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
}

.donde__map-text {
  font-size: 0.92rem;
  color: var(--color-text-muted);
  text-align: center;
  line-height: 1.5;
  margin: 0;
  max-width: 260px;
}

.donde__map-btn {
  margin-top: 0.25rem;
}

@media (min-width: 768px) {
  .donde {
    padding: var(--section-py) 0;
  }
  .donde__layout {
    grid-template-columns: 1fr 1.4fr;
    align-items: stretch;
  }
  .donde__map {
    min-height: 300px;
  }
}
</style>
