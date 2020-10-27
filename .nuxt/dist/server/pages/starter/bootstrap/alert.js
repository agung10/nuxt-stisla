exports.ids = [4];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/alert.vue?vue&type=template&id=71fd5d68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapAlert')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/alert.vue?vue&type=template&id=71fd5d68&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapAlert.vue + 2 modules
var BootstrapAlert = __webpack_require__(86);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Alert - Nuxt Stisla"
  },
  components: {
    BootstrapAlert: BootstrapAlert["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-alert"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/alert.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "71fd5d68",
  "6c70e7ea"
  
)

/* harmony default export */ var bootstrap_alert = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapAlert: __webpack_require__(86).default})


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapAlert.vue?vue&type=template&id=2c946762&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Alert</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Alert</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Alerts</h2> <p class=\"section-lead\">\n      Provide contextual feedback messages for typical user actions with the\n      handful of available and flexible alert messages.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Default</h4></div> <div class=\"card-body\"><div class=\"alert alert-primary\">This is a primary alert.</div> <div class=\"alert alert-secondary\">\n              This is a secondary alert.\n            </div> <div class=\"alert alert-success\">This is a success alert.</div> <div class=\"alert alert-danger\">This is a danger alert.</div> <div class=\"alert alert-warning\">This is a warning alert.</div> <div class=\"alert alert-info\">This is a info alert.</div> <div class=\"alert alert-light\">This is a light alert.</div> <div class=\"alert alert-dark\">This is a dark alert.</div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Icon</h4></div> <div class=\"card-body\"><div class=\"alert alert-primary alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Primary</div>\n                This is a primary alert.\n              </div></div> <div class=\"alert alert-secondary alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Secondary</div>\n                This is a secondary alert.\n              </div></div> <div class=\"alert alert-success alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Success</div>\n                This is a success alert.\n              </div></div> <div class=\"alert alert-danger alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Danger</div>\n                This is a danger alert.\n              </div></div> <div class=\"alert alert-warning alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Warning</div>\n                This is a warning alert.\n              </div></div> <div class=\"alert alert-info alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Info</div>\n                This is a info alert.\n              </div></div> <div class=\"alert alert-light alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Light</div>\n                This is a light alert.\n              </div></div> <div class=\"alert alert-dark alert-has-icon\"><div class=\"alert-icon\"><i class=\"far fa-lightbulb\"></i></div> <div class=\"alert-body\"><div class=\"alert-title\">Dark</div>\n                This is a dark alert.\n              </div></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Title</h4></div> <div class=\"card-body\"><div class=\"alert alert-primary\"><div class=\"alert-title\">Primary</div>\n              This is a primary alert.\n            </div> <div class=\"alert alert-secondary\"><div class=\"alert-title\">Secondary</div>\n              This is a secondary alert.\n            </div> <div class=\"alert alert-success\"><div class=\"alert-title\">Success</div>\n              This is a success alert.\n            </div> <div class=\"alert alert-danger\"><div class=\"alert-title\">Danger</div>\n              This is a danger alert.\n            </div> <div class=\"alert alert-warning\"><div class=\"alert-title\">Warning</div>\n              This is a warning alert.\n            </div> <div class=\"alert alert-info\"><div class=\"alert-title\">Info</div>\n              This is a info alert.\n            </div> <div class=\"alert alert-light\"><div class=\"alert-title\">Light</div>\n              This is a light alert.\n            </div> <div class=\"alert alert-dark\"><div class=\"alert-title\">Dark</div>\n              This is a dark alert.\n            </div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Dismissable</h4></div> <div class=\"card-body\"><div class=\"alert alert-primary alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a primary alert.\n              </div></div> <div class=\"alert alert-secondary alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a secondary alert.\n              </div></div> <div class=\"alert alert-success alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a success alert.\n              </div></div> <div class=\"alert alert-danger alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a danger alert.\n              </div></div> <div class=\"alert alert-warning alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a warning alert.\n              </div></div> <div class=\"alert alert-info alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a info alert.\n              </div></div> <div class=\"alert alert-light alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a light alert.\n              </div></div> <div class=\"alert alert-dark alert-dismissible show fade\"><div class=\"alert-body\"><button data-dismiss=\"alert\" class=\"close\"><span>×</span></button>\n                This is a dark alert.\n              </div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapAlert.vue?vue&type=template&id=2c946762&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapAlert.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "654bfd6c"
  
)

/* harmony default export */ var BootstrapAlert = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=alert.js.map