<template>
  <q-page class="flex flex-center" v-show="!page_loading">
    <h2>{{ $t('nav.about') }}</h2>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState('app', [
      'page_loading'
    ])
  }
}
</script>
