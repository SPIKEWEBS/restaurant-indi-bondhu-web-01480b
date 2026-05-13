<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <h1 class="legal-page__title">Aviso Legal</h1>
    </div>

    <section class="legal-page__body section container">
      <div class="legal-page__content">
        <h2>Información Legal</h2>
        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los datos identificativos del titular de la presente página web.</p>

        <h2>Titular del sitio web</h2>
        <p><strong>Nombre:</strong> Bondhu Restaurant</p>
        <p><strong>Dirección:</strong> {{ siteData.direccion }}</p>
        <p><strong>Teléfono:</strong>
          <a :href="siteData.telefonoHref" class="legal-page__link" :aria-label="`Llamar al ${siteData.telefono}`">
            (+34) {{ siteData.telefono }}
          </a>
        </p>
        <p><strong>Email:</strong>
          <a :href="siteData.emailHref" class="legal-page__link" :aria-label="`Enviar email a ${siteData.email}`">
            {{ siteData.email }}
          </a>
        </p>

        <h2>Propiedad Intelectual</h2>
        <p>Los derechos de propiedad intelectual de la presente página web, su diseño gráfico y los códigos que contiene son titularidad de Bondhu Restaurant. Queda prohibida su reproducción, distribución o modificación sin la debida autorización.</p>

        <h2>Exclusión de Responsabilidad</h2>
        <p>Bondhu Restaurant no se responsabiliza de los posibles daños o perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Aviso Legal — Bondhu Indian Premium Restaurant'
})
</script>

<style scoped>
.legal-page {
  padding-top: var(--navbar-height);
}

.legal-page__hero {
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, #2d1b00 100%);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
}

.legal-page__title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: #fff;
  letter-spacing: 0.08em;
}

.legal-page__body {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.legal-page__content {
  max-width: 800px;
  margin: 0 auto;
}

.legal-page__content h2 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  font-size: 1.4rem;
  margin: var(--space-lg) 0 var(--space-sm);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-border);
}

.legal-page__content p {
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: var(--space-sm);
}

.legal-page__link {
  color: var(--color-primary);
  text-decoration: none;
}

.legal-page__link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-page__body {
    padding: var(--section-padding-mobile) var(--space-sm);
  }
}
</style>