exports.ids = [6];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/breadcrumb.vue?vue&type=template&id=263880cd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapBreadcrumb')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/breadcrumb.vue?vue&type=template&id=263880cd&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapBreadcrumb.vue + 2 modules
var BootstrapBreadcrumb = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var breadcrumbvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Breadcrumb - Nuxt Stisla"
  },
  components: {
    BootstrapBreadcrumb: BootstrapBreadcrumb["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-breadcrumb"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_breadcrumbvue_type_script_lang_js_ = (breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/breadcrumb.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "263880cd",
  "0f4738e5"
  
)

/* harmony default export */ var breadcrumb = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapBreadcrumb: __webpack_require__(74).default})


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapBreadcrumb.vue?vue&type=template&id=a4976dd8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Breadcrumb</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Breadcrumb</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Breadcrumb</h2> <p class=\"section-lead\">\n      Indicate the current page’s location within a navigational hierarchy\n      that automatically adds separators via CSS.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Default</h4></div> <div class=\"card-body\"><nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb\"><li aria-current=\"page\" class=\"breadcrumb-item active\">\n                  Home\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                  Data\n                </li></ol></nav></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Icon</h4></div> <div class=\"card-body\"><nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb\"><li class=\"breadcrumb-item active\"><i class=\"fas fa-tachometer-alt\"></i> Home\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Background</h4></div> <div class=\"card-body\"><nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb bg-primary text-white-all\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb bg-warning text-white-all\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb bg-success text-white-all\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb bg-danger text-white-all\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb bg-secondary text-white-all\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav> <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb bg-dark text-white-all\"><li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"fas fa-tachometer-alt\"></i> Home</a></li> <li class=\"breadcrumb-item\"><a href=\"#\"><i class=\"far fa-file\"></i> Library</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\"><i class=\"fas fa-list\"></i> Data\n                </li></ol></nav></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapBreadcrumb.vue?vue&type=template&id=a4976dd8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapBreadcrumb.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ae744a3"
  
)

/* harmony default export */ var BootstrapBreadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=breadcrumb.js.map