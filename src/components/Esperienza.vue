<template>
  <section id="esperienza">
    <div class="container">
      <div class="section-header" v-fadein>
        <h2 class="section-title">{{ t.experience.title }}</h2>
        <p class="section-description">{{ t.experience.description }}</p>
        <div class="section-line"></div>
      </div>

      <div class="timeline-list">
        <article
          v-for="(item, index) in t.experience.items"
          :key="`${item.company}-${item.period}`"
          class="timeline-card"
          v-fadein="index * 80"
        >
          <div class="timeline-index">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="timeline-meta">
            <span>{{ item.period }}</span>
            <strong>{{ item.role }}</strong>
          </div>
          <div class="timeline-body">
            <h3>{{ item.company }}</h3>
            <ul>
              <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()
</script>
