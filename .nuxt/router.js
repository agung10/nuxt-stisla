import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4cfcbcf0 = () => interopDefault(import('../pages/general.vue' /* webpackChunkName: "pages/general" */))
const _5e4fe5a3 = () => interopDefault(import('../pages/starter/blankPage.vue' /* webpackChunkName: "pages/starter/blankPage" */))
const _563f581b = () => interopDefault(import('../pages/starter/bootstrap/alert.vue' /* webpackChunkName: "pages/starter/bootstrap/alert" */))
const _2b57eee2 = () => interopDefault(import('../pages/starter/bootstrap/badge.vue' /* webpackChunkName: "pages/starter/bootstrap/badge" */))
const _eec78158 = () => interopDefault(import('../pages/starter/bootstrap/breadcrumb.vue' /* webpackChunkName: "pages/starter/bootstrap/breadcrumb" */))
const _5915f400 = () => interopDefault(import('../pages/starter/bootstrap/buttons.vue' /* webpackChunkName: "pages/starter/bootstrap/buttons" */))
const _70649aa1 = () => interopDefault(import('../pages/starter/bootstrap/card.vue' /* webpackChunkName: "pages/starter/bootstrap/card" */))
const _d37c971e = () => interopDefault(import('../pages/starter/bootstrap/carousel.vue' /* webpackChunkName: "pages/starter/bootstrap/carousel" */))
const _c116ef84 = () => interopDefault(import('../pages/starter/bootstrap/collapse.vue' /* webpackChunkName: "pages/starter/bootstrap/collapse" */))
const _c45c52bc = () => interopDefault(import('../pages/starter/bootstrap/dropdown.vue' /* webpackChunkName: "pages/starter/bootstrap/dropdown" */))
const _e5c39b56 = () => interopDefault(import('../pages/starter/bootstrap/form.vue' /* webpackChunkName: "pages/starter/bootstrap/form" */))
const _441f5140 = () => interopDefault(import('../pages/starter/bootstrap/listGroup.vue' /* webpackChunkName: "pages/starter/bootstrap/listGroup" */))
const _0cfe0e42 = () => interopDefault(import('../pages/starter/bootstrap/mediaObject.vue' /* webpackChunkName: "pages/starter/bootstrap/mediaObject" */))
const _2ebeb8ec = () => interopDefault(import('../pages/starter/bootstrap/modal.vue' /* webpackChunkName: "pages/starter/bootstrap/modal" */))
const _6472cbbc = () => interopDefault(import('../pages/starter/bootstrap/nav.vue' /* webpackChunkName: "pages/starter/bootstrap/nav" */))
const _15913d3e = () => interopDefault(import('../pages/starter/bootstrap/navbar.vue' /* webpackChunkName: "pages/starter/bootstrap/navbar" */))
const _7df2a36b = () => interopDefault(import('../pages/starter/bootstrap/pagination.vue' /* webpackChunkName: "pages/starter/bootstrap/pagination" */))
const _48a87324 = () => interopDefault(import('../pages/starter/bootstrap/popover.vue' /* webpackChunkName: "pages/starter/bootstrap/popover" */))
const _5a82e6be = () => interopDefault(import('../pages/starter/bootstrap/progress.vue' /* webpackChunkName: "pages/starter/bootstrap/progress" */))
const _36e3818d = () => interopDefault(import('../pages/starter/bootstrap/table.vue' /* webpackChunkName: "pages/starter/bootstrap/table" */))
const _6d3e0582 = () => interopDefault(import('../pages/starter/bootstrap/tooltip.vue' /* webpackChunkName: "pages/starter/bootstrap/tooltip" */))
const _00150e80 = () => interopDefault(import('../pages/starter/bootstrap/typography.vue' /* webpackChunkName: "pages/starter/bootstrap/typography" */))
const _05a032b6 = () => interopDefault(import('../pages/starter/layout/defaultLayout.vue' /* webpackChunkName: "pages/starter/layout/defaultLayout" */))
const _584f3c34 = () => interopDefault(import('../pages/starter/layout/topNavigation.vue' /* webpackChunkName: "pages/starter/layout/topNavigation" */))
const _371b200c = () => interopDefault(import('../pages/stisla/components/article.vue' /* webpackChunkName: "pages/stisla/components/article" */))
const _825ca79a = () => interopDefault(import('../pages/stisla/components/avatar.vue' /* webpackChunkName: "pages/stisla/components/avatar" */))
const _ffc9202e = () => interopDefault(import('../pages/stisla/components/chatBox.vue' /* webpackChunkName: "pages/stisla/components/chatBox" */))
const _02d9639e = () => interopDefault(import('../pages/stisla/components/emptyState.vue' /* webpackChunkName: "pages/stisla/components/emptyState" */))
const _f38b8730 = () => interopDefault(import('../pages/stisla/components/gallery.vue' /* webpackChunkName: "pages/stisla/components/gallery" */))
const _1955cad4 = () => interopDefault(import('../pages/stisla/components/hero.vue' /* webpackChunkName: "pages/stisla/components/hero" */))
const _2e2a9dea = () => interopDefault(import('../pages/stisla/components/multipleUpload.vue' /* webpackChunkName: "pages/stisla/components/multipleUpload" */))
const _63350adc = () => interopDefault(import('../pages/stisla/components/pricing.vue' /* webpackChunkName: "pages/stisla/components/pricing" */))
const _a4cdcbaa = () => interopDefault(import('../pages/stisla/components/tab.vue' /* webpackChunkName: "pages/stisla/components/tab" */))
const _14782a64 = () => interopDefault(import('../pages/stisla/components/table.vue' /* webpackChunkName: "pages/stisla/components/table" */))
const _2e579625 = () => interopDefault(import('../pages/stisla/components/user.vue' /* webpackChunkName: "pages/stisla/components/user" */))
const _ec685176 = () => interopDefault(import('../pages/stisla/components/wizard.vue' /* webpackChunkName: "pages/stisla/components/wizard" */))
const _8226c31c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/general",
    component: _4cfcbcf0,
    name: "general"
  }, {
    path: "/starter/blankPage",
    component: _5e4fe5a3,
    name: "starter-blankPage"
  }, {
    path: "/starter/bootstrap/alert",
    component: _563f581b,
    name: "starter-bootstrap-alert"
  }, {
    path: "/starter/bootstrap/badge",
    component: _2b57eee2,
    name: "starter-bootstrap-badge"
  }, {
    path: "/starter/bootstrap/breadcrumb",
    component: _eec78158,
    name: "starter-bootstrap-breadcrumb"
  }, {
    path: "/starter/bootstrap/buttons",
    component: _5915f400,
    name: "starter-bootstrap-buttons"
  }, {
    path: "/starter/bootstrap/card",
    component: _70649aa1,
    name: "starter-bootstrap-card"
  }, {
    path: "/starter/bootstrap/carousel",
    component: _d37c971e,
    name: "starter-bootstrap-carousel"
  }, {
    path: "/starter/bootstrap/collapse",
    component: _c116ef84,
    name: "starter-bootstrap-collapse"
  }, {
    path: "/starter/bootstrap/dropdown",
    component: _c45c52bc,
    name: "starter-bootstrap-dropdown"
  }, {
    path: "/starter/bootstrap/form",
    component: _e5c39b56,
    name: "starter-bootstrap-form"
  }, {
    path: "/starter/bootstrap/listGroup",
    component: _441f5140,
    name: "starter-bootstrap-listGroup"
  }, {
    path: "/starter/bootstrap/mediaObject",
    component: _0cfe0e42,
    name: "starter-bootstrap-mediaObject"
  }, {
    path: "/starter/bootstrap/modal",
    component: _2ebeb8ec,
    name: "starter-bootstrap-modal"
  }, {
    path: "/starter/bootstrap/nav",
    component: _6472cbbc,
    name: "starter-bootstrap-nav"
  }, {
    path: "/starter/bootstrap/navbar",
    component: _15913d3e,
    name: "starter-bootstrap-navbar"
  }, {
    path: "/starter/bootstrap/pagination",
    component: _7df2a36b,
    name: "starter-bootstrap-pagination"
  }, {
    path: "/starter/bootstrap/popover",
    component: _48a87324,
    name: "starter-bootstrap-popover"
  }, {
    path: "/starter/bootstrap/progress",
    component: _5a82e6be,
    name: "starter-bootstrap-progress"
  }, {
    path: "/starter/bootstrap/table",
    component: _36e3818d,
    name: "starter-bootstrap-table"
  }, {
    path: "/starter/bootstrap/tooltip",
    component: _6d3e0582,
    name: "starter-bootstrap-tooltip"
  }, {
    path: "/starter/bootstrap/typography",
    component: _00150e80,
    name: "starter-bootstrap-typography"
  }, {
    path: "/starter/layout/defaultLayout",
    component: _05a032b6,
    name: "starter-layout-defaultLayout"
  }, {
    path: "/starter/layout/topNavigation",
    component: _584f3c34,
    name: "starter-layout-topNavigation"
  }, {
    path: "/stisla/components/article",
    component: _371b200c,
    name: "stisla-components-article"
  }, {
    path: "/stisla/components/avatar",
    component: _825ca79a,
    name: "stisla-components-avatar"
  }, {
    path: "/stisla/components/chatBox",
    component: _ffc9202e,
    name: "stisla-components-chatBox"
  }, {
    path: "/stisla/components/emptyState",
    component: _02d9639e,
    name: "stisla-components-emptyState"
  }, {
    path: "/stisla/components/gallery",
    component: _f38b8730,
    name: "stisla-components-gallery"
  }, {
    path: "/stisla/components/hero",
    component: _1955cad4,
    name: "stisla-components-hero"
  }, {
    path: "/stisla/components/multipleUpload",
    component: _2e2a9dea,
    name: "stisla-components-multipleUpload"
  }, {
    path: "/stisla/components/pricing",
    component: _63350adc,
    name: "stisla-components-pricing"
  }, {
    path: "/stisla/components/tab",
    component: _a4cdcbaa,
    name: "stisla-components-tab"
  }, {
    path: "/stisla/components/table",
    component: _14782a64,
    name: "stisla-components-table"
  }, {
    path: "/stisla/components/user",
    component: _2e579625,
    name: "stisla-components-user"
  }, {
    path: "/stisla/components/wizard",
    component: _ec685176,
    name: "stisla-components-wizard"
  }, {
    path: "/",
    component: _8226c31c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
