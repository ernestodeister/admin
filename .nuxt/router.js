import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59c48a1e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _101b3d1f = () => interopDefault(import('../pages/orders/DetailOrder.vue' /* webpackChunkName: "pages/orders/DetailOrder" */))
const _ef714d1e = () => interopDefault(import('../pages/orders/ListOrders.vue' /* webpackChunkName: "pages/orders/ListOrders" */))
const _dec801d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _59c48a1e,
    name: "inspire"
  }, {
    path: "/orders/DetailOrder",
    component: _101b3d1f,
    name: "orders-DetailOrder"
  }, {
    path: "/orders/ListOrders",
    component: _ef714d1e,
    name: "orders-ListOrders"
  }, {
    path: "/",
    component: _dec801d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
