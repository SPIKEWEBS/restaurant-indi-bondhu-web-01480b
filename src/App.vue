<template>
  <a href="#main-content" class="skip-link">Saltar al contenido</a>
  <div></div>
  <RouterView />
  <div></div>
  <div></div>
</template>

<script setup>



</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 9999;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: #fff;
  font-weight: bold;
  border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
}

.skip-link:focus {
  left: 0;
}
</style>