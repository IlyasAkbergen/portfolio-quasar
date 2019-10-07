export function setLocale (state, localeValue) {
  state.locale = state.locales.find(locale => locale.value === localeValue)
}

export function setPageLoading (state, value) {
  state.page_loading = value
}
