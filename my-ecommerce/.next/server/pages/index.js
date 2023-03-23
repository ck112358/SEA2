"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(118);
;// CONCATENATED MODULE: ./components/ContactForm.js


const ContactForm = ()=>{
    // Handle form submission here
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "name",
                children: "Name:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                id: "name"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "email",
                children: "Email:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "email",
                id: "email"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "message",
                children: "Message:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                id: "message",
                rows: "4",
                cols: "50"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Send Message"
            })
        ]
    });
};
/* harmony default export */ const components_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./pages/index.js




const HomePage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Welcome to Stockholm Employee Association"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Discover the best products at amazing prices"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ContactForm, {})
        ]
    });
};
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [118], () => (__webpack_exec__(304)));
module.exports = __webpack_exports__;

})();