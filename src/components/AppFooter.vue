<template>
  <footer class="footer">
    <div class="footer__inner container">
      <!-- Brand block -->
      <div class="footer__brand">
        <p class="footer__brand-name">BONDHU</p>
        <p class="footer__brand-sub">Indian Premium Restaurant</p>
      </div>

      <!-- Contact info -->
      <div class="footer__contact">
        <h2 class="footer__section-title">Dónde estamos</h2>
        <div class="footer__contact-list">
          <div class="footer__contact-item">
            <span class="footer__icon" aria-hidden="true">📍</span>
            <span>BONDHU Restaurant<br />{{ site.address }}</span>
          </div>
          <div class="footer__contact-item">
            <span class="footer__icon" aria-hidden="true">☎</span>
            <a :href="site.phoneHref" class="footer__contact-link" :aria-label="'Llamar al ' + site.phone">
              (+34) {{ site.phone }}
            </a>
          </div>
          <div class="footer__contact-item">
            <span class="footer__icon" aria-hidden="true">✉</span>
            <a :href="site.emailHref" class="footer__contact-link" :aria-label="'Enviar email a ' + site.email">
              {{ site.email }}
            </a>
          </div>
        </div>
      </div>

      <!-- Hours -->
      <div class="footer__hours">
        <h2 class="footer__section-title">Nuestros horarios</h2>
        <div class="footer__hours-list">
          <div class="footer__hours-item">
            <span class="footer__icon" aria-hidden="true">🕐</span>
            <div>
              <p>Miércoles - Domingo</p>
              <p>13:00h - 16:00h</p>
              <p>19.30h - 23:00h</p>
            </div>
          </div>
          <div class="footer__hours-item">
            <span class="footer__icon" aria-hidden="true">🚫</span>
            <div>
              <p>Lunes y Martes</p>
              <p><strong>Cerrado</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Legal links -->
    <div class="footer__legal">
      <div class="footer__legal-inner container">
        <nav class="footer__legal-nav" aria-label="Navegación legal">
          <RouterLink
            v-for="link in site.footerLegalLinks"
            :key="link.to"
            :to="link.to"
            class="footer__legal-link"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
        <p class="footer__copyright">{{ site.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import site from '../data/siteData.js'
</script>

<style scoped>
.footer {
  background: var(--color-dark-section);
  color: var(--color-white);
  padding-top: var(--section-pad-desktop);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: var(--section-pad-desktop);
}

@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer__brand-name {
  font-family: var(--font-heading);
  font-size: var(--fs-2xl);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-primary);
}
.footer__brand-sub {
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Section titles */
.footer__section-title {
  font-family: var(--font-heading);
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

/* Contact */
.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
}
.footer__icon {
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 2px;
}
.footer__contact-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.footer__contact-link:hover {
  color: var(--color-primary);
}

/* Hours */
.footer__hours-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer__hours-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

/* Legal */
.footer__legal {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-block: 1.25rem;
}
.footer__legal-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

@media (min-width: 600px) {
  .footer__legal-inner {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer__legal-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  justify-content: center;
}
.footer__legal-link {
  font-size: var(--fs-xs);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.footer__legal-link:hover {
  color: var(--color-primary);
}

.footer__copyright {
  font-size: var(--fs-xs);
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
}
</style>