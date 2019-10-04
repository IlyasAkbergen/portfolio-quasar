import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  'ru': {
    app: {
      welcomeMsg: 'Добро пожаловать в веб-приложение на Vue.js (фреймворк Quasar)',
      name: 'Портфолио'
    },
    contacts: {
      mail_to_me: 'Связаться со мной по почте',
      links: 'Ссылки, контакты'
    }
  },
  'en': {
    app: {
      welcomeMsg: 'Welcome to Vue.js App (Quasar framework)',
      name: 'Quasar app, portfolio'
    },
    contacts: {
      mail_to_me: 'Send email to me',
      links: 'Essential links'
    }
  },
  'kz': {
    app: {
      welcomeMsg: 'Казакша уэлком',
      name: 'Портфолио (кз)'
    },
    contacts: {
      mail_to_me: 'email жиберу',
      links: 'Ссылкалар'
    }
  }
}

const i18n = new VueI18n({
  locale: 'ru', // app.store.state.app.locale.value,
  fallbackLocale: 'en',
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }