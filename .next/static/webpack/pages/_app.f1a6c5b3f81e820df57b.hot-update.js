webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/sofiadarke/Dropbox/Hyper Island/09 individual project/Ray/ray-atelier-next/components/NavBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // export async function getStaticProps() {\n// \tconst client = createClient({\n// \t\tspace: process.env.CONTENFUL_SPACE_ID,\n// \t\taccessToken: process.env.CONTENFUL_ACCESS_KEY,\n// \t});\n// \tconst res = await client.getEntries({ content_type: \"portfolioProject\" });\n// \treturn {\n// \t\tprops: {\n// \t\t\tportfolioprojects: res.items,\n// \t\t},\n// \t};\n// }\n//usestate?\n//useeefect\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  var portfolioprojects = _ref.portfolioprojects;\n\n  // fetch(\"https://jsonplaceholder.typicode.com/users\")\n  // \t.then((response) => response.json())\n  // \t.then((data) => console.log(\"HEJ\"));\n  // return {\n  // \tdata,\n  // };\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      respons = _useState[0],\n      setRespons = _useState[1];\n\n  function fetchData() {\n    return _fetchData.apply(this, arguments);\n  } //need to use useeffect to call the function.\n\n\n  function _fetchData() {\n    _fetchData = Object(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var client, res;\n      return _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              client = Object(contentful__WEBPACK_IMPORTED_MODULE_5__[\"createClient\"])({\n                space: \"ei9d58ls2tpz\",\n                accessToken: \"GVLnkEonPLe9d5VLdehU3LgEyPz8Kr75gYxJYq4VJz8\"\n              });\n              _context.next = 3;\n              return client.getEntries({\n                content_type: \"portfolioProject\"\n              });\n\n            case 3:\n              res = _context.sent;\n              // console.log(res);\n              setRespons(res);\n              return _context.abrupt(\"return\", {\n                props: res // props: {\n                // \tportfolioprojects: res.items,\n                // },\n\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchData.apply(this, arguments);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchData();\n  }, []); // console.log(respons);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"nav-bar\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"project-list\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/projects\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          children: \"projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, _this), respons.map(function (res) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: res.items.fields.projectTitle\n        }, res.items.sys.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 6\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"project 1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"project 2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/about\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"about\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"Ray Atelier\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/clients\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"clients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/contact\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(NavBar, \"ZCwVUURiUi+DNKvgejtXrQmpP90=\");\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWIyNCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwb3J0Zm9saW9wcm9qZWN0cyIsInVzZVN0YXRlIiwicmVzcG9ucyIsInNldFJlc3BvbnMiLCJmZXRjaERhdGEiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJzcGFjZSIsImFjY2Vzc1Rva2VuIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsInJlcyIsInByb3BzIiwidXNlRWZmZWN0IiwibWFwIiwiaXRlbXMiLCJmaWVsZHMiLCJwcm9qZWN0VGl0bGUiLCJzeXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxpQkFBd0IsUUFBeEJBLGlCQUF3Qjs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTnlDLGtCQVFYQyxzREFBUSxDQUFDLEVBQUQsQ0FSRztBQUFBLE1BUWxDQyxPQVJrQztBQUFBLE1BUXpCQyxVQVJ5Qjs7QUFBQSxXQVUxQkMsU0FWMEI7QUFBQTtBQUFBLElBNkJ6Qzs7O0FBN0J5QztBQUFBLDhYQVV6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDT0Msb0JBRFAsR0FDZ0JDLCtEQUFZLENBQUM7QUFDM0JDLHFCQUFLLEVBQUUsY0FEb0I7QUFFM0JDLDJCQUFXLEVBQUU7QUFGYyxlQUFELENBRDVCO0FBQUE7QUFBQSxxQkFNbUJILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQjtBQUFFQyw0QkFBWSxFQUFFO0FBQWhCLGVBQWxCLENBTm5COztBQUFBO0FBTU9DLGlCQU5QO0FBT0M7QUFDQVIsd0JBQVUsQ0FBQ1EsR0FBRCxDQUFWO0FBUkQsK0NBVVE7QUFDTkMscUJBQUssRUFBRUQsR0FERCxDQUdOO0FBQ0E7QUFDQTs7QUFMTSxlQVZSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVnlDO0FBQUE7QUFBQTs7QUE4QnpDRSx5REFBUyxDQUFDLFlBQU07QUFDZlQsYUFBUztBQUNULEdBRlEsRUFFTixFQUZNLENBQVQsQ0E5QnlDLENBa0N6Qzs7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBRUM7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBQSwrQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQU9FRixPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDSCxHQUFEO0FBQUEsNEJBQ1o7QUFBQSxvQkFBNkJBLEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxNQUFWLENBQWlCQztBQUE5QyxXQUFVTixHQUFHLENBQUNJLEtBQUosQ0FBVUcsR0FBVixDQUFjQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBWixDQVBGLGVBZUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRCxlQWdCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQW9CQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJELGVBdUJDLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkQsZUEwQkMscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRCxlQTZCQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBOENBLENBbEZEOztHQUFNcEIsTTs7S0FBQUEsTTtBQW9GU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyBcdGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4vLyBcdFx0c3BhY2U6IHByb2Nlc3MuZW52LkNPTlRFTkZVTF9TUEFDRV9JRCxcbi8vIFx0XHRhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVORlVMX0FDQ0VTU19LRVksXG4vLyBcdH0pO1xuXG4vLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvcnRmb2xpb1Byb2plY3RcIiB9KTtcblxuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdHByb3BzOiB7XG4vLyBcdFx0XHRwb3J0Zm9saW9wcm9qZWN0czogcmVzLml0ZW1zLFxuLy8gXHRcdH0sXG4vLyBcdH07XG4vLyB9XG5cbi8vdXNlc3RhdGU/XG4vL3VzZWVlZmVjdFxuXG5jb25zdCBOYXZCYXIgPSAoeyBwb3J0Zm9saW9wcm9qZWN0cyB9KSA9PiB7XG5cdC8vIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpXG5cdC8vIFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdC8vIFx0LnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKFwiSEVKXCIpKTtcblx0Ly8gcmV0dXJuIHtcblx0Ly8gXHRkYXRhLFxuXHQvLyB9O1xuXG5cdGNvbnN0IFtyZXNwb25zLCBzZXRSZXNwb25zXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG5cdFx0Y29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcblx0XHRcdHNwYWNlOiBcImVpOWQ1OGxzMnRwelwiLFxuXHRcdFx0YWNjZXNzVG9rZW46IFwiR1ZMbmtFb25QTGU5ZDVWTGRlaFUzTGdFeVB6OEtyNzVnWXhKWXE0Vkp6OFwiLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicG9ydGZvbGlvUHJvamVjdFwiIH0pO1xuXHRcdC8vIGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0c2V0UmVzcG9ucyhyZXMpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOiByZXMsXG5cblx0XHRcdC8vIHByb3BzOiB7XG5cdFx0XHQvLyBcdHBvcnRmb2xpb3Byb2plY3RzOiByZXMuaXRlbXMsXG5cdFx0XHQvLyB9LFxuXHRcdH07XG5cdH1cblxuXHQvL25lZWQgdG8gdXNlIHVzZWVmZmVjdCB0byBjYWxsIHRoZSBmdW5jdGlvbi5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaERhdGEoKTtcblx0fSwgW10pO1xuXG5cdC8vIGNvbnNvbGUubG9nKHJlc3BvbnMpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuYXYtYmFyXCI+XG5cdFx0XHR7LyogPHA+e3Jlc3BvbnMuaXRlbXNbMF0uZmllbGRzLnByb2plY3RUaXRsZX08L3A+ICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3RcIj5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuXHRcdFx0XHRcdDxhPnByb2plY3RzPC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdHsvKiB7Y29uc29sZS5sb2cocmVzcG9ucy5pdGVtc1swXS5maWVsZHMucHJvamVjdFRpdGxlKX1cblx0XHRcdFx0e2NvbnNvbGUubG9nKHJlc3BvbnMuaXRlbXNbMF0uc3lzLmlkKX0gKi99XG5cblx0XHRcdFx0e3Jlc3BvbnMubWFwKChyZXMpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGtleT17cmVzLml0ZW1zLnN5cy5pZH0+e3Jlcy5pdGVtcy5maWVsZHMucHJvamVjdFRpdGxlfTwvZGl2PlxuXHRcdFx0XHQpKX1cblxuXHRcdFx0XHR7Lyoge3BvcnRmb2xpb3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9qZWN0Q2FyZCBrZXk9e3Byb2plY3Quc3lzLmlkfSBwb3J0Zm9saW9Qcm9qZWN0PXtwcm9qZWN0fSAvPlxuXHRcdFx0XHQpKX0gKi99XG5cblx0XHRcdFx0PGE+cHJvamVjdCAxPC9hPlxuXHRcdFx0XHQ8YT5wcm9qZWN0IDI8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cblx0XHRcdFx0PGE+YWJvdXQ8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHQ8YT5SYXkgQXRlbGllcjwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxMaW5rIGhyZWY9XCIvY2xpZW50c1wiPlxuXHRcdFx0XHQ8YT5jbGllbnRzPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG5cdFx0XHRcdDxhPmNvbnRhY3Q8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHR7LyogPGRpdj5cblx0XHRcdFx0e3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e1wiL3Byb2plY3RzL1wiICsgcHJvamVjdC5pZH0ga2V5PXtwcm9qZWN0LmlkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1ib3hcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e3Byb2plY3QubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj4gKi99XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})