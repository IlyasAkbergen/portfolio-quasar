export function setLocale (state, localeValue) {
  state.locale = state.locales.find(locale => locale.value === localeValue)
}
