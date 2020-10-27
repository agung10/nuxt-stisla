exports.ids = [21];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/table.vue?vue&type=template&id=411a9df6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapTable')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/table.vue?vue&type=template&id=411a9df6&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapTable.vue + 2 modules
var BootstrapTable = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/table.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Table - Nuxt Stisla"
  },
  components: {
    BootstrapTable: BootstrapTable["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-table"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/table.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "411a9df6",
  "4d15115c"
  
)

/* harmony default export */ var table = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapTable: __webpack_require__(97).default})


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapTable.vue?vue&type=template&id=3b10ad5d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Table</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Table</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Tables</h2> <p class=\"section-lead\">\n      Examples for opt-in styling of tables (given their prevalent use in\n      JavaScript plugins) with Bootstrap.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Simple</h4></div> <div class=\"card-body\"><table class=\"table\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>FIt</h4></div> <div class=\"card-body p-0\"><table class=\"table\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Table Head Options</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Light</div> <table class=\"table\"><thead class=\"thead-dark\"><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Dark</div> <table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Borderless</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Light</div> <table class=\"table table-borderless\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Dark</div> <table class=\"table table-borderless table-dark\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Hover</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Light</div> <table class=\"table table-hover\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Dark</div> <table class=\"table table-hover table-dark\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Invert</h4></div> <div class=\"card-body\"><table class=\"table table-dark\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Striped</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Light</div> <table class=\"table table-striped\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Dark</div> <table class=\"table table-striped table-dark\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Bordered</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Light</div> <table class=\"table table-bordered\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Dark</div> <table class=\"table table-bordered table-dark\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Small Table, Caption &amp; Responsive</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Light</div> <table class=\"table table-sm\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Dark</div> <table class=\"table table-sm table-dark\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Caption</div> <table class=\"table\"><caption>\n                List of users\n              </caption> <thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table> <div class=\"section-title\">Responsive</div> <div class=\"table-responsive\"><table class=\"table table-sm\"><thead><tr><th scope=\"col\">#</th> <th scope=\"col\">First</th> <th scope=\"col\">Last</th> <th scope=\"col\">Handle</th></tr></thead> <tbody><tr><th scope=\"row\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td></tr> <tr><th scope=\"row\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td></tr> <tr><th scope=\"row\">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td></tr></tbody></table></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapTable.vue?vue&type=template&id=3b10ad5d&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapTable.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45f026de"
  
)

/* harmony default export */ var BootstrapTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=table.js.map