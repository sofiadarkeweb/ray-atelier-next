webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _NavProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavProjectList */ \"./components/NavProjectList.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/sofiadarke/Dropbox/Hyper Island/09 individual project/Ray/ray-atelier-next/components/NavBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction fetchData() {\n  return _fetchData.apply(this, arguments);\n}\n\nfunction _fetchData() {\n  _fetchData = Object(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n    var client, res;\n    return _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            client = Object(contentful__WEBPACK_IMPORTED_MODULE_5__[\"createClient\"])({\n              space: CONTENFUL_SPACE_ID,\n              accessToken: CONTENFUL_ACCESS_KEY\n            });\n            _context2.next = 3;\n            return client.getEntries({\n              content_type: \"portfolioProject\"\n            });\n\n          case 3:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              props: res // props: {\n              // \tportfolioprojects: res.items,\n              // },\n\n            });\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _fetchData.apply(this, arguments);\n}\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  var oneproject = _ref.oneproject;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      respons = _useState[0],\n      setRespons = _useState[1]; // const { projectTitle } = respons.fields;\n  //need to use useeffect to call the function.\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    /*#__PURE__*/\n    Object(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res;\n      return _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              res = fetchData();\n              setRespons(res);\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"nav-bar\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/projects\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"nav-bar-items\",\n        children: \"Work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/about\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"nav-bar-items\",\n        children: \"Info\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"nav-bar-items\",\n        children: \"Ray Atelier\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/clients\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"nav-bar-items\",\n        children: \"Clients\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/contact\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: \"nav-bar-items\",\n        children: \"Contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(NavBar, \"+iI9+Yk8L6zOXFi11prdSO9FwaM=\");\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n{\n  /* <NavProjectList /> */\n}\n{\n  /* {console.log(respons.items[0].sys.id)} */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWIyNCJdLCJuYW1lcyI6WyJmZXRjaERhdGEiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJzcGFjZSIsIkNPTlRFTkZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiQ09OVEVORlVMX0FDQ0VTU19LRVkiLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwicmVzIiwicHJvcHMiLCJOYXZCYXIiLCJvbmVwcm9qZWN0IiwidXNlU3RhdGUiLCJyZXNwb25zIiwic2V0UmVzcG9ucyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O1NBRWVBLFM7Ozs7OzRYQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxrQkFEUCxHQUNnQkMsK0RBQVksQ0FBQztBQUMzQkMsbUJBQUssRUFBRUMsa0JBRG9CO0FBRTNCQyx5QkFBVyxFQUFFQztBQUZjLGFBQUQsQ0FENUI7QUFBQTtBQUFBLG1CQU1tQkwsTUFBTSxDQUFDTSxVQUFQLENBQWtCO0FBQUVDLDBCQUFZLEVBQUU7QUFBaEIsYUFBbEIsQ0FObkI7O0FBQUE7QUFNT0MsZUFOUDtBQUFBLDhDQVFRO0FBQ05DLG1CQUFLLEVBQUVELEdBREQsQ0FHTjtBQUNBO0FBQ0E7O0FBTE0sYUFSUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBc0JBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUMzQkMsT0FEMkI7QUFBQSxNQUNsQkMsVUFEa0IsaUJBRWxDO0FBRUE7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPUCxpQkFEUCxHQUNhVCxTQUFTLEVBRHRCO0FBRUNlLHdCQUFVLENBQUNOLEdBQUQsQ0FBVjs7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsV0FBWDtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBS0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxELGVBUUMscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJELGVBV0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhELGVBY0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBK0JBLENBM0NEOztHQUFNRSxNOztLQUFBQSxNO0FBNkNTQSxxRUFBZjtBQUVBO0FBQ0M7QUFDQTtBQUNEO0FBQ0M7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2QmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCI7XG5pbXBvcnQgTmF2UHJvamVjdExpc3QgZnJvbSBcIi4vTmF2UHJvamVjdExpc3RcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuXHRjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuXHRcdHNwYWNlOiBDT05URU5GVUxfU1BBQ0VfSUQsXG5cdFx0YWNjZXNzVG9rZW46IENPTlRFTkZVTF9BQ0NFU1NfS0VZLFxuXHR9KTtcblxuXHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJwb3J0Zm9saW9Qcm9qZWN0XCIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczogcmVzLFxuXG5cdFx0Ly8gcHJvcHM6IHtcblx0XHQvLyBcdHBvcnRmb2xpb3Byb2plY3RzOiByZXMuaXRlbXMsXG5cdFx0Ly8gfSxcblx0fTtcblxuXHQvL25lZWQgdG8gYWRkIHRoZW4gdG8gcmVzdm9sZSBwcm9taXNlLlxuXG5cdC8vIGNvbnNvbGUubG9nKHJlcyk7XG5cdC8vIHNldFJlc3BvbnMocmVzKTtcbn1cblxuY29uc3QgTmF2QmFyID0gKHsgb25lcHJvamVjdCB9KSA9PiB7XG5cdGNvbnN0IFtyZXNwb25zLCBzZXRSZXNwb25zXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHQvLyBjb25zdCB7IHByb2plY3RUaXRsZSB9ID0gcmVzcG9ucy5maWVsZHM7XG5cblx0Ly9uZWVkIHRvIHVzZSB1c2VlZmZlY3QgdG8gY2FsbCB0aGUgZnVuY3Rpb24uXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzID0gZmV0Y2hEYXRhKCk7XG5cdFx0XHRzZXRSZXNwb25zKHJlcyk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJuYXYtYmFyXCI+XG5cdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1iYXItaXRlbXNcIj5Xb3JrPC9hPlxuXHRcdFx0PC9MaW5rPlxuXG5cdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1iYXItaXRlbXNcIj5JbmZvPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWJhci1pdGVtc1wiPlJheSBBdGVsaWVyPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9jbGllbnRzXCI+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1iYXItaXRlbXNcIj5DbGllbnRzPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1iYXItaXRlbXNcIj5Db250YWN0PC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0ey8qIDxkaXY+XG5cdFx0XHRcdHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcblx0XHRcdFx0XHQ8TGluayBocmVmPXtcIi9wcm9qZWN0cy9cIiArIHByb2plY3QuaWR9IGtleT17cHJvamVjdC5pZH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtYm94XCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxwPntwcm9qZWN0Lm5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuXG57XG5cdC8qIDxOYXZQcm9qZWN0TGlzdCAvPiAqL1xufVxue1xuXHQvKiB7Y29uc29sZS5sb2cocmVzcG9ucy5pdGVtc1swXS5zeXMuaWQpfSAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})