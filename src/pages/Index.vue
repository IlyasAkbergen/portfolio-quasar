<template>
  <q-page v-show="!page_loading">
    <q-img src="../statics/banner.jpg" style="height: 400px">
      <div class="absolute-full text-subtitle2 flex flex-center column">
        <h6>{{ welcomeMsg }}</h6>
      </div>
      <div class="absolute-bottom flex flex-center" v-if="username == null">
        <q-form
          @submit="setUsername(name)"
          class="q-gutter-md"
        >
          <q-input v-model="name" color="secondary" bg-color="primary"
                   class="text-secondary"
                   filled :label="$t('app.username')"/>

          <div>
            <q-btn :label="$t('app.submit')" type="submit" color="warning"/>
          </div>
        </q-form>
      </div>
    </q-img>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapState('app', [
      'page_loading'
    ]),
    ...mapState('user', [
      'username'
    ]),
    welcomeMsg () {
      return `${this.username !== null ? this.username + ', ' : ''} ${this.$t('app.welcomeMsg')}`
    }
  },
  methods: {
    ...mapMutations('user', [
      'setUsername'
    ])
  },
  data () {
    return {
      name: null
    }
  }
}
</script>
