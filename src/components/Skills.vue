<template>
  <section id="competenze">
    <div class="container">
      <div class="section-header" v-fadein>
        <span class="section-label">Stack</span>
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <p class="section-sub">{{ t.skills.description }}</p>
      </div>

      <div class="skills-categories">
        <div
          v-for="(category, index) in categories"
          :key="category.label"
          class="skill-category"
          v-fadein="index * 100"
        >
          <span class="skill-category-label">{{ category.label }}</span>
          <div class="skill-pills">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="skill-pill"
            >{{ skill }}</span>
          </div>
        </div>
        <div class="skill-category" v-fadein="300">
          <span class="skill-category-label">{{ t.skills.languagesLabel }}</span>
          <div class="skill-pills">
            <span v-for="lang in t.skills.languages" :key="lang" class="skill-pill">{{ lang }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()

const categories = [
  {
    label: 'Frontend',
    skills: ['Vue 3', 'Angular', 'React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Pinia', 'VeeValidate'],
  },
  {
    label: 'Backend',
    skills: ['Laravel', 'PHP', 'REST API'],
  },
  {
    label: 'Database & Tools',
    skills: ['MySQL', 'PostgreSQL', 'Git', 'Postman'],
  },
]
</script>
