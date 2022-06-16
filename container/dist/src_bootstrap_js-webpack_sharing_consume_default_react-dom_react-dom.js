"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./api/data.js":
/*!*********************!*\
  !*** ./api/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [{\n  AccountName: \"Itexico\",\n  ActivityDate: \"2022-05-06T09:35:04\",\n  ActivityID: 0,\n  CategoryName: \"Available\",\n  Comments: \"string\",\n  EmployeeID: 0,\n  ProjectColor: \"blue\",\n  ProjectID: 0,\n  ProjectName: \"Delivery\",\n  StepID: 0,\n  Task: \"esto es un ticket\",\n  TypeID: 0,\n  value: 5,\n  activeInProject: false\n}, {\n  AccountName: \"Itexico\",\n  ActivityDate: \"2022-05-06T09:35:04\",\n  ActivityID: 0,\n  CategoryName: \"Available\",\n  Comments: \"string\",\n  EmployeeID: 0,\n  ProjectColor: \"blue\",\n  ProjectID: 0,\n  ProjectName: \"Delivery\",\n  StepID: 0,\n  Task: \"esto es un ticket\",\n  TypeID: 0,\n  value: 5,\n  activeInProject: false\n}, {\n  AccountName: \"Itexico\",\n  ActivityDate: \"2022-05-06T09:35:04\",\n  ActivityID: 0,\n  CategoryName: \"Available\",\n  Comments: \"string\",\n  EmployeeID: 0,\n  ProjectColor: \"blue\",\n  ProjectID: 0,\n  ProjectName: \"Delivery\",\n  StepID: 0,\n  Task: \"esto es un ticket\",\n  TypeID: 0,\n  value: 5,\n  activeInProject: false\n}, {\n  AccountName: \"Itexico\",\n  ActivityDate: \"2022-05-06T09:35:04\",\n  ActivityID: 0,\n  CategoryName: \"Available\",\n  Comments: \"string\",\n  EmployeeID: 0,\n  ProjectColor: \"blue\",\n  ProjectID: 0,\n  ProjectName: \"Delivery\",\n  StepID: 0,\n  Task: \"esto es un ticket\",\n  TypeID: 0,\n  value: 5,\n  activeInProject: false\n}, {\n  AccountName: \"Itexico\",\n  ActivityDate: \"2022-05-06T09:35:04\",\n  ActivityID: 0,\n  CategoryName: \"Available\",\n  Comments: \"string\",\n  EmployeeID: 0,\n  ProjectColor: \"blue\",\n  ProjectID: 0,\n  ProjectName: \"Delivery\",\n  StepID: 0,\n  Task: \"esto es un ticket\",\n  TypeID: 0,\n  value: 5,\n  activeInProject: false\n}];\n\n//# sourceURL=webpack://container/./api/data.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"webpack/container/remote/modal/modal\");\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(modal_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var header_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! header/Navigation */ \"webpack/container/remote/header/Navigation\");\n/* harmony import */ var header_Navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(header_Navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web_component_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web-component-load */ \"../node_modules/web-component-load/build/index.js\");\n/* harmony import */ var web_component_load__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web_component_load__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/data */ \"./api/data.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n // import srcData from '../api/mocks.json';\n\n\n\n\n\nfunction App() {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const calendar = ref.current;\n    calendar.currentDate = new Date();\n    calendar.srcData = _api_data__WEBPACK_IMPORTED_MODULE_4__.data;\n    (0,web_component_load__WEBPACK_IMPORTED_MODULE_3__.load)('http://localhost:5000');\n    console.log(calendar);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n    className: \"App\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((header_Navigation__WEBPACK_IMPORTED_MODULE_2___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((modal_modal__WEBPACK_IMPORTED_MODULE_1___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"calendar-component\", {\n      ref: ref\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"add-activity-button-component\", {})]\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://container/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst container = document.getElementById('root');\nconst root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);\nroot.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {\n  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {})\n}));\n\n//# sourceURL=webpack://container/./src/bootstrap.js?");

/***/ })

}]);