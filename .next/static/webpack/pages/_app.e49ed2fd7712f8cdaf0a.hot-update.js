webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/sofiadarke/Dropbox/Hyper Island/09 individual project/Ray/ray-atelier-next/components/NavBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // export async function getStaticProps() {\n// \tconst client = createClient({\n// \t\tspace: process.env.CONTENFUL_SPACE_ID,\n// \t\taccessToken: process.env.CONTENFUL_ACCESS_KEY,\n// \t});\n// \tconst res = await client.getEntries({ content_type: \"portfolioProject\" });\n// \treturn {\n// \t\tprops: {\n// \t\t\tportfolioprojects: res.items,\n// \t\t},\n// \t};\n// }\n//usestate?\n//useeefect\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  var portfolioprojects = _ref.portfolioprojects;\n\n  // fetch(\"https://jsonplaceholder.typicode.com/users\")\n  // \t.then((response) => response.json())\n  // \t.then((data) => console.log(\"HEJ\"));\n  // return {\n  // \tdata,\n  // };\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      respons = _useState[0],\n      setRespons = _useState[1];\n\n  function fetchData() {\n    return _fetchData.apply(this, arguments);\n  } //need to use useeffect to call the function.\n\n\n  function _fetchData() {\n    _fetchData = Object(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var client, res;\n      return _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              client = Object(contentful__WEBPACK_IMPORTED_MODULE_5__[\"createClient\"])({\n                space: process.env.CONTENFUL_SPACE_ID,\n                accessToken: process.env.CONTENFUL_ACCESS_KEY\n              });\n              _context.next = 3;\n              return client.getEntries({\n                content_type: \"portfolioProject\"\n              });\n\n            case 3:\n              res = _context.sent;\n              // console.log(res);\n              setRespons(res);\n              return _context.abrupt(\"return\", {\n                props: res // props: {\n                // \tportfolioprojects: res.items,\n                // },\n\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchData.apply(this, arguments);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchData();\n  }, []); // console.log(respons);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"nav-bar\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"project-list\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/projects\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          children: \"projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"project-list-items\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/projects\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: \"item 1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 5\n      }, _this), console.log(respons),\n      /* is it not an array?*/\n      respons && !!respons.length && respons.map(function (res) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: res.items.fields.projectTitle\n        }, res.items.sys.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 8\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/about\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"about\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"Ray Atelier\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/clients\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"clients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/contact\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(NavBar, \"+iI9+Yk8L6zOXFi11prdSO9FwaM=\");\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWIyNCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwb3J0Zm9saW9wcm9qZWN0cyIsInVzZVN0YXRlIiwicmVzcG9ucyIsInNldFJlc3BvbnMiLCJmZXRjaERhdGEiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJzcGFjZSIsInByb2Nlc3MiLCJlbnYiLCJDT05URU5GVUxfU1BBQ0VfSUQiLCJhY2Nlc3NUb2tlbiIsIkNPTlRFTkZVTF9BQ0NFU1NfS0VZIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsInJlcyIsInByb3BzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsIml0ZW1zIiwiZmllbGRzIiwicHJvamVjdFRpdGxlIiwic3lzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsaUJBQXdCLFFBQXhCQSxpQkFBd0I7O0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU55QyxrQkFRWEMsc0RBQVEsQ0FBQyxFQUFELENBUkc7QUFBQSxNQVFsQ0MsT0FSa0M7QUFBQSxNQVF6QkMsVUFSeUI7O0FBQUEsV0FVMUJDLFNBVjBCO0FBQUE7QUFBQSxJQTZCekM7OztBQTdCeUM7QUFBQSw4WEFVekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ09DLG9CQURQLEdBQ2dCQywrREFBWSxDQUFDO0FBQzNCQyxxQkFBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBRFE7QUFFM0JDLDJCQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZFLGVBQUQsQ0FENUI7QUFBQTtBQUFBLHFCQU1tQlAsTUFBTSxDQUFDUSxVQUFQLENBQWtCO0FBQUVDLDRCQUFZLEVBQUU7QUFBaEIsZUFBbEIsQ0FObkI7O0FBQUE7QUFNT0MsaUJBTlA7QUFPQztBQUNBWix3QkFBVSxDQUFDWSxHQUFELENBQVY7QUFSRCwrQ0FVUTtBQUNOQyxxQkFBSyxFQUFFRCxHQURELENBR047QUFDQTtBQUNBOztBQUxNLGVBVlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FWeUM7QUFBQTtBQUFBOztBQThCekNFLHlEQUFTLENBQUMsWUFBTTtBQUNmYixhQUFTO0FBQ1QsR0FGUSxFQUVOLEVBRk0sQ0FBVCxDQTlCeUMsQ0FrQ3pDOztBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSw0QkFFQztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBSUM7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsK0JBSUMscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUFBLGlDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRCxFQWFFYyxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE9BQVosQ0FiRjtBQWtCRTtBQUF5QkEsYUFBTyxJQUMvQixDQUFDLENBQUNBLE9BQU8sQ0FBQ2tCLE1BRGMsSUFFeEJsQixPQUFPLENBQUNtQixHQUFSLENBQVksVUFBQ04sR0FBRDtBQUFBLDRCQUNYO0FBQUEsb0JBQTZCQSxHQUFHLENBQUNPLEtBQUosQ0FBVUMsTUFBVixDQUFpQkM7QUFBOUMsV0FBVVQsR0FBRyxDQUFDTyxLQUFKLENBQVVHLEdBQVYsQ0FBY0MsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVosQ0FwQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUErQkMscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CRCxlQWtDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENELGVBcUNDLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0QsZUF3Q0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXlEQSxDQTdGRDs7R0FBTTNCLE07O0tBQUFBLE07QUErRlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcImNvbnRlbnRmdWxcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gXHRjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuLy8gXHRcdHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5GVUxfU1BBQ0VfSUQsXG4vLyBcdFx0YWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTkZVTF9BQ0NFU1NfS0VZLFxuLy8gXHR9KTtcblxuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJwb3J0Zm9saW9Qcm9qZWN0XCIgfSk7XG5cbi8vIFx0cmV0dXJuIHtcbi8vIFx0XHRwcm9wczoge1xuLy8gXHRcdFx0cG9ydGZvbGlvcHJvamVjdHM6IHJlcy5pdGVtcyxcbi8vIFx0XHR9LFxuLy8gXHR9O1xuLy8gfVxuXG4vL3VzZXN0YXRlP1xuLy91c2VlZWZlY3RcblxuY29uc3QgTmF2QmFyID0gKHsgcG9ydGZvbGlvcHJvamVjdHMgfSkgPT4ge1xuXHQvLyBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKVxuXHQvLyBcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHQvLyBcdC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhcIkhFSlwiKSk7XG5cdC8vIHJldHVybiB7XG5cdC8vIFx0ZGF0YSxcblx0Ly8gfTtcblxuXHRjb25zdCBbcmVzcG9ucywgc2V0UmVzcG9uc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG5cdFx0Y29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcblx0XHRcdHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5GVUxfU1BBQ0VfSUQsXG5cdFx0XHRhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVORlVMX0FDQ0VTU19LRVksXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJwb3J0Zm9saW9Qcm9qZWN0XCIgfSk7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcblx0XHRzZXRSZXNwb25zKHJlcyk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvcHM6IHJlcyxcblxuXHRcdFx0Ly8gcHJvcHM6IHtcblx0XHRcdC8vIFx0cG9ydGZvbGlvcHJvamVjdHM6IHJlcy5pdGVtcyxcblx0XHRcdC8vIH0sXG5cdFx0fTtcblx0fVxuXG5cdC8vbmVlZCB0byB1c2UgdXNlZWZmZWN0IHRvIGNhbGwgdGhlIGZ1bmN0aW9uLlxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoRGF0YSgpO1xuXHR9LCBbXSk7XG5cblx0Ly8gY29uc29sZS5sb2cocmVzcG9ucyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXJcIj5cblx0XHRcdHsvKiA8cD57cmVzcG9ucy5pdGVtc1swXS5maWVsZHMucHJvamVjdFRpdGxlfTwvcD4gKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtbGlzdFwiPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG5cdFx0XHRcdFx0PGE+cHJvamVjdHM8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3QtaXRlbXNcIj5cblx0XHRcdFx0XHR7LyogPExpbmsgaHJlZj17XCIvcHJvamVjdHMvXCIgKyByZXNwb25zLml0ZW1zWzFdLmZpZWxkcy5zbHVnfT5cblx0XHRcdFx0XHRcdDxhPntyZXNwb25zLml0ZW1zWzFdLmZpZWxkcy5wcm9qZWN0VGl0bGV9PC9hPlxuXHRcdFx0XHRcdDwvTGluaz4gKi99XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuXHRcdFx0XHRcdFx0PGE+aXRlbSAxPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2NvbnNvbGUubG9nKHJlc3BvbnMpfVxuXHRcdFx0XHR7Lyoge2NvbnNvbGUubG9nKHJlc3BvbnMuaXRlbXNbMF0uc3lzLmlkKX0gKi99XG5cdFx0XHRcdHsvKiB7Y29uc29sZS5sb2cocmVzcG9ucyl9ICovfVxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvKiBpcyBpdCBub3QgYW4gYXJyYXk/Ki8gcmVzcG9ucyAmJlxuXHRcdFx0XHRcdFx0ISFyZXNwb25zLmxlbmd0aCAmJlxuXHRcdFx0XHRcdFx0cmVzcG9ucy5tYXAoKHJlcykgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17cmVzLml0ZW1zLnN5cy5pZH0+e3Jlcy5pdGVtcy5maWVsZHMucHJvamVjdFRpdGxlfTwvZGl2PlxuXHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHsvKiB7cG9ydGZvbGlvcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG5cdFx0XHRcdFx0PFByb2plY3RDYXJkIGtleT17cHJvamVjdC5zeXMuaWR9IHBvcnRmb2xpb1Byb2plY3Q9e3Byb2plY3R9IC8+XG5cdFx0XHRcdCkpfSAqL31cblx0XHRcdDwvZGl2PlxuXHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxuXHRcdFx0XHQ8YT5hYm91dDwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdDxhPlJheSBBdGVsaWVyPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9jbGllbnRzXCI+XG5cdFx0XHRcdDxhPmNsaWVudHM8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHRcdFx0PGE+Y29udGFjdDwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdHsvKiA8ZGl2PlxuXHRcdFx0XHR7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17XCIvcHJvamVjdHMvXCIgKyBwcm9qZWN0LmlkfSBrZXk9e3Byb2plY3QuaWR9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWJveFwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8cD57cHJvamVjdC5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PiAqL31cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})