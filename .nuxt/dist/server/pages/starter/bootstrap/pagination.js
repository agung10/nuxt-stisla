exports.ids = [18];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/pagination.vue?vue&type=template&id=59578a78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapPagination')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/pagination.vue?vue&type=template&id=59578a78&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapPagination.vue + 2 modules
var BootstrapPagination = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var paginationvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Pagination - Nuxt Stisla"
  },
  components: {
    BootstrapPagination: BootstrapPagination["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-pagination"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_paginationvue_type_script_lang_js_ = (paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/pagination.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59578a78",
  "049d9cfc"
  
)

/* harmony default export */ var pagination = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapPagination: __webpack_require__(68).default})


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapPagination.vue?vue&type=template&id=c858c6c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Pagination</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Pagination</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Pagination</h2> <p class=\"section-lead\">\n      Examples for showing pagination to indicate a series of related content\n      exists across multiple pages.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Pagination</h4></div> <div class=\"card-body\"><nav aria-label=\"Page navigation example\"><ul class=\"pagination\"><li class=\"page-item\"><a href=\"#\" class=\"page-link\">Previous</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">Next</a></li></ul></nav></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Disabled &amp; Active State</h4></div> <div class=\"card-body\"><nav aria-label=\"...\"><ul class=\"pagination\"><li class=\"page-item disabled\"><a href=\"#\" tabindex=\"-1\" class=\"page-link\">Previous</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li> <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">2 <span class=\"sr-only\">(current)</span></a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">Next</a></li></ul></nav></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Icon</h4></div> <div class=\"card-body\"><div class=\"buttons\"><nav aria-label=\"Page navigation example\"><ul class=\"pagination\"><li class=\"page-item\"><a href=\"#\" aria-label=\"Previous\" class=\"page-link\"><span aria-hidden=\"true\">«</span> <span class=\"sr-only\">Previous</span></a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li> <li class=\"page-item\"><a href=\"#\" aria-label=\"Next\" class=\"page-link\"><span aria-hidden=\"true\">»</span> <span class=\"sr-only\">Next</span></a></li></ul></nav></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Sizing</h4></div> <div class=\"card-body\"><nav aria-label=\"...\"><ul class=\"pagination pagination-sm\"><li class=\"page-item disabled\"><a href=\"#\" tabindex=\"-1\" class=\"page-link\">1</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li></ul></nav> <nav aria-label=\"...\"><ul class=\"pagination pagination-lg\"><li class=\"page-item disabled\"><a href=\"#\" tabindex=\"-1\" class=\"page-link\">1</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li></ul></nav></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapPagination.vue?vue&type=template&id=c858c6c8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapPagination.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "103da8ba"
  
)

/* harmony default export */ var BootstrapPagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pagination.js.map