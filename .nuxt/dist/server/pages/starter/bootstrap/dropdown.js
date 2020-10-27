exports.ids = [11];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/dropdown.vue?vue&type=template&id=83b1d5ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapDropdown')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/dropdown.vue?vue&type=template&id=83b1d5ca&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapDropdown.vue + 2 modules
var BootstrapDropdown = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Dropdown - Nuxt Stisla"
  },
  components: {
    BootstrapDropdown: BootstrapDropdown["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-dropdown"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/dropdown.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_dropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "83b1d5ca",
  "4f600073"
  
)

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapDropdown: __webpack_require__(88).default})


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapDropdown.vue?vue&type=template&id=d5064b70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Dropdown</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Dropdown</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Dropdown</h2> <p class=\"section-lead\">\n      Toggle contextual overlays for displaying lists of links and more with\n      the Bootstrap dropdown plugin.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Simple</h4></div> <div class=\"card-body\"><div class=\"dropdown d-inline mr-2\"><button type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-primary dropdown-toggle\">\n                Easy Dropdown\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a></div></div> <div class=\"dropdown d-inline mr-2\"><button type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-success dropdown-toggle\">\n                Easy Dropdown\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a></div></div> <div class=\"dropdown d-inline\"><button type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-dark dropdown-toggle\">\n                Easy Dropdown\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Split</h4></div> <div class=\"card-body\"><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-danger\">\n                Split Dropdown\n              </button> <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\"><span class=\"sr-only\">Toggle Dropdown</span></button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Direction</h4></div> <div class=\"card-body\"><div class=\"btn-group dropup\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-dark dropdown-toggle\">\n                Dropup\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div> <div class=\"btn-group dropright\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-dark dropdown-toggle\">\n                Dropright\n              </button> <div class=\"dropdown-menu dropright\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div> <div class=\"btn-group dropleft\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-dark dropdown-toggle\">\n                Dropleft\n              </button> <div class=\"dropdown-menu dropleft\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Icon</h4></div> <div class=\"card-body\"><div class=\"dropdown d-inline\"><button type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-primary dropdown-toggle\">\n                With Icon\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item has-icon\"><i class=\"far fa-heart\"></i> Action</a> <a href=\"#\" class=\"dropdown-item has-icon\"><i class=\"far fa-file\"></i> Another action</a> <a href=\"#\" class=\"dropdown-item has-icon\"><i class=\"far fa-clock\"></i> Something else here</a></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Size</h4></div> <div class=\"card-body\"><div class=\"btn-group mb-2\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-info btn-sm dropdown-toggle\">\n                Small button\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div> <div class=\"btn-group mb-2\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-danger dropdown-toggle\">\n                Normal button\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div> <div class=\"btn-group mb-2\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-warning btn-lg dropdown-toggle\">\n                Large button\n              </button> <div class=\"dropdown-menu\"><a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Title</h4></div> <div class=\"card-body\"><div class=\"btn-group\"><button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-success dropdown-toggle\">\n                Options\n              </button> <div class=\"dropdown-menu\"><div class=\"dropdown-title\">Hi, John!</div> <a href=\"#\" class=\"dropdown-item\">Action</a> <a href=\"#\" class=\"dropdown-item\">Another action</a> <a href=\"#\" class=\"dropdown-item\">Something else here</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">Separated link</a></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapDropdown.vue?vue&type=template&id=d5064b70&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapDropdown.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2328389e"
  
)

/* harmony default export */ var BootstrapDropdown = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dropdown.js.map