<template>
  <section class="sabores section bg-white">
    <div class="container">
      <blockquote class="sabores__quote">
        <h3 class="sabores__heading">Los sabores de la India en un ambiente sofisticado</h3>
      </blockquote>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.sabores {
  padding: var(--sp-2xl) 0;
}

.sabores__quote {
  border: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.sabores__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--color-primary);
  font-style: italic;
  letter-spacing: 0.02em;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .sabores {
    padding: var(--sp-xl) 0;
  }
  .sabores__heading {
    font-size: 1.3rem;
  }
}
</style>