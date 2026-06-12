<template>
  <section class="hero-section" id="home">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <p class="hero-greeting">{{ t.hero.greeting }}</p>
          <h1 class="hero-name">{{ t.hero.name }}</h1>
          <p class="hero-role">{{ t.hero.role }}</p>
          <p class="hero-bio">{{ t.hero.bio }}</p>
          <div class="hero-actions">
            <a href="#contattami" class="btn-primary">{{ t.hero.contactBtn }}</a>
            <a
              href="https://drive.google.com/file/d/1LRDNwC8bau8aZJFp-zd3iF8zH-PdwOzY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >{{ t.hero.cvBtn }}</a>
          </div>
        </div>

        <div class="hero-image">
          <div class="profile-ring">
            <div class="profile-ring-inner">
              <img :src="foto" alt="Alessio Franchini" />
            </div>
          </div>
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
