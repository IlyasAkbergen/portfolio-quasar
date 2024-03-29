<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          {{ $t('app.name') }}
        </q-toolbar-title>

        <LocaleSelection
          :locale="locale"
          :locales="locales"
          @select="value => { localeSelected(value) }"
        />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2 q-pl-sm"
    >
      <q-list class="q-mt-md">
        <q-item clickable @click.native="goTo('/')" :active="isCurrent('/')" :disabled="isCurrent('/')">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('nav.home_page') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="goTo('/dashboard')" :active="isCurrent('/dashboard')" :disabled="isCurrent('/dashboard')">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('nav.dashboard') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click.native="goTo('/about')" :active="isCurrent('/about')" :disabled="isCurrent('/about')">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('nav.about') }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="fixed-bottom-left q-mb-lg q-pl-sm">
        <q-item header class="fa-header">{{ $t('contacts.links') }}</q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/ilyasakbergen/portfolio-quasar">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/ilyasakbergen</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="mailto:ilijas9813@gmail.com">
          <q-item-section avatar>
            <q-icon name="mail" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Email</q-item-label>
            <q-item-label caption>{{ $t('contacts.mail_to_me') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://t.me/IAniskegelbar">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Telegram</q-item-label>
            <q-item-label caption>@IAniskegelbar</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition name="transitions"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  mode="out-in">
        <router-view/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LocaleSelection from '../components/LocaleSelection'
export default {
  name: 'AppLayout',
  computed: {
    ...mapState('app', [
      'locale',
      'locales'
    ])
  },
  methods: {
    ...mapActions('app', [
      'changeLocale'
    ]),
    localeSelected (locale) {
      this.changeLocale({ 'localeValue': locale, 'i18n': this.$i18n })
    },
    goTo (path) {
      if (path !== this.$route.path) this.$router.push(path)
    },
    isCurrent (path) {
      return this.$route.path === path
    }
  },
  components: {
    LocaleSelection
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
