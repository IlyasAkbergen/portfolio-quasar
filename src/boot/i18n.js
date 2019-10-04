import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  'en': {
    app: {
      welcomeMsg: 'Welcome to Vue.js App (Quasar framework)'
    }
  },
  'ru': {
    app: {
      welcomeMsg: 'Добро пожаловать в веб-приложение на Vue.js (фреймворк Quasar)'
    }
  },
  'kz': {
    app: {
      welcomeMsg: 'Казакша уэлком'
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
