<template>
  <section id="formazione" class="section-compact">
    <div class="container">
      <div class="section-header" v-fadein>
        <h2 class="section-title">{{ t.education.title }}</h2>
        <p class="section-description">{{ t.education.description }}</p>
        <div class="section-line"></div>
      </div>

      <div class="education-grid">
        <article
          v-for="(item, index) in t.education.items"
          :key="`${item.school}-${item.period}`"
          class="education-card"
          v-fadein="index * 80"
        >
          <span>{{ item.period }}</span>
          <h3>{{ item.school }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()
</script>
