exports.ids = [1];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/general.vue?vue&type=template&id=072f8288&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('GeneralDashboard')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/general.vue?vue&type=template&id=072f8288&scoped=true&

// EXTERNAL MODULE: ./components/pages/GeneralDashboard.vue + 2 modules
var GeneralDashboard = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/general.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var generalvue_type_script_lang_js_ = ({
  head: {
    title: "General Dashboard - Nuxt Stisla",
    link: [{
      rel: "stylesheet",
      href: "/modules/jqvmap/dist/jqvmap.min.css"
    }, {
      rel: "stylesheet",
      href: "/modules/weather-icon/css/weather-icons.min.css"
    }, {
      rel: "stylesheet",
      href: "/modules/weather-icon/css/weather-icons-wind.min.css"
    }, {
      rel: "stylesheet",
      href: "/modules/summernote/summernote-bs4.css"
    }],
    script: [{
      src: "/modules/simple-weather/jquery.simpleWeather.min.js"
    }, {
      src: "/modules/chart.min.js"
    }, {
      src: "/modules/jqvmap/dist/jquery.vmap.min.js"
    }, {
      src: "/modules/jqvmap/dist/maps/jquery.vmap.world.js"
    }, {
      src: "/modules/summernote/summernote-bs4.js"
    }, {
      src: "/modules/chocolat/dist/js/jquery.chocolat.min.js"
    }, {
      src: "/js/page/index-0.js",
      body: true
    }]
  },
  components: {
    GeneralDashboard: GeneralDashboard["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "dashboard-generalDashboard"
    });
  }

});
// CONCATENATED MODULE: ./pages/general.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_generalvue_type_script_lang_js_ = (generalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/general.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_generalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "072f8288",
  "5812af57"
  
)

/* harmony default export */ var general = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GeneralDashboard: __webpack_require__(99).default})


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/GeneralDashboard.vue?vue&type=template&id=aadafd44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Dashboard</h1></div> <div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-6 col-12\"><div class=\"card card-statistic-1\"><div class=\"card-icon bg-primary\"><i class=\"far fa-user\"></i></div> <div class=\"card-wrap\"><div class=\"card-header\"><h4>Total Admin</h4></div> <div class=\"card-body\">10</div></div></div></div> <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\"><div class=\"card card-statistic-1\"><div class=\"card-icon bg-danger\"><i class=\"far fa-newspaper\"></i></div> <div class=\"card-wrap\"><div class=\"card-header\"><h4>News</h4></div> <div class=\"card-body\">42</div></div></div></div> <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\"><div class=\"card card-statistic-1\"><div class=\"card-icon bg-warning\"><i class=\"far fa-file\"></i></div> <div class=\"card-wrap\"><div class=\"card-header\"><h4>Reports</h4></div> <div class=\"card-body\">1,201</div></div></div></div> <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\"><div class=\"card card-statistic-1\"><div class=\"card-icon bg-success\"><i class=\"fas fa-circle\"></i></div> <div class=\"card-wrap\"><div class=\"card-header\"><h4>Online Users</h4></div> <div class=\"card-body\">47</div></div></div></div></div> <div class=\"row\"><div class=\"col-lg-8 col-md-12 col-12 col-sm-12\"><div class=\"card\"><div class=\"card-header\"><h4>Statistics</h4> <div class=\"card-header-action\"><div class=\"btn-group\"><a href=\"#\" class=\"btn btn-primary\">Week</a> <a href=\"#\" class=\"btn\">Month</a></div></div></div> <div class=\"card-body\"><canvas id=\"myChart\" height=\"182\"></canvas> <div class=\"statistic-details mt-sm-4\"><div class=\"statistic-details-item\"><span class=\"text-muted\"><span class=\"text-primary\"><i class=\"fas fa-caret-up\"></i></span>\n                7%</span> <div class=\"detail-value\">$243</div> <div class=\"detail-name\">Today's Sales</div></div> <div class=\"statistic-details-item\"><span class=\"text-muted\"><span class=\"text-danger\"><i class=\"fas fa-caret-down\"></i></span>\n                23%</span> <div class=\"detail-value\">$2,902</div> <div class=\"detail-name\">This Week's Sales</div></div> <div class=\"statistic-details-item\"><span class=\"text-muted\"><span class=\"text-primary\"><i class=\"fas fa-caret-up\"></i></span>9%</span> <div class=\"detail-value\">$12,821</div> <div class=\"detail-name\">This Month's Sales</div></div> <div class=\"statistic-details-item\"><span class=\"text-muted\"><span class=\"text-primary\"><i class=\"fas fa-caret-up\"></i></span>\n                19%</span> <div class=\"detail-value\">$92,142</div> <div class=\"detail-name\">This Year's Sales</div></div></div></div></div></div> <div class=\"col-lg-4 col-md-12 col-12 col-sm-12\"><div class=\"card\"><div class=\"card-header\"><h4>Recent Activities</h4></div> <div class=\"card-body\"><ul class=\"list-unstyled list-unstyled-border\"><li class=\"media\"><img width=\"50\" src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"float-right text-primary\">Now</div> <div class=\"media-title\">Farhan A Mujib</div> <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                  metus scelerisque ante sollicitudin.</span></div></li> <li class=\"media\"><img width=\"50\" src=\"/img/avatar/avatar-2.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"float-right\">12m</div> <div class=\"media-title\">Ujang Maman</div> <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                  metus scelerisque ante sollicitudin.</span></div></li> <li class=\"media\"><img width=\"50\" src=\"/img/avatar/avatar-3.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"float-right\">17m</div> <div class=\"media-title\">Rizal Fakhri</div> <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                  metus scelerisque ante sollicitudin.</span></div></li> <li class=\"media\"><img width=\"50\" src=\"/img/avatar/avatar-4.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"float-right\">21m</div> <div class=\"media-title\">Alfa Zulkarnain</div> <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel\n                  metus scelerisque ante sollicitudin.</span></div></li></ul> <div class=\"text-center pt-1 pb-1\"><a href=\"#\" class=\"btn btn-primary btn-lg btn-round\">\n              View All\n            </a></div></div></div></div></div> <div class=\"row\"><div class=\"col-lg-6 col-md-12 col-12 col-sm-12\"><div class=\"card\"><div class=\"card-body pt-2 pb-2\"><div id=\"myWeather\">Please wait</div></div></div></div> <div class=\"col-lg-6 col-md-12 col-12 col-sm-12\"><div class=\"card\"><div class=\"card-header\"><h4>Authors</h4></div> <div class=\"card-body\"><div class=\"row pb-2\"><div class=\"col-6 col-sm-3 col-lg-3 mb-4 mb-md-0\"><div class=\"avatar-item mb-0\"><img alt=\"image\" src=\"/img/avatar/avatar-5.png\" data-toggle=\"tooltip\" title=\"Alfa Zulkarnain\" class=\"img-fluid\"> <div title=\"Editor\" data-toggle=\"tooltip\" class=\"avatar-badge\"><i class=\"fas fa-wrench\"></i></div></div></div> <div class=\"col-6 col-sm-3 col-lg-3 mb-4 mb-md-0\"><div class=\"avatar-item mb-0\"><img alt=\"image\" src=\"/img/avatar/avatar-4.png\" data-toggle=\"tooltip\" title=\"Egi Ferdian\" class=\"img-fluid\"> <div title=\"Admin\" data-toggle=\"tooltip\" class=\"avatar-badge\"><i class=\"fas fa-cog\"></i></div></div></div> <div class=\"col-6 col-sm-3 col-lg-3 mb-4 mb-md-0\"><div class=\"avatar-item mb-0\"><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" data-toggle=\"tooltip\" title=\"Jaka Ramadhan\" class=\"img-fluid\"> <div title=\"Author\" data-toggle=\"tooltip\" class=\"avatar-badge\"><i class=\"fas fa-pencil-alt\"></i></div></div></div> <div class=\"col-6 col-sm-3 col-lg-3 mb-4 mb-md-0\"><div class=\"avatar-item mb-0\"><img alt=\"image\" src=\"/img/avatar/avatar-2.png\" data-toggle=\"tooltip\" title=\"Ryan\" class=\"img-fluid\"> <div title=\"Admin\" data-toggle=\"tooltip\" class=\"avatar-badge\"><i class=\"fas fa-cog\"></i></div></div></div></div></div></div></div></div> <div class=\"row\"><div class=\"col-lg-6 col-md-6 col-12\"><div class=\"card\"><div class=\"card-header\"><h4>Referral URL</h4></div> <div class=\"card-body\"><div class=\"mb-4\"><div class=\"text-small float-right font-weight-bold text-muted\">\n              2,100\n            </div> <div class=\"font-weight-bold mb-1\">Google</div> <div data-height=\"3\" class=\"progress\"><div role=\"progressbar\" data-width=\"80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"></div></div></div> <div class=\"mb-4\"><div class=\"text-small float-right font-weight-bold text-muted\">\n              1,880\n            </div> <div class=\"font-weight-bold mb-1\">Facebook</div> <div data-height=\"3\" class=\"progress\"><div role=\"progressbar\" data-width=\"67%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"></div></div></div> <div class=\"mb-4\"><div class=\"text-small float-right font-weight-bold text-muted\">\n              1,521\n            </div> <div class=\"font-weight-bold mb-1\">Bing</div> <div data-height=\"3\" class=\"progress\"><div role=\"progressbar\" data-width=\"58%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"></div></div></div> <div class=\"mb-4\"><div class=\"text-small float-right font-weight-bold text-muted\">\n              884\n            </div> <div class=\"font-weight-bold mb-1\">Yahoo</div> <div data-height=\"3\" class=\"progress\"><div role=\"progressbar\" data-width=\"36%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"></div></div></div> <div class=\"mb-4\"><div class=\"text-small float-right font-weight-bold text-muted\">\n              473\n            </div> <div class=\"font-weight-bold mb-1\">Kodinger</div> <div data-height=\"3\" class=\"progress\"><div role=\"progressbar\" data-width=\"28%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"></div></div></div> <div class=\"mb-4\"><div class=\"text-small float-right font-weight-bold text-muted\">\n              418\n            </div> <div class=\"font-weight-bold mb-1\">Multinity</div> <div data-height=\"3\" class=\"progress\"><div role=\"progressbar\" data-width=\"20%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"></div></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Popular Browser</h4></div> <div class=\"card-body\"><div class=\"row\"><div class=\"col text-center\"><div class=\"browser browser-chrome\"></div> <div class=\"mt-2 font-weight-bold\">Chrome</div> <div class=\"text-muted text-small\"><span class=\"text-primary\"><i class=\"fas fa-caret-up\"></i></span>\n                48%\n              </div></div> <div class=\"col text-center\"><div class=\"browser browser-firefox\"></div> <div class=\"mt-2 font-weight-bold\">Firefox</div> <div class=\"text-muted text-small\"><span class=\"text-primary\"><i class=\"fas fa-caret-up\"></i></span>\n                26%\n              </div></div> <div class=\"col text-center\"><div class=\"browser browser-safari\"></div> <div class=\"mt-2 font-weight-bold\">Safari</div> <div class=\"text-muted text-small\"><span class=\"text-danger\"><i class=\"fas fa-caret-down\"></i></span>\n                14%\n              </div></div> <div class=\"col text-center\"><div class=\"browser browser-opera\"></div> <div class=\"mt-2 font-weight-bold\">Opera</div> <div class=\"text-muted text-small\">7%</div></div> <div class=\"col text-center\"><div class=\"browser browser-internet-explorer\"></div> <div class=\"mt-2 font-weight-bold\">IE</div> <div class=\"text-muted text-small\"><span class=\"text-primary\"><i class=\"fas fa-caret-up\"></i></span>\n                5%\n              </div></div></div></div></div> <div class=\"card mt-sm-5 mt-md-0\"><div class=\"card-header\"><h4>Visitors</h4></div> <div class=\"card-body\"><div id=\"visitorMap\"></div></div></div></div> <div class=\"col-lg-6 col-md-6 col-12\"><div class=\"card\"><div class=\"card-header\"><h4>This Week Stats</h4> <div class=\"card-header-action\"><div class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle btn btn-primary\">Filter</a> <div class=\"dropdown-menu dropdown-menu-right\"><a href=\"#\" class=\"dropdown-item has-icon\"><i class=\"far fa-circle\"></i> Electronic</a> <a href=\"#\" class=\"dropdown-item has-icon\"><i class=\"far fa-circle\"></i> T-shirt</a> <a href=\"#\" class=\"dropdown-item has-icon\"><i class=\"far fa-circle\"></i> Hat</a> <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\">View All</a></div></div></div></div> <div class=\"card-body\"><div class=\"summary\"><div class=\"summary-info\"><h4>$1,053</h4> <div class=\"text-muted\">Sold 3 items on 2 customers</div> <div class=\"d-block mt-2\"><a href=\"#\">View All</a></div></div> <div class=\"summary-item\"><h6>Item List <span class=\"text-muted\">(3 Items)</span></h6> <ul class=\"list-unstyled list-unstyled-border\"><li class=\"media\"><a href=\"#\"><img width=\"50\" src=\"/img/products/product-1-50.png\" alt=\"product\" class=\"mr-3 rounded\"></a> <div class=\"media-body\"><div class=\"media-right\">$405</div> <div class=\"media-title\"><a href=\"#\">PlayStation 9</a></div> <div class=\"text-muted text-small\">\n                      by <a href=\"#\">Hasan Basri</a> <div class=\"bullet\"></div>\n                      Sunday\n                    </div></div></li> <li class=\"media\"><a href=\"#\"><img width=\"50\" src=\"/img/products/product-2-50.png\" alt=\"product\" class=\"mr-3 rounded\"></a> <div class=\"media-body\"><div class=\"media-right\">$499</div> <div class=\"media-title\"><a href=\"#\">RocketZ</a></div> <div class=\"text-muted text-small\">\n                      by <a href=\"#\">Hasan Basri</a> <div class=\"bullet\"></div>\n                      Sunday\n                    </div></div></li> <li class=\"media\"><a href=\"#\"><img width=\"50\" src=\"/img/products/product-3-50.png\" alt=\"product\" class=\"mr-3 rounded\"></a> <div class=\"media-body\"><div class=\"media-right\">$149</div> <div class=\"media-title\"><a href=\"#\">Xiaomay Readme 4.0</a></div> <div class=\"text-muted text-small\">\n                      by <a href=\"#\">Kusnaedi</a> <div class=\"bullet\"></div>\n                      Tuesday\n                    </div></div></li></ul></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4 class=\"d-inline\">Tasks</h4> <div class=\"card-header-action\"><a href=\"#\" class=\"btn btn-primary\">View All</a></div></div> <div class=\"card-body\"><ul class=\"list-unstyled list-unstyled-border\"><li class=\"media\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" id=\"cbx-1\" class=\"custom-control-input\"> <label for=\"cbx-1\" class=\"custom-control-label\"></label></div> <img width=\"50\" src=\"/img/avatar/avatar-4.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"badge badge-pill badge-danger mb-1 float-right\">\n                  Not Finished\n                </div> <h6 class=\"media-title\"><a href=\"#\">Redesign header</a></h6> <div class=\"text-small text-muted\">\n                  Alfa Zulkarnain\n                  <div class=\"bullet\"></div> <span class=\"text-primary\">Now</span></div></div></li> <li class=\"media\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" id=\"cbx-2\" checked=\"checked\" class=\"custom-control-input\"> <label for=\"cbx-2\" class=\"custom-control-label\"></label></div> <img width=\"50\" src=\"/img/avatar/avatar-5.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"badge badge-pill badge-primary mb-1 float-right\">\n                  Completed\n                </div> <h6 class=\"media-title\"><a href=\"#\">Add a new component</a></h6> <div class=\"text-small text-muted\">\n                  Serj Tankian\n                  <div class=\"bullet\"></div>\n                  4 Min\n                </div></div></li> <li class=\"media\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" id=\"cbx-3\" class=\"custom-control-input\"> <label for=\"cbx-3\" class=\"custom-control-label\"></label></div> <img width=\"50\" src=\"/img/avatar/avatar-2.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"badge badge-pill badge-warning mb-1 float-right\">\n                  Progress\n                </div> <h6 class=\"media-title\"><a href=\"#\">Fix modal window</a></h6> <div class=\"text-small text-muted\">\n                  Ujang Maman\n                  <div class=\"bullet\"></div>\n                  8 Min\n                </div></div></li> <li class=\"media\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" id=\"cbx-4\" class=\"custom-control-input\"> <label for=\"cbx-4\" class=\"custom-control-label\"></label></div> <img width=\"50\" src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" class=\"mr-3 rounded-circle\"> <div class=\"media-body\"><div class=\"badge badge-pill badge-danger mb-1 float-right\">\n                  Not Finished\n                </div> <h6 class=\"media-title\"><a href=\"#\">Remove unwanted classes</a></h6> <div class=\"text-small text-muted\">\n                  Farhan A Mujib\n                  <div class=\"bullet\"></div>\n                  21 Min\n                </div></div></li></ul></div></div></div></div> <div class=\"row\"><div class=\"col-lg-5 col-md-12 col-12 col-sm-12\"><form method=\"post\" novalidate=\"novalidate\" class=\"needs-validation\"><div class=\"card\"><div class=\"card-header\"><h4>Quick Draft</h4></div> <div class=\"card-body pb-0\"><div class=\"form-group\"><label>Title</label> <input type=\"text\" name=\"title\" required=\"required\" class=\"form-control\"> <div class=\"invalid-feedback\">Please fill in the title</div></div> <div class=\"form-group\"><label>Content</label> <textarea class=\"summernote-simple\"></textarea></div></div> <div class=\"card-footer pt-0\"><button class=\"btn btn-primary\">Save Draft</button></div></div></form></div> <div class=\"col-lg-7 col-md-12 col-12 col-sm-12\"><div class=\"card\"><div class=\"card-header\"><h4>Latest Posts</h4> <div class=\"card-header-action\"><a href=\"#\" class=\"btn btn-primary\">View All</a></div></div> <div class=\"card-body p-0\"><div class=\"table-responsive\"><table class=\"table table-striped mb-0\"><thead><tr><th>Title</th> <th>Author</th> <th>Action</th></tr></thead> <tbody><tr><td>\n                    Introduction Laravel 5\n                    <div class=\"table-links\">\n                      in <a href=\"#\">Web Development</a> <div class=\"bullet\"></div> <a href=\"#\">View</a></div></td> <td><a href=\"#\" class=\"font-weight-600\"><img src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" width=\"30\" class=\"rounded-circle mr-1\">\n                      Bagus Dwi Cahya</a></td> <td><a data-toggle=\"tooltip\" title=\"Edit\" class=\"btn btn-primary btn-action mr-1\"><i class=\"fas fa-pencil-alt\"></i></a> <a data-toggle=\"tooltip\" title=\"Delete\" data-confirm=\"Are You Sure?|This action can not be undone. Do you want to continue?\" data-confirm-yes=\"alert('Deleted')\" class=\"btn btn-danger btn-action\"><i class=\"fas fa-trash\"></i></a></td></tr> <tr><td>\n                    Laravel 5 Tutorial - Installation\n                    <div class=\"table-links\">\n                      in <a href=\"#\">Web Development</a> <div class=\"bullet\"></div> <a href=\"#\">View</a></div></td> <td><a href=\"#\" class=\"font-weight-600\"><img src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" width=\"30\" class=\"rounded-circle mr-1\">\n                      Bagus Dwi Cahya</a></td> <td><a data-toggle=\"tooltip\" title=\"Edit\" class=\"btn btn-primary btn-action mr-1\"><i class=\"fas fa-pencil-alt\"></i></a> <a data-toggle=\"tooltip\" title=\"Delete\" data-confirm=\"Are You Sure?|This action can not be undone. Do you want to continue?\" data-confirm-yes=\"alert('Deleted')\" class=\"btn btn-danger btn-action\"><i class=\"fas fa-trash\"></i></a></td></tr> <tr><td>\n                    Laravel 5 Tutorial - MVC\n                    <div class=\"table-links\">\n                      in <a href=\"#\">Web Development</a> <div class=\"bullet\"></div> <a href=\"#\">View</a></div></td> <td><a href=\"#\" class=\"font-weight-600\"><img src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" width=\"30\" class=\"rounded-circle mr-1\">\n                      Bagus Dwi Cahya</a></td> <td><a data-toggle=\"tooltip\" title=\"Edit\" class=\"btn btn-primary btn-action mr-1\"><i class=\"fas fa-pencil-alt\"></i></a> <a data-toggle=\"tooltip\" title=\"Delete\" data-confirm=\"Are You Sure?|This action can not be undone. Do you want to continue?\" data-confirm-yes=\"alert('Deleted')\" class=\"btn btn-danger btn-action\"><i class=\"fas fa-trash\"></i></a></td></tr> <tr><td>\n                    Laravel 5 Tutorial - Migration\n                    <div class=\"table-links\">\n                      in <a href=\"#\">Web Development</a> <div class=\"bullet\"></div> <a href=\"#\">View</a></div></td> <td><a href=\"#\" class=\"font-weight-600\"><img src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" width=\"30\" class=\"rounded-circle mr-1\">\n                      Bagus Dwi Cahya</a></td> <td><a data-toggle=\"tooltip\" title=\"Edit\" class=\"btn btn-primary btn-action mr-1\"><i class=\"fas fa-pencil-alt\"></i></a> <a data-toggle=\"tooltip\" title=\"Delete\" data-confirm=\"Are You Sure?|This action can not be undone. Do you want to continue?\" data-confirm-yes=\"alert('Deleted')\" class=\"btn btn-danger btn-action\"><i class=\"fas fa-trash\"></i></a></td></tr> <tr><td>\n                    Laravel 5 Tutorial - Deploy\n                    <div class=\"table-links\">\n                      in <a href=\"#\">Web Development</a> <div class=\"bullet\"></div> <a href=\"#\">View</a></div></td> <td><a href=\"#\" class=\"font-weight-600\"><img src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" width=\"30\" class=\"rounded-circle mr-1\">\n                      Bagus Dwi Cahya</a></td> <td><a data-toggle=\"tooltip\" title=\"Edit\" class=\"btn btn-primary btn-action mr-1\"><i class=\"fas fa-pencil-alt\"></i></a> <a data-toggle=\"tooltip\" title=\"Delete\" data-confirm=\"Are You Sure?|This action can not be undone. Do you want to continue?\" data-confirm-yes=\"alert('Deleted')\" class=\"btn btn-danger btn-action\"><i class=\"fas fa-trash\"></i></a></td></tr> <tr><td>\n                    Laravel 5 Tutorial - Closing\n                    <div class=\"table-links\">\n                      in <a href=\"#\">Web Development</a> <div class=\"bullet\"></div> <a href=\"#\">View</a></div></td> <td><a href=\"#\" class=\"font-weight-600\"><img src=\"/img/avatar/avatar-1.png\" alt=\"avatar\" width=\"30\" class=\"rounded-circle mr-1\">\n                      Bagus Dwi Cahya</a></td> <td><a data-toggle=\"tooltip\" title=\"Edit\" class=\"btn btn-primary btn-action mr-1\"><i class=\"fas fa-pencil-alt\"></i></a> <a data-toggle=\"tooltip\" title=\"Delete\" data-confirm=\"Are You Sure?|This action can not be undone. Do you want to continue?\" data-confirm-yes=\"alert('Deleted')\" class=\"btn btn-danger btn-action\"><i class=\"fas fa-trash\"></i></a></td></tr></tbody></table></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/GeneralDashboard.vue?vue&type=template&id=aadafd44&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/GeneralDashboard.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "744c882c"
  
)

/* harmony default export */ var GeneralDashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=general.js.map