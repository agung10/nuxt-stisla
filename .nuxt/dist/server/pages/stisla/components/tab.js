exports.ids = [34];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/tab.vue?vue&type=template&id=55a6f101&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsTab')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/tab.vue?vue&type=template&id=55a6f101&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsTab.vue + 2 modules
var ComponentsTab = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var tabvue_type_script_lang_js_ = ({
  head: {
    title: "Components > Tab - Nuxt Stisla"
  },
  components: {
    ComponentsTab: ComponentsTab["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-tab"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tabvue_type_script_lang_js_ = (tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/tab.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55a6f101",
  "b18b5c8c"
  
)

/* harmony default export */ var tab = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsTab: __webpack_require__(94).default})


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsTab.vue?vue&type=template&id=44f1861e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Tab</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Tab</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Tabs</h2> <p class=\"section-lead\">\n      The tab component for dividing parts of content.\n    </p> <div class=\"row\"><div class=\"col-12 col-sm-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Default Tab</h4></div> <div class=\"card-body\"><ul id=\"myTab\" role=\"tablist\" class=\"nav nav-tabs\"><li class=\"nav-item\"><a id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" class=\"nav-link active\">Home</a></li> <li class=\"nav-item\"><a id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\" class=\"nav-link\">Profile</a></li> <li class=\"nav-item\"><a id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\" class=\"nav-link\">Contact</a></li></ul> <div id=\"myTabContent\" class=\"tab-content\"><div id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\" class=\"tab-pane fade show active\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                irure dolor in reprehenderit in voluptate velit esse cillum\n                dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n                cupidatat non proident, sunt in culpa qui officia deserunt\n                mollit anim id est laborum.\n              </div> <div id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\" class=\"tab-pane fade\">\n                Sed sed metus vel lacus hendrerit tempus. Sed efficitur velit\n                tortor, ac efficitur est lobortis quis. Nullam lacinia metus\n                erat, sed fermentum justo rutrum ultrices. Proin quis iaculis\n                tellus. Etiam ac vehicula eros, pharetra consectetur dui.\n                Aliquam convallis neque eget tellus efficitur, eget maximus\n                massa imperdiet. Morbi a mattis velit. Donec hendrerit\n                venenatis justo, eget scelerisque tellus pharetra a.\n              </div> <div id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\" class=\"tab-pane fade\">\n                Vestibulum imperdiet odio sed neque ultricies, ut dapibus mi\n                maximus. Proin ligula massa, gravida in lacinia efficitur,\n                hendrerit eget mauris. Pellentesque fermentum, sem interdum\n                molestie finibus, nulla diam varius leo, nec varius lectus\n                elit id dolor. Nam malesuada orci non ornare vulputate. Ut ut\n                sollicitudin magna. Vestibulum eget ligula ut ipsum venenatis\n                ultrices. Proin bibendum bibendum augue ut luctus.\n              </div></div></div></div></div> <div class=\"col-12 col-sm-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Bordered Tab</h4></div> <div class=\"card-body\"><ul id=\"myTab2\" role=\"tablist\" class=\"nav nav-tabs\"><li class=\"nav-item\"><a id=\"home-tab2\" data-toggle=\"tab\" href=\"#home2\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" class=\"nav-link active\">Home</a></li> <li class=\"nav-item\"><a id=\"profile-tab2\" data-toggle=\"tab\" href=\"#profile2\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\" class=\"nav-link\">Profile</a></li> <li class=\"nav-item\"><a id=\"contact-tab2\" data-toggle=\"tab\" href=\"#contact2\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\" class=\"nav-link\">Contact</a></li></ul> <div id=\"myTab3Content\" class=\"tab-content tab-bordered\"><div id=\"home2\" role=\"tabpanel\" aria-labelledby=\"home-tab2\" class=\"tab-pane fade show active\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                irure dolor in reprehenderit in voluptate velit esse cillum\n                dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n                cupidatat non proident, sunt in culpa qui officia deserunt\n                mollit anim id est laborum.\n              </div> <div id=\"profile2\" role=\"tabpanel\" aria-labelledby=\"profile-tab2\" class=\"tab-pane fade\">\n                Sed sed metus vel lacus hendrerit tempus. Sed efficitur velit\n                tortor, ac efficitur est lobortis quis. Nullam lacinia metus\n                erat, sed fermentum justo rutrum ultrices. Proin quis iaculis\n                tellus. Etiam ac vehicula eros, pharetra consectetur dui.\n                Aliquam convallis neque eget tellus efficitur, eget maximus\n                massa imperdiet. Morbi a mattis velit. Donec hendrerit\n                venenatis justo, eget scelerisque tellus pharetra a.\n              </div> <div id=\"contact2\" role=\"tabpanel\" aria-labelledby=\"contact-tab2\" class=\"tab-pane fade\">\n                Vestibulum imperdiet odio sed neque ultricies, ut dapibus mi\n                maximus. Proin ligula massa, gravida in lacinia efficitur,\n                hendrerit eget mauris. Pellentesque fermentum, sem interdum\n                molestie finibus, nulla diam varius leo, nec varius lectus\n                elit id dolor. Nam malesuada orci non ornare vulputate. Ut ut\n                sollicitudin magna. Vestibulum eget ligula ut ipsum venenatis\n                ultrices. Proin bibendum bibendum augue ut luctus.\n              </div></div></div></div></div></div> <div class=\"row\"><div class=\"col-12 col-sm-5 col-lg-5\"><div class=\"card\"><div class=\"card-header\"><h4>Tab <code>.nav-pills</code></h4></div> <div class=\"card-body\"><ul id=\"myTab3\" role=\"tablist\" class=\"nav nav-pills\"><li class=\"nav-item\"><a id=\"home-tab3\" data-toggle=\"tab\" href=\"#home3\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" class=\"nav-link active\">Home</a></li> <li class=\"nav-item\"><a id=\"profile-tab3\" data-toggle=\"tab\" href=\"#profile3\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\" class=\"nav-link\">Profile</a></li> <li class=\"nav-item\"><a id=\"contact-tab3\" data-toggle=\"tab\" href=\"#contact3\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\" class=\"nav-link\">Contact</a></li></ul> <div id=\"myTabContent2\" class=\"tab-content\"><div id=\"home3\" role=\"tabpanel\" aria-labelledby=\"home-tab3\" class=\"tab-pane fade show active\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n                do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n                irure dolor in reprehenderit in voluptate velit esse cillum\n                dolore eu fugiat nulla pariatur.\n              </div> <div id=\"profile3\" role=\"tabpanel\" aria-labelledby=\"profile-tab3\" class=\"tab-pane fade\">\n                Sed sed metus vel lacus hendrerit tempus. Sed efficitur velit\n                tortor, ac efficitur est lobortis quis. Nullam lacinia metus\n                erat, sed fermentum justo rutrum ultrices. Proin quis iaculis\n                tellus. Etiam ac vehicula eros, pharetra consectetur dui.\n              </div> <div id=\"contact3\" role=\"tabpanel\" aria-labelledby=\"contact-tab3\" class=\"tab-pane fade\">\n                Vestibulum imperdiet odio sed neque ultricies, ut dapibus mi\n                maximus. Proin ligula massa, gravida in lacinia efficitur,\n                hendrerit eget mauris. Pellentesque fermentum, sem interdum\n                molestie finibus, nulla diam varius leo, nec varius lectus\n                elit id dolor.\n              </div></div></div></div></div> <div class=\"col-12 col-sm-7 col-lg-7\"><div class=\"card\"><div class=\"card-header\"><h4>2 Column</h4></div> <div class=\"card-body\"><div class=\"row\"><div class=\"col-12 col-sm-12 col-md-4\"><ul id=\"myTab4\" role=\"tablist\" class=\"nav nav-pills flex-column\"><li class=\"nav-item\"><a id=\"home-tab4\" data-toggle=\"tab\" href=\"#home4\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" class=\"nav-link active\">Home</a></li> <li class=\"nav-item\"><a id=\"profile-tab4\" data-toggle=\"tab\" href=\"#profile4\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\" class=\"nav-link\">Profile</a></li> <li class=\"nav-item\"><a id=\"contact-tab4\" data-toggle=\"tab\" href=\"#contact4\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\" class=\"nav-link\">Contact</a></li></ul></div> <div class=\"col-12 col-sm-12 col-md-8\"><div id=\"myTab2Content\" class=\"tab-content no-padding\"><div id=\"home4\" role=\"tabpanel\" aria-labelledby=\"home-tab4\" class=\"tab-pane fade show active\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit\n                    esse cillum dolore eu fugiat nulla pariatur. Excepteur\n                    sint occaecat cupidatat non proident, sunt in culpa qui\n                    officia deserunt mollit anim id est laborum.\n                  </div> <div id=\"profile4\" role=\"tabpanel\" aria-labelledby=\"profile-tab4\" class=\"tab-pane fade\">\n                    Sed sed metus vel lacus hendrerit tempus. Sed efficitur\n                    velit tortor, ac efficitur est lobortis quis. Nullam\n                    lacinia metus erat, sed fermentum justo rutrum ultrices.\n                    Proin quis iaculis tellus. Etiam ac vehicula eros,\n                    pharetra consectetur dui. Aliquam convallis neque eget\n                    tellus efficitur, eget maximus massa imperdiet. Morbi a\n                    mattis velit. Donec hendrerit venenatis justo, eget\n                    scelerisque tellus pharetra a.\n                  </div> <div id=\"contact4\" role=\"tabpanel\" aria-labelledby=\"contact-tab4\" class=\"tab-pane fade\">\n                    Vestibulum imperdiet odio sed neque ultricies, ut dapibus\n                    mi maximus. Proin ligula massa, gravida in lacinia\n                    efficitur, hendrerit eget mauris. Pellentesque fermentum,\n                    sem interdum molestie finibus, nulla diam varius leo, nec\n                    varius lectus elit id dolor. Nam malesuada orci non ornare\n                    vulputate. Ut ut sollicitudin magna. Vestibulum eget\n                    ligula ut ipsum venenatis ultrices. Proin bibendum\n                    bibendum augue ut luctus.\n                  </div></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsTab.vue?vue&type=template&id=44f1861e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsTab.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7158a69e"
  
)

/* harmony default export */ var ComponentsTab = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tab.js.map