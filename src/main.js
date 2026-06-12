import { createApp } from 'vue'
import './index.css'
import './App.css'
import App from './App.vue'

const app = createApp(App)

// Global directive for scroll-triggered fade-in animations
app.directive('fadein', {
  mounted(el, binding) {
    el.classList.add('fade-up')
    const delay = binding.value || 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
  },
})

app.mount('#app')
