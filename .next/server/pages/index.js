module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: external "date-fns/locale/pt-BR"
var pt_BR_ = __webpack_require__("RvHN");
var pt_BR_default = /*#__PURE__*/__webpack_require__.n(pt_BR_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/services/api.ts

const api = external_axios_default.a.create({
  baseURL: 'http://localhost:3333/'
});
// CONCATENATED MODULE: ./src/utils/convertDurationToTimeString.ts
function convertDurationToTimeString(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = duration % 60;
  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
  return timeString;
}
// EXTERNAL MODULE: ./src/pages/home.module.scss
var home_module = __webpack_require__("pYeR");
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);

// CONCATENATED MODULE: ./src/pages/index.tsx







function Home({
  latestEpisodes,
  allEpisodes
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: home_module_default.a.homepage,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: home_module_default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        children: "\xDAltimos lan\xE7amentos"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        children: latestEpisodes.map(episode => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "episode.thumbnail",
              alt: episode.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: home_module_default.a.episodeDetails,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "",
                children: episode.title
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: episode.members
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: episode.publishedAt
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: episode.durationAsString
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/play-green.svg",
                alt: "Tocar epis\xF3dio"
              })
            })]
          }, episode.id);
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: home_module_default.a.allEpisodes
    })]
  });
}
const getStaticProps = async () => {
  const {
    data
  } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: Object(external_date_fns_["format"])(Object(external_date_fns_["parseISO"])(episode.published_at), 'd MMM yy', {
        locale: pt_BR_default.a
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    };
  });
  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);
  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  };
};

/***/ }),

/***/ "RvHN":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/pt-BR");

/***/ }),

/***/ "pYeR":
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });