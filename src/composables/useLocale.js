import { ref, computed } from 'vue'

const locale = ref('it')

const translations = {
  it: {
    nav: {
      cv: 'Curriculum Vitae',
      skills: 'Competenze',
      experience: 'Esperienza',
      education: 'Formazione',
      projects: 'Progetti',
      contact: 'Contatti',
    },
    hero: {
      greeting: 'Ciao, sono',
      name: 'Alessio Franchini',
      role: 'Full Stack Developer',
      bio: "Full Stack Developer con oltre 2 anni di esperienza nello sviluppo di applicazioni web con Vue.js e Laravel. Lavoro su frontend, backend, API REST e database, con attenzione a problem solving e apprendimento continuo.",
      highlights: [
        { value: '2+', label: 'anni di esperienza' },
        { value: 'Vue/Laravel', label: 'stack principale' },
        { value: 'API + SQL', label: 'focus tecnico' },
      ],
      status: 'Disponibile per nuove opportunita',
      profileKicker: 'Current stack',
      profileTitle: 'Applicazioni web complete, dal dato alla UI.',
      profileText: 'Ho esperienza su funzionalita business, integrazione API, gestione stato, PDF/reportistica e ottimizzazione query SQL.',
      tags: ['Vue 3', 'Laravel', 'MySQL', 'Pinia'],
      metrics: [
        { value: 'REST', label: 'API' },
        { value: 'PDF', label: 'report' },
        { value: 'SQL', label: 'query' },
      ],
      contactBtn: 'Contattami',
      cvBtn: 'Curriculum',
    },
    skills: {
      title: 'Competenze',
      description: 'Frontend con Vue, Angular e React, backend con Laravel e PHP, API REST e database relazionali.',
      languagesLabel: 'Lingue',
      languages: ['Italiano — madrelingua', 'Inglese — intermedio'],
      focus: [
        {
          label: 'Frontend',
          title: 'Interfacce scalabili',
          text: 'Vue 3, Angular, JavaScript, Pinia e validazione form per applicazioni operative.',
        },
        {
          label: 'Backend',
          title: 'Logica business',
          text: 'Laravel, PHP e API REST per flussi gestionali, pagamenti, documenti e report.',
        },
        {
          label: 'Database',
          title: 'Dati affidabili',
          text: 'MySQL e PostgreSQL con attenzione a query, bug fixing e manutenzione.',
        },
      ],
    },
    experience: {
      title: 'Esperienza',
      description: 'Esperienze professionali e operative che hanno consolidato competenze tecniche, collaborazione e gestione del lavoro.',
      items: [
        {
          company: 'Doit - Latina',
          role: 'Full Stack Developer',
          period: '2024 - 03/2026',
          details: [
            'Sviluppo di applicazioni web con Vue 3, Laravel e MySQL.',
            'Implementazione di funzionalita business: fatture, DDT, pagamenti e note di credito.',
            'Integrazione e sviluppo di API REST.',
            'Gestione dello stato applicativo con Pinia.',
            'Generazione di documenti PDF e gestione reportistica.',
            'Ottimizzazione query SQL e risoluzione bug.',
          ],
        },
        {
          company: 'Bitgears - Roma',
          role: 'Front end Developer - Stage',
          period: '02/04/2024 - 30/09/2024',
          details: [
            'Sviluppo del progetto Planning con Angular e JavaScript.',
            "Implementazione di nuove funzionalita e manutenzione dell'applicazione.",
            'Collaborazione con il team di sviluppo.',
          ],
        },
        {
          company: 'Q8 Bar La Vela',
          role: 'Barista',
          period: '2019 - 2022',
          details: [
            'Gestione clienti, cassa e rapporti con fornitori.',
          ],
        },
        {
          company: 'Agricola Savo',
          role: 'Operaio',
          period: '2017 - 2019',
          details: [
            'Attivita operative agricole e supporto alla gestione aziendale.',
          ],
        },
      ],
    },
    education: {
      title: 'Formazione',
      description: 'Percorsi formativi principali, dal liceo scientifico informatico al bootcamp intensivo web development.',
      items: [
        {
          school: 'Epicode - Web Developer Bootcamp',
          period: '2023',
          description: "Corso intensivo di 6 mesi come Web Developer Full Stack Junior, con formazione front-end e back-end e conseguimento dell'attestato finale.",
        },
        {
          school: 'Ettore Majorana - Liceo Scientifico',
          period: '2013 - 2018',
          description: 'Liceo scientifico informatico.',
        },
      ],
    },
    projects: {
      title: 'Cosa ho costruito',
      areas: [
        {
          title: 'Gestionali aziendali',
          items: ['DDT e bolle di consegna', 'Fatture e note di credito', 'Gestione pagamenti', 'Reportistica PDF', 'Costruzione da zero del sistema'],
        },
        {
          title: 'Piattaforme interne',
          items: ['Gestione dipendenti e ruoli', 'Macchinari e utenze', 'Planning aziendale', 'Quiz e strumenti interni', 'Permessi e autenticazione'],
        },
        {
          title: 'Clienti & Comunicazione',
          items: ['Anagrafica clienti', 'Notifiche email istantanee', 'Contatti e assistenza', 'Integrazioni con servizi esterni', 'Flussi automatizzati'],
        },
        {
          title: 'Sviluppo & Manutenzione',
          items: ['API REST', 'Ottimizzazione query SQL', 'Bug fixing e debug', 'Aggiornamento funzionalità', 'Refactoring e code review'],
        },
      ],
      workLabel: 'Lavoro',
      personalLabel: 'Personali',
      privateLabel: 'Privato',
      visit: 'Apri progetto',
      work: [
        {
          name: 'Gestionale Trasporti',
          description: 'Applicazione gestionale completa per azienda di trasporti: DDT, fatture clienti, note di credito e flussi operativi.',
          stack: ['Vue 3', 'Laravel', 'MySQL', 'Pinia'],
        },
        {
          name: 'Project S',
          description: 'Piattaforma di gestione con moduli per utenze, dipendenti e macchinari.',
          stack: ['Vue 3', 'Laravel', 'MySQL'],
        },
        {
          name: 'Peroni',
          description: 'Sviluppo di funzionalità su applicativo gestionale per cliente Peroni.',
          stack: ['Vue 3', 'Laravel', 'MySQL'],
        },
      ],
      personal: [
        {
          name: 'Gestionale Agricolo',
          description: 'Applicazione gestionale per azienda agricola: gestione dipendenti, terreni e coltivazioni.',
          stack: ['Vue 3', 'Laravel', 'MySQL'],
          private: true,
        },
        {
          key: 'capstone',
          name: 'Capstone Auto',
          description: 'Applicazione full-stack per gestire un catalogo auto con flussi CRUD, backend Java e database relazionale.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL'],
        },
        {
          key: 'weather',
          name: 'Meteo App',
          description: 'Applicazione meteo che recupera dati esterni e li presenta in una UI semplice da consultare.',
          stack: ['JavaScript', 'API', 'CSS'],
        },
        {
          key: 'pub',
          name: 'Sito Web Locale',
          description: 'Landing page per un locale con sezioni commerciali, immagini e call to action dirette.',
          stack: ['HTML', 'CSS', 'JavaScript'],
        },
      ],
    },
    contact: {
      title: 'Contattami',
      intro: "Hai un'opportunita, una collaborazione o vuoi approfondire il mio profilo? Scrivimi e ti rispondero appena possibile.",
      phone: 'Telefono',
      name: 'Nome',
      namePlaceholder: 'Il tuo nome',
      email: 'Email',
      emailPlaceholder: 'La tua email',
      message: 'Messaggio',
      messagePlaceholder: 'Il tuo messaggio',
      send: 'Invia messaggio',
      headline: 'Parliamoci.',
      availability: 'Automunito · Disponibile al trasferimento',
      availabilityBadges: ['Automunito', 'Disponibile al trasferimento', 'Full Remote / Ibrido'],
    },
    statement: 'Costruisco applicazioni web complete. Dal frontend al database, ogni pezzo al suo posto.',
    footer: 'Fatto con passione da Alessio Franchini',
  },
  en: {
    nav: {
      cv: 'Resume',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Alessio Franchini',
      role: 'Full Stack Developer',
      bio: 'Full Stack Developer with over 2 years of experience building web applications with Vue.js and Laravel. I work across frontend, backend, REST APIs, and databases, with a strong focus on problem solving and continuous learning.',
      highlights: [
        { value: '2+', label: 'years experience' },
        { value: 'Vue/Laravel', label: 'main stack' },
        { value: 'API + SQL', label: 'technical focus' },
      ],
      status: 'Open to new opportunities',
      profileKicker: 'Current stack',
      profileTitle: 'Complete web apps, from data to UI.',
      profileText: 'I have hands-on experience with business features, API integration, state management, PDF/report generation, and SQL query optimization.',
      tags: ['Vue 3', 'Laravel', 'MySQL', 'Pinia'],
      metrics: [
        { value: 'REST', label: 'API' },
        { value: 'PDF', label: 'reports' },
        { value: 'SQL', label: 'queries' },
      ],
      contactBtn: 'Contact me',
      cvBtn: 'Resume',
    },
    skills: {
      title: 'Skills',
      description: 'Frontend with Vue, Angular and React, backend with Laravel and PHP, REST APIs and relational databases.',
      languagesLabel: 'Languages',
      languages: ['Italian — native', 'English — intermediate'],
      focus: [
        {
          label: 'Frontend',
          title: 'Scalable interfaces',
          text: 'Vue 3, Angular, JavaScript, Pinia, and form validation for operational applications.',
        },
        {
          label: 'Backend',
          title: 'Business logic',
          text: 'Laravel, PHP, and REST APIs for management flows, payments, documents, and reports.',
        },
        {
          label: 'Database',
          title: 'Reliable data',
          text: 'MySQL and PostgreSQL with care for queries, bug fixing, and maintenance.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      description: 'Professional and operational experience that strengthened my technical skills, collaboration, and work ownership.',
      items: [
        {
          company: 'Doit - Latina',
          role: 'Full Stack Developer',
          period: '2024 - 03/2026',
          details: [
            'Developed web applications with Vue 3, Laravel, and MySQL.',
            'Implemented business features: invoices, delivery notes, payments, and credit notes.',
            'Integrated and developed REST APIs.',
            'Managed application state with Pinia.',
            'Generated PDF documents and handled reporting flows.',
            'Optimized SQL queries and fixed bugs.',
          ],
        },
        {
          company: 'Bitgears - Rome',
          role: 'Front end Developer - Internship',
          period: '02/04/2024 - 30/09/2024',
          details: [
            'Developed the Planning project using Angular and JavaScript.',
            'Implemented new features and maintained the application.',
            'Collaborated with the development team.',
          ],
        },
        {
          company: 'Q8 Bar La Vela',
          role: 'Barista',
          period: '2019 - 2022',
          details: [
            'Managed customers, cash register operations, and supplier relationships.',
          ],
        },
        {
          company: 'Agricola Savo',
          role: 'Worker',
          period: '2017 - 2019',
          details: [
            'Handled agricultural operations and supported business management.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      description: 'Main education paths, from computer science high school to an intensive web development bootcamp.',
      items: [
        {
          school: 'Epicode - Web Developer Bootcamp',
          period: '2023',
          description: 'Six-month intensive Junior Full Stack Web Developer course, with frontend and backend training and final certificate.',
        },
        {
          school: 'Ettore Majorana - Scientific High School',
          period: '2013 - 2018',
          description: 'Computer science scientific high school.',
        },
      ],
    },
    projects: {
      title: 'What I\'ve built',
      areas: [
        {
          title: 'Business management',
          items: ['Delivery notes and shipments', 'Invoices and credit notes', 'Payment management', 'PDF reporting', 'Full system built from scratch'],
        },
        {
          title: 'Internal platforms',
          items: ['Employee and role management', 'Machinery and utilities', 'Business planning', 'Quizzes and internal tools', 'Permissions and authentication'],
        },
        {
          title: 'Clients & Communication',
          items: ['Customer registry', 'Instant email notifications', 'Support and contacts', 'External service integrations', 'Automated flows'],
        },
        {
          title: 'Development & Maintenance',
          items: ['REST APIs', 'SQL query optimization', 'Bug fixing and debugging', 'Feature updates', 'Refactoring and code review'],
        },
      ],
      workLabel: 'Work',
      personalLabel: 'Personal',
      privateLabel: 'Private',
      visit: 'Open project',
      work: [
        {
          name: 'Transport Management System',
          description: 'Full management application for a transport company: delivery notes, customer invoices, credit notes, and operational flows.',
          stack: ['Vue 3', 'Laravel', 'MySQL', 'Pinia'],
        },
        {
          name: 'Project S',
          description: 'Management platform with modules for utilities, employees, and machinery.',
          stack: ['Vue 3', 'Laravel', 'MySQL'],
        },
        {
          name: 'Peroni',
          description: 'Feature development on a management application for the Peroni client.',
          stack: ['Vue 3', 'Laravel', 'MySQL'],
        },
      ],
      personal: [
        {
          name: 'Agricultural Management System',
          description: 'Management application for an agricultural company: employees, land plots, and crops.',
          stack: ['Vue 3', 'Laravel', 'MySQL'],
          private: true,
        },
        {
          key: 'capstone',
          name: 'Capstone Auto',
          description: 'Full-stack application for managing a car catalog with CRUD flows, a Java backend, and a relational database.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL'],
        },
        {
          key: 'weather',
          name: 'Weather App',
          description: 'Weather application that fetches external data and presents it in a clear, readable interface.',
          stack: ['JavaScript', 'API', 'CSS'],
        },
        {
          key: 'pub',
          name: 'Local Business Website',
          description: 'Landing page for a local venue with commercial sections, images, and direct calls to action.',
          stack: ['HTML', 'CSS', 'JavaScript'],
        },
      ],
    },
    contact: {
      title: 'Contact me',
      intro: 'Have an opportunity, a collaboration idea, or want to learn more about my profile? Send me a message and I will get back to you.',
      phone: 'Phone',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'Your email',
      message: 'Message',
      messagePlaceholder: 'Your message',
      send: 'Send message',
      headline: "Let's talk.",
      availability: 'Has own car · Open to relocation',
      availabilityBadges: ['Has own car', 'Open to relocation', 'Full Remote / Hybrid'],
    },
    statement: 'I build complete web applications. From frontend to database, every piece in place.',
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
