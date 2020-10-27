exports.ids = [23];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/typography.vue?vue&type=template&id=3b4a9179&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapTypography')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/typography.vue?vue&type=template&id=3b4a9179&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapTypography.vue + 2 modules
var BootstrapTypography = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/typography.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var typographyvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Typography - Nuxt Stisla"
  },
  components: {
    BootstrapTypography: BootstrapTypography["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-typography"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/typography.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_typographyvue_type_script_lang_js_ = (typographyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/typography.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_typographyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b4a9179",
  "f27fefde"
  
)

/* harmony default export */ var typography = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapTypography: __webpack_require__(92).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapTypography.vue?vue&type=template&id=7540b536&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Typography</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">UI Kit</a></div> <div class=\"breadcrumb-item\">Typography</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Typography</h2> <p class=\"section-lead\">\n      Documentation and examples for Bootstrap typography, including global\n      settings, headings, body text, lists, and more.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Text</h4></div> <div class=\"card-body\"><h1>Heading 1</h1> <h2>Heading 2</h2> <h3>Heading 3</h3> <h4>Heading 4</h4> <h5>Heading 5</h5> <h6>Heading 6</h6> <h3 class=\"mt-4\">\n              Fancy display heading\n              <small class=\"text-muted\">With faded secondary text</small></h3> <p class=\"lead mt-4\">\n              Lead — Vivamus sagittis lacus vel augue laoreet rutrum\n              faucibus dolor auctor. Duis mollis, est non commodo luctus.\n            </p> <p class=\"mt-4 mb-4\">\n              Paragraph — Lorem ipsum dolor sit amet, consectetur\n              adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua. Ut enim ad minim veniam.\n            </p> <a href=\"#\">You can click me!</a></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Text Colors</h4></div> <div class=\"card-body\"><div class=\"text-primary mb-2\">Text Primary</div> <div class=\"text-secondary mb-2\">Text Secondary</div> <div class=\"text-success mb-2\">Text Success</div> <div class=\"text-info mb-2\">Text Info</div> <div class=\"text-warning mb-2\">Text Warning</div> <div class=\"text-light mb-2\">Text Light</div> <div class=\"text-dark mb-2\">Text Dark</div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Inline Text Element</h4></div> <div class=\"card-body\"><p>You can use the mark tag to <mark>highlight</mark> text.</p> <p><del>This line of text is meant to be treated as deleted\n                text.</del></p> <p><s>This line of text is meant to be treated as no longer\n                accurate.</s></p> <p><ins>This line of text is meant to be treated as an addition to\n                the document.</ins></p> <p><u>This line of text will render as underlined</u></p> <p><small>This line of text is meant to be treated as fine\n                print.</small></p> <p><strong>This line rendered as bold text.</strong></p> <p><em>This line rendered as italicized text.</em></p></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Abbreviations</h4></div> <div class=\"card-body\"><p><abbr title=\"attribute\">attr</abbr></p> <p><abbr title=\"HyperText Markup Language\" class=\"initialism\">HTML</abbr></p></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Color</h4></div> <div class=\"card-body\"><div class=\"colors\"><div class=\"color bg-primary text-white\"><div>Primary</div></div> <div class=\"color bg-secondary text-white\"><div>Secondary</div></div> <div class=\"color bg-success text-white\"><div>Success</div></div> <div class=\"color bg-info text-white\"><div>Info</div></div> <div class=\"color bg-warning text-white\"><div>Warning</div></div> <div class=\"color bg-danger text-white\"><div>Danger</div></div> <div class=\"color bg-light\"><div>Light</div></div> <div class=\"color bg-dark text-white\"><div>Dark</div></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Text Block</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Blockquote</div> <blockquote>Stisla made with hand</blockquote> <div class=\"section-title\">Inline Code</div> <p>\n              Lorem ipsum dolor sit amet, <code>consectetur</code> adipisicing\n              elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n              aliqua. Ut enim ad minim veniam, quis nostrud\n              <code>exercitation</code> ullamco laboris nisi ut aliquip ex ea\n              commodo consequat.\n            </p> <div class=\"section-title\">Code Block</div> <p>\n              We use PrismJS to do this, you can adjust themes, syntax and\n              more.\n              <a href=\"http://prismjs.com/\">Visit their documentation</a>.\n            </p> <pre class=\"language-javascript\"><code>var code = 'Hello';</code></pre></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Display</h4></div> <div class=\"card-body\"><div class=\"display-1\">Display 1</div> <hr> <div class=\"display-2\">Display 2</div> <hr> <div class=\"display-3\">Display 3</div> <hr> <div class=\"display-4\">Display 4</div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Naming a Source</h4></div> <div class=\"card-body\"><blockquote class=\"blockquote\"><p class=\"mb-0\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Integer posuere erat a ante.\n              </p> <footer class=\"blockquote-footer\">\n                Someone famous in\n                <cite title=\"Source Title\">Source Title</cite></footer></blockquote></div></div></div></div> <h2 class=\"section-title\">List</h2> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Unordered List</h4></div> <div class=\"card-body\"><p>\n              Sunt in culpa qui officia deserunt mollit anim id est laborum:\n            </p> <ul><li>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n                do eiusmod\n              </li> <li>\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n                minim veniam,\n              </li> <li>\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n                ea commodo\n              </li> <li>\n                consequat. Duis aute irure dolor in reprehenderit in voluptate\n                velit esse\n              </li> <li>\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                occaecat cupidatat non\n              </li> <li>\n                proident, sunt in culpa qui officia deserunt mollit anim id\n                est laborum.\n              </li></ul></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Ordered List</h4></div> <div class=\"card-body\"><p>\n              Sunt in culpa qui officia deserunt mollit anim id est laborum:\n            </p> <ol><li>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n                do eiusmod\n              </li> <li>\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n                minim veniam,\n              </li> <li>\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n                ea commodo\n              </li> <li>\n                consequat. Duis aute irure dolor in reprehenderit in voluptate\n                velit esse\n              </li> <li>\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint\n                occaecat cupidatat non\n              </li> <li>\n                proident, sunt in culpa qui officia deserunt mollit anim id\n                est laborum.\n              </li> <li>\n                consequat. Duis aute irure dolor in reprehenderit in voluptate\n                velit esse\n              </li></ol></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapTypography.vue?vue&type=template&id=7540b536&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapTypography.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db3fd862"
  
)

/* harmony default export */ var BootstrapTypography = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(5).default})


/***/ })

};;
//# sourceMappingURL=typography.js.map