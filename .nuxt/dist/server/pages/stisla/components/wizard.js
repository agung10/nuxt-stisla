exports.ids = [37];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/wizard.vue?vue&type=template&id=e79f06a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsWizard')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/wizard.vue?vue&type=template&id=e79f06a2&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsWizard.vue + 2 modules
var ComponentsWizard = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/wizard.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var wizardvue_type_script_lang_js_ = ({
  head: {
    title: "Components > Wizard - Nuxt Stisla"
  },
  components: {
    ComponentsWizard: ComponentsWizard["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-wizard"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/wizard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_wizardvue_type_script_lang_js_ = (wizardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/wizard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_wizardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e79f06a2",
  "39cc4156"
  
)

/* harmony default export */ var wizard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsWizard: __webpack_require__(72).default})


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsWizard.vue?vue&type=template&id=708a143e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Wizard</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Wizard</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Wizard</h2> <p class=\"section-lead\">\n      The wizard is a component to simplify a process with a step-by-step\n      method.\n    </p> <div class=\"row\"><div class=\"col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Order Status</h4></div> <div class=\"card-body\"><div class=\"row mt-4\"><div class=\"col-12 col-lg-8 offset-lg-2\"><div class=\"wizard-steps\"><div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-tshirt\"></i></div> <div class=\"wizard-step-label\">Order Placed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-credit-card\"></i></div> <div class=\"wizard-step-label\">Payment Completed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-shipping-fast\"></i></div> <div class=\"wizard-step-label\">Product Shipped</div></div> <div class=\"wizard-step wizard-step-success\"><div class=\"wizard-step-icon\"><i class=\"fas fa-check\"></i></div> <div class=\"wizard-step-label\">Order Completed</div></div></div></div></div> <div class=\"row mt-4\"><div class=\"col-12 col-lg-8 offset-lg-2\"><div class=\"wizard-steps\"><div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-tshirt\"></i></div> <div class=\"wizard-step-label\">Order Placed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-credit-card\"></i></div> <div class=\"wizard-step-label\">Payment Completed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-shipping-fast\"></i></div> <div class=\"wizard-step-label\">Product Shipped</div></div> <div class=\"wizard-step wizard-step-danger\"><div class=\"wizard-step-icon\"><i class=\"fas fa-times\"></i></div> <div class=\"wizard-step-label\">Order Canceled</div></div></div></div></div> <div class=\"row mt-4\"><div class=\"col-12 col-lg-8 offset-lg-2\"><div class=\"wizard-steps\"><div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-tshirt\"></i></div> <div class=\"wizard-step-label\">Order Placed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-credit-card\"></i></div> <div class=\"wizard-step-label\">Payment Completed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-shipping-fast\"></i></div> <div class=\"wizard-step-label\">Product Shipped</div></div> <div class=\"wizard-step wizard-step-warning\"><div class=\"wizard-step-icon\"><i class=\"fas fa-stopwatch\"></i></div> <div class=\"wizard-step-label\">Order Pending</div></div></div></div></div> <div class=\"row mt-4\"><div class=\"col-12 col-lg-8 offset-lg-2\"><div class=\"wizard-steps\"><div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-tshirt\"></i></div> <div class=\"wizard-step-label\">Order Placed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-credit-card\"></i></div> <div class=\"wizard-step-label\">Payment Completed</div></div> <div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"fas fa-shipping-fast\"></i></div> <div class=\"wizard-step-label\">Product Shipped</div></div> <div class=\"wizard-step wizard-step-info\"><div class=\"wizard-step-icon\"><i class=\"fas fa-info\"></i></div> <div class=\"wizard-step-label\">Order Completed</div></div></div></div></div></div></div></div></div> <div class=\"row\"><div class=\"col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Create New App</h4></div> <div class=\"card-body\"><div class=\"row mt-4\"><div class=\"col-12 col-lg-8 offset-lg-2\"><div class=\"wizard-steps\"><div class=\"wizard-step wizard-step-active\"><div class=\"wizard-step-icon\"><i class=\"far fa-user\"></i></div> <div class=\"wizard-step-label\">User Account</div></div> <div class=\"wizard-step\"><div class=\"wizard-step-icon\"><i class=\"fas fa-box-open\"></i></div> <div class=\"wizard-step-label\">Create an App</div></div> <div class=\"wizard-step\"><div class=\"wizard-step-icon\"><i class=\"fas fa-server\"></i></div> <div class=\"wizard-step-label\">Server Information</div></div></div></div></div> <form class=\"wizard-content mt-2\"><div class=\"wizard-pane\"><div class=\"form-group row align-items-center\"><label class=\"col-md-4 text-md-right text-left\">Name</label> <div class=\"col-lg-4 col-md-6\"><input type=\"text\" name=\"name\" class=\"form-control\"></div></div> <div class=\"form-group row align-items-center\"><label class=\"col-md-4 text-md-right text-left\">Email</label> <div class=\"col-lg-4 col-md-6\"><input type=\"email\" name=\"email\" class=\"form-control\"></div></div> <div class=\"form-group row\"><label class=\"col-md-4 text-md-right text-left mt-2\">Address</label> <div class=\"col-lg-4 col-md-6\"><textarea name=\"address\" class=\"form-control\"></textarea></div></div> <div class=\"form-group row\"><label class=\"col-md-4 text-md-right text-left mt-2\">Role</label> <div class=\"col-lg-4 col-md-6\"><div class=\"selectgroup w-100\"><label class=\"selectgroup-item\"><input type=\"radio\" name=\"value\" value=\"developer\" class=\"selectgroup-input\"> <span class=\"selectgroup-button\">Developer</span></label> <label class=\"selectgroup-item\"><input type=\"radio\" name=\"value\" value=\"ceo\" class=\"selectgroup-input\"> <span class=\"selectgroup-button\">CEO</span></label></div></div></div> <div class=\"form-group row\"><div class=\"col-md-4\"></div> <div class=\"col-lg-4 col-md-6\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" name=\"agree\" id=\"agree\" class=\"custom-control-input\"> <label for=\"agree\" class=\"custom-control-label\">I agree with the terms and conditions</label></div></div></div> <div class=\"form-group row\"><div class=\"col-md-4\"></div> <div class=\"col-lg-4 col-md-6 text-right\"><a href=\"#\" class=\"btn btn-icon icon-right btn-primary\">Next <i class=\"fas fa-arrow-right\"></i></a></div></div></div></form></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsWizard.vue?vue&type=template&id=708a143e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsWizard.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bf262202"
  
)

/* harmony default export */ var ComponentsWizard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=wizard.js.map