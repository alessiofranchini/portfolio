<template>
  <canvas ref="canvasEl" class="laptop-canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasEl = ref(null)

let renderer, rafId
const cleanups = []

function lerp(a, b, t) { return a + (b - a) * t }

onMounted(() => {
  const el = canvasEl.value
  const w = el.offsetWidth
  const h = el.offsetHeight

  renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(w, h)
  renderer.shadowMap.enabled = true

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100)
  camera.position.set(0, 2.2, 8)
  camera.lookAt(0, 0.3, 0)

  // --- Materials ---
  const aluminium = new THREE.MeshStandardMaterial({ color: 0x1c1c1e, metalness: 0.95, roughness: 0.12 })
  const aluminiumLight = new THREE.MeshStandardMaterial({ color: 0x2c2c2e, metalness: 0.9, roughness: 0.2 })
  const screenOff = new THREE.MeshStandardMaterial({ color: 0x030303, metalness: 0.1, roughness: 0.05, envMapIntensity: 0.5 })
  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x2997ff,
    emissive: new THREE.Color(0x2997ff),
    emissiveIntensity: 1.2,
    roughness: 0.4,
  })
  const keyMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.5, roughness: 0.6 })

  // --- Base (corpo/tastiera) ---
  const base = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.14, 2.3), aluminium)
  base.position.y = 0

  // bordo frontale
  const frontEdge = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.05, 0.06), aluminiumLight)
  frontEdge.position.set(0, -0.045, 1.17)

  // Trackpad
  const trackpad = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.01, 0.65), aluminiumLight)
  trackpad.position.set(0, 0.076, 0.6)

  // Tastiera (griglia di tasti stilizzata)
  const keyboardGroup = new THREE.Group()
  const keyW = 0.18, keyH = 0.02, keyD = 0.17
  const rows = 4, cols = 11
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = new THREE.Mesh(new THREE.BoxGeometry(keyW, keyH, keyD), keyMat)
      key.position.set(
        -1.0 + c * (keyW + 0.045),
        0.076,
        -0.55 + r * (keyD + 0.055)
      )
      keyboardGroup.add(key)
    }
  }

  // --- Lid group (schermo) ---
  const lidGroup = new THREE.Group()
  lidGroup.position.set(0, 0.07, -1.15)

  const lidBack = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.07, 2.3), aluminium)
  lidBack.position.set(0, 0, 1.15)

  const bezel = new THREE.Mesh(new THREE.BoxGeometry(3.1, 1.96, 0.025), aluminium)
  bezel.position.set(0, 1.1, 2.26)

  const screenDisplay = new THREE.Mesh(new THREE.BoxGeometry(2.78, 1.72, 0.015), screenOff)
  screenDisplay.position.set(0, 1.13, 2.273)

  // Indicatore accensione (glowing dot)
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), accentMat)
  dot.position.set(0, 0.22, 2.28)

  // Logo sul retro del coperchio
  const logoBack = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.008), accentMat)
  logoBack.position.set(0, 1.1, 0.04)

  lidGroup.add(lidBack, bezel, screenDisplay, dot, logoBack)

  // --- Laptop group ---
  const laptop = new THREE.Group()
  laptop.add(base, frontEdge, trackpad, keyboardGroup, lidGroup)
  laptop.rotation.x = 0.08
  scene.add(laptop)

  // --- Luci ---
  scene.add(new THREE.AmbientLight(0xffffff, 0.35))

  const key = new THREE.DirectionalLight(0xffffff, 1.8)
  key.position.set(5, 10, 6)
  scene.add(key)

  const fill = new THREE.DirectionalLight(0x3399ff, 0.5)
  fill.position.set(-7, 3, -3)
  scene.add(fill)

  const rim = new THREE.DirectionalLight(0xffffff, 0.25)
  rim.position.set(0, -5, -7)
  scene.add(rim)

  // --- Stato ---
  lidGroup.rotation.x = -Math.PI / 2 + 0.04  // chiuso

  let scrollProg = 0
  let mx = 0, my = 0, targetMx = 0, targetMy = 0

  function onScroll() {
    const heroH = window.innerHeight * 0.85
    scrollProg = Math.min(Math.max(window.scrollY / heroH, 0), 1)
  }

  function onMouseMove(e) {
    targetMx = (e.clientX / window.innerWidth - 0.5) * 0.45
    targetMy = (e.clientY / window.innerHeight - 0.5) * 0.28
  }

  function onResize() {
    const nw = el.offsetWidth
    const nh = el.offsetHeight
    renderer.setSize(nw, nh)
    camera.aspect = nw / nh
    camera.updateProjectionMatrix()
  }

  window.addEventListener('scroll', onScroll)
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', onResize)

  function animate() {
    rafId = requestAnimationFrame(animate)

    mx = lerp(mx, targetMx, 0.05)
    my = lerp(my, targetMy, 0.05)

    const closedX = -Math.PI / 2 + 0.04
    const openX   = closedX + Math.PI * 0.66
    lidGroup.rotation.x = lerp(lidGroup.rotation.x, lerp(closedX, openX, scrollProg), 0.09)

    laptop.rotation.y = lerp(laptop.rotation.y, mx, 0.06)
    laptop.rotation.x = lerp(laptop.rotation.x, 0.08 - my * 0.25, 0.06)

    renderer.render(scene, camera)
  }

  animate()

  cleanups.push(
    () => cancelAnimationFrame(rafId),
    () => window.removeEventListener('scroll', onScroll),
    () => window.removeEventListener('mousemove', onMouseMove),
    () => window.removeEventListener('resize', onResize),
    () => renderer.dispose(),
  )
})

onUnmounted(() => cleanups.forEach(fn => fn()))
</script>

<style scoped>
.laptop-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
