exports.ids = [27];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/avatar.vue?vue&type=template&id=e756d57e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsAvatar')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/avatar.vue?vue&type=template&id=e756d57e&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsAvatar.vue + 2 modules
var ComponentsAvatar = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var avatarvue_type_script_lang_js_ = ({
  head: {
    title: "Components > Avatar - Nuxt Stisla"
  },
  components: {
    ComponentsAvatar: ComponentsAvatar["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-avatar"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_avatarvue_type_script_lang_js_ = (avatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/avatar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_avatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e756d57e",
  "6ed21644"
  
)

/* harmony default export */ var avatar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsAvatar: __webpack_require__(82).default})


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsAvatar.vue?vue&type=template&id=eb3f7272&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Avatar</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Avatar</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Avatar</h2> <p class=\"section-lead\">\n      Avatars are user profile pictures. Thanks to\n      <a href=\"https://picturepan2.github.io/spectre/components/avatars.html\">Spectre.css</a>.\n    </p> <div class=\"row\"><div class=\"col-md-6 col-sm-6 col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Avatar</h4></div> <div class=\"card-body\"><figure class=\"avatar mr-2 avatar-xl\"><img src=\"/img/avatar/avatar-1.png\" alt=\"...\"></figure> <figure class=\"avatar mr-2 avatar-lg\"><img src=\"/img/avatar/avatar-2.png\" alt=\"...\"></figure> <figure class=\"avatar mr-2\"><img src=\"/img/avatar/avatar-5.png\" alt=\"...\"></figure> <figure class=\"avatar mr-2 avatar-sm\"><img src=\"/img/avatar/avatar-3.png\" alt=\"...\"></figure> <figure class=\"avatar mr-2 avatar-xs\"><img src=\"/img/avatar/avatar-4.png\" alt=\"...\"></figure></div></div></div> <div class=\"col-md-6 col-sm-6 col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Avatar Icon</h4></div> <div class=\"card-body\"><figure class=\"avatar mr-2 avatar-xl\"><img src=\"/img/avatar/avatar-1.png\" alt=\"...\"> <img src=\"/img/avatar/avatar-5.png\" alt=\"...\" class=\"avatar-icon\"></figure> <figure class=\"avatar mr-2 avatar-lg\"><img src=\"/img/avatar/avatar-2.png\" alt=\"...\"> <img src=\"/img/avatar/avatar-4.png\" alt=\"...\" class=\"avatar-icon\"></figure> <figure class=\"avatar mr-2\"><img src=\"/img/avatar/avatar-3.png\" alt=\"...\"> <img src=\"/img/avatar/avatar-3.png\" alt=\"...\" class=\"avatar-icon\"></figure> <figure class=\"avatar mr-2 avatar-sm\"><img src=\"/img/avatar/avatar-4.png\" alt=\"...\"> <img src=\"/img/avatar/avatar-2.png\" alt=\"...\" class=\"avatar-icon\"></figure> <figure class=\"avatar mr-2 avatar-xs\"><img src=\"/img/avatar/avatar-5.png\" alt=\"...\"> <img src=\"/img/avatar/avatar-1.png\" alt=\"...\" class=\"avatar-icon\"></figure></div></div></div> <div class=\"col-md-6 col-sm-6 col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Avatar Presence</h4></div> <div class=\"card-body\"><figure class=\"avatar mr-2 avatar-xl\"><img src=\"/img/avatar/avatar-1.png\" alt=\"...\"> <i class=\"avatar-presence online\"></i></figure> <figure class=\"avatar mr-2 avatar-lg\"><img src=\"/img/avatar/avatar-2.png\" alt=\"...\"> <i class=\"avatar-presence busy\"></i></figure> <figure class=\"avatar mr-2\"><img src=\"/img/avatar/avatar-3.png\" alt=\"...\"> <i class=\"avatar-presence away\"></i></figure> <figure class=\"avatar mr-2 avatar-sm\"><img src=\"/img/avatar/avatar-4.png\" alt=\"...\"> <i class=\"avatar-presence offline\"></i></figure> <figure class=\"avatar mr-2 avatar-xs\"><img src=\"/img/avatar/avatar-5.png\" alt=\"...\"> <i class=\"avatar-presence online\"></i></figure></div></div></div> <div class=\"col-md-6 col-sm-6 col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Avatar Initial</h4></div> <div class=\"card-body\"><figure data-initial=\"UM\" class=\"avatar mr-2 avatar-xl\"></figure> <figure data-initial=\"UM\" class=\"avatar mr-2 avatar-lg bg-danger text-white\"></figure> <figure data-initial=\"UM\" class=\"avatar mr-2 bg-warning text-white\"></figure> <figure data-initial=\"UM\" class=\"avatar mr-2 avatar-sm bg-success text-white\"></figure> <figure data-initial=\"UM\" class=\"avatar mr-2 avatar-xs bg-info text-white\"></figure></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsAvatar.vue?vue&type=template&id=eb3f7272&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsAvatar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "551a7826"
  
)

/* harmony default export */ var ComponentsAvatar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=avatar.js.map