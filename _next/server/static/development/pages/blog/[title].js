module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/_desktop/blog-card-horizontal/blog-card-horizontal.component.tsx":
/*!*************************************************************************************!*\
  !*** ./components/_desktop/blog-card-horizontal/blog-card-horizontal.component.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-card-horizontal.styles */ "./components/_desktop/blog-card-horizontal/blog-card-horizontal.styles.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/blog-card-horizontal/blog-card-horizontal.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogCardHorizontal = ({
  imageUrl,
  title,
  author,
  postedDate,
  urlFriendlyTitle
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/blog/${urlFriendlyTitle}`,
    as: `/blog/${urlFriendlyTitle}`,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["ImageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, title), __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["Author"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Posted By ", author), __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["Date"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, postedDate), __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(_blog_card_horizontal_styles__WEBPACK_IMPORTED_MODULE_2__["LinkAnchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Read more"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogCardHorizontal);

/***/ }),

/***/ "./components/_desktop/blog-card-horizontal/blog-card-horizontal.styles.tsx":
/*!**********************************************************************************!*\
  !*** ./components/_desktop/blog-card-horizontal/blog-card-horizontal.styles.tsx ***!
  \**********************************************************************************/
/*! exports provided: LayoutWrapper, ImageContainer, Image, Title, Author, Date, LinkContainer, LinkAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWrapper", function() { return LayoutWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContainer", function() { return LinkContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAnchor", function() { return LinkAnchor; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-horizontalstyles__LayoutWrapper",
  componentId: "we1cyw-0"
})(["", ""], Object.assign({
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "marginLeft": _tailwindConfig.theme.margin["4"],
    "marginRight": _tailwindConfig.theme.margin["4"]
  }
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white"), {
  "boxShadow": _tailwindConfig.theme.boxShadow["default"],
  "paddingBottom": _tailwindConfig.theme.padding["4"],
  "marginBottom": _tailwindConfig.theme.margin["4"],
  "cursor": _tailwindConfig.theme.cursor["pointer"]
}));
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-horizontalstyles__ImageContainer",
  componentId: "we1cyw-1"
})(["", ""], {
  "height": _tailwindConfig.theme.height["56"],
  "overflow": "hidden"
});
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "blog-card-horizontalstyles__Image",
  componentId: "we1cyw-2"
})(["", ""], {
  "width": _tailwindConfig.theme.width["full"],
  "height": _tailwindConfig.theme.height["56"],
  "objectFit": "cover",
  "objectPosition": _tailwindConfig.theme.objectPosition["top"]
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.attrs({
  className: 'line-clamp'
}).withConfig({
  displayName: "blog-card-horizontalstyles__Title",
  componentId: "we1cyw-3"
})(["", ""], Object.assign({
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "paddingTop": _tailwindConfig.theme.padding["3"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "2xl"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-light-blue"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), {
  "lineHeight": _tailwindConfig.theme.lineHeight["6"]
}));
const Author = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "blog-card-horizontalstyles__Author",
  componentId: "we1cyw-4"
})(["", ""], Object.assign({
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-700"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "semibold")));
const Date = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "blog-card-horizontalstyles__Date",
  componentId: "we1cyw-5"
})(["", ""], Object.assign({
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-600")));
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-horizontalstyles__LinkContainer",
  componentId: "we1cyw-6"
})(["", ""], {
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "textAlign": "left"
});
const LinkAnchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.attrs({
  className: 'text-link'
}).withConfig({
  displayName: "blog-card-horizontalstyles__LinkAnchor",
  componentId: "we1cyw-7"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "xl")));

/***/ }),

/***/ "./components/_desktop/blog-card-vertical/blog-card-vertical.component.tsx":
/*!*********************************************************************************!*\
  !*** ./components/_desktop/blog-card-vertical/blog-card-vertical.component.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-card-vertical.styles */ "./components/_desktop/blog-card-vertical/blog-card-vertical.styles.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/blog-card-vertical/blog-card-vertical.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogCardVertical = ({
  imageUrl,
  title,
  author,
  postedDate,
  urlFriendlyTitle
}) => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/blog/${urlFriendlyTitle}`,
    as: `/blog/${urlFriendlyTitle}`,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, title), __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["Author"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Posted By ", author), __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["Date"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, postedDate), __jsx(_blog_card_vertical_styles__WEBPACK_IMPORTED_MODULE_2__["LinkAnchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Read more")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogCardVertical);

/***/ }),

/***/ "./components/_desktop/blog-card-vertical/blog-card-vertical.styles.tsx":
/*!******************************************************************************!*\
  !*** ./components/_desktop/blog-card-vertical/blog-card-vertical.styles.tsx ***!
  \******************************************************************************/
/*! exports provided: Wrapper, LayoutContainer, LayoutLeft, Image, LayoutRight, Title, Author, Date, LinkAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainer", function() { return LayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutLeft", function() { return LayoutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRight", function() { return LayoutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAnchor", function() { return LinkAnchor; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-verticalstyles__Wrapper",
  componentId: "aj3mg2-0"
})(["", ""], Object.assign({
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "marginLeft": _tailwindConfig.theme.margin["4"]
  }
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white"), {
  "boxShadow": _tailwindConfig.theme.boxShadow["default"],
  "marginBottom": _tailwindConfig.theme.margin["4"],
  "cursor": _tailwindConfig.theme.cursor["pointer"]
}));
const LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-verticalstyles__LayoutContainer",
  componentId: "aj3mg2-1"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "flexDirection": "row",
    "height": _tailwindConfig.theme.height["40"],
    "overflow": "hidden"
  }
});
const LayoutLeft = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-verticalstyles__LayoutLeft",
  componentId: "aj3mg2-2"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["1/3"],
    "height": _tailwindConfig.theme.height["auto"]
  },
  "overflow": "hidden"
});
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "blog-card-verticalstyles__Image",
  componentId: "aj3mg2-3"
})(["", ""], {
  "width": _tailwindConfig.theme.width["full"],
  "height": _tailwindConfig.theme.height["full"],
  "objectFit": "cover",
  "objectPosition": _tailwindConfig.theme.objectPosition["center"]
});
const LayoutRight = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-card-verticalstyles__LayoutRight",
  componentId: "aj3mg2-4"
})(["", ""], {
  "padding": _tailwindConfig.theme.padding["4"],
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["2/3"],
    "paddingTop": _tailwindConfig.theme.padding["0"],
    "paddingBottom": _tailwindConfig.theme.padding["0"]
  },
  "width": _tailwindConfig.theme.width["full"]
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.attrs({
  className: 'line-clamp'
}).withConfig({
  displayName: "blog-card-verticalstyles__Title",
  componentId: "aj3mg2-5"
})(["", ""], Object.assign({
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "paddingTop": _tailwindConfig.theme.padding["3"]
  }
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "2xl"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-light-blue"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), {
  "lineHeight": _tailwindConfig.theme.lineHeight["6"]
}));
const Author = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "blog-card-verticalstyles__Author",
  componentId: "aj3mg2-6"
})(["", ""], Object.assign({
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-700"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "semibold")));
const Date = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "blog-card-verticalstyles__Date",
  componentId: "aj3mg2-7"
})(["", ""], Object.assign({
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-600")));
const LinkAnchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.attrs({
  className: 'text-link'
}).withConfig({
  displayName: "blog-card-verticalstyles__LinkAnchor",
  componentId: "aj3mg2-8"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "xl"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), {
  "display": "inline-block"
}));

/***/ }),

/***/ "./components/_desktop/blog-card/blog-card.component.tsx":
/*!***************************************************************!*\
  !*** ./components/_desktop/blog-card/blog-card.component.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blog_card_horizontal_blog_card_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-card-horizontal/blog-card-horizontal.component */ "./components/_desktop/blog-card-horizontal/blog-card-horizontal.component.tsx");
/* harmony import */ var _blog_card_vertical_blog_card_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-card-vertical/blog-card-vertical.component */ "./components/_desktop/blog-card-vertical/blog-card-vertical.component.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/blog-card/blog-card.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogCard = ({
  postData,
  direction = 'horizontal'
}) => {
  const {
    title,
    urlFriendlyTitle,
    imageUrl,
    caption = '',
    author,
    postedDate,
    description,
    videoLink = ''
  } = postData;
  return direction == 'horizontal' ? __jsx(_blog_card_horizontal_blog_card_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    urlFriendlyTitle: urlFriendlyTitle,
    imageUrl: imageUrl,
    author: author,
    postedDate: postedDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }) : __jsx(_blog_card_vertical_blog_card_vertical_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    urlFriendlyTitle: urlFriendlyTitle,
    imageUrl: imageUrl,
    author: author,
    postedDate: postedDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogCard);

/***/ }),

/***/ "./components/_desktop/blog-posts-footer/blog-posts-footer.component.tsx":
/*!*******************************************************************************!*\
  !*** ./components/_desktop/blog-posts-footer/blog-posts-footer.component.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_posts_horizontal_blog_posts_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-posts-horizontal/blog-posts-horizontal.component */ "./components/_desktop/blog-posts-horizontal/blog-posts-horizontal.component.tsx");
/* harmony import */ var _blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-posts-footer.styles */ "./components/_desktop/blog-posts-footer/blog-posts-footer.styles.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/blog-posts-footer/blog-posts-footer.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BlogPostsFooter = ({
  children,
  title
}) => {
  return children ? __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsLayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, children), __jsx(_blog_posts_horizontal_blog_posts_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }))) : __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsLayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Check out our\xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_blog_posts_footer_styles__WEBPACK_IMPORTED_MODULE_3__["BlogPostsLinkAnchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "blog")), "!"), __jsx(_blog_posts_horizontal_blog_posts_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPostsFooter);

/***/ }),

/***/ "./components/_desktop/blog-posts-footer/blog-posts-footer.styles.tsx":
/*!****************************************************************************!*\
  !*** ./components/_desktop/blog-posts-footer/blog-posts-footer.styles.tsx ***!
  \****************************************************************************/
/*! exports provided: BlogPostsWrapper, BlogPostsLayoutContainer, BlogPostsHeader, BlogPostsLinkAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsWrapper", function() { return BlogPostsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsLayoutContainer", function() { return BlogPostsLayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsHeader", function() { return BlogPostsHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsLinkAnchor", function() { return BlogPostsLinkAnchor; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const BlogPostsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-posts-footerstyles__BlogPostsWrapper",
  componentId: "ao6bgy-0"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white"), {
  "boxShadow": _tailwindConfig.theme.boxShadow["default"],
  "borderTopWidth": _tailwindConfig.theme.borderWidth["4"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "borderWidth",
  "config": "borderWidth"
}, {
  "prop": "borderColor",
  "config": "borderColor"
}], "frost-blue")));
const BlogPostsLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "blog-posts-footerstyles__BlogPostsLayoutContainer",
  componentId: "ao6bgy-1"
})(["", ""], {
  "maxWidth": _tailwindConfig.theme.maxWidth["screen-xl"],
  "margin": _tailwindConfig.theme.margin["auto"],
  "paddingBottom": _tailwindConfig.theme.padding["2"]
});
const BlogPostsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "blog-posts-footerstyles__BlogPostsHeader",
  componentId: "ao6bgy-2"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-blue"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "2xl"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), {
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "paddingTop": _tailwindConfig.theme.padding["4"],
  "paddingBottom": _tailwindConfig.theme.padding["4"],
  "textAlign": "center",
  "lineHeight": _tailwindConfig.theme.lineHeight["tight"]
}));
const BlogPostsLinkAnchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "blog-posts-footerstyles__BlogPostsLinkAnchor",
  componentId: "ao6bgy-3"
})(["", ""], {
  "textDecoration": "underline",
  ":hover": Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
    "prop": "color",
    "config": "textColor"
  }, {
    "prop": "fontSize",
    "config": "fontSize"
  }], "frost-orange")),
  "cursor": _tailwindConfig.theme.cursor["pointer"]
});

/***/ }),

/***/ "./components/_desktop/blog-posts-horizontal/blog-posts-horizontal.component.tsx":
/*!***************************************************************************************!*\
  !*** ./components/_desktop/blog-posts-horizontal/blog-posts-horizontal.component.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_get_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/get-posts */ "./data/get-posts.tsx");
/* harmony import */ var _blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-card/blog-card.component */ "./components/_desktop/blog-card/blog-card.component.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/blog-posts-horizontal/blog-posts-horizontal.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LayoutGrid = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.attrs({
  className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
}).withConfig({
  displayName: "blog-posts-horizontalcomponent__LayoutGrid",
  componentId: "sc-1dr0jjm-0"
})([""]);

const BlogPostsHorizontal = ({
  title
}) => {
  const reducePost = _data_get_posts__WEBPACK_IMPORTED_MODULE_1__["default"].filter(item => {
    if (item.title != title) return item;
  });
  return __jsx(LayoutGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, reducePost.map(item => __jsx(_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    postData: item,
    key: item.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPostsHorizontal);

/***/ }),

/***/ "./components/_desktop/footer/footer.component.tsx":
/*!*********************************************************!*\
  !*** ./components/_desktop/footer/footer.component.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_logo_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/logo/logo.svg */ "./components/icons/logo/logo.svg.tsx");
/* harmony import */ var _icons_logo_text_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/logo-text/logo-text.svg */ "./components/icons/logo-text/logo-text.svg.tsx");
/* harmony import */ var _recognition_affiliation_block_recognition_affiliation_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recognition-affiliation-block/recognition-affiliation-block.component */ "./components/_desktop/recognition-affiliation-block/recognition-affiliation-block.component.tsx");
/* harmony import */ var _footer_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.styles */ "./components/_desktop/footer/footer.styles.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/footer/footer.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Footer = ({
  showRecognitionAffiliation = true
}) => {
  return __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["FooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, showRecognitionAffiliation ? __jsx(_recognition_affiliation_block_recognition_affiliation_block_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }) : '', __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["FooterLayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["FooterContentLeftLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_icons_logo_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colorPrimary: "text-white",
    colorSecondary: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["LogoTextAndInfoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_icons_logo_text_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "max-w-sm",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["Address"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "273 West 7th Street ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), "San Pedro, CA 90731"), __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["PhoneContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["Phone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("a", {
    className: "hover:text-frost-orange",
    href: "tel:+1866FLFMESO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Tel: (866) FLF-MESO")), __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["Phone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, " Fax: (310) 861-8803")))), __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["FooterContentRightLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["NavigationLayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sitemap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["NavigationAnchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Site Map")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["NavigationAnchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Contact")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/legalnotice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["NavigationAnchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Legal Notice"))))), __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_5__["CopyrightContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\xA9 2020 FROST LAW FIRM, PC"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/_desktop/footer/footer.styles.tsx":
/*!******************************************************!*\
  !*** ./components/_desktop/footer/footer.styles.tsx ***!
  \******************************************************/
/*! exports provided: FooterWrapper, FooterLayoutContainer, FooterContentLeftLayout, FooterContentRightLayout, LogoContainer, LogoTextAndInfoContainer, Address, PhoneContainer, Phone, NavigationLayoutContainer, NavigationAnchor, CopyrightContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLayoutContainer", function() { return FooterLayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContentLeftLayout", function() { return FooterContentLeftLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContentRightLayout", function() { return FooterContentRightLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return LogoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoTextAndInfoContainer", function() { return LogoTextAndInfoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneContainer", function() { return PhoneContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLayoutContainer", function() { return NavigationLayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationAnchor", function() { return NavigationAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightContainer", function() { return CopyrightContainer; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__FooterWrapper",
  componentId: "sc-1vywpgi-0"
})(["", ""], Object.assign({
  "flex": _tailwindConfig.theme.flex["shrink-0"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "frost-dark-blue"), {
  "paddingBottom": _tailwindConfig.theme.padding["8"]
}));
const FooterLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__FooterLayoutContainer",
  componentId: "sc-1vywpgi-1"
})(["", ""], Object.assign({
  "display": "flex",
  "flexDirection": "column",
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "flexDirection": "row"
  },
  "maxWidth": _tailwindConfig.theme.maxWidth["screen-xl"],
  "borderTopWidth": _tailwindConfig.theme.borderWidth["default"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "borderWidth",
  "config": "borderWidth"
}, {
  "prop": "borderColor",
  "config": "borderColor"
}], "white"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "white"), {
  "margin": _tailwindConfig.theme.margin["auto"],
  "paddingTop": _tailwindConfig.theme.padding["8"]
}));
const FooterContentLeftLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__FooterContentLeftLayout",
  componentId: "sc-1vywpgi-2"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["1/2"]
  },
  "display": "flex",
  "paddingLeft": _tailwindConfig.theme.padding["6"]
});
const FooterContentRightLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__FooterContentRightLayout",
  componentId: "sc-1vywpgi-3"
})(["", ""], {
  "marginLeft": _tailwindConfig.theme.margin["16"],
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["1/2"]
  },
  "display": "flex",
  "paddingLeft": _tailwindConfig.theme.padding["10"]
});
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__LogoContainer",
  componentId: "sc-1vywpgi-4"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["1/3"]
  }
});
const LogoTextAndInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__LogoTextAndInfoContainer",
  componentId: "sc-1vywpgi-5"
})(["", ""], {
  "width": _tailwindConfig.theme.width["2/3"],
  "marginLeft": _tailwindConfig.theme.margin["8"],
  "marginTop": _tailwindConfig.theme.margin["4"]
});
const Address = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "footerstyles__Address",
  componentId: "sc-1vywpgi-6"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "bold"), {
  "marginTop": _tailwindConfig.theme.margin["6"]
}));
const PhoneContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__PhoneContainer",
  componentId: "sc-1vywpgi-7"
})(["", ""], {
  "marginTop": _tailwindConfig.theme.margin["4"]
});
const Phone = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "footerstyles__Phone",
  componentId: "sc-1vywpgi-8"
})(["", ""], {
  "display": "block",
  "paddingTop": _tailwindConfig.theme.padding["2"],
  "paddingBottom": _tailwindConfig.theme.padding["2"]
});
const NavigationLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.nav.withConfig({
  displayName: "footerstyles__NavigationLayoutContainer",
  componentId: "sc-1vywpgi-9"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "paddingTop": _tailwindConfig.theme.padding["3"]
});
const NavigationAnchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "footerstyles__NavigationAnchor",
  componentId: "sc-1vywpgi-10"
})(["", ""], {
  "textDecoration": "underline",
  "marginBottom": _tailwindConfig.theme.margin["3"],
  ":hover": Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
    "prop": "color",
    "config": "textColor"
  }, {
    "prop": "fontSize",
    "config": "fontSize"
  }], "frost-orange")),
  "cursor": _tailwindConfig.theme.cursor["pointer"]
});
const CopyrightContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "footerstyles__CopyrightContainer",
  componentId: "sc-1vywpgi-11"
})(["", ""], Object.assign({
  "textAlign": "center"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "white"), {
  "marginTop": _tailwindConfig.theme.margin["6"],
  "marginLeft": _tailwindConfig.theme.margin["3"]
}));

/***/ }),

/***/ "./components/_desktop/recognition-affiliation-block/recognition-affiliation-block.component.tsx":
/*!*******************************************************************************************************!*\
  !*** ./components/_desktop/recognition-affiliation-block/recognition-affiliation-block.component.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recognition-affiliation-block.styles */ "./components/_desktop/recognition-affiliation-block/recognition-affiliation-block.styles.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/_desktop/recognition-affiliation-block/recognition-affiliation-block.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RecognitionAffiliationBlock = ({
  items = [{
    id: 1,
    imageUrl: '/images/affiliations/ntl-top-100-member-b.png',
    alt: 'The National Trial Lawyers Top 100 - Frost Law Firm'
  }, {
    id: 2,
    imageUrl: '/images/affiliations/american-association-for-justice.png',
    alt: 'American Association For Justice - Frost Law Firm'
  }, {
    id: 3,
    imageUrl: '/images/affiliations/american-board-of-trial-advocates.jpg',
    alt: 'American Board of Trial Advocates - Frost Law Firm'
  }, {
    id: 4,
    imageUrl: '/images/affiliations/KTI-LOGO-FACULTY1.jpg',
    alt: 'Keenan Trial Institute - Frost Law Firm'
  }, {
    id: 5,
    imageUrl: '/images/affiliations/NTL-Top-40-Brass-Badge.png',
    alt: 'The National Top 40 Under 40 Trial Lawyers - Frost Law Firm'
  }, {
    id: 6,
    imageUrl: '/images/affiliations/superlawyers2.png',
    alt: 'Super Lawyers - Frost Law Firm'
  }, {
    id: 7,
    imageUrl: '/images/affiliations/triallawyerscollege.jpg',
    alt: 'Graduate of Trial Lawyers College Thunderhead Ranch Durgis, Wyoming - Frost Law Firm'
  }, {
    id: 8,
    imageUrl: '/images/affiliations/usdva-accredited-attorney.png',
    alt: 'U.S. Department of Veterans Affairs Accredited Attorney - Frost Law Firm'
  }],
  bgColor = 'bg-frost-dark-blue',
  headerColor = 'text-white',
  headerHide = false
}) => {
  return __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["RecognitionAffiliationWrapper"], {
    className: bgColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["LayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, headerHide ? '' : __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    className: headerColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Recognition & Affiliation"), __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["ImageLayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, items.map(element => {
    return __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["ImageContainer"], {
      key: element.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["ImageMask"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, __jsx(_recognition_affiliation_block_styles__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: element.imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecognitionAffiliationBlock);

/***/ }),

/***/ "./components/_desktop/recognition-affiliation-block/recognition-affiliation-block.styles.tsx":
/*!****************************************************************************************************!*\
  !*** ./components/_desktop/recognition-affiliation-block/recognition-affiliation-block.styles.tsx ***!
  \****************************************************************************************************/
/*! exports provided: RecognitionAffiliationWrapper, LayoutContainer, Title, ImageLayoutContainer, ImageContainer, ImageMask, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionAffiliationWrapper", function() { return RecognitionAffiliationWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainer", function() { return LayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLayoutContainer", function() { return ImageLayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageMask", function() { return ImageMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const RecognitionAffiliationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "recognition-affiliation-blockstyles__RecognitionAffiliationWrapper",
  componentId: "sc-1mhhkmc-0"
})(["", ""], {
  "padding": _tailwindConfig.theme.padding["4"]
});
const LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "recognition-affiliation-blockstyles__LayoutContainer",
  componentId: "sc-1mhhkmc-1"
})(["", ""], {
  "maxWidth": _tailwindConfig.theme.maxWidth["screen-xl"],
  "margin": _tailwindConfig.theme.margin["auto"]
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "recognition-affiliation-blockstyles__Title",
  componentId: "sc-1mhhkmc-2"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "2xl"), {
  "lineHeight": _tailwindConfig.theme.lineHeight["tight"],
  "textAlign": "center",
  "marginBottom": _tailwindConfig.theme.margin["2"]
}));
const ImageLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "recognition-affiliation-blockstyles__ImageLayoutContainer",
  componentId: "sc-1mhhkmc-3"
})(["", ""], {
  "display": "flex",
  "flexDirection": "row",
  "flexWrap": "wrap",
  "margin": _tailwindConfig.theme.margin["auto"]
});
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "recognition-affiliation-blockstyles__ImageContainer",
  componentId: "sc-1mhhkmc-4"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "lg")]: {
    "width": _tailwindConfig.theme.width["2/6"]
  },
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "xl")]: {
    "width": _tailwindConfig.theme.width["9/12"]
  },
  "width": _tailwindConfig.theme.width["1/2"],
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "width": _tailwindConfig.theme.width["1/3"]
  },
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["1/4"]
  },
  "display": "flex",
  "alignItems": "center"
});
const ImageMask = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "recognition-affiliation-blockstyles__ImageMask",
  componentId: "sc-1mhhkmc-5"
})(["", ""], Object.assign({
  "margin": _tailwindConfig.theme.margin["2"],
  "padding": _tailwindConfig.theme.padding["4"],
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "height": _tailwindConfig.theme.height["32"],
  "width": _tailwindConfig.theme.width["full"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white"), {
  "boxShadow": _tailwindConfig.theme.boxShadow["default"]
}));
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "recognition-affiliation-blockstyles__Image",
  componentId: "sc-1mhhkmc-6"
})(["", ""], {
  "width": _tailwindConfig.theme.width["full"],
  "height": _tailwindConfig.theme.height["full"],
  "objectFit": "contain",
  "objectPosition": _tailwindConfig.theme.objectPosition["center"]
});

/***/ }),

/***/ "./components/breadcrumbs/breadcrumbs.component.tsx":
/*!**********************************************************!*\
  !*** ./components/breadcrumbs/breadcrumbs.component.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/breadcrumbs/breadcrumbs.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "breadcrumbscomponent__Wrapper",
  componentId: "vo9q70-0"
})(["", ""], Object.assign({
  "paddingTop": _tailwindConfig.theme.padding["2"],
  "paddingBottom": _tailwindConfig.theme.padding["2"],
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "frost-light-gray")));
const LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "breadcrumbscomponent__LayoutContainer",
  componentId: "vo9q70-1"
})(["", ""], {
  "maxWidth": _tailwindConfig.theme.maxWidth["screen-xl"],
  "margin": _tailwindConfig.theme.margin["auto"]
});
const LinkAnchor = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.attrs({
  className: 'text-link'
}).withConfig({
  displayName: "breadcrumbscomponent__LinkAnchor",
  componentId: "vo9q70-2"
})(["", ""], {
  "textDecoration": "underline"
});
const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "breadcrumbscomponent__LinkWrapper",
  componentId: "vo9q70-3"
})(["", ""], {
  "display": "inline-block"
});
const BlueText = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "breadcrumbscomponent__BlueText",
  componentId: "vo9q70-4"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-blue"), {
  "paddingLeft": _tailwindConfig.theme.padding["2"],
  "paddingRight": _tailwindConfig.theme.padding["2"]
}));

const Breadcrumbs = ({
  path1,
  url1,
  path2,
  url2,
  path3,
  url3
}) => {
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(LayoutContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: url1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(LinkAnchor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, path1)), path2 !== undefined && url2 !== undefined ? __jsx(LinkWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(BlueText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "/"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `${url1}${url2}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(LinkAnchor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, path2))) : '', path3 !== undefined && url3 !== undefined ? __jsx(LinkWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(BlueText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "/"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `${url1}${url2}${url3}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(LinkAnchor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, path3))) : ''));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./components/header/header.component.tsx":
/*!************************************************!*\
  !*** ./components/header/header.component.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styles */ "./components/header/header.styles.tsx");
/* harmony import */ var _components_icons_logo_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons/logo/logo.svg */ "./components/icons/logo/logo.svg.tsx");
/* harmony import */ var _components_icons_logo_text_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/icons/logo-text/logo-text.svg */ "./components/icons/logo-text/logo-text.svg.tsx");
/* harmony import */ var _components_icons_menu_menu_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/menu/menu.svg */ "./components/icons/menu/menu.svg.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/header/header.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Header = ({
  showMobileMenu,
  page
}) => {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(showMobileMenu);

  const onClickToggleMenu = () => {
    setShowMenu(!showMenu);
    return !showMenu;
  };

  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderWrapper"], {
    active: showMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContentLayoutContainer"], {
    active: showMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderTopLevelContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_components_icons_logo_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["LogoTextContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_components_icons_logo_text_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })))), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MobileMenuContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MobileMenuButton"], {
    onClick: onClickToggleMenu,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_components_icons_menu_menu_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showMenu: showMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })))), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderNavigation"], {
    active: showMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("a", {
    className: (page == 'Home' ? 'active' : '') + ' nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("a", {
    className: (page == 'About' ? 'active' : '') + ' nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/attorneys",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    className: (page == 'Attorneys' ? 'active' : '') + ' nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Attorneys")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    className: (page == 'Blog' ? 'active' : '') + ' nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/veterans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    className: (page == 'Veterans' ? 'active' : '') + ' nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Veterans")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("a", {
    className: (page == 'Contact' ? 'active' : '') + ' nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Contact")), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MobileMenuContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_components_icons_logo_text_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["Address"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "273 West 7th Street ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), "San Pedro, CA 90731"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["Phone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("a", {
    className: "hover:text-frost-orange",
    href: "tel:+1866FLFMESO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Tel: (866) FLF-MESO")), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["Phone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Fax: (310) 861-8803"), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["PhoneButtonContainer"], {
    active: showMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    href: "tel:+1866FLFMESO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["TapToCallText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Tap to call ", __jsx("br", {
    className: "sm:hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), " +1(866) FLF-MESO"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/header.styles.tsx":
/*!*********************************************!*\
  !*** ./components/header/header.styles.tsx ***!
  \*********************************************/
/*! exports provided: HeaderWrapper, HeaderContentLayoutContainer, HeaderTopLevelContentContainer, LogoTextContainer, MobileMenuContainer, MobileMenuButton, HeaderNavigation, MobileMenuContent, Address, Phone, PhoneButtonContainer, TapToCallText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContentLayoutContainer", function() { return HeaderContentLayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopLevelContentContainer", function() { return HeaderTopLevelContentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoTextContainer", function() { return LogoTextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuContainer", function() { return MobileMenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuButton", function() { return MobileMenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigation", function() { return HeaderNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuContent", function() { return MobileMenuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneButtonContainer", function() { return PhoneButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TapToCallText", function() { return TapToCallText; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__HeaderWrapper",
  componentId: "b77hmm-0"
})(["", " ", ""], Object.assign({
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "space-between",
  "alignItems": "center",
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "paddingLeft": _tailwindConfig.theme.padding["4"],
    "paddingRight": _tailwindConfig.theme.padding["4"],
    "paddingTop": _tailwindConfig.theme.padding["3"],
    "paddingBottom": _tailwindConfig.theme.padding["3"]
  }
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white"), {
  "boxShadow": _tailwindConfig.theme.boxShadow["md"],
  "position": "sticky",
  "top": _tailwindConfig.theme.inset["0"],
  "zIndex": _tailwindConfig.theme.zIndex["10"]
}), ({
  active
}) => active ? {
  "minHeight": _tailwindConfig.theme.minHeight["screen"],
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "minHeight": _tailwindConfig.theme.minHeight["full"],
    "position": "relative"
  }
} : '');
const HeaderContentLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__HeaderContentLayoutContainer",
  componentId: "b77hmm-1"
})(["", " ", ""], {
  "width": _tailwindConfig.theme.width["full"],
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "display": "flex"
  },
  "maxWidth": _tailwindConfig.theme.maxWidth["screen-xl"]
}, ({
  active
}) => active ? {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "justifyContent": "space-between"
  },
  "flex": _tailwindConfig.theme.flex["sticky"]
} : {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "justifyContent": "space-between"
  }
});
const HeaderTopLevelContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__HeaderTopLevelContentContainer",
  componentId: "b77hmm-2"
})(["", ""], {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "paddingTop": _tailwindConfig.theme.padding["3"],
  "paddingBottom": _tailwindConfig.theme.padding["3"],
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "padding": _tailwindConfig.theme.padding["0"],
    "width": _tailwindConfig.theme.width["1/3"],
    "display": "inline-flex"
  }
});
const LogoTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__LogoTextContainer",
  componentId: "b77hmm-3"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "display": "none",
    "marginRight": _tailwindConfig.theme.margin["auto"]
  },
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "lg")]: {
    "display": "block",
    "paddingLeft": _tailwindConfig.theme.padding["2"]
  },
  "marginRight": _tailwindConfig.theme.margin["0"]
});
const MobileMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__MobileMenuContainer",
  componentId: "b77hmm-4"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "display": "none"
  }
});
const MobileMenuButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "headerstyles__MobileMenuButton",
  componentId: "b77hmm-5"
})(["", ""], Object.assign({
  "display": "block",
  "borderRadius": _tailwindConfig.theme.borderRadius["default"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "frost-blue")));
const HeaderNavigation = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.nav.withConfig({
  displayName: "headerstyles__HeaderNavigation",
  componentId: "b77hmm-6"
})(["", " ", ""], Object.assign({
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: Object.assign({
    "display": "flex",
    "padding": _tailwindConfig.theme.padding["0"],
    "width": _tailwindConfig.theme.width["2/3"],
    "alignItems": "center",
    "justifyContent": "flex-end"
  }, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
    "prop": "backgroundColor",
    "config": "backgroundColor"
  }, {
    "prop": "backgroundSize",
    "config": "backgroundSize"
  }, {
    "prop": "backgroundPosition",
    "config": "backgroundPosition"
  }], "transparent"))
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white"), {
  "width": _tailwindConfig.theme.width["full"]
}), ({
  active
}) => active ? {
  "display": "block",
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "display": "inline-flex"
  }
} : {
  "display": "none"
});
const MobileMenuContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__MobileMenuContent",
  componentId: "b77hmm-7"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "display": "none"
  },
  "paddingLeft": _tailwindConfig.theme.padding["6"],
  "paddingRight": _tailwindConfig.theme.padding["6"],
  "paddingTop": _tailwindConfig.theme.padding["8"],
  "paddingBottom": _tailwindConfig.theme.padding["8"]
});
const Address = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "headerstyles__Address",
  componentId: "b77hmm-8"
})(["", ""], Object.assign({
  "paddingTop": _tailwindConfig.theme.padding["3"]
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "bold"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-blue")));
const Phone = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "headerstyles__Phone",
  componentId: "b77hmm-9"
})(["", ""], Object.assign({
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-blue")));
const PhoneButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headerstyles__PhoneButtonContainer",
  componentId: "b77hmm-10"
})(["", " ", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "frost-orange"), {
  "borderRadius": _tailwindConfig.theme.borderRadius["default"],
  "textAlign": "center",
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "paddingTop": _tailwindConfig.theme.padding["2"],
  "paddingBottom": _tailwindConfig.theme.padding["2"],
  "width": _tailwindConfig.theme.width["full"],
  "marginTop": _tailwindConfig.theme.margin["8"]
}), ({
  active
}) => active ? {
  "display": "block",
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "sm")]: {
    "display": "none"
  }
} : {
  "display": "none"
});
const TapToCallText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "headerstyles__TapToCallText",
  componentId: "b77hmm-11"
})(["", ""], Object.assign({
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "white"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "bold"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "2xl"), {
  "letterSpacing": _tailwindConfig.theme.letterSpacing["tight"],
  "lineHeight": _tailwindConfig.theme.lineHeight["tight"]
}));

/***/ }),

/***/ "./components/icons/logo-text/logo-text.svg.tsx":
/*!******************************************************!*\
  !*** ./components/icons/logo-text/logo-text.svg.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/icons/logo-text/logo-text.svg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LogoText = ({
  color,
  className
}) => {
  return __jsx("svg", {
    style: className ? {} : {
      width: '207px'
    },
    className: className,
    viewBox: "0 0 261.21 26.38",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M9.23,3.74V11h.5a4.48,4.48,0,0,0,1.9-.35,2.93,2.93,0,0,0,1.25-1.18,5.35,5.35,0,0,0,.67-2.24H14V16h-.45c-.16-1.66-.61-2.76-1.34-3.29a4.12,4.12,0,0,0-2.48-.79h-.5v5.37A5.53,5.53,0,0,0,9.38,19a1.36,1.36,0,0,0,.58.59,2.42,2.42,0,0,0,1.17.25h.58v.48H2.54V19.8h.58a2.44,2.44,0,0,0,1.23-.27,1.21,1.21,0,0,0,.52-.62A5.55,5.55,0,0,0,5,17.28V5.73a6,6,0,0,0-.14-1.68,1.36,1.36,0,0,0-.58-.59,2.31,2.31,0,0,0-1.17-.25H2.54V2.73h14.8v5h-.53a4.62,4.62,0,0,0-.93-2.62,4.07,4.07,0,0,0-2.15-1.21,14.74,14.74,0,0,0-2.87-.19Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M25,12.6v4.72A5.32,5.32,0,0,0,25.18,19a1.26,1.26,0,0,0,.59.57,4,4,0,0,0,1.58.21v.46H18.73v-.46a3.81,3.81,0,0,0,1.59-.22A1.26,1.26,0,0,0,20.9,19a5.26,5.26,0,0,0,.17-1.72V6.4a5.21,5.21,0,0,0-.17-1.72,1.21,1.21,0,0,0-.59-.57,4,4,0,0,0-1.58-.21V3.44h7.83A17.22,17.22,0,0,1,31,3.86a4.51,4.51,0,0,1,2.3,1.56,4.18,4.18,0,0,1,.9,2.67,4,4,0,0,1-1.34,3.07,5.5,5.5,0,0,1-2.4,1.16L34.54,18a9.7,9.7,0,0,0,1.13,1.38,2.19,2.19,0,0,0,1.18.42v.46h-5.3L26.12,12.6Zm0-8.25v7.37h.7a8,8,0,0,0,2.59-.31,2.55,2.55,0,0,0,1.34-1.15,4.12,4.12,0,0,0,.49-2.15,3.92,3.92,0,0,0-.9-2.84,3.88,3.88,0,0,0-2.9-.92Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M43.62,3.21a8.34,8.34,0,0,1,9.05,8.59,9,9,0,0,1-1.87,5.63,8.32,8.32,0,0,1-7,3.23,8.48,8.48,0,0,1-7-3.08,8.88,8.88,0,0,1-2-5.77,8.4,8.4,0,0,1,2.55-6.25A8.1,8.1,0,0,1,43.62,3.21Zm.15.79a3.79,3.79,0,0,0-3.51,2.36,12.5,12.5,0,0,0-1,5.56c0,2.87.5,5,1.51,6.37a3.47,3.47,0,0,0,3,1.44,3.56,3.56,0,0,0,2.13-.62,5.07,5.07,0,0,0,1.7-2.54A14,14,0,0,0,48.19,12a15,15,0,0,0-.62-5A4.89,4.89,0,0,0,46,4.68,3.77,3.77,0,0,0,43.77,4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M64.3,3.06l.14,5.61h-.51a5.76,5.76,0,0,0-1.77-3.4,4.46,4.46,0,0,0-3-1.28,2.85,2.85,0,0,0-2,.67,2.1,2.1,0,0,0-.74,1.56,2,2,0,0,0,.26,1,4.21,4.21,0,0,0,1.16,1.15,24.25,24.25,0,0,0,2.69,1.45,11.9,11.9,0,0,1,4,2.75,4.62,4.62,0,0,1,1,2.95,4.78,4.78,0,0,1-1.64,3.63,5.89,5.89,0,0,1-4.18,1.52,6.57,6.57,0,0,1-1.5-.16,10.47,10.47,0,0,1-1.78-.61,2.71,2.71,0,0,0-1-.24,1.25,1.25,0,0,0-.68.24,1.7,1.7,0,0,0-.58.76h-.46V14.31h.46a7.28,7.28,0,0,0,2.1,4.09,4.93,4.93,0,0,0,3.36,1.41,3.15,3.15,0,0,0,2.21-.76,2.27,2.27,0,0,0,.51-2.92,3.61,3.61,0,0,0-1-1.06,14.32,14.32,0,0,0-2.28-1.31,19.61,19.61,0,0,1-3.31-1.93,5.92,5.92,0,0,1-1.54-1.77,4.38,4.38,0,0,1-.54-2.16,4.57,4.57,0,0,1,1.48-3.43,5.16,5.16,0,0,1,3.72-1.41,6,6,0,0,1,1.59.2,7.19,7.19,0,0,1,1.42.55,3.32,3.32,0,0,0,1.17.4.63.63,0,0,0,.51-.2,2.21,2.21,0,0,0,.35-.95Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M80.61,3.44V8h-.45a7.2,7.2,0,0,0-.88-2.27A3.38,3.38,0,0,0,78,4.63a4.21,4.21,0,0,0-1.65-.22H75.05v13A5.13,5.13,0,0,0,75.19,19a1.27,1.27,0,0,0,.56.57,2.26,2.26,0,0,0,1.13.24h.56v.46H68.63v-.46h.56a2.37,2.37,0,0,0,1.18-.26,1.28,1.28,0,0,0,.51-.6A5.23,5.23,0,0,0,71,17.4v-13H69.8a3.57,3.57,0,0,0-2.48.72A4.77,4.77,0,0,0,66,8h-.47V3.44Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M104.66,14.12,104,20.28H88.43V19.8H89a2.44,2.44,0,0,0,1.23-.27,1.25,1.25,0,0,0,.52-.62,5.55,5.55,0,0,0,.14-1.63V5.73a6,6,0,0,0-.14-1.68,1.36,1.36,0,0,0-.58-.59A2.31,2.31,0,0,0,89,3.21h-.58V2.73h9.35v.48H97a2.44,2.44,0,0,0-1.23.27,1.22,1.22,0,0,0-.53.62,5.2,5.2,0,0,0-.14,1.63V16.91a5.91,5.91,0,0,0,.15,1.72,1,1,0,0,0,.61.55,6.65,6.65,0,0,0,1.56.11h1.47a5,5,0,0,0,2.33-.49,4.39,4.39,0,0,0,1.61-1.55,12.54,12.54,0,0,0,1.28-3.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M115.47,15.48h-6l-.7,1.64a3.72,3.72,0,0,0-.35,1.36,1.12,1.12,0,0,0,.57,1,5,5,0,0,0,1.65.3v.46h-5.6v-.46a2.48,2.48,0,0,0,1.49-.75A10,10,0,0,0,108,16.53l6-13.44h.24l6.07,13.81a8.44,8.44,0,0,0,1.43,2.47,1.92,1.92,0,0,0,1.19.45v.46h-8.14v-.46h.33a2.47,2.47,0,0,0,1.38-.28.66.66,0,0,0,.27-.57,1.51,1.51,0,0,0-.07-.46c0-.07-.14-.38-.37-.93Zm-.42-.91-2.51-5.8L110,14.57Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M141.52,3.44V3.9a1.61,1.61,0,0,0-.79.26,1.86,1.86,0,0,0-.57.68c0,.1-.31.75-.78,1.93L134.1,20.66h-.49L129.44,9.81l-4.59,10.85h-.46L118.85,6.92a14.13,14.13,0,0,0-1.18-2.51,1.53,1.53,0,0,0-1.13-.51V3.44h7.3V3.9a2.09,2.09,0,0,0-1.17.27.76.76,0,0,0-.29.6,7.27,7.27,0,0,0,.61,2l3.3,8.17,2.64-6.38-.69-1.79a14.29,14.29,0,0,0-.88-2,2,2,0,0,0-.72-.7,2.62,2.62,0,0,0-1.18-.21V3.44h8.15V3.9a4.28,4.28,0,0,0-1.23.14.75.75,0,0,0-.4.29.78.78,0,0,0-.15.47,8.48,8.48,0,0,0,.55,1.75l3.07,8L138.2,7.3a15.37,15.37,0,0,0,.53-1.52,3.12,3.12,0,0,0,.1-.76,1,1,0,0,0-.35-.8,2.22,2.22,0,0,0-1.33-.32V3.44Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M155.49,3.74V11h.5a4.56,4.56,0,0,0,1.91-.35,3,3,0,0,0,1.24-1.18,5.21,5.21,0,0,0,.67-2.24h.45V16h-.45c-.16-1.66-.61-2.76-1.34-3.29a4.1,4.1,0,0,0-2.48-.79h-.5v5.37a5.53,5.53,0,0,0,.15,1.68,1.36,1.36,0,0,0,.58.59,2.42,2.42,0,0,0,1.17.25H158v.48H148.8V19.8h.58a2.44,2.44,0,0,0,1.23-.27,1.21,1.21,0,0,0,.52-.62,5.55,5.55,0,0,0,.14-1.63V5.73a6,6,0,0,0-.14-1.68,1.36,1.36,0,0,0-.58-.59,2.31,2.31,0,0,0-1.17-.25h-.58V2.73h14.8v5h-.53a4.7,4.7,0,0,0-.92-2.62A4.14,4.14,0,0,0,160,3.93a14.74,14.74,0,0,0-2.87-.19Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M173.83,19.82v.46H165v-.46h.56a2.37,2.37,0,0,0,1.18-.26,1.16,1.16,0,0,0,.5-.6,5.23,5.23,0,0,0,.13-1.56V6.32a5.61,5.61,0,0,0-.13-1.61,1.22,1.22,0,0,0-.56-.57,2.22,2.22,0,0,0-1.12-.24H165V3.44h8.8V3.9h-.55a2.35,2.35,0,0,0-1.18.26,1.18,1.18,0,0,0-.51.6,5.1,5.1,0,0,0-.14,1.56V17.4a5.47,5.47,0,0,0,.14,1.61,1.32,1.32,0,0,0,.56.57,2.26,2.26,0,0,0,1.13.24Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M181.6,12.6v4.72a5.21,5.21,0,0,0,.17,1.72,1.21,1.21,0,0,0,.59.57,4,4,0,0,0,1.58.21v.46h-8.62v-.46a3.72,3.72,0,0,0,1.58-.22,1.24,1.24,0,0,0,.59-.56,5.26,5.26,0,0,0,.17-1.72V6.4a5.21,5.21,0,0,0-.17-1.72,1.21,1.21,0,0,0-.59-.57,4,4,0,0,0-1.58-.21V3.44h7.82a17.12,17.12,0,0,1,4.47.42,4.49,4.49,0,0,1,2.31,1.56,4.18,4.18,0,0,1,.9,2.67,4,4,0,0,1-1.34,3.07,5.55,5.55,0,0,1-2.4,1.16l4,5.7a9,9,0,0,0,1.13,1.38,2.19,2.19,0,0,0,1.18.42v.46h-5.31l-5.42-7.68Zm0-8.25v7.37h.71a8,8,0,0,0,2.58-.31,2.57,2.57,0,0,0,1.35-1.15,4.12,4.12,0,0,0,.49-2.15,3.92,3.92,0,0,0-.9-2.84,3.88,3.88,0,0,0-2.9-.92Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M206,14.54l4.57-11.1h6.85V3.9h-.54a2.36,2.36,0,0,0-1.19.26,1.19,1.19,0,0,0-.5.59A5,5,0,0,0,215,6.3V17.4a5.47,5.47,0,0,0,.14,1.61,1.27,1.27,0,0,0,.56.57,2.28,2.28,0,0,0,1.13.24h.54v.46h-8.79v-.46h.55a2.39,2.39,0,0,0,1.19-.26,1.21,1.21,0,0,0,.5-.6A5.1,5.1,0,0,0,211,17.4V4.92l-6.46,15.36h-.3L197.69,5V16.89a10.67,10.67,0,0,0,.06,1.52,1.78,1.78,0,0,0,.7,1,2.91,2.91,0,0,0,1.69.39v.46h-5.76v-.46h.18a2.56,2.56,0,0,0,1-.18,1.64,1.64,0,0,0,.73-.52,2.22,2.22,0,0,0,.39-.9c0-.09,0-.52,0-1.27V6.3a5.53,5.53,0,0,0-.13-1.6,1.25,1.25,0,0,0-.56-.56,2.28,2.28,0,0,0-1.13-.24h-.54V3.44h6.88Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M217.92,24.73v-.54A4.59,4.59,0,0,0,220,22.58a3.58,3.58,0,0,0,.65-2,.56.56,0,0,0-.08-.32.24.24,0,0,0-.18-.1.5.5,0,0,0-.22.09,1.76,1.76,0,0,1-.9.21,1.71,1.71,0,0,1-1.27-.57,1.89,1.89,0,0,1-.54-1.34,2,2,0,0,1,.62-1.44,2,2,0,0,1,1.51-.62,2.37,2.37,0,0,1,1.82.82,3.21,3.21,0,0,1,.76,2.27,5,5,0,0,1-1.08,3.15A6.12,6.12,0,0,1,217.92,24.73Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M233.79,12.65v4.67A5.21,5.21,0,0,0,234,19a1.21,1.21,0,0,0,.59.57,4,4,0,0,0,1.58.21v.46h-8.56v-.46a3.72,3.72,0,0,0,1.58-.22,1.24,1.24,0,0,0,.59-.56,5.36,5.36,0,0,0,.16-1.72V6.4a5.32,5.32,0,0,0-.16-1.72,1.21,1.21,0,0,0-.59-.57,4,4,0,0,0-1.58-.21V3.44h7.34q3.63,0,5.2,1.29A4,4,0,0,1,241.69,8a4.14,4.14,0,0,1-1,2.81,5.27,5.27,0,0,1-2.81,1.59A19.9,19.9,0,0,1,233.79,12.65Zm0-8.24v7.28l.62,0a3,3,0,0,0,2.34-.9A4.08,4.08,0,0,0,237.57,8a3.92,3.92,0,0,0-.82-2.74,3.23,3.23,0,0,0-2.45-.87Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("path", {
    style: {
      fill: color !== undefined ? color : '#2c74ac'
    },
    d: "M258.21,3.06V8.89h-.48a6.27,6.27,0,0,0-2-3.5,5.22,5.22,0,0,0-3.38-1.22,5,5,0,0,0-2.89.91,5.32,5.32,0,0,0-1.93,2.37,10.76,10.76,0,0,0-.78,4.17,14,14,0,0,0,.57,4.12,5.51,5.51,0,0,0,1.79,2.81,5,5,0,0,0,3.15.94,6.25,6.25,0,0,0,2.92-.69,9.84,9.84,0,0,0,2.78-2.4v1.46A9.26,9.26,0,0,1,255,20a9,9,0,0,1-3.58.66,10.26,10.26,0,0,1-4.78-1.08,7.61,7.61,0,0,1-3.23-3.1,8.66,8.66,0,0,1-1.14-4.31A8.92,8.92,0,0,1,243.5,7.6a8.89,8.89,0,0,1,3.4-3.35,9.18,9.18,0,0,1,4.55-1.19,10.14,10.14,0,0,1,3.75.77,6.08,6.08,0,0,0,1.46.44.94.94,0,0,0,.69-.29,1.6,1.6,0,0,0,.38-.92Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoText);

/***/ }),

/***/ "./components/icons/logo/logo.svg.tsx":
/*!********************************************!*\
  !*** ./components/icons/logo/logo.svg.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/icons/logo/logo.svg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LogoSvg = ({
  className = 'w-12',
  colorPrimary = 'text-frost-blue',
  colorSecondary = 'text-frost-gray'
}) => {
  return __jsx("svg", {
    className: className,
    viewBox: "0 0 500 500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("path", {
    className: colorSecondary + ' fill-current',
    d: "M99.78,337.22c.09,1.48,1.08,2.63,1.67,3.92.23.5.79.95.6,1.51-.46,1.43.42,2.38,1.12,3.47a76.34,76.34,0,0,0,6.25,8.58,2.12,2.12,0,0,1,.29.38c1.43,2.65,3.84,4.49,6,6.49.74.66,1.29,1.45,2,2.14.4.39.59.49,1.21.2,2-.94,3.62-.14,4,2a8.78,8.78,0,0,0,.84,2.45,1.75,1.75,0,0,0,2.05,1,6.26,6.26,0,0,1,4.8.79,1.6,1.6,0,0,0,1.19.22c1.42-.46,2.41.32,3.45.94s2,1.19,2.92,1.85c1.29.92,2.9,1.27,4.2,2a37,37,0,0,0,3.9,2.5c.21.09.48.22.6-.09,0-.08-.15-.25-.24-.37a1.1,1.1,0,0,0-.21-.14,2.28,2.28,0,0,1-.38-.3,2.18,2.18,0,0,1-.16-2.26c.31-.73,1.15-.46,1.79-.5a5,5,0,0,1,3.06.91c.81.56,1.63,1.11,2.41,1.7a3.81,3.81,0,0,0,2.54.87,7.63,7.63,0,0,1,5,1.82c1,.76,2.35,1.17,3,2.42.26.52,1,.47,1.61.47h5.53a12.08,12.08,0,0,1,2.74.28c1.28.31,2.67.34,3.35,1.72.15.3.58.28.88.06a.5.5,0,0,0,.15-.64c-.13-.29-.34-.54-.48-.83-.5-1.08-.17-1.67,1-1.82a3.41,3.41,0,0,1,1.94.32,24.24,24.24,0,0,1,4.77,2.61c.45.35,1,.61,1.44.94,1.08.78,2,.92,3-.18a2.23,2.23,0,0,1,3-.2,8.09,8.09,0,0,0,5.25,1.16,8,8,0,0,1,5.14,1.57,17,17,0,0,0,4.4,2.72.55.55,0,0,1,.21.12c2.47,2.13,5.06,4.15,7.35,6.44,1.49,1.48,2.88,3.08,4.43,4.52a24.52,24.52,0,0,1,4.1,5.06c.93,1.5,1.88,3,2.87,4.45a10.51,10.51,0,0,1,1.84,3.84c.28,1.43.67,1.53,2.32,1.37,1.94-.19,2.4.13,2.44,2,.07,3.78.56,7.54.66,11.34a14.47,14.47,0,0,1-1.34,6.58,34.46,34.46,0,0,1-8,11.63,5.48,5.48,0,0,0-1.87,3.52,2.7,2.7,0,0,1-1.53,2.3,13.17,13.17,0,0,0-2.78,2.37,13.19,13.19,0,0,1-3.93,2.91,7.09,7.09,0,0,0-2.08,1.69,12.85,12.85,0,0,1-8.1,3.83,5.75,5.75,0,0,0-1.45.38,9.87,9.87,0,0,1-7.06.06,5.1,5.1,0,0,0-2.71.16c-.74.12-1.47.54-2.2.24-1.37-.57-2.23.11-3.07.95-.35.35-.72.66-1.06,1a3.7,3.7,0,0,1-2.43,1c-6,.72-12,.42-18,.61a28.37,28.37,0,0,1-10.55-1.76,56.81,56.81,0,0,1-11.94-5.47c-2.22-1.42-4.36-2.92-6.5-4.42-2.62-1.83-5.45-3.37-8.18-5-4.23-2.56-8.4-5.18-12.42-8a43.24,43.24,0,0,0-6.15-3.67,18.23,18.23,0,0,1-6.51-5.09c-1.36-1.69-2.73-3.39-4.15-5a35.94,35.94,0,0,0-5.55-5.1c-2.41-1.82-4.89-3.59-7.2-5.52-3.19-2.68-6.26-5.49-9.38-8.24-.24-.21-.47-.45-.73-.65C70,405.2,64.1,399.15,58,393.32A98,98,0,0,1,43.24,376c-.52-.8-1.32-1.43-1.92-2.19A78.65,78.65,0,0,1,32.84,361a42,42,0,0,0-2.9-5,50.73,50.73,0,0,1-5.24-9.69,8.8,8.8,0,0,0-.85-1.71c-2.1-3.08-3.47-6.49-5.16-9.75-1.43-2.77-3-5.47-4.18-8.35-1.7-4.11-3.43-8.21-4.92-12.4-.75-2.1-1.46-4.19-2.08-6.32-.31-1.08-.65-2.38.43-3.08s.69-1,.49-1.83c-.55-2.39-2-4.33-3.26-6.34a5.52,5.52,0,0,1-1-3.12c0-2.28.24-4.59-.94-6.74A3.68,3.68,0,0,1,3.08,285c0-1.66,0-3.32,0-5a12.3,12.3,0,0,0-.37-3.76,7.41,7.41,0,0,1-.17-2.11c0-2.53,0-5.06,0-7.59a17,17,0,0,0-.63-6.1,6,6,0,0,1-.2-2.12q0-7.23,0-14.46a11.44,11.44,0,0,1,.22-2.11.9.9,0,0,1,.89-.72,1.15,1.15,0,0,1,1.23.62,3.65,3.65,0,0,1,.27,1.38c0,3.32.85,6.59.59,9.92a4.57,4.57,0,0,0,.42,1.84,14.84,14.84,0,0,1,1,5.82c0,.94,0,1.9,0,2.84a76.61,76.61,0,0,0,1,10.59,15.15,15.15,0,0,0,1.38,5.72,1.26,1.26,0,0,1,.13.69c-.2,2.31.41,4.56.67,6.82s.26,4.58,1.5,6.66a2.78,2.78,0,0,1,.34,1.37,16.15,16.15,0,0,0,2.52,7.61,7,7,0,0,1,1.14,4.29,5.55,5.55,0,0,0,1,3.6c.76,1.22,1.35,2.54,2,3.81a9.48,9.48,0,0,0,.73,1.23,7.61,7.61,0,0,0,.88.81c.36-.41,0-.75-.14-1.09a16.47,16.47,0,0,1-1.56-5.45c-.23-2.27-1.11-4.45-1.25-6.75a3.83,3.83,0,0,0-.7-1.51,39.8,39.8,0,0,1-3.44-8.61,50,50,0,0,0-2.34-6.93,4.26,4.26,0,0,1-.3-1.86c0-1.26,0-2.53,0-3.79a4.88,4.88,0,0,0-.38-2.33,8,8,0,0,1-.76-4.15c.15-5.14-.7-10.25-.54-15.39-.92-3.46.27-6.92,0-10.38,1.06-5.81.36-11.67.54-17.5a21.51,21.51,0,0,1,1.22-7,6.8,6.8,0,0,0,.59-2.29c0-2.46.76-4.84.68-7.29a10.13,10.13,0,0,1,2-6.25A12.83,12.83,0,0,0,15,204c.3-1.12.37-2.33,1.38-3.24.55-.5.37-1.36.33-2.06a29.74,29.74,0,0,1,.93-7.73,11.13,11.13,0,0,1,2.68-5c1-1.16,2-2.32,2.95-3.52.49-.62.34-1-.48-1.21-.65-.17-1.36-.18-1.52-1a2.05,2.05,0,0,1,.76-1.92c.11-.11.21-.27.36-.33,1.86-.81,2-2.34,1.83-4-.19-2.15,1-4,1.71-5.86,1-2.59,2.25-5.1,3.3-7.67.45-1.1.59-2.3,1-3.41a86.16,86.16,0,0,1,5.57-12.93,33.27,33.27,0,0,0,2.5-5.17,5.65,5.65,0,0,1,.84-1.44,1.51,1.51,0,0,1,1.68-.76,1.45,1.45,0,0,1,1,1.7c-.13.94-.36,1.86-.56,2.79-.1.46-.22.92-.33,1.38a8.47,8.47,0,0,0-.79,1.19c-.74,1.5-1.29,3.07-1.93,4.61-1.1,2.64-2.55,5.15-3.85,7.71-.21.43-.45.85-.62,1.29a.45.45,0,0,0,.24.6,1.06,1.06,0,0,0,.7,0c.5-.21.66-.7.85-1.13,1.35-3.23,2.79-6.43,4-9.71a15.77,15.77,0,0,0,1.4-4.53,7.39,7.39,0,0,0,2.35-3.56,15.45,15.45,0,0,1,1.51-3,95.87,95.87,0,0,1,5.7-8.09A5.07,5.07,0,0,0,52,124.42a5.08,5.08,0,0,1,1.29-3,123.67,123.67,0,0,1,9.21-12.13c2.5-2.87,5-5.71,7.56-8.57a4.09,4.09,0,0,0,.74-.94C72.7,95.43,76,92.07,79,88.51A118.84,118.84,0,0,1,89.42,78.2a79.41,79.41,0,0,1,6.29-5.09c2.17-1.61,4.27-3.3,6.41-5,.65-.49,1.33-1,2-1.42a4.36,4.36,0,0,1,3-1c.56.06.94-.27.44-.89-.28-.35.1-.56.34-.75,1.71-1.41,3.44-2.79,5.85-3a5.55,5.55,0,0,0,2.45-1.15c4.07-2.51,8.12-5,12.2-7.53,1.55-.94,3.13-1.84,4.75-2.66,4.89-2.44,9.7-5,14.73-7.19,6-2.61,12-5.32,18.07-7.77,5.87-2.35,11.92-4.2,18-6,1.85-.54,3.7-1,5.54-1.57,5.6-1.67,11.32-2.88,17-4.12,7.85-1.71,15.79-2.9,23.67-4.4,4.61-.87,9.29-1.22,13.94-1.75,6.33-.71,12.69-.88,19.05-1a92.58,92.58,0,0,1,10.54.15c3.41.32,6.85.29,10.26.69,2.49.29,5,.41,7.52.55,3.51.2,7,.33,10.53.53.92.05,1.82.27,2.73.41a150.45,150.45,0,0,1,25,6.35c5.77,1.92,11.39,4.19,17.11,6.23a54.35,54.35,0,0,1,6.52,3c2.66,1.35,5.55,2.22,8.17,3.66,2.24,1.23,4.61,2.24,6.88,3.43,3.44,1.79,6.86,3.63,10.27,5.48,4.07,2.2,8.16,4.37,12.17,6.65a142.78,142.78,0,0,1,17.27,11.4c1.41,1.1,2.9,2.13,4.4,3.13s2.76,2.28,4.22,3.35c2.24,1.65,4.26,3.56,6.39,5.34,1.56,1.31,3.19,2.56,4.73,3.89,3.75,3.27,7.48,6.57,11.21,9.85,3.31,2.93,6,6.35,8.95,9.6,1,1.08,1.91,2.2,2.86,3.3s2,1.94,2,3.46c0,.2.22.42.37.61,4.47,5.58,7.56,11.9,10.84,18.12,1.93,3.68,3.83,7.38,5.83,11,1.23,2.24,1.89,4.74,3.5,6.8a1.23,1.23,0,0,1,.3.88c-.56,2.3,1,4.1,1.63,6.09.44,1.36,1.14,2.63,1.65,4a51.69,51.69,0,0,0,2.38,5.47,29.89,29.89,0,0,1,2.14,5.55c.72,2.52,1.54,5,2.45,7.46,1.88,5.15,3.4,10.4,4.84,15.68.92,3.36,1.45,6.79,2.15,10.19.37,1.85,1.23,3.57,1.37,5.5.16,2.36.61,4.69,1,7,.07.46,0,1.06.32,1.36,1.14,1.18.91,2.63,1.11,4,.3,2.18.74,4.35,1.25,6.51a15.49,15.49,0,0,1,.38,3.52c0,3.95.07,7.91,0,11.86a28.74,28.74,0,0,0,2,10,8.23,8.23,0,0,1,.57,3c0,.24,0,.48,0,.71a104.46,104.46,0,0,0,.62,13.23,26.6,26.6,0,0,1-.46,8,.86.86,0,0,0-.05.23c.15,2.95-.63,5.79-1.22,8.65-.46,2.24-.69,4.51-1.32,6.73-.75,2.66-1.18,5.4-1.71,8.11a76.81,76.81,0,0,1-3,11c-.29.82-.57,1.65-.82,2.48-.73,2.51-1.43,5-2.17,7.53a32.48,32.48,0,0,0-1.05,4.38,22.33,22.33,0,0,1-1.3,4.32,12,12,0,0,0-.68,2.75c-.05.06-.12.11-.16.17s0,.12,0,.17l.16-.35a6.43,6.43,0,0,0,1.44-2.47,8.34,8.34,0,0,1,.81-1.46,1,1,0,0,1,1.1-.37.87.87,0,0,1,.6.71,5.7,5.7,0,0,1-.07,2.36,42,42,0,0,1-3.06,9.25,17.18,17.18,0,0,0-1.89,5.12,1.49,1.49,0,0,1-.23.67c-2.12,3.26-3,7-4.83,10.4a18.69,18.69,0,0,1-4.3,5.78,23.08,23.08,0,0,0-2.46,2.38c-.71.78-.64,1.28.08,2.07,1.46,1.58,1.39,1.55.27,3.38s-2.19,4.09-3.41,6.06c-2.11,3.41-4.17,6.86-6.54,10.11-1.2,1.64-2,3.45-3.08,5.11a39.59,39.59,0,0,1-3.65,4.74c-2.74,3.08-5.22,6.37-7.84,9.55a86.61,86.61,0,0,1-7,7.74c-2.47,2.37-4.53,5.09-7.34,7.15-.58.43-.33.78.24,1.05.79.38.77,1,.38,1.61a10.49,10.49,0,0,1-1.36,1.69,59.42,59.42,0,0,1-9.76,8.16c-1.48.94-2.84,2-3.1,3.82a2,2,0,0,1-1,1.3,6.43,6.43,0,0,0-1.34,1.07,3.37,3.37,0,0,1-3.59,1c-2.08-.41-3.18.18-3.86,2a5.32,5.32,0,0,1-2.62,3,23.85,23.85,0,0,0-3.23,2.24,27.24,27.24,0,0,1-9.65,4.88c-1.33.32-2.32,1.5-3.81,1.65-.42,0-.61.51-.73.9a10.14,10.14,0,0,0-.68,2.76,2.19,2.19,0,0,1-2,2.11c-1.63.35-3.25.78-4.89,1a5.8,5.8,0,0,0-3.86,2.42c-.6.76-1.12,1.57-1.7,2.35a4.16,4.16,0,0,1-3.61,1.83c-2-.09-4,.57-6,.68a5.21,5.21,0,0,0-2.13.67c-3,1.63-6.29,2.59-9.32,4.11a19.5,19.5,0,0,0-2.67,1.32,12.37,12.37,0,0,1-5.6,1.89c-.57.09-1.29,0-1.62.47-.75,1.14-1.9,1.05-3.06,1.19-1.56.19-3.13.33-4.08,1.91-.56,1-1.89.93-2.94,1.1a5.07,5.07,0,0,0-2.57.82,1.52,1.52,0,0,1-.89.39c-2.72-.13-5.11,1.48-7.86,1.27a9.83,9.83,0,0,0-3.2.51,16.4,16.4,0,0,1-4.4.84,2.57,2.57,0,0,0-1.18.36c-3.25,1.75-6.79,2.06-10.43,1.9l-.25,0c-.74-.09-1.59-.07-1.8-1a2.06,2.06,0,0,1,1.33-2.07,9.23,9.23,0,0,1,2.41-.64A58.58,58.58,0,0,0,319,477.9c3-.91,6-2,9-3,1.95-.69,3.89-1.44,5.81-2.21a13.55,13.55,0,0,1,4.38-1,12.55,12.55,0,0,0,3.65-.8,69.41,69.41,0,0,0,10.26-4.45c5-2.66,10.27-4.63,15.21-7.29,4.08-2.19,8.15-4.38,12-6.87.2-.13.43-.29.28-.55-.06-.1-.29-.14-.45-.15a8.77,8.77,0,0,0-2.5.18,9.87,9.87,0,0,1-2.23.28,3.42,3.42,0,0,0-3,1.4,4.7,4.7,0,0,1-1.27,1.12,8.25,8.25,0,0,0-3.76,3.69,1.73,1.73,0,0,1-1.42.86c-1.8.36-3.59.83-5.41,1a4.31,4.31,0,0,0-2.86,1.25,13.11,13.11,0,0,1-6,3.38,49.86,49.86,0,0,0-7.74,3.36,86.85,86.85,0,0,1-10.19,4,13.63,13.63,0,0,1-5.47.3c-1.08-.07-1.38-.93-.66-1.69a12.65,12.65,0,0,1,5.55-3.06,56.12,56.12,0,0,0,11.94-5.39c2.82-1.69,5.57-3.5,8.37-5.23a12.14,12.14,0,0,1,6-2.32,3.44,3.44,0,0,0,1.61-.6c2.14-1.39,4.51-2.38,6.5-4a40.91,40.91,0,0,1,5.76-3.79c3.38-1.94,6.27-4.47,9.41-6.7,1.33-.95,2.69-1.87,4-2.81l5.82-4.12c.09-.07.1-.25.14-.38a1.52,1.52,0,0,0-.46-.1,2.29,2.29,0,0,0-1.3.66l-2.78,2a2.44,2.44,0,0,1-1.61.55,1.37,1.37,0,0,1-1.41-.79c-.19-.53.18-.9.59-1.21,1.23-.94,2.45-1.91,3.72-2.81,2-1.43,4-2.83,6.05-4.22,1.23-.84,1.94-2.14,3.12-3.06,2.58-2,5.09-4.11,7.45-6.35,2.76-2.63,5.33-5.44,8-8.17a5.89,5.89,0,0,0,4-2.15c.91-1,1.84-2,2.76-3,.15-.16.4-.38.21-.57s-.44,0-.6.17a47.64,47.64,0,0,1-5.37,4.53,6.62,6.62,0,0,0-1,1.06,8.09,8.09,0,0,0-4.46,3.26,6.35,6.35,0,0,1-4.63,2.94,3.81,3.81,0,0,0-3.18,2.37,8,8,0,0,1-2.63,3.11q-2.42,1.89-4.67,3.95c-1.39,1.27-3.15,1.41-4.88,1.5a1.46,1.46,0,0,1-1.37-2.32,18.94,18.94,0,0,1,1.16-1.55c.93-.31,1.94-.52,2.3-1.57a3.53,3.53,0,0,0-2.28,1.59,4.15,4.15,0,0,0-1.13.49c-1.73,1.61-3.88,2.77-5.46,4.52a22.17,22.17,0,0,1-6.3,4.61,11.35,11.35,0,0,0-2.21,1.54c-1.77,1.56-3.5,3.19-6,3.7a2.15,2.15,0,0,0-.85.49c-2.7,2.14-5.87,3.62-8.82,5.4-3.73,2.27-7.66,4.2-11.56,6.17a98.26,98.26,0,0,1-13.87,6c-2.78.9-5.28,2.36-8,3.45a4.22,4.22,0,0,1-2.65.44,1.15,1.15,0,0,1-.92-.72c-.16-.55.18-.9.63-1.16a2.4,2.4,0,0,1,.67-.31c3.34-.9,6.19-2.75,9.28-4.14,1.13-.51,2.24-1.06,3.4-1.51a16.57,16.57,0,0,0,4.25-2.46,6.8,6.8,0,0,1,3.13-1.37,12.71,12.71,0,0,0,3.27-1.15c1.19-.58,2.38-1.15,3.58-1.7a10.21,10.21,0,0,0,2.84-1.87,30.41,30.41,0,0,1,4.22-2.93c1.93-1.24,3.9-2.43,5.83-3.68a6.16,6.16,0,0,0,1-1,3.22,3.22,0,0,0,1.77-.76c.27-.22.85-.46.49-.86s-.74,0-1.1.2a1.89,1.89,0,0,0-1.2,1.39,7.31,7.31,0,0,0-3.05,1.55,4,4,0,0,1-1.53.78c-4,1.19-7.62,3.16-11.32,5-.22.11-.52.21-.61.4-.84,1.6-2.58,1.87-4.06,2.55s-2.83,1.35-4.25,2a3.4,3.4,0,0,1-1.15.45c-3.27.19-6,1.9-9,2.95a21.38,21.38,0,0,0-7.38,3.85,2.23,2.23,0,0,1-2.37.26,1.14,1.14,0,0,1-.28-2.07,10.61,10.61,0,0,1,2-1.06,28.16,28.16,0,0,0,5.09-2.55,15.91,15.91,0,0,1,5.49-2.24,2.7,2.7,0,0,0,1.61-.6c.36-.4,1.34-.64,1.05-1.14s-1.07,0-1.47.28c-1.24.91-2.83.82-4.18,1.52-3.14,1.64-6.43,3-9.66,4.52a10.79,10.79,0,0,1-1.89.64,60,60,0,0,0-11.39,4.35,20,20,0,0,1-5,1.38,5.33,5.33,0,0,1-2-.06,1.17,1.17,0,0,1-.68-2,5.05,5.05,0,0,1,2-1.36c4.1-1.4,7.87-3.5,11.9-5a2.22,2.22,0,0,0,1.71-2.11c0-1,.61-1.54,1.59-1.86a2.7,2.7,0,0,0,1.47-.84c1.2-2.22,3.59-3,5.59-4.21a73.2,73.2,0,0,0,6.42-3.71,16.6,16.6,0,0,1,3.09-1.57c6.51-3,12.27-7.05,18.18-10.93a3.59,3.59,0,0,0,.47-.12c.22-.08.54-.23.38-.45s-.42,0-.58.19a2.6,2.6,0,0,0-.27.38,12,12,0,0,0-6.67,2.46,35.67,35.67,0,0,1-5.48,2.86,5.11,5.11,0,0,1-2.2.42,15.8,15.8,0,0,0-4.84,1.12,54.23,54.23,0,0,0-6.79,3,2.18,2.18,0,0,1-2.74-.18,2,2,0,0,0-2.55-.08,11,11,0,0,1-3.51,1.23,4.38,4.38,0,0,1-1.49.09,2,2,0,0,1-1.74-1.18c-.33-.8.2-1.35.72-1.88a1.39,1.39,0,0,1,.19-.15c2.8-1.54,5.33-3.53,8.47-4.51a19,19,0,0,0,4.27-2c3.58-2.16,7.21-4.27,10.8-6.42a7.51,7.51,0,0,0,1.32-1.08c.34-.33.85-.81.63-1.2-.35-.61-.81.16-1.24.16-3,0-5.2,1.37-7.42,3-1.43,1.07-3.08,1.9-4.41,3.11a6.74,6.74,0,0,1-3.07,1.55,21,21,0,0,0-8,3.74,11.9,11.9,0,0,1-5.31,1.94,1.72,1.72,0,0,1-.75,0c-.69-.22-1.61-.25-1.76-1.11a1.52,1.52,0,0,1,1.19-1.63c1.58-.56,2.72-1.85,4.34-2.34a1.4,1.4,0,0,0,1.14-1.14c.22-1.59,1.48-2.19,2.82-2.72a6.13,6.13,0,0,1,1.2-.35,6.68,6.68,0,0,0,4.1-2.43,16.16,16.16,0,0,1,6.35-4.13A70.42,70.42,0,0,0,334,409.9a6.75,6.75,0,0,0,2.64-2.47,2.83,2.83,0,0,0,2-.78c.21-.2.57-.39.34-.74,0-.05-.45.07-.62.19-.58.43-1.14.9-1.71,1.36-1.7-.27-3.13.59-4.49,1.24a13.72,13.72,0,0,1-4.73,1.4c-3.38.3-5.87,2.2-8.27,4.16a42.48,42.48,0,0,1-5,3.9,12.52,12.52,0,0,0-2.53,2.29c-1.31,1.41-2.15,1.34-3-.32-.38-.79-.68-1-1.46-.54-1.85,1-3.89.76-5.89.71-.52,0-1-.16-1.1-.75s.34-.64.74-.83c2.4-1.09,4.81-2.17,7.1-3.48,3.14-1.81,6.27-3.65,9.47-5.37,1.76-.95,3.26-2.21,4.91-3.29a20,20,0,0,1,4.17-2.56,3.63,3.63,0,0,0,1.54-1.2,16.86,16.86,0,0,1,5-3.9c1.8-1,3.47-2.2,5.19-3.32.2-.13.43-.34.26-.55s-.46,0-.65.07c-.82.39-1.62.81-2.42,1.24a3.21,3.21,0,0,1-1.65.52,1.26,1.26,0,0,1-1.13-2,9.34,9.34,0,0,1,2.46-2.35c2.79-1.87,5.5-3.87,8.47-5.52a37.44,37.44,0,0,0,6.33-4.64c2-1.76,4.28-3.29,6.17-5.2,1.36-1.37,3.09-2.43,3.88-4.26a1.79,1.79,0,0,1,.49-.54c3.64-3.16,6.55-7,10.22-10.13a27.32,27.32,0,0,0,3.83-4.07,8.81,8.81,0,0,1,2.72-2.75,2.76,2.76,0,0,0,1-1.06c1.83-3.13,4.27-5.85,6.42-8.77,1.78-2.4,3.29-4.95,5-7.37,2-2.81,4-5.66,6-8.46a9.91,9.91,0,0,0,1.11-2.11c2.09-4.83,4.13-9.67,6.5-14.38.87-1.71,2.05-3.22,2.77-5a48.26,48.26,0,0,0,2.42-8.68,3.91,3.91,0,0,1,.87-2.18,3,3,0,0,0,.62-1.53c.54-2.55,1-5.12,1.7-7.64,1.07-3.89,1.55-7.9,2.56-11.79.93-3.62.62-7.21.71-10.81.12-4.9.23-9.79.45-14.69.28-6.24.09-12.49.09-18.74a1.83,1.83,0,0,0-.21-1.14c-1.76-1.9-1.37-4.33-1.77-6.53-.56-3-.67-6.12-1-9.18a14.82,14.82,0,0,0-.42-1.84,7.35,7.35,0,0,1-.4-1.6,7.65,7.65,0,0,0-1.27-5,3.4,3.4,0,0,1-.46-2.07c0-1,.07-2.06-.94-2.82-.4-.31-.39-.85-.42-1.33a19.49,19.49,0,0,0-2.51-8.34,3.21,3.21,0,0,1-.49-1.07c-.22-2.08-1.3-3.89-2-5.8a4.69,4.69,0,0,1-.38-.87c-.59-3.87-2.45-7.35-3.86-11-1.27-3.24-2.6-6.47-4-9.66a9.19,9.19,0,0,0-2.18-2.87c-1.92-1.82-3.44-3.86-3.21-6.64a3.9,3.9,0,0,0-1-2.86,62.53,62.53,0,0,0-5.44-6.2,60.87,60.87,0,0,1-6.67-7.7,56.68,56.68,0,0,0-5.92-7.05,11.46,11.46,0,0,0-2.51-2,2.58,2.58,0,0,1-1.14-.89c-.89-1.77-2.53-2.92-3.92-4.28-1.63-1.59-3.31-3.13-5-4.7a5.93,5.93,0,0,0-2-1.39,1.37,1.37,0,0,0-.45,0c0,.13,0,.32.06.4,1,1,2,1.93,3,2.88.59.57,1.19,1.12,1.75,1.7.29.3.49.68.16,1a1,1,0,0,1-1.16.21,4.14,4.14,0,0,1-1.24-.76c-2.8-2.61-5.6-5.22-8.36-7.86a8.83,8.83,0,0,0-2.6-1.8,25.3,25.3,0,0,1-4.42-3.07c-3.12-2.25-6.22-4.47-10.1-5.59-3.19-.93-6.21-2.36-9.29-3.58a108.1,108.1,0,0,0-17.39-5.4A36.68,36.68,0,0,1,299.84,94a9.36,9.36,0,0,0-4.19-.6,12.1,12.1,0,0,1-3.48-.41,16.83,16.83,0,0,0-4.7-.66,3,3,0,0,1-1.24-.14c-1.92-.79-3.94-.6-6-.62A72.11,72.11,0,0,1,271,91.2a16.5,16.5,0,0,0-6.48.26,13.62,13.62,0,0,1-3,.13c-.83,0-1.68,0-2.51,0a44.73,44.73,0,0,0-10.45.92c-3,.51-6.05,1.17-9.12,1.56-2.06.27-4.1.68-6.2.78a8.1,8.1,0,0,0-2.18.54c-3.61,1.2-7.24,2.36-10.82,3.67-2.25.82-4.39,1.91-6.62,2.79-3.62,1.44-7.28,2.78-10.91,4.2a32.64,32.64,0,0,0-4.1,1.8c-3.23,1.81-6.76,3.07-9.94,5a58.61,58.61,0,0,1-6.32,2.92,5.19,5.19,0,0,1-2.43.48,3,3,0,0,0-2.62,1.14,8.32,8.32,0,0,1-2.49,1.94c-1.13.67-2.12,1.54-3.19,2.29a24.76,24.76,0,0,1-2.9,1.88c-1.48.74-2.32.38-3.07-1.12-.14-.3-.27-.63-.67-.53a1,1,0,0,0-.51.49,3.75,3.75,0,0,0-.33,2.08,3.52,3.52,0,0,1-1.61,3.06c-.33.24-.62.53-1,.76a91.32,91.32,0,0,0-11.66,9.7c-2.39,2.21-4.64,4.57-7.14,6.68a42.74,42.74,0,0,0-5.33,5.61c-.94,1.14-1.37,2.53-2.31,3.65s-1.11,1.2-2.27.16c-.82-.73-1.08-.7-1.27.23-.43,2.14-1.75,3.91-2.69,5.84-.26.53-.92.9-1.39,1.34a22.83,22.83,0,0,0-3.62,3.6.49.49,0,0,0,0,.44c.15.27.42.23.64.09a13.11,13.11,0,0,1,1.42-1,.87.87,0,0,1,1.16.85,2.71,2.71,0,0,1-2.22,2.3c-.87.22-1.87.13-2.39,1.07a3.53,3.53,0,0,0-.34,3,2,2,0,0,1-.44,2.2,5.46,5.46,0,0,0-.9,1.94,6.89,6.89,0,0,1-1.71,2.86,2.84,2.84,0,0,0-1,2.56,4.92,4.92,0,0,1-1.19,3.76,20.27,20.27,0,0,0-2.37,4.66c-.16.36-.24.91-.52,1-1.69.79-1.78,2.63-2.93,3.77a2.32,2.32,0,0,0-.5,2c.28,2.33-.92,4.29-1.78,6.31a16.55,16.55,0,0,0-.85,2.19,7,7,0,0,1-1,2.41,6.72,6.72,0,0,0-1.51,3.66c0,.88-.88,1.11-1.66.59a8.9,8.9,0,0,1-1-.76c-1.07-.95-1.23-1.75-.47-2.94a10.77,10.77,0,0,1,2.58-2.89,3.24,3.24,0,0,0,1.37-2.9c-.06-1.18,0-2.37,0-3.56a3.89,3.89,0,0,1,.57-2.5,3.13,3.13,0,0,0,.53-2.27c-.32-3.58,1.24-6.64,3-9.63a9.62,9.62,0,0,0,1.29-2.81c.53-2.49,1.63-4.81,2.33-7.24a3.26,3.26,0,0,1,.4-.87c2-3.13,3.75-6.34,5.43-9.61a20.45,20.45,0,0,1,3.62-4.81c1.46-1.52,2.67-3.24,4-4.88a1.46,1.46,0,0,0,.36-.62c.36-2.25,2.11-3.71,3.44-5.4,3.59-4.59,7.91-8.58,12.05-12.71,2.75-2.74,5.83-5.2,8.82-7.73s6.15-4.34,9.05-6.75a75.37,75.37,0,0,1,7.94-5.4c3.48-2.19,7-4.27,10.57-6.39a15,15,0,0,1,1.52-.84,1,1,0,0,1,1.31.33.87.87,0,0,1-.16,1.1,8.34,8.34,0,0,1-2.46,1.62,4,4,0,0,0-1.61,1.08.47.47,0,0,0,0,.43.48.48,0,0,0,.41.17,10.84,10.84,0,0,0,1.32-.66c1.55-.93,3.09-1.89,4.65-2.82a7.29,7.29,0,0,1,2-1c2.86-.64,5-2.44,7.46-3.81a38,38,0,0,1,7-3.19,5.72,5.72,0,0,0,2.38-1.28,7.76,7.76,0,0,1,2.52-1.92c1-.41.89-1.77,2.06-2,1-.16,2-.26,3-.42a3,3,0,0,0,1.82-1.17,8.59,8.59,0,0,1,4.56-2.69,51.38,51.38,0,0,0,7.61-3,19.85,19.85,0,0,1,5-1.5c1.41-.26,2.78-.6,4.13-1a14.32,14.32,0,0,1,5.39-1,2.28,2.28,0,0,0,1.23-.15c1.68-.94,3.52-.9,5.36-.9a18.3,18.3,0,0,0,3.93-.85,1,1,0,0,0-1.18-.32c-3,.81-6,.45-9,.5-1.6,0-3.14,0-4.39,1.25-.74.76-1.95.86-3,1.09A38.26,38.26,0,0,0,225.82,88a5.26,5.26,0,0,1-1.69.43,12.76,12.76,0,0,0-7,2.23,1.67,1.67,0,0,1-.94.3c-2.18-.06-4.26.75-6.47.51-1.06-.12-2.16.12-3.25.1s-1.51-.39-1.6-1.41A3,3,0,0,1,206.22,87a5.45,5.45,0,0,0,1.58-1.81c.3-.45.9-.93.46-1.46s-1.09-.24-1.67-.24a2.69,2.69,0,0,0-1.6.59,14.87,14.87,0,0,1-7.07,2.8,2.86,2.86,0,0,0-.73.14c-3.68,1.52-7.54,2.75-10.95,4.67-3,1.7-6,3.43-9.12,4.84a13.59,13.59,0,0,0-4.06,3.1,46.27,46.27,0,0,1-4.86,3.73c-4,3.08-8,6.2-11.88,9.5a4.32,4.32,0,0,0-1.76,2.51,3.75,3.75,0,0,1-1.4,1.93c-1.56,1.44-3.09,2.9-4.65,4.33a8.6,8.6,0,0,0-3.07,5.77c-.12,1.57-.68,2-2.27,2.42a23.11,23.11,0,0,1-2.71.52,4.23,4.23,0,0,0-2.4,1.15c-1.72,1.41-2.9,3-2.59,5.31.19,1.46-.29,2.35-2.34,2.25a5.59,5.59,0,0,0-1,0,1,1,0,0,0-1,.86c-.09.47-.14.94-.22,1.41-.2,1-.67,1.84-1.92,1.83a2.13,2.13,0,0,0-2.05,1.45c-1.11,2.22-2.3,4.4-3.31,6.66a49.11,49.11,0,0,1-6.08,9.78,3.14,3.14,0,0,1-.42.59,8.69,8.69,0,0,0-3.31,5.9,4.22,4.22,0,0,1-1.53,2.4c-1.79,1.7-3.07,1.64-4.73-.22-.36-.41-.64-.49-.91,0-.9,1.6-1.82,3.2-2.63,4.84a3.42,3.42,0,0,0-.16,1.63c.11,2.21-.84,4.17-1.52,6.19a1.64,1.64,0,0,1-1.49,1.12c-.87.07-1.4.4-1.44,1.29a3.3,3.3,0,0,1-2.41,3,2.28,2.28,0,0,0-.45.2,1.39,1.39,0,0,0,.12,2.49c1.52,1,1.46,1,1,2.6a25.42,25.42,0,0,1-1.17,2.6c-.46,1.12-1,2-2.46,1.93-.54,0-.69.39-.71.81s-.05,1.11,0,1.66a5.32,5.32,0,0,1-.87,3.62,3.37,3.37,0,0,0-.52,2.29,3.64,3.64,0,0,1-1.47,3.12,13.94,13.94,0,0,0-1.24,1.19c-1,1.07-1,1.15.22,2.13a2,2,0,0,1,.78,1.89c-.22,2.46.56,4.86.46,7.31a1.07,1.07,0,0,0,.42,1.05c1.17.75,1.5,2.28,3,2.77.66.23.77,1,.7,1.66a20.4,20.4,0,0,1-.42,2.82,14.6,14.6,0,0,0,.15,8.63,6.71,6.71,0,0,1,.23,2.11c.09,4.35.15,8.7.22,13,0,1.11,0,2.21.85,3.12a2.67,2.67,0,0,1,.53,2c0,1.66.11,3.33,0,5a7.94,7.94,0,0,0,1.64,5.34c.88,1.24,1.42,2.63,2.35,3.87s.57,3.05.27,4.61a1,1,0,0,1-.91.71,2.29,2.29,0,0,1-2.81-1.4c-.57-1.65-1.61-3.14-1.84-4.91a2.93,2.93,0,0,0-.57-1.29,7.66,7.66,0,0,1-1.29-5c0-1,0-1.9,0-2.85a2.29,2.29,0,0,0-.89-2.11,2.53,2.53,0,0,1-1-2.3c0-1.66-.91-3.2-.59-4.9a15.92,15.92,0,0,0-.14,6.61,39.35,39.35,0,0,1,1.47,9.82c0,2.52,1,5,1.66,7.4a85.91,85.91,0,0,0,6.09,15.78,116.07,116.07,0,0,0,9.09,15.26,19.38,19.38,0,0,0,3.6,4.24.66.66,0,0,0,.44.17c.31-.07.25-.33.21-.55-.09-.47-.16-.94-.28-1.4-.17-.65-.26-1.28.48-1.66a1.92,1.92,0,0,1,2.13.12c1.12.83,2.36,1.67,2.76,3,.79,2.65,2.7,4.71,4,7.07.08.14.2.26.28.39.81,1.34.69,1.8-.85,2.55-.62.3-.69.5-.35,1,2.1,3.38,5,6.11,7.9,8.87,1.7,1.63,3.45,3.22,5.2,4.8a3,3,0,0,1,1.21,2.49,1.67,1.67,0,0,1-2,1.68,4.1,4.1,0,0,1-3.17-1.71,42,42,0,0,0-7.94-7.88c-1.49-1.2-2.39-2.83-3.68-4.18a2.17,2.17,0,0,0-2.34-.91,4.14,4.14,0,0,1-3.29-.84c-.18-.11-.56-.19-.67-.1-.34.27,0,.56.13.81a2.17,2.17,0,0,0,.31.37c4.43,4.53,8.79,9.12,13.59,13.32a27.17,27.17,0,0,0,4.65,3.2c2.52,1.4,4.7,3.26,7.14,4.79a33.61,33.61,0,0,1,5.09,4.54c.68.65.33,1.6-.66,1.83a6,6,0,0,1-4.16-.31,9.68,9.68,0,0,1-2.66-1.78c-1.76-1.83-4.16-2.65-6.5-3.43-2.67-.88-5.33-1.92-8.24-2-.7,0-1.18-.52-1.74-.87a30,30,0,0,1-8.21-7.9c-3.58-4.76-7.28-9.45-11-14.14A22.08,22.08,0,0,1,98.05,321a5.58,5.58,0,0,0-.69-1c-.26-.3-.6-.64-1-.34s-.15.58,0,.86a6.26,6.26,0,0,0,1.33,1.71,8,8,0,0,1,1.15,1.25,2.54,2.54,0,0,1,.54,1.78,1.59,1.59,0,0,1-1.12,1.43c-.61.27-.57.73-.27,1.18a23.12,23.12,0,0,0,1.4,2c2.23,2.67,4.52,5.29,6.71,8,.94,1.15,2.34,1.79,3.31,2.89a3,3,0,0,1,1.08,2.06,1.4,1.4,0,0,1-1.75,1.48,3.36,3.36,0,0,1-1.16-.42,14.62,14.62,0,0,1-4.8-3.76,13.07,13.07,0,0,0-3-2.86l-.5-1c-.24-.41-.44-.85-.72-1.24A106.48,106.48,0,0,1,92,325a3.93,3.93,0,0,0-1.2-1.49.63.63,0,0,0-.46-.09.37.37,0,0,0-.2.57c.19.35.46.66.63,1,.67,1.38.35,2.1-1.21,2.74-.86.36-.92.44-.1.92a4.29,4.29,0,0,1,2.5,4,6.42,6.42,0,0,0,1.81,3.82c.45.54.59.5,1-.27.74-1.39,1.37-1.6,2.74-.84.56.31,1,.85,1.73.86ZM432.27,131.3l.49,1a2.27,2.27,0,0,0,1,1.42,1.7,1.7,0,0,0,0,.22,1.49,1.49,0,0,0,.12.14l-.17-.35a2.17,2.17,0,0,0-1-1.41,1.51,1.51,0,0,0-.5-1,1.16,1.16,0,0,0-.06-.22c0-.06-.09-.09-.13-.13ZM425.7,397c.23-.2.46-.39.67-.6a.2.2,0,0,0,.05-.2.21.21,0,0,0-.37,0,6.19,6.19,0,0,0-.32.81,3.65,3.65,0,0,0-.37.29,1.54,1.54,0,0,0-.27.36s0,.17,0,.17c.3,0,.36-.21.44-.41S425.66,397.14,425.7,397ZM393,373.3c-.36.32-.73.63-1.07,1-.07.07,0,.26,0,.39.14,0,.32,0,.42-.13a2.15,2.15,0,0,0,.65-1.24.61.61,0,0,0,.16-.16.42.42,0,0,0,0-.16Zm36.72-245.79a3.9,3.9,0,0,0,.12.46,2,2,0,0,0,.24.4.27.27,0,0,0,.21,0c.17-.26-.06-.41-.21-.57s-.25-.2-.38-.31c-.11-.29-.14-.68-.36-.85-.51-.39-.31-1.45-1.38-1.27-.09.74.52,1.1,1,1.54A6.64,6.64,0,0,0,429.75,127.51ZM48,158.35a1.59,1.59,0,0,0,.95-1.52,10.66,10.66,0,0,1,.55-2.75,3.54,3.54,0,0,0,2.92-2.6,3.41,3.41,0,0,1,.62-1c1.61-2.31,3.22-4.62,4.85-6.91a4.15,4.15,0,0,0,1-1.87,7.33,7.33,0,0,1,1.63-3.43c1.33-1.81,2.72-3.59,4.08-5.39.09-.12.19-.35.14-.41-.24-.26-.43,0-.6.11a31.66,31.66,0,0,0-3.44,4.07c-2.13,2.53-4.22,5.1-6.21,7.73s-2.86,5.86-4.71,8.59a3.24,3.24,0,0,0-.27,1.15,1.19,1.19,0,0,0-1,1.24,10.48,10.48,0,0,1-.57,3,2.14,2.14,0,0,0-.41.25c-.17.15-.14.28.06.31s.14-.08.17-.14S47.9,158.5,48,158.35ZM86.2,221.47c-.62,1.36-.79,2.67.42,3.87.84.83,1.26.76,1.7-.36.38-1,.38-1.11-.78-1.38-1.32-.31-1.36-1.17-1.35-2.14.15-.27.3-.55.44-.83a.24.24,0,0,0,0-.22c-.15-.17-.26-.12-.29.12ZM405.09,67.26c.1.1-.12.42.26.32l-.26-.31c-.35-1.42-1.67-2.15-2.58-3.15-1.88-2.06-4.51-3.23-6.88-4.69a.51.51,0,0,0-.67.15.48.48,0,0,0,.05.65,6.35,6.35,0,0,0,.73.63A101.54,101.54,0,0,0,405.09,67.26ZM109.34,146a5.93,5.93,0,0,0,2.81-2.6c.89-1.43,1.64-2.93,2.52-4.36,1.34-2.19,1.84-4.74,3.32-6.86.12-.17.09-.35-.11-.36a.73.73,0,0,0-.43.21,48.45,48.45,0,0,0-4.74,5.19c-.4.48-.58.94,0,1.43,1,.81.7,1.7,0,2.52s-1.54,1.87-2.36,2.76a3,3,0,0,0-1.09,2.06c-.36.29-.72.58-1.06.89-.07.07,0,.26,0,.39a1.23,1.23,0,0,0,.41-.12A2.05,2.05,0,0,0,109.34,146ZM409.62,71.54c-.13-.05-.16-.41-.4-.12l.4.11a7.44,7.44,0,0,0,1.54,2.68c1.28,1.13,2.51,2.31,3.75,3.48a3,3,0,0,0,1.95,1,4.1,4.1,0,0,1,2.72,1.52,4.1,4.1,0,0,0,4.92,1c.77-.3.82-.59.2-1.22a5.16,5.16,0,0,0-.54-.5l-9.78-7.36c-.36-.26-.82-.4-1.12,0-.87,1.1-1.66.68-2.53,0A5.08,5.08,0,0,0,409.62,71.54ZM58.13,179.22a3.48,3.48,0,0,0,.41-.56c1-2.19,2.16-4.27,3.26-6.39.65-1.25,1.28-2.16,2.9-2.18a2,2,0,0,0,1.84-1.39.49.49,0,0,0-.38-.72,10.24,10.24,0,0,0-1.25-.07,1.79,1.79,0,0,1-1.65-1.54,2.44,2.44,0,0,1,.26-1.84,32.28,32.28,0,0,1,1.73-2.88c3.41-5,7.18-9.72,11-14.44,3.38-4.22,6.81-8.4,10.44-12.44,2.27-2.52,3.82-5.56,6.3-7.94a.85.85,0,0,0,.22-.42.69.69,0,0,0,0-.45.56.56,0,0,0-.66-.21,3.86,3.86,0,0,0-1.1.53c-1.91,1.41-3.8,2.84-5.69,4.28a7.85,7.85,0,0,1-3,1.71,3.35,3.35,0,0,0-2.63,2.28,5.71,5.71,0,0,1-1.29,2c-2.14,2.32-4.17,4.74-6.41,7a61.26,61.26,0,0,0-10.63,14.85c-1.1,2-2.07,4.15-3.27,6.13-1.38,2.28-2.18,4.78-3.43,7.1a3.55,3.55,0,0,0-.31.9.45.45,0,0,0,.25.58.51.51,0,0,0,.59-.33c.32-.64.62-1.3.89-2,.68-1.62,1.34-3.24,2-4.85a4.1,4.1,0,0,1,2-2.36c.92-.44,1.49-.23,1.59.7a5.38,5.38,0,0,1,0,1.65c-.46,2.24-.61,4.54-1.67,6.65-.81,1.64-1.56,3.31-2.36,5a1.94,1.94,0,0,0-.29,1.36C57.8,179,58,179.11,58.13,179.22Zm21.29-70.85a.79.79,0,0,0-.64-.67,3,3,0,0,0-2.76.77c-1.92,1.88-3.89,3.71-5.76,5.63C66,118.47,61.91,123,57.8,127.43c-3.13,3.41-6.08,6.93-8.84,10.61a11.87,11.87,0,0,0-2.23,4.22c-.79,3.37-2.89,6.21-4,9.43a3.7,3.7,0,0,1-.49.83c-.91,1.21-1.58,2.38-.49,3.87.33.46.18,1.23.27,1.85,0,.24.08.51.43.45.13,0,.26-.17.35-.29.6-.77.51-1.83,1.19-2.59a10.29,10.29,0,0,0,2.41-5.13,4.86,4.86,0,0,1,.86-1.93,86.72,86.72,0,0,0,8.18-14.38,13.21,13.21,0,0,1,1.62-2.67,2.55,2.55,0,0,1,2.57-1.15,2.15,2.15,0,0,0,2.36-1,114,114,0,0,1,7.77-8.69,2.25,2.25,0,0,0,.73-1.21c.14-2.44,1.79-4,3.47-5.57s3.17-3,4.74-4.58C79.05,109.21,79.43,108.88,79.42,108.37Zm189.46-82.1a24.37,24.37,0,0,0,5.36,1.48c4.91.5,9.75,1.39,14.67,1.79,5.58.46,11.14,1.09,16.72,1.6a14.14,14.14,0,0,0,3.25-.07,8.29,8.29,0,0,1,3.22.26c3.46.91,6.92,1.85,10.4,2.73a63.35,63.35,0,0,1,6.79,1.65c.22.08.53.18.63-.1,0-.09-.31-.35-.52-.44-1.23-.5-2.45-1-3.71-1.44-4.34-1.43-8.65-3-13.06-4.2s-8.69-2.86-13.23-3.67a5.31,5.31,0,0,1-3.31-1.52,2.26,2.26,0,0,0-1.09-.55,61.27,61.27,0,0,0-8.62-1.54c-.74-.06-.83.09-.53.76.69,1.51.32,2.19-1.33,2.44a10.46,10.46,0,0,1-1.25.06c-2.09,0-4.19-.16-6.23.45a2.79,2.79,0,0,1-1.49,0A10.6,10.6,0,0,0,268.88,26.27ZM92,89.82a2,2,0,0,0,1.32-.61q10.08-7.63,20.53-14.83a2.62,2.62,0,0,0,1.48-2.3,3.36,3.36,0,0,1,1.45-2.64,44.69,44.69,0,0,1,5.06-3.89c4.21-2.85,8.46-5.67,12.69-8.5.27-.18.53-.39.78-.59a.29.29,0,0,0,0-.22c-.13-.07-.29-.19-.41-.16a5.22,5.22,0,0,0-.93.35A157.86,157.86,0,0,0,116,66.68a50.2,50.2,0,0,0-4.61,3.25,49.07,49.07,0,0,1-3.92,3A64.54,64.54,0,0,0,98.1,80a6.65,6.65,0,0,1-1.59,1.13c-3.36,1.74-4.42,4.75-5.06,8C91.38,89.49,91.65,89.74,92,89.82ZM197.73,49.43c0-1.33-.39-1.7-1.67-1.43-1.63.33-3.27.68-4.87,1.14-7.28,2.09-14.69,3.82-21.68,6.75-4.28,1.8-8.62,3.48-12.92,5.25A9.35,9.35,0,0,0,153.71,63c1.22.18,2.09-.64,3.13-1,.23-.07.44-.23.67-.32,2-.8,3.91-1.84,6.2-1.67a4.44,4.44,0,0,0,1.46-.31c3.11-.95,6.2-1.94,9.31-2.86,4.39-1.3,8.8-2.55,13.31-3.47a76.67,76.67,0,0,0,8.48-2.11C197.29,50.91,197.82,50.35,197.73,49.43ZM368,67.85a.9.9,0,0,0-.94.59,1.08,1.08,0,0,0,.26,1.31,8.73,8.73,0,0,0,1.51.81c3,1.42,6,2.77,9,4.25a41.2,41.2,0,0,1,4.67,2.76c1.18.8,2.13,1.84,1.79,3.39-.19.86.28,1.35,1,1.73s1.18.6,1.76.9a72.22,72.22,0,0,1,10.2,6c.41.31.68.36.94-.15a2.84,2.84,0,0,1,.63-.72c.49-.44.5-.86-.18-1-1.74-.4-2.83-1.63-4-2.71-3.91-3.53-7.67-7.19-12.26-10-3.59-2.24-7.73-3.34-11.28-5.59-.58-.36-1.4-.43-1.9-1A1.48,1.48,0,0,0,368,67.85Zm-328,137c1.18-2,1.32-4,2.08-5.71a166.49,166.49,0,0,0,5.87-16.86c1.31-4.16,2.5-8.35,4.94-12.1a23.87,23.87,0,0,0,1.44-3c.06-.13.07-.37,0-.44-.26-.21-.44,0-.56.19-1.17,1.64-2.34,3.28-3.48,4.94a14.21,14.21,0,0,0-1.53,2.44,146.49,146.49,0,0,0-5.63,14.68c-.36,1.22-.87,2.39-1.24,3.61A33.23,33.23,0,0,0,40,204.82ZM231.9,39.36c.07-.43-.23-.49-.46-.5a16.5,16.5,0,0,0-3.5.24c-3.37.58-6.75,1.11-10.12,1.68s-6.59,1.08-9.85,1.82a9.86,9.86,0,0,0-3.39,1.92.55.55,0,0,0-.13.43.45.45,0,0,0,.52.39,6.28,6.28,0,0,0,1.24-.13c7.37-1.88,14.9-3,22.34-4.6a29.37,29.37,0,0,0,2.86-.87C231.62,39.67,231.78,39.45,231.9,39.36Zm193.65,83.29c.74-.1.74-.47.58-.88a36.4,36.4,0,0,0-3-5.42,4.36,4.36,0,0,0-2.67-2c-1.37-.42-1.55-.4-2.51.7-.25.28-.33.54-.07.82s.56.58.84.87c1.45,1.5,3.22,2.71,4.15,4.66C423.34,122.43,424.59,122.55,425.55,122.65ZM398.69,91.49a1,1,0,0,0-.25.06,2.23,2.23,0,0,0-.3,2.37,9.31,9.31,0,0,0,1.21.84q5.22,3.27,10.45,6.53c.19.12.51.29.63.22s.08-.41-.06-.59a17.2,17.2,0,0,0-1.17-1.53c-2.83-3.18-6.6-5.28-10.05-7.75A1.66,1.66,0,0,0,398.69,91.49ZM340,414.26c.16-.05.33-.08.47-.14,1.05-.5,2.12-.95,3.12-1.53,4-2.28,8-4.55,11.93-6.95,2.1-1.29,4-2.84,6-4.29.17-.12.37-.47.3-.56-.17-.26-.42,0-.6.08a61.51,61.51,0,0,1-6.45,4.08c-3.75,1.92-7.45,3.92-11.11,6a32.16,32.16,0,0,0-3.37,2.45,2,2,0,0,0-.46.55C339.67,414.08,339.75,414.21,340,414.26ZM433.07,88.32c1,1.44,1.9,2.93,3,4.25.89,1.06,1.39,2.58,3.2,2.76.31,0,.58.54.83.84.52.63,1,1.29,1.52,1.88.27.3.44,1.08,1,.65.38-.27,0-.88-.26-1.28s-.59-.76-.88-1.14c-2.19-2.91-5.06-5.23-7.69-7.75A.61.61,0,0,0,433.07,88.32Zm-350.5,222a.47.47,0,0,0-.38.54,29,29,0,0,0,.61,3.47,12.2,12.2,0,0,0,2.69,5,.79.79,0,0,0,.9.26c.57-.33.14-.69-.12-.92a4.94,4.94,0,0,1-1.76-4.24c.08-1.51-.77-2.71-1.54-3.92C82.91,310.34,82.69,310.33,82.57,310.28Zm347.21,82a3.48,3.48,0,0,0,.55-.45c1.36-1.59,2.74-3.18,4.05-4.81.65-.81,1.18-1.7,1.76-2.57A.23.23,0,0,0,436,384a.33.33,0,0,0-.23.05,5.32,5.32,0,0,0-.59.44,34.27,34.27,0,0,0-5.53,7,.87.87,0,0,0-.16.43C429.52,392,429.67,392.11,429.78,392.24ZM45,165.86a1.45,1.45,0,0,0,.44-.18c.74-.63,1.48-1.25,2.18-1.91,1-.93,1-1.84-.11-2.81-.3-.27-.68-.18-.76.17a7.63,7.63,0,0,1-1.79,3.3,1.32,1.32,0,0,0-.25,1.12C44.69,165.66,44.86,165.75,45,165.86Zm321.58,246a.46.46,0,0,0-.49-.43,2.27,2.27,0,0,0-1.86,1,12.21,12.21,0,0,1-3.08,2.73,7.72,7.72,0,0,0-1.1,1c-.08.08-.05.26-.07.4.14,0,.32,0,.43-.07l5.49-3.69A1.32,1.32,0,0,0,366.54,411.86Zm-237-292.26a1.78,1.78,0,0,0,.48-.1,20.52,20.52,0,0,0,4.31-3.6.46.46,0,0,0,.06-.42.47.47,0,0,0-.42-.13,9.73,9.73,0,0,0-4.6,3.85C129.27,119.27,129.43,119.46,129.49,119.6ZM264,25.57v-.1c-.65.08-1.31.13-2,.25-.27.05-.42.37-.15.53a4.35,4.35,0,0,0,3.73.8c.39-.13.76-.39.75-.84s-.45-.61-.87-.64S264.51,25.57,264,25.57Zm91.08,35.71c-.06,0-.17.09-.18.15-.06.27.14.44.36.54Q359,63.52,362.81,65c.1,0,.28-.06.42-.09-.07-.13-.1-.34-.22-.39a45.67,45.67,0,0,0-7.67-3.29A.71.71,0,0,0,355.09,61.28ZM55.86,190.94c0-.38,0-.85-.57-.86-.34,0-.53.34-.59.66-.19.91-.38,1.82-.54,2.74a.42.42,0,0,0,.42.47.75.75,0,0,0,.59-.3A6.4,6.4,0,0,0,55.86,190.94Zm375-101.61a1,1,0,0,0-.11-.2,33.16,33.16,0,0,0-3.49-3.92c-.23-.19-.49-.54-.8-.2s0,.61.18.83c1.24,1.25,2.5,2.47,3.76,3.69.07.07.28,0,.41,0S430.84,89.4,430.86,89.33Zm-21,18.59c-.18.06-.26.22-.12.35,1,.91,1.74,2.12,3.18,2.52a.45.45,0,0,0,.59-.26.48.48,0,0,0-.15-.41c-1.08-.73-2.17-1.44-3.26-2.14A.84.84,0,0,0,409.89,107.92ZM100.28,158.69l-.2-.43c-.14.07-.34.11-.41.22-.36.53-.71,1.07-1,1.62-.16.28-.21.64.19.77a.71.71,0,0,0,.6-.28C99.76,160,100,159.3,100.28,158.69Zm18.08,162.09c-.11.05-.42.1-.52.25-.19.33.07.61.37.72a2.72,2.72,0,0,0,1,.1.42.42,0,0,0,.3-.29.5.5,0,0,0-.12-.41A1.17,1.17,0,0,0,118.36,320.78Zm27.7-204.59c-.12-.06-.28-.19-.37-.16a1.32,1.32,0,0,0-.78.79.37.37,0,0,0,.14.36.51.51,0,0,0,.42-.09A1.08,1.08,0,0,0,146.06,116.19ZM394.4,418.48c0-.07,0-.2,0-.2-.41-.1-.55.22-.75.44,0,0,0,.19,0,.19C394,419,394.18,418.67,394.4,418.48ZM406.89,69c-.26,0-.41.07-.35.22a2.65,2.65,0,0,0,.41.5c.1-.08.3-.21.29-.23A4.15,4.15,0,0,0,406.89,69Zm4.66.93c-.31,0-.47.07-.37.2a2.26,2.26,0,0,0,.65.58c.15.09.33-.06.24-.2A3.4,3.4,0,0,0,411.55,70Zm-9.06,20.83a4.13,4.13,0,0,0-.64-.44.16.16,0,0,0-.21.23,2.43,2.43,0,0,0,.66.57C402.44,91.22,402.55,91.08,402.49,90.78ZM422.78,401l-.2-.33a2.13,2.13,0,0,0-.54.39.17.17,0,0,0,.2.26A2.75,2.75,0,0,0,422.78,401Zm-401-77.33c-.24-.09-.41,0-.38.16a1.1,1.1,0,0,0,.31.58.2.2,0,0,0,.32-.17A2.28,2.28,0,0,0,21.8,323.63Zm337.05,65.42c0-.23-.13-.36-.28-.28a1.16,1.16,0,0,0-.44.44c-.07.15.11.29.26.21A2.19,2.19,0,0,0,358.85,389.05ZM116,316.75c0-.06.09-.16.07-.18a2,2,0,0,0-.34-.22c0,.06-.09.16-.07.18A2.46,2.46,0,0,0,116,316.75ZM310,418.34c0-.16,0-.25-.22-.23s-.12.06-.17.1-.11.29.05.31S309.86,418.41,310,418.34Zm31.38-13.7a.85.85,0,0,0-.38,0c-.18.06-.2.2-.08.3a.23.23,0,0,0,.21,0A2.18,2.18,0,0,0,341.35,404.64Zm23-20.78c.06,0,.18.09.19.07a4,4,0,0,0,.24-.33,1,1,0,0,0-.2-.08A2.54,2.54,0,0,0,364.4,383.86Zm64,10.1c0-.07.08-.18.05-.21s-.27-.12-.38.05-.09.18-.06.22S428.26,394.13,428.39,394Zm-13-280.71c0-.06,0-.14-.09-.17s-.12,0-.18,0,0,.14.09.17S415.33,113.27,415.39,113.25ZM151.05,379.9c-.23,0-.27.08-.1.24s.13,0,.2-.06Zm226.79,8.66c.06,0,.16-.05.17-.09s-.05-.24-.21-.18a.2.2,0,0,0-.09.16S377.8,388.53,377.84,388.56Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("path", {
    className: colorPrimary + ' fill-current',
    d: "M270.6,156.16h79.91c.79,0,1.59,0,2.38,0,1.1.08,1.42.35,1.62,1.31a5.91,5.91,0,0,1,.11,1.12c.05,1.72.22,3.43.37,5.15.29,3.36.4,6.74.63,10.1.41,6,.87,12,1.26,17.94.26,4,.49,7.94.66,11.9.07,1.72-.14,1.86-2,2.13-.87.13-1.73.29-2.59.38-1.19.12-1.6-.18-1.76-1.3-.21-1.41-.32-2.84-.53-4.24a46.82,46.82,0,0,0-6.78-19.05,37.1,37.1,0,0,0-17-14,61,61,0,0,0-16.74-4.19A89.45,89.45,0,0,0,299.7,163q-22.31,0-44.61,0c-3,0-3,0-3,2.89q0,39.6,0,79.2c0,2.9-.11,2.8,3,2.8,7.48,0,14.95.07,22.42,0a48.75,48.75,0,0,0,12.51-1.38,25.19,25.19,0,0,0,17.07-14.86A45.88,45.88,0,0,0,310.62,217c.14-1.72.26-3.44.42-5.15.1-1.22.33-1.5,1.55-1.56a35.44,35.44,0,0,1,3.57,0,1.16,1.16,0,0,1,1.21,1.15c0,.6.05,1.2.05,1.8q0,38.25,0,76.5c0,2.95,0,2.94-3.23,2.95-3,0-3.06,0-3.23-2.77A62.07,62.07,0,0,0,308.61,275a29.35,29.35,0,0,0-8-13.36,26,26,0,0,0-12.95-6.3,55.07,55.07,0,0,0-10.19-.88H254.81c-2.69,0-2.7,0-2.7,2.64q0,36.8,0,73.58a37.35,37.35,0,0,0,1.47,10.44,19,19,0,0,0,9.59,12.09,24.9,24.9,0,0,0,9.52,2.7c1.74.17,3.48.27,5.22.42,1.14.1,1.39.29,1.42,1.4.12,4.25.19,3.81-3.67,3.81H188.59c-2.18-.05-2.33-.18-2.41-2.14,0-.6,0-1.2,0-1.8.1-1.83.33-2.12,2.24-2.13a37.87,37.87,0,0,0,5.93-.51c4.89-.8,9.31-2.49,12.79-6a21.22,21.22,0,0,0,5.6-11,36.71,36.71,0,0,0,.61-7.61V299.38q0-55.35,0-110.7a39.17,39.17,0,0,0-.6-8.51c-1.2-5.48-3.7-10.2-8.73-13.46a25.13,25.13,0,0,0-9.44-3.58c-2.26-.39-4.57-.56-6.84-.87-1.26-.17-1.46-.38-1.54-1.58a20.33,20.33,0,0,1,0-2.92c.11-1.24.45-1.5,1.83-1.58.8,0,1.59,0,2.39,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoSvg);

/***/ }),

/***/ "./components/icons/menu/menu.svg.tsx":
/*!********************************************!*\
  !*** ./components/icons/menu/menu.svg.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/components/icons/menu/menu.svg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Menu = ({
  showMenu
}) => {
  return __jsx("svg", {
    className: "fill-current hover:text-blue-900 text-blue-500",
    style: {
      margin: '4px 5px 5px',
      width: '40px'
    },
    viewBox: "0 0 800 800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("path", {
    className: showMenu ? 'block' : 'hidden',
    style: {
      fill: '#fff'
    },
    d: "M170.13,605.6h55.52V793.24h-36V666.32q0-5.48.12-15.34t.13-15.21L155,793.24h-37.5L82.71,635.77q0,5.34.12,15.21T83,666.32V793.24H47V605.6h56.15l33.62,147.54Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'block' : 'hidden',
    style: {
      fill: '#fff'
    },
    d: "M397.92,638.82H300.2v39.85h89.7v32.59H300.2V759.5H402.43v33.74H262.49V605.6H397.92Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'block' : 'hidden',
    style: {
      fill: '#fff'
    },
    d: "M431.87,605.6h40.45l73.31,130.84V605.6h36V793.24H543L467.83,660.1V793.24h-36Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'block' : 'hidden',
    style: {
      fill: '#fff'
    },
    d: "M617.79,605.6H657V720.84q0,19.33,4.5,28.24,7,15.76,30.46,15.77t30.33-15.77q4.5-8.91,4.5-28.24V605.6H766V720.93q0,29.93-9.13,46.59-17,30.56-64.91,30.56t-65-30.56q-9.13-16.66-9.13-46.59Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("rect", {
    className: showMenu ? 'block' : 'hidden',
    style: {
      fill: '#fff'
    },
    x: "79.68",
    y: "216.41",
    width: "654",
    height: "114.83",
    transform: "translate(312.74 -207.37) rotate(45)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("rect", {
    className: showMenu ? 'block' : 'hidden',
    style: {
      fill: '#fff'
    },
    x: "79.68",
    y: "216.41",
    width: "654",
    height: "114.83",
    transform: "translate(887.87 179.88) rotate(135)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("rect", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    x: "47.82",
    y: "50.52",
    width: "717.69",
    height: "126.01",
    transform: "translate(-0.19 0.69) rotate(-0.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("rect", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    x: "47.97",
    y: "421.12",
    width: "717.62",
    height: "126.01",
    transform: "translate(-0.82 0.69) rotate(-0.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("rect", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    x: "48.2",
    y: "235.76",
    width: "717.69",
    height: "126.01",
    transform: "translate(-0.51 0.69) rotate(-0.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    d: "M170.78,607.37h55.38V794.53H190.3V667.93q0-5.45.13-15.3t.12-15.17l-34.9,157.07H118.24L83.58,637.46q0,5.34.13,15.17t.12,15.3v126.6H48V607.37h56L137.5,754.53Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    d: "M398,640.51H300.52v39.74H390v32.51H300.52v48.12h102v33.65H262.9V607.37H398Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    d: "M431.85,607.37H472.2l73.11,130.5V607.37h35.87V794.53H542.7l-75-132.8v132.8H431.85Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx("path", {
    className: showMenu ? 'hidden' : 'block',
    style: {
      fill: '#fff'
    },
    d: "M617.29,607.37H656.4v115q0,19.27,4.49,28.16,7,15.74,30.38,15.73t30.25-15.73Q726,741.6,726,722.32v-115h39.11v115q0,29.83-9.11,46.47-17,30.47-64.74,30.47T626.4,768.88q-9.1-16.64-9.11-46.47Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./data/blog-posts.tsx":
/*!*****************************!*\
  !*** ./data/blog-posts.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BLOG_POST_DATA = {
  'Team-Frost-Law-Firm-joins-the-8th-annual-Walk-for-Mesothelioma-2019': {
    title: 'Team Frost Law Firm joins the 8th annual Walk for Mesothelioma 2019',
    urlFriendlyTitle: 'Team-Frost-Law-Firm-joins-the-8th-annual-Walk-for-Mesothelioma-2019',
    imageUrl: '/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg',
    caption: 'Team Frost Law Firm poses during the 8th Annual Mesothelioma Walk at Will Rogers State Historic Park on October 26th 2019.',
    author: 'Frost Law Firm',
    postedDate: 'October 26th, 2019',
    content: '<p class="py-2">The Pacific Mesothelioma Center (PMC), a division of The Pacific Heart, Lung & Blood Institute, established in 2012 holds an annual walk for mesothelioma. Team Frost Law Firm had over 15 participants this year that came out in support.</p> <p class="py-2"> Participants hiked up a mile to see a beautiful view overlooking Pacific Palisades. We received team t-shirts, yummy lunch, and the opportunity to win prizes. Prizes and raffles offered included a South African Photo Safari for Two, a Maui Deluxe Package, tickets to the Aquarium of the Pacific, and more! </p><p class="py-2"> The walk reached over its goal of $120,000. We hope to see everyone again next year. </p><p class="py-2"> The walk was held at the Will Rogers State Historic Park in Pacific Palisades, CA. </p> <div class="image pt-8"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+2.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"/> <span class="py-2 px-4 block text-xs text-black leading-tight"></span></div><div class="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk" /> <span class="py-2 px-4 block text-xs text-black leading-tight"></span></div><div class="image"> <img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+4.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk" /><span class="py-2 px-4 block text-xs text-black leading-tight"></span></div><div class="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+5.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"/><span class="py-2 px-4 block text-xs text-black leading-tight"></span> </div>',
    videoLink: ''
  },
  'Scott-featured-in-the-Keenan-Trial-Institute-Newsletter': {
    title: 'Scott featured in the Keenan Trial Institute Newsletter',
    urlFriendlyTitle: 'Scott-featured-in-the-Keenan-Trial-Institute-Newsletter',
    imageUrl: '/images/blog/keenantrialinstitute/kti-newsletter-cover.jpg',
    caption: 'Cover of Keenan Trial Institute Newsletter Volume Two Issue Two',
    author: 'Frost Law Firm',
    postedDate: 'August 16th, 2019',
    content: '<p className=px-4 mt-3 leading-tight tracking-wider text-lg">Check out Scott L. Frost in the Keenan Trial Institute newsletter!</p><div className="my-3"><iframe style="border: \'1px solid #777" src="https://indd.adobe.com/embed/0e8f250a-9daf-4c8f-a138-422443a0db7e?startpage=35&allowFullscreen=true" width="100%" height="600px" frameBorder="0" allowFullScreen=""></iframe></div>',
    videoLink: ''
  },
  'Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott': {
    title: 'Neil Patrick Harris gets out of jury duty thanks to Scott',
    urlFriendlyTitle: 'Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott',
    imageUrl: '/images/blog/nph/nph-video-cover.jpg',
    author: 'Frost Law Firm',
    postedDate: 'August 16th, 2019',
    videoLink: 'https://www.youtube.com/embed/suP95tPSbUQ',
    content: '   <div class="video-youtube-container"><iframe\n            class="m-auto"\n            width="560"\n            height="315"\n            src="https://www.youtube.com/embed/suP95tPSbUQ"\n            frameBorder="0"\n            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n            allowfullScreen="true"\n          ></iframe></div>\n          <p class="mt-6 leading-tight tracking-wider text-lg">\n            Neil Patrick Harris was on The Late Show with James Corden and he\n            discusses his recent experience with jury duty. The \'lawyer\' he\n            refers to is actually Scott L. Frost as he was selecting his jury\n            for a trial.\n          </p>'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BLOG_POST_DATA);

/***/ }),

/***/ "./data/get-posts.tsx":
/*!****************************!*\
  !*** ./data/get-posts.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const GET_BLOG_POSTS = [{
  title: 'Team Frost Law Firm joins the 8th annual Walk for Mesothelioma 2019',
  urlFriendlyTitle: 'Team-Frost-Law-Firm-joins-the-8th-annual-Walk-for-Mesothelioma-2019',
  imageUrl: '/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg',
  caption: 'Team Frost Law Firm poses during the 8th Annual Mesothelioma Walk at Will Rogers State Historic Park on October 26th 2019.',
  author: 'Frost Law Firm',
  postedDate: 'October 26th, 2019',
  description: 'The Pacific Mesothelioma Center (PMC), a division of The Pacific Heart, Lung & Blood Institute, established in 2012 holds an annual walk for mesothelioma. Team Frost Law Firm had over 15 participants this year that came out in support. <br> Participants hiked up a mile to see a beautiful view overlooking Pacific Palisades. We received team t-shirts, yummy lunch, and the opportunity to win prizes. Prizes and raffles offered included a South African Photo Safari for Two, a Maui Deluxe Package, tickets to the Aquarium of the Pacific, and more! <br> The walk reached over its goal of $120,000. We hope to see everyone again next year. <br> The walk was held at the Will Rogers State Historic Park in Pacific Palisades, CA. <div className="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+2.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"/> <span className="py-2 px-4 block text-xs text-black leading-tight"></span></div><div className="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk" /> <span className="py-2 px-4 block text-xs text-black leading-tight"></span></div><div className="image"> <img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+4.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk" /><span className="py-2 px-4 block text-xs text-black leading-tight"></span></div><div className="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+5.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"/><span className="py-2 px-4 block text-xs text-black leading-tight"></span> </div>',
  videoLink: ''
}, {
  title: 'Scott featured in the Keenan Trial Institute Newsletter',
  urlFriendlyTitle: 'Scott-featured-in-the-Keenan-Trial-Institute-Newsletter',
  imageUrl: '/images/blog/keenantrialinstitute/kti-newsletter-cover.jpg',
  caption: 'Cover of Keenan Trial Institute Newsletter Volume Two Issue Two',
  author: 'Frost Law Firm',
  postedDate: 'August 16th, 2019',
  description: '<p className=px-4 mt-3 leading-tight tracking-wider text-lg">Check out Scott L. Frost in the Keenan Trial Institute newsletter!</p><div className="my-3"><iframe style="border: \'1px solid #777" src="https://indd.adobe.com/embed/0e8f250a-9daf-4c8f-a138-422443a0db7e?startpage=35&allowFullscreen=true" width="100%" height="600px" frameBorder="0" allowFullScreen=""></iframe></div>',
  videoLink: ''
}, {
  title: 'Neil Patrick Harris gets out of jury duty thanks to Scott',
  urlFriendlyTitle: 'Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott',
  imageUrl: '/images/blog/nph/nph-video-cover.jpg',
  author: 'Frost Law Firm',
  postedDate: 'August 16th, 2019',
  description: "Neil Patrick Harris was on The Late Show with James Corden and he discusses his recent experience with jury duty. The 'lawyer' he efers to is actually Scott L. Frost as he was selecting his jury for a trial.",
  videoLink: 'https://www.youtube.com/embed/suP95tPSbUQ'
}];
/* harmony default export */ __webpack_exports__["default"] = (GET_BLOG_POSTS);

/***/ }),

/***/ "./helpers/utils.helpers.tsx":
/*!***********************************!*\
  !*** ./helpers/utils.helpers.tsx ***!
  \***********************************/
/*! exports provided: isMobileDetector, createMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDetector", function() { return isMobileDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarkup", function() { return createMarkup; });
const isMobileDetector = userAgent => {
  // device detection
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
};
const createMarkup = value => {
  return {
    __html: value
  };
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/blog/[title].tsx":
/*!********************************!*\
  !*** ./pages/blog/[title].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_desktop_blog_title_index_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/desktop/blog/title/index.view */ "./views/desktop/blog/title/index.view.tsx");
/* harmony import */ var _helpers_utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils.helpers */ "./helpers/utils.helpers.tsx");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/blog-posts */ "./data/blog-posts.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/pages/blog/[title].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogTitle = ({
  isMobile,
  page,
  blogPost
}) => {
  return __jsx(_views_desktop_blog_title_index_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isMobile: isMobile,
    page: page,
    blogPost: blogPost,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  });
};

BlogTitle.getInitialProps = async ({
  query,
  req
}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = Object(_helpers_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["isMobileDetector"])(userAgent);
  const {
    title
  } = query;
  const newString = title.toString();
  const post = _data_blog_posts__WEBPACK_IMPORTED_MODULE_3__["default"][newString];
  return {
    isMobile,
    page: 'Blog',
    blogPost: post
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BlogTitle);

/***/ }),

/***/ "./tailwind.config.js":
/*!****************************!*\
  !*** ./tailwind.config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  theme: {
    extend: {
      colors: {
        'frost-blue': '#2c70ab',
        'frost-light-blue': '#6494c4',
        'frost-gray': '#9babb2',
        'frost-light-gray': '#e9ecee',
        'frost-dark-blue': '#235b86',
        'frost-darker-blue': '#153751',
        'frost-orange': '#F18F01',
        'frost-dark-orange': '#E28413',
        'frost-white': '#FBF5F3'
      },
      spacing: {
        '72': '18rem'
      },
      flex: {
        sticky: '1 0 auto'
      },
      letterSpacing: {
        specialWide: '1.26em'
      },
      fontSize: {
        '2xs': '.375rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      borderWidth: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'visited']
  },
  plugins: []
};

/***/ }),

/***/ "./views/desktop/blog/title/index.styles.tsx":
/*!***************************************************!*\
  !*** ./views/desktop/blog/title/index.styles.tsx ***!
  \***************************************************/
/*! exports provided: Wrapper, LayoutContainer, ContentContainer, TitleContainer, Title, Author, Date, MainImageContainer, MainImageCaption, PostContent, BlogPostsFooterTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainer", function() { return LayoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return ContentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContainer", function() { return TitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImageContainer", function() { return MainImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImageCaption", function() { return MainImageCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContent", function() { return PostContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsFooterTitle", function() { return BlogPostsFooterTitle; });
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "indexstyles__Wrapper",
  componentId: "rwvego-0"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "backgroundColor",
  "config": "backgroundColor"
}, {
  "prop": "backgroundSize",
  "config": "backgroundSize"
}, {
  "prop": "backgroundPosition",
  "config": "backgroundPosition"
}], "white")));
const LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "indexstyles__LayoutContainer",
  componentId: "rwvego-1"
})(["", ""], {
  "maxWidth": _tailwindConfig.theme.maxWidth["screen-xl"],
  "margin": _tailwindConfig.theme.margin["auto"],
  "display": "flex"
});
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "indexstyles__ContentContainer",
  componentId: "rwvego-2"
})(["", ""], {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "md")]: {
    "width": _tailwindConfig.theme.width["2/3"],
    "margin": _tailwindConfig.theme.margin["auto"],
    "paddingLeft": _tailwindConfig.theme.padding["4"],
    "paddingRight": _tailwindConfig.theme.padding["4"]
  },
  "paddingTop": _tailwindConfig.theme.padding["8"],
  "paddingBottom": _tailwindConfig.theme.padding["8"]
});
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "indexstyles__TitleContainer",
  componentId: "rwvego-3"
})(["", ""], {
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "paddingBottom": _tailwindConfig.theme.padding["4"]
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "indexstyles__Title",
  componentId: "rwvego-4"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-blue"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "4xl"), {
  [tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyScreen(_tailwindConfig, "lg")]: Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
    "prop": "color",
    "config": "textColor"
  }, {
    "prop": "fontSize",
    "config": "fontSize"
  }], "5xl")),
  "lineHeight": _tailwindConfig.theme.lineHeight["tight"]
}));
const Author = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "indexstyles__Author",
  componentId: "rwvego-5"
})(["", ""], Object.assign({
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-700"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "semibold")));
const Date = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "indexstyles__Date",
  componentId: "rwvego-6"
})(["", ""], Object.assign({
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "sm"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "gray-600")));
const MainImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "indexstyles__MainImageContainer",
  componentId: "rwvego-7"
})(["", ""], {
  "paddingTop": _tailwindConfig.theme.padding["4"],
  "paddingBottom": _tailwindConfig.theme.padding["4"]
});
const MainImageCaption = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "indexstyles__MainImageCaption",
  componentId: "rwvego-8"
})(["", ""], Object.assign({
  "paddingTop": _tailwindConfig.theme.padding["2"],
  "paddingBottom": _tailwindConfig.theme.padding["2"],
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "display": "block"
}, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "xs"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "black"), {
  "lineHeight": _tailwindConfig.theme.lineHeight["tight"]
}));
const PostContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "indexstyles__PostContent",
  componentId: "rwvego-9"
})(["", ""], {
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"]
});
const BlogPostsFooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "indexstyles__BlogPostsFooterTitle",
  componentId: "rwvego-10"
})(["", ""], Object.assign(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "frost-blue"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "2xl"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveStyle(_tailwindConfig, [{
  "prop": "fontWeight",
  "config": "fontWeight"
}, {
  "prop": "fontFamily",
  "config": "fontFamily"
}], "extrabold"), {
  "paddingLeft": _tailwindConfig.theme.padding["4"],
  "paddingRight": _tailwindConfig.theme.padding["4"],
  "textAlign": "center",
  "lineHeight": _tailwindConfig.theme.lineHeight["tight"]
}));

/***/ }),

/***/ "./views/desktop/blog/title/index.view.tsx":
/*!*************************************************!*\
  !*** ./views/desktop/blog/title/index.view.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_master_master_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/master/master.layout */ "./views/layouts/master/master.layout.tsx");
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/breadcrumbs/breadcrumbs.component */ "./components/breadcrumbs/breadcrumbs.component.tsx");
/* harmony import */ var _components_desktop_blog_posts_footer_blog_posts_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/_desktop/blog-posts-footer/blog-posts-footer.component */ "./components/_desktop/blog-posts-footer/blog-posts-footer.component.tsx");
/* harmony import */ var _helpers_utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/utils.helpers */ "./helpers/utils.helpers.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.styles */ "./views/desktop/blog/title/index.styles.tsx");
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/views/desktop/blog/title/index.view.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const BlogTitleDesktop = ({
  isMobile,
  page,
  blogPost
}) => {
  const {
    title,
    urlFriendlyTitle,
    imageUrl,
    caption,
    author,
    postedDate,
    content,
    videoLink
  } = blogPost;
  return __jsx(_layouts_master_master_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isMobile: isMobile,
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path1: "Home",
    url1: "/",
    path2: "Blog",
    url2: "blog",
    path3: title,
    url3: '/' + urlFriendlyTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["LayoutContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["ContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["TitleContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, title), __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["Author"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Posted By ", author), __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["Date"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, postedDate)), videoLink ? '' : __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["MainImageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("img", {
    src: imageUrl,
    alt: "Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["MainImageCaption"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, caption)), __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["PostContent"], {
    dangerouslySetInnerHTML: Object(_helpers_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["createMarkup"])(content),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })))), __jsx(_components_desktop_blog_posts_footer_blog_posts_footer_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_5__["BlogPostsFooterTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "See more posts!")));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogTitleDesktop);

/***/ }),

/***/ "./views/layouts/master/master.layout.tsx":
/*!************************************************!*\
  !*** ./views/layouts/master/master.layout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/header/header.component */ "./components/header/header.component.tsx");
/* harmony import */ var _components_desktop_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/_desktop/footer/footer.component */ "./components/_desktop/footer/footer.component.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jaymanalansan/Websites/frostlawfirm2/views/layouts/master/master.layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_0___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_1___default.a);





const MasterLayoutStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "masterlayout__MasterLayoutStyles",
  componentId: "mz6fp5-0"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "minHeight": _tailwindConfig.theme.minHeight["screen"]
});
const MasterLayoutContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "masterlayout__MasterLayoutContent",
  componentId: "mz6fp5-1"
})(["", ""], {
  "flex": _tailwindConfig.theme.flex["sticky"]
});

const MasterLayout = (_ref) => {
  let {
    isMobile = true,
    page,
    showRecognitionAffiliation = true
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isMobile", "page", "showRecognitionAffiliation"]);

  return __jsx(MasterLayoutStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showMobileMenu: false,
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(MasterLayoutContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, props.children), __jsx(_components_desktop_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showRecognitionAffiliation: showRecognitionAffiliation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MasterLayout);

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/blog/[title].tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaymanalansan/Websites/frostlawfirm2/pages/blog/[title].tsx */"./pages/blog/[title].tsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "tailwind.macro/utils.umd.js":
/*!**********************************************!*\
  !*** external "tailwind.macro/utils.umd.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tailwind.macro/utils.umd.js");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[title].js.map