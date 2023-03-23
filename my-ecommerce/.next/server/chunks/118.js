"use strict";
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Navbar.js


const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "nav-bar",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "logo",
                        src: "/assets/img/logo.png",
                        alt: "Logo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "title",
                    children: "Stockholm Employee Association"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/cart",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "cart-icon",
                        src: "/assets/img/taco_truck.jpg",
                        alt: "Shopping Cart"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "footer-nav",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/contact",
                children: "Contact Us"
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;