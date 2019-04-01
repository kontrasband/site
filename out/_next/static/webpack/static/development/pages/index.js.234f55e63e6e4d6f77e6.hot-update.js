webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UpcomingEvents.jsx":
/*!***************************************!*\
  !*** ./components/UpcomingEvents.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpcomingEvents; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_upcoming_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/upcoming_events */ "./components/database/upcoming_events.js");

var _jsxFileName = "/Users/daniel/dev/kontras/components/UpcomingEvents.jsx";

 // import { importEvents } from "./database/upcoming_events";

function UpcomingEvents() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      events = _useState2[0],
      setEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setEvents(_database_upcoming_events__WEBPACK_IMPORTED_MODULE_2__["default"]);
    console.log("Events:");
    console.log(events);
    console.log("--");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, events.map(function (ev) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-md-4 ",
      key: ev.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "uppercase mb-0 font-weight-600",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Our Next Shows"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: ev.eventUrl,
      style: {
        color: "white"
      },
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "block-content front-p pt-3 pb-3 text-center bg-red mb-4 mb-lg-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: " p mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, ev.eventName, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), ev.location))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "block-content front-p mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "btn btn-primary uppercase with-ico border-2 w-100",
      href: ev.tickets.url ? ev.tickers.url : ev.eventUrl,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-ticket",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), ev.tickets.price + (!ev.tickets.url && " at the door"))));
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.234f55e63e6e4d6f77e6.hot-update.js.map