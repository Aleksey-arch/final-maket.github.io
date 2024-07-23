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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/form-feedback.js":
/*!*********************************!*\
  !*** ./src/js/form-feedback.js ***!
  \*********************************/
/*! exports provided: popupFeedback, popupFeedbackActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupFeedback", function() { return popupFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupFeedbackActive", function() { return popupFeedbackActive; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");



var popupFeedback = document.querySelector('.popup-feedback');
var popupFeedbackButtonClose = document.querySelector('.popup-feedback__button-close');
var popupFeedbackActive = document.querySelector('.popup-feedback--active');
var popupFeedbackButtonOpen = document.querySelector('.popup-feedback__button-open');
var headerButtonChat = document.querySelector('.header__button-chat');
headerButtonChat.addEventListener('click', function () {
  popupFeedback.classList.add('popup-feedback--deactive');
  popupFeedback.classList.remove('popup-feedback--active');
  _main__WEBPACK_IMPORTED_MODULE_0__["main"].classList.add('popup-blur');
});
popupFeedbackButtonOpen.addEventListener('click', function () {
  popupFeedback.classList.add('popup-feedback--deactive');
  popupFeedback.classList.remove('popup-feedback--active');
  _main__WEBPACK_IMPORTED_MODULE_0__["popupBurger"].classList.add('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["main"].classList.add('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["body"].classList.add('popup-overflow');
});
popupFeedbackButtonClose.addEventListener('click', function () {
  popupFeedback.classList.remove('popup-feedback--deactive');
  popupFeedback.classList.add('popup-feedback--active');
  _main__WEBPACK_IMPORTED_MODULE_0__["popupBurger"].classList.remove('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["main"].classList.remove('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["body"].classList.remove('popup-overflow');
});

/***/ }),

/***/ "./src/js/form-order-call.js":
/*!***********************************!*\
  !*** ./src/js/form-order-call.js ***!
  \***********************************/
/*! exports provided: popupOrderCall, popupOrderCallActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupOrderCall", function() { return popupOrderCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupOrderCallActive", function() { return popupOrderCallActive; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");



var popupOrderCall = document.querySelector('.popup-order-call');
var popupOrderCallButtonClose = document.querySelector('.popup-order-call__button-close');
var popupOrderCallActive = document.querySelector('.popup-feedback--active');
var popupOrderCallButtonOpen = document.querySelector('.popup-order-call__button-open');
var headerButtonCall = document.querySelector('.header__button-call');
headerButtonCall.addEventListener('click', function () {
  popupOrderCall.classList.add('popup-feedback--deactive');
  popupOrderCall.classList.remove('popup-feedback--active');
  _main__WEBPACK_IMPORTED_MODULE_0__["main"].classList.add('popup-blur');
});
popupOrderCallButtonOpen.addEventListener('click', function () {
  popupOrderCall.classList.add('popup-feedback--deactive');
  popupOrderCall.classList.remove('popup-feedback--active');
  _main__WEBPACK_IMPORTED_MODULE_0__["popupBurger"].classList.add('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["main"].classList.add('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["body"].classList.add('popup-overflow');
});
popupOrderCallButtonClose.addEventListener('click', function () {
  popupOrderCall.classList.remove('popup-feedback--deactive');
  popupOrderCall.classList.add('popup-feedback--active');
  _main__WEBPACK_IMPORTED_MODULE_0__["popupBurger"].classList.remove('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["main"].classList.remove('popup-blur');
  _main__WEBPACK_IMPORTED_MODULE_0__["body"].classList.remove('popup-overflow');
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/normalize.scss */ "./src/scss/normalize.scss");
/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/header.scss */ "./src/scss/header.scss");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_header_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_popup_menu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/popup-menu.scss */ "./src/scss/popup-menu.scss");
/* harmony import */ var _scss_popup_menu_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_popup_menu_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_service_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/service.scss */ "./src/scss/service.scss");
/* harmony import */ var _scss_service_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_service_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _scss_swiper_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/swiper.scss */ "./src/scss/swiper.scss");
/* harmony import */ var _scss_swiper_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_swiper_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_swiper_brands_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/swiper-brands.scss */ "./src/scss/swiper-brands.scss");
/* harmony import */ var _scss_swiper_brands_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_swiper_brands_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_swiper_technic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/swiper-technic.js */ "./src/js/swiper-technic.js");
/* harmony import */ var _scss_swiper_technic_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scss/swiper-technic.scss */ "./src/scss/swiper-technic.scss");
/* harmony import */ var _scss_swiper_technic_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_swiper_technic_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _js_swiper_price_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../js/swiper-price.js */ "./src/js/swiper-price.js");
/* harmony import */ var _js_swiper_price_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_price_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scss_swiper_price_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/swiper-price.scss */ "./src/scss/swiper-price.scss");
/* harmony import */ var _scss_swiper_price_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_swiper_price_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/footer.scss */ "./src/scss/footer.scss");
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_footer_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_form_feedback_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../js/form-feedback.js */ "./src/js/form-feedback.js");
/* harmony import */ var _scss_popup_feedback_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scss/popup-feedback.scss */ "./src/scss/popup-feedback.scss");
/* harmony import */ var _scss_popup_feedback_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_popup_feedback_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _js_form_order_call_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../js/form-order-call.js */ "./src/js/form-order-call.js");
/* harmony import */ var _scss_popup_order_call_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../scss/popup-order-call.scss */ "./src/scss/popup-order-call.scss");
/* harmony import */ var _scss_popup_order_call_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scss_popup_order_call_scss__WEBPACK_IMPORTED_MODULE_17__);



















/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: popupBurger, main, body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupBurger", function() { return popupBurger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper */ "./src/js/swiper.js");
/* harmony import */ var _swiper_technic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper-technic */ "./src/js/swiper-technic.js");
/* harmony import */ var _form_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-feedback */ "./src/js/form-feedback.js");
/* harmony import */ var _form_order_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-order-call */ "./src/js/form-order-call.js");




var burgerOpen = document.querySelector('.header__burger-open');
var popupBurger = document.querySelector('.menu');
var burgerClose = document.querySelector('.menu__burger-close');
var main = document.querySelector('main');
var body = document.querySelector('body');
var mediaQuery = window.matchMedia('(min-width: 1366px)');
var mediaPopupFeedback = window.matchMedia('(min-width: 1366px)');
var popupMenuClick = document.querySelector('.popup-menu-click');

window.onload = function () {
  if (mediaQuery.matches) {
    popupBurger.classList.add('menu-active');
    popupBurger.classList.remove('menu-deactive');
  } else {
    popupBurger.classList.remove('menu-active');
    popupBurger.classList.add('menu-deactive');
  }

  descriptionContainer.classList.add('description__container--deactive');

  if (mediaQuery.matches) {
    descriptionImage.src = './img/service/image-desktop.png';
  }

  _swiper__WEBPACK_IMPORTED_MODULE_0__["swiperWrapperBrands"].classList.add('swiper-wrapper--brands-active');
  _swiper_technic__WEBPACK_IMPORTED_MODULE_1__["swiperWrapperTechnic"].classList.add('swiper-wrapper--technic-active');
  _form_feedback__WEBPACK_IMPORTED_MODULE_2__["popupFeedback"].classList.add('popup-feedback--active');
  _form_order_call__WEBPACK_IMPORTED_MODULE_3__["popupOrderCall"].classList.add('popup-feedback--active');
  popupMenuClick.style.display = 'none';
};

burgerOpen.addEventListener('click', function () {
  popupBurger.classList.add('menu-active');
  popupBurger.classList.remove('menu-deactive');
  main.classList.add('popup-blur');
  popupMenuClick.style.display = 'block';
});
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    popupBurger.classList.remove('menu-active');
    popupBurger.classList.add('menu-deactive');
    main.classList.remove('popup-blur');
    popupMenuClick.style.display = 'none';
  }
});
popupMenuClick.addEventListener('click', function () {
  popupBurger.classList.remove('menu-active');
  popupBurger.classList.add('menu-deactive');
  main.classList.remove('popup-blur');
  popupMenuClick.style.display = 'none';
});
burgerClose.addEventListener('click', function (e) {
  popupBurger.classList.remove('menu-active');
  popupBurger.classList.add('menu-deactive');
  main.classList.remove('popup-blur');
  popupMenuClick.style.display = 'none';
}); //..............................................

var descriptionButton = document.querySelector('.description__button');
var descriptionButtonText = document.querySelector('.description__button-text');
var descriptionContainer = document.querySelector('.description__container');
var descriptionButtonIcon = document.querySelector('.description__button-icon');
var descriptionImage = document.querySelector('.description__image');
descriptionButton.addEventListener('click', function () {
  if (descriptionContainer.classList.contains('description__container--deactive')) {
    descriptionContainer.classList.add('description__container--active');
    descriptionContainer.classList.remove('description__container--deactive');
    descriptionButtonIcon.classList.add('description__button-icon--active');
    context();
  } else {
    descriptionContainer.classList.add('description__container--deactive');
    descriptionContainer.classList.remove('description__container--active');
    descriptionButtonIcon.classList.remove('description__button-icon--active');
    context();
  }
});

var context = function context() {
  if (descriptionContainer.classList.contains('description__container--active')) {
    descriptionButtonText.textContent = 'Скрыть';
  } else {
    descriptionButtonText.textContent = 'Читать далее';
  }
};

/***/ }),

/***/ "./src/js/swiper-price.js":
/*!********************************!*\
  !*** ./src/js/swiper-price.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import * as say from './swiper.js';
window.addEventListener('DOMContentLoaded', function () {
  var resizableSwiper = function resizableSwiper(breakpoint, swiperClass, swiperSettings, callback) {
    var swiper;
    breakpoint = window.matchMedia(breakpoint);

    var enableSwiper = function enableSwiper(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    var checker = function checker() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  var someFunc = function someFunc(instance) {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper('(max-width: 768px)', '.swiper-price', _defineProperty({
    loop: true,
    spaceBetween: 16,
    watchSlidesProgress: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }, "slidesPerView", 'auto'), someFunc);
});

/***/ }),

/***/ "./src/js/swiper-technic.js":
/*!**********************************!*\
  !*** ./src/js/swiper-technic.js ***!
  \**********************************/
/*! exports provided: swiperWrapperTechnic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swiperWrapperTechnic", function() { return swiperWrapperTechnic; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import * as say from './swiper.js';
window.addEventListener('DOMContentLoaded', function () {
  var resizableSwiper = function resizableSwiper(breakpoint, swiperClass, swiperSettings, callback) {
    var swiper;
    breakpoint = window.matchMedia(breakpoint);

    var enableSwiper = function enableSwiper(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    var checker = function checker() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  var someFunc = function someFunc(instance) {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper('(max-width: 768px)', '.swiper-technic', _defineProperty({
    loop: true,
    spaceBetween: 16,
    watchSlidesProgress: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }, "slidesPerView", 'auto'), someFunc);
});
var swiperTechnicButton = document.querySelector('.swiper-technic__button');
var swiperWrapperTechnic = document.querySelector('.swiper-wrapper--technic');
var swiperTechnicImg = document.querySelector('.swiper-technic__img');
var swiperTechnicButtonText = document.querySelector('.swiper-technic__button--text');
swiperTechnicButton.addEventListener('click', function () {
  if (swiperWrapperTechnic.classList.contains('swiper-wrapper--technic-active')) {
    swiperWrapperTechnic.classList.remove('swiper-wrapper--technic-active');
    swiperWrapperTechnic.classList.add('swiper-wrapper--technic-deactive');
    context();
  } else {
    swiperWrapperTechnic.classList.remove('swiper-wrapper--technic-deactive');
    swiperWrapperTechnic.classList.add('swiper-wrapper--technic-active');
    context();
  }
});

var context = function context() {
  if (swiperWrapperTechnic.classList.contains('swiper-wrapper--technic-deactive')) {
    swiperTechnicButtonText.textContent = 'Скрыть';
    swiperTechnicImg.classList.add('swiper-technic__img-transform');
  } else {
    swiperTechnicButtonText.textContent = 'Читать далее';
    swiperTechnicImg.classList.remove('swiper-technic__img-transform');
  }
};

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! exports provided: swiperWrapperBrands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swiperWrapperBrands", function() { return swiperWrapperBrands; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import * as say from './swiper.js';
window.addEventListener('DOMContentLoaded', function () {
  var resizableSwiper = function resizableSwiper(breakpoint, swiperClass, swiperSettings, callback) {
    var swiper;
    breakpoint = window.matchMedia(breakpoint);

    var enableSwiper = function enableSwiper(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    var checker = function checker() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  var someFunc = function someFunc(instance) {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper('(max-width: 768px)', '.swiper', _defineProperty({
    loop: true,
    spaceBetween: 16,
    watchSlidesProgress: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }, "slidesPerView", 'auto'), someFunc);
});
var swiperBrandsButton = document.querySelector('.swiper-brands__button');
var swiperWrapperBrands = document.querySelector('.swiper-wrapper--brands');
var swiperBrandsImg = document.querySelector('.swiper-brands__img');
var swiperBrandsButtonText = document.querySelector('.swiper-brands__button--text');
swiperBrandsButton.addEventListener('click', function () {
  if (swiperWrapperBrands.classList.contains('swiper-wrapper--brands-active')) {
    swiperWrapperBrands.classList.remove('swiper-wrapper--brands-active');
    swiperWrapperBrands.classList.add('swiper-wrapper--brands-deactive');
    context();
  } else {
    swiperWrapperBrands.classList.remove('swiper-wrapper--brands-deactive');
    swiperWrapperBrands.classList.add('swiper-wrapper--brands-active');
    context();
  }
});

var context = function context() {
  if (swiperWrapperBrands.classList.contains('swiper-wrapper--brands-deactive')) {
    swiperBrandsButtonText.textContent = 'Скрыть';
    swiperBrandsImg.classList.add('swiper-brands__img-transform');
  } else {
    swiperBrandsButtonText.textContent = 'Читать далее';
    swiperBrandsImg.classList.remove('swiper-brands__img-transform');
  }
};

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/normalize.scss":
/*!*********************************!*\
  !*** ./src/scss/normalize.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/popup-feedback.scss":
/*!**************************************!*\
  !*** ./src/scss/popup-feedback.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/popup-menu.scss":
/*!**********************************!*\
  !*** ./src/scss/popup-menu.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/popup-order-call.scss":
/*!****************************************!*\
  !*** ./src/scss/popup-order-call.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/service.scss":
/*!*******************************!*\
  !*** ./src/scss/service.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/swiper-brands.scss":
/*!*************************************!*\
  !*** ./src/scss/swiper-brands.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/swiper-price.scss":
/*!************************************!*\
  !*** ./src/scss/swiper-price.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/swiper-technic.scss":
/*!**************************************!*\
  !*** ./src/scss/swiper-technic.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/swiper.scss":
/*!******************************!*\
  !*** ./src/scss/swiper.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map