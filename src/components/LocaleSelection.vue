<template>
  <q-select
    class="q-mx-sm"
    color="secondary"
    :value="locale"
    filled borderless
    @input="value => { $emit('select', value.value) }"
    :options="locales"/>
</template>

<script>
export default {
  name: 'LocaleSelection',
  props: {
    locale: Object,
    locales: Array
  }
}
</script>

<style scoped>

</style>
