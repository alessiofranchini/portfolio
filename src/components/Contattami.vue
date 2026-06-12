<template>
  <section id="contattami">
    <div class="container">
      <div class="section-header" v-fadein>
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="contact-wrap" v-fadein="100">
        <form class="contact-form" @submit.prevent="handleSendEmail">
          <div class="form-group">
            <label for="Name">{{ t.contact.name }}</label>
            <input
              type="text"
              id="Name"
              name="user_name"
              :placeholder="t.contact.namePlaceholder"
              v-model="formData.user_name"
            />
          </div>

          <div class="form-group">
            <label for="mail">{{ t.contact.email }}</label>
            <input
              type="email"
              id="mail"
              name="user_email"
              :placeholder="t.contact.emailPlaceholder"
              v-model="formData.user_email"
            />
          </div>

          <div class="form-group">
            <label for="msg">{{ t.contact.message }}</label>
            <textarea
              id="msg"
              name="message"
              :placeholder="t.contact.messagePlaceholder"
              v-model="formData.message"
              rows="6"
            />
          </div>

          <button type="submit" class="btn-primary form-submit">
            {{ t.contact.send }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()

const formData = reactive({
  user_name: '',
  user_email: '',
  message: '',
})

function handleSendEmail() {
  const { user_name, user_email, message } = formData
  const emailBody = `Nome: ${user_name}\nEmail: ${user_email}\nMessaggio: ${message}`
  const emailSubject = 'Messaggio dal modulo di contatto'
  window.location.href = `mailto:alessiofranchini1@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
}
</script>
