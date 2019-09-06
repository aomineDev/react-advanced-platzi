(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/graphql/queries/getSinglePhoto.js":
/*!***********************************************!*\
  !*** ./src/graphql/queries/getSinglePhoto.js ***!
  \***********************************************/
/*! exports provided: getSinglePhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSinglePhoto\", function() { return getSinglePhoto; });\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getSinglePhoto($id: ID!) {\\n    photo(id: $id) {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n      liked\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_SINGLE_PHOTO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nfunction getSinglePhoto(id) {\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__[\"useQuery\"])(GET_SINGLE_PHOTO, {\n    variables: {\n      id: id\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return {\n    loading: loading,\n    error: error,\n    data: data\n  };\n}\n\n//# sourceURL=webpack:///./src/graphql/queries/getSinglePhoto.js?");

/***/ }),

/***/ "./src/layout/PhotoCardDetail.jsx":
/*!****************************************!*\
  !*** ./src/layout/PhotoCardDetail.jsx ***!
  \****************************************/
/*! exports provided: PhotoCardDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoCardDetail\", function() { return PhotoCardDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_queries_getSinglePhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries/getSinglePhoto */ \"./src/graphql/queries/getSinglePhoto.js\");\n/* harmony import */ var _components_shared_LoadingDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/LoadingDots */ \"./src/components/shared/LoadingDots/index.jsx\");\n/* harmony import */ var _components_PhotoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PhotoCard */ \"./src/components/PhotoCard/index.jsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container/index.jsx\");\n\n\n\n\n\nvar PhotoCardDetail = function PhotoCardDetail(_ref) {\n  var id = _ref.id;\n\n  var _getSinglePhoto = Object(_graphql_queries_getSinglePhoto__WEBPACK_IMPORTED_MODULE_1__[\"getSinglePhoto\"])(id),\n      loading = _getSinglePhoto.loading,\n      error = _getSinglePhoto.error,\n      data = _getSinglePhoto.data;\n\n  var _data$photo = data.photo,\n      photo = _data$photo === void 0 ? {} : _data$photo;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_LoadingDots__WEBPACK_IMPORTED_MODULE_2__[\"LoadingDots\"], null);\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Error! \", error);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoCard__WEBPACK_IMPORTED_MODULE_3__[\"PhotoCard\"], photo));\n};\n\n//# sourceURL=webpack:///./src/layout/PhotoCardDetail.jsx?");

/***/ }),

/***/ "./src/pages/Detail.jsx":
/*!******************************!*\
  !*** ./src/pages/Detail.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Meta */ \"./src/Meta/index.jsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ \"./src/components/Logo/index.jsx\");\n/* harmony import */ var _layout_PhotoCardDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/PhotoCardDetail */ \"./src/layout/PhotoCardDetail.jsx\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var detailId = _ref.detailId;\n  var meta = {\n    title: 'Detalle de la foto',\n    description: 'Aqui puedes encontrar el detalle de la foto'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"], meta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"Logo\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_PhotoCardDetail__WEBPACK_IMPORTED_MODULE_3__[\"PhotoCardDetail\"], {\n    id: detailId\n  }));\n});\n\n//# sourceURL=webpack:///./src/pages/Detail.jsx?");

/***/ })

}]);