<template>
  <section id="progetti">
    <div class="container">

      <div class="section-header" v-fadein>
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">{{ t.projects.title }}</h2>
      </div>

      <div class="areas-grid">
        <div
          v-for="(area, index) in t.projects.areas"
          :key="area.title"
          class="area-card"
          v-fadein="index * 80"
        >
          <h3 class="area-title">{{ area.title }}</h3>
          <ul class="area-list">
            <li v-for="item in area.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()
</script>
