<template>
  <main id="main-content">
    <h1 class="sr-only">Restaurant Indi Bondhu — Ferreries</h1>
    <HeroBondhu />
    <ExperienciaDiferente />
    <EspecialidadesHindues />
    <NuestroRestaurante />
    <OsEsperamos />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroBondhu from '../components/sections/HeroBondhu.vue'
import ExperienciaDiferente from '../components/sections/ExperienciaDiferente.vue'
import EspecialidadesHindues from '../components/sections/EspecialidadesHindues.vue'
import NuestroRestaurante from '../components/sections/NuestroRestaurante.vue'
import OsEsperamos from '../components/sections/OsEsperamos.vue'

onMounted(() => { document.title = "Restaurant Indi Bondhu — Ferreries" })
</script>