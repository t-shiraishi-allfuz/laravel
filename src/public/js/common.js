/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/common.js":
/*!********************************!*\
  !*** ./resources/js/common.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 汎用クラス
(function () {
  // 存在したら何もしない
  if (!!window.common) {
    return;
  }

  window.common = {
    getWindowHeight: function getWindowHeight() {
      return window.innerHeight || $(window).height();
    },
    getZoomWindowHeight: function getZoomWindowHeight() {
      if (!common.isPcGree()) {
        return common.getWindowHeight() / common.getZoom();
      } else {
        return +$('#app-container').height();
      }
    },
    scrollTop: function scrollTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 1);
    },
    getZoom: function getZoom() {
      if (common.isAndroid() && common.getAppVersion() >= 71) {
        return 1;
      }

      return $('html').css('zoom');
    },
    getScrollTop: function getScrollTop() {
      return $(window).scrollTop() / this.getZoom();
    },
    setStorage: function setStorage(key, value) {
      window.localStorage.setItem(key, value);
      return this;
    },
    getStorage: function getStorage(key) {
      var result = window.localStorage.getItem(key);

      if (result === 'undefined') {
        result = undefined;
      }

      if (result === 'false') {
        result = false;
      }

      if (result === 'true') {
        result = true;
      }

      if (result === 'null') {
        result = null;
      }

      return result;
    },
    removeItem: function removeItem(key) {
      window.localStorage.removeItem(key);
    },
    clearStorage: function clearStorage() {
      window.localStorage.clear();
    },
    isIOS: function isIOS() {
      var ua = window.navigator.userAgent;
      return /iPhone|iPad|iPod/.test(ua);
    },
    isIOSX: function isIOSX() {
      var ua = window.navigator.userAgent;

      if (ua.indexOf('iPhone OS 11_') >= 0 || ua.indexOf('iPhone OS 13_') >= 0) {
        var sw = window.screen.width;
        var sh = window.screen.height;

        if (sw === 375 && sh === 812) {
          return true;
        }

        return false;
      }

      return false;
    },
    isAndroid: function isAndroid() {
      var ua = window.navigator.userAgent;
      return /Android/.test(ua);
    }
  };
})();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/index.scss":
/*!***********************************!*\
  !*** ./resources/sass/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/login.scss":
/*!***********************************!*\
  !*** ./resources/sass/login.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/js/common.js ./resources/sass/app.scss ./resources/sass/index.scss ./resources/sass/login.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/resources/js/common.js */"./resources/js/common.js");
__webpack_require__(/*! /var/www/resources/sass/app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! /var/www/resources/sass/index.scss */"./resources/sass/index.scss");
module.exports = __webpack_require__(/*! /var/www/resources/sass/login.scss */"./resources/sass/login.scss");


/***/ })

/******/ });