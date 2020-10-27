exports.ids = [30];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/gallery.vue?vue&type=template&id=02e67ee7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsGallery')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/gallery.vue?vue&type=template&id=02e67ee7&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsGallery.vue + 2 modules
var ComponentsGallery = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/gallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  head: {
    title: "Components > Gallery - Nuxt Stisla",
    link: [{
      rel: "stylesheet",
      href: "/modules/chocolat/dist/css/chocolat.css"
    }],
    script: [{
      src: "/modules/chocolat/dist/js/jquery.chocolat.min.js"
    }]
  },
  components: {
    ComponentsGallery: ComponentsGallery["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-gallery"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/gallery.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02e67ee7",
  "5371d712"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsGallery: __webpack_require__(73).default})


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsGallery.vue?vue&type=template&id=916d67f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Gallery</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Gallery</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Gallery</h2> <p class=\"section-lead\">Grouping multiple images on one component.</p> <div class=\"row\"><div class=\"col-12 col-sm-12 col-lg-4\"><div class=\"row\"><div class=\"col-12 col-sm-6 col-lg-12\"><div class=\"card\"><div class=\"card-header\"><h4>Gallery</h4></div> <div class=\"card-body\"><div class=\"gallery\"><div data-title=\"Image 1\" class=\"gallery-item\" style=\"background-image: url(/img/news/img01.jpg)\"></div> <div data-title=\"Image 2\" class=\"gallery-item\" style=\"background-image: url(/img/news/img02.jpg)\"></div> <div data-title=\"Image 3\" class=\"gallery-item\" style=\"background-image: url(/img/news/img03.jpg)\"></div> <div data-title=\"Image 4\" class=\"gallery-item\" style=\"background-image: url(/img/news/img04.jpg)\"></div> <div data-title=\"Image 5\" class=\"gallery-item\" style=\"background-image: url(/img/news/img05.jpg)\"></div> <div data-title=\"Image 6\" class=\"gallery-item\" style=\"background-image: url(/img/news/img06.jpg)\"></div> <div data-title=\"Image 7\" class=\"gallery-item\" style=\"background-image: url(/img/news/img07.jpg)\"></div> <div data-title=\"Image 8\" class=\"gallery-item\" style=\"background-image: url(/img/news/img08.jpg)\"></div></div></div></div></div> <div class=\"col-12 col-sm-6 col-lg-12\"><div class=\"card\"><div class=\"card-header\"><h4>Gallery</h4></div> <div class=\"card-body\"><div class=\"gallery\"><div data-title=\"Image 1\" class=\"gallery-item\" style=\"background-image: url(/img/news/img05.jpg)\"></div> <div data-title=\"Image 2\" class=\"gallery-item\" style=\"background-image: url(/img/news/img08.jpg)\"></div> <div data-title=\"Image 3\" class=\"gallery-item\" style=\"background-image: url(/img/news/img04.jpg)\"></div> <div data-title=\"Image 4\" class=\"gallery-item\" style=\"background-image: url(/img/news/img07.jpg)\"></div> <div data-title=\"Image 5\" class=\"gallery-item\" style=\"background-image: url(/img/news/img02.jpg)\"></div> <div data-title=\"Image 6\" class=\"gallery-item\" style=\"background-image: url(/img/news/img05.jpg)\"></div> <div data-title=\"Image 7\" class=\"gallery-item\" style=\"background-image: url(/img/news/img03.jpg)\"></div> <div data-title=\"Image 8\" class=\"gallery-item gallery-more\" style=\"background-image: url(/img/news/img02.jpg)\"><div>+2</div></div> <div data-title=\"Image 9\" class=\"gallery-item gallery-hide\" style=\"background-image: url(/img/news/img07.jpg)\"></div></div></div></div></div></div></div> <div class=\"col-12 col-sm-6 col-lg-4\"><div class=\"card\"><div class=\"card-header\"><h4>Gallery <code>.gallery-md</code></h4></div> <div class=\"card-body\"><div class=\"gallery gallery-md\"><div data-title=\"Image 1\" class=\"gallery-item\" style=\"background-image: url(/img/news/img03.jpg)\"></div> <div data-title=\"Image 2\" class=\"gallery-item\" style=\"background-image: url(/img/news/img06.jpg)\"></div> <div data-title=\"Image 3\" class=\"gallery-item\" style=\"background-image: url(/img/news/img08.jpg)\"></div> <div data-title=\"Image 4\" class=\"gallery-item\" style=\"background-image: url(/img/news/img05.jpg)\"></div> <div data-title=\"Image 5\" class=\"gallery-item\" style=\"background-image: url(/img/news/img07.jpg)\"></div> <div data-title=\"Image 6\" class=\"gallery-item\" style=\"background-image: url(/img/news/img09.jpg)\"></div> <div data-title=\"Image 8\" class=\"gallery-item\" style=\"background-image: url(/img/news/img10.jpg)\"></div> <div data-title=\"Image 9\" class=\"gallery-item\" style=\"background-image: url(/img/news/img09.jpg)\"></div> <div data-title=\"Image 10\" class=\"gallery-item\" style=\"background-image: url(/img/news/img06.jpg)\"></div> <div data-title=\"Image 11\" class=\"gallery-item\" style=\"background-image: url(/img/news/img05.jpg)\"></div> <div data-title=\"Image 12\" class=\"gallery-item gallery-more\" style=\"background-image: url(/img/news/img08.jpg)\"><div>+2</div></div> <div data-title=\"Image 9\" class=\"gallery-item gallery-hide\" style=\"background-image: url(/img/news/img01.jpg)\"></div></div></div></div></div> <div class=\"col-12 col-sm-6 col-lg-4\"><div class=\"card\"><div class=\"card-header\"><h4>Gallery <code>.gallery-fw</code></h4></div> <div class=\"card-body\"><div data-item-height=\"100\" class=\"gallery gallery-fw\"><div data-title=\"Image 1\" class=\"gallery-item\" style=\"background-image: url(/img/news/img09.jpg)\"></div> <div data-title=\"Image 2\" class=\"gallery-item\" style=\"background-image: url(/img/news/img10.jpg)\"></div> <div data-title=\"Image 3\" class=\"gallery-item gallery-more\" style=\"background-image: url(/img/news/img08.jpg)\"><div>+2</div></div> <div data-title=\"Image 4\" class=\"gallery-item gallery-hide\" style=\"background-image: url(/img/news/img01.jpg)\"></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsGallery.vue?vue&type=template&id=916d67f0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsGallery.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43bc1bee"
  
)

/* harmony default export */ var ComponentsGallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gallery.js.map