<template>
  <main id="main-content">
    <h1>{{ siteData.nombre }}</h1>
  </main>
</template>
<script setup>
import siteData from '@/data/siteData.js'
</script>
<style scoped>
main { max-width: 960px; margin: 0 auto; padding: 4rem 2rem; text-align: center; }
</style>