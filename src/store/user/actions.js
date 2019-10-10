export function changeLocale ({ state, commit }, payload) {
  commit('setLocale', payload.localeValue)
  payload.i18n.locale = state.locale.value
}
