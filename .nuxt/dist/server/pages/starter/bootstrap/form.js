exports.ids = [12];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/form.vue?vue&type=template&id=0cd8c16e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BootstrapForm')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/starter/bootstrap/form.vue?vue&type=template&id=0cd8c16e&scoped=true&

// EXTERNAL MODULE: ./components/pages/BootstrapForm.vue + 2 modules
var BootstrapForm = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/starter/bootstrap/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var formvue_type_script_lang_js_ = ({
  head: {
    title: "Bootstrap Components- Form - Nuxt Stisla"
  },
  components: {
    BootstrapForm: BootstrapForm["default"]
  },

  mounted() {
    this.$store.commit("INITIAL_PAGE", {
      page: "bootstrap-form"
    });
  }

});
// CONCATENATED MODULE: ./pages/starter/bootstrap/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var bootstrap_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/starter/bootstrap/form.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cd8c16e",
  "70b826b4"
  
)

/* harmony default export */ var bootstrap_form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BootstrapForm: __webpack_require__(91).default})


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/BootstrapForm.vue?vue&type=template&id=0e3d0f01&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-header\"><h1>Form</h1> <div class=\"section-header-breadcrumb\"><div class=\"breadcrumb-item active\"><a href=\"#\">Dashboard</a></div> <div class=\"breadcrumb-item\"><a href=\"#\">Bootstrap Components</a></div> <div class=\"breadcrumb-item\">Form</div></div></div> <div class=\"section-body\"><h2 class=\"section-title\">Forms</h2> <p class=\"section-lead\">\n      Examples and usage guidelines for form control styles, layout options,\n      and custom components for creating a wide variety of forms.\n    </p> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>HTML5 Form Basic</h4></div> <div class=\"card-body\"><div class=\"alert alert-info\"><b>Note!</b> Not all browsers support HTML5 type input.\n            </div> <div class=\"form-group\"><label>Text</label> <input type=\"text\" class=\"form-control\"></div> <div class=\"form-group\"><label>Select</label> <select class=\"form-control\"><option>Option 1</option> <option>Option 2</option> <option>Option 3</option></select></div> <div class=\"form-group\"><label>Select Multiple</label> <select multiple=\"multiple\" data-height=\"100%\" class=\"form-control\"><option>Option 1</option> <option>Option 2</option> <option>Option 3</option> <option>Option 3</option></select></div> <div class=\"form-group\"><label>Textarea</label> <textarea class=\"form-control\"></textarea></div> <div class=\"form-group\"><label class=\"d-block\">Checkbox</label> <div class=\"form-check\"><input type=\"checkbox\" id=\"defaultCheck1\" class=\"form-check-input\"> <label for=\"defaultCheck1\" class=\"form-check-label\">\n                  Checkbox 1\n                </label></div> <div class=\"form-check\"><input type=\"checkbox\" id=\"defaultCheck3\" class=\"form-check-input\"> <label for=\"defaultCheck3\" class=\"form-check-label\">\n                  Checkbox 2\n                </label></div></div> <div class=\"form-group\"><label>Color</label> <input type=\"color\" class=\"form-control\"></div> <div class=\"form-group\"><label>Date</label> <input type=\"date\" class=\"form-control\"></div> <div class=\"form-group\"><label>Datetime Local</label> <input type=\"datetime-local\" class=\"form-control\"></div> <div class=\"form-group\"><label>Email</label> <input type=\"email\" class=\"form-control\"></div> <div class=\"form-group\"><label>File</label> <input type=\"file\" class=\"form-control\"></div> <div class=\"form-group\"><label>Month</label> <input type=\"month\" class=\"form-control\"></div> <div class=\"form-group\"><label>Password</label> <input type=\"password\" class=\"form-control\"></div> <div class=\"form-group\"><label class=\"d-block\">Radio</label> <div class=\"form-check\"><input type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" checked=\"checked\" class=\"form-check-input\"> <label for=\"exampleRadios1\" class=\"form-check-label\">\n                  Radio 1\n                </label></div> <div class=\"form-check\"><input type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" checked=\"checked\" class=\"form-check-input\"> <label for=\"exampleRadios2\" class=\"form-check-label\">\n                  Radio 2\n                </label></div></div> <div class=\"form-group\"><label>Range</label> <input type=\"range\" class=\"form-control\"></div> <div class=\"form-group\"><label>Search</label> <input type=\"search\" class=\"form-control\"></div> <div class=\"form-group\"><label>Tel</label> <input type=\"tel\" class=\"form-control\"></div> <div class=\"form-group\"><label>Time</label> <input type=\"time\" class=\"form-control\"></div> <div class=\"form-group\"><label>Url</label> <input type=\"url\" class=\"form-control\"></div> <div class=\"form-group mb-0\"><label>Week</label> <input type=\"week\" class=\"form-control\"></div></div> <div class=\"card-footer text-right\"><button type=\"submit\" class=\"btn btn-primary mr-1\">Submit</button> <button type=\"reset\" class=\"btn btn-secondary\">Reset</button></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Inline Forms</h4></div> <div class=\"card-body\"><form class=\"form-inline\"><label for=\"inlineFormInputName2\" class=\"sr-only\">Name</label> <input type=\"text\" id=\"inlineFormInputName2\" placeholder=\"Jane Doe\" class=\"form-control mb-2 mr-sm-2\"> <label for=\"inlineFormInputGroupUsername2\" class=\"sr-only\">Username</label> <div class=\"input-group mb-2 mr-sm-2\"><input type=\"text\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Username\" class=\"form-control\"></div></form></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Help Text</h4></div> <div class=\"card-body\"><div class=\"form-group\"><label for=\"inputPassword5\">Password</label> <input type=\"password\" id=\"inputPassword5\" aria-describedby=\"passwordHelpBlock\" class=\"form-control\"> <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n                Your password must be 8-20 characters long, contain letters\n                and numbers, and must not contain spaces, special characters,\n                or emoji.\n              </small></div> <div class=\"form-inline\"><div class=\"form-group\"><label for=\"inputPassword6\">Password</label> <input type=\"password\" id=\"inputPassword6\" aria-describedby=\"passwordHelpInline\" class=\"form-control mx-sm-3\"> <small id=\"passwordHelpInline\" class=\"text-muted\">\n                  Must be 8-20 characters long.\n                </small></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Custom Forms #2</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Select</div> <div class=\"form-group\"><label>Choose One</label> <select class=\"custom-select\"><option selected=\"selected\">Open this select menu</option> <option value=\"1\">One</option> <option value=\"2\">Two</option> <option value=\"3\">Three</option></select></div> <div class=\"section-title\">File Browser</div> <div class=\"custom-file\"><input type=\"file\" id=\"customFile\" class=\"custom-file-input\"> <label for=\"customFile\" class=\"custom-file-label\">Choose file</label></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Input Group Text</h4></div> <div class=\"card-body\"><div class=\"form-group\"><div class=\"input-group mb-2\"><div class=\"input-group-prepend\"><div class=\"input-group-text\">@</div></div> <input type=\"text\" id=\"inlineFormInputGroup\" placeholder=\"Username\" class=\"form-control\"></div></div> <div class=\"form-group\"><div class=\"input-group mb-2\"><input type=\"text\" id=\"inlineFormInputGroup2\" placeholder=\"Your URL\" class=\"form-control text-right\"> <div class=\"input-group-append\"><div class=\"input-group-text\">.com</div></div></div></div> <div class=\"form-group\"><div class=\"input-group mb-3\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div> <input type=\"text\" aria-label=\"Amount (to the nearest dollar)\" class=\"form-control\"> <div class=\"input-group-append\"><span class=\"input-group-text\">.00</span></div></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Input Group #2</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Multiple Addons</div> <div class=\"form-group\"><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\">First and last name</span></div> <input type=\"text\" class=\"form-control\"> <input type=\"text\" class=\"form-control\"></div></div> <div class=\"section-title\">Button</div> <div class=\"form-group\"><div class=\"input-group mb-3\"><input type=\"text\" placeholder aria-label class=\"form-control\"> <div class=\"input-group-append\"><button type=\"button\" class=\"btn btn-primary\">\n                    Button\n                  </button></div></div></div> <div class=\"section-title\">Select With Button</div> <div class=\"form-group\"><div class=\"input-group\"><select id=\"inputGroupSelect04\" class=\"custom-select\"><option selected=\"selected\">Choose...</option> <option value=\"1\">One</option> <option value=\"2\">Two</option> <option value=\"3\">Three</option></select> <div class=\"input-group-append\"><button type=\"button\" class=\"btn btn-primary\">\n                    Button\n                  </button></div></div></div> <div class=\"section-title\">Select, Button &amp; Input</div> <div class=\"form-group\"><div class=\"input-group\"><select id=\"inputGroupSelect05\" class=\"custom-select\"><option selected=\"selected\">Choose...</option> <option value=\"1\">One</option> <option value=\"2\">Two</option> <option value=\"3\">Three</option></select> <input type=\"text\" class=\"form-control\"> <div class=\"input-group-append\"><button type=\"button\" class=\"btn btn-primary\">\n                    Button\n                  </button></div></div></div></div></div></div> <div class=\"col-12 col-md-6 col-lg-6\"><div class=\"card\"><div class=\"card-header\"><h4>Sizing</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Text</div> <div class=\"form-group\"><label>Text <code>.form-control-sm</code></label> <input type=\"text\" class=\"form-control form-control-sm\"></div> <div class=\"form-group\"><label>Text</label> <input type=\"text\" class=\"form-control\"></div> <div class=\"form-group\"><label>Text <code>.form-control-lg</code></label> <input type=\"text\" class=\"form-control form-control-lg\"></div> <div class=\"section-title\">Select</div> <div class=\"form-group\"><label>Select <code>.form-control-sm</code></label> <select class=\"form-control form-control-sm\"><option>Option 1</option> <option>Option 2</option> <option>Option 3</option></select></div> <div class=\"form-group\"><label>Select</label> <select class=\"form-control\"><option>Option 1</option> <option>Option 2</option> <option>Option 3</option></select></div> <div class=\"form-group\"><label>Select <code>.form-control-lg</code></label> <select class=\"form-control form-control-lg\"><option>Option 1</option> <option>Option 2</option> <option>Option 3</option></select></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Disabled &amp; Read Only</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Text</div> <div class=\"form-group\"><label>Readonly</label> <input type=\"text\" readonly=\"readonly\" class=\"form-control\"></div> <div class=\"form-group\"><label>Readonly Plain Text</label> <input type=\"text\" readonly=\"readonly\" value=\"Hello!\" class=\"form-control-plaintext\"></div> <div class=\"section-title\">Select</div> <div class=\"form-group\"><label>Select Disabled</label> <select disabled=\"disabled\" class=\"form-control\"><option>Option 1</option> <option>Option 2</option> <option>Option 3</option></select></div> <div class=\"section-title\">Checkbox</div> <div class=\"form-group\"><div class=\"form-check\"><input type=\"checkbox\" value id=\"defaultCheck2\" disabled=\"disabled\" class=\"form-check-input\"> <label for=\"defaultCheck2\" class=\"form-check-label\">\n                  Disabled checkbox\n                </label></div></div> <div class=\"section-title\">Radio</div> <div class=\"form-group\"><div class=\"form-check\"><input type=\"radio\" value id=\"radioDisabled\" disabled=\"disabled\" class=\"form-check-input\"> <label for=\"radioDisabled\" class=\"form-check-label\">\n                  Disabled radio\n                </label></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Inline</h4></div> <div class=\"card-body\"><div class=\"form-group\"><label class=\"d-block\">Inline Checkbox</label> <div class=\"form-check form-check-inline\"><input type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" class=\"form-check-input\"> <label for=\"inlineCheckbox1\" class=\"form-check-label\">1</label></div> <div class=\"form-check form-check-inline\"><input type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\" class=\"form-check-input\"> <label for=\"inlineCheckbox2\" class=\"form-check-label\">2</label></div> <div class=\"form-check form-check-inline\"><input type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\" disabled=\"disabled\" class=\"form-check-input\"> <label for=\"inlineCheckbox3\" class=\"form-check-label\">3 (disabled)</label></div></div> <div class=\"form-group\"><label class=\"d-block\">Inline Radio</label> <div class=\"form-check form-check-inline\"><input type=\"radio\" id=\"inlineradio1\" value=\"option1\" class=\"form-check-input\"> <label for=\"inlineradio1\" class=\"form-check-label\">1</label></div> <div class=\"form-check form-check-inline\"><input type=\"radio\" id=\"inlineradio2\" value=\"option2\" class=\"form-check-input\"> <label for=\"inlineradio2\" class=\"form-check-label\">2</label></div> <div class=\"form-check form-check-inline\"><input type=\"radio\" id=\"inlineradio3\" value=\"option3\" disabled=\"disabled\" class=\"form-check-input\"> <label for=\"inlineCheckbox3\" class=\"form-check-label\">3 (disabled)</label></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Horizontal Form</h4></div> <div class=\"card-body\"><div class=\"form-row\"><div class=\"form-group col-md-6\"><label for=\"inputEmail4\">Email</label> <input type=\"email\" id=\"inputEmail4\" placeholder=\"Email\" class=\"form-control\"></div> <div class=\"form-group col-md-6\"><label for=\"inputPassword4\">Password</label> <input type=\"password\" id=\"inputPassword4\" placeholder=\"Password\" class=\"form-control\"></div></div> <div class=\"form-group\"><label for=\"inputAddress\">Address</label> <input type=\"text\" id=\"inputAddress\" placeholder=\"1234 Main St\" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"inputAddress2\">Address 2</label> <input type=\"text\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\" class=\"form-control\"></div> <div class=\"form-row\"><div class=\"form-group col-md-6\"><label for=\"inputCity\">City</label> <input type=\"text\" id=\"inputCity\" class=\"form-control\"></div> <div class=\"form-group col-md-4\"><label for=\"inputState\">State</label> <select id=\"inputState\" class=\"form-control\"><option selected=\"selected\">Choose...</option> <option>...</option></select></div> <div class=\"form-group col-md-2\"><label for=\"inputZip\">Zip</label> <input type=\"text\" id=\"inputZip\" class=\"form-control\"></div></div> <div class=\"form-group mb-0\"><div class=\"form-check\"><input type=\"checkbox\" id=\"gridCheck\" class=\"form-check-input\"> <label for=\"gridCheck\" class=\"form-check-label\">\n                  Check me out\n                </label></div></div></div> <div class=\"card-footer\"><button class=\"btn btn-primary\">Submit</button></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Horizontal Form</h4></div> <div class=\"card-body\"><div class=\"form-group row\"><label for=\"inputEmail3\" class=\"col-sm-3 col-form-label\">Email</label> <div class=\"col-sm-9\"><input type=\"email\" id=\"inputEmail3\" placeholder=\"Email\" class=\"form-control\"></div></div> <div class=\"form-group row\"><label for=\"inputPassword3\" class=\"col-sm-3 col-form-label\">Password</label> <div class=\"col-sm-9\"><input type=\"password\" id=\"inputPassword3\" placeholder=\"Password\" class=\"form-control\"></div></div> <fieldset class=\"form-group\"><div class=\"row\"><div class=\"col-form-label col-sm-3 pt-0\">Radios</div> <div class=\"col-sm-9\"><div class=\"form-check\"><input type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked=\"checked\" class=\"form-check-input\"> <label for=\"gridRadios1\" class=\"form-check-label\">\n                      First radio\n                    </label></div> <div class=\"form-check\"><input type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\" class=\"form-check-input\"> <label for=\"gridRadios2\" class=\"form-check-label\">\n                      Second radio\n                    </label></div> <div class=\"form-check disabled\"><input type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\" disabled=\"disabled\" class=\"form-check-input\"> <label for=\"gridRadios3\" class=\"form-check-label\">\n                      Third disabled radio\n                    </label></div></div></div></fieldset> <div class=\"form-group row\"><div class=\"col-sm-3\">Checkbox</div> <div class=\"col-sm-9\"><div class=\"form-check\"><input type=\"checkbox\" id=\"gridCheck1\" class=\"form-check-input\"> <label for=\"gridCheck1\" class=\"form-check-label\">\n                    Example checkbox\n                  </label></div></div></div></div> <div class=\"card-footer\"><button type=\"submit\" class=\"btn btn-primary\">Sign in</button></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Custom Forms</h4></div> <div class=\"card-body\"><div class=\"section-title mt-0\">Checkbox</div> <div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" id=\"customCheck1\" class=\"custom-control-input\"> <label for=\"customCheck1\" class=\"custom-control-label\">Check this custom checkbox</label></div> <div class=\"section-title\">Checkbox</div> <div class=\"custom-control custom-radio\"><input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\"> <label for=\"customRadio1\" class=\"custom-control-label\">Toggle this custom radio</label></div> <div class=\"custom-control custom-radio\"><input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\"> <label for=\"customRadio2\" class=\"custom-control-label\">Or toggle this other custom radio</label></div> <div class=\"section-title\">Inline</div> <div class=\"custom-control custom-radio custom-control-inline\"><input type=\"radio\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\"> <label for=\"customRadioInline1\" class=\"custom-control-label\">Toggle this custom radio</label></div> <div class=\"custom-control custom-radio custom-control-inline\"><input type=\"radio\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\"> <label for=\"customRadioInline2\" class=\"custom-control-label\">Or toggle this other custom radio</label></div> <div class=\"section-title\">Disabled</div> <div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" id=\"customCheckDisabled\" disabled=\"disabled\" class=\"custom-control-input\"> <label for=\"customCheckDisabled\" class=\"custom-control-label\">Check this custom checkbox</label></div> <div class=\"custom-control custom-radio\"><input type=\"radio\" name=\"radioDisabled\" disabled=\"disabled\" class=\"custom-control-input\"> <label class=\"custom-control-label\">Toggle this custom radio</label></div></div></div> <div class=\"card\"><div class=\"card-header\"><h4>Learn More</h4></div> <div class=\"card-body\"><div class=\"jumbotron text-center\"><h2>Learn More</h2> <p class=\"lead text-muted mt-3\">\n                All the above form elements are the default of bootstrap and\n                you can learn them on the official documentation provided by\n                Bootstrap.\n              </p> <a href=\"https://getbootstrap.com/docs/4.0/components/forms/\" target=\"_blank\" role=\"button\" class=\"btn btn-primary mt-3\">Learn more</a></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/BootstrapForm.vue?vue&type=template&id=0e3d0f01&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/BootstrapForm.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3fa1c238"
  
)

/* harmony default export */ var BootstrapForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form.js.map