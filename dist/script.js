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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel */ "./src/assets/js/modules/carousel.js");
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ "./src/assets/js/modules/accordeon.js");
/* harmony import */ var _modules_carousel_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel_team */ "./src/assets/js/modules/carousel_team.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/assets/js/modules/form.js");
/* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/video */ "./src/assets/js/modules/video.js");





window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__["default"])('.services__inner_accordeon', '.services__inner_accordeon-item-content', '.services__inner_accordeon-item-title', 'services__inner_accordeon-item-content_active');
  Object(_modules_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])('.testimonials__content_carousel', '.testimonials__content_carousel-wrapper-track', '.testimonials__content_carousel-wrapper-track-item', '.testimonials__content_carousel-wrapper-arrow_up', '.testimonials__content_carousel-wrapper-arrow_down');
  Object(_modules_carousel_team__WEBPACK_IMPORTED_MODULE_2__["default"])('.ourteam__inner_carousel-wrapper', '.ourteam__inner_carousel-wrapper-photo-track', '.ourteam__inner_carousel-wrapper-content-track', '.ourteam__inner_carousel-wrapper-photo', '.ourteam__inner_carousel-wrapper-content', '.ourteam__inner_carousel-wrapper-photo-track-item', '.ourteam__inner_carousel-wrapper-content-track-text', '.ourteam__inner_carousel-wrapper-arrow_left', '.ourteam__inner_carousel-wrapper-arrow_right', 'active', 'active_block');
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])('.contactus__inner_content-form', '.contactus');
  Object(_modules_video__WEBPACK_IMPORTED_MODULE_4__["default"])('player', '.intro__content_video-wrapper-play');
});

/***/ }),

/***/ "./src/assets/js/modules/accordeon.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/accordeon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordeon = (parentSelector, contentSelector, triggerSelector, activeClass) => {
  const parent = document.querySelector(parentSelector),
        content = parent.querySelectorAll(contentSelector),
        button = parent.querySelectorAll(triggerSelector);
  button.forEach((item, i) => {
    item.addEventListener('click', function () {
      removeActive();

      if (!this.nextElementSibling.classList.contains(activeClass)) {
        this.nextElementSibling.classList.add(activeClass); // this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.classList.remove(activeClass); // this.nextElementSibling.style.maxHeight = 0;
      }
    });
  });

  function removeActive() {
    content.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (accordeon);

/***/ }),

/***/ "./src/assets/js/modules/carousel.js":
/*!*******************************************!*\
  !*** ./src/assets/js/modules/carousel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const carousel = (parentSelector, trackSelector, itemSelector, prevSelector, nextSelector, itemInFrame = 2, vertical = true) => {
  const parent = document.querySelector(parentSelector),
        track = parent.querySelector(trackSelector),
        items = parent.querySelectorAll(itemSelector),
        prev = parent.querySelector(prevSelector),
        next = parent.querySelector(nextSelector),
        frameHeight = +window.getComputedStyle(parent).height.slice(0, -2) + 70;
  let offset = 0,
      trackHeight;

  if (itemInFrame > 1) {
    trackHeight = frameHeight * items.length / itemInFrame;
  } else {
    trackHeight = frameHeight * items.length;
  }

  track.style.height = trackHeight + 'px';
  prev.addEventListener('click', () => {
    if (offset <= 0) {
      offset = trackHeight - frameHeight;
    } else {
      offset -= frameHeight;
    }

    if (vertical) {
      track.style.transform = `translateY(-${offset}px)`;
    } else {
      track.style.transform = `translateX(-${offset}px)`;
    }
  });
  next.addEventListener('click', () => {
    if (offset >= trackHeight - frameHeight) {
      offset = 0;
    } else {
      offset += frameHeight;
    }

    if (vertical) {
      track.style.transform = `translateY(-${offset}px)`;
    } else {
      track.style.transform = `translateX(-${offset}px)`;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/assets/js/modules/carousel_team.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/carousel_team.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const carouselTeam = (parentSelector, photoTrackSelector, contentTrackSelector, photoFrameSelector, contentFrameSelector, photoItemSelector, contentItemSelector, prevSelector, nextSelector, photoActiveClass, contentActiveClass) => {
  const parent = document.querySelector(parentSelector),
        photoTrack = parent.querySelector(photoTrackSelector),
        contentTrack = parent.querySelector(contentTrackSelector),
        photoFrame = parent.querySelector(photoFrameSelector),
        contentFrame = parent.querySelector(contentFrameSelector),
        photoItem = parent.querySelectorAll(photoItemSelector),
        contentItem = parent.querySelectorAll(contentItemSelector),
        prev = parent.querySelector(prevSelector),
        next = parent.querySelector(nextSelector),
        photoFrameWidth = +window.getComputedStyle(photoFrame).width.slice(0, -2),
        contentFrameWidth = +window.getComputedStyle(contentFrame).width.slice(0, -2);
  let offsetPhoto = 0,
      offsetContent = 0,
      photoTrackWidth = photoFrameWidth * photoItem.length,
      contentTrackWidth = contentFrameWidth * contentItem.length,
      slideIndex = 1;
  photoTrack.style.width = photoTrackWidth + 'px';
  contentTrack.style.width = contentTrackWidth + 'px';

  (function init() {
    offsetPhoto = slideIndex * photoFrameWidth;
    offsetContent = slideIndex * contentFrameWidth;
    photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
    contentTrack.style.transform = `translateX(-${offsetContent}px)`;
  })();

  prev.addEventListener('click', () => {
    if (offsetPhoto <= 0) {
      offsetPhoto = photoTrackWidth - photoFrameWidth;
      offsetContent = contentFrameWidth * (contentItem.length - 1);
      slideIndex = photoItem.length - 1;
    } else {
      offsetPhoto -= photoFrameWidth;
      offsetContent -= contentFrameWidth;
      slideIndex -= 1;
    }

    removeActive();
    photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
    photoItem[slideIndex].classList.add(photoActiveClass);
    contentTrack.style.transform = `translateX(-${offsetContent}px)`;
    contentItem[slideIndex].classList.add(contentActiveClass);
  });
  next.addEventListener('click', () => {
    if (offsetPhoto >= photoTrackWidth - photoFrameWidth) {
      offsetPhoto = 0;
      offsetContent = 0;
      slideIndex = 0;
    } else {
      offsetPhoto += photoFrameWidth;
      offsetContent += contentFrameWidth;
      slideIndex += 1;
    }

    removeActive();
    photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
    photoItem[slideIndex].classList.add(photoActiveClass);
    contentTrack.style.transform = `translateX(-${offsetContent}px)`;
    contentItem[slideIndex].classList.add(contentActiveClass);
  });

  function removeActive() {
    photoItem.forEach(item => {
      item.classList.remove(photoActiveClass);
    });
    contentItem.forEach(item => {
      item.classList.remove(contentActiveClass);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (carouselTeam);

/***/ }),

/***/ "./src/assets/js/modules/form.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const form = (formSelector, parentSelector) => {
  const form = document.querySelector(formSelector),
        parent = document.querySelector(parentSelector),
        body = document.querySelector('body');

  async function sendReq(url, data) {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let message = {
      loading: 'Идет загрузка',
      success: 'Спасибо, скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так'
    };
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.cssText = `
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .7);
        `;
    body.append(overlay);
    let modal = document.createElement('div');
    modal.style.cssText = `
            width: 300px;
            padding: 40px;
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Raleway', sans-serif;
            font-size: 24px;
            text-align: center;
            color: green;
        `;
    overlay.append(modal);
    body.style.overflow = 'hidden';
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
    let formData = new FormData(this);
    modal.textContent = message.loading;
    sendReq('./assets/server.php', formData).then(res => {
      console.log(res);
      modal.textContent = message.success;
    }).catch(() => modal.textContent = message.failure).finally(() => {
      form.reset();
      let timerId = setTimeout(() => {
        overlay.remove();
      }, 3000);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/assets/js/modules/video.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/video.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const video = (playerId, triggerSelector) => {
  const btnPlay = document.querySelector(triggerSelector);
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  let player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player(playerId, {
      height: '360',
      width: '640',
      videoId: 'B6uQB17FDyU',
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  btnPlay.addEventListener('click', () => {
    onYouTubeIframeAPIReady();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (video);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map