<template>
  <div id="q-app">
<!--    <div class="fixed-center" v-if="page_loading">-->
<!--      <q-circular-progress-->
<!--        indeterminate-->
<!--        size="75px"-->
<!--        :thickness="0.6"-->
<!--        color="lime"-->
<!--        center-color="grey-8"-->
<!--        class="q-ma-md"-->
<!--      />-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<script>

import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('app', [
      'page_loading'
    ])
  }
}
</script>
