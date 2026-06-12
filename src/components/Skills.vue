<template>
  <section id="competenze">
    <div class="container">
      <div class="section-header" v-fadein>
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="skills-grid">
        <div
          v-for="(skill, index) in skillsData"
          :key="skill.name"
          class="skill-card"
          v-fadein="index * 60"
        >
          <img :src="skill.icon" :alt="skill.name" />
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import JavaScript from '../assets/img/JavaScript.png'
import Bootstrap_logo from '../assets/img/Bootstrap_logo.png'
import sass from '../assets/img/sass.png'
import reactlogo from '../assets/img/reactlogo.png'
import Java from '../assets/img/Java.png'
import spring from '../assets/img/spring.png'
import postman from '../assets/img/postman.svg'
import Postgresql from '../assets/img/Postgresql.png'

const { t } = useLocale()

const skillsData = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'Bootstrap', icon: Bootstrap_logo },
  { name: 'Sass', icon: sass },
  { name: 'React', icon: reactlogo },
  { name: 'Java', icon: Java },
  { name: 'Spring Boot', icon: spring },
  { name: 'Postman', icon: postman },
  { name: 'PostgreSQL', icon: Postgresql },
]
</script>
