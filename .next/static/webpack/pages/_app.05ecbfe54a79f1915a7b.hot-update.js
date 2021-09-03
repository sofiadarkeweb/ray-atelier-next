webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n\\tbackground: white;\\n\\tmargin: 0 auto;\\n\\t/* font-family: \\\"Roboto\\\"; */\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n\\twidth: 100vw;\\n\\theight: 100%;\\n}\\n\\nhtml {\\n\\theight: 100%;\\n}\\n\\nheader {\\n\\t/* border: 1px red solid; */\\n\\t/* width: 100vw; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t-moz-box-orient: vertical;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: column;\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\tpadding: 2rem;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tz-index: 1000;\\n\\t-moz-box-pack: justify;\\n\\t     justify-content: space-between;\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\tposition: relative;\\n\\tbackground-color: white;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\t-moz-box-orient: horizontal;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n}\\n\\n.project-page {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t-moz-box-align: center;\\n\\t     align-items: center;\\n\\t-moz-box-orient: vertical;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: column;\\n\\talign-items: center;\\n\\t-moz-box-pack: center;\\n\\t     justify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\theight: 20%;\\n\\tbackground-position: center center;\\n\\t-webkit-object-fit: cover;\\n\\t        object-fit: cover;\\n\\toverflow: hidden;\\n\\t-webkit-object-position: center;\\n\\t        object-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\tpadding-left: 15%;\\n\\tpadding-right: 15%;\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid { /* Not needed if autoprefixing */ /* Not needed if autoprefixing */\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAGA;CACC,iBAAiB;CACjB,cAAc;CACd,2BAA2B;CAC3B,wCAAwC;CACxC,eAAe;CACf,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,2BAA2B;CAC3B,kBAAkB;AACnB;;AAEA,mBAAmB;;AAEnB;CACC,iBAAiB;CACjB,iBAAa;CAAb,aAAa;CACb,yBAAsB;CAAtB,0BAAsB;MAAtB,sBAAsB;AACvB;;AAEA;CACC,oBAAoB;CACpB,eAAe;CACf,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,aAAa;CACb,sBAA8B;MAA9B,8BAA8B;CAC9B,iBAAa;CAAb,aAAa;CACb,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,qBAAqB;CACrB,YAAY;CACZ,2BAAmB;CAAnB,0BAAmB;MAAnB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,wBAAwB;AACzB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;;;GAGG;;AAEH;;;;;GAKG;;AAEH;;GAEG;;AAEH;;;;;GAKG;;AAEH;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,iBAAiB;CACjB,mBAAmB;CACnB,wBAAwB;CACxB,2BAA2B;CAC3B;;;;eAIc;AACf;;AAEA;CACC;;;;;;;;aAQY;;CAEZ;;;;;;;sBAOqB;AACtB;;AAEA;CACC,4BAA4B;CAC5B,oBAAoB;CACpB,aAAa;CACb,kBAAkB;CAClB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,iBAAa;CAAb,aAAa;CACb,sBAAmB;MAAnB,mBAAmB;CACnB,yBAAsB;CAAtB,0BAAsB;MAAtB,sBAAsB;CACtB,mBAAmB;CACnB,qBAAuB;MAAvB,uBAAuB;CACvB,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,WAAW;CACX,kCAAkC;CAClC,yBAAiB;SAAjB,iBAAiB;CACjB,gBAAgB;CAChB,+BAAuB;SAAvB,uBAAuB;AACxB;;AAEA,4BAA4B;AAC5B;;;;;;;GAOG;;AAEH;CACC,gBAAgB;CAChB,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;AACtB;;AAEA,mBACuB,gCAAgC,EAChC,gCAAgC;CACtD,iBAAa;CAAb,aAAa;CACb,yBAAyB;CACzB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,wBAAwB;CACxB,kCAAkC;AACnC;;AAEA;CACC,yBAAyB;CACzB,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,iBAAa;CAAb,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;CACnB,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC;;IAEG;;CAEH;EACC,gBAAgB;EAChB;uBACqB;CACtB;;CAEA;EACC,kBAAkB;CACnB;AACD;;AAEA;CACC;;IAEG;;CAEH;EACC,mBAAmB;EACnB,kBAAkB;CACnB;;CAEA;EACC,gBAAgB;EAChB,kBAAkB;CACnB;AACD\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap\\\");\\n\\nbody {\\n\\tbackground: white;\\n\\tmargin: 0 auto;\\n\\t/* font-family: \\\"Roboto\\\"; */\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n\\twidth: 100vw;\\n\\theight: 100%;\\n}\\n\\nhtml {\\n\\theight: 100%;\\n}\\n\\nheader {\\n\\t/* border: 1px red solid; */\\n\\t/* width: 100vw; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\tpadding: 2rem;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tz-index: 1000;\\n\\tjustify-content: space-between;\\n\\tdisplay: flex;\\n\\tposition: relative;\\n\\tbackground-color: white;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\tflex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n}\\n\\n.project-page {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\theight: 20%;\\n\\tbackground-position: center center;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n\\tobject-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\tpadding-left: 15%;\\n\\tpadding-right: 15%;\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid {\\n\\tdisplay: -webkit-box; /* Not needed if autoprefixing */\\n\\tdisplay: -ms-flexbox; /* Not needed if autoprefixing */\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RCw4QkFBOEIsUUFBUywrRUFBK0UsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE0sOEJBQThCLFFBQVMsa0dBQWtHO0FBQ3pJO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyxzQkFBc0IsbUJBQW1CLCtCQUErQixrREFBa0Qsb0JBQW9CLGlCQUFpQixpQkFBaUIsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFlBQVksNkJBQTZCLHVCQUF1QixNQUFNLHFDQUFxQyxzQkFBc0Isc0JBQXNCLGtCQUFrQiw4QkFBOEIsK0JBQStCLGdDQUFnQyxHQUFHLGNBQWMsc0JBQXNCLHVCQUF1QixrQkFBa0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsMkJBQTJCLHdDQUF3QyxzQkFBc0Isa0JBQWtCLHVCQUF1Qiw0QkFBNEIsR0FBRyxPQUFPLDBCQUEwQixpQkFBaUIsZ0NBQWdDLCtCQUErQiw2QkFBNkIsb0JBQW9CLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxhQUFhLCtCQUErQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQixvQkFBb0IsaUJBQWlCLGNBQWMsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsOEJBQThCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsa0NBQWtDLHNCQUFzQix3QkFBd0IsNkJBQTZCLGdDQUFnQywwQkFBMEIsa0JBQWtCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLE1BQU0seUJBQXlCLHNCQUFzQixxQkFBcUIsdUJBQXVCLFdBQVcsWUFBWSxjQUFjLGFBQWEsMkJBQTJCLGNBQWMsMkJBQTJCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHVCQUF1QixNQUFNLFlBQVksOEJBQThCLHlCQUF5QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsOEJBQThCLCtCQUErQixnQ0FBZ0Msd0JBQXdCLDBCQUEwQixpQ0FBaUMsMEJBQTBCLE1BQU0sZUFBZSxnQkFBZ0IsZ0JBQWdCLHVDQUF1Qyw4QkFBOEIsOEJBQThCLHFCQUFxQixvQ0FBb0Msb0NBQW9DLEdBQUcscURBQXFELDRCQUE0QixrQkFBa0IsdUNBQXVDLHFCQUFxQixpQkFBaUIsR0FBRyxjQUFjLHFCQUFxQix1QkFBdUIsc0JBQXNCLEdBQUcsc0JBQXNCLHNCQUFzQix1QkFBdUIscUJBQXFCLHdCQUF3QixHQUFHLGdCQUFnQiwyQkFBMkIscUJBQXFCLHFCQUFxQixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsc0JBQXNCLDBGQUEwRixrQkFBa0IsMkJBQTJCLG1CQUFtQixpQkFBaUIsR0FBRyw2QkFBNkIsMEJBQTBCLHVDQUF1QyxNQUFNLGtCQUFrQiwyQkFBMkIsb0JBQW9CLEdBQUcsY0FBYyxxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLDJCQUEyQiw2QkFBNkIsTUFBTSx1QkFBdUIsc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJBQXVCLHdCQUF3QixvQkFBb0IsR0FBRyx5QkFBeUIsMEJBQTBCLHdCQUF3QixrQkFBa0IsNkJBQTZCLE1BQU0saUNBQWlDLG9CQUFvQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRywrQkFBK0Isa0JBQWtCLDhCQUE4QixNQUFNLDBDQUEwQyx5QkFBeUIsMEJBQTBCLEtBQUssZ0JBQWdCLHVCQUF1Qiw2QkFBNkIseUJBQXlCLFFBQVEsa0JBQWtCLHlCQUF5QixLQUFLLEdBQUcsMENBQTBDLHlCQUF5QiwwQkFBMEIsS0FBSyxnQkFBZ0IsMEJBQTBCLHlCQUF5QixLQUFLLGtCQUFrQix1QkFBdUIseUJBQXlCLEtBQUssR0FBRyxTQUFTLG1GQUFtRixZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxTQUFTLE1BQU0sTUFBTSxNQUFNLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLFdBQVcsT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGdDQUFnQyxZQUFZLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSx1R0FBdUcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxzQkFBc0IscUdBQXFHLFVBQVUsc0JBQXNCLG1CQUFtQiwrQkFBK0Isa0RBQWtELG9CQUFvQixpQkFBaUIsaUJBQWlCLEdBQUcsVUFBVSxpQkFBaUIsR0FBRyxZQUFZLDZCQUE2Qix1QkFBdUIsTUFBTSxxQ0FBcUMsc0JBQXNCLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLHNCQUFzQix1QkFBdUIsa0JBQWtCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyxrQkFBa0IsdUJBQXVCLDRCQUE0QixHQUFHLE9BQU8sMEJBQTBCLGlCQUFpQix3QkFBd0Isb0JBQW9CLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxhQUFhLCtCQUErQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQixvQkFBb0IsaUJBQWlCLGNBQWMsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsOEJBQThCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsa0NBQWtDLHNCQUFzQix3QkFBd0IsNkJBQTZCLGdDQUFnQywwQkFBMEIsa0JBQWtCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLE1BQU0seUJBQXlCLHNCQUFzQixxQkFBcUIsdUJBQXVCLFdBQVcsWUFBWSxjQUFjLGFBQWEsMkJBQTJCLGNBQWMsMkJBQTJCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHVCQUF1QixNQUFNLFlBQVksOEJBQThCLHlCQUF5QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLDJCQUEyQix3QkFBd0IsNEJBQTRCLDBCQUEwQixNQUFNLGVBQWUsZ0JBQWdCLGdCQUFnQix1Q0FBdUMsc0JBQXNCLHFCQUFxQiw0QkFBNEIsR0FBRyxxREFBcUQsNEJBQTRCLGtCQUFrQix1Q0FBdUMscUJBQXFCLGlCQUFpQixHQUFHLGNBQWMscUJBQXFCLHVCQUF1QixzQkFBc0IsR0FBRyxzQkFBc0Isc0JBQXNCLHVCQUF1QixxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLDJCQUEyQixxQkFBcUIscUJBQXFCLEdBQUcsT0FBTywwQkFBMEIsR0FBRyxzQkFBc0IseUJBQXlCLDJEQUEyRCxvREFBb0QsMkJBQTJCLG1CQUFtQixpQkFBaUIsR0FBRyw2QkFBNkIsMEJBQTBCLHVDQUF1QyxNQUFNLGtCQUFrQiwyQkFBMkIsb0JBQW9CLEdBQUcsY0FBYyxxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLDJCQUEyQiw2QkFBNkIsTUFBTSx1QkFBdUIsa0JBQWtCLHNCQUFzQix1QkFBdUIsd0JBQXdCLG9CQUFvQixHQUFHLHlCQUF5QiwwQkFBMEIsd0JBQXdCLGtCQUFrQiw2QkFBNkIsTUFBTSxpQ0FBaUMsb0JBQW9CLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLCtCQUErQixrQkFBa0IsOEJBQThCLE1BQU0sMENBQTBDLHlCQUF5QiwwQkFBMEIsS0FBSyxnQkFBZ0IsdUJBQXVCLDZCQUE2Qix5QkFBeUIsUUFBUSxrQkFBa0IseUJBQXlCLEtBQUssR0FBRywwQ0FBMEMseUJBQXlCLDBCQUEwQixLQUFLLGdCQUFnQiwwQkFBMEIseUJBQXlCLEtBQUssa0JBQWtCLHVCQUF1Qix5QkFBeUIsS0FBSyxHQUFHLHFCQUFxQjtBQUNoeVc7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LyogZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiOyAqL1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuXFx0Lyogd2lkdGg6IDEwMHZ3OyAqL1xcbn1cXG5cXG4vKiBMQVlPVVQgQU5EIE5BViAqL1xcblxcbi5sYXlvdXQge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtYmFyIHtcXG5cXHQvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuXFx0ei1pbmRleDogMTAwMDtcXG5cXHQtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG5cXHQtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5hOmhvdmVyIHtcXG5cXHRjb2xvcjogcmdiKDQwLCAxMDcsIDE0Myk7XFxufVxcblxcbmE6Zm9jdXMge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0cy1hcmVhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRtYXJnaW46IDFyZW07XFxuXFx0Z2FwOiAxcmVtO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC1ib3ggcCB7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG59ICovXFxuXFxuLyogLnByb2plY3QtdGh1bWJuYWlsIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59ICovXFxuXFxuLmxhbmRpbmctcGFnZSB7XFxuXFx0LyogZGlzcGxheTogZmxleDsgKi9cXG5cXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG5cXHQvKiB3aWR0aDogMTAwJTsgKi9cXG5cXHQvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuXFx0LyogcG9zaXRpb246IGZpeGVkO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0ei1pbmRleDogLTE7ICovXFxufVxcblxcbi5oZXJvLWltZy1jb250YWluZXIge1xcblxcdC8qIGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG1hcmdpbjogMDsgKi9cXG5cXG5cXHQvKiBkaXNwbGF5OiBibG9jaztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b2JqZWN0LWZpdDogY29udGFpbjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJvcmRlcjogMXB4IGJsdWUgc29saWQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG5mb290ZXIge1xcblxcdC8qIGJhY2tncm91bmQ6IHdoaXRlc21va2U7ICovXFxuXFx0LyogY29sb3I6ICNiYmJiYmI7ICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4ucGFnZS1jb250ZW50IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxufVxcblxcbi5wcm9qZWN0LXBhZ2Uge1xcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0LW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHQtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5mZWF0LWltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAyMCU7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG5cXHQtd2Via2l0LW9iamVjdC1maXQ6IGNvdmVyO1xcblxcdCAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQtd2Via2l0LW9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcblxcdCAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi8qIGFsbCB0aHVtYm1uYWlsIGluIGEgZ3JpZCovXFxuLyogLnByb2plY3QtbGlzdCB7XFxuXFx0Ym9yZGVyOiAzcHggZ3JlZW4gc29saWQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcblxcdGdyaWQtZ2FwOiAyMHB4O1xcblxcdG1hcmdpbjogMnJlbTtcXG59ICovXFxuXFxuLmNhcmQge1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDE1JTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uaW5mby10ZXh0IHtcXG5cXHRjb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDFlbTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubXktbWFzb25yeS1ncmlkIHsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovIC8qIE5vdCBuZWVkZWQgaWYgYXV0b3ByZWZpeGluZyAqL1xcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAtMzBweDsgKi9cXG5cXHR3aWR0aDogYXV0bztcXG5cXHRtYXJnaW46IDEwcHg7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWRfY29sdW1uIHtcXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDMwcHg7ICovXFxuXFx0LyogYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgKi9cXG59XFxuXFxuLm1hc29ucnktaW1nIHtcXG5cXHQvKiBtYXJnaW4tYm90dG9tOiAtNXB4OyAqL1xcblxcdG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNhcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMC42ZW07XFxuXFx0bWFyZ2luLXRvcDogLTVweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5pbWctZ3JpZCA6bGFzdC1jaGlsZCB7XFxuXFx0LyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbn1cXG5cXG4ubmF2LXByb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuXFx0bWFyZ2luLXRvcDogLTEuNXJlbTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMge1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdC8qIG9wYWNpdHk6IDA7ICovXFxuXFx0LyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zIDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCIgfFxcXCI7XFxufVxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtczpob3ZlciB7XFxuXFx0Lyogb3BhY2l0eTogMTsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC8qIC5teS1tYXNvbnJ5LWdyaWQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTMwcHg7XFxuXFx0fSAqL1xcblxcblxcdC5jYXJkIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdC8qIG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4OyAqL1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41ZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC8qIC5teS1tYXNvbnJ5LWdyaWQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTMwcHg7XFxuXFx0fSAqL1xcblxcblxcdC5jYXJkIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMTBweDtcXG5cXHR9XFxuXFxuXFx0LmluZm8tdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjllbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41ZW07XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCwyQkFBMkI7Q0FDM0Isd0NBQXdDO0NBQ3hDLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGtCQUFrQjtBQUNuQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFhO0NBQWIsYUFBYTtDQUNiLHlCQUFzQjtDQUF0QiwwQkFBc0I7TUFBdEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQThCO01BQTlCLDhCQUE4QjtDQUM5QixpQkFBYTtDQUFiLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiwyQkFBbUI7Q0FBbkIsMEJBQW1CO01BQW5CLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7OztHQUdHOztBQUVIOzs7OztHQUtHOztBQUVIOztHQUVHOztBQUVIOzs7OztHQUtHOztBQUVIO0NBQ0MsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3QixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHdCQUF3QjtDQUN4QiwyQkFBMkI7Q0FDM0I7Ozs7ZUFJYztBQUNmOztBQUVBO0NBQ0M7Ozs7Ozs7O2FBUVk7O0NBRVo7Ozs7Ozs7c0JBT3FCO0FBQ3RCOztBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWE7Q0FBYixhQUFhO0NBQ2Isc0JBQW1CO01BQW5CLG1CQUFtQjtDQUNuQix5QkFBc0I7Q0FBdEIsMEJBQXNCO01BQXRCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIscUJBQXVCO01BQXZCLHVCQUF1QjtDQUN2Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGtDQUFrQztDQUNsQyx5QkFBaUI7U0FBakIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQiwrQkFBdUI7U0FBdkIsdUJBQXVCO0FBQ3hCOztBQUVBLDRCQUE0QjtBQUM1Qjs7Ozs7OztHQU9HOztBQUVIO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQSxtQkFDdUIsZ0NBQWdDLEVBQ2hDLGdDQUFnQztDQUN0RCxpQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxpQkFBYTtDQUFiLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0M7O0lBRUc7O0NBRUg7RUFDQyxnQkFBZ0I7RUFDaEI7dUJBQ3FCO0NBQ3RCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQzs7SUFFRzs7Q0FFSDtFQUNDLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LyogZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiOyAqL1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuXFx0Lyogd2lkdGg6IDEwMHZ3OyAqL1xcbn1cXG5cXG4vKiBMQVlPVVQgQU5EIE5BViAqL1xcblxcbi5sYXlvdXQge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1iYXIge1xcblxcdC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHR6LWluZGV4OiAxMDAwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYTpob3ZlciB7XFxuXFx0Y29sb3I6IHJnYig0MCwgMTA3LCAxNDMpO1xcbn1cXG5cXG5hOmZvY3VzIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogLnByb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdHMtYXJlYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG59ICovXFxuXFxuLyogLnByb2plY3QtYm94IHAge1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufSAqL1xcblxcbi5sYW5kaW5nLXBhZ2Uge1xcblxcdC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuXFx0LyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuXFx0Lyogd2lkdGg6IDEwMCU7ICovXFxuXFx0LyogaGVpZ2h0OiAxMDB2aDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFx0LyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcblxcdC8qIHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHotaW5kZXg6IC0xOyAqL1xcbn1cXG5cXG4uaGVyby1pbWctY29udGFpbmVyIHtcXG5cXHQvKiBkaXNwbGF5OiBibG9jaztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7ICovXFxuXFxuXFx0LyogZGlzcGxheTogYmxvY2s7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3JkZXI6IDFweCBibHVlIHNvbGlkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuZm9vdGVyIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOyAqL1xcblxcdC8qIGNvbG9yOiAjYmJiYmJiOyAqL1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLmZlYXQtaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDIwJTtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi8qIGFsbCB0aHVtYm1uYWlsIGluIGEgZ3JpZCovXFxuLyogLnByb2plY3QtbGlzdCB7XFxuXFx0Ym9yZGVyOiAzcHggZ3JlZW4gc29saWQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcblxcdGdyaWQtZ2FwOiAyMHB4O1xcblxcdG1hcmdpbjogMnJlbTtcXG59ICovXFxuXFxuLmNhcmQge1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDE1JTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uaW5mby10ZXh0IHtcXG5cXHRjb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDFlbTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubXktbWFzb25yeS1ncmlkIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIE5vdCBuZWVkZWQgaWYgYXV0b3ByZWZpeGluZyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAtMzBweDsgKi9cXG5cXHR3aWR0aDogYXV0bztcXG5cXHRtYXJnaW46IDEwcHg7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWRfY29sdW1uIHtcXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDMwcHg7ICovXFxuXFx0LyogYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgKi9cXG59XFxuXFxuLm1hc29ucnktaW1nIHtcXG5cXHQvKiBtYXJnaW4tYm90dG9tOiAtNXB4OyAqL1xcblxcdG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNhcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMC42ZW07XFxuXFx0bWFyZ2luLXRvcDogLTVweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5pbWctZ3JpZCA6bGFzdC1jaGlsZCB7XFxuXFx0LyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbn1cXG5cXG4ubmF2LXByb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuXFx0bWFyZ2luLXRvcDogLTEuNXJlbTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMge1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdC8qIG9wYWNpdHk6IDA7ICovXFxuXFx0LyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zIDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCIgfFxcXCI7XFxufVxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtczpob3ZlciB7XFxuXFx0Lyogb3BhY2l0eTogMTsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC8qIC5teS1tYXNvbnJ5LWdyaWQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTMwcHg7XFxuXFx0fSAqL1xcblxcblxcdC5jYXJkIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdC8qIG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4OyAqL1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41ZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC8qIC5teS1tYXNvbnJ5LWdyaWQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTMwcHg7XFxuXFx0fSAqL1xcblxcblxcdC5jYXJkIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMTBweDtcXG5cXHR9XFxuXFxuXFx0LmluZm8tdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjllbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41ZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})