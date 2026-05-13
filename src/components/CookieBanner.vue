<template>
  <div v-if="visible" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
    <div class="cookie-banner__content">
      <p class="cookie-banner__text">
        Utilizamos cookies para permitir un correcto funcionamiento y seguro en nuestra página web, y para ofrecer la mejor experiencia posible al usuario.
      </p>
      <div class="cookie-banner__actions">
        <button
          class="cookie-banner__btn cookie-banner__btn--necessary"
          @click="acceptNecessary"
          aria-label="Aceptar solo cookies necesarias"
        >
          Aceptar solo lo necesario
        </button>
        <button
          class="cookie-banner__btn cookie-banner__btn--all"
          @click="acceptAll"
          aria-label="Aceptar todas las cookies"
        >
          Aceptar todo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('bondhu-cookies')
  if (!consent) {
    visible.value = true
  }
})

function acceptNecessary() {
  localStorage.setItem('bondhu-cookies', 'necessary')
  visible.value = false
}

function acceptAll() {
  localStorage.setItem('bondhu-cookies', 'all')
  visible.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: var(--color-cookie-bg);
  color: var(--color-cookie-text);
  padding: var(--space-md) var(--space-lg);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
}

.cookie-banner__content {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.cookie-banner__text {
  color: var(--color-cookie-text);
  font-size: var(--font-size-sm);
  flex: 1;
  min-width: 200px;
  line-height: 1.5;
}

.cookie-banner__actions {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.cookie-banner__btn {
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.cookie-banner__btn--necessary {
  background: transparent;
  color: var(--color-primary);
}

.cookie-banner__btn--necessary:hover {
  background: var(--color-primary);
  color: #fff;
}

.cookie-banner__btn--all {
  background: var(--color-primary);
  color: #fff;
}

.cookie-banner__btn--all:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

@media (max-width: 600px) {
  .cookie-banner__content {
    flex-direction: column;
  }

  .cookie-banner__actions {
    width: 100%;
    justify-content: center;
  }
}
</style>