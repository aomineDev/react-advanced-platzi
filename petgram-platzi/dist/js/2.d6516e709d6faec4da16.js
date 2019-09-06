(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./src/components/Fav/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Fav/index.jsx ***!
  \**************************************/
/*! exports provided: Fav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fav\", function() { return Fav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Fav/styles.js\");\n\n\n\nvar Fav = function Fav(_ref) {\n  var src = _ref.src,\n      id = _ref.id;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Photo\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/detail/\".concat(id)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: src,\n    alt: \"image\"\n  })));\n};\n\n//# sourceURL=webpack:///./src/components/Fav/index.jsx?");

/***/ }),

/***/ "./src/components/Fav/styles.js":
/*!**************************************!*\
  !*** ./src/components/Fav/styles.js ***!
  \**************************************/
/*! exports provided: Photo, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Photo\", function() { return Photo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 100%;\\n  overflow: hidden;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Photo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li(_templateObject());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject2());\n\n//# sourceURL=webpack:///./src/components/Fav/styles.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/index.jsx ***!
  \*********************************************/
/*! exports provided: ListOfFavsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfFavsComponent\", function() { return ListOfFavsComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Fav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Fav */ \"./src/components/Fav/index.jsx\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ \"./src/components/Container/index.jsx\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Title */ \"./src/components/Title/index.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar ListOfFavsComponent = function ListOfFavsComponent(_ref) {\n  var favs = _ref.favs;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], null, \"Favorite Photos \\uD83D\\uDDA4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"List\"], null, favs.map(function (fav) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fav__WEBPACK_IMPORTED_MODULE_2__[\"Fav\"], _extends({\n      key: fav.id\n    }, fav));\n  })));\n};\nListOfFavsComponent.propTypes = {\n  favs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  })).isRequired\n};\n\n//# sourceURL=webpack:///./src/components/ListOfFavs/index.jsx?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap:  4px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul(_templateObject());\n\n//# sourceURL=webpack:///./src/components/ListOfFavs/styles.js?");

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

/***/ "./src/components/shared/LoadingDots/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/shared/LoadingDots/index.jsx ***!
  \*****************************************************/
/*! exports provided: LoadingDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingDots\", function() { return LoadingDots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/shared/LoadingDots/styles.js\");\n\n\nvar LoadingDots = function LoadingDots() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"LoadingWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"], null, \"Loading...\"));\n};\n\n//# sourceURL=webpack:///./src/components/shared/LoadingDots/index.jsx?");

/***/ }),

/***/ "./src/components/shared/LoadingDots/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/shared/LoadingDots/styles.js ***!
  \*****************************************************/
/*! exports provided: LoadingWrapper, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingWrapper\", function() { return LoadingWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return Loader; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  color: #2196F3;\\n  font-size: 10px;\\n  margin: 0 auto 60px;\\n  position: relative;\\n  text-indent: -9999em;\\n  transform: translateZ(0);\\n  animation-delay: -0.16s;\\n  &,\\n  &:before,\\n  &:after {\\n    border-radius: 50%;\\n    width: 2.5em;\\n    height: 2.5em;\\n    animation-fill-mode: both;\\n    animation: \", \" 1.8s infinite ease-in-out;\\n  }\\n  &:before,\\n  &:after {\\n    content: '';\\n    position: absolute;\\n    top: 0;\\n  }\\n  &:before {\\n    left: -3.5em;\\n    animation-delay: -0.32s;\\n  }\\n  &:after {\\n    left: 3.5em;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 24px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  0%,\\n  80%,\\n  100% {\\n    box-shadow: 0 2.5em 0 -1.3em;\\n  }\\n  40% {\\n    box-shadow: 0 2.5em 0 0;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar loadDots = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])(_templateObject());\nvar LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Loader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3(), loadDots);\n\n//# sourceURL=webpack:///./src/components/shared/LoadingDots/styles.js?");

/***/ }),

/***/ "./src/graphql/queries/getFavorites.js":
/*!*********************************************!*\
  !*** ./src/graphql/queries/getFavorites.js ***!
  \*********************************************/
/*! exports provided: getFavs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFavs\", function() { return getFavs; });\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getFavs {\\n    favs {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_FAVS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nvar getFavs = function getFavs() {\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__[\"useQuery\"])(GET_FAVS, {\n    fetchPolicy: 'network-only'\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return {\n    loading: loading,\n    error: error,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/graphql/queries/getFavorites.js?");

/***/ }),

/***/ "./src/layout/Favorites.jsx":
/*!**********************************!*\
  !*** ./src/layout/Favorites.jsx ***!
  \**********************************/
/*! exports provided: Favorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Favorites\", function() { return Favorites; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_queries_getFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries/getFavorites */ \"./src/graphql/queries/getFavorites.js\");\n/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListOfFavs */ \"./src/components/ListOfFavs/index.jsx\");\n/* harmony import */ var _components_shared_LoadingDots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/LoadingDots */ \"./src/components/shared/LoadingDots/index.jsx\");\n\n\n\n\nvar Favorites = function Favorites() {\n  var _getFavs = Object(_graphql_queries_getFavorites__WEBPACK_IMPORTED_MODULE_1__[\"getFavs\"])(),\n      loading = _getFavs.loading,\n      error = _getFavs.error,\n      data = _getFavs.data;\n\n  var favs = data.favs;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_LoadingDots__WEBPACK_IMPORTED_MODULE_3__[\"LoadingDots\"], null);\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Error! \", error);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_2__[\"ListOfFavsComponent\"], {\n    favs: favs\n  });\n};\n\n//# sourceURL=webpack:///./src/layout/Favorites.jsx?");

/***/ }),

/***/ "./src/pages/Favs.jsx":
/*!****************************!*\
  !*** ./src/pages/Favs.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Meta */ \"./src/Meta/index.jsx\");\n/* harmony import */ var _layout_Favorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Favorites */ \"./src/layout/Favorites.jsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var meta = {\n    title: 'Tus Favoritos',\n    description: 'Aqui puedes encontrar tus fotos favoritas'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"], meta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Favorites__WEBPACK_IMPORTED_MODULE_2__[\"Favorites\"], null));\n});\n\n//# sourceURL=webpack:///./src/pages/Favs.jsx?");

/***/ })

}]);