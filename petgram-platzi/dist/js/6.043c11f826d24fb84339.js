(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/Meta/index.jsx":
/*!****************************!*\
  !*** ./src/Meta/index.jsx ***!
  \****************************/
/*! exports provided: Meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return Meta; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Meta = function Meta(_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      description = _ref.description;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Petgram | \", title), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: description\n  })), children);\n};\n\n//# sourceURL=webpack:///./src/Meta/index.jsx?");

/***/ }),

/***/ "./src/components/Error404/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Error404/index.jsx ***!
  \*******************************************/
/*! exports provided: Error404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Error404\", function() { return Error404; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Error404/styles.js\");\n\n\nvar Error404 = function Error404() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, \"Esta P\\xE1gina no existe! :(\"));\n};\n\n//# sourceURL=webpack:///./src/components/Error404/index.jsx?");

/***/ }),

/***/ "./src/components/Error404/styles.js":
/*!*******************************************!*\
  !*** ./src/components/Error404/styles.js ***!
  \*******************************************/
/*! exports provided: Wrapper, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 24px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: calc(100vh - 60px);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject2());\n\n//# sourceURL=webpack:///./src/components/Error404/styles.js?");

/***/ }),

/***/ "./src/pages/NotFound.jsx":
/*!********************************!*\
  !*** ./src/pages/NotFound.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Meta */ \"./src/Meta/index.jsx\");\n/* harmony import */ var _components_Error404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Error404 */ \"./src/components/Error404/index.jsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var meta = {\n    title: 'No se encotro la página',\n    description: 'No se pudo encontrar la página que buscas'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"], meta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error404__WEBPACK_IMPORTED_MODULE_2__[\"Error404\"], null));\n});\n\n//# sourceURL=webpack:///./src/pages/NotFound.jsx?");

/***/ })

}]);