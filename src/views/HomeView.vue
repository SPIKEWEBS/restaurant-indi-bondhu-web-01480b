<script setup>
import { onMounted } from 'vue'
// Section imports
const HeroPortada = defineAsyncComponent(() => import('../components/sections/HeroPortada.vue'))
const SaboresIndia = defineAsyncComponent(() => import('../components/sections/SaboresIndia.vue'))
const ExperienciaDiferente = defineAsyncComponent(() => import('../components/sections/ExperienciaDiferente.vue'))
const EspecialidadesHindues = defineAsyncComponent(() => import('../components/sections/EspecialidadesHindues.vue'))
const GaleriaRestaurante = defineAsyncComponent(() => import('../components/sections/GaleriaRestaurante.vue'))
const DondeEstamos = defineAsyncComponent(() => import('../components/sections/DondeEstamos.vue'))
const NuestrosHorarios = defineAsyncComponent(() => import('../components/sections/NuestrosHorarios.vue'))
onMounted(() => {
  document.title = 'Bondhu Indian Premium Restaurant — Ferreries, Menorca'
})
</script>

<template>
  <main id="main-content">
    <h1 class="sr-only">Bondhu Indian Premium Restaurant</h1>
    <HeroPortada />
    <SaboresIndia />
    <ExperienciaDiferente />
    <EspecialidadesHindues />
    <GaleriaRestaurante />
    <DondeEstamos />
    <NuestrosHorarios />
  </main>
</template>