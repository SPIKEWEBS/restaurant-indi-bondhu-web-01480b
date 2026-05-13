<template>
  <main id="main-content" class="legal-page">
    <div class="legal-page__hero">
      <h1 class="legal-page__title">Política de Privacidad</h1>
    </div>

    <section class="legal-page__body section container">
      <div class="legal-page__content">
        <h2>Responsable del Tratamiento</h2>
        <p><strong>Nombre:</strong> Bondhu Restaurant</p>
        <p><strong>Dirección:</strong> {{ siteData.direccion }}</p>
        <p><strong>Email de contacto:</strong>
          <a :href="siteData.emailHref" class="legal-page__link" :aria-label="`Enviar email a ${siteData.email}`">
            {{ siteData.email }}
          </a>
        </p>

        <h2>Datos Recabados</h2>
        <p>Bondhu Restaurant recaba únicamente los datos personales necesarios para gestionar las reservas y atender las consultas realizadas a través de los canales de contacto del restaurante (teléfono, email).</p>

        <h2>Finalidad del Tratamiento</h2>
        <p>Los datos facilitados por los usuarios se utilizan exclusivamente para:</p>
        <p>— Gestión de reservas de mesa.</p>
        <p>— Respuesta a consultas y solicitudes de información.</p>
        <p>— Mejora del servicio ofrecido.</p>

        <h2>Derechos del Usuario</h2>
        <p>En cualquier momento puede ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando un correo a
          <a :href="siteData.emailHref" class="legal-page__link" :aria-label="`Enviar email para ejercer derechos LOPD a ${siteData.email}`">
            {{ siteData.email }}
          </a>.
        </p>

        <h2>Conservación de Datos</h2>
        <p>Los datos personales serán conservados durante el tiempo mínimo necesario para la prestación del servicio y en cumplimiento de las obligaciones legales aplicables.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import siteData from '../data/siteData.js'

onMounted(() => {
  document.title = 'Política de Privacidad — Bondhu Indian Premium Restaurant'
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