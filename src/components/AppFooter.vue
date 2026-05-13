<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Contact & Hours -->
      <div class="footer__grid">
        <!-- Where we are -->
        <div class="footer__block">
          <h2 class="footer__heading">Dónde estamos</h2>
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
        <div class="footer__block">
          <h2 class="footer__heading">Nuestros horarios</h2>
          <div class="footer__hours">
            <div class="footer__hours-chip">
              <span class="footer__icon">🕐</span>
              <div>
                <strong>{{ siteData.horarios.activos }}</strong><br>
                <span>{{ siteData.horarios.mediodiaInicio }} - {{ siteData.horarios.mediodiaCierre }}</span><br>
                <span>{{ siteData.horarios.nocheInicio }} - {{ siteData.horarios.nocheCierre }}</span>
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
import siteData from '../data/siteData.js'
</script>

<style scoped>
.footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: var(--section-padding) 0 var(--space-lg);
}

.footer__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-xl);
}

.footer__block {}

.footer__heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--color-heading);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
}

.footer__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer__info-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.footer__icon {
  font-size: 1.2rem;
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
  gap: var(--space-sm);
}

.footer__hours-chip {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.footer__hours-chip--closed {
  border-color: rgba(139, 0, 0, 0.2);
  background: rgba(139, 0, 0, 0.05);
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
}

.footer__legal-link {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.footer__copyright {
  text-align: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  padding-top: var(--space-sm);
}

@media (max-width: 768px) {
  .footer {
    padding: var(--section-padding-mobile) 0 var(--space-lg);
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .footer__legal-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>