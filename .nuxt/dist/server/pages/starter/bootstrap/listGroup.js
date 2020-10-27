exports.ids = [13];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/listGroup.vue?vue&type=template&id=3fff4fa9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapListGroup')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/listGroup.vue?vue&type=template&id=3fff4fa9&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapListGroup.vue + 2 modules
var BootstrapListGroup = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/listGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var listGroupvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- List Group - Nuxt Stisla"
  },
  components: {
    BootstrapListGroup: BootstrapListGroup["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-listGroup"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/listGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_listGroupvue_type_script_lang_js_ = (listGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/listGroup.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_listGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3fff4fa9",
  "77533ce2"
  
)

/* harmony default export */ var listGroup = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapListGroup: __webpack_require__(93).default})


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapListGroup.vue?vue&type=template&id=50bf0384&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>List Group</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">List Group</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">List Group</h2> <p class=\"section-lead\">\n      List groups are a flexible and powerful component for displaying a\n      series of content. Modify and extend them to support just about any\n      content within.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Basic</h4></div> <div class=\"card-body\"><ul class=\"list-group\"><li class=\"list-group-item\">Cras justo odio</li> <li class=\"list-group-item\">Dapibus ac facilisis in</li> <li class=\"list-group-item\">Morbi leo risus</li> <li class=\"list-group-item\">Porta ac consectetur ac</li> <li class=\"list-group-item\">Vestibulum at eros</li></ul></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Disabled</h4></div> <div class=\"card-body\"><ul class=\"list-group\"><li class=\"list-group-item\">Cras justo odio</li> <li class=\"list-group-item disabled\">\n                Dapibus ac facilisis in\n              </li> <li class=\"list-group-item\">Morbi leo risus</li> <li class=\"list-group-item\">Porta ac consectetur ac</li> <li class=\"list-group-item\">Vestibulum at eros</li></ul></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Flush</h4></div> <div class=\"card-body\"><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\">Cras justo odio</li> <li class=\"list-group-item\">Dapibus ac facilisis in</li> <li class=\"list-group-item\">Morbi leo risus</li> <li class=\"list-group-item\">Porta ac consectetur ac</li> <li class=\"list-group-item\">Vestibulum at eros</li></ul></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Badges</h4></div> <div class=\"card-body\"><ul class=\"list-group\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                Cras justo odio\n                <span class=\"badge badge-primary badge-pill\">14</span></li> <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                Dapibus ac facilisis in\n                <span class=\"badge badge-primary badge-pill\">2</span></li> <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                Morbi leo risus\n                <span class=\"badge badge-primary badge-pill\">1</span></li></ul></div></div> <div class=\"card\"><div class=\"card-header\"><h4>JavaScript Behavior</h4></div> <div class=\"card-body\"><div class=\"row\"><div class=\"col-4\"><div id=\"list-tab\" role=\"tablist\" class=\"list-group\"><a id=\"list-home-list\" data-toggle=\"list\" href=\"#list-home\" role=\"tab\" class=\"list-group-item list-group-item-action active\">Home</a> <a id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-profile\" role=\"tab\" class=\"list-group-item list-group-item-action\">Profile</a> <a id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-messages\" role=\"tab\" class=\"list-group-item list-group-item-action\">Messages</a> <a id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-settings\" role=\"tab\" class=\"list-group-item list-group-item-action\">Settings</a></div></div> <div class=\"col-8\"><div id=\"nav-tabContent\" class=\"tab-content\"><div id=\"list-home\" role=\"tabpanel\" aria-labelledby=\"list-home-list\" class=\"tab-pane fade show active\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit\n                    esse cillum dolore eu fugiat nulla pariatur. Excepteur\n                    sint occaecat cupidatat non.\n                  </div> <div id=\"list-profile\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\" class=\"tab-pane fade\">\n                    Deserunt cupidatat anim ullamco ut dolor anim sint nulla\n                    amet incididunt tempor ad ut pariatur officia culpa\n                    laboris occaecat. Dolor in nisi aliquip in non magna amet\n                    nisi sed commodo proident anim deserunt nulla veniam\n                    occaecat reprehenderit esse ut eu culpa fugiat nostrud\n                    pariatur adipisicing incididunt consequat nisi non amet.\n                  </div> <div id=\"list-messages\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\" class=\"tab-pane fade\">\n                    In quis non esse eiusmod sunt fugiat magna pariatur\n                    officia anim ex officia nostrud amet nisi pariatur eu est\n                    id ut exercitation ex ad reprehenderit dolore nostrud sit\n                    ut culpa consequat magna ad labore proident ad qui et\n                    tempor exercitation in aute veniam et velit dolore irure\n                    qui ex magna ex culpa enim anim ea mollit consequat\n                    ullamco exercitation in.\n                  </div> <div id=\"list-settings\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\" class=\"tab-pane fade\">\n                    Lorem ipsum culpa in ad velit dolore anim labore\n                    incididunt do aliqua sit veniam commodo elit dolore do\n                    labore occaecat laborum sed quis proident fugiat sunt\n                    pariatur. Cupidatat ut fugiat anim ut dolore excepteur ut\n                    voluptate dolore excepteur mollit commodo.\n                  </div></div></div></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Active</h4></div> <div class=\"card-body\"><ul class=\"list-group\"><li class=\"list-group-item\">Cras justo odio</li> <li class=\"list-group-item active\">Dapibus ac facilisis in</li> <li class=\"list-group-item\">Morbi leo risus</li> <li class=\"list-group-item\">Porta ac consectetur ac</li> <li class=\"list-group-item\">Vestibulum at eros</li></ul></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Link</h4></div> <div class=\"card-body\"><div class=\"list-group\"><a href=\"#\" class=\"list-group-item list-group-item-action active\">\n                Cras justo odio\n              </a> <a href=\"#\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a> <a href=\"#\" class=\"list-group-item list-group-item-action\">Morbi leo risus</a> <a href=\"#\" class=\"list-group-item list-group-item-action\">Porta ac consectetur ac</a> <a href=\"#\" class=\"list-group-item list-group-item-action disabled\">Vestibulum at eros</a></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Contextual Classes</h4></div> <div class=\"card-body\"><ul class=\"list-group\"><li class=\"list-group-item\">Dapibus ac facilisis in</li> <li class=\"list-group-item list-group-item-primary\">\n                A simple primary list group item\n              </li> <li class=\"list-group-item list-group-item-secondary\">\n                A simple secondary list group item\n              </li> <li class=\"list-group-item list-group-item-success\">\n                A simple success list group item\n              </li> <li class=\"list-group-item list-group-item-danger\">\n                A simple danger list group item\n              </li> <li class=\"list-group-item list-group-item-warning\">\n                A simple warning list group item\n              </li> <li class=\"list-group-item list-group-item-info\">\n                A simple info list group item\n              </li> <li class=\"list-group-item list-group-item-light\">\n                A simple light list group item\n              </li> <li class=\"list-group-item list-group-item-dark\">\n                A simple dark list group item\n              </li></ul></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Custom Content</h4></div> <div class=\"card-body\"><div class=\"list-group\"><a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">List group item heading</h5> <small>3 days ago</small></div> <p class=\"mb-1\">\n                  Donec id elit non mi porta gravida at eget metus. Maecenas\n                  sed diam eget risus varius blandit.\n                </p> <small>Donec id elit non mi porta.</small></a> <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">List group item heading</h5> <small class=\"text-muted\">3 days ago</small></div> <p class=\"mb-1\">\n                  Donec id elit non mi porta gravida at eget metus. Maecenas\n                  sed diam eget risus varius blandit.\n                </p> <small class=\"text-muted\">Donec id elit non mi porta.</small></a> <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">List group item heading</h5> <small class=\"text-muted\">3 days ago</small></div> <p class=\"mb-1\">\n                  Donec id elit non mi porta gravida at eget metus. Maecenas\n                  sed diam eget risus varius blandit.\n                </p> <small class=\"text-muted\">Donec id elit non mi porta.</small></a></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapListGroup.vue?vue&type=template&id=50bf0384&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapListGroup.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06c6e611"
  
)

/* harmony default export */ var BootstrapListGroup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=listGroup.js.map