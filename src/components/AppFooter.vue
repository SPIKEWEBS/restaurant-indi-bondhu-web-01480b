<template>
  <footer class="footer">
    <div class="footer__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-footer-bg)"/>
      </svg>
    </div>

    <div class="footer__container">
      <!-- Brand mark -->
      <div class="footer__brand reveal">
        <span class="footer__brand-name">BONDHU</span>
        <span class="footer__brand-sub">Indian Premium Restaurant · Ferreries</span>
        <div class="footer__divider"></div>
      </div>

      <!-- Contact & Hours grid -->
      <div class="footer__grid">
        <!-- Where we are -->
        <div class="footer__block reveal reveal-delay-1">
          <h2 class="footer__heading">
            Dónde estamos
            <span class="footer__heading-line"></span>
          </h2>
          <div class="footer__info">
            <div class="footer__info-item">
              <span class="footer__icon">🏠</span>
              <div>
                <strong>BONDHU Restaurant</strong><br>
                <span>{{ siteData.direccion }}</span>
              </div>
            </div>
            <div class="footer__info-item">
              <span class="footer__icon">📞</span>
              <a :href="siteData.telefonoHref" class="footer__link" :aria-label="`Llamar al restaurante: ${siteData.telefono}`">
                (+34) {{ siteData.telefono }}
              </a>
            </div>
            <div class="footer__info-item">
              <span class="footer__icon">✉️</span>
              <a :href="siteData.emailHref" class="footer__link" :aria-label="`Enviar email a ${siteData.email}`">
                {{ siteData.email }}
              </a>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div class="footer__block reveal reveal-delay-2">
          <h2 class="footer__heading">
            Nuestros horarios
            <span class="footer__heading-line"></span>
          </h2>
          <div class="footer__hours">
            <div class="footer__hours-chip">
              <span class="footer__icon">🕐</span>
              <div>
                <strong>{{ siteData.horarios.activos }}</strong><br>
                <span class="footer__hours-time">{{ siteData.horarios.mediodiaInicio }} – {{ siteData.horarios.mediodiaCierre }}</span><br>
                <span class="footer__hours-time">{{ siteData.horarios.nocheInicio }} – {{ siteData.horarios.nocheCierre }}</span>
              </div>
            </div>
            <div class="footer__hours-chip footer__hours-chip--closed">
              <span class="footer__icon">🔒</span>
              <span>{{ siteData.horarios.cerrado }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal links -->
      <div class="footer__legal">
        <nav aria-label="Links legales">
          <ul class="footer__legal-links">
            <li v-for="link in siteData.footerLinks" :key="link.to">
              <RouterLink :to="link.to" class="footer__legal-link">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Copyright -->
      <div class="footer__copyright">
        <p>{{ siteData.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  // Safety fallback
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
  }, 1500)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
.reveal-delay-1 { transition-delay: 0.12s; }
.reveal-delay-2 { transition-delay: 0.24s; }

.footer {
  background: var(--color-footer-bg);
  position: relative;
  margin-top: 0;
}

.footer__wave {
  background: var(--color-surface);
  line-height: 0;
}

.footer__wave svg {
  display: block;
  width: 100%;
  height: 60px;
}

.footer__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md) var(--space-lg);
}

.footer__brand {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.footer__brand-name {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  background: linear-gradient(135deg, var(--color-primary) 0%, #e8c882 55%, var(--color-primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.footer__brand-sub {
  display: block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: 0.4rem;
}

.footer__divider {
  width: 70px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  margin: var(--space-sm) auto 0;
  border-radius: 2px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-xl);
}

.footer__heading {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: var(--space-md);
  letter-spacing: 0.04em;
  position: relative;
  display: inline-block;
}

.footer__heading-line {
  display: block;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  border-radius: 2px;
  margin-top: 6px;
}

.footer__info {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer__info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border-gold);
  border-radius: var(--border-radius);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer__info-item:hover {
  box-shadow: 0 6px 24px rgba(200, 169, 110, 0.14);
  border-color: rgba(200, 169, 110, 0.4);
  transform: translateX(3px);
}

.footer__icon {
  font-size: 1.15rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.footer__link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.footer__hours {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer__hours-chip {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border-gold);
  border-radius: var(--border-radius);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer__hours-chip:hover {
  box-shadow: 0 6px 24px rgba(200, 169, 110, 0.12);
  transform: translateX(3px);
}

.footer__hours-time {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.footer__hours-chip--closed {
  border-color: rgba(139, 0, 0, 0.18);
  background: rgba(139, 0, 0, 0.04);
}

.footer__hours-chip--closed:hover {
  box-shadow: 0 4px 16px rgba(139, 0, 0, 0.08);
}

.footer__legal {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-md);
  margin-bottom: var(--space-sm);
}

.footer__legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.footer__legal-links li:not(:last-child)::after {
  content: '·';
  margin-left: var(--space-sm);
  color: var(--color-border);
}

.footer__legal-link {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: var(--color-primary);
}

.footer__copyright {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  padding-top: var(--space-sm);
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .footer__legal-links {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .footer__legal-links li:not(:last-child)::after {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
