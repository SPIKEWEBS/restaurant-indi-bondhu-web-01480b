<template>
  <section class="experiencia" aria-label="Una experiencia diferente">
    <div class="experiencia__bg">
      <img
        src="/images/banner-20web.jpg"
        alt="Ambiente del restaurante Bondhu — una experiencia diferente"
        width="1920"
        height="598"
        class="experiencia__bg-img"
        loading="lazy"
      />
      <div class="experiencia__overlay"></div>
    </div>
    <div class="experiencia__content">
      <h1 class="experiencia__title">ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ</h1>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.experiencia {
  position: relative;
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.experiencia__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.experiencia__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.experiencia__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.experiencia__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--sp-4xl) var(--sp-lg);
}

.experiencia__title {
  font-family: 'Georgia', serif;
  font-size: clamp(1.6rem, 4vw, 3.2rem);
  font-weight: 400;
  color: var(--color-white);
  text-align: center;
  text-shadow: 0 2px 16px rgba(0,0,0,0.6);
  letter-spacing: 0.02em;
  line-height: 1.3;
}

@media (max-width: 600px) {
  .experiencia {
    min-height: 280px;
  }
  .experiencia__title {
    font-size: 1.4rem;
  }
}
</style>