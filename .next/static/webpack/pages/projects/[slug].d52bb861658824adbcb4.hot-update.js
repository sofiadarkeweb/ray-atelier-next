webpackHotUpdate_N_E("pages/projects/[slug]",{

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectDetails; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/sofiadarke/Dropbox/Hyper Island/09 individual project/Ray/ray-atelier-next/pages/projects/[slug].js\";\n\n// how to output several images in different formats?\nvar __N_SSG = true;\nfunction ProjectDetails(_ref) {\n  var portfolioProject = _ref.portfolioProject;\n  var _portfolioProject$fie = portfolioProject.fields,\n      projectTitle = _portfolioProject$fie.projectTitle,\n      description = _portfolioProject$fie.description,\n      year = _portfolioProject$fie.year,\n      featuredImage = _portfolioProject$fie.featuredImage,\n      projectImages = _portfolioProject$fie.projectImages;\n  console.log(portfolioProject);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"project-page\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"feat-img\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        src: \"https:\" + featuredImage.fields.file.url,\n        width: featuredImage.fields.file.details.image.width,\n        height: featuredImage.fields.file.details.image.height,\n        objectFit: \"contain\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: projectTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: year\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, this);\n}\n_c = ProjectDetails;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzPzgxMmUiXSwibmFtZXMiOlsiUHJvamVjdERldGFpbHMiLCJwb3J0Zm9saW9Qcm9qZWN0IiwiZmllbGRzIiwicHJvamVjdFRpdGxlIiwiZGVzY3JpcHRpb24iLCJ5ZWFyIiwiZmVhdHVyZWRJbWFnZSIsInByb2plY3RJbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsInVybCIsImRldGFpbHMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQXFDQTs7QUFDZSxTQUFTQSxjQUFULE9BQThDO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBQUEsOEJBRTNEQSxnQkFBZ0IsQ0FBQ0MsTUFGMEM7QUFBQSxNQUNwREMsWUFEb0QseUJBQ3BEQSxZQURvRDtBQUFBLE1BQ3RDQyxXQURzQyx5QkFDdENBLFdBRHNDO0FBQUEsTUFDekJDLElBRHlCLHlCQUN6QkEsSUFEeUI7QUFBQSxNQUNuQkMsYUFEbUIseUJBQ25CQSxhQURtQjtBQUFBLE1BQ0pDLGFBREkseUJBQ0pBLGFBREk7QUFHNURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixnQkFBWjtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsNkJBQ0MscUVBQUMsaURBQUQ7QUFDQyxXQUFHLEVBQUUsV0FBV0ssYUFBYSxDQUFDSixNQUFkLENBQXFCUSxJQUFyQixDQUEwQkMsR0FEM0M7QUFFQyxhQUFLLEVBQUVMLGFBQWEsQ0FBQ0osTUFBZCxDQUFxQlEsSUFBckIsQ0FBMEJFLE9BQTFCLENBQWtDQyxLQUFsQyxDQUF3Q0MsS0FGaEQ7QUFHQyxjQUFNLEVBQUVSLGFBQWEsQ0FBQ0osTUFBZCxDQUFxQlEsSUFBckIsQ0FBMEJFLE9BQTFCLENBQWtDQyxLQUFsQyxDQUF3Q0UsTUFIakQ7QUFJQyxpQkFBUyxFQUFDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVNDO0FBQUEsZ0JBQUtaO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBVUM7QUFBQSxnQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkQsZUFXQztBQUFBLGdCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdCQTtLQTdCdUJKLGMiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG5cdHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5GVUxfU1BBQ0VfSUQsXG5cdGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5GVUxfQUNDRVNTX0tFWSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcblx0XHRjb250ZW50X3R5cGU6IFwicG9ydGZvbGlvUHJvamVjdFwiLFxuXHR9KTtcblx0Y29uc3QgcGF0aHMgPSByZXMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG5cdFx0Ly93aHkgaXRlbXM/XG5cdFx0cmV0dXJuIHtcblx0XHRcdHBhcmFtczogeyBzbHVnOiBpdGVtLmZpZWxkcy5zbHVnIH0sXG5cdFx0fTtcblx0fSk7XG5cblx0Ly8gcGF0aHM6IHBhdGhzIGNhbiBiZSBzaG9ydGVuZWQgdG8ganVzdCBwYXRoLCBiZWNhdXNlIGl0cyB0aGUgc2FtZVxuXHRyZXR1cm4ge1xuXHRcdHBhdGhzLFxuXHRcdGZhbGxiYWNrOiBmYWxzZSxcblx0fTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5cdGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcblx0XHQvL2ludGVhZCBvZiBhbGwgcmVzLCBnZXQgaXRlbXNcblx0XHRjb250ZW50X3R5cGU6IFwicG9ydGZvbGlvUHJvamVjdFwiLFxuXHRcdFwiZmllbGRzLnNsdWdcIjogcGFyYW1zLnNsdWcsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgcG9ydGZvbGlvUHJvamVjdDogaXRlbXNbMF0gfSxcblx0fTtcbn1cblxuLy8gaG93IHRvIG91dHB1dCBzZXZlcmFsIGltYWdlcyBpbiBkaWZmZXJlbnQgZm9ybWF0cz9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxzKHsgcG9ydGZvbGlvUHJvamVjdCB9KSB7XG5cdGNvbnN0IHsgcHJvamVjdFRpdGxlLCBkZXNjcmlwdGlvbiwgeWVhciwgZmVhdHVyZWRJbWFnZSwgcHJvamVjdEltYWdlcyB9ID1cblx0XHRwb3J0Zm9saW9Qcm9qZWN0LmZpZWxkcztcblx0Y29uc29sZS5sb2cocG9ydGZvbGlvUHJvamVjdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcGFnZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0LWltZ1wiPlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRzcmM9e1wiaHR0cHM6XCIgKyBmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLnVybH1cblx0XHRcdFx0XHR3aWR0aD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuXHRcdFx0XHRcdGhlaWdodD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cblx0XHRcdFx0XHRvYmplY3RGaXQ9XCJjb250YWluXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGgyPntwcm9qZWN0VGl0bGV9PC9oMj5cblx0XHRcdDxwPnt5ZWFyfTwvcD5cblx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XG5cblx0XHRcdHsvKiB7cHJvamVjdEltYWdlcy5tYXAoKGltZykgPT4gKFxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRrZXk9e2ltZ31cblx0XHRcdFx0XHRzcmM9e1wiaHR0cHM6XCIgKyBwcm9qZWN0SW1hZ2VzLmZpZWxkcy5maWxlLnVybH1cblx0XHRcdFx0XHR3aWR0aD17cHJvamVjdEltYWdlcy5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuXHRcdFx0XHRcdGhlaWdodD17cHJvamVjdEltYWdlcy5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cblx0XHRcdFx0Lz5cblx0XHRcdCkpfSAqL31cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

/***/ })

})