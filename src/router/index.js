import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import i18n from '../boot/i18n'
Vue.use(VueRouter)
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    i18n,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    store.commit('app/setPageLoading', true)
    if (typeof next === 'function') next()
  })

  Router.afterEach((to, from, next) => {
    // setTimeout(() => {
    store.commit('app/setPageLoading', false)
    if (typeof next === 'function') next()
    // }, 500)
  })

  return Router
}
