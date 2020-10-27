exports.ids = [15];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/modal.vue?vue&type=template&id=c027187c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapModal')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/modal.vue?vue&type=template&id=c027187c&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapModal.vue + 2 modules
var BootstrapModal = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Modal - Nuxt Stisla",
    link: [{
      rel: "stylesheet",
      href: "/modules/prism/prism.css"
    }],
    script: [{
      src: "/modules/prism/prism.js"
    }, {
      src: "/js/page/bootstrap-modal.js",
      body: true
    }]
  },
  components: {
    BootstrapModal: BootstrapModal["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-modal"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/modal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c027187c",
  "44f048bb"
  
)

/* harmony default export */ var modal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapModal: __webpack_require__(98).default})


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapModal.vue?vue&type=template&id=1d5ba214&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Modal</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Modal</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Modal</h2> <p class=\"section-lead\">\n      Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for\n      lightboxes, user notifications, or completely custom content.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div role=\"document\" class=\"modal-dialog m-0\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Modal Template</h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\"><span aria-hidden=\"true\">×</span></button></div> <div class=\"modal-body\"><p>Modal body text goes here.</p></div> <div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\">\n                Save changes\n              </button> <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-secondary\">\n                Close\n              </button></div></div></div> <div class=\"card card-mt\"><div class=\"card-header\"><h4>Modal Confirm</h4></div> <div class=\"card-body\"><p class=\"mb-2\">\n              You can easily change the default browser confirmation box with\n              a bootstrap modal.\n            </p> <button data-confirm=\"Realy?|Do you want to continue?\" data-confirm-yes=\"alert('Deleted :)');\" class=\"btn btn-danger\">\n              Delete\n            </button></div></div> <div class=\"card\"><div class=\"card-header\"><h4>The Bootstrap Way</h4></div> <div class=\"card-body\"><p class=\"mb-2\">\n              Use the Bootstrap method to create modal. You need to create an\n              HTML structure for modal and the following button will trigger\n              it.\n            </p> <button data-toggle=\"modal\" data-target=\"#exampleModal\" class=\"btn btn-primary\">\n              Aw, yeah!\n            </button></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Modal Demo</h4></div> <div class=\"card-body\"><p class=\"mb-2\">\n              We've created a plugin to easily create a bootstrap modal.\n            </p> <button id=\"modal-1\" class=\"btn btn-primary\">Launch Modal</button></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Modal Center</h4></div> <div class=\"card-body\"><p class=\"mb-2\">You can change the modal position to center.</p> <button id=\"modal-2\" class=\"btn btn-primary\">Launch Modal</button></div></div> <div class=\"card\"><div class=\"card-header\"><h4>The Others</h4></div> <div class=\"card-body\"><p class=\"mb-2\">\n              Check the <code>modal.js</code> code in the\n              <code>dist/js/page</code> folder to get the source code.\n            </p> <div class=\"buttons\"><button id=\"modal-3\" class=\"btn btn-primary\">Buttons</button> <button id=\"modal-4\" class=\"btn btn-primary\">\n                Footer Background\n              </button> <button id=\"modal-5\" class=\"btn btn-primary\">Login</button> <button id=\"modal-6\" class=\"btn btn-primary\">\n                Something in the Footer\n              </button></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapModal.vue?vue&type=template&id=1d5ba214&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapModal.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3dcb5e3d"
  
)

/* harmony default export */ var BootstrapModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal.js.map