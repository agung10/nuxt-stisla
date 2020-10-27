exports.ids = [14];
exports.modules = {

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/mediaObject.vue?vue&type=template&id=0e23172a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapMediaObject')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/mediaObject.vue?vue&type=template&id=0e23172a&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapMediaObject.vue + 2 modules
var BootstrapMediaObject = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/mediaObject.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var mediaObjectvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Media Object - Nuxt Stisla"
  },
  components: {
    BootstrapMediaObject: BootstrapMediaObject["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-mediaObject"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/mediaObject.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_mediaObjectvue_type_script_lang_js_ = (mediaObjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/mediaObject.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_mediaObjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e23172a",
  "5bb246d1"
  
)

/* harmony default export */ var mediaObject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapMediaObject: __webpack_require__(96).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapMediaObject.vue?vue&type=template&id=4a35ccf0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Media Object</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Media Object</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Media Object</h2> <p class=\"section-lead\">\n      Examples for Bootstrap’s media object to construct highly repetitive\n      components like blog comments, tweets, and the like.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Simple</h4></div> <div class=\"card-body\"><div class=\"media\"><img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\" class=\"mr-3\"> <div class=\"media-body\"><h5 class=\"mt-0\">Media heading</h5> <p class=\"mb-0\">\n                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus\n                  scelerisque ante sollicitudin. Cras purus odio, vestibulum\n                  in vulputate at, tempus viverra turpis. Fusce condimentum\n                  nunc ac nisi vulputate fringilla. Donec lacinia congue felis\n                  in faucibus.\n                </p></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>List</h4></div> <div class=\"card-body\"><ul class=\"list-unstyled\"><li class=\"media\"><img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\" class=\"mr-3\"> <div class=\"media-body\"><h5 class=\"mt-0 mb-1\">List-based media object</h5> <p>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                    metus scelerisque ante sollicitudin. Cras purus oringilla.\n                    Donec lacinia congue felis in faucibus.\n                  </p></div></li> <li class=\"media my-4\"><img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\" class=\"mr-3\"> <div class=\"media-body\"><h5 class=\"mt-0 mb-1\">List-based media object</h5> <p>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                    metus scelerisque ante sollicitudin. Cras purus oringilla.\n                    Donec lacinia congue felis in faucibus.\n                  </p></div></li> <li class=\"media\"><img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\" class=\"mr-3\"> <div class=\"media-body\"><h5 class=\"mt-0 mb-1\">List-based media object</h5> <p class=\"mb-0\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                    metus scelerisque ante sollicitudin. Cras purus oringilla.\n                    Donec lacinia congue felis in faucibus.\n                  </p></div></li></ul></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Nesting</h4></div> <div class=\"card-body\"><div class=\"media\"><img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\" class=\"mr-3\"> <div class=\"media-body\"><h5 class=\"mt-0\">Media heading</h5> <p>\n                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus\n                  scelerisque ante sollicitudin. Cras purus odio, vestibulum\n                  in vulputate at, tempus viverra turpis. Fusce condimentum\n                  nunc ac nisi vulputate fringilla. Donec lacinia congue felis\n                  in faucibus.\n                </p> <div class=\"media mt-3\"><a href=\"#\" class=\"pr-3\"><img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\"></a> <div class=\"media-body\"><h5 class=\"mt-0\">Media heading</h5> <p class=\"mb-0\">\n                      Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                      metus scelerisque ante sollicitudin. Cras purus odio,\n                      vestibulum in vulputate at, tempus viverra turpis. Fusce\n                      condimentum nunc ac nisi vulputate fringilla. Donec\n                      lacinia congue felis in faucibus.\n                    </p></div></div></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Order</h4></div> <div class=\"card-body\"><div class=\"media\"><div class=\"media-body\"><h5 class=\"mt-0 mb-1\">Media object</h5> <p>\n                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus\n                  scelerisque ante sollicitudin. Cras purus odio, vestibulum\n                  in vulputate at, tempus viverra turpis. Fusce condimentum\n                  nunc ac nisi vulputate fringilla. Donec lacinia congue felis\n                  in faucibus.\n                </p></div> <img src=\"/img/example-image-50.jpg\" alt=\"Generic placeholder image\" class=\"ml-3\"></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapMediaObject.vue?vue&type=template&id=4a35ccf0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapMediaObject.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77d89a5a"
  
)

/* harmony default export */ var BootstrapMediaObject = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mediaObject.js.map