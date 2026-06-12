<template>
  <section class="hero-section" id="home">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <span class="hero-eyebrow">{{ t.hero.greeting }}</span>
          <h1 class="hero-name">{{ t.hero.name }}</h1>
          <p class="hero-role">{{ t.hero.role }}</p>
          <p class="hero-bio">{{ t.hero.bio }}</p>
          <div class="hero-actions">
            <a href="#contattami" class="btn-primary">{{ t.hero.contactBtn }}</a>
            <a
              href="/cv.pdf"
              download="Alessio Franchini CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >{{ t.hero.cvBtn }}</a>
          </div>
        </div>

        <div class="hero-photo-wrap">
          <img :src="foto" alt="Alessio Franchini" class="hero-photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import foto from '../assets/img/foto.png'
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()
</script>
