<template>
  <section id="contattami">
    <div class="container">
      <div class="contact-inner">
        <div class="section-header" v-fadein>
          <span class="section-label">{{ t.contact.title }}</span>
          <h2 class="contact-headline">{{ t.contact.headline }}</h2>
          <p class="contact-sub">{{ t.contact.intro }}</p>
        </div>

        <div class="contact-links" v-fadein="100">
          <a href="mailto:alessiofranchini1@gmail.com" class="contact-link-row">
            <span class="contact-link-label">Email</span>
            <span class="contact-link-value">alessiofranchini1@gmail.com</span>
            <span class="contact-link-arrow">↗</span>
          </a>
          <a href="tel:+393922571912" class="contact-link-row">
            <span class="contact-link-label">{{ t.contact.phone }}</span>
            <span class="contact-link-value">+39 392 257 1912</span>
            <span class="contact-link-arrow">↗</span>
          </a>
          <a
            href="https://github.com/alessiofranchini"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link-row"
          >
            <span class="contact-link-label">GitHub</span>
            <span class="contact-link-value">github.com/alessiofranchini</span>
            <span class="contact-link-arrow">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/alessio-franchini-74abb6272/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link-row"
          >
            <span class="contact-link-label">LinkedIn</span>
            <span class="contact-link-value">Alessio Franchini</span>
            <span class="contact-link-arrow">↗</span>
          </a>
        </div>

        <div class="contact-badges" v-fadein="200">
          <span v-for="badge in t.contact.availabilityBadges" :key="badge" class="contact-badge">
            {{ badge }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()
</script>
