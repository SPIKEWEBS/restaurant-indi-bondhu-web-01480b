<template>
  <section class="hero" aria-label="Bienvenida a Bondhu Indian Premium Restaurant">
    <div class="hero__bg">
      <img
        :src="site.hero.image"
        :alt="site.hero.imageAlt"
        class="hero__img"
        width="800"
        height="600"
        fetchpriority="high"
      />
      <div class="hero__overlay" aria-hidden="true"></div>
    </div>
    <div class="hero__content container">
      <div class="hero__logo-block">
        <img
          :src="site.logo.src"
          :alt="site.logo.alt"
          class="hero__logo"
          width="200"
          height="150"
          loading="lazy"
        />
      </div>
      <h1 class="hero__heading">{{ site.hero.heading }}</h1>
      <h3 class="hero__subheading">{{ site.hero.subheading }}</h3>
      <h3 class="hero__tagline">{{ site.hero.tagline }}</h3>
    </div>
  </section>
</template>

<script setup>
import site from '../../data/siteData.js'
</script>

<style scoped>
.hero {
  position: relative;
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

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: var(--color-hero-overlay);
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-white);
  padding-top: calc(var(--navbar-height) + 2rem);
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.hero__logo-block {
  margin-bottom: 1.5rem;
}

.hero__logo {
  width: auto;
  max-width: 200px;
  height: auto;
  margin-inline: auto;
  border-radius: var(--border-radius);
}

.hero__heading {
  font-family: var(--font-heading);
  font-size: var(--fs-hero);
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}

.hero__subheading {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--color-white);
  text-transform: uppercase;
}

.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 300;
  font-style: italic;
  color: rgba(255, 255, 255, 0.88);
  max-width: 600px;
}
</style>