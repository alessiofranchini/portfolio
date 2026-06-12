<template>
  <div class="site-shell">
    <CustomNavbar />
    <main>
      <Informazioni />
      <Skills />
      <Progetti />
      <Contattami />
    </main>
    <footer>
      <p>{{ t.footer }}</p>
    </footer>
  </div>
</template>

<script setup>
import CustomNavbar from './components/Navbar.vue'
import Informazioni from './components/Informazioni.vue'
import Skills from './components/Skills.vue'
import Progetti from './components/Progetti.vue'
import Contattami from './components/Contattami.vue'
import { useLocale } from './composables/useLocale.js'

const { t } = useLocale()
</script>
