webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n\\tbackground: white;\\n\\tmargin: 0 auto;\\n\\t/* font-family: \\\"Roboto\\\"; */\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n\\t/* width: 100vw;\\n\\theight: 100%; */\\n}\\n\\nhtml {\\n\\t/* height: 100%; */\\n}\\n\\nheader {\\n\\t/* border: 4px red solid; */\\n\\twidth: 100vw;\\n\\tbackground-color: yellow;\\n\\tz-index: 3000;\\n\\t/* margin: 1em; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\t/* display: flex; */\\n\\t/* flex-direction: column; */\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\tmargin: 1em;\\n\\t/* margin-right: 2em; */\\n\\t/* padding: 1rem; */\\n\\t/* padding-left: 10%;\\n\\tpadding-right: 10%; */\\n\\tz-index: 1000;\\n\\twidth: 100%;\\n\\t-moz-box-pack: justify;\\n\\t     justify-content: space-between;\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t/* position: relative; */\\n\\tbackground-color: white;\\n}\\n\\n.nav-bar-items {\\n\\tborder: 1px red solid;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\t-moz-box-orient: horizontal;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n}\\n\\n.project-page {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t-moz-box-align: center;\\n\\t     align-items: center;\\n\\t-moz-box-orient: vertical;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: column;\\n\\talign-items: center;\\n\\t-moz-box-pack: center;\\n\\t     justify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\t/* height: 45vh; */\\n\\tbackground-position: center center;\\n\\t-webkit-object-fit: cover;\\n\\t        object-fit: cover;\\n\\toverflow: hidden;\\n\\t-webkit-object-position: center;\\n\\t        object-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\tpadding-left: 15%;\\n\\tpadding-right: 15%;\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid { /* Not needed if autoprefixing */ /* Not needed if autoprefixing */\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAGA;CACC,iBAAiB;CACjB,cAAc;CACd,2BAA2B;CAC3B,wCAAwC;CACxC,eAAe;CACf;gBACe;AAChB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;CAC3B,YAAY;CACZ,wBAAwB;CACxB,aAAa;CACb,iBAAiB;AAClB;;AAEA,mBAAmB;;AAEnB;CACC,iBAAiB;CACjB,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;CACC,oBAAoB;CACpB,eAAe;CACf,WAAW;CACX,uBAAuB;CACvB,mBAAmB;CACnB;sBACqB;CACrB,aAAa;CACb,WAAW;CACX,sBAA8B;MAA9B,8BAA8B;CAC9B,iBAAa;CAAb,aAAa;CACb,wBAAwB;CACxB,uBAAuB;AACxB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;CACrB,YAAY;CACZ,2BAAmB;CAAnB,0BAAmB;MAAnB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,wBAAwB;AACzB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;;;GAGG;;AAEH;;;;;GAKG;;AAEH;;GAEG;;AAEH;;;;;GAKG;;AAEH;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,iBAAiB;CACjB,mBAAmB;CACnB,wBAAwB;CACxB,2BAA2B;CAC3B;;;;eAIc;AACf;;AAEA;CACC;;;;;;;;aAQY;;CAEZ;;;;;;;sBAOqB;AACtB;;AAEA;CACC,4BAA4B;CAC5B,oBAAoB;CACpB,aAAa;CACb,kBAAkB;CAClB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,iBAAa;CAAb,aAAa;CACb,sBAAmB;MAAnB,mBAAmB;CACnB,yBAAsB;CAAtB,0BAAsB;MAAtB,sBAAsB;CACtB,mBAAmB;CACnB,qBAAuB;MAAvB,uBAAuB;CACvB,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,kCAAkC;CAClC,yBAAiB;SAAjB,iBAAiB;CACjB,gBAAgB;CAChB,+BAAuB;SAAvB,uBAAuB;AACxB;;AAEA,4BAA4B;AAC5B;;;;;;;GAOG;;AAEH;CACC,gBAAgB;CAChB,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;AACtB;;AAEA,mBACuB,gCAAgC,EAChC,gCAAgC;CACtD,iBAAa;CAAb,aAAa;CACb,yBAAyB;CACzB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,wBAAwB;CACxB,kCAAkC;AACnC;;AAEA;CACC,yBAAyB;CACzB,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,iBAAa;CAAb,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;CACnB,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC;;IAEG;;CAEH;EACC,gBAAgB;EAChB;uBACqB;CACtB;;CAEA;EACC,kBAAkB;CACnB;AACD;;AAEA;CACC;;IAEG;;CAEH;EACC,mBAAmB;EACnB,kBAAkB;CACnB;;CAEA;EACC,gBAAgB;EAChB,kBAAkB;CACnB;AACD\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap\\\");\\n\\nbody {\\n\\tbackground: white;\\n\\tmargin: 0 auto;\\n\\t/* font-family: \\\"Roboto\\\"; */\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n\\t/* width: 100vw;\\n\\theight: 100%; */\\n}\\n\\nhtml {\\n\\t/* height: 100%; */\\n}\\n\\nheader {\\n\\t/* border: 4px red solid; */\\n\\twidth: 100vw;\\n\\tbackground-color: yellow;\\n\\tz-index: 3000;\\n\\t/* margin: 1em; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\t/* display: flex; */\\n\\t/* flex-direction: column; */\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\tmargin: 1em;\\n\\t/* margin-right: 2em; */\\n\\t/* padding: 1rem; */\\n\\t/* padding-left: 10%;\\n\\tpadding-right: 10%; */\\n\\tz-index: 1000;\\n\\twidth: 100%;\\n\\tjustify-content: space-between;\\n\\tdisplay: flex;\\n\\t/* position: relative; */\\n\\tbackground-color: white;\\n}\\n\\n.nav-bar-items {\\n\\tborder: 1px red solid;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\tflex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n}\\n\\n.project-page {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\t/* height: 45vh; */\\n\\tbackground-position: center center;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n\\tobject-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\tpadding-left: 15%;\\n\\tpadding-right: 15%;\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid {\\n\\tdisplay: -webkit-box; /* Not needed if autoprefixing */\\n\\tdisplay: -ms-flexbox; /* Not needed if autoprefixing */\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RCw4QkFBOEIsUUFBUywrRUFBK0UsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE0sOEJBQThCLFFBQVMsa0dBQWtHO0FBQ3pJO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyxzQkFBc0IsbUJBQW1CLCtCQUErQixrREFBa0Qsb0JBQW9CLG9CQUFvQixpQkFBaUIsTUFBTSxVQUFVLG9CQUFvQixNQUFNLFlBQVksNkJBQTZCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLG1CQUFtQixNQUFNLHFDQUFxQyxzQkFBc0IscUJBQXFCLGlDQUFpQyxNQUFNLGNBQWMsc0JBQXNCLHVCQUF1QixnQkFBZ0IseUJBQXlCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHFCQUFxQixnQkFBZ0IsMkJBQTJCLHdDQUF3QyxzQkFBc0Isa0JBQWtCLDBCQUEwQiwrQkFBK0IsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsT0FBTywwQkFBMEIsaUJBQWlCLGdDQUFnQywrQkFBK0IsNkJBQTZCLG9CQUFvQixHQUFHLFdBQVcsNkJBQTZCLEdBQUcsYUFBYSwrQkFBK0IsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0Isb0JBQW9CLGlCQUFpQixjQUFjLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLDhCQUE4QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLGtDQUFrQyxzQkFBc0Isd0JBQXdCLDZCQUE2QixnQ0FBZ0MsMEJBQTBCLGtCQUFrQixpQkFBaUIscUJBQXFCLGdCQUFnQixNQUFNLHlCQUF5QixzQkFBc0IscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksY0FBYyxhQUFh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LHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHQvKiBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7ICovXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3Jtb3JhbnQgR2FyYW1vbmRcXFwiLCBzZXJpZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Lyogd2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwJTsgKi9cXG59XFxuXFxuaHRtbCB7XFxuXFx0LyogaGVpZ2h0OiAxMDAlOyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdC8qIGJvcmRlcjogNHB4IHJlZCBzb2xpZDsgKi9cXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcblxcdHotaW5kZXg6IDMwMDA7XFxuXFx0LyogbWFyZ2luOiAxZW07ICovXFxufVxcblxcbi8qIExBWU9VVCBBTkQgTkFWICovXFxuXFxuLmxheW91dCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0LyogZGlzcGxheTogZmxleDsgKi9cXG5cXHQvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuXFx0LyogbWFyZ2luOiAwIGF1dG87ICovXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdG1hcmdpbjogMWVtO1xcblxcdC8qIG1hcmdpbi1yaWdodDogMmVtOyAqL1xcblxcdC8qIHBhZGRpbmc6IDFyZW07ICovXFxuXFx0LyogcGFkZGluZy1sZWZ0OiAxMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMTAlOyAqL1xcblxcdHotaW5kZXg6IDEwMDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LW1vei1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1iYXItaXRlbXMge1xcblxcdGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHQtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuXFx0LW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYTpob3ZlciB7XFxuXFx0Y29sb3I6IHJnYig0MCwgMTA3LCAxNDMpO1xcbn1cXG5cXG5hOmZvY3VzIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogLnByb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdHMtYXJlYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG59ICovXFxuXFxuLyogLnByb2plY3QtYm94IHAge1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufSAqL1xcblxcbi5sYW5kaW5nLXBhZ2Uge1xcblxcdC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuXFx0LyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuXFx0Lyogd2lkdGg6IDEwMCU7ICovXFxuXFx0LyogaGVpZ2h0OiAxMDB2aDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFx0LyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcblxcdC8qIHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHotaW5kZXg6IC0xOyAqL1xcbn1cXG5cXG4uaGVyby1pbWctY29udGFpbmVyIHtcXG5cXHQvKiBkaXNwbGF5OiBibG9jaztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7ICovXFxuXFxuXFx0LyogZGlzcGxheTogYmxvY2s7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3JkZXI6IDFweCBibHVlIHNvbGlkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuZm9vdGVyIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOyAqL1xcblxcdC8qIGNvbG9yOiAjYmJiYmJiOyAqL1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0LW1vei1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4uZmVhdC1pbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC8qIGhlaWdodDogNDV2aDsgKi9cXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdC13ZWJraXQtb2JqZWN0LWZpdDogY292ZXI7XFxuXFx0ICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdC13ZWJraXQtb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogYWxsIHRodW1ibW5haWwgaW4gYSBncmlkKi9cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IDNweCBncmVlbiBzb2xpZDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuXFx0Z3JpZC1nYXA6IDIwcHg7XFxuXFx0bWFyZ2luOiAycmVtO1xcbn0gKi9cXG5cXG4uY2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcblxcdHBhZGRpbmctbGVmdDogMTUlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDE1JTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pbmZvLXRleHQge1xcblxcdGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRsaW5lLWhlaWdodDogMWVtO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWQgeyAvKiBOb3QgbmVlZGVkIGlmIGF1dG9wcmVmaXhpbmcgKi8gLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IC0zMHB4OyAqL1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm15LW1hc29ucnktZ3JpZF9jb2x1bW4ge1xcblxcdC8qIHBhZGRpbmctbGVmdDogMzBweDsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAqL1xcbn1cXG5cXG4ubWFzb25yeS1pbWcge1xcblxcdC8qIG1hcmdpbi1ib3R0b206IC01cHg7ICovXFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAwLjZlbTtcXG5cXHRtYXJnaW4tdG9wOiAtNXB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmltZy1ncmlkIDpsYXN0LWNoaWxkIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbi5uYXYtcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiAtMS41cmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtcyB7XFxuXFx0cGFkZGluZy1yaWdodDogMC4ycmVtO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Lyogb3BhY2l0eTogMDsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIiB8XFxcIjtcXG59XFxuLnByb2plY3QtbGlzdC1pdGVtcyA6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zOmhvdmVyIHtcXG5cXHQvKiBvcGFjaXR5OiAxOyAqL1xcblxcdC8qIHZpc2liaWxpdHk6IHZpc2libGU7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0LyogbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHg7ICovXFxuXFx0fVxcblxcblxcdC5pbmZvLXRleHQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDAuOWVtO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLDJC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Qjs7QUFFQTtDQUNDOztJQUVHOztDQUVIO0VBQ0MsZ0JBQWdCO0VBQ2hCO3VCQUNxQjtDQUN0Qjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjtBQUNEOztBQUVBO0NBQ0M7O0lBRUc7O0NBRUg7RUFDQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC8qIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjsgKi9cXG5cXHRmb250LWZhbWlseTogXFxcIkNvcm1vcmFudCBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHQvKiB3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDAlOyAqL1xcbn1cXG5cXG5odG1sIHtcXG5cXHQvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbmhlYWRlciB7XFxuXFx0LyogYm9yZGVyOiA0cHggcmVkIHNvbGlkOyAqL1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFx0ei1pbmRleDogMzAwMDtcXG5cXHQvKiBtYXJnaW46IDFlbTsgKi9cXG59XFxuXFxuLyogTEFZT1VUIEFORCBOQVYgKi9cXG5cXG4ubGF5b3V0IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xcblxcdC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5uYXYtYmFyIHtcXG5cXHQvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAyZW07ICovXFxuXFx0LyogcGFkZGluZzogMXJlbTsgKi9cXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7ICovXFxuXFx0ei1pbmRleDogMTAwMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtYmFyLWl0ZW1zIHtcXG5cXHRib3JkZXI6IDFweCByZWQgc29saWQ7XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmE6aG92ZXIge1xcblxcdGNvbG9yOiByZ2IoNDAsIDEwNywgMTQzKTtcXG59XFxuXFxuYTpmb2N1cyB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIC5wcm9qZWN0LWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59ICovXFxuXFxuLyogLnByb2plY3RzLWFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdG1hcmdpbjogMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LWJveCBwIHtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC10aHVtYm5haWwge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn0gKi9cXG5cXG4ubGFuZGluZy1wYWdlIHtcXG5cXHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xcblxcdC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcblxcdC8qIHdpZHRoOiAxMDAlOyAqL1xcblxcdC8qIGhlaWdodDogMTAwdmg7ICovXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcblxcdC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogZml4ZWQ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR6LWluZGV4OiAtMTsgKi9cXG59XFxuXFxuLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuXFx0LyogZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0bWFyZ2luOiAwOyAqL1xcblxcblxcdC8qIGRpc3BsYXk6IGJsb2NrO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb250YWluO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Ym9yZGVyOiAxcHggYmx1ZSBzb2xpZDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmZvb3RlciB7XFxuXFx0LyogYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgKi9cXG5cXHQvKiBjb2xvcjogI2JiYmJiYjsgKi9cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG59XFxuXFxuLnByb2plY3QtcGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5mZWF0LWltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LyogaGVpZ2h0OiA0NXZoOyAqL1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogYWxsIHRodW1ibW5haWwgaW4gYSBncmlkKi9cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IDNweCBncmVlbiBzb2xpZDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuXFx0Z3JpZC1nYXA6IDIwcHg7XFxuXFx0bWFyZ2luOiAycmVtO1xcbn0gKi9cXG5cXG4uY2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcblxcdHBhZGRpbmctbGVmdDogMTUlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDE1JTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pbmZvLXRleHQge1xcblxcdGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRsaW5lLWhlaWdodDogMWVtO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWQge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94OyAvKiBOb3QgbmVlZGVkIGlmIGF1dG9wcmVmaXhpbmcgKi9cXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IC0zMHB4OyAqL1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm15LW1hc29ucnktZ3JpZF9jb2x1bW4ge1xcblxcdC8qIHBhZGRpbmctbGVmdDogMzBweDsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAqL1xcbn1cXG5cXG4ubWFzb25yeS1pbWcge1xcblxcdC8qIG1hcmdpbi1ib3R0b206IC01cHg7ICovXFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAwLjZlbTtcXG5cXHRtYXJnaW4tdG9wOiAtNXB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmltZy1ncmlkIDpsYXN0LWNoaWxkIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbi5uYXYtcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiAtMS41cmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtcyB7XFxuXFx0cGFkZGluZy1yaWdodDogMC4ycmVtO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Lyogb3BhY2l0eTogMDsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIiB8XFxcIjtcXG59XFxuLnByb2plY3QtbGlzdC1pdGVtcyA6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zOmhvdmVyIHtcXG5cXHQvKiBvcGFjaXR5OiAxOyAqL1xcblxcdC8qIHZpc2liaWxpdHk6IHZpc2libGU7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0LyogbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHg7ICovXFxuXFx0fVxcblxcblxcdC5pbmZvLXRleHQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDAuOWVtO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})