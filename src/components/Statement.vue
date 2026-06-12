<template>
  <section class="statement-section" ref="sectionEl">
    <div class="statement-sticky">
      <p class="statement-text">
        <template v-for="(word, i) in words" :key="i">
          <span
            class="statement-word"
            :ref="el => { if (el) wordEls[i] = el }"
          >{{ word }}</span>{{ i < words.length - 1 ? ' ' : '' }}
        </template>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()
const words = computed(() => t.value.statement.split(' '))

const sectionEl = ref(null)
const wordEls = ref([])

let rafId = null

function updateReveal() {
  const section = sectionEl.value
  if (!section) return

  const rect = section.getBoundingClientRect()
  const scrollable = section.offsetHeight - window.innerHeight
  const scrolled = Math.max(0, -rect.top)
  const progress = scrollable > 0 ? scrolled / scrollable : 0

  const total = wordEls.value.length
  wordEls.value.forEach((el, i) => {
    if (!el) return
    const start = i / total
    const end = (i + 1.2) / total
    const p = Math.max(0, Math.min(1, (progress - start) / (end - start)))
    el.style.opacity = 0.12 + p * 0.88
  })
}

function onScroll() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    updateReveal()
    rafId = null
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateReveal()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>
