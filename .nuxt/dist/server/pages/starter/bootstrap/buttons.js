exports.ids = [7];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/buttons.vue?vue&type=template&id=53004f43&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapButtons')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/buttons.vue?vue&type=template&id=53004f43&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapButtons.vue + 2 modules
var BootstrapButtons = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/buttons.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var buttonsvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Buttons - Nuxt Stisla"
  },
  components: {
    BootstrapButtons: BootstrapButtons["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-buttons"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/buttons.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_buttonsvue_type_script_lang_js_ = (buttonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/buttons.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_buttonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "53004f43",
  "2381de0f"
  
)

/* harmony default export */ var buttons = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapButtons: __webpack_require__(77).default})


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapButtons.vue?vue&type=template&id=764c05b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Buttons</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Button</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Buttons</h2> <p class=\"section-lead\">\n      Use Bootstrap’s custom button styles for actions in forms, dialogs, and\n      more with support for multiple sizes, states, and more.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Basic</h4></div> <div class=\"card-body\"><p class=\"text-muted\">\n              Use the <code>.btn .btn-{color}</code> classes.\n            </p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-primary\">Primary</a> <a href=\"#\" class=\"btn btn-secondary\">Secondary</a> <a href=\"#\" class=\"btn btn-info\">Info</a> <a href=\"#\" class=\"btn btn-warning\">Warning</a> <a href=\"#\" class=\"btn btn-danger\">Danger</a> <a href=\"#\" class=\"btn btn-success\">Success</a> <a href=\"#\" class=\"btn btn-light\">Light</a> <a href=\"#\" class=\"btn btn-dark\">Dark</a> <a href=\"#\" class=\"btn\">Link</a></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Buttons <code>.btn-outline</code></h4></div> <div class=\"card-body\"><p class=\"text-muted\">\n              Use the <code>.btn .btn-outline-{color}</code> classes.\n            </p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-outline-primary\">Primary</a> <a href=\"#\" class=\"btn btn-outline-secondary\">Secondary</a> <a href=\"#\" class=\"btn btn-outline-info\">Info</a> <a href=\"#\" class=\"btn btn-outline-warning\">Warning</a> <a href=\"#\" class=\"btn btn-outline-danger\">Danger</a> <a href=\"#\" class=\"btn btn-outline-success\">Success</a> <a href=\"#\" class=\"btn btn-outline-light\">Light</a> <a href=\"#\" class=\"btn btn-outline-dark\">Dark</a></div></div></div></div></div> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Button Sizes</h4></div> <div class=\"card-body\"><p class=\"text-muted\">\n              Use the <code>.btn-lg</code> or <code>.btn-sm</code> classes.\n            </p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-sm btn-warning\">Small</a> <a href=\"#\" class=\"btn btn-danger\">Normal</a> <a href=\"#\" class=\"btn btn-lg btn-dark\">Large</a></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Button States</h4></div> <div class=\"card-body\"><p class=\"text-muted\">\n              Use the <code>.disabled</code> or\n              <code>.btn-progress</code> classes.\n            </p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-primary\">Normal</a> <a href=\"#\" class=\"btn disabled btn-primary\">Disabled</a> <a href=\"#\" class=\"btn disabled btn-primary btn-progress\">Progress</a></div></div></div></div></div> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Icon Button</h4></div> <div class=\"card-body\"><p class=\"text-muted\">\n              Use the <code>.btn-icon</code> and\n              <code>.icon-left</code> classes.\n            </p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-icon icon-left\"><i class=\"far fa-user\"></i> Default</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-primary\"><i class=\"far fa-edit\"></i> Primary</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-secondary\"><i class=\"far fa-user\"></i> Secondary</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-info\"><i class=\"fas fa-info-circle\"></i> Info</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-warning\"><i class=\"fas fa-exclamation-triangle\"></i> Warning</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-danger\"><i class=\"fas fa-times\"></i> Danger</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-success\"><i class=\"fas fa-check\"></i> Success</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-light\"><i class=\"fas fa-star\"></i> Light</a> <a href=\"#\" class=\"btn btn-icon icon-left btn-dark\"><i class=\"far fa-file\"></i> Dark</a></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Only Icon Button</h4></div> <div class=\"card-body\"><p class=\"text-muted\">Use the <code>.btn-icon</code> class.</p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-icon btn-primary\"><i class=\"far fa-edit\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-secondary\"><i class=\"far fa-user\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-info\"><i class=\"fas fa-info-circle\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-warning\"><i class=\"fas fa-exclamation-triangle\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-danger\"><i class=\"fas fa-times\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-success\"><i class=\"fas fa-check\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-light\"><i class=\"fas fa-star\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-dark\"><i class=\"far fa-file\"></i></a></div> <p class=\"text-muted mt-2\">Sizes.</p> <div class=\"buttons\"><a href=\"#\" class=\"btn btn-icon btn-sm btn-warning\"><i class=\"fas fa-exclamation-triangle\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-danger\"><i class=\"fas fa-times\"></i></a> <a href=\"#\" class=\"btn btn-icon btn-lg btn-success\"><i class=\"fas fa-check\"></i></a></div></div></div></div></div> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Button Group</h4></div> <div class=\"card-body\"><div role=\"group\" aria-label=\"Basic example\" class=\"btn-group mb-3\"><button type=\"button\" class=\"btn btn-secondary\">Left</button> <button type=\"button\" class=\"btn btn-secondary\">Middle</button> <button type=\"button\" class=\"btn btn-secondary\">Right</button></div> <div role=\"group\" aria-label=\"Basic example\" class=\"btn-group mb-3\"><button type=\"button\" class=\"btn btn-danger\">Left</button> <button type=\"button\" class=\"btn btn-warning\">Middle</button> <button type=\"button\" class=\"btn btn-success\">Right</button></div> <div role=\"group\" aria-label=\"Basic example\" class=\"btn-group mb-3 btn-group-sm\"><button type=\"button\" class=\"btn btn-primary\">Left</button> <button type=\"button\" class=\"btn btn-primary\">Middle</button> <button type=\"button\" class=\"btn btn-primary\">Right</button></div> <div class=\"clearfix\"></div> <div role=\"group\" aria-label=\"Basic example\" class=\"btn-group btn-group-lg\"><button type=\"button\" class=\"btn btn-danger\">Left</button> <button type=\"button\" class=\"btn btn-danger\">Middle</button> <button type=\"button\" class=\"btn btn-danger\">Right</button></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Vertical Variation</h4></div> <div class=\"card-body\"><div role=\"group\" aria-label=\"Basic example\" class=\"btn-group-vertical\"><button type=\"button\" class=\"btn btn-secondary\">Left</button> <button type=\"button\" class=\"btn btn-secondary\">Middle</button> <button type=\"button\" class=\"btn btn-secondary\">Right</button> <button type=\"button\" class=\"btn btn-secondary\">Justify</button></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapButtons.vue?vue&type=template&id=764c05b3&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapButtons.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51ed9b11"
  
)

/* harmony default export */ var BootstrapButtons = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=buttons.js.map