<template>
  <footer class="footer">
    <div class="footer__legal container">
      <p class="footer__legal-links">
        <RouterLink to="/aviso-legal/" class="footer__legal-link">Aviso Legal</RouterLink>
        <span class="footer__sep"> - </span>
        <RouterLink to="/politica-de-privacidad/" class="footer__legal-link">Política de Privacidad</RouterLink>
        <span class="footer__sep"> - </span>
        <RouterLink to="/politica-de-cookies/" class="footer__legal-link">Política de Cookies</RouterLink>
      </p>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">{{ siteData.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import siteData from '../data/siteData.js'
</script>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  font-family: var(--font-body);
}

.footer__legal {
  padding: var(--sp-lg) var(--sp-lg);
  text-align: center;
  border-top: 1px solid rgba(244, 228, 208, 0.2);
}

.footer__legal-links {
  font-size: var(--fs-sm);
  color: var(--color-secondary);
}

.footer__legal-link {
  color: var(--color-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: var(--color-accent);
}

.footer__sep {
  color: var(--color-secondary);
  opacity: 0.6;
}

.footer__bottom {
  background-color: rgba(0, 0, 0, 0.3);
  padding: var(--sp-md) 0;
}

.footer__bottom-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__copy {
  font-size: var(--fs-sm);
  color: var(--color-secondary);
  opacity: 0.8;
  text-align: center;
}
</style>