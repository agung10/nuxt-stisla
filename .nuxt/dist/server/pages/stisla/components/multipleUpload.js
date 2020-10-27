exports.ids = [32];
exports.modules = {

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/multipleUpload.vue?vue&type=template&id=3a65e468&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsMultipleUpload')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/multipleUpload.vue?vue&type=template&id=3a65e468&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsMultipleUpload.vue + 2 modules
var ComponentsMultipleUpload = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/multipleUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var multipleUploadvue_type_script_lang_js_ = ({
  head: {
    title: "Components > Multiple Upload - Nuxt Stisla",
    link: [{
      rel: "stylesheet",
      href: "/modules/dropzonejs/dropzone.css"
    }],
    script: [{
      src: "/modules/dropzonejs/min/dropzone.min.js"
    }, {
      src: "/js/page/components-multiple-upload.js",
      body: true
    }]
  },
  components: {
    ComponentsMultipleUpload: ComponentsMultipleUpload["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-multipleUpload"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/multipleUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_multipleUploadvue_type_script_lang_js_ = (multipleUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/multipleUpload.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_multipleUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a65e468",
  "71270bc8"
  
)

/* harmony default export */ var multipleUpload = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsMultipleUpload: __webpack_require__(67).default})


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsMultipleUpload.vue?vue&type=template&id=60b9b860&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Multiple Upload</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Multiple Upload</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Multiple Upload</h2> <p class=\"section-lead\">\n      We use 'Dropzone.js' made by @Dropzone. You can check the full\n      documentation <a href=\"http://www.dropzonejs.com/\">here</a>.\n    </p> <div class=\"row\"><div class=\"col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Multiple Upload</h4></div> <div class=\"card-body\"><form action=\"#\" id=\"mydropzone\" class=\"dropzone\"><div class=\"fallback\"><input name=\"file\" type=\"file\" multiple=\"multiple\"></div></form></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsMultipleUpload.vue?vue&type=template&id=60b9b860&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsMultipleUpload.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a3852276"
  
)

/* harmony default export */ var ComponentsMultipleUpload = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=multipleUpload.js.map