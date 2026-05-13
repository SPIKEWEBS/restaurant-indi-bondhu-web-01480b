<template>
  <header>
    <nav aria-label="Menú principal">
      <RouterLink to="/">{{ siteData.nombre }}</RouterLink>
    </nav>
  </header>
</template>
<script setup>
import siteData from '@/data/siteData.js'
</script>
<style scoped>
header { padding: 1rem 2rem; background: var(--color-primary); color: #fff; }
nav a { color: #fff; text-decoration: none; font-weight: 700; }
</style>