import { ref, computed } from 'vue'

const locale = ref('it')

const translations = {
  it: {
    nav: {
      cv: 'Curriculum Vitae',
    },
    hero: {
      greeting: 'Ciao, sono',
      name: 'Alessio Franchini',
      role: 'Web Developer Full-Stack',
      bio: "Mi piace mettermi alla prova ed imparare sempre cose nuove. Il mio obiettivo è lavorare nell'ambito dello sviluppo web e accrescere le mie competenze. Ho concluso con successo il percorso in Epicode.",
      contactBtn: 'Contattami',
      cvBtn: 'Curriculum',
    },
    skills: {
      title: 'Competenze',
    },
    projects: {
      title: 'Progetti',
    },
    contact: {
      title: 'Contattami',
      name: 'Nome',
      namePlaceholder: 'Il tuo nome',
      email: 'Email',
      emailPlaceholder: 'La tua email',
      message: 'Messaggio',
      messagePlaceholder: 'Il tuo messaggio',
      send: 'Invia messaggio',
    },
    footer: 'Fatto con passione da Alessio Franchini',
  },
  en: {
    nav: {
      cv: 'Resume',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Alessio Franchini',
      role: 'Full-Stack Web Developer',
      bio: 'I love challenging myself and learning new things every day. My goal is to grow in web development and keep improving my skills. I successfully completed the Epicode program.',
      contactBtn: 'Contact me',
      cvBtn: 'Resume',
    },
    skills: {
      title: 'Skills',
    },
    projects: {
      title: 'Projects',
    },
    contact: {
      title: 'Contact me',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'Your email',
      message: 'Message',
      messagePlaceholder: 'Your message',
      send: 'Send message',
    },
    footer: 'Made with passion by Alessio Franchini',
  },
}

export function useLocale() {
  const t = computed(() => translations[locale.value])
  function toggleLocale() {
    locale.value = locale.value === 'it' ? 'en' : 'it'
  }
  return { locale, t, toggleLocale }
}
