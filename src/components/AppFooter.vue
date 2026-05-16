<template>
  <footer class="footer">
    <div class="footer__top-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff"/>
      </svg>
    </div>

    <div class="footer__container">
      <!-- Brand -->
      <div class="footer__brand">
        <span class="footer__brand-name">BONDHU</span>
        <span class="footer__brand-sub">Indian Premium Restaurant</span>
        <p class="footer__brand-tagline">Los sabores de la India en Menorca</p>
      </div>

      <!-- Info -->
      <div class="footer__info">
        <h3 class="footer__info-heading">Contacto</h3>
        <address class="footer__address">
          <div class="footer__address-row">
            <span aria-hidden="true">📍</span>
            <span>{{ site.direccion }}</span>
          </div>
          <div class="footer__address-row">
            <span aria-hidden="true">☎</span>
            <a :href="`tel:${site.telefonoRaw}`" aria-label="Llamar al restaurante Bondhu">
              {{ site.telefono }}
            </a>
          </div>
          <div class="footer__address-row">
            <span aria-hidden="true">✉</span>
            <a :href="`mailto:${site.email}`" aria-label="Enviar email a Bondhu">
              {{ site.email }}
            </a>
          </div>
        </address>
      </div>

      <!-- Legal links -->
      <nav class="footer__legal-nav" aria-label="Navegación legal">
        <h3 class="footer__info-heading">Legal</h3>
        <RouterLink
          v-for="link in site.footerLinks"
          :key="link.to"
          :to="link.to"
          class="footer__legal-link"
        >
          <span aria-hidden="true">›</span> {{ link.label }}
        </RouterLink>
      </nav>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <span>{{ site.copyright }}</span>
    </div>
  </footer>
</template>

<script setup>
import site from '../data/siteData.js'
</script>

<style scoped>
.footer {
  background: var(--color-surface-dark);
  color: rgba(255, 255, 255, 0.82);
  padding-top: 0;
  position: relative;
}

.footer__top-wave {
  display: block;
  width: 100%;
  height: 60px;
  overflow: hidden;
  background: var(--color-surface-dark);
  margin-bottom: -1px;
}

.footer__top-wave svg {
  display: block;
  width: 100%;
  height: 100%;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem var(--spacing-md) 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
}

.footer__brand-name {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.12em;
  text-shadow: 0 0 30px rgba(212, 160, 23, 0.3);
}

.footer__brand-sub {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.footer__brand-tagline {
  margin-top: 0.75rem;
  font-size: 0.88rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.5;
  margin-bottom: 0;
}

/* Headings */
.footer__info-heading {
  font-family: var(--font-heading);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-accent);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(212, 160, 23, 0.2);
}

/* Info */
.footer__address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-size: 0.88rem;
}

.footer__address-row {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  line-height: 1.5;
}

.footer__address-row span:first-child {
  flex-shrink: 0;
  margin-top: 0.05rem;
}

.footer__address a {
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__address a:hover {
  color: var(--color-accent);
}

/* Legal */
.footer__legal-nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__legal-link {
  font-size: 0.84rem;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color var(--transition-fast), padding-left var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.footer__legal-link:hover {
  color: var(--color-accent);
  padding-left: 0.3rem;
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  text-align: center;
  padding: 1.1rem var(--spacing-md);
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.32);
  letter-spacing: 0.04em;
}

@media (min-width: 768px) {
  .footer__container {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
}
</style>
