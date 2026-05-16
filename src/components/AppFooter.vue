<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Brand -->
      <div class="footer__brand">
        <span class="footer__brand-name">BONDHU</span>
        <span class="footer__brand-sub">Indian Premium Restaurant</span>
      </div>

      <!-- Info -->
      <div class="footer__info">
        <address class="footer__address">
          <p>📍 {{ site.direccion }}</p>
          <p>
            <a :href="`tel:${site.telefonoRaw}`" aria-label="Llamar al restaurante Bondhu">
              ☎ {{ site.telefono }}
            </a>
          </p>
          <p>
            <a :href="`mailto:${site.email}`" aria-label="Enviar email a Bondhu">
              ✉ {{ site.email }}
            </a>
          </p>
        </address>
      </div>

      <!-- Legal links -->
      <nav class="footer__legal-nav" aria-label="Navegación legal">
        <RouterLink
          v-for="link in site.footerLinks"
          :key="link.to"
          :to="link.to"
          class="footer__legal-link"
        >
          {{ link.label }}
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
  color: rgba(255, 255, 255, 0.85);
  padding-top: 3rem;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md) 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
}

.footer__brand-name {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.1em;
}

.footer__brand-sub {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

/* Info */
.footer__address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.footer__address a {
  color: rgba(255, 255, 255, 0.85);
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
  gap: 0.5rem;
}

.footer__legal-link {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: var(--color-accent);
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 1rem var(--spacing-md);
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.4);
}

@media (min-width: 768px) {
  .footer__container {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
</style>