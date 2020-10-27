exports.ids = [10];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/collapse.vue?vue&type=template&id=09a8f992&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapCollapse')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/collapse.vue?vue&type=template&id=09a8f992&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapCollapse.vue + 2 modules
var BootstrapCollapse = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/collapse.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var collapsevue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Collapse - Nuxt Stisla"
  },
  components: {
    BootstrapCollapse: BootstrapCollapse["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-collapse"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/collapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_collapsevue_type_script_lang_js_ = (collapsevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/collapse.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_collapsevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09a8f992",
  "5102b20f"
  
)

/* harmony default export */ var collapse = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapCollapse: __webpack_require__(85).default})


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapCollapse.vue?vue&type=template&id=7ab800f1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Collapse</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Collapse</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Collapse</h2> <p class=\"section-lead\">\n      Toggle the visibility of content across your project with a few classes\n      and our JavaScript plugins.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Simple</h4></div> <div class=\"card-body\"><p><a data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\" class=\"btn btn-primary\">\n                Link with href\n              </a> <button type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\" class=\"btn btn-primary\">\n                Button with data-target\n              </button></p> <div id=\"collapseExample\" class=\"collapse\"><p>\n                Anim pariatur cliche reprehenderit, enim eiusmod high life\n                accusamus terry richardson ad squid. Nihil anim keffiyeh\n                helvetica, craft beer labore wes anderson cred nesciunt\n                sapiente ea proident.\n              </p></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Multiple Targets</h4></div> <div class=\"card-body\"><p class=\"buttons\"><a data-toggle=\"collapse\" href=\"#multiCollapseExample1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1\" class=\"btn btn-primary\">Toggle first element</a> <button type=\"button\" data-toggle=\"collapse\" data-target=\"#multiCollapseExample2\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample2\" class=\"btn btn-primary\">\n                Toggle second element\n              </button> <button type=\"button\" data-toggle=\"collapse\" data-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\" class=\"btn btn-primary\">\n                Toggle both elements\n              </button></p> <div class=\"row\"><div class=\"col\"><div id=\"multiCollapseExample1\" class=\"collapse multi-collapse\"><p>\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life\n                    accusamus terry richardson ad squid. Nihil anim keffiyeh\n                    helvetica, craft beer labore wes anderson cred nesciunt\n                    sapiente ea proident.\n                  </p></div></div> <div class=\"col\"><div id=\"multiCollapseExample2\" class=\"collapse multi-collapse\"><p>\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life\n                    accusamus terry richardson ad squid. Nihil anim keffiyeh\n                    helvetica, craft beer labore wes anderson cred nesciunt\n                    sapiente ea proident.\n                  </p></div></div></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Accordion</h4></div> <div class=\"card-body\"><div id=\"accordion\"><div class=\"accordion\"><div role=\"button\" data-toggle=\"collapse\" data-target=\"#panel-body-1\" aria-expanded=\"true\" class=\"accordion-header\"><h4>Panel 1</h4></div> <div id=\"panel-body-1\" data-parent=\"#accordion\" class=\"accordion-body collapse show\"><p class=\"mb-0\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit\n                    esse cillum dolore eu fugiat nulla pariatur. Excepteur\n                    sint occaecat cupidatat non proident, sunt in culpa qui\n                    officia deserunt mollit anim id est laborum.\n                  </p></div></div> <div class=\"accordion\"><div role=\"button\" data-toggle=\"collapse\" data-target=\"#panel-body-2\" class=\"accordion-header\"><h4>Panel 2</h4></div> <div id=\"panel-body-2\" data-parent=\"#accordion\" class=\"accordion-body collapse\"><p class=\"mb-0\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit\n                    esse cillum dolore eu fugiat nulla pariatur. Excepteur\n                    sint occaecat cupidatat non proident, sunt in culpa qui\n                    officia deserunt mollit anim id est laborum.\n                  </p></div></div> <div class=\"accordion\"><div role=\"button\" data-toggle=\"collapse\" data-target=\"#panel-body-3\" class=\"accordion-header\"><h4>Panel 3</h4></div> <div id=\"panel-body-3\" data-parent=\"#accordion\" class=\"accordion-body collapse\"><p class=\"mb-0\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit\n                    esse cillum dolore eu fugiat nulla pariatur. Excepteur\n                    sint occaecat cupidatat non proident, sunt in culpa qui\n                    officia deserunt mollit anim id est laborum.\n                  </p></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapCollapse.vue?vue&type=template&id=7ab800f1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapCollapse.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1fe2d566"
  
)

/* harmony default export */ var BootstrapCollapse = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=collapse.js.map