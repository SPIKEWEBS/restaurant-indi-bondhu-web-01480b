<template>
  <section class="hero" aria-label="Portada Bondhu Indian Premium Restaurant">
    <div class="hero__bg">
      <img
        src="/images/image-crop-200000003.jpg"
        alt="Interior del restaurante Bondhu en Ferreries"
        width="1920"
        height="768"
        class="hero__bg-img"
        fetchpriority="high"
      />
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__content">
      <div class="hero__content-inner">
        <h1 class="hero__title">BONDHU</h1>
        <h3 class="hero__subtitle">Indian Premium Restaurant</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: calc(var(--navbar-height) + 2rem) var(--sp-lg) var(--sp-4xl);
}

.hero__content-inner {
  text-align: center;
  color: var(--color-white);
}

.hero__title {
  font-family: 'Georgia', serif;
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 700;
  color: var(--color-white);
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
  letter-spacing: 0.04em;
  line-height: 1;
  margin-bottom: var(--sp-lg);
}

.hero__subtitle {
  font-family: var(--font-nav);
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 0.08em;
  text-shadow: 0 1px 10px rgba(0,0,0,0.5);
}

@media (max-width: 600px) {
  .hero {
    min-height: 80vh;
  }
  .hero__title {
    font-size: 3rem;
  }
  .hero__subtitle {
    font-size: 1.1rem;
  }
}
</style>