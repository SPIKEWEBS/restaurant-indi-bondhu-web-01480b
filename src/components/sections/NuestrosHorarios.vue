<template>
  <section class="horarios section bg-surface" aria-label="Nuestros horarios">
    <div class="container">
      <h2 class="horarios__heading">Nuestros horarios</h2>
      <div class="horarios__cards">
        <div class="horarios__card">
          <span class="horarios__icon" aria-hidden="true">🕐</span>
          <div class="horarios__card-content">
            <strong class="horarios__dias">Miércoles - Domingo</strong>
            <p class="horarios__horas">13:00h - 16:00h</p>
            <p class="horarios__horas">19.30h - 23:00h</p>
          </div>
        </div>
        <div class="horarios__card horarios__card--cerrado">
          <span class="horarios__icon" aria-hidden="true">🚫</span>
          <div class="horarios__card-content">
            <strong class="horarios__dias">Lunes y Martes</strong>
            <p class="horarios__cerrado-text">Cerrado</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.horarios {
  padding: 0 0 var(--sp-section);
}

.horarios__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--sp-xl);
}

.horarios__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--sp-lg);
  max-width: 600px;
}

.horarios__card {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-md);
  padding: var(--sp-lg);
  background: var(--color-white);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--color-accent);
}

.horarios__card--cerrado {
  border-left-color: var(--color-gray-mid);
}

.horarios__icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.horarios__card-content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
}

.horarios__dias {
  font-size: var(--fs-base);
  color: var(--color-primary);
  font-weight: 700;
}

.horarios__horas {
  font-size: var(--fs-sm);
  color: var(--color-text);
}

.horarios__cerrado-text {
  font-size: var(--fs-sm);
  color: var(--color-gray);
  font-style: italic;
}

@media (max-width: 480px) {
  .horarios {
    padding: 0 0 var(--sp-section-mobile);
  }
  .horarios__cards {
    grid-template-columns: 1fr;
  }
}
</style>