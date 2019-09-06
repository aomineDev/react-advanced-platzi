(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/Category/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Category/index.jsx ***!
  \*******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Category/styles.js\");\n\n\nvar DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';\nvar Category = function Category(_ref) {\n  var id = _ref.id,\n      _ref$cover = _ref.cover,\n      cover = _ref$cover === void 0 ? DEFAULT_IMAGE : _ref$cover,\n      path = _ref.path,\n      _ref$emoji = _ref.emoji,\n      emoji = _ref$emoji === void 0 ? '?' : _ref$emoji;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Anchor\"], {\n    to: path\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: cover,\n    alt: \"cover\"\n  }), emoji);\n};\n\n//# sourceURL=webpack:///./src/components/Category/index.jsx?");

/***/ }),

/***/ "./src/components/Category/styles.js":
/*!*******************************************!*\
  !*** ./src/components/Category/styles.js ***!
  \*******************************************/
/*! exports provided: Anchor, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Anchor\", function() { return Anchor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  border:1px solid #ddd;\\n  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);\\n  border-radius: 50%;\\n  overflow: hidden;\\n  object-fit: cover;\\n  height: 75px;\\n  width: 75px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  text-decoration: none;\\n  width: 75px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Anchor = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"])(_templateObject());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject2());\n\n//# sourceURL=webpack:///./src/components/Category/styles.js?");

/***/ }),

/***/ "./src/components/ListOfCategories/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/ListOfCategories/index.jsx ***!
  \***************************************************/
/*! exports provided: ListOfCategoriesComponent, ListOfCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfCategoriesComponent\", function() { return ListOfCategoriesComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfCategories\", function() { return ListOfCategories; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Category */ \"./src/components/Category/index.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfCategories/styles.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar ListOfCategoriesComponent = function ListOfCategoriesComponent(_ref) {\n  var categories = _ref.categories;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showCategories = _useState2[0],\n      setShowCategories = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var onScroll = function onScroll(e) {\n      var newShowCategories = window.scrollY > 200;\n      showCategories !== newShowCategories && setShowCategories(newShowCategories);\n    };\n\n    document.addEventListener('scroll', onScroll);\n    return function () {\n      return document.removeEventListener('scroll', onScroll);\n    };\n  }, [showCategories]);\n\n  var renderList = function renderList(fixed, fadeIn) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n      fixed: fixed,\n      fadeIn: fadeIn\n    }, categories.map(function (category) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Item\"], {\n        key: category.id\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], _extends({}, category, {\n        path: \"/pet/\".concat(category.id)\n      })));\n    }));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderList(), renderList(true, showCategories));\n};\nvar ListOfCategories = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ListOfCategoriesComponent);\n\n//# sourceURL=webpack:///./src/components/ListOfCategories/index.jsx?");

/***/ }),

/***/ "./src/components/ListOfCategories/styles.js":
/*!***************************************************!*\
  !*** ./src/components/ListOfCategories/styles.js ***!
  \***************************************************/
/*! exports provided: List, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_animatios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/animatios */ \"./src/styles/animatios.js\");\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 0 8px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n      /* \", \" */\\n      transform: scale(.8) translateY(0);\\n    \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    position: fixed;\\n    top: -4px;\\n    left: 0;\\n    right: 0;\\n    margin: 0 auto;\\n    max-width: 400px;\\n    background-color: #fff;\\n    border-radius: 60px;\\n    box-shadow: 0 0 20px rgba(0, 0, 0, .3);\\n    transition: transform .5s linear;\\n    transform: scale(.8) translateY(-120%);\\n    z-index: 1;\\n\\n    \", \"\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  overflow-x: auto;\\n  \", \"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul(_templateObject(), function (props) {\n  return props.fixed && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject2(), function (props) {\n    return props.fadeIn && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject3(), Object(_styles_animatios__WEBPACK_IMPORTED_MODULE_1__[\"fadeInTop\"])({\n      fillMode: 'forwards'\n    }));\n  });\n});\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li(_templateObject4());\n\n//# sourceURL=webpack:///./src/components/ListOfCategories/styles.js?");

/***/ }),

/***/ "./src/components/ListOfPhotoCards/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/ListOfPhotoCards/index.jsx ***!
  \***************************************************/
/*! exports provided: ListOfPhotoCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfPhotoCardsComponent\", function() { return ListOfPhotoCardsComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PhotoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PhotoCard */ \"./src/components/PhotoCard/index.jsx\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container */ \"./src/components/Container/index.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar ListOfPhotoCardsComponent = function ListOfPhotoCardsComponent(_ref) {\n  var photos = _ref.photos;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], null, photos.map(function (photo) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoCard__WEBPACK_IMPORTED_MODULE_1__[\"PhotoCard\"], _extends({\n      key: photo.id\n    }, photo));\n  }));\n};\n\n//# sourceURL=webpack:///./src/components/ListOfPhotoCards/index.jsx?");

/***/ }),

/***/ "./src/components/shared/LoadingSpinner/index.jsx":
/*!********************************************************!*\
  !*** ./src/components/shared/LoadingSpinner/index.jsx ***!
  \********************************************************/
/*! exports provided: LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingSpinner\", function() { return LoadingSpinner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/shared/LoadingSpinner/styles.js\");\n\n\nvar LoadingSpinner = function LoadingSpinner() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"LoaderWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"LoaderSpinner\"], null, \"Loading...\"));\n};\n\n//# sourceURL=webpack:///./src/components/shared/LoadingSpinner/index.jsx?");

/***/ }),

/***/ "./src/components/shared/LoadingSpinner/styles.js":
/*!********************************************************!*\
  !*** ./src/components/shared/LoadingSpinner/styles.js ***!
  \********************************************************/
/*! exports provided: LoaderWrapper, LoaderSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoaderWrapper\", function() { return LoaderWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoaderSpinner\", function() { return LoaderSpinner; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  color: #2196F3;\\n  font-size: 6px;\\n  margin: 20px auto;\\n  width: .5em;\\n  height: .5em;\\n  border-radius: 50%;\\n  position: relative;\\n  text-indent: -9999em;\\n  animation: \", \" 1.3s infinite linear;\\n  transform: translateZ(0);\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding-left: 20px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  0%,\\n  100% {\\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\\n  }\\n  12.5% {\\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n  }\\n  25% {\\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n  }\\n  37.5% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n  }\\n  50% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n  }\\n  62.5% {\\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\\n  }\\n  75% {\\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\\n  }\\n  87.5% {\\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar loadSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])(_templateObject());\nvar LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar LoaderSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3(), loadSpinner);\n\n//# sourceURL=webpack:///./src/components/shared/LoadingSpinner/styles.js?");

/***/ }),

/***/ "./src/graphql/queries/getCategories.js":
/*!**********************************************!*\
  !*** ./src/graphql/queries/getCategories.js ***!
  \**********************************************/
/*! exports provided: getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getCategories {\\n  categories {\\n    id\\n    cover\\n    emoji\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_CATEGORIES = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nfunction getCategories() {\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__[\"useQuery\"])(GET_CATEGORIES),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return {\n    loading: loading,\n    error: error,\n    data: data\n  };\n}\n\n//# sourceURL=webpack:///./src/graphql/queries/getCategories.js?");

/***/ }),

/***/ "./src/graphql/queries/getPhotos.js":
/*!******************************************!*\
  !*** ./src/graphql/queries/getPhotos.js ***!
  \******************************************/
/*! exports provided: getPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPhotos\", function() { return getPhotos; });\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getPhotos($categoryId: ID) {\\n    photos(categoryId: $categoryId) {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n      liked\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_PHOTOS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nfunction getPhotos(categoryId) {\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__[\"useQuery\"])(GET_PHOTOS, {\n    variables: {\n      categoryId: categoryId\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return {\n    loading: loading,\n    error: error,\n    data: data\n  };\n}\n\n//# sourceURL=webpack:///./src/graphql/queries/getPhotos.js?");

/***/ }),

/***/ "./src/layout/Categories.jsx":
/*!***********************************!*\
  !*** ./src/layout/Categories.jsx ***!
  \***********************************/
/*! exports provided: Categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Categories\", function() { return Categories; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_queries_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries/getCategories */ \"./src/graphql/queries/getCategories.js\");\n/* harmony import */ var _components_ListOfCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListOfCategories */ \"./src/components/ListOfCategories/index.jsx\");\n/* harmony import */ var _components_shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/LoadingSpinner */ \"./src/components/shared/LoadingSpinner/index.jsx\");\n\n\n\n\nvar Categories = function Categories() {\n  var _getCategories = Object(_graphql_queries_getCategories__WEBPACK_IMPORTED_MODULE_1__[\"getCategories\"])(),\n      loading = _getCategories.loading,\n      error = _getCategories.error,\n      data = _getCategories.data;\n\n  var _data$categories = data.categories,\n      categories = _data$categories === void 0 ? {} : _data$categories;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__[\"LoadingSpinner\"], null);\n  if (error) return \"Error! \".concat(error);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListOfCategories__WEBPACK_IMPORTED_MODULE_2__[\"ListOfCategories\"], {\n    categories: categories\n  });\n};\n\n//# sourceURL=webpack:///./src/layout/Categories.jsx?");

/***/ }),

/***/ "./src/layout/PhotoCards.jsx":
/*!***********************************!*\
  !*** ./src/layout/PhotoCards.jsx ***!
  \***********************************/
/*! exports provided: PhotoCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoCards\", function() { return PhotoCards; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_queries_getPhotos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries/getPhotos */ \"./src/graphql/queries/getPhotos.js\");\n/* harmony import */ var _components_ListOfPhotoCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListOfPhotoCards */ \"./src/components/ListOfPhotoCards/index.jsx\");\n/* harmony import */ var _components_shared_LoadingDots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/LoadingDots */ \"./src/components/shared/LoadingDots/index.jsx\");\n\n\n\n\nvar PhotoCards = function PhotoCards(_ref) {\n  var categoryId = _ref.categoryId;\n\n  var _getPhotos = Object(_graphql_queries_getPhotos__WEBPACK_IMPORTED_MODULE_1__[\"getPhotos\"])(categoryId),\n      loading = _getPhotos.loading,\n      error = _getPhotos.error,\n      data = _getPhotos.data;\n\n  var _data$photos = data.photos,\n      photos = _data$photos === void 0 ? {} : _data$photos;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_LoadingDots__WEBPACK_IMPORTED_MODULE_3__[\"LoadingDots\"], null);\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Error! \", error);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListOfPhotoCards__WEBPACK_IMPORTED_MODULE_2__[\"ListOfPhotoCardsComponent\"], {\n    photos: photos\n  });\n};\n\n//# sourceURL=webpack:///./src/layout/PhotoCards.jsx?");

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/*! exports provided: HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Meta */ \"./src/Meta/index.jsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ \"./src/components/Logo/index.jsx\");\n/* harmony import */ var _layout_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Categories */ \"./src/layout/Categories.jsx\");\n/* harmony import */ var _layout_PhotoCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/PhotoCards */ \"./src/layout/PhotoCards.jsx\");\n\n\n\n\n\nvar HomePage = function HomePage(_ref) {\n  var categoryId = _ref.categoryId;\n  var meta = {\n    title: 'by aomine',\n    description: 'Con Petgram puedes econtrar todo ti tipo de animales domiesticos, So Cute :3'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"], meta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"Logo\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Categories__WEBPACK_IMPORTED_MODULE_3__[\"Categories\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_PhotoCards__WEBPACK_IMPORTED_MODULE_4__[\"PhotoCards\"], {\n    categoryId: categoryId\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HomePage, function (prevProps, props) {\n  return prevProps.categoryId === props.categoryId;\n}));\n\n//# sourceURL=webpack:///./src/pages/Home.jsx?");

/***/ })

}]);