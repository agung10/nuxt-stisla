exports.ids = [35];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/table.vue?vue&type=template&id=787bcd81&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ComponentsTable')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stisla/components/table.vue?vue&type=template&id=787bcd81&scoped=true&

// EXTERNAL MODULE: ./components/pages/ComponentsTable.vue + 2 modules
var ComponentsTable = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stisla/components/table.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  head: {
    title: "Components > Table - Nuxt Stisla",
    script: [{
      src: "/modules/jquery-ui/jquery-ui.min.js"
    }, {
      src: "/js/page/components-table.js"
    }]
  },
  components: {
    ComponentsTable: ComponentsTable["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "components-table"
    });
  }

});
// CONCATENATED MODULE: ./pages/stisla/components/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stisla/components/table.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "787bcd81",
  "2aa9ba33"
  
)

/* harmony default export */ var table = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComponentsTable: __webpack_require__(81).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ComponentsTable.vue?vue&type=template&id=1c0a62a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Table</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Components</a></div> <div class=\"breadcrumb-item\">Table</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Table</h2> <p class=\"section-lead\">Example of some Bootstrap table components.</p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Simple Table</h4></div> <div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-bordered table-md\"><tr><th>#</th> <th>Name</th> <th>Created At</th> <th>Status</th> <th>Action</th></tr> <tr><td>1</td> <td>Irwansyah Saputra</td> <td>2017-01-09</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>2</td> <td>Hasan Basri</td> <td>2017-01-09</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>3</td> <td>Kusnadi</td> <td>2017-01-11</td> <td><div class=\"badge badge-danger\">Not Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>4</td> <td>Rizal Fakhri</td> <td>2017-01-11</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr></table></div></div> <div class=\"card-footer text-right\"><nav class=\"d-inline-block\"><ul class=\"pagination mb-0\"><li class=\"page-item disabled\"><a href=\"#\" tabindex=\"-1\" class=\"page-link\"><i class=\"fas fa-chevron-left\"></i></a></li> <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">1 <span class=\"sr-only\">(current)</span></a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\"><i class=\"fas fa-chevron-right\"></i></a></li></ul></nav></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Full Width</h4></div> <div class=\"card-body p-0\"><div class=\"table-responsive\"><table class=\"table table-striped table-md\"><tr><th>#</th> <th>Name</th> <th>Created At</th> <th>Status</th> <th>Action</th></tr> <tr><td>1</td> <td>Irwansyah Saputra</td> <td>2017-01-09</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>2</td> <td>Hasan Basri</td> <td>2017-01-09</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>3</td> <td>Kusnadi</td> <td>2017-01-11</td> <td><div class=\"badge badge-danger\">Not Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>4</td> <td>Rizal Fakhri</td> <td>2017-01-11</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td>5</td> <td>Isnap Kiswandi</td> <td>2017-01-17</td> <td><div class=\"badge badge-success\">Active</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr></table></div></div> <div class=\"card-footer text-right\"><nav class=\"d-inline-block\"><ul class=\"pagination mb-0\"><li class=\"page-item disabled\"><a href=\"#\" tabindex=\"-1\" class=\"page-link\"><i class=\"fas fa-chevron-left\"></i></a></li> <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">1 <span class=\"sr-only\">(current)</span></a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\"><i class=\"fas fa-chevron-right\"></i></a></li></ul></nav></div></div></div></div> <div class=\"row\"><div class=\"col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Advanced Table</h4> <div class=\"card-header-form\"><form><div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"> <div class=\"input-group-btn\"><button class=\"btn btn-primary\"><i class=\"fas fa-search\"></i></button></div></div></form></div></div> <div class=\"card-body p-0\"><div class=\"table-responsive\"><table class=\"table table-striped\"><tr><th><div class=\"custom-checkbox custom-control\"><input type=\"checkbox\" data-checkboxes=\"mygroup\" data-checkbox-role=\"dad\" id=\"checkbox-all\" class=\"custom-control-input\"> <label for=\"checkbox-all\" class=\"custom-control-label\"> </label></div></th> <th>Task Name</th> <th>Progress</th> <th>Members</th> <th>Due Date</th> <th>Status</th> <th>Action</th></tr> <tr><td class=\"p-0 text-center\"><div class=\"custom-checkbox custom-control\"><input type=\"checkbox\" data-checkboxes=\"mygroup\" id=\"checkbox-1\" class=\"custom-control-input\"> <label for=\"checkbox-1\" class=\"custom-control-label\"> </label></div></td> <td>Create a mobile app</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"100%\" class=\"progress\"><div data-width=\"100\" class=\"progress-bar bg-success\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-5.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Wildan Ahdian\" class=\"rounded-circle\"></td> <td>2018-01-20</td> <td><div class=\"badge badge-success\">Completed</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td class=\"p-0 text-center\"><div class=\"custom-checkbox custom-control\"><input type=\"checkbox\" data-checkboxes=\"mygroup\" id=\"checkbox-2\" class=\"custom-control-input\"> <label for=\"checkbox-2\" class=\"custom-control-label\"> </label></div></td> <td>Redesign homepage</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"0%\" class=\"progress\"><div data-width=\"0\" class=\"progress-bar\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Nur Alpiana\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-3.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Hariono Yusup\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-4.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Bagus Dwi Cahya\" class=\"rounded-circle\"></td> <td>2018-04-10</td> <td><div class=\"badge badge-info\">Todo</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td class=\"p-0 text-center\"><div class=\"custom-checkbox custom-control\"><input type=\"checkbox\" data-checkboxes=\"mygroup\" id=\"checkbox-3\" class=\"custom-control-input\"> <label for=\"checkbox-3\" class=\"custom-control-label\"> </label></div></td> <td>Backup database</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"70%\" class=\"progress\"><div data-width=\"70\" class=\"progress-bar bg-warning\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Rizal Fakhri\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-2.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Hasan Basri\" class=\"rounded-circle\"></td> <td>2018-01-29</td> <td><div class=\"badge badge-warning\">In Progress</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td class=\"p-0 text-center\"><div class=\"custom-checkbox custom-control\"><input type=\"checkbox\" data-checkboxes=\"mygroup\" id=\"checkbox-4\" class=\"custom-control-input\"> <label for=\"checkbox-4\" class=\"custom-control-label\"> </label></div></td> <td>Input data</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"100%\" class=\"progress\"><div data-width=\"100\" class=\"progress-bar bg-success\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-2.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Rizal Fakhri\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-5.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Isnap Kiswandi\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-4.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Yudi Nawawi\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-1.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Khaerul Anwar\" class=\"rounded-circle\"></td> <td>2018-01-16</td> <td><div class=\"badge badge-success\">Completed</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr></table></div></div></div></div></div> <div class=\"row\"><div class=\"col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Sortable Table</h4> <div class=\"card-header-action\"><form><div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"> <div class=\"input-group-btn\"><button class=\"btn btn-primary\"><i class=\"fas fa-search\"></i></button></div></div></form></div></div> <div class=\"card-body p-0\"><div class=\"table-responsive\"><table id=\"sortable-table\" class=\"table table-striped\"><thead><tr><th class=\"text-center\"><i class=\"fas fa-th\"></i></th> <th>Task Name</th> <th>Progress</th> <th>Members</th> <th>Due Date</th> <th>Status</th> <th>Action</th></tr></thead> <tbody><tr><td><div class=\"sort-handler\"><i class=\"fas fa-th\"></i></div></td> <td>Create a mobile app</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"100%\" class=\"progress\"><div data-width=\"100\" class=\"progress-bar bg-success\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-5.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Wildan Ahdian\" class=\"rounded-circle\"></td> <td>2018-01-20</td> <td><div class=\"badge badge-success\">Completed</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td><div class=\"sort-handler\"><i class=\"fas fa-th\"></i></div></td> <td>Redesign homepage</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"0%\" class=\"progress\"><div data-width=\"0\" class=\"progress-bar\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Nur Alpiana\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-3.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Hariono Yusup\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-4.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Bagus Dwi Cahya\" class=\"rounded-circle\"></td> <td>2018-04-10</td> <td><div class=\"badge badge-info\">Todo</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td><div class=\"sort-handler\"><i class=\"fas fa-th\"></i></div></td> <td>Backup database</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"70%\" class=\"progress\"><div data-width=\"70\" class=\"progress-bar bg-warning\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Rizal Fakhri\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-2.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Hasan Basri\" class=\"rounded-circle\"></td> <td>2018-01-29</td> <td><div class=\"badge badge-warning\">In Progress</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr> <tr><td><div class=\"sort-handler\"><i class=\"fas fa-th\"></i></div></td> <td>Input data</td> <td class=\"align-middle\"><div data-height=\"4\" data-toggle=\"tooltip\" title=\"100%\" class=\"progress\"><div data-width=\"100\" class=\"progress-bar bg-success\"></div></div></td> <td><img alt=\"image\" src=\"/img/avatar/avatar-2.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Rizal Fakhri\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-5.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Isnap Kiswandi\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-4.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Yudi Nawawi\" class=\"rounded-circle\"> <img alt=\"image\" src=\"/img/avatar/avatar-1.png\" width=\"35\" data-toggle=\"tooltip\" title=\"Khaerul Anwar\" class=\"rounded-circle\"></td> <td>2018-01-16</td> <td><div class=\"badge badge-success\">Completed</div></td> <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td></tr></tbody></table></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ComponentsTable.vue?vue&type=template&id=1c0a62a2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ComponentsTable.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ac4f992c"
  
)

/* harmony default export */ var ComponentsTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=table.js.map