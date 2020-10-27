module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/general","2":"pages/index","3":"pages/starter/blankPage","4":"pages/starter/bootstrap/alert","5":"pages/starter/bootstrap/badge","6":"pages/starter/bootstrap/breadcrumb","7":"pages/starter/bootstrap/buttons","8":"pages/starter/bootstrap/card","9":"pages/starter/bootstrap/carousel","10":"pages/starter/bootstrap/collapse","11":"pages/starter/bootstrap/dropdown","12":"pages/starter/bootstrap/form","13":"pages/starter/bootstrap/listGroup","14":"pages/starter/bootstrap/mediaObject","15":"pages/starter/bootstrap/modal","16":"pages/starter/bootstrap/nav","17":"pages/starter/bootstrap/navbar","18":"pages/starter/bootstrap/pagination","19":"pages/starter/bootstrap/popover","20":"pages/starter/bootstrap/progress","21":"pages/starter/bootstrap/table","22":"pages/starter/bootstrap/tooltip","23":"pages/starter/bootstrap/typography","24":"pages/starter/layout/defaultLayout","25":"pages/starter/layout/topNavigation","26":"pages/stisla/components/article","27":"pages/stisla/components/avatar","28":"pages/stisla/components/chatBox","29":"pages/stisla/components/emptyState","30":"pages/stisla/components/gallery","31":"pages/stisla/components/hero","32":"pages/stisla/components/multipleUpload","33":"pages/stisla/components/pricing","34":"pages/stisla/components/tab","35":"pages/stisla/components/table","36":"pages/stisla/components/user","37":"pages/stisla/components/wizard"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/Footer.vue?vue&type=template&id=611c5bf8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<footer class=\"main-footer\" data-v-611c5bf8><div class=\"footer-left\" data-v-611c5bf8>\n      Copyright © 2020\n      <div class=\"bullet\" data-v-611c5bf8></div>\n      Design By <a href=\"https://nauval.in/\" data-v-611c5bf8>Muhamad Nauval Azhar</a></div> <div class=\"footer-right\" data-v-611c5bf8>\n      ⚡️ Nuxt templating by\n      <a href=\"https://romadhanedy.my.id\" data-v-611c5bf8>Romadhan Prasetyo</a></div></footer>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Footer.vue?vue&type=template&id=611c5bf8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/layouts/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "611c5bf8",
  "540a2054"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(5).default})


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/Header.vue?vue&type=template&id=18070fa9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"navbar navbar-expand-lg main-navbar\" data-v-18070fa9><form class=\"form-inline mr-auto\" data-v-18070fa9><ul class=\"navbar-nav mr-3\" data-v-18070fa9><li data-v-18070fa9><a href=\"#\" data-toggle=\"sidebar\" class=\"nav-link nav-link-lg\" data-v-18070fa9><i class=\"fas fa-bars\" data-v-18070fa9></i></a></li> <li data-v-18070fa9><a href=\"#\" data-toggle=\"search\" class=\"nav-link nav-link-lg d-sm-none\" data-v-18070fa9><i class=\"fas fa-search\" data-v-18070fa9></i></a></li></ul> <div class=\"search-element\" data-v-18070fa9><input type=\"search\" placeholder=\"Search\" aria-label=\"Search\" data-width=\"250\" class=\"form-control\" data-v-18070fa9> <button type=\"submit\" class=\"btn\" data-v-18070fa9><i class=\"fas fa-search\" data-v-18070fa9></i></button> <div class=\"search-backdrop\" data-v-18070fa9></div> <div class=\"search-result\" data-v-18070fa9><div class=\"search-header\" data-v-18070fa9>Histories</div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>How to hack NASA using CSS</a> <a href=\"#\" class=\"search-close\" data-v-18070fa9><i class=\"fas fa-times\" data-v-18070fa9></i></a></div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>Kodinger.com</a> <a href=\"#\" class=\"search-close\" data-v-18070fa9><i class=\"fas fa-times\" data-v-18070fa9></i></a></div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>#Stisla</a> <a href=\"#\" class=\"search-close\" data-v-18070fa9><i class=\"fas fa-times\" data-v-18070fa9></i></a></div> <div class=\"search-header\" data-v-18070fa9>Result</div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9><img width=\"30\" src=\"/img/products/product-3-50.png\" alt=\"product\" class=\"mr-3 rounded\" data-v-18070fa9>\n              oPhone S9 Limited Edition\n            </a></div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9><img width=\"30\" src=\"/img/products/product-2-50.png\" alt=\"product\" class=\"mr-3 rounded\" data-v-18070fa9>\n              Drone X2 New Gen-7\n            </a></div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9><img width=\"30\" src=\"/img/products/product-1-50.png\" alt=\"product\" class=\"mr-3 rounded\" data-v-18070fa9>\n              Headphone Blitz\n            </a></div> <div class=\"search-header\" data-v-18070fa9>Projects</div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9><div class=\"search-icon bg-danger text-white mr-3\" data-v-18070fa9><i class=\"fas fa-code\" data-v-18070fa9></i></div>\n              Stisla Admin Template\n            </a></div> <div class=\"search-item\" data-v-18070fa9><a href=\"#\" data-v-18070fa9><div class=\"search-icon bg-primary text-white mr-3\" data-v-18070fa9><i class=\"fas fa-laptop\" data-v-18070fa9></i></div>\n              Create a new Homepage Design\n            </a></div></div></div></form> <ul class=\"navbar-nav navbar-right\" data-v-18070fa9><li class=\"dropdown dropdown-list-toggle\" data-v-18070fa9><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link nav-link-lg message-toggle beep\" data-v-18070fa9><i class=\"far fa-envelope\" data-v-18070fa9></i></a> <div class=\"dropdown-menu dropdown-list dropdown-menu-right\" data-v-18070fa9><div class=\"dropdown-header\" data-v-18070fa9>\n            Messages\n            <div class=\"float-right\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>Mark All As Read</a></div></div> <div class=\"dropdown-list-content dropdown-list-message\" data-v-18070fa9><a href=\"#\" class=\"dropdown-item dropdown-item-unread\" data-v-18070fa9><div class=\"dropdown-item-avatar\" data-v-18070fa9><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" class=\"rounded-circle\" data-v-18070fa9> <div class=\"is-online\" data-v-18070fa9></div></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>Kusnaedi</b> <p data-v-18070fa9>Hello, Bro!</p> <div class=\"time\" data-v-18070fa9>10 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item dropdown-item-unread\" data-v-18070fa9><div class=\"dropdown-item-avatar\" data-v-18070fa9><img alt=\"image\" src=\"/img/avatar/avatar-2.png\" class=\"rounded-circle\" data-v-18070fa9></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>Dedik Sugiharto</b> <p data-v-18070fa9>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit\n                </p> <div class=\"time\" data-v-18070fa9>12 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item dropdown-item-unread\" data-v-18070fa9><div class=\"dropdown-item-avatar\" data-v-18070fa9><img alt=\"image\" src=\"/img/avatar/avatar-3.png\" class=\"rounded-circle\" data-v-18070fa9> <div class=\"is-online\" data-v-18070fa9></div></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>Agung Ardiansyah</b> <p data-v-18070fa9>\n                  Sunt in culpa qui officia deserunt mollit anim id est\n                  laborum.\n                </p> <div class=\"time\" data-v-18070fa9>12 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item\" data-v-18070fa9><div class=\"dropdown-item-avatar\" data-v-18070fa9><img alt=\"image\" src=\"/img/avatar/avatar-4.png\" class=\"rounded-circle\" data-v-18070fa9></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>Ardian Rahardiansyah</b> <p data-v-18070fa9>\n                  Duis aute irure dolor in reprehenderit in voluptate velit\n                  ess\n                </p> <div class=\"time\" data-v-18070fa9>16 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item\" data-v-18070fa9><div class=\"dropdown-item-avatar\" data-v-18070fa9><img alt=\"image\" src=\"/img/avatar/avatar-5.png\" class=\"rounded-circle\" data-v-18070fa9></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>Alfa Zulkarnain</b> <p data-v-18070fa9>\n                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                </p> <div class=\"time\" data-v-18070fa9>Yesterday</div></div></a></div> <div class=\"dropdown-footer text-center\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>View All <i class=\"fas fa-chevron-right\" data-v-18070fa9></i></a></div></div></li> <li class=\"dropdown dropdown-list-toggle\" data-v-18070fa9><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link notification-toggle nav-link-lg beep\" data-v-18070fa9><i class=\"far fa-bell\" data-v-18070fa9></i></a> <div class=\"dropdown-menu dropdown-list dropdown-menu-right\" data-v-18070fa9><div class=\"dropdown-header\" data-v-18070fa9>\n            Notifications\n            <div class=\"float-right\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>Mark All As Read</a></div></div> <div class=\"dropdown-list-content dropdown-list-icons\" data-v-18070fa9><a href=\"#\" class=\"dropdown-item dropdown-item-unread\" data-v-18070fa9><div class=\"dropdown-item-icon bg-primary text-white\" data-v-18070fa9><i class=\"fas fa-code\" data-v-18070fa9></i></div> <div class=\"dropdown-item-desc\" data-v-18070fa9>\n                Template update is available now!\n                <div class=\"time text-primary\" data-v-18070fa9>2 Min Ago</div></div></a> <a href=\"#\" class=\"dropdown-item\" data-v-18070fa9><div class=\"dropdown-item-icon bg-info text-white\" data-v-18070fa9><i class=\"far fa-user\" data-v-18070fa9></i></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>You</b> and <b data-v-18070fa9>Dedik Sugiharto</b> are now friends\n                <div class=\"time\" data-v-18070fa9>10 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item\" data-v-18070fa9><div class=\"dropdown-item-icon bg-success text-white\" data-v-18070fa9><i class=\"fas fa-check\" data-v-18070fa9></i></div> <div class=\"dropdown-item-desc\" data-v-18070fa9><b data-v-18070fa9>Kusnaedi</b> has moved task <b data-v-18070fa9>Fix bug header</b> to\n                <b data-v-18070fa9>Done</b> <div class=\"time\" data-v-18070fa9>12 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item\" data-v-18070fa9><div class=\"dropdown-item-icon bg-danger text-white\" data-v-18070fa9><i class=\"fas fa-exclamation-triangle\" data-v-18070fa9></i></div> <div class=\"dropdown-item-desc\" data-v-18070fa9>\n                Low disk space. Let's clean it!\n                <div class=\"time\" data-v-18070fa9>17 Hours Ago</div></div></a> <a href=\"#\" class=\"dropdown-item\" data-v-18070fa9><div class=\"dropdown-item-icon bg-info text-white\" data-v-18070fa9><i class=\"fas fa-bell\" data-v-18070fa9></i></div> <div class=\"dropdown-item-desc\" data-v-18070fa9>\n                Welcome to Stisla template!\n                <div class=\"time\" data-v-18070fa9>Yesterday</div></div></a></div> <div class=\"dropdown-footer text-center\" data-v-18070fa9><a href=\"#\" data-v-18070fa9>View All <i class=\"fas fa-chevron-right\" data-v-18070fa9></i></a></div></div></li> <li class=\"dropdown\" data-v-18070fa9><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle nav-link-lg nav-link-user\" data-v-18070fa9><img alt=\"image\" src=\"/img/avatar/avatar-1.png\" class=\"rounded-circle mr-1\" data-v-18070fa9> <div class=\"d-sm-none d-lg-inline-block\" data-v-18070fa9>Hi, Ujang Maman</div></a> <div class=\"dropdown-menu dropdown-menu-right\" data-v-18070fa9><div class=\"dropdown-title\" data-v-18070fa9>Logged in 5 min ago</div> <a href=\"features-profile.html\" class=\"dropdown-item has-icon\" data-v-18070fa9><i class=\"far fa-user\" data-v-18070fa9></i> Profile\n          </a> <a href=\"features-activities.html\" class=\"dropdown-item has-icon\" data-v-18070fa9><i class=\"fas fa-bolt\" data-v-18070fa9></i> Activities\n          </a> <a href=\"features-settings.html\" class=\"dropdown-item has-icon\" data-v-18070fa9><i class=\"fas fa-cog\" data-v-18070fa9></i> Settings\n          </a> <div class=\"dropdown-divider\" data-v-18070fa9></div> <a href=\"#\" class=\"dropdown-item has-icon text-danger\" data-v-18070fa9><i class=\"fas fa-sign-out-alt\" data-v-18070fa9></i> Logout\n          </a></div></li></ul></nav>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Header.vue?vue&type=template&id=18070fa9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/layouts/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Header.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "18070fa9",
  "753c8446"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/Sidebar.vue?vue&type=template&id=9a371494&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-sidebar sidebar-style-2\">","</div>",[_vm._ssrNode("<aside id=\"sidebar-wrapper\">","</aside>",[_vm._ssrNode("<div class=\"sidebar-brand\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Nuxt Stisla")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-brand sidebar-brand-sm\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Ns")])],1),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sidebar-menu\">","</ul>",[_vm._ssrNode("<li class=\"menu-header\">Dashboard</li> "),_vm._ssrNode("<li"+(_vm._ssrClass("dropdown",_vm.menu('dashboard')))+">","</li>",[_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"nav-link has-dropdown\"><i class=\"fas fa-fire\"></i><span>Dashboard</span></a> "),_vm._ssrNode("<ul class=\"dropdown-menu\">","</ul>",[_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('generalDashboard')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/general"}},[_vm._v("General Dashboard")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('ecommerceDashboard')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Ecommerce Dashboard")])],1)],2)],2),_vm._ssrNode(" <li class=\"menu-header\">Starter</li> "),_vm._ssrNode("<li"+(_vm._ssrClass("dropdown",_vm.menu('layout')))+">","</li>",[_vm._ssrNode("<a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"nav-link has-dropdown\"><i class=\"fas fa-columns\"></i> <span>Layout</span></a> "),_vm._ssrNode("<ul class=\"dropdown-menu\">","</ul>",[_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('defaultLayout')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/layout/defaultLayout"}},[_vm._v("Default Layout")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('topNavigation')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/layout/topNavigation"}},[_vm._v("Top Navigation")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('blankPage')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/blankPage"}},[_c('i',{staticClass:"far fa-square"}),_vm._v(" "),_c('span',[_vm._v("Blank Page")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass("dropdown",_vm.menu('bootstrap')))+">","</li>",[_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"nav-link has-dropdown\"><i class=\"fas fa-th\"></i> <span>Bootstrap</span></a> "),_vm._ssrNode("<ul class=\"dropdown-menu\">","</ul>",[_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('alert')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/alert"}},[_vm._v("Alert")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('badge')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/badge"}},[_vm._v("Badge")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('breadcrumb')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/breadcrumb"}},[_vm._v("Breadcrumb")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('buttons')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/buttons"}},[_vm._v("Buttons")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('card')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/card"}},[_vm._v("Card")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('carousel')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/carousel"}},[_vm._v("Carousel")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('collapse')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/collapse"}},[_vm._v("Collapse")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('dropdown')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/dropdown"}},[_vm._v("Dropdown")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('form')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/form"}},[_vm._v("Form")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('listGroup')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/listGroup"}},[_vm._v("List Group")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('mediaObject')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/mediaObject"}},[_vm._v("Media Object")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('modal')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/modal"}},[_vm._v("Modal")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('nav')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/nav"}},[_vm._v("Nav")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('navbar')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/navbar"}},[_vm._v("Navbar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('pagination')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/pagination"}},[_vm._v("Pagination")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('popover')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/popover"}},[_vm._v("Popover")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('progress')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/progress"}},[_vm._v("Progress")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('table')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/table"}},[_vm._v("Table")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('tooltip')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/tooltip"}},[_vm._v("Tooltip")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('typography')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/starter/bootstrap/typography"}},[_vm._v("Typography")])],1)],2)],2),_vm._ssrNode(" <li class=\"menu-header\">Stisla</li> "),_vm._ssrNode("<li class=\"dropdown\">","</li>",[_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"nav-link has-dropdown\"><i class=\"fas fa-th-large\"></i> <span>Components</span></a> "),_vm._ssrNode("<ul class=\"dropdown-menu\">","</ul>",[_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('article')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/article"}},[_vm._v("Article")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('avatar')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link beep beep-sidebar",attrs:{"to":"/stisla/components/avatar"}},[_vm._v("Avatar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('chatBox')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/chatBox"}},[_vm._v("Chat Box")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('emptyState')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link beep beep-sidebar",attrs:{"to":"/stisla/components/emptyState"}},[_vm._v("Empty State")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('gallery')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/gallery"}},[_vm._v("Gallery")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('hero')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link beep beep-sidebar",attrs:{"to":"/stisla/components/hero"}},[_vm._v("Hero")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('multipleUpload')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/multipleUpload"}},[_vm._v("Multiple Upload")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('pricing')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link beep beep-sidebar",attrs:{"to":"/stisla/components/pricing"}},[_vm._v("Pricing")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('tab')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/tab"}},[_vm._v("Tab")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('table')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/table"}},[_vm._v("Table")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('user')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/stisla/components/user"}},[_vm._v("User")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.menu('wizard')))+">","</li>",[_c('nuxt-link',{staticClass:"nav-link beep beep-sidebar",attrs:{"to":"/stisla/components/wizard"}},[_vm._v("Wizard")])],1)],2)],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Sidebar.vue?vue&type=template&id=9a371494&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      pages: state => state.pages
    })
  },
  methods: {
    menu(menuName) {
      const name = menuName,
            current_page = this.pages.current_page;
      const split_current_page = current_page.split("-");

      if (split_current_page.length > 0) {
        if (name == split_current_page[0]) {
          return "active";
        }

        if (name == split_current_page[1]) {
          return "active";
        }
      } else {
        if (name == current_page) {
          return "active";
        }

        return "";
      }
    }

  }
});
// CONCATENATED MODULE: ./components/layouts/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5437331a"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJsb2FkZXItMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik00My45MzUsMjUuMTQ1YzAtMTAuMzE4LTguMzY0LTE4LjY4My0xOC42ODMtMTguNjgzYy0xMC4zMTgsMC0xOC42ODMsOC4zNjUtMTguNjgzLDE4LjY4M2g0LjA2OGMwLTguMDcxLDYuNTQzLTE0LjYxNSwxNC42MTUtMTQuNjE1YzguMDcyLDAsMTQuNjE1LDYuNTQzLDE0LjYxNSwxNC42MTVINDMuOTM1eiI+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIKICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgdHlwZT0icm90YXRlIgogIGZyb209IjAgMjUgMjUiCiAgdG89IjM2MCAyNSAyNSIKICBkdXI9IjAuNnMiCiAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KPC9wYXRoPgo8L3N2Zz4K"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(66);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e622d370", content, true)

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(14);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_25___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_26___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_27___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_28___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_29___ = __webpack_require__(54);
var ___CSS_LOADER_URL_IMPORT_30___ = __webpack_require__(55);
var ___CSS_LOADER_URL_IMPORT_31___ = __webpack_require__(56);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___, { hash: "#Nunito" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___, { hash: "#Nunito" });
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_25___, { hash: "#Nunito" });
var ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_27___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_31___, { hash: "#Nunito" });
// Module
exports.push([module.i, "@charset \"UTF-8\";.btn:active,.btn:active:focus,.btn:focus,.custom-select:focus,.form-control:focus{box-shadow:none!important;outline:none}a{color:#6777ef;font-weight:500;transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}a:not(.btn-social-icon):not(.btn-social):not(.page-link) .fab,a:not(.btn-social-icon):not(.btn-social):not(.page-link) .fal,a:not(.btn-social-icon):not(.btn-social):not(.page-link) .far,a:not(.btn-social-icon):not(.btn-social):not(.page-link) .fas,a:not(.btn-social-icon):not(.btn-social):not(.page-link) .ion{margin-left:4px}.bg-primary{background-color:#6777ef!important}.bg-secondary{background-color:#cdd3d8!important}.bg-success{background-color:#63ed7a!important}.bg-info{background-color:#3abaf4!important}.bg-warning{background-color:#ffa426!important}.bg-danger{background-color:#fc544b!important}.bg-light{background-color:#e3eaef!important}.bg-dark{background-color:#191d21!important}.text-primary,.text-primary-all *,.text-primary-all :after,.text-primary-all :before{color:#6777ef!important}.text-secondary,.text-secondary-all *,.text-secondary-all :after,.text-secondary-all :before{color:#cdd3d8!important}.text-success,.text-success-all *,.text-success-all :after,.text-success-all :before{color:#63ed7a!important}.text-info,.text-info-all *,.text-info-all :after,.text-info-all :before{color:#3abaf4!important}.text-warning,.text-warning-all *,.text-warning-all :after,.text-warning-all :before{color:#ffa426!important}.text-danger,.text-danger-all *,.text-danger-all :after,.text-danger-all :before{color:#fc544b!important}.text-light,.text-light-all *,.text-light-all :after,.text-light-all :before{color:#e3eaef!important}.text-white,.text-white-all *,.text-white-all :after,.text-white-all :before{color:#fff!important}.text-dark,.text-dark-all *,.text-dark-all :after,.text-dark-all :before{color:#191d21!important}.font-weight-normal{font-weight:500!important}.lead{line-height:34px}@media (max-width:575.98px){.lead{font-size:17px;line-height:30px}}h1,h2,h3,h4,h5,h6{font-weight:700}ol,p,ul:not(.list-unstyled){line-height:28px}.shadow{box-shadow:0 4px 8px rgba(0,0,0,.03)}.text-muted{color:#98a6ad!important}.custom-file-label,.custom-select,.form-control,.input-group-text{background-color:#fdfdff;border-color:#e4e6fc}.custom-file-label:focus,.custom-select:focus,.form-control:focus,.input-group-text:focus{background-color:#fefeff;border-color:#95a0f4}.form-control:not(.form-control-sm):not(.form-control-lg),.input-group-text,select.form-control:not([size]):not([multiple]){font-size:14px;padding:10px 15px;height:42px}textarea.form-control{height:64px!important}.custom-control{line-height:1.6rem}.custom-file,.custom-file-label,.custom-file-label:after,.custom-select,.form-control[type=color],select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 6px)}.form-control.creditcard{background-position:98%;background-repeat:no-repeat;background-size:40px;padding-right:60px}.form-control.creditcard.americanexpress{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.form-control.creditcard.dinersclub{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.form-control.creditcard.discover{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.form-control.creditcard.jcb{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}.form-control.creditcard.mastercard{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}.form-control.creditcard.visa{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")}.form-group{margin-bottom:25px}.form-group .control-label,.form-group>label{font-weight:600;color:#34395e;font-size:12px;letter-spacing:.5px}.form-group.floating-addon{position:relative}.form-group.floating-addon .input-group-prepend{position:absolute;top:0;left:0;height:100%;z-index:5}.form-group.floating-addon:not(.floating-addon-not-append) .input-group-append{position:absolute;top:0;left:0;z-index:5;left:auto;right:0}.form-group.floating-addon .input-group-append .input-group-text,.form-group.floating-addon .input-group-prepend .input-group-text{border-color:transparent;background-color:transparent;font-size:20px}.form-group.floating-addon .form-control{border-radius:3px;padding-left:40px}.form-group.floating-addon .form-control+.form-control{border-radius:0 3px 3px 0;padding-left:15px}.input-group-append [class*=btn-outline-]{background-color:#fdfdff}.form-text{font-size:12px;line-height:22px}.custom-control-input:checked~.custom-control-label:before,.custom-radio .custom-control-input:checked~.custom-control-label:before{background-color:#6777ef!important}.custom-file-label{line-height:2.2}.custom-file-label:after{height:calc(2.25rem + 4px);line-height:2.2;border-color:transparent}.custom-file-label:active,.custom-file-label:focus{box-shadow:none;outline:none}.custom-file-input:focus+.custom-file-label{box-shadow:none;border-color:#6777ef}.custom-file-input:focus+.custom-file-label:after{border-color:transparent}.selectgroup{display:inline-flex}.selectgroup-item{flex-grow:1;position:relative}.selectgroup-item+.selectgroup-item{margin-left:-1px}.selectgroup-item:not(:first-child) .selectgroup-button{border-top-left-radius:0;border-bottom-left-radius:0}.selectgroup-item:not(:last-child) .selectgroup-button{border-top-right-radius:0;border-bottom-right-radius:0}.selectgroup-input{opacity:0;position:absolute;z-index:-1;top:0;left:0}.selectgroup-button{background-color:#fdfdff;border:1px solid #e4e6fc;display:block;text-align:center;padding:0 1rem;height:35px;position:relative;cursor:pointer;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:13px;min-width:2.375rem;line-height:36px}.selectgroup-button-icon{padding-left:.5rem;padding-right:.5rem}.selectgroup-button-icon i{font-size:14px}.selectgroup-input:checked+.selectgroup-button,.selectgroup-input:focus+.selectgroup-button{background-color:#6777ef;color:#fff;z-index:1}.selectgroup-pills{display:block;flex-wrap:wrap;align-items:flex-start}.selectgroup-pills .selectgroup-item{margin-right:.5rem;flex-grow:0}.selectgroup-pills .selectgroup-button{border-radius:50px!important}.custom-switch{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;display:inline-flex;align-items:center;margin:0}.custom-switch-input{position:absolute;z-index:-1;opacity:0}.custom-switches-stacked{display:flex;flex-direction:column}.custom-switches-stacked .custom-switch{margin-bottom:.5rem}.custom-switch-indicator{display:inline-block;height:1.25rem;width:2.25rem;background:#e9ecef;border-radius:50px;position:relative;vertical-align:bottom;border:1px solid rgba(0,40,100,.12);transition:border-color .3s,background-color .3s}.custom-switch-indicator:before{content:\"\";position:absolute;height:calc(1.25rem - 4px);width:calc(1.25rem - 4px);top:1px;left:1px;background:#fff;border-radius:50%;transition:left .3s}.custom-switch-input:checked~.custom-switch-indicator{background:#6777ef}.custom-switch-input:checked~.custom-switch-indicator:before{left:calc(1rem + 1px)}.custom-switch-input:focus~.custom-switch-indicator{border-color:#6777ef}.custom-switch-description{margin-left:.5rem;color:#6e7687;transition:color .3s}.custom-switch-input:checked~.custom-switch-description{color:#495057}.imagecheck{margin:0;position:relative;cursor:pointer}.imagecheck-input{position:absolute;z-index:-1;opacity:0}.imagecheck-figure{background-color:#fdfdff;border:1px solid #e4e6fc;border-radius:3px;margin:0;position:relative}.imagecheck-input:focus~.imagecheck-figure{border-color:#6777ef}.imagecheck-input:checked~.imagecheck-figure{border-color:rgba(0,40,100,.24)}.imagecheck-figure:before{content:\"\";position:absolute;top:.25rem;left:.25rem;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#6777ef url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\") no-repeat 50%/50% 50%;color:#fff;z-index:1;border-radius:3px;opacity:0;transition:opacity .3s}.imagecheck-input:checked~.imagecheck-figure:before{opacity:1}.imagecheck-image{max-width:100%;opacity:.64;transition:opacity .3s}.imagecheck-image:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.imagecheck-image:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.imagecheck-input:checked~.imagecheck-figure .imagecheck-image,.imagecheck-input:focus~.imagecheck-figure .imagecheck-image,.imagecheck:hover .imagecheck-image{opacity:1}.imagecheck-caption{text-align:center;padding:.25rem;color:#9aa0ac;font-size:.875rem;transition:color .3s}.imagecheck-input:checked~.imagecheck-figure .imagecheck-caption,.imagecheck-input:focus~.imagecheck-figure .imagecheck-caption,.imagecheck:hover .imagecheck-caption{color:#495057}.colorinput{margin:0;position:relative;cursor:pointer}.colorinput-input{position:absolute;z-index:-1;opacity:0}.colorinput-color{background-color:#fdfdff;border:1px solid #e4e6fc;display:inline-block;width:1.75rem;height:1.75rem;border-radius:3px;color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.colorinput-color:before{content:\"\";opacity:0;position:absolute;top:.25rem;left:.25rem;height:1.25rem;width:1.25rem;transition:opacity .3s;background:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\") no-repeat 50%/50% 50%}.colorinput-input:checked~.colorinput-color:before{opacity:1}.list-unstyled-border li{border-bottom:1px solid #f9f9f9;padding-bottom:15px;margin-bottom:15px}.list-unstyled-border li .custom-checkbox{margin-right:15px}.list-unstyled-border li:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}.list-unstyled-noborder li:last-child{border-bottom:none}.list-group-item.active{background-color:#6777ef}.list-group-item.disabled{color:#c9d7e0}.list-group-item-primary{background-color:#6777ef;color:#fff}.list-group-item-secondary{background-color:#cdd3d8;color:#fff}.list-group-item-success{background-color:#63ed7a;color:#fff}.list-group-item-danger{background-color:#fc544b;color:#fff}.list-group-item-warning{background-color:#ffa426;color:#fff}.list-group-item-info{background-color:#3abaf4;color:#fff}.list-group-item-light{background-color:#e3eaef;color:#191d21}.list-group-item-dark{background-color:#191d21;color:#fff}.alert{color:#fff;border:none;padding:15px 20px}.alert .alert-title{font-size:18px;font-weight:700;margin-bottom:5px}.alert code{background-color:#fff;border-radius:3px;padding:1px 4px}.alert p{margin-bottom:0}.alert.alert-has-icon{display:flex}.alert.alert-has-icon .alert-icon{margin-top:4px;width:30px}.alert.alert-has-icon .alert-icon .fab,.alert.alert-has-icon .alert-icon .fal,.alert.alert-has-icon .alert-icon .far,.alert.alert-has-icon .alert-icon .fas,.alert.alert-has-icon .alert-icon .ion{font-size:20px}.alert.alert-has-icon .alert-body{flex:1}.alert:not(.alert-light) a{color:#fff}.alert.alert-primary{background-color:#6777ef}.alert.alert-secondary{background-color:#cdd3d8}.alert.alert-success{background-color:#63ed7a}.alert.alert-info{background-color:#3abaf4}.alert.alert-warning{background-color:#ffa426}.alert.alert-danger{background-color:#fc544b}.alert.alert-light{background-color:#e3eaef;color:#191d21}.alert.alert-dark{background-color:#191d21}.card{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;position:relative;margin-bottom:30px}.card .card-body,.card .card-footer,.card .card-header{background-color:transparent;padding:20px 25px}.card .navbar{position:static}.card .card-body{padding-top:20px;padding-bottom:20px}.card .card-body .section-title{margin:30px 0 10px;font-size:16px}.card .card-body .section-title:before{margin-top:8px}.card .card-body .section-title+.section-lead{margin-top:-5px}.card .card-body p{font-weight:500}.card .card-header{border-bottom-color:#f9f9f9;line-height:30px;-ms-grid-row-align:center;align-self:center;width:100%;min-height:70px;padding:15px 25px;display:flex;align-items:center}.card .card-header .btn{margin-top:1px;padding:2px 15px}.card .card-header .btn:not(.note-btn){border-radius:30px}.card .card-header .btn:hover{box-shadow:none}.card .card-header .form-control{height:31px;font-size:13px;border-radius:30px}.card .card-header .form-control+.input-group-btn .btn{margin-top:-1px}.card .card-header h4{font-size:16px;line-height:28px;padding-right:10px;margin-bottom:0}.card .card-header h4+.card-header-action,.card .card-header h4+.card-header-form{margin-left:auto}.card .card-header h4+.card-header-action .btn,.card .card-header h4+.card-header-form .btn{font-size:12px;border-radius:30px!important;padding-left:13px!important;padding-right:13px!important}.card .card-header h4+.card-header-action .btn.active,.card .card-header h4+.card-header-form .btn.active{box-shadow:0 2px 6px #acb5f6;background-color:#6777ef;color:#fff}.card .card-header h4+.card-header-action .dropdown,.card .card-header h4+.card-header-form .dropdown{display:inline}.card .card-header h4+.card-header-action .btn-group .btn,.card .card-header h4+.card-header-form .btn-group .btn{border-radius:0!important}.card .card-header h4+.card-header-action .btn-group .btn:first-child,.card .card-header h4+.card-header-form .btn-group .btn:first-child{border-radius:30px 0 0 30px!important}.card .card-header h4+.card-header-action .btn-group .btn:last-child,.card .card-header h4+.card-header-form .btn-group .btn:last-child{border-radius:0 30px 30px 0!important}.card .card-header h4+.card-header-action .input-group .form-control,.card .card-header h4+.card-header-form .input-group .form-control{border-radius:30px 0 0 30px!important}.card .card-header h4+.card-header-action .input-group .form-control+.input-group-btn .btn,.card .card-header h4+.card-header-action .input-group .input-group-btn+.form-control,.card .card-header h4+.card-header-form .input-group .form-control+.input-group-btn .btn,.card .card-header h4+.card-header-form .input-group .input-group-btn+.form-control{border-radius:0 30px 30px 0!important}.card .card-header h4+.card-header-action .input-group .input-group-btn .btn,.card .card-header h4+.card-header-form .input-group .input-group-btn .btn{margin-top:-1px;border-radius:30px 0 0 30px!important}.card .card-footer{background-color:transparent;border:none}.card.card-mt{margin-top:30px}.card.card-progress:after{content:\" \";position:absolute;top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5);z-index:99}.card.card-progress .card-progress-dismiss{position:absolute;top:66%;left:50%;transform:translate(-50%,-50%);z-index:999;color:#fff!important;padding:5px 13px}.card.card-progress.remove-spinner .card-progress-dismiss{top:50%;transform:translate(-50%,-50%)}.card.card-progress:not(.remove-spinner):after{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");background-size:80px;background-repeat:no-repeat;background-position:50%}.card.card-primary{border-top:2px solid #6777ef}.card.card-secondary{border-top:2px solid #34395e}.card.card-success{border-top:2px solid #63ed7a}.card.card-danger{border-top:2px solid #fc544b}.card.card-warning{border-top:2px solid #ffa426}.card.card-info{border-top:2px solid #3abaf4}.card.card-dark{border-top:2px solid #191d21}.card.card-hero .card-header{padding:40px;background-image:linear-gradient(180deg,#6777ef,#95a0f4);color:#fff;overflow:hidden;height:auto;min-height:auto;display:block}.card.card-hero .card-header h4{font-size:40px;line-height:1}.card.card-hero .card-header .card-description{margin-top:5px;font-size:16px}.card.card-hero .card-header .card-icon{float:right;color:#8c98f3;margin:-60px}.card.card-hero .card-header .card-icon .fab,.card.card-hero .card-header .card-icon .fal,.card.card-hero .card-header .card-icon .far,.card.card-hero .card-header .card-icon .fas,.card.card-hero .card-header .card-icon .ion{font-size:140px}.card.card-statistic-1 .card-header,.card.card-statistic-2 .card-header{border-color:transparent;height:auto;min-height:auto;display:block}.card.card-statistic-1 .card-header h4,.card.card-statistic-2 .card-header h4{line-height:1.2;color:#98a6ad}.card.card-statistic-1 .card-body,.card.card-statistic-2 .card-body{padding-top:0;font-size:26px;font-weight:700;color:#34395e;padding-bottom:0}.card.card-statistic-1,.card.card-statistic-2{display:inline-block;width:100%}.card.card-statistic-1 .card-icon,.card.card-statistic-2 .card-icon{width:80px;height:80px;border-radius:3px;line-height:94px;text-align:center;float:left;margin:10px 15px 10px 10px}.card.card-statistic-1 .card-icon .fab,.card.card-statistic-1 .card-icon .fal,.card.card-statistic-1 .card-icon .far,.card.card-statistic-1 .card-icon .fas,.card.card-statistic-1 .card-icon .ion,.card.card-statistic-2 .card-icon .fab,.card.card-statistic-2 .card-icon .fal,.card.card-statistic-2 .card-icon .far,.card.card-statistic-2 .card-icon .fas,.card.card-statistic-2 .card-icon .ion{font-size:22px;color:#fff}.card.card-statistic-1 .card-icon{line-height:90px}.card.card-statistic-2 .card-icon{width:50px;height:50px;line-height:50px;font-size:22px;margin:25px}.card.card-statistic-1 .card-header,.card.card-statistic-2 .card-header{padding-bottom:0;padding-top:25px}.card.card-statistic-2 .card-body{padding-top:20px}.card.card-statistic-2 .card-body+.card-header,.card.card-statistic-2 .card-header+.card-body{padding-top:0}.card.card-statistic-1 .card-header h4,.card.card-statistic-2 .card-header h4{font-weight:600;font-size:13px;letter-spacing:.5px}.card.card-statistic-1 .card-header h4{margin-bottom:0}.card.card-statistic-2 .card-header h4{text-transform:none;margin-bottom:0}.card.card-statistic-1 .card-body{font-size:20px}.card.card-statistic-2 .card-chart{padding-top:20px;margin-left:-9px;margin-right:-1px;margin-bottom:-15px}.card.card-statistic-2 .card-chart canvas{height:90px!important}.card .card-stats{width:100%;display:inline-block;margin-top:2px;margin-bottom:-6px}.card .card-stats .card-stats-title{padding:15px 25px;background-color:#fff;font-size:13px;font-weight:600;letter-spacing:.3px}.card .card-stats .card-stats-items{display:flex;height:50px;align-items:center}.card .card-stats .card-stats-item{width:33.33333%;text-align:center;padding:5px 20px}.card .card-stats .card-stats-item .card-stats-item-label{font-size:12px;letter-spacing:.5px;margin-top:4px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.card .card-stats .card-stats-item .card-stats-item-count{line-height:1;margin-bottom:8px;font-size:20px;font-weight:700}.card.card-large-icons{display:flex;flex-direction:row}.card.card-large-icons .card-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:150px;border-radius:3px 0 0 3px}.card.card-large-icons .card-icon .fab,.card.card-large-icons .card-icon .fal,.card.card-large-icons .card-icon .far,.card.card-large-icons .card-icon .fas,.card.card-large-icons .card-icon .ion{font-size:60px}.card.card-large-icons .card-body{padding:25px 30px}.card.card-large-icons .card-body h4{font-size:18px}.card.card-large-icons .card-body p{opacity:.6;font-weight:500}.card.card-large-icons .card-body a.card-cta{text-decoration:none}.card.card-large-icons .card-body a.card-cta i{margin-left:7px}.card.bg-danger,.card.bg-dark,.card.bg-info,.card.bg-primary,.card.bg-success,.card.bg-warning{color:#fff}.card.bg-danger .card-header,.card.bg-dark .card-header,.card.bg-info .card-header,.card.bg-primary .card-header,.card.bg-success .card-header,.card.bg-warning .card-header{color:#fff;opacity:.9}@media (max-width:575.98px){.card.card-large-icons{display:inline-block}.card.card-large-icons .card-icon{width:100%;height:200px}}@media (max-width:767.98px){.card .card-header{height:auto;flex-wrap:wrap}.card .card-header h4+.card-header-action,.card .card-header h4+.card-header-form{flex-grow:0;width:100%;margin-top:10px}}@media (min-width:768px) and (max-width:991.98px){.card .card-stats .card-stats-items{height:49px}.card .card-stats .card-stats-items .card-stats-item{padding:5px 7px}.card .card-stats .card-stats-items .card-stats-item .card-stats-item-count{font-size:16px}.card.card-sm-6 .card-chart canvas{height:85px!important}.card.card-hero .card-header{padding:25px}}.table:not(.table-bordered) th,.table td{border-top:none}.table:not(.table-sm):not(.table-md):not(.dataTable) td,.table:not(.table-sm):not(.table-md):not(.dataTable) th{padding:0 25px;height:60px;vertical-align:middle}.table:not(.table-sm) thead th{border-bottom:none;background-color:rgba(0,0,0,.04);color:#666;padding-top:15px;padding-bottom:15px}.table.table-md td,.table.table-md th{padding:10px 15px}.table.table-bordered td,.table.table-bordered th{border-color:#f6f6f6}.table-links{color:#34395e;font-size:12px;margin-top:5px;opacity:0;transition:all .3s}.table-links a{color:#666}table tr:hover .table-links{opacity:1}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.02)}@media (max-width:575.98px){.table-responsive table{min-width:800px}}.tooltip{font-size:12px}.tooltip-inner{padding:7px 13px}.modal-body,.modal-footer,.modal-header{padding:25px}.modal-body,.modal-footer{padding-top:15px}.modal-footer{padding-bottom:15px}.modal-header{border-bottom:none;padding-bottom:5px}.modal-header h5{font-size:18px}.modal-footer{border-top:none;border-radius:0 0 3px 3px}.modal-content{max-width:100%;border:none;box-shadow:0 3px 8px rgba(0,0,0,.05)}.modal.show .modal-content{box-shadow:0 4px 15px rgba(0,0,0,.2)}.modal-progress .modal-content{position:relative}.modal-progress .modal-content:after{content:\" \";position:absolute;top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.5);z-index:999;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");background-size:80px;background-repeat:no-repeat;background-position:50%;border-radius:3px}.modal-part{display:none}.nav-tabs .nav-item .nav-link{color:#6777ef}.nav-tabs .nav-item .nav-link.active{color:#000}.tab-content>.tab-pane{padding:10px 0;line-height:24px}.tab-bordered .tab-pane{padding:15px;border:1px solid #ededed;margin-top:-1px}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#6777ef}.nav-pills .nav-item .nav-link{color:#6777ef;padding-left:15px!important;padding-right:15px!important}.nav-pills .nav-item .nav-link:hover{background-color:#f6f7fe}.nav-pills .nav-item .nav-link.active{box-shadow:0 2px 6px #acb5f6;color:#fff;background-color:#6777ef}.nav-pills .nav-item .nav-link .badge{padding:5px 8px;margin-left:5px}.nav .nav-item .nav-link .fab,.nav .nav-item .nav-link .fal,.nav .nav-item .nav-link .far,.nav .nav-item .nav-link .fas,.nav .nav-item .nav-link .ion{margin-right:3px;font-size:12px}.page-item .page-link{color:#6777ef;border-radius:3px;margin:0 3px}.page-item.active .page-link{background-color:#6777ef;border-color:#6777ef}.page-item.disabled .page-link{color:#6777ef;opacity:.6}.page-item.disabled .page-link,.page-link{border-color:transparent;background-color:#f9fafe}.page-link{font-weight:600}.page-link:hover{background-color:#6777ef;color:#fff;border-color:transparent}.page-link:focus{box-shadow:none}.badges .badge{margin:0 8px 10px 0}.badge{vertical-align:middle;padding:7px 12px;font-weight:600;letter-spacing:.3px;border-radius:30px;font-size:12px}.badge.badge-warning{color:#fff}.badge.badge-primary{background-color:#6777ef}.badge.badge-secondary{background-color:#34395e}.badge.badge-success{background-color:#63ed7a}.badge.badge-info{background-color:#3abaf4}.badge.badge-danger{background-color:#fc544b}.badge.badge-light{background-color:#e3eaef;color:#191d21}.badge.badge-white{background-color:#fff;color:#191d21}.badge.badge-dark{background-color:#191d21}h1 .badge{font-size:24px;padding:16px 21px}h2 .badge{font-size:22px;padding:14px 19px}h3 .badge{font-size:18px;padding:11px 16px}h4 .badge{font-size:16px;padding:8px 13px}h5 .badge{font-size:14px;padding:5px 10px}h6 .badge{font-size:11px;padding:3px 8px}.btn .badge{margin-left:5px;padding:4px 7px}.btn .badge.badge-transparent{background-color:hsla(0,0%,100%,.25);color:#fff}.buttons .btn{margin:0 8px 10px 0}.btn:active,.btn:active:focus,.btn:focus{box-shadow:none!important;outline:none}.btn.btn-icon-split i,.dropdown-item.has-icon i{text-align:center;width:15px;font-size:15px;float:left;margin-right:10px}.btn{font-weight:600;font-size:12px;line-height:24px;padding:.3rem .8rem;letter-spacing:.5px}.btn.btn-icon-split{position:relative}.btn.btn-icon-split i{position:absolute;left:0;top:0;height:100%;width:45px;border-radius:3px 0 0 3px;line-height:32px}.btn.btn-icon-split div{margin-left:40px}.btn.btn-icon-noflo-splitat{display:table;text-align:right}.btn.btn-icon-noflo-splitat i{float:none;margin:0;display:table-cell;vertical-align:middle;width:30%}.btn.btn-icon-noflo-splitat div{display:table-cell;vertical-align:middle;width:70%;text-align:left;padding-left:10px}.btn:not(.btn-social):not(.btn-social-icon):active,.btn:not(.btn-social):not(.btn-social-icon):focus,.btn:not(.btn-social):not(.btn-social-icon):hover{border-color:transparent!important;background-color:#fff}.btn>i{margin-left:0!important}.btn.btn-lg{padding:.55rem 1.5rem;font-size:12px}.btn.btn-lg.btn-icon-split i{line-height:42px}.btn.btn-lg.btn-icon-split div{margin-left:25px}.btn.btn-sm{padding:.1rem .4rem;font-size:12px}.btn.btn-icon .fab,.btn.btn-icon .fal,.btn.btn-icon .far,.btn.btn-icon .fas,.btn.btn-icon .ion{margin-left:0!important;font-size:12px}.btn.btn-icon.icon-left .fab,.btn.btn-icon.icon-left .fal,.btn.btn-icon.icon-left .far,.btn.btn-icon.icon-left .fas,.btn.btn-icon.icon-left .ion{margin-right:3px}.btn.btn-icon.icon-right .fab,.btn.btn-icon.icon-right .fal,.btn.btn-icon.icon-right .far,.btn.btn-icon.icon-right .fas,.btn.btn-icon.icon-right .ion{margin-left:3px!important}.btn-action{color:#fff!important;line-height:25px;font-size:12px;min-width:35px;min-height:35px}.btn-secondary,.btn-secondary.disabled{box-shadow:0 2px 6px #e1e5e8;background-color:#cdd3d8;border-color:#cdd3d8;color:#fff}.btn-secondary.disabled:active,.btn-secondary.disabled:focus,.btn-secondary.disabled:hover,.btn-secondary:active,.btn-secondary:focus,.btn-secondary:hover{background-color:#bfc6cd!important;color:#fff!important}.btn-outline-secondary.disabled:active,.btn-outline-secondary.disabled:focus,.btn-outline-secondary.disabled:hover,.btn-outline-secondary:active,.btn-outline-secondary:focus,.btn-outline-secondary:hover{background-color:#cdd3d8!important;color:#fff!important}.btn-success,.btn-success.disabled{box-shadow:0 2px 6px #a8f5b4;background-color:#63ed7a;border-color:#63ed7a;color:#fff}.btn-success.disabled:active,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success:active,.btn-success:focus,.btn-success:hover{background-color:#4cea67!important;color:#fff!important}.btn-outline-success.disabled:active,.btn-outline-success.disabled:focus,.btn-outline-success.disabled:hover,.btn-outline-success:active,.btn-outline-success:focus,.btn-outline-success:hover{background-color:#63ed7a!important;color:#fff!important}.btn-danger,.btn-danger.disabled{box-shadow:0 2px 6px #fd9b96;background-color:#fc544b;border-color:#fc544b;color:#fff}.btn-danger.disabled:active,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger:active,.btn-danger:focus,.btn-danger:hover{background-color:#fb160a!important}.btn-outline-danger.disabled:active,.btn-outline-danger.disabled:focus,.btn-outline-danger.disabled:hover,.btn-outline-danger:active,.btn-outline-danger:focus,.btn-outline-danger:hover{background-color:#fb160a!important;color:#fff!important}.btn-dark,.btn-dark.disabled{box-shadow:0 2px 6px #728394;background-color:#191d21;border-color:#191d21;color:#fff}.btn-dark.disabled:active,.btn-dark.disabled:focus,.btn-dark.disabled:hover,.btn-dark:active,.btn-dark:focus,.btn-dark:hover{background-color:#000!important}.btn-outline-dark.disabled:active,.btn-outline-dark.disabled:focus,.btn-outline-dark.disabled:hover,.btn-outline-dark:active,.btn-outline-dark:focus,.btn-outline-dark:hover{background-color:#000!important;color:#fff!important}.btn-light,.btn-light.disabled{box-shadow:0 2px 6px #e6ecf1;background-color:#e3eaef;border-color:#e3eaef;color:#191d21}.btn-light.disabled:active,.btn-light.disabled:focus,.btn-light.disabled:hover,.btn-light:active,.btn-light:focus,.btn-light:hover{background-color:#c3d2dc!important}.btn-outline-light,.btn-outline-light.disabled{border-color:#e3eaef;color:#e3eaef}.btn-outline-light.disabled:active,.btn-outline-light.disabled:focus,.btn-outline-light.disabled:hover,.btn-outline-light:active,.btn-outline-light:focus,.btn-outline-light:hover{background-color:#e3eaef!important;color:#fff!important}.btn-warning,.btn-warning.disabled{box-shadow:0 2px 6px #ffc473;background-color:#ffa426;border-color:#ffa426;color:#fff}.btn-warning.disabled:active,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning:active,.btn-warning:focus,.btn-warning:hover{background-color:#ff990d!important;color:#fff!important}.btn-outline-warning.disabled:active,.btn-outline-warning.disabled:focus,.btn-outline-warning.disabled:hover,.btn-outline-warning:active,.btn-outline-warning:focus,.btn-outline-warning:hover{background-color:#ffa426!important;color:#fff!important}.btn-info,.btn-info.disabled{box-shadow:0 2px 6px #82d3f8;background-color:#3abaf4;border-color:#3abaf4;color:#fff}.btn-info.disabled:active,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info:active,.btn-info:focus,.btn-info:hover{background-color:#0da8ee!important}.btn-outline-info.disabled:active,.btn-outline-info.disabled:focus,.btn-outline-info.disabled:hover,.btn-outline-info:active,.btn-outline-info:focus,.btn-outline-info:hover{background-color:#0da8ee!important;color:#fff!important}.btn-primary,.btn-primary.disabled{box-shadow:0 2px 6px #acb5f6;background-color:#6777ef;border-color:#6777ef}.btn-primary.disabled:active,.btn-primary.disabled:focus,.btn-primary.disabled:focus:active,.btn-primary.disabled:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus:active,.btn-primary:hover{background-color:#394eea!important}.btn-outline-primary,.btn-outline-primary.disabled{border-color:#6777ef;color:#6777ef}.btn-outline-primary.disabled:active,.btn-outline-primary.disabled:focus,.btn-outline-primary.disabled:hover,.btn-outline-primary:active,.btn-outline-primary:focus,.btn-outline-primary:hover{background-color:#6777ef!important;color:#fff}.btn-outline-white,.btn-outline-white.disabled{border-color:#fff;color:#fff}.btn-outline-white.disabled:active,.btn-outline-white.disabled:focus,.btn-outline-white.disabled:hover,.btn-outline-white:active,.btn-outline-white:focus,.btn-outline-white:hover{background-color:#fff;color:#6777ef}.btn-round{border-radius:30px;padding-left:34px;padding-right:34px}.btn-social,.btn-social-icon{border:none;border-radius:3px}.btn-social-icon{color:#fff!important;padding-left:18px;padding-right:18px}.btn-social-icon>:first-child{font-size:16px}.btn-social{padding:12px 12px 12px 50px;color:#fff!important;font-weight:500}.btn-social>:first-child{width:55px;line-height:50px;border-right:none}.btn-reddit{color:#000!important}.btn-group .btn.active{background-color:#6777ef;color:#fff}.btn-progress{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");background-position:50%;background-repeat:no-repeat;background-size:30px;color:transparent!important;pointer-events:none}.media .media-right{float:right;color:#6777ef;font-weight:600;font-size:16px}.media .media-icon{font-size:20px;margin-right:15px;line-height:1}.media .media-title{margin-top:0;margin-bottom:5px;font-weight:600;font-size:15px;color:#34395e}.media .media-title a{font-weight:inherit;color:#000}.media .media-description{line-height:24px;color:#34395e}.media .media-links{margin-top:10px}.media .media-links a{font-size:12px;color:#999}.media .media-progressbar{flex:1}.media .media-progressbar .progress-text{font-size:12px;font-weight:600;margin-bottom:5px;color:#34395e}.media .media-cta{margin-left:40px}.media .media-cta .btn{padding:5px 15px;border-radius:30px;font-size:12px}.media .media-items{display:flex}.media .media-items .media-item{flex:1;text-align:center;padding:0 15px}.media .media-items .media-item .media-label{font-weight:600;font-size:12px;color:#34395e;letter-spacing:.5px}.media .media-items .media-item .media-value{font-weight:700;font-size:18px}.breadcrumb{background-color:#f9f9f9}.breadcrumb .breadcrumb-item{line-height:1}.breadcrumb .breadcrumb-item i{margin-right:5px}.accordion{display:inline-block;width:100%;margin-bottom:10px}.accordion .accordion-body,.accordion .accordion-header{padding:10px 15px}.accordion .accordion-header{background-color:#f9f9f9;border-radius:3px;cursor:pointer;transition:all .5s}.accordion .accordion-header h4{line-height:1;margin:0;font-size:14px;font-weight:700}.accordion .accordion-header:hover{background-color:#f2f2f2}.accordion .accordion-header[aria-expanded=true]{box-shadow:0 2px 6px #acb5f6;background-color:#6777ef;color:#fff}.accordion .accordion-body{line-height:24px}.popover{box-shadow:0 4px 8px rgba(0,0,0,.03);border-color:transparent}.popover .manual-arrow{position:absolute;bottom:-15px;font-size:26px;left:50%;transform:translateX(-50%);color:#fff}.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before{border-left-color:#f2f2f2}.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before{border-bottom-color:#f2f2f2}.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before{border-top-color:#f2f2f2}.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before{border-right-color:#f2f2f2}.popover .popover-header{background-color:transparent;border:none;padding-bottom:0;padding-top:10px}.popover .popover-body{padding:15px;line-height:24px}.sm-gutters{margin-left:-5px;margin-right:-5px}.sm-gutters>.col,.sm-gutters>[class*=col-]{padding-left:5px;padding-right:5px}.navbar{height:70px;left:250px;right:5px;position:absolute;z-index:890;background-color:transparent}.navbar.active{background-color:#6777ef;box-shadow:rgba(103,119,239,.2) rgba(0,0,0,.03)}.navbar-bg{content:\" \";position:absolute;top:0;left:0;width:100%;height:115px;background-color:#6777ef;z-index:-1}.navbar{align-items:center}.navbar .navbar-brand{color:#fff;text-transform:uppercase;letter-spacing:3px;font-weight:700}.navbar .form-inline .form-control{background-color:#fff;border-color:transparent;padding-left:20px;padding-right:0;margin-right:-6px;min-height:46px;font-weight:500;border-radius:3px 0 0 3px;transition:all 1s}.navbar .form-inline .form-control:focus,.navbar .form-inline .form-control:focus+.btn{position:relative;z-index:9001}.navbar .form-inline .form-control:focus+.btn+.search-backdrop{opacity:.6;visibility:visible}.navbar .form-inline .form-control:focus+.btn+.search-backdrop+.search-result{opacity:1;visibility:visible;top:80px}.navbar .form-inline .btn{border-radius:0 3px 3px 0;background-color:#fff;padding:9px 15px;border-color:transparent}.navbar .form-inline .search-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9000;background-color:#000;opacity:0;visibility:hidden;transition:all .5s}.navbar .form-inline .search-result{position:absolute;z-index:9002;top:100px;background-color:#fff;border-radius:3px;width:450px;opacity:0;visibility:hidden;transition:all .5s}.navbar .form-inline .search-result:before{position:absolute;top:-26px;left:34px;content:\"\\f0d8\";font-weight:600;font-family:\"Font Awesome 5 Free\";color:#fff;font-size:30px}.navbar .form-inline .search-result .search-header{padding:13px 18px 2px;text-transform:uppercase;letter-spacing:1.3px;font-weight:600;font-size:10px;color:#bcc1c6}.navbar .form-inline .search-result .search-item{display:flex}.navbar .form-inline .search-result .search-item a{display:block;padding:13px 18px;text-decoration:none;color:#34395e;font-weight:600;display:flex;align-items:center}.navbar .form-inline .search-result .search-item a:hover{background-color:#fbfbff}.navbar .form-inline .search-result .search-item a:not(.search-close){width:100%}.navbar .form-inline .search-result .search-item a i{margin-left:0!important}.navbar .form-inline .search-result .search-item .search-icon{width:35px;height:35px;line-height:35px;text-align:center;border-radius:50%}.navbar .active .nav-link{color:#fff;font-weight:700}.navbar .navbar-text{color:#fff}.navbar .nav-link{color:#f2f2f2;padding:0 15px!important;height:100%}.navbar .nav-link.nav-link-lg div{margin-top:3px}.navbar .nav-link.nav-link-lg i{margin-left:0!important;font-size:18px;line-height:32px}.navbar .nav-link.nav-link-user{color:#fff;padding-top:4px;padding-bottom:4px;font-weight:600}.navbar .nav-link.nav-link-user img{width:30px}.navbar .nav-link.nav-link-img{padding-top:4px;padding-bottom:4px;border-radius:50%;overflow:hidden}.navbar .nav-link.nav-link-img .flag-icon{box-shadow:0 4px 8px rgba(0,0,0,.03);border-radius:50%;line-height:18px;height:22px;width:22px;background-size:cover}.remove-caret:after{display:none}.navbar .nav-link:hover{color:#fff}.navbar .nav-link.disabled{color:#fff;opacity:.6}.nav-collapse{display:flex}@media (max-width:575.98px){body.search-show .navbar .form-inline .search-element{display:block}.navbar .form-inline .search-element{position:absolute;top:10px;left:10px;right:10px;z-index:892;display:none}.navbar .form-inline .search-element .form-control{float:left;border-radius:3px 0 0 3px;width:calc(100% - 43px)!important}.navbar .form-inline .search-element .btn{margin-top:1px;border-radius:0 3px 3px 0}.navbar .form-inline .search-result{width:100%}.navbar .form-inline .search-backdrop,.navbar .nav-link.nav-link-lg div{display:none}}@media (min-width:576px) and (max-width:767.98px){.navbar .form-inline .search-element{display:block}}@media (min-width:768px) and (max-width:991.98px){.collapse{position:relative}.collapse .navbar-nav{position:absolute}}@media (max-width:1024px){.nav-collapse{position:relative}.nav-collapse .navbar-nav{box-shadow:0 0 30px rgba(0,0,0,.03);position:absolute;top:40px;left:0;width:200px;display:none}.nav-collapse .navbar-nav.show{display:block}.nav-collapse .navbar-nav .nav-item:first-child{border-radius:3px 3px 0 0}.nav-collapse .navbar-nav .nav-item:last-child{border-radius:0 0 3px 3px}.nav-collapse .navbar-nav .nav-item .nav-link{background-color:#fff;color:#6c757d}.nav-collapse .navbar-nav .nav-item .nav-link:hover{background-color:#fcfcfd;color:#6777ef}.nav-collapse .navbar-nav .nav-item.active>a,.nav-collapse .navbar-nav .nav-item:focus>a{background-color:#6777ef;color:#fff}.navbar{left:5px;right:0}.navbar .dropdown-menu{position:absolute}.navbar .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu-right{right:0;left:auto}}.dropdown-item.has-icon i{margin-top:-1px;font-size:13px}.dropdown-menu{box-shadow:0 0 30px rgba(0,0,0,.03);border:none;width:200px}.dropdown-menu.show{display:block!important}.dropdown-menu a{font-size:13px}.dropdown-menu .dropdown-title{text-transform:uppercase;font-size:10px;letter-spacing:1.5px;font-weight:700;color:#191d21!important;padding:10px 20px;line-height:20px;color:#98a6ad}.dropdown-menu.dropdown-menu-sm a{font-size:14px;letter-spacing:normal;padding:10px 20px;color:#6c757d}a.dropdown-item{padding:10px 20px;font-weight:500;line-height:1.2}a.dropdown-item.active,a.dropdown-item:active,a.dropdown-item:focus{background-color:#6777ef;color:#fff!important}.dropdown-divider{border-top-color:#f9f9f9}.dropdown-list{width:350px;padding:0}.dropdown-list .dropdown-item{display:inline-block;width:100%;padding-top:15px;padding-bottom:15px;font-size:13px;border-bottom:1px solid #f9f9f9}.dropdown-list .dropdown-item.dropdown-item-header:hover{background-color:transparent}.dropdown-list .dropdown-item .time{margin-top:10px;font-weight:600;text-transform:uppercase;font-size:10px;letter-spacing:.5px}.dropdown-list .dropdown-item .dropdown-item-avatar{float:left;width:40px;text-align:right;position:relative}.dropdown-list .dropdown-item .dropdown-item-avatar img{width:100%}.dropdown-list .dropdown-item .dropdown-item-avatar .is-online{position:absolute;bottom:0;right:0}.dropdown-list .dropdown-item .dropdown-item-desc{line-height:24px;white-space:normal;color:#34395e;margin-left:60px}.dropdown-list .dropdown-item .dropdown-item-desc b{font-weight:600;color:#666}.dropdown-list .dropdown-item .dropdown-item-desc p{margin-bottom:0}.dropdown-list .dropdown-item:focus{background-color:#6777ef}.dropdown-list .dropdown-item:focus .dropdown-item-desc,.dropdown-list .dropdown-item:focus .dropdown-item-desc b{color:#fff!important}.dropdown-list .dropdown-item.dropdown-item-unread:active .dropdown-item-desc,.dropdown-list .dropdown-item.dropdown-item-unread:active .dropdown-item-desc b{color:#6c757d}.dropdown-list .dropdown-item:active .dropdown-item-desc,.dropdown-list .dropdown-item:active .dropdown-item-desc b{color:#fff}.dropdown-list .dropdown-item.dropdown-item-unread{background-color:#fbfbfb;border-bottom-color:#f2f2f2}.dropdown-list .dropdown-item.dropdown-item-unread:focus .dropdown-item-desc,.dropdown-list .dropdown-item.dropdown-item-unread:focus .dropdown-item-desc b{color:#6c757d!important}.dropdown-list .dropdown-footer,.dropdown-list .dropdown-header{letter-spacing:.5px;font-weight:600;padding:15px}.dropdown-list .dropdown-footer a,.dropdown-list .dropdown-header a{font-weight:600}.dropdown-list .dropdown-list-content{height:350px;overflow:hidden}.dropdown-list .dropdown-list-content:not(.is-end):after{content:\" \";position:absolute;bottom:46px;left:0;width:100%;background-image:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));height:60px}.dropdown-list .dropdown-list-icons .dropdown-item{display:flex}.dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-icon{flex-shrink:0;border-radius:50%;width:40px;height:40px;line-height:42px;text-align:center}.dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-icon i{margin:0}.dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-desc{margin-left:15px;line-height:20px}.dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-desc .time{margin-top:5px}.dropdown-flag .dropdown-item{font-weight:600}.dropdown-flag .dropdown-item .flag-icon{width:20px;height:13px;margin-right:7px;margin-top:-6px}.dropdown-flag .dropdown-item.active{background-color:#6777ef;color:#fff}@media (max-width:575.98px){.dropdown-list-toggle{position:static}.dropdown-list-toggle .dropdown-list{left:10px!important;width:calc(100% - 20px)}}.tab-content.no-padding>.tab-pane{padding:0}.tab-content>.tab-pane{line-height:28px}.progress-bar{background-color:#6777ef}.jumbotron{background-color:#e3eaef}.carousel .carousel-caption p{font-size:13px;line-height:24px}@font-face{font-family:\"Nunito\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");src:local(\"Nunito Regular\"),local(\"Nunito-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"svg\")}@font-face{font-family:\"Nunito\";font-style:normal;font-weight:600;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");src:local(\"Nunito SemiBold\"),local(\"Nunito-SemiBold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"svg\")}@font-face{font-family:\"Nunito\";font-style:normal;font-weight:700;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");src:local(\"Nunito Bold\"),local(\"Nunito-Bold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format(\"svg\")}@font-face{font-family:\"Nunito\";font-style:normal;font-weight:800;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");src:local(\"Nunito ExtraBold\"),local(\"Nunito-ExtraBold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format(\"svg\")}:root{--primary:color(primary);--secondary:color(fontdark);--success:color(success);--info:color(info);--warning:color(warning);--danger:color(danger);--light:color(light);--dark:color(dark)}body{background-color:#fafdfb;font-size:14px;font-weight:400;font-family:\"Nunito\",\"Segoe UI\",arial;color:#6c757d}a.bb{text-decoration:none;border-bottom:1px solid #6777ef;padding-bottom:1px}.form-divider{display:inline-block;width:100%;margin:10px 0;font-size:16px;font-weight:600}.sort-handler,.ui-sortable-handle{cursor:move}.text-job{font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:700;color:#34395e}.text-time{font-size:12px;color:#666;font-weight:500;margin-bottom:10px}.bullet,.slash{display:inline;margin:0 4px}.bullet:after{content:\"\\2022\"}.slash:after{content:\"/\"}.login-brand{margin:20px 0 40px;font-size:24px;text-transform:uppercase;letter-spacing:4px;color:#666;text-align:center}.font-weight-600{font-weight:600!important}.budget-price{display:inline-block;width:100%;display:flex;align-items:center;margin-bottom:3px}.budget-price .budget-price-square{width:15px;height:3px;background-color:#f9f9f9}.budget-price .budget-price-label{font-size:12px;font-weight:600;margin-left:5px}.gradient-bottom{position:relative}.gradient-bottom:after{content:\" \";position:absolute;bottom:41px;left:0;width:100%;background-image:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));height:60px}.text-small{font-size:12px;line-height:20px}.text-title{font-size:14px;color:#34395e;font-weight:600}.img-shadow{box-shadow:0 4px 8px rgba(0,0,0,.03)}.colors{display:flex;flex-wrap:wrap;margin:0 -5px}.colors .color{border-radius:3px;width:calc(25% - 10px);padding:10px;height:60px;line-height:40px;text-align:center;margin:5px}blockquote{padding:20px 20px 20px 40px;font-style:oblique;background-color:#f9f9f9;border-radius:3px;position:relative;font-family:\"Time new Romans\";font-size:16px;letter-spacing:.3px}blockquote:before{content:'\"';font-size:30px;position:absolute;top:10px;left:20px;opacity:.2}blockquote .blockquote-footer{margin-top:10px}.bg-whitesmoke{background-color:#f7f9f9!important}.ion{font-size:15px}.fab,.fal,.far,.fas{font-size:13px}#visitorMap{height:210px}.sidebar-gone-show{display:none!important}pre{border-radius:3px}.circle-step{display:flex;margin-bottom:10px}.circle-step .circle-content{margin-top:3px;margin-left:13px}.circle-step .circle{border-width:2px;border-style:solid;border-radius:50%;display:inline-block;width:32px;height:32px;line-height:30px;font-size:11px;text-align:center}.circle-step .circle.circle-primary{border-color:#6777ef;color:#6777ef}.pe-none{pointer-events:none}.contact-map{width:100%;height:100%;min-height:400px}#visitorMap2,#visitorMap3{height:350px}.shadow-primary{box-shadow:0 2px 6px #acb5f6}.shadow-secondary{box-shadow:0 2px 6px #e1e5e8}.shadow-success{box-shadow:0 2px 6px #a8f5b4}.shadow-warning{box-shadow:0 2px 6px #ffc473}.shadow-danger{box-shadow:0 2px 6px #fd9b96}.shadow-info{box-shadow:0 2px 6px #82d3f8}.shadow-light{box-shadow:0 2px 6px #e6ecf1}.shadow-dark{box-shadow:0 2px 6px #728394}.is-online{width:10px;height:10px;background-color:#63ed7a;border-radius:50%;display:inline-block}.gutters-xs{margin-right:-.25rem;margin-left:-.25rem}.gutters-xs>.col,.gutters-xs>[class*=col-]{padding-right:.25rem;padding-left:.25rem}.beep{position:relative}.beep:after{content:\"\";position:absolute;top:2px;right:8px;width:7px;height:7px;background-color:#ffa426;border-radius:50%;-webkit-animation:pulsate 1s ease-out;animation:pulsate 1s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;opacity:1}.beep.beep-sidebar:after{position:static;margin-left:10px}@media (max-width:575.98px){.fc-overflow{width:100%;overflow:auto}.fc-overflow #myEvent{width:800px}.ionicons li{width:25%}.icon-wrap{width:100%}}.section{position:relative;z-index:1}.section>:first-child{margin-top:-7px}.section .section-header{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;position:relative;margin-bottom:30px;padding:20px;display:flex;align-items:center}.section .section-header h1{margin-bottom:0;font-weight:700;display:inline-block;font-size:24px;margin-top:3px;color:#34395e}.section .section-header .section-header-back{margin-right:15px}.section .section-header .section-header-back .btn:hover{background-color:#6777ef;color:#fff}.section .section-header .section-header-button{margin-left:20px}.section .section-header .section-header-breadcrumb{margin-left:auto;display:flex;align-items:center}.section .section-header .btn,.section .section-header .section-header-breadcrumb .breadcrumb-item{font-size:12px}.section .section-title{font-size:18px;color:#191d21;font-weight:600;position:relative;margin:30px 0 25px}.section .section-title:before{content:\" \";border-radius:5px;height:8px;width:30px;background-color:#6777ef;display:inline-block;float:left;margin-top:6px;margin-right:15px}.section .section-title+.section-lead{margin-top:-20px}.section .section-lead{margin-left:45px}.main-wrapper-1 .section .section-header{margin-left:-30px;margin-right:-30px;margin-top:-10px;border-radius:0;border-top:1px solid #f9f9f9;padding-left:35px;padding-right:35px}@media (max-width:575.98px){.section .section-title{font-size:14px}.section .section-header{flex-wrap:wrap;margin-bottom:20px!important}.section .section-header h1{font-size:18px}.section .section-header .float-right{display:inline-block;width:100%;margin-top:15px}.section .section-header .section-header-breadcrumb{flex-basis:100%;margin-top:10px}}.page-error{height:100%;width:100%;padding-top:60px;text-align:center;display:table}.page-error .page-inner{display:table-cell;width:100%;vertical-align:middle}.page-error h1{font-size:10em;font-weight:700}.page-error .page-description{font-size:18px;font-weight:400;color:#34395e}.page-error .page-search{margin:40px auto;max-width:100%;width:350px}.page-error .page-search .form-control{border-radius:30px}.page-error .page-search .btn{border-radius:30px;margin-left:10px}@media (max-width:575.98px){.page-error .page-search{width:100%}}.main-sidebar{box-shadow:0 4px 8px rgba(0,0,0,.03);position:fixed;top:0;height:100%;width:250px;background-color:#fff;z-index:880;left:0}.main-content,.main-footer,.main-sidebar,.navbar{transition:all .5s}body.sidebar-gone .main-sidebar{left:-250px}body.sidebar-mini .hide-sidebar-mini{display:none!important}body.sidebar-mini .main-sidebar{width:65px;overflow:visible!important;overflow:initial!important;position:absolute;box-shadow:none}body.sidebar-mini .main-sidebar:after{box-shadow:0 4px 8px rgba(0,0,0,.03);content:\" \";position:fixed;background-color:#fff;width:65px;height:100%;left:0;top:0;z-index:-1;opacity:0;-webkit-animation-name:mini-sidebar;animation-name:mini-sidebar;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes mini-sidebar{0%{opacity:0}to{opacity:1}}@keyframes mini-sidebar{0%{opacity:0}to{opacity:1}}body.sidebar-mini .main-sidebar .sidebar-brand{display:none}body.sidebar-mini .main-sidebar .sidebar-brand-sm{display:block}body.sidebar-mini .main-sidebar .sidebar-menu>li{padding:10px}body.sidebar-mini .main-sidebar .sidebar-menu>li.menu-header{padding:0;font-size:0;height:2px}body.sidebar-mini .main-sidebar .sidebar-menu>li>a{border-radius:3px;height:45px;padding:0;justify-content:center}body.sidebar-mini .main-sidebar .sidebar-menu>li>a .fab,body.sidebar-mini .main-sidebar .sidebar-menu>li>a .fal,body.sidebar-mini .main-sidebar .sidebar-menu>li>a .far,body.sidebar-mini .main-sidebar .sidebar-menu>li>a .fas,body.sidebar-mini .main-sidebar .sidebar-menu>li>a .ion{margin:0;font-size:20px}body.sidebar-mini .main-sidebar .sidebar-menu>li>a span{display:none}body.sidebar-mini .main-sidebar .sidebar-menu>li>a .badge{padding:5px;position:absolute;top:4px;right:4px;font-size:10px}body.sidebar-mini .main-sidebar .sidebar-menu>li>a.has-dropdown:after{content:normal}body.sidebar-mini .main-sidebar .sidebar-menu>li.active>a{box-shadow:0 4px 8px #acb5f6;background-color:#6777ef;color:#fff}body.sidebar-mini .main-sidebar .sidebar-menu>li ul.dropdown-menu{position:absolute;background-color:#fff;left:65px;top:10px;width:200px;display:none;box-shadow:0 0 30px rgba(0,0,0,.03)}body.sidebar-mini .main-sidebar .sidebar-menu>li ul.dropdown-menu li.active>a,body.sidebar-mini .main-sidebar .sidebar-menu>li ul.dropdown-menu li.active>a:hover,body.sidebar-mini .main-sidebar .sidebar-menu>li ul.dropdown-menu li>a:focus{color:#fff;background-color:#6777ef!important}body.sidebar-mini .main-sidebar .sidebar-menu>li ul.dropdown-menu li a{height:40px;padding:0 20px;background-color:#fff}body.sidebar-mini .main-sidebar .sidebar-menu>li ul.dropdown-menu li a.has-dropdown:after{content:\"\";font-family:\"Font Awesome 5 Free\";font-weight:900;position:absolute;top:50%;right:20px;transform:translateY(-50%);font-size:12px}body.sidebar-mini .main-sidebar .sidebar-menu li:hover>ul.dropdown-menu{display:block!important}body.sidebar-mini .main-sidebar .sidebar-menu li:hover>ul.dropdown-menu li:hover>a{background-color:#fcfcfd}body.sidebar-mini .main-sidebar .sidebar-menu li:hover>ul.dropdown-menu li .dropdown-menu{left:200px;padding:0}body.sidebar-mini .navbar{left:65px}body.sidebar-mini .main-content,body.sidebar-mini .main-footer{padding-left:90px}body.layout-2 .navbar-bg{z-index:889;height:70px}body.layout-2 .navbar{left:0;z-index:890}body.layout-2 .main-wrapper{display:flex;flex-wrap:wrap;padding:0 50px}body.layout-2 .main-content,body.layout-2 .main-footer,body.layout-2 .main-sidebar{flex-shrink:0;flex-grow:0}body.layout-2 .main-sidebar{background-color:transparent;box-shadow:none;position:static;margin-top:100px;width:200px}body.layout-2 .main-sidebar .sidebar-menu li.menu-header,body.layout-2 .main-sidebar .sidebar-menu li a{padding:0}body.layout-2 .main-sidebar .sidebar-menu li a i{width:10px}body.layout-2 .main-sidebar .sidebar-menu li a.has-dropdown:after{right:0}body.layout-2 .main-sidebar .sidebar-menu li a:hover{color:#6777ef;background-color:transparent}body.layout-2 .main-sidebar .sidebar-menu li ul.dropdown-menu li a{padding-left:34px}body.layout-2 .main-content{padding-top:107px;padding-left:30px;padding-right:0;width:calc(100% - 200px)}body.layout-2 .main-footer{margin-left:230px;width:calc(100% - 230px);padding-left:0;padding-right:0}body.layout-3 .navbar{left:0;right:0}body.layout-3 .navbar.navbar-secondary{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;top:70px;padding:0;z-index:889}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item.active>.nav-link{color:#6777ef}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item.active>.nav-link:before{left:35px;right:0}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item:first-child .nav-link{margin-left:0}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item:last-child .nav-link{margin-right:0}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link{color:#868e96;font-size:13px;letter-spacing:.3px;height:70px;padding:0;padding-left:0!important;padding-right:0!important;margin-left:15px;margin-right:15px;position:relative}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link.has-dropdown{margin-right:35px}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link.has-dropdown:after{content:\"\";font-family:\"Font Awesome 5 Free\";font-weight:900;position:absolute;top:50%;right:20px;transform:translateY(-50%);font-size:12px;right:-20px}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link:before{content:\" \";position:absolute;left:auto;right:auto;bottom:0;height:2px;background-color:#6777ef;transition:all .5s}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link span{line-height:74px}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link i{width:30px;font-size:16px}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item>.nav-link:hover{color:#191d21!important}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu{padding:0}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu .nav-item .nav-link{color:#6c757d;font-weight:600;letter-spacing:.3px;padding:7px 20px!important}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu .nav-item .nav-link.has-dropdown:after{content:\"\";font-family:\"Font Awesome 5 Free\";font-weight:900;position:absolute;top:50%;right:20px;transform:translateY(-50%);font-size:12px;right:15px}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu .nav-item:hover>.nav-link{background-color:#fcfcfd;color:#191d21}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu .nav-item:hover>.dropdown-menu{display:block!important;top:-5px;left:200px}body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu .nav-item.active>.nav-link,body.layout-3 .navbar.navbar-secondary .navbar-nav>.nav-item .dropdown-menu .nav-item .nav-link:focus{background-color:#6777ef;color:#fff}body.layout-3 .main-content{padding-top:170px}body.layout-3 .main-content,body.layout-3 .main-footer{padding-left:0;padding-right:0}.main-sidebar .sidebar-brand{display:inline-block;width:100%;text-align:center;height:60px;line-height:60px}.main-sidebar .sidebar-brand.sidebar-brand-sm{display:none}.main-sidebar .sidebar-brand a{text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;color:#000}.main-sidebar .sidebar-user{display:inline-block;width:100%;padding:10px;margin-bottom:10px}.main-sidebar .sidebar-user .sidebar-user-picture{float:left;margin-right:10px}.main-sidebar .sidebar-user .sidebar-user-picture img{width:50px;border-radius:50%}.main-sidebar .sidebar-menu{padding:0;margin:0}.main-sidebar .sidebar-menu li{display:block}.main-sidebar .sidebar-menu li.menu-header{padding:3px 15px;color:#bcc1c6;font-size:10px;text-transform:uppercase;letter-spacing:1.3px;font-weight:600}.main-sidebar .sidebar-menu li.menu-header:not(:first-child){margin-top:10px}.main-sidebar .sidebar-menu li a{position:relative;display:flex;align-items:center;height:50px;padding:0 20px;width:100%;letter-spacing:.3px;color:#868e96;text-decoration:none}.main-sidebar .sidebar-menu li a .badge{float:right;padding:5px 10px;margin-top:2px}.main-sidebar .sidebar-menu li a i{width:28px;margin-right:20px;text-align:center}.main-sidebar .sidebar-menu li a span{margin-top:3px;width:100%}.main-sidebar .sidebar-menu li a:hover{background-color:#fcfcfd}.main-sidebar .sidebar-menu li.active a{color:#6777ef;font-weight:600;background-color:#fcfcfd}.main-sidebar .sidebar-menu li.active ul.dropdown-menu{background-color:#fcfcfd}.main-sidebar .sidebar-menu li a.has-dropdown:after{content:\"\";font-family:\"Font Awesome 5 Free\";font-weight:900;position:absolute;top:50%;right:20px;transform:translateY(-50%);font-size:12px}.main-sidebar .sidebar-menu li.active>ul.dropdown-menu{display:block}.main-sidebar .sidebar-menu li.active>ul.dropdown-menu li a:hover{background-color:#fcfcfd}.main-sidebar .sidebar-menu li ul.dropdown-menu{padding:0;margin:0;display:none;position:static;float:none;width:100%;box-shadow:none;background-color:transparent}.main-sidebar .sidebar-menu li ul.dropdown-menu li a{color:#868e96;height:35px;padding-left:65px;font-weight:400}.main-sidebar .sidebar-menu li ul.dropdown-menu li a:hover{color:#6777ef;background-color:inherit}.main-sidebar .sidebar-menu li ul.dropdown-menu li.active>a{color:#6777ef;font-weight:600}.main-sidebar .sidebar-menu li ul.dropdown-menu li a i{margin-top:1px;text-align:center}.main-sidebar .sidebar-menu li ul.dropdown-menu li ul.dropdown-menu{padding-left:10px}.main-content{padding-left:280px;padding-right:30px;padding-top:80px;width:100%;position:relative}.main-footer{padding:20px 30px 20px 280px;margin-top:40px;color:#98a6ad;border-top:1px solid #e3eaef;display:inline-block;width:100%}.main-footer .footer-left{float:left}.main-footer .footer-right{float:right}.simple-footer{text-align:center;margin-top:40px;margin-bottom:40px}body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active a{background-color:#6777ef;color:#fff}body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active ul.dropdown-menu li a{color:#e8ebfd}body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active ul.dropdown-menu li a:hover{background-color:#6777ef;color:#fff}body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active ul.dropdown-menu li.active a{color:#fff}body:not(.sidebar-mini) .sidebar-style-2 .sidebar-menu>li.active>a{padding-left:16px;background-color:transparent;position:relative}body:not(.sidebar-mini) .sidebar-style-2 .sidebar-menu>li.active>a:before{content:\"\";position:absolute;left:0;top:50%;transform:translateY(-50%);height:25px;width:4px;background-color:#6777ef}body:not(.sidebar-mini) .sidebar-style-2 .sidebar-menu li.active ul.dropdown-menu li a{padding-left:61px;background-color:#fff}@media (max-width:1024px){.sidebar-gone-hide{display:none!important}.sidebar-gone-show{display:block!important}.main-sidebar{position:fixed!important;margin-top:0!important;z-index:891}body.layout-2 .main-wrapper,body.layout-3 .main-wrapper{width:100%;padding:0;display:block}.main-content{padding-right:30px;width:100%!important}.main-content,.main-footer{padding-left:30px}body.search-show{overflow:hidden}body.search-show .navbar{z-index:892}body.sidebar-show{overflow:hidden}body.search-show:before,body.sidebar-show:before{content:\"\";position:fixed;left:0;right:0;width:100%;height:100%;background-color:#000;opacity:0;z-index:891;-webkit-animation-name:fadeinbackdrop;animation-name:fadeinbackdrop;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes fadeinbackdrop{to{opacity:.6}}@keyframes fadeinbackdrop{to{opacity:.6}}}.pulsate{-webkit-animation:pulsate 1s ease-out;animation:pulsate 1s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;opacity:1}@-webkit-keyframes pulsate{0%{-webkit-transform:scale(.1);opacity:0}50%{opacity:1}to{-webkit-transform:scale(1.2);opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/americanexpress.d041a74.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dinersclub.c2188de.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/discover.fb0c4bc.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jcb.526bd30.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mastercard.25177a1.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/visa.16befd4.png";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJsb2FkZXItMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00My45MzUsMjUuMTQ1YzAtMTAuMzE4LTguMzY0LTE4LjY4My0xOC42ODMtMTguNjgzYy0xMC4zMTgsMC0xOC42ODMsOC4zNjUtMTguNjgzLDE4LjY4M2g0LjA2OGMwLTguMDcxLDYuNTQzLTE0LjYxNSwxNC42MTUtMTQuNjE1YzguMDcyLDAsMTQuNjE1LDYuNTQzLDE0LjYxNSwxNC42MTVINDMuOTM1eiI+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIKICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgdHlwZT0icm90YXRlIgogIGZyb209IjAgMjUgMjUiCiAgdG89IjM2MCAyNSAyNSIKICBkdXI9IjAuNnMiCiAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KPC9wYXRoPgo8L3N2Zz4K"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-regular.75cb2de.eot";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-regulard41d.75cb2de.eot";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-regular.fe67e10.woff2";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-regular.feb87cc.woff";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-regular.daa2089.ttf";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nunito-v9-latin-regular.5106101.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-600.b7233e6.eot";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-600d41d.b7233e6.eot";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-600.e57dde6.woff2";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-600.ae6d08e.woff";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-600.d114e31.ttf";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nunito-v9-latin-600.ba9b2e0.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-700.b17d522.eot";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-700d41d.b17d522.eot";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-700.dd42f32.woff2";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-700.0867338.woff";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-700.5cac58a.ttf";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nunito-v9-latin-700.8fd5157.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-800.3491c7d.eot";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-800d41d.3491c7d.eot";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-800.389848e.woff2";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-800.e345e7e.woff";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nunito-v9-latin-800.d47a4f8.ttf";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nunito-v9-latin-800.8663e51.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("9ae5c06c", content, true)

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(60);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(63);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(64);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
// Module
exports.push([module.i, "@charset \"UTF-8\";.article{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;position:relative;margin-bottom:30px}.article .article-header{height:170px;position:relative;overflow:hidden}.article .article-header .article-image{background-color:#fbfbfb;background-position:50%;background-size:cover;background-repeat:no-repeat;width:100%;height:100%;z-index:-1}.article .article-header .article-title{position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.01) 1%,rgba(0,0,0,.65) 98%,rgba(0,0,0,.65));padding:10px}.article .article-header .article-title h2{font-size:16px;line-height:24px}.article .article-header .article-title h2 a{font-weight:700;text-decoration:none;color:#fff}.article .article-details{background-color:#fff;padding:20px;line-height:24px}.article .article-details .article-cta{text-align:center}.article .article-header .article-badge{position:absolute;bottom:10px;left:10px}.article .article-header .article-badge .article-badge-item{padding:7px 15px;font-weight:600;color:#fff;border-radius:30px;font-size:12px}.article .article-header .article-badge .article-badge-item .fab,.article .article-header .article-badge .article-badge-item .fal,.article .article-header .article-badge .article-badge-item .far,.article .article-header .article-badge .article-badge-item .fas,.article .article-header .article-badge .article-badge-item .ion{margin-right:3px}.article.article-style-b .article-details .article-title{margin-bottom:10px}.article.article-style-b .article-details .article-title h2{line-height:22px}.article.article-style-b .article-details .article-title a{font-size:16px;font-weight:600}.article.article-style-b .article-details p{color:#34395e}.article.article-style-b .article-details .article-cta{text-align:right}.article.article-style-c .article-header{height:233px}.article.article-style-c .article-details .article-category{text-transform:uppercase;margin-bottom:5px;letter-spacing:1px;color:#34395e}.article.article-style-c .article-details .article-category a{font-size:10px;color:#34395e;font-weight:700}.article.article-style-c .article-details .article-title{margin-bottom:10px}.article.article-style-c .article-details .article-title h2{line-height:22px}.article.article-style-c .article-details .article-title a{font-size:16px;font-weight:600}.article.article-style-c .article-details p{color:#34395e}.article.article-style-c .article-user{display:inline-block;width:100%;margin-top:20px}.article.article-style-c .article-user img{border-radius:50%;float:left;width:45px;margin-right:15px}.article.article-style-c .article-user .user-detail-name{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.article.article-style-c .article-user .user-detail-name a{font-weight:700}@media (max-width:575.98px){.article .article-style-c .article-header{height:225px}}@media (min-width:768px) and (max-width:991.98px){.article{margin-bottom:40px}.article .article-header{height:195px!important}.article.article-style-c .article-header{height:155px}}@media (max-width:1024px){.article.article-style-c .article-header{height:216px}.article .article-header{height:155px}}.author-box .author-box-left{float:left;text-align:center;padding-left:5px}.author-box .author-box-left .btn{padding:5px 15px;font-size:12px;border-radius:30px}.author-box .author-box-picture{width:100px;box-shadow:0 4px 8px rgba(0,0,0,.03)}.author-box .author-box-details{margin-left:135px}.author-box .author-box-name{font-size:18px}.author-box .author-box-name a{font-weight:600}.author-box .author-box-job{font-weight:600;letter-spacing:.5px;font-size:12px;color:#34395e}.author-box .author-box-description{line-height:26px;margin-top:15px}@media (max-width:575.98px){.author-box .author-box-left{float:none}.author-box .author-box-details{margin-left:0;margin-top:15px;text-align:center}}.avatar-item{position:relative;margin-bottom:20px}.avatar-item img{border-radius:50%}.avatar-item .avatar-badge{position:absolute;bottom:-5px;right:0;background-color:#fff;color:#000;box-shadow:0 4px 8px rgba(0,0,0,.03);border-radius:50%;text-align:center;line-height:25px;width:25px;height:25px}.browser{display:inline-block;width:60px;height:60px;background-size:100%}.browser.browser-chrome{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.browser.browser-firefox{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.browser.browser-internet-explorer{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.browser.browser-opera{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}.browser.browser-safari{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}.chat-box .chat-content{background-color:#f9f9f9!important;height:300px;overflow:hidden;padding-top:25px!important}.chat-box .chat-content .chat-item{display:inline-block;width:100%;margin-bottom:25px}.chat-box .chat-content .chat-item.chat-right img{float:right}.chat-box .chat-content .chat-item.chat-right .chat-details{margin-left:0;margin-right:70px;text-align:right}.chat-box .chat-content .chat-item.chat-right .chat-details .chat-text{text-align:left;background-color:#6777ef;color:#fff}.chat-box .chat-content .chat-item>img{float:left;width:50px;border-radius:50%}.chat-box .chat-content .chat-item .chat-details{margin-left:70px}.chat-box .chat-content .chat-item .chat-details .chat-text{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;padding:10px 15px;border-radius:3px;width:auto;display:inline-block;font-size:12px}.chat-box .chat-content .chat-item .chat-details .chat-text img{max-width:100%;margin-bottom:10px}.chat-box .chat-content .chat-item.chat-typing .chat-details .chat-text{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");height:40px;width:60px;background-position:50%;background-size:60%;background-repeat:no-repeat}.chat-box .chat-content .chat-item .chat-details .chat-time{margin-top:5px;font-size:12px;font-weight:500;opacity:.6}.chat-box .chat-form{padding:0;position:relative}.chat-box .chat-form .form-control{border:none;height:50px;padding:15px 70px 15px 15px;font-size:13px;font-weight:500;box-shadow:none;outline:none}.chat-box .chat-form .btn{padding:0;width:40px;height:40px;border-radius:50%;position:absolute;top:50%;right:-5px;transform:translate(-50%,-50%);box-shadow:0 4px 8px rgba(0,0,0,.03)}.chat-box .chat-form .btn i{margin-left:0}.chocolat-wrapper{z-index:890}.chocolat-overlay{background-color:#000}[data-tab-group]{display:none}[data-tab-group].active{display:block}table.dataTable{border-collapse:collapse!important}table.dataTable.no-footer,table.dataTable thead td,table.dataTable thead th{border-bottom:1px solid #ddd!important}.dataTables_wrapper{padding:0!important;font-size:13px!important}.dataTables_wrapper .dataTables_paginate .paginate_button{padding:0!important;margin:0!important;float:left}div.dataTables_wrapper div.dataTables_processing{font-size:0!important;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ")!important;background-color:#fff;background-size:100%;width:50px!important;height:50px;border:none;box-shadow:0 4px 8px rgba(0,0,0,.03);top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;margin:0!important;opacity:1!important}.daterangepicker.dropdown-menu{width:auto}.daterangepicker .input-mini{padding-left:28px!important}.daterangepicker .calendar td,.daterangepicker .calendar th{padding:5px;font-size:12px}.ranges li{color:#6777ef}.daterangepicker td.active,.daterangepicker td.active:hover,.ranges li.active,.ranges li:hover{background-color:#6777ef}.dropzone{border:2px dashed #6777ef;min-height:240px;text-align:center}.dropzone .dz-message{font-size:24px;color:#34395e;margin:3.4em}.dropzone .dz-preview .dz-details{padding:2.2em 1em}.dropzone .dz-preview .dz-image{border-radius:3px}@media (max-width:575.98px){.dropzone .dz-message{margin:2em}}@media (min-width:576px) and (max-width:767.98px){.dropzone .dz-message{margin:2.75em}}.flag-icon{width:50px;height:35px;display:inline-block;background-size:100%}.flag-icon.flag-icon-shadow{box-shadow:0 4px 8px rgba(0,0,0,.03)}.fc-toolbar h2{font-size:16px;margin-top:4px}.fc-view{color:#34395e!important;font-weight:500;padding:10px}.fc-view,.fc-view>table,.fc-view>table td,.fc-view>table th,.fc-view>table tr{border-color:#f2f2f2}.fc-view>table th{color:#34395e!important;font-weight:500;padding:10px}.fc-view-container>.fc-view{padding:0}.fc-view,.fc-view>table td{color:#666;text-align:right}.fc-unthemed td.fc-today{background-color:#f2f2f2}.fc button .fc-icon{top:-.09em}.fc-basic-view .fc-day-number,.fc-basic-view .fc-week-number{padding:10px}.fc-day-grid-event .fc-content{padding:5px 10px;box-shadow:0 4px 8px rgba(0,0,0,.03)}tr:first-child>td>.fc-day-grid-event{margin-bottom:10px}.fc-state-default{border-radius:3px;background-color:#f2f2f2;background-image:none;border:none;box-shadow:none;text-transform:capitalize;font-weight:500}.fc button{height:auto;padding:10px 15px;text-shadow:none;border-radius:0}.fc button.fc-state-active{background-color:#6777ef;color:#fff}.gallery{display:inline-block;width:100%}.gallery .gallery-item{float:left;display:inline-block;width:50px;height:50px;background-repeat:no-repeat;background-size:cover;background-position:50%;border-radius:3px;margin-right:7px;margin-bottom:7px;cursor:pointer;transition:all .5s;position:relative}.gallery .gallery-item:hover{opacity:.8}.gallery .gallery-hide{display:none}.gallery .gallery-more:after{content:\" \";position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;background-color:rgba(0,0,0,.5);border-radius:3px}.gallery .gallery-more div{text-align:center;line-height:50px;font-weight:600;position:relative;z-index:2;color:#fff}.gallery.gallery-md .gallery-item{width:78px;height:78px;margin-right:10px;margin-bottom:10px}.gallery.gallery-md .gallery-more div{line-height:78px}.gallery.gallery-fw .gallery-item{width:100%;margin-bottom:15px}.gallery.gallery-fw .gallery-more div{font-size:20px}#callback-preview,.image-preview{width:250px;height:250px;border:2px dashed #ddd;border-radius:3px;position:relative;overflow:hidden;background-color:#fff;color:#ecf0f1}#callback-preview input,.image-preview input{line-height:200px;font-size:200px;position:absolute;opacity:0;z-index:10}#callback-preview label,.image-preview label{position:absolute;z-index:5;opacity:.8;cursor:pointer;background-color:#bdc3c7;width:150px;height:50px;font-size:12px;line-height:50px;text-transform:uppercase;top:0;left:0;right:0;bottom:0;margin:auto;text-align:center}.audio-preview{background:#fff;width:auto;padding:20px;display:inline-block}.audio-upload{cursor:pointer;background-color:#bdc3c7;color:#ecf0f1;padding:20px;font-size:20px;text-transform:uppercase}.ionicons{padding:0;margin:0;display:flex;flex-wrap:wrap}.ionicons li{width:12.5%;font-size:40px;padding:40px 20px;list-style:none;text-align:center;border-radius:3px;position:relative;cursor:pointer}.ionicons li:hover{opacity:.8}.ionicons li .icon-name{position:absolute;top:100%;left:50%;width:100%;transform:translate(-50%,-100%);font-family:\"Segoe UI\";font-size:12px;margin-top:10px;line-height:22px;background-color:#f9f9f9;border-radius:3px;padding:10px;display:none}.jqvmap-circle{display:inline-block;width:13px;height:13px;background-color:#fff;border:3px solid #6777ef;border-radius:50%}.jqvmap-label{z-index:889}.jqvmap-zoomin,.jqvmap-zoomout{height:auto;width:auto}.profile-widget{margin-top:35px}.profile-widget .profile-widget-picture{box-shadow:0 4px 8px rgba(0,0,0,.03);float:left;width:100px;margin:-35px -5px 0 30px;position:relative;z-index:1}.profile-widget .profile-widget-header{display:inline-block;width:100%;margin-bottom:10px}.profile-widget .profile-widget-items{display:flex;position:relative}.profile-widget .profile-widget-items:after{content:\" \";position:absolute;bottom:0;left:-25px;right:0;height:1px;background-color:#f2f2f2}.profile-widget .profile-widget-items .profile-widget-item{flex:1;text-align:center;border-right:1px solid #f2f2f2;padding:10px 0}.profile-widget .profile-widget-items .profile-widget-item:last-child{border-right:none}.profile-widget .profile-widget-items .profile-widget-item .profile-widget-item-label{font-weight:600;font-size:12px;letter-spacing:.5px;color:#34395e}.profile-widget .profile-widget-items .profile-widget-item .profile-widget-item-value{color:#000;font-weight:600;font-size:16px}.profile-widget .profile-widget-description{padding:20px;line-height:26px}.profile-widget .profile-widget-description .profile-widget-name{font-size:16px;margin-bottom:10px;font-weight:600}@media (max-width:575.98px){.profile-widget .profile-widget-picture{left:50%;transform:translate(-50%);margin:40px 0;float:none}.profile-widget .profile-widget-items .profile-widget-item{border-top:1px solid #f2f2f2}}.select2-container--default .select2-search--dropdown .select2-search__field:focus{outline:none;box-shadow:none}.select2-container .select2-selection--multiple,.select2-container .select2-selection--single{box-sizing:border-box;cursor:pointer;display:block;min-height:42px;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;outline:none;background-color:#fdfdff;border-color:#e4e6fc}.select2-dropdown{border-color:#e4e6fc!important}.select2-container.select2-container--focus .select2-selection--multiple,.select2-container.select2-container--focus .select2-selection--single,.select2-container.select2-container--open .select2-selection--multiple,.select2-container.select2-container--open .select2-selection--single{background-color:#fefeff;border-color:#95a0f4}.select2-results__option{padding:10px}.select2-search--dropdown .select2-search__field{padding:7px}.select2-container--default .select2-selection--single .select2-selection__rendered{min-height:42px;line-height:42px;padding-left:20px;padding-right:20px}.select2-container--default .select2-selection--multiple .select2-selection__arrow,.select2-container--default .select2-selection--single .select2-selection__arrow{position:absolute;top:1px;right:1px;width:40px;min-height:42px}.select2-container--default .select2-selection--multiple .select2-selection__choice{box-shadow:0 4px 8px rgba(0,0,0,.03);color:#fff;padding-left:10px;padding-right:10px}.select2-container--default .select2-selection--multiple .select2-selection__rendered{padding-left:10px;padding-right:10px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{margin-right:5px;color:#fff}.select2-container--default .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-results__option[aria-selected=true],.select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#6777ef;color:#fff}.select2-results__option{padding-right:10px 15px}.selectric{min-height:42px;border-radius:3px;padding-left:10px;padding-right:10px}.selectric,.selectric:hover{background-color:#fdfdff;border-color:#e4e6fc}.selectric:focus{background-color:#fefeff;border-color:#95a0f4}.selectric .label{font-size:13px}.selectric .button,.selectric .label{background-color:transparent;line-height:44px;min-height:42px}.selectric-open .selectric{border-color:#6777ef}.selectric-above .selectric-items,.selectric-below .selectric-items{margin-bottom:10px}.selectric-items{box-shadow:0 4px 8px rgba(0,0,0,.03);border-radius:3px;background-color:#fff;border:none}.selectric-items li{font-size:13px;padding:10px 15px}.selectric-items li:hover{background-color:#f2f2f2}.selectric-items li.highlighted,.selectric-items li.selected{background-color:#6777ef;color:#fff}.slider .owl-nav [class*=owl-]{position:absolute;top:50%;left:35px;transform:translate(-50%,-50%);margin:0;background-color:#000;border-radius:50%;color:#fff;width:40px;height:40px;line-height:34px;opacity:.3}.slider .owl-nav [class*=owl-]:hover{background-color:#000}.slider .owl-nav .owl-next{right:0;left:auto}.slider:hover .owl-nav [class*=owl-]{opacity:1}.slider .slider-caption{position:absolute;bottom:10px;left:0;width:100%;z-index:1;background-color:rgba(0,0,0,.3);color:#fff;padding:10px}.slider .slider-caption .slider-title{font-size:16px;font-weight:700;margin-bottom:5px}.slider .slider-caption .slider-description{line-height:26px;opacity:.8}.jqstooltip{box-sizing:content-box}.sparkline-bar,.sparkline-inline,.sparkline-line{width:100%}.sparkline-bar canvas,.sparkline-inline canvas,.sparkline-line canvas{width:100%!important}.statistic-details{display:flex;flex-wrap:wrap}.statistic-details .statistic-details-item{flex:1;padding:17px 10px;text-align:center}.statistic-details .statistic-details-item .detail-chart{margin-bottom:10px;padding:0 20px}.statistic-details .statistic-details-item .detail-name{font-size:12px;margin-top:5px;color:#34395e;letter-spacing:.3px}.statistic-details .statistic-details-item .detail-value{font-size:18px;font-weight:700}@media (max-width:575.98px){.statistic-details{flex-wrap:wrap}.statistic-details .statistic-details-item{flex:initial;width:50%}}.summary{display:inline-block;width:100%}.summary .summary-info{background-color:#eaf2f4;padding:50px 0;text-align:center;border-radius:3px}.summary .summary-info h4{font-weight:600}.summary .summary-item{margin-top:20px}.summary .summary-item h6{font-size:12px;font-weight:600;margin-top:5px;margin-bottom:20px}.note-editor.note-frame{border-radius:3px;border:1px solid #ededed;box-shadow:none}.note-toolbar{padding:0 0 5px 5px!important;position:relative!important}.note-toolbar.card-header{height:auto;display:block;min-height:auto}.note-toolbar .note-btn{font-size:12px;background-color:transparent;box-shadow:none;border-color:transparent}.swal-button{border-radius:3px;font-size:16px}.swal-button:focus{box-shadow:none}.swal-button.swal-button--confirm{box-shadow:0 2px 6px #acb5f6;background-color:#6777ef}.swal-button.swal-button--confirm:focus{opacity:.8}.swal-footer,.swal-text{text-align:center}.swal-text{line-height:24px;font-weight:500}.bootstrap-tagsinput{background-color:#fdfdff;border-color:#e4e6fc;display:block;height:46px;box-shadow:none;overflow:auto}.bootstrap-tagsinput input{height:100%;padding:0 8px}.bootstrap-tagsinput .tag{background-color:#6777ef;border-radius:3px;padding:5px 10px}.bootstrap-tagsinput .tag:first-child{margin-left:5px}.bootstrap-tagsinput:focus{background-color:#fefeff;border-color:#95a0f4}.bootstrap-timepicker-widget table td a span{margin-left:0!important}#toast-container>div{box-shadow:0 4px 8px rgba(0,0,0,.03);padding:20px 20px 20px 50px;opacity:1}#toast-container>.toast{background-image:none!important}#toast-container>.toast:before{position:absolute;left:17px;top:25px;font-family:\"Ionicons\";font-size:24px;line-height:18px;color:#fff}#toast-container>.toast-warning:before{content:\"\"}#toast-container>.toast-error:before{content:\"\"}#toast-container>.toast-info:before{content:\"\";color:#000}#toast-container>.toast-success:before{content:\"\"}.toast.toast-error{background-color:#fc544b}.toast.toast-warning{background-color:#ffa426}.toast.toast-success{background-color:#63ed7a}.toast.toast-info{background-color:#fff}.toast.toast-info .toast-title{color:#000}.toast.toast-info .toast-message{color:#000;margin-top:5px}.user-item{text-align:center}.user-item img{border-radius:50%;padding-left:20px;padding-right:20px}.user-item .user-details{margin-top:10px}.user-item .user-details .user-name{font-weight:600;color:#191d21;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-item .user-details .user-cta{margin-top:10px}.user-item .user-details .user-cta .btn{padding:5px 15px;font-size:12px;border-radius:30px}@media (max-width:575.98px){.user-details .media,.user-progress .media{text-align:center;display:inline-block;width:100%}.user-details .media img,.user-progress .media img{margin:0 0 10px!important}.user-details .media .media-body,.user-progress .media .media-body{width:100%}.user-details .media .media-items,.user-progress .media .media-items{margin:20px 0;width:100%}.user-details .list-unstyled-noborder li:last-child,.user-progress .list-unstyled-noborder li:last-child{margin-bottom:0;padding-bottom:0}.user-progress .media .media-progressbar{margin-top:10px}.user-progress .media .media-cta{margin-top:20px;margin-left:0}}.weather .weather-icon{float:left;width:150px;text-align:center;line-height:40px}.weather .weather-icon span{font-size:60px;margin-top:30px}.weather .weather-desc{margin-left:160px}.weather .weather-desc h4{font-size:70px;font-weight:200;margin:30px 0 5px;line-height:56px}.weather .weather-desc .weather-text{font-size:12px;color:#34395e;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-top:10px}.weather .weather-desc ul{margin:15px 0 13px;padding:0}.weather ul li{display:inline-block;margin-right:10px;padding:10px;line-height:1;border-radius:3px;border:2px solid #6777ef;font-size:10px;font-weight:500;color:#6777ef;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px}@media (max-width:575.98px){.weather{text-align:center}.weather .weather-icon{float:none;width:auto}.weather .weather-icon span{margin-top:20px}.weather .weather-desc{margin-left:0}}.icon-wrap{display:inline-block;padding-left:15px;padding-right:15px;margin-bottom:25px;width:25%}.icon-wrap .icon{float:left;width:40px;font-family:\"weathericons\";font-size:20px}.icon-wrap .icon_unicode{width:100%;padding-left:45px;color:#34395e}.new-icons ul{padding:0;margin:0;list-style:none}.new-icons ul li{padding:10px}.icon-wrap .icon,.new-icons ul li .wi{font-size:24px;margin-right:15px;width:30px;text-align:center}.pwindicator{margin-top:4px;width:150px}.pwindicator .bar{height:2px}.pw-very-weak .bar{background:#d00;width:30px}.pw-very-weak .label{color:#d00}.pw-weak .bar{background:#d00;width:60px}.pw-weak .label{color:#d00}.pw-mediocre .bar{background:#f3f01a;width:90px}.pw-mediocre .label{color:#f3f01a}.pw-strong .bar{background:#f3b31a;width:120px}.pw-strong .label{color:#f3b31a}.pw-very-strong .bar{background:#0d0;width:150px}.pw-very-strong .label{color:#0d0}.product-item{text-align:center}.product-item .product-image{display:inline-block;overflow:hidden;width:80px;height:80px;border-radius:3px;margin-bottom:10px}.product-item .product-name{color:#34395e;font-weight:700;margin-bottom:3px}.product-item .product-review{color:#ffa426;margin-bottom:3px}.product-item .product-cta{margin-top:5px}.product-item .product-cta a{margin-top:10px;padding-left:15px;padding-right:15px}.tickets-list .ticket-item{text-decoration:none;display:inline-block;width:100%;padding:20px;border-bottom:1px solid #f9f9f9}.tickets-list .ticket-item.ticket-more{padding:15px;text-align:center;font-weight:600;font-size:12px}.tickets-list .ticket-item .ticket-title h4{font-size:16px;font-weight:700}.tickets-list .ticket-item .ticket-info{display:flex;font-size:12px;font-weight:500;color:#34395e;letter-spacing:.5px}.tickets-list .ticket-item .ticket-info .bullet{margin:0 10px}.tickets{display:flex}.tickets .ticket-items{width:30%;padding-right:30px}.tickets .ticket-items .ticket-item{display:inline-block;width:100%;padding:25px 15px;border-bottom:1px solid #f9f9f9;cursor:pointer;transition:all .5s}.tickets .ticket-items .ticket-item:hover{background-color:rgba(63,82,227,.03)}.tickets .ticket-items .ticket-item:hover .ticket-title{color:#6777ef}.tickets .ticket-items .ticket-item.active{box-shadow:0 2px 6px #acb5f6;border-radius:3px;background-color:#6777ef;border-bottom:none}.tickets .ticket-items .ticket-item.active .ticket-desc,.tickets .ticket-items .ticket-item.active .ticket-title{color:#fff!important}.tickets .ticket-items .ticket-item .ticket-title h4{font-size:13px;letter-spacing:.3px}.tickets .ticket-items .ticket-item .ticket-title h4 .badge{padding:7px 10px;margin-left:5px}.tickets .ticket-items .ticket-item .ticket-desc{display:flex;font-size:11px;font-weight:500;color:#34395e;letter-spacing:.5px}.tickets .ticket-items .ticket-item .ticket-desc .bullet{margin:0 10px}.tickets .ticket-content{width:70%}.tickets .ticket-content .ticket-header{display:flex}.tickets .ticket-content .ticket-header .ticket-sender-picture{width:50px;height:50px;border-radius:3px;overflow:hidden;margin-right:20px}.tickets .ticket-content .ticket-header .ticket-sender-picture img{width:100%}.tickets .ticket-content .ticket-header .ticket-detail .ticket-title h4{font-size:18px;font-weight:700}.tickets .ticket-content .ticket-header .ticket-detail .ticket-info{display:flex;letter-spacing:.3px;font-size:12px;font-weight:500;color:#34395e}.tickets .ticket-content .ticket-header .ticket-detail .ticket-info .bullet{margin:0 10px}.tickets .ticket-divider{height:1px;width:100%;display:inline-block;background-color:#f2f2f2}.tickets .ticket-description{color:#34395e;font-weight:500;margin-top:30px;line-height:28px}.tickets .ticket-description p{margin-bottom:20px}.tickets .ticket-description .ticket-form{margin-top:40px}.tickets .ticket-description .ticket-form .note-editable{color:#34395e;font-weight:500}.tickets .ticket-description .ticket-form .note-editable p{margin-bottom:5px}@media (min-width:576px) and (max-width:767.98px){.tickets{display:inline-block}.tickets .ticket-items{width:100%;margin-bottom:30px;padding:0;display:none}.tickets .ticket-content{width:100%}}@media (min-width:768px) and (max-width:991.98px){.tickets{flex-wrap:wrap;margin:0 -15px}.tickets .ticket-items{width:100%;display:flex;flex-wrap:nowrap;margin-bottom:15px;padding:15px;overflow:auto}.tickets .ticket-items .ticket-item{flex-basis:50%;flex-grow:0;flex-shrink:0}.tickets .ticket-content{margin:15px;width:100%}}.owl-theme .owl-item{padding:10px 0}.owl-theme .owl-dots{margin-top:20px!important}.owl-theme .owl-dots .owl-dot.active span{background-color:#6777ef}.activities{display:flex;flex-wrap:wrap}.activities .activity{width:100%;display:flex;position:relative}.activities .activity:before{content:\" \";position:absolute;left:25px;top:0;width:2px;height:100%;background-color:#6777ef}.activities .activity:last-child:before{display:none}.activities .activity .activity-icon{width:50px;height:50px;border-radius:3px;line-height:50px;font-size:20px;margin-right:20px;border-radius:50%;flex-shrink:0;text-align:center;z-index:1}.activities .activity .activity-detail{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;margin-bottom:30px;position:relative;padding:15px}.activities .activity .activity-detail:before{content:\"\";font-family:\"Font Awesome 5 Free\";font-weight:900;font-size:20px;position:absolute;left:-8px;color:#fff}.activities .activity .activity-detail h4{font-size:18px;color:#191d21}.activities .activity .activity-detail p{margin-bottom:0}.invoice{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;position:relative;margin-bottom:30px;padding:40px}.invoice .invoice-title .invoice-number{float:right;font-size:20px;font-weight:700;margin-top:-45px}.invoice hr{margin-top:40px;margin-bottom:40px;border-top-color:#f9f9f9}.invoice .invoice-detail-item{margin-bottom:15px}.invoice .invoice-detail-item .invoice-detail-name{letter-spacing:.3px;color:#98a6ad;margin-bottom:4px}.invoice .invoice-detail-item .invoice-detail-value{font-size:18px;color:#34395e;font-weight:700}.invoice .invoice-detail-item .invoice-detail-value.invoice-detail-value-lg{font-size:24px}@media (min-width:768px) and (max-width:991.98px){.table-invoice table{min-width:800px}}.empty-state{text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:40px}.empty-state .empty-state-icon{position:relative;background-color:#6777ef;width:80px;height:80px;line-height:100px;border-radius:5px}.empty-state .empty-state-icon i{font-size:40px;color:#fff;position:relative;z-index:1}.empty-state h2{font-size:20px;margin-top:30px}.empty-state p{font-size:16px}.pricing{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;position:relative;margin-bottom:30px;text-align:center}.pricing.pricing-highlight .pricing-cta a,.pricing.pricing-highlight .pricing-title{background-color:#6777ef;color:#fff}.pricing.pricing-highlight .pricing-cta a:hover{background-color:#394eea!important}.pricing .pricing-padding{padding:40px}.pricing .pricing-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2.5px;background-color:#f3f6f8;color:#6777ef;border-radius:0 0 3px 3px;display:inline-block;padding:5px 15px}.pricing .pricing-price{margin-bottom:45px}.pricing .pricing-price div:first-child{font-weight:600;font-size:50px}.pricing .pricing-details{text-align:left;display:inline-block}.pricing .pricing-details .pricing-item{display:flex;margin-bottom:15px}.pricing .pricing-details .pricing-item .pricing-item-icon{width:20px;height:20px;line-height:20px;border-radius:50%;text-align:center;background-color:#63ed7a;color:#fff;margin-right:10px}.pricing .pricing-details .pricing-item .pricing-item-icon i{font-size:11px}.pricing .pricing-cta{margin-top:20px}.pricing .pricing-cta a{display:block;padding:20px 40px;background-color:#f3f6f8;text-transform:uppercase;letter-spacing:2.5px;font-size:14px;font-weight:700;text-decoration:none;border-radius:0 0 3px 3px}.pricing .pricing-cta a .fab,.pricing .pricing-cta a .fal,.pricing .pricing-cta a .far,.pricing .pricing-cta a .fas,.pricing .pricing-cta a .ion{margin-left:5px}.pricing .pricing-cta a:hover{background-color:#e3eaef}.hero{border-radius:3px;padding:55px;display:flex;justify-content:center;flex-direction:column;position:relative}.hero.hero-bg-image{background-position:50%;background-size:cover}.hero.hero-bg-image:before{content:\" \";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:0;border-radius:3px}.hero.hero-bg-image.hero-bg-parallax{background-attachment:fixed}.hero .hero-inner{position:relative;z-index:1}.hero h2{font-size:24px}.hero p{margin-bottom:0;font-size:16px;letter-spacing:.3px}.avatar{background:#6777ef;border-radius:50%;color:#e3eaef;display:inline-block;font-size:16px;font-weight:300;margin:0;position:relative;vertical-align:middle;line-height:1.28;height:45px;width:45px}.avatar.avatar-xs{font-size:6px;height:15px;width:15px}.avatar.avatar-sm{font-size:12px;height:30px;width:30px}.avatar.avatar-lg{font-size:23px;height:60px;width:60px}.avatar.avatar-xl{font-size:30px;height:75px;width:75px}.avatar img{border-radius:50%;height:100%;position:relative;width:100%;z-index:1}.avatar .avatar-icon{background:#fff;height:50%;width:50%}.avatar .avatar-icon,.avatar .avatar-presence{bottom:14.64%;padding:.1rem;position:absolute;right:14.64%;transform:translate(50%,50%);z-index:2}.avatar .avatar-presence{background:#fff;height:50%;width:50%;background:#bcc3ce;border-radius:50%;box-shadow:0 0 0 .1rem #fff;height:.5em;width:.5em}.avatar .avatar-presence.online{background:#63ed7a}.avatar .avatar-presence.busy{background:#fc544b}.avatar .avatar-presence.away{background:#ffa426}.avatar[data-initial]:before{color:currentColor;content:attr(data-normal);content:attr(data-initial);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:1}.wizard-steps{display:flex;margin:0 -10px 60px;counter-reset:wizard-counter}.wizard-steps .wizard-step{box-shadow:0 4px 8px rgba(0,0,0,.03);background-color:#fff;border-radius:3px;border:none;position:relative;box-shadow:0 4px 8px rgba(0,0,0,.05);padding:30px;text-align:center;flex-grow:1;flex-basis:0;margin:0 10px}.wizard-steps .wizard-step:before{counter-increment:wizard-counter;content:counter(wizard-counter);position:absolute;bottom:-40px;left:50%;transform:translateX(-50%);width:20px;height:20px;line-height:21px;font-size:10px;font-weight:700;border-radius:50%;background-color:#e3eaef}.wizard-steps .wizard-step.wizard-step-active{box-shadow:0 2px 6px #acb5f6;background-color:#6777ef;color:#fff}.wizard-steps .wizard-step.wizard-step-active:before{background-color:#6777ef;color:#fff}.wizard-steps .wizard-step.wizard-step-success,.wizard-steps .wizard-step.wizard-step-success:before{background-color:#63ed7a;color:#fff}.wizard-steps .wizard-step.wizard-step-danger,.wizard-steps .wizard-step.wizard-step-danger:before{background-color:#fc544b;color:#fff}.wizard-steps .wizard-step.wizard-step-warning,.wizard-steps .wizard-step.wizard-step-warning:before{background-color:#ffa426;color:#fff}.wizard-steps .wizard-step.wizard-step-info,.wizard-steps .wizard-step.wizard-step-info:before{background-color:#3abaf4;color:#fff}.wizard-steps .wizard-step .wizard-step-icon .fab,.wizard-steps .wizard-step .wizard-step-icon .fal,.wizard-steps .wizard-step .wizard-step-icon .far,.wizard-steps .wizard-step .wizard-step-icon .fas,.wizard-steps .wizard-step .wizard-step-icon .ion{font-size:34px;margin-bottom:15px}.wizard-steps .wizard-step .wizard-step-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:700}@media (max-width:575.98px){.wizard-steps{display:block}.wizard-steps .wizard-step{margin-bottom:50px}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chrome.e28dae6.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/firefox.720c74c.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/internet-explorer.dc112fb.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/opera.2b5dd94.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/safari.585af8e.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/typing.74ce56c.svg";

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  pages: {
    current_page: ""
  }
});
const mutations = {
  INITIAL_PAGE: (state, {
    page
  }) => {
    state.pages.current_page = page;
  }
};
const actions = {
  INITIAL_PAGE: async ({
    commit
  }, {
    page
  }) => {
    try {
      commit("INITIAL_PAGE", {
        page: page
      });
    } catch (ex) {
      console.log(ex);
    }
  }
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(15);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(16);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(17);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(12);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(3);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _4cfcbcf0 = () => interopDefault(__webpack_require__.e(/* import() | pages/general */ 1).then(__webpack_require__.bind(null, 107)));

const _5e4fe5a3 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/blankPage */ 3).then(__webpack_require__.bind(null, 109)));

const _563f581b = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/alert */ 4).then(__webpack_require__.bind(null, 111)));

const _2b57eee2 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/badge */ 5).then(__webpack_require__.bind(null, 113)));

const _eec78158 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/breadcrumb */ 6).then(__webpack_require__.bind(null, 115)));

const _5915f400 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/buttons */ 7).then(__webpack_require__.bind(null, 117)));

const _70649aa1 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/card */ 8).then(__webpack_require__.bind(null, 119)));

const _d37c971e = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/carousel */ 9).then(__webpack_require__.bind(null, 121)));

const _c116ef84 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/collapse */ 10).then(__webpack_require__.bind(null, 123)));

const _c45c52bc = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/dropdown */ 11).then(__webpack_require__.bind(null, 125)));

const _e5c39b56 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/form */ 12).then(__webpack_require__.bind(null, 127)));

const _441f5140 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/listGroup */ 13).then(__webpack_require__.bind(null, 129)));

const _0cfe0e42 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/mediaObject */ 14).then(__webpack_require__.bind(null, 131)));

const _2ebeb8ec = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/modal */ 15).then(__webpack_require__.bind(null, 133)));

const _6472cbbc = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/nav */ 16).then(__webpack_require__.bind(null, 135)));

const _15913d3e = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/navbar */ 17).then(__webpack_require__.bind(null, 137)));

const _7df2a36b = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/pagination */ 18).then(__webpack_require__.bind(null, 112)));

const _48a87324 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/popover */ 19).then(__webpack_require__.bind(null, 138)));

const _5a82e6be = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/progress */ 20).then(__webpack_require__.bind(null, 136)));

const _36e3818d = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/table */ 21).then(__webpack_require__.bind(null, 134)));

const _6d3e0582 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/tooltip */ 22).then(__webpack_require__.bind(null, 132)));

const _00150e80 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/bootstrap/typography */ 23).then(__webpack_require__.bind(null, 130)));

const _05a032b6 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/layout/defaultLayout */ 24).then(__webpack_require__.bind(null, 128)));

const _584f3c34 = () => interopDefault(__webpack_require__.e(/* import() | pages/starter/layout/topNavigation */ 25).then(__webpack_require__.bind(null, 126)));

const _371b200c = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/article */ 26).then(__webpack_require__.bind(null, 124)));

const _825ca79a = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/avatar */ 27).then(__webpack_require__.bind(null, 122)));

const _ffc9202e = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/chatBox */ 28).then(__webpack_require__.bind(null, 120)));

const _02d9639e = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/emptyState */ 29).then(__webpack_require__.bind(null, 118)));

const _f38b8730 = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/gallery */ 30).then(__webpack_require__.bind(null, 116)));

const _1955cad4 = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/hero */ 31).then(__webpack_require__.bind(null, 114)));

const _2e2a9dea = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/multipleUpload */ 32).then(__webpack_require__.bind(null, 139)));

const _63350adc = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/pricing */ 33).then(__webpack_require__.bind(null, 110)));

const _a4cdcbaa = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/tab */ 34).then(__webpack_require__.bind(null, 108)));

const _14782a64 = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/table */ 35).then(__webpack_require__.bind(null, 106)));

const _2e579625 = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/user */ 36).then(__webpack_require__.bind(null, 105)));

const _ec685176 = () => interopDefault(__webpack_require__.e(/* import() | pages/stisla/components/wizard */ 37).then(__webpack_require__.bind(null, 104)));

const _8226c31c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 140))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/general",
    component: _4cfcbcf0,
    name: "general"
  }, {
    path: "/starter/blankPage",
    component: _5e4fe5a3,
    name: "starter-blankPage"
  }, {
    path: "/starter/bootstrap/alert",
    component: _563f581b,
    name: "starter-bootstrap-alert"
  }, {
    path: "/starter/bootstrap/badge",
    component: _2b57eee2,
    name: "starter-bootstrap-badge"
  }, {
    path: "/starter/bootstrap/breadcrumb",
    component: _eec78158,
    name: "starter-bootstrap-breadcrumb"
  }, {
    path: "/starter/bootstrap/buttons",
    component: _5915f400,
    name: "starter-bootstrap-buttons"
  }, {
    path: "/starter/bootstrap/card",
    component: _70649aa1,
    name: "starter-bootstrap-card"
  }, {
    path: "/starter/bootstrap/carousel",
    component: _d37c971e,
    name: "starter-bootstrap-carousel"
  }, {
    path: "/starter/bootstrap/collapse",
    component: _c116ef84,
    name: "starter-bootstrap-collapse"
  }, {
    path: "/starter/bootstrap/dropdown",
    component: _c45c52bc,
    name: "starter-bootstrap-dropdown"
  }, {
    path: "/starter/bootstrap/form",
    component: _e5c39b56,
    name: "starter-bootstrap-form"
  }, {
    path: "/starter/bootstrap/listGroup",
    component: _441f5140,
    name: "starter-bootstrap-listGroup"
  }, {
    path: "/starter/bootstrap/mediaObject",
    component: _0cfe0e42,
    name: "starter-bootstrap-mediaObject"
  }, {
    path: "/starter/bootstrap/modal",
    component: _2ebeb8ec,
    name: "starter-bootstrap-modal"
  }, {
    path: "/starter/bootstrap/nav",
    component: _6472cbbc,
    name: "starter-bootstrap-nav"
  }, {
    path: "/starter/bootstrap/navbar",
    component: _15913d3e,
    name: "starter-bootstrap-navbar"
  }, {
    path: "/starter/bootstrap/pagination",
    component: _7df2a36b,
    name: "starter-bootstrap-pagination"
  }, {
    path: "/starter/bootstrap/popover",
    component: _48a87324,
    name: "starter-bootstrap-popover"
  }, {
    path: "/starter/bootstrap/progress",
    component: _5a82e6be,
    name: "starter-bootstrap-progress"
  }, {
    path: "/starter/bootstrap/table",
    component: _36e3818d,
    name: "starter-bootstrap-table"
  }, {
    path: "/starter/bootstrap/tooltip",
    component: _6d3e0582,
    name: "starter-bootstrap-tooltip"
  }, {
    path: "/starter/bootstrap/typography",
    component: _00150e80,
    name: "starter-bootstrap-typography"
  }, {
    path: "/starter/layout/defaultLayout",
    component: _05a032b6,
    name: "starter-layout-defaultLayout"
  }, {
    path: "/starter/layout/topNavigation",
    component: _584f3c34,
    name: "starter-layout-topNavigation"
  }, {
    path: "/stisla/components/article",
    component: _371b200c,
    name: "stisla-components-article"
  }, {
    path: "/stisla/components/avatar",
    component: _825ca79a,
    name: "stisla-components-avatar"
  }, {
    path: "/stisla/components/chatBox",
    component: _ffc9202e,
    name: "stisla-components-chatBox"
  }, {
    path: "/stisla/components/emptyState",
    component: _02d9639e,
    name: "stisla-components-emptyState"
  }, {
    path: "/stisla/components/gallery",
    component: _f38b8730,
    name: "stisla-components-gallery"
  }, {
    path: "/stisla/components/hero",
    component: _1955cad4,
    name: "stisla-components-hero"
  }, {
    path: "/stisla/components/multipleUpload",
    component: _2e2a9dea,
    name: "stisla-components-multipleUpload"
  }, {
    path: "/stisla/components/pricing",
    component: _63350adc,
    name: "stisla-components-pricing"
  }, {
    path: "/stisla/components/tab",
    component: _a4cdcbaa,
    name: "stisla-components-tab"
  }, {
    path: "/stisla/components/table",
    component: _14782a64,
    name: "stisla-components-table"
  }, {
    path: "/stisla/components/user",
    component: _2e579625,
    name: "stisla-components-user"
  }, {
    path: "/stisla/components/wizard",
    component: _ec685176,
    name: "stisla-components-wizard"
  }, {
    path: "/",
    component: _8226c31c,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e6b86f9a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "692984a7"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/style.css
var style = __webpack_require__(24);

// EXTERNAL MODULE: ./assets/css/components.css
var components = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=1202fc42&scoped=true&
var defaultvue_type_template_id_1202fc42_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._ssrNode("<div class=\"main-wrapper main-wrapper-1\" data-v-1202fc42>","</div>",[_vm._ssrNode("<div class=\"navbar-bg\" data-v-1202fc42></div> "),_c('Header'),_vm._ssrNode(" "),_c('Sidebar'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\" data-v-1202fc42>","</div>",[_vm._ssrNode("<section class=\"section\" data-v-1202fc42>","</section>",[_c('Nuxt')],1)]),_vm._ssrNode(" "),_c('Footer')],2)])}
var defaultvue_type_template_id_1202fc42_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=1202fc42&scoped=true&

// EXTERNAL MODULE: ./components/layouts/Header.vue + 4 modules
var Header = __webpack_require__(10);

// EXTERNAL MODULE: ./components/layouts/Sidebar.vue + 4 modules
var Sidebar = __webpack_require__(11);

// EXTERNAL MODULE: ./components/layouts/Footer.vue + 4 modules
var Footer = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    Header: Header["default"],
    Sidebar: Sidebar["default"],
    Footer: Footer["default"]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_1202fc42_scoped_true_render,
  defaultvue_type_template_id_1202fc42_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "1202fc42",
  "f0667a16"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(10).default,Sidebar: __webpack_require__(11).default,Footer: __webpack_require__(5).default})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(65), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "ssr": false,
      "target": "static",
      "title": "Nuxt Stisla",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fmodules\u002Fbootstrap\u002Fcss\u002Fbootstrap.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fmodules\u002Ffontawesome\u002Fcss\u002Fall.min.css"
      }],
      "script": [{
        "src": "\u002Fmodules\u002Fjquery.min.js"
      }, {
        "src": "\u002Fmodules\u002Fpopper.js"
      }, {
        "src": "\u002Fmodules\u002Ftooltip.js"
      }, {
        "src": "\u002Fmodules\u002Fbootstrap\u002Fjs\u002Fbootstrap.min.js"
      }, {
        "src": "\u002Fmodules\u002Fnicescroll\u002Fjquery.nicescroll.min.js"
      }, {
        "src": "\u002Fmodules\u002Fmoment.min.js"
      }, {
        "src": "\u002Fjs\u002Fstisla.js"
      }, {
        "src": "\u002Fjs\u002Fscripts.js"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map