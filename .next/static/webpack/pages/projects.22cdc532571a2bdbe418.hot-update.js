webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _NavProjectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavProjectList */ \"./components/NavProjectList.js\");\n/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Hamburger */ \"./components/Hamburger.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/sofiadarke/Dropbox/Hyper Island/09 individual project/Ray/ray-atelier-next/components/NavBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n //need to add then to resvole promise.\n// console.log(res);\n// setRespons(res);\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  var oneproject = _ref.oneproject;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      hamburgerOpen = _useState[0],\n      setHamburgerOpen = _useState[1];\n\n  var toggleHamburger = function toggleHamburger() {\n    setHamburgerOpen(!hamburgerOpen);\n  }; //might use\n  // const [respons, setRespons] = useState(\"\");\n  // const { projectTitle } = respons.fields;\n  //need to use useeffect to call the function.\n  //might use?\n  // useEffect(() => {\n  // \tasync () => {\n  // \t\tconst res = fetchData();\n  // \t\tsetRespons(res);\n  // \t};\n  // }, []);\n  // const { y, x, scrollDirection } = useScroll();\n  // const styles = {\n  // \tactive: {\n  // \t\tvisibility: \"visible\",\n  // \t\ttransition: \"all 0.5s\",\n  // \t},\n  // \thidden: {\n  // \t\tvisibility: \"hidden\",\n  // \t\ttransition: \"all 0.5s\",\n  // \t\ttransform: \"translateY(-100%)\",\n  // \t},\n  // };\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n      className: \"nav-bar\" // style={scrollDirection === \"down\" ? styles.active : styles.hidden}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/projects\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: \"nav-bar-items\",\n          children: \"Work\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/about\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: \"nav-bar-items\",\n          children: \"Info\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: \"nav-bar-items\",\n          children: \"Ray Atelier\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/clients\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: \"nav-bar-items\",\n          children: \"Clients\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: \"nav-bar-items\",\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"hamburger-btn\",\n        onclick: toggleHamburger,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Hamburger__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false);\n};\n\n_s(NavBar, \"j26AgWLUolD5LE4WlVt0C8/tVXY=\");\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n{\n  /* <NavProjectList /> */\n}\n{\n  /* {console.log(respons.items[0].sys.id)} */\n}\n{\n  /* <div>\n  \t\t\t{projects.map((project) => (\n  \t\t\t\t<Link href={\"/projects/\" + project.id} key={project.id}>\n  \t\t\t\t\t<div className=\"project-box\">\n  \t\t\t\t\t\t<a>\n  \t\t\t\t\t\t\t<p>{project.name}</p>\n  \t\t\t\t\t\t</a>\n  \t\t\t\t\t</div>\n  \t\t\t\t</Link>\n  \t\t\t))}\n  \t\t</div> */\n}\n\nfunction fetchData() {\n  return _fetchData.apply(this, arguments);\n}\n\nfunction _fetchData() {\n  _fetchData = Object(_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var client, res;\n    return _Users_sofiadarke_Dropbox_Hyper_Island_09_individual_project_Ray_ray_atelier_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            client = Object(contentful__WEBPACK_IMPORTED_MODULE_5__[\"createClient\"])({\n              space: CONTENFUL_SPACE_ID,\n              accessToken: CONTENFUL_ACCESS_KEY\n            });\n            _context.next = 3;\n            return client.getEntries({\n              content_type: \"portfolioProject\"\n            });\n\n          case 3:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: res\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _fetchData.apply(this, arguments);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWIyNCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJvbmVwcm9qZWN0IiwidXNlU3RhdGUiLCJoYW1idXJnZXJPcGVuIiwic2V0SGFtYnVyZ2VyT3BlbiIsInRvZ2dsZUhhbWJ1cmdlciIsImZldGNoRGF0YSIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwiQ09OVEVORlVMX1NQQUNFX0lEIiwiYWNjZXNzVG9rZW4iLCJDT05URU5GVUxfQUNDRVNTX0tFWSIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJyZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQzNCQyxhQUQyQjtBQUFBLE1BQ1pDLGdCQURZOztBQUdsQyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDN0JELG9CQUFnQixDQUFDLENBQUNELGFBQUYsQ0FBaEI7QUFDQSxHQUZELENBSGtDLENBTWxDO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNDO0FBQUEsMkJBQ0M7QUFDQyxlQUFTLEVBQUMsU0FEWCxDQUVDO0FBRkQ7QUFBQSw4QkFJQyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkQsZUFRQyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkQsZUFXQyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQsZUFjQyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEQsZUFpQkMscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRCxlQW9CQztBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUErQixlQUFPLEVBQUVFLGVBQXhDO0FBQUEsK0JBQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUE0QkEsQ0EvREQ7O0dBQU1MLE07O0tBQUFBLE07QUFpRVNBLHFFQUFmO0FBRUE7QUFDQztBQUNBO0FBQ0Q7QUFDQztBQUNBO0FBRUQ7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7O1NBRWNNLFM7Ozs7OzRYQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxrQkFEUCxHQUNnQkMsK0RBQVksQ0FBQztBQUMzQkMsbUJBQUssRUFBRUMsa0JBRG9CO0FBRTNCQyx5QkFBVyxFQUFFQztBQUZjLGFBQUQsQ0FENUI7QUFBQTtBQUFBLG1CQU1tQkwsTUFBTSxDQUFDTSxVQUFQLENBQWtCO0FBQUVDLDBCQUFZLEVBQUU7QUFBaEIsYUFBbEIsQ0FObkI7O0FBQUE7QUFNT0MsZUFOUDtBQUFBLDZDQVFRO0FBQ05DLG1CQUFLLEVBQUVEO0FBREQsYUFSUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcImNvbnRlbnRmdWxcIjtcbmltcG9ydCBOYXZQcm9qZWN0TGlzdCBmcm9tIFwiLi9OYXZQcm9qZWN0TGlzdFwiO1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9IYW1idXJnZXJcIjtcblxuLy9uZWVkIHRvIGFkZCB0aGVuIHRvIHJlc3ZvbGUgcHJvbWlzZS5cblxuLy8gY29uc29sZS5sb2cocmVzKTtcbi8vIHNldFJlc3BvbnMocmVzKTtcblxuY29uc3QgTmF2QmFyID0gKHsgb25lcHJvamVjdCB9KSA9PiB7XG5cdGNvbnN0IFtoYW1idXJnZXJPcGVuLCBzZXRIYW1idXJnZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCB0b2dnbGVIYW1idXJnZXIgPSAoKSA9PiB7XG5cdFx0c2V0SGFtYnVyZ2VyT3BlbighaGFtYnVyZ2VyT3Blbik7XG5cdH07XG5cdC8vbWlnaHQgdXNlXG5cdC8vIGNvbnN0IFtyZXNwb25zLCBzZXRSZXNwb25zXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdC8vIGNvbnN0IHsgcHJvamVjdFRpdGxlIH0gPSByZXNwb25zLmZpZWxkcztcblxuXHQvL25lZWQgdG8gdXNlIHVzZWVmZmVjdCB0byBjYWxsIHRoZSBmdW5jdGlvbi5cblxuXHQvL21pZ2h0IHVzZT9cblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcblx0Ly8gXHRhc3luYyAoKSA9PiB7XG5cdC8vIFx0XHRjb25zdCByZXMgPSBmZXRjaERhdGEoKTtcblx0Ly8gXHRcdHNldFJlc3BvbnMocmVzKTtcblx0Ly8gXHR9O1xuXHQvLyB9LCBbXSk7XG5cblx0Ly8gY29uc3QgeyB5LCB4LCBzY3JvbGxEaXJlY3Rpb24gfSA9IHVzZVNjcm9sbCgpO1xuXG5cdC8vIGNvbnN0IHN0eWxlcyA9IHtcblx0Ly8gXHRhY3RpdmU6IHtcblx0Ly8gXHRcdHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxuXHQvLyBcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxuXHQvLyBcdH0sXG5cdC8vIFx0aGlkZGVuOiB7XG5cdC8vIFx0XHR2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuXHQvLyBcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxuXHQvLyBcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIsXG5cdC8vIFx0fSxcblx0Ly8gfTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bmF2XG5cdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1iYXJcIlxuXHRcdFx0XHQvLyBzdHlsZT17c2Nyb2xsRGlyZWN0aW9uID09PSBcImRvd25cIiA/IHN0eWxlcy5hY3RpdmUgOiBzdHlsZXMuaGlkZGVufVxuXHRcdFx0PlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWJhci1pdGVtc1wiPldvcms8L2E+XG5cdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWJhci1pdGVtc1wiPkluZm88L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtYmFyLWl0ZW1zXCI+UmF5IEF0ZWxpZXI8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9jbGllbnRzXCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWJhci1pdGVtc1wiPkNsaWVudHM8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWJhci1pdGVtc1wiPkNvbnRhY3Q8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItYnRuXCIgb25jbGljaz17dG9nZ2xlSGFtYnVyZ2VyfT5cblx0XHRcdFx0XHQ8SGFtYnVyZ2VyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cbntcblx0LyogPE5hdlByb2plY3RMaXN0IC8+ICovXG59XG57XG5cdC8qIHtjb25zb2xlLmxvZyhyZXNwb25zLml0ZW1zWzBdLnN5cy5pZCl9ICovXG59XG5cbntcblx0LyogPGRpdj5cblx0XHRcdFx0e3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e1wiL3Byb2plY3RzL1wiICsgcHJvamVjdC5pZH0ga2V5PXtwcm9qZWN0LmlkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1ib3hcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e3Byb2plY3QubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj4gKi9cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuXHRjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuXHRcdHNwYWNlOiBDT05URU5GVUxfU1BBQ0VfSUQsXG5cdFx0YWNjZXNzVG9rZW46IENPTlRFTkZVTF9BQ0NFU1NfS0VZLFxuXHR9KTtcblxuXHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJwb3J0Zm9saW9Qcm9qZWN0XCIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczogcmVzLFxuXHR9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ }),

/***/ "./components/UseScroll.js":
false

})