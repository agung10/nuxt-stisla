exports.ids = [28];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/chatBox.vue?vue&type=template&id=9f5b376a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsChatBox')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/chatBox.vue?vue&type=template&id=9f5b376a&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsChatBox.vue + 2 modules
var ComponentsChatBox = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/chatBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var chatBoxvue_type_script_lang_js_ = ({
  head: {
    title: "Components > Chat Box - Nuxt Stisla",
    script: [{
      src: "/js/page/components-chat-box.js",
      body: true
    }]
  },
  components: {
    ComponentsChatBox: ComponentsChatBox["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-chatBox"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/chatBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_chatBoxvue_type_script_lang_js_ = (chatBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/chatBox.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_chatBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f5b376a",
  "5faf7010"
  
)

/* harmony default export */ var chatBox = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsChatBox: __webpack_require__(78).default})


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsChatBox.vue?vue&type=template&id=0987103b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Chat Box</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Chat Box</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Chat Boxes</h2> <p class=\"section-lead\">\n      The chat component and is equipped with a JavaScript API, making it easy\n      for you to integrate with Back-end.\n    </p> <div class=\"row align-items-center justify-content-center\"><div class=\"col-12 col-sm-6 col-lg-4\"><div class=\"card\"><div class=\"card-header\"><h4>Who's Online?</h4></div> <div class=\"card-body\"><ul class=\"list-unstyled list-unstyled-border\"><li class=\"media\"><img alt=\"image\" width=\"50\" src=\"/img/avatar/avatar-1.png\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"mt-0 mb-1 font-weight-bold\">Hasan Basri</div> <div class=\"text-success text-small font-600-bold\"><i class=\"fas fa-circle\"></i> Online\n                  </div></div></li> <li class=\"media\"><img alt=\"image\" width=\"50\" src=\"/img/avatar/avatar-2.png\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"mt-0 mb-1 font-weight-bold\">\n                    Bagus Dwi Cahya\n                  </div> <div class=\"text-small font-weight-600 text-muted\"><i class=\"fas fa-circle\"></i> Offline\n                  </div></div></li> <li class=\"media\"><img alt=\"image\" width=\"50\" src=\"/img/avatar/avatar-3.png\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"mt-0 mb-1 font-weight-bold\">Wildan Ahdian</div> <div class=\"text-small font-weight-600 text-success\"><i class=\"fas fa-circle\"></i> Online\n                  </div></div></li> <li class=\"media\"><img alt=\"image\" width=\"50\" src=\"/img/avatar/avatar-4.png\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"mt-0 mb-1 font-weight-bold\">Rizal Fakhri</div> <div class=\"text-small font-weight-600 text-success\"><i class=\"fas fa-circle\"></i> Online\n                  </div></div></li></ul></div></div></div> <div class=\"col-12 col-sm-6 col-lg-4\"><div id=\"mychatbox\" class=\"card chat-box\"><div class=\"card-header\"><h4>Chat with Rizal</h4></div> <div class=\"card-body chat-content\"></div> <div class=\"card-footer chat-form\"><form id=\"chat-form\"><input type=\"text\" placeholder=\"Type a message\" class=\"form-control\"> <button class=\"btn btn-primary\"><i class=\"far fa-paper-plane\"></i></button></form></div></div></div> <div class=\"col-12 col-sm-6 col-lg-4\"><div id=\"mychatbox2\" class=\"card chat-box card-success\"><div class=\"card-header\"><h4><i title=\"Online\" data-toggle=\"tooltip\" class=\"fas fa-circle text-success mr-2\"></i>\n              Chat with Ryan\n            </h4></div> <div class=\"card-body chat-content\"></div> <div class=\"card-footer chat-form\"><form id=\"chat-form2\"><input type=\"text\" placeholder=\"Type a message\" class=\"form-control\"> <button class=\"btn btn-primary\"><i class=\"far fa-paper-plane\"></i></button></form></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsChatBox.vue?vue&type=template&id=0987103b&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsChatBox.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d9d4f6f"
  
)

/* harmony default export */ var ComponentsChatBox = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chatBox.js.map