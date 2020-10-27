exports.ids = [5];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/badge.vue?vue&type=template&id=f6dcdcbe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapBadge')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/badge.vue?vue&type=template&id=f6dcdcbe&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapBadge.vue + 2 modules
var BootstrapBadge = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/badge.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var badgevue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Badge - Nuxt Stisla"
  },
  components: {
    BootstrapBadge: BootstrapBadge["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-badge"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_badgevue_type_script_lang_js_ = (badgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/badge.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_badgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f6dcdcbe",
  "41897eb1"
  
)

/* harmony default export */ var badge = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapBadge: __webpack_require__(70).default})


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapBadge.vue?vue&type=template&id=7befd6ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Badge</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Badge</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Badges</h2> <p class=\"section-lead\">\n      Examples for badges, our small count and labeling component.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Heading</h4></div> <div class=\"card-body\"><h1>Heading 1 <span class=\"badge badge-secondary\">New</span></h1> <h2>Heading 2 <span class=\"badge badge-secondary\">New</span></h2> <h3>Heading 3 <span class=\"badge badge-secondary\">New</span></h3> <h4>Heading 4 <span class=\"badge badge-secondary\">New</span></h4> <h5>Heading 5 <span class=\"badge badge-secondary\">New</span></h5> <h6>Heading 6 <span class=\"badge badge-secondary\">New</span></h6></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Variation</h4></div> <div class=\"card-body\"><div class=\"badges\"><span class=\"badge badge-primary\">Primary</span> <span class=\"badge badge-secondary\">Secondary</span> <span class=\"badge badge-success\">Success</span> <span class=\"badge badge-danger\">Danger</span> <span class=\"badge badge-warning\">Warning</span> <span class=\"badge badge-info\">Info</span> <span class=\"badge badge-light\">Light</span> <span class=\"badge badge-dark\">Dark</span></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Button</h4></div> <div class=\"card-body\"><div class=\"buttons\"><div class=\"section-title mt-0\">Simple</div> <button type=\"button\" class=\"btn btn-primary\">\n                Notifications <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-danger\">\n                Notifications <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-warning\">\n                Notifications <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-success\">\n                Notifications <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-dark\">\n                Notifications <span class=\"badge badge-transparent\">4</span></button> <div class=\"section-title\">Icons</div> <button type=\"button\" class=\"btn btn-primary btn-icon icon-left\"><i class=\"fas fa-plane\"></i> Notifications\n                <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-danger btn-icon icon-left\"><i class=\"fas fa-plane\"></i> Notifications\n                <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-warning btn-icon icon-left\"><i class=\"fas fa-plane\"></i> Notifications\n                <span class=\"badge badge-transparent\">4</span></button> <button type=\"button\" class=\"btn btn-success btn-icon icon-left\"><i class=\"fas fa-plane\"></i> Notifications\n                <span class=\"badge badge-transparent\">4</span></button></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Link</h4></div> <div class=\"card-body\"><div class=\"badges\"><a href=\"#\" class=\"badge badge-primary\">Primary</a> <a href=\"#\" class=\"badge badge-secondary\">Secondary</a> <a href=\"#\" class=\"badge badge-success\">Success</a> <a href=\"#\" class=\"badge badge-danger\">Danger</a> <a href=\"#\" class=\"badge badge-warning\">Warning</a> <a href=\"#\" class=\"badge badge-info\">Info</a> <a href=\"#\" class=\"badge badge-light\">Light</a> <a href=\"#\" class=\"badge badge-dark\">Dark</a></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapBadge.vue?vue&type=template&id=7befd6ea&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapBadge.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a649433"
  
)

/* harmony default export */ var BootstrapBadge = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=badge.js.map