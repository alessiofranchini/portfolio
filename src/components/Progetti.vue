<template>
  <section id="progetti">
    <div class="container">
      <div class="section-header" v-fadein>
        <h2 class="section-title">{{ t.projects.title }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="projects-grid">
        <a
          v-for="(progetto, index) in progetti"
          :key="progetto.nome"
          :href="progetto.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
          v-fadein="index * 80"
        >
          <div class="project-img-wrap">
            <img :src="progetto.img" :alt="progetto.nome" />
            <div class="project-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </div>
          </div>
          <div class="project-info">
            <h3>{{ progetto.nome }}</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'
import capstone from '../assets/img/capstone.png'
import netflix from '../assets/img/netflix.png'
import meteo from '../assets/img/meteo.png'
import stay from '../assets/img/stay.png'
import pub from '../assets/img/pub.png'
import calcolatrice from '../assets/img/calcolatrice.png'

const { t } = useLocale()

const progetti = [
  { nome: 'Capstone', img: capstone, link: 'https://github.com/alessiofranchini/capstone_auto' },
  { nome: 'Netflix', img: netflix, link: 'https://github.com/alessiofranchini/netflix-project' },
  { nome: 'Meteo', img: meteo, link: 'https://github.com/alessiofranchini/w10-d5-weather-app' },
  { nome: 'Medium', img: stay, link: 'https://github.com/alessiofranchini/epicode/tree/main/WEEK%205/eserzio%20settimanale' },
  { nome: 'Sito web locale', img: pub, link: 'https://github.com/alessiofranchini/sito-web-locale' },
  { nome: 'Calcolatrice', img: calcolatrice, link: 'https://github.com/alessiofranchini/epicode/tree/main/WEEK%202/esercizio%20settimanale' },
]
</script>
