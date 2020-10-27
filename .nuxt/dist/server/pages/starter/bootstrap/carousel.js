exports.ids = [9];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/carousel.vue?vue&type=template&id=3acfd50a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapCarousel')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/carousel.vue?vue&type=template&id=3acfd50a&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapCarousel.vue + 2 modules
var BootstrapCarousel = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var carouselvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Carousel - Nuxt Stisla"
  },
  components: {
    BootstrapCarousel: BootstrapCarousel["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-carousel"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_carouselvue_type_script_lang_js_ = (carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/carousel.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3acfd50a",
  "47cfde42"
  
)

/* harmony default export */ var carousel = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapCarousel: __webpack_require__(83).default})


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapCarousel.vue?vue&type=template&id=700238e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Carousel</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Carousel</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Carousel</h2> <p class=\"section-lead\">\n      A slideshow component for cycling through elements—images or slides of\n      text—like a carousel.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Simple</h4></div> <div class=\"card-body\"><div id=\"carouselExampleIndicators\" data-ride=\"carousel\" class=\"carousel slide\"><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/img/news/img01.jpg\" alt=\"First slide\" class=\"d-block w-100\"></div> <div class=\"carousel-item\"><img src=\"/img/news/img07.jpg\" alt=\"Second slide\" class=\"d-block w-100\"></div> <div class=\"carousel-item\"><img src=\"/img/news/img08.jpg\" alt=\"Third slide\" class=\"d-block w-100\"></div></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Navigation &amp; Indicator</h4></div> <div class=\"card-body\"><div id=\"carouselExampleIndicators3\" data-ride=\"carousel\" class=\"carousel slide\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"0\" class=\"active\"></li> <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"1\"></li> <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"2\"></li></ol> <div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/img/news/img01.jpg\" alt=\"First slide\" class=\"d-block w-100\"></div> <div class=\"carousel-item\"><img src=\"/img/news/img07.jpg\" alt=\"Second slide\" class=\"d-block w-100\"></div> <div class=\"carousel-item\"><img src=\"/img/news/img08.jpg\" alt=\"Third slide\" class=\"d-block w-100\"></div></div> <a href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"prev\" class=\"carousel-control-prev\"><span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span> <span class=\"sr-only\">Previous</span></a> <a href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"next\" class=\"carousel-control-next\"><span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span> <span class=\"sr-only\">Next</span></a></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Caption</h4></div> <div class=\"card-body\"><div id=\"carouselExampleIndicators2\" data-ride=\"carousel\" class=\"carousel slide\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"0\" class=\"active\"></li> <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"1\"></li> <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"2\"></li></ol> <div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/img/news/img01.jpg\" alt=\"First slide\" class=\"d-block w-100\"> <div class=\"carousel-caption d-none d-md-block\"><h5>Heading</h5> <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing\n                      elit, sed do eiusmod tempor incididunt ut labore et\n                      dolore magna aliqua.\n                    </p></div></div> <div class=\"carousel-item\"><img src=\"/img/news/img07.jpg\" alt=\"Second slide\" class=\"d-block w-100\"> <div class=\"carousel-caption d-none d-md-block\"><h5>Heading</h5> <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing\n                      elit, sed do eiusmod tempor incididunt ut labore et\n                      dolore magna aliqua.\n                    </p></div></div> <div class=\"carousel-item\"><img src=\"/img/news/img08.jpg\" alt=\"Third slide\" class=\"d-block w-100\"> <div class=\"carousel-caption d-none d-md-block\"><h5>Heading</h5> <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing\n                      elit, sed do eiusmod tempor incididunt ut labore et\n                      dolore magna aliqua.\n                    </p></div></div></div> <a href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"prev\" class=\"carousel-control-prev\"><span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span> <span class=\"sr-only\">Previous</span></a> <a href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"next\" class=\"carousel-control-next\"><span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span> <span class=\"sr-only\">Next</span></a></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Crossfade</h4></div> <div class=\"card-body\"><div id=\"carouselExampleFade\" data-ride=\"carousel\" class=\"carousel slide carousel-fade\"><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/img/news/img01.jpg\" alt=\"First slide\" class=\"d-block w-100\"></div> <div class=\"carousel-item\"><img src=\"/img/news/img07.jpg\" alt=\"Second slide\" class=\"d-block w-100\"></div> <div class=\"carousel-item\"><img src=\"/img/news/img08.jpg\" alt=\"Third slide\" class=\"d-block w-100\"></div></div> <a href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\" class=\"carousel-control-prev\"><span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span> <span class=\"sr-only\">Previous</span></a> <a href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\" class=\"carousel-control-next\"><span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span> <span class=\"sr-only\">Next</span></a></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapCarousel.vue?vue&type=template&id=700238e6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapCarousel.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32487d00"
  
)

/* harmony default export */ var BootstrapCarousel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=carousel.js.map