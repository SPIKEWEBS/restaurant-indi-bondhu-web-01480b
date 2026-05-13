<template>
  <footer><p>© {{ year }} {{ siteData.nombre }}</p></footer>
</template>
<script setup>
import siteData from '@/data/siteData.js'
const year = new Date().getFullYear()
</script>
<style scoped>
footer { padding: 2rem; text-align: center; background: var(--color-surface); color: var(--color-text-muted); font-size: .875rem; }
</style>