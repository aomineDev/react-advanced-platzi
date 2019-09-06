(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/Meta/index.jsx":
/*!****************************!*\
  !*** ./src/Meta/index.jsx ***!
  \****************************/
/*! exports provided: Meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return Meta; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Meta = function Meta(_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      description = _ref.description;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Petgram | \", title), description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: description\n  })), children);\n};\n\n//# sourceURL=webpack:///./src/Meta/index.jsx?");

/***/ }),

/***/ "./src/components/Container/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Container/index.jsx ***!
  \********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Container/styles.js\");\n\n\nvar Container = function Container(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], null, children);\n};\n\n//# sourceURL=webpack:///./src/components/Container/index.jsx?");

/***/ }),

/***/ "./src/components/Container/styles.js":
/*!********************************************!*\
  !*** ./src/components/Container/styles.js ***!
  \********************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  padding-left: 16px;\\n  padding-right: 16px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\n\n//# sourceURL=webpack:///./src/components/Container/styles.js?");

/***/ }),

/***/ "./src/components/SubmitButton/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/SubmitButton/index.jsx ***!
  \***********************************************/
/*! exports provided: SubmitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubmitButton\", function() { return SubmitButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/SubmitButton/styles.js\");\n\n\n\nvar SubmitButton = function SubmitButton(_ref) {\n  var action = _ref.action,\n      children = _ref.children,\n      _ref$disabled = _ref.disabled,\n      disabled = _ref$disabled === void 0 ? false : _ref$disabled;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: action,\n    disabled: disabled\n  }, children);\n};\nSubmitButton.propTypes = {\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  chidlren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n};\n\n//# sourceURL=webpack:///./src/components/SubmitButton/index.jsx?");

/***/ }),

/***/ "./src/components/SubmitButton/styles.js":
/*!***********************************************!*\
  !*** ./src/components/SubmitButton/styles.js ***!
  \***********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: block;\\n  width: 100%;\\n  height: 32px;\\n  padding: 0;\\n  border-radius: 3px;\\n  background-color: #8d00ff;\\n  color: #fff;\\n  font-size: 16px;\\n  font-weight: bold;\\n  transition: .3s;\\n  &:disabled {\\n    opacity: .2;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject());\n\n//# sourceURL=webpack:///./src/components/SubmitButton/styles.js?");

/***/ }),

/***/ "./src/components/Title/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Title/index.jsx ***!
  \****************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Title/styles.js\");\n\n\nvar Title = function Title(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TitlePrimary\"], null, children);\n};\n\n//# sourceURL=webpack:///./src/components/Title/index.jsx?");

/***/ }),

/***/ "./src/components/Title/styles.js":
/*!****************************************!*\
  !*** ./src/components/Title/styles.js ***!
  \****************************************/
/*! exports provided: TitlePrimary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitlePrimary\", function() { return TitlePrimary; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 12px;\\n  margin-bottom: 12px;\\n  font-size: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TitlePrimary = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject());\n\n//# sourceURL=webpack:///./src/components/Title/styles.js?");

/***/ }),

/***/ "./src/layout/UserUI.jsx":
/*!*******************************!*\
  !*** ./src/layout/UserUI.jsx ***!
  \*******************************/
/*! exports provided: UserUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserUI\", function() { return UserUI; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Title */ \"./src/components/Title/index.jsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container/index.jsx\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SubmitButton */ \"./src/components/SubmitButton/index.jsx\");\n\n\n\n\n\nvar UserUI = function UserUI() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Context__WEBPACK_IMPORTED_MODULE_1__[\"Context\"]),\n      removeAuth = _useContext.removeAuth;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], null, \"User \\uD83D\\uDC69\\u200D\\uD83D\\uDE80\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__[\"SubmitButton\"], {\n    action: removeAuth\n  }, \"Cerrar Sesi\\xF3n\"));\n};\n\n//# sourceURL=webpack:///./src/layout/UserUI.jsx?");

/***/ }),

/***/ "./src/pages/User.jsx":
/*!****************************!*\
  !*** ./src/pages/User.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Meta */ \"./src/Meta/index.jsx\");\n/* harmony import */ var _layout_UserUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/UserUI */ \"./src/layout/UserUI.jsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var meta = {\n    title: 'User',\n    description: 'La página donde podras ver tus datos como usuario'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"], meta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_UserUI__WEBPACK_IMPORTED_MODULE_2__[\"UserUI\"], null));\n});\n\n//# sourceURL=webpack:///./src/pages/User.jsx?");

/***/ })

}]);