import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55f7a9f1 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _c3419098 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _14543c46 = () => interopDefault(import('../pages/products/_pid/index.vue' /* webpackChunkName: "pages/products/_pid/index" */))
const _604d90cb = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _8b81d9e4 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _061afe14 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _0cdf2c91 = () => interopDefault(import('../pages/users/_id.vue/index.vue' /* webpackChunkName: "pages/users/_id.vue/index" */))
const _1ae3b695 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/products",
    component: _55f7a9f1,
    children: [{
      path: "",
      component: _c3419098,
      name: "products"
    }, {
      path: ":pid",
      component: _14543c46,
      name: "products-pid"
    }]
  }, {
    path: "/users",
    component: _604d90cb,
    children: [{
      path: "",
      component: _8b81d9e4,
      name: "users"
    }, {
      path: ":id",
      component: _061afe14,
      name: "users-id"
    }, {
      path: ":id.vue",
      component: _0cdf2c91,
      name: "users-id.vue"
    }]
  }, {
    path: "/",
    component: _1ae3b695,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
