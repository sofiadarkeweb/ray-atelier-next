webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n\\tbackground: white;\\n\\tmargin: 0 auto;\\n\\t/* font-family: \\\"Roboto\\\"; */\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n\\t/* width: 100vw;\\n\\theight: 100%; */\\n}\\n\\nhtml {\\n\\t/* height: 100%; */\\n}\\n\\nheader {\\n\\t/* border: 4px red solid; */\\n\\twidth: 100vw;\\n\\tbackground-color: yellow;\\n\\t/* margin: 1em; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\t/* display: flex; */\\n\\t/* flex-direction: column; */\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\t/* margin: 1em; */\\n\\t/* margin-right: 2em; */\\n\\t/* padding: 1rem; */\\n\\t/* padding-left: 10%;\\n\\tpadding-right: 10%; */\\n\\tz-index: 1000;\\n\\twidth: 100%;\\n\\t-moz-box-pack: justify;\\n\\t     justify-content: space-between;\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t/* position: relative; */\\n\\tbackground-color: white;\\n}\\n\\n.nav-bar-items {\\n\\tborder: 1px red solid;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\t-moz-box-orient: horizontal;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n}\\n\\n.project-page {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t-moz-box-align: center;\\n\\t     align-items: center;\\n\\t-moz-box-orient: vertical;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: column;\\n\\talign-items: center;\\n\\t-moz-box-pack: center;\\n\\t     justify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\t/* height: 45vh; */\\n\\tbackground-position: center center;\\n\\t-webkit-object-fit: cover;\\n\\t        object-fit: cover;\\n\\toverflow: hidden;\\n\\t-webkit-object-position: center;\\n\\t        object-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\tpadding-left: 15%;\\n\\tpadding-right: 15%;\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid { /* Not needed if autoprefixing */ /* Not needed if autoprefixing */\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAGA;CACC,iBAAiB;CACjB,cAAc;CACd,2BAA2B;CAC3B,wCAAwC;CACxC,eAAe;CACf;gBACe;AAChB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;CAC3B,YAAY;CACZ,wBAAwB;CACxB,iBAAiB;AAClB;;AAEA,mBAAmB;;AAEnB;CACC,iBAAiB;CACjB,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;CACC,oBAAoB;CACpB,eAAe;CACf,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB;sBACqB;CACrB,aAAa;CACb,WAAW;CACX,sBAA8B;MAA9B,8BAA8B;CAC9B,iBAAa;CAAb,aAAa;CACb,wBAAwB;CACxB,uBAAuB;AACxB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;CACrB,YAAY;CACZ,2BAAmB;CAAnB,0BAAmB;MAAnB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,wBAAwB;AACzB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;;;GAGG;;AAEH;;;;;GAKG;;AAEH;;GAEG;;AAEH;;;;;GAKG;;AAEH;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,iBAAiB;CACjB,mBAAmB;CACnB,wBAAwB;CACxB,2BAA2B;CAC3B;;;;eAIc;AACf;;AAEA;CACC;;;;;;;;aAQY;;CAEZ;;;;;;;sBAOqB;AACtB;;AAEA;CACC,4BAA4B;CAC5B,oBAAoB;CACpB,aAAa;CACb,kBAAkB;CAClB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,iBAAa;CAAb,aAAa;CACb,sBAAmB;MAAnB,mBAAmB;CACnB,yBAAsB;CAAtB,0BAAsB;MAAtB,sBAAsB;CACtB,mBAAmB;CACnB,qBAAuB;MAAvB,uBAAuB;CACvB,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,kCAAkC;CAClC,yBAAiB;SAAjB,iBAAiB;CACjB,gBAAgB;CAChB,+BAAuB;SAAvB,uBAAuB;AACxB;;AAEA,4BAA4B;AAC5B;;;;;;;GAOG;;AAEH;CACC,gBAAgB;CAChB,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;AACtB;;AAEA,mBACuB,gCAAgC,EAChC,gCAAgC;CACtD,iBAAa;CAAb,aAAa;CACb,yBAAyB;CACzB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,wBAAwB;CACxB,kCAAkC;AACnC;;AAEA;CACC,yBAAyB;CACzB,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,iBAAa;CAAb,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,mBAAmB;CACnB,gBAAgB;CAChB,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;AACA;CACC,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC;;IAEG;;CAEH;EACC,gBAAgB;EAChB;uBACqB;CACtB;;CAEA;EACC,kBAAkB;CACnB;AACD;;AAEA;CACC;;IAEG;;CAEH;EACC,mBAAmB;EACnB,kBAAkB;CACnB;;CAEA;EACC,gBAAgB;EAChB,kBAAkB;CACnB;AACD\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap\\\");\\n\\nbody {\\n\\tbackground: white;\\n\\tmargin: 0 auto;\\n\\t/* font-family: \\\"Roboto\\\"; */\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n\\t/* width: 100vw;\\n\\theight: 100%; */\\n}\\n\\nhtml {\\n\\t/* height: 100%; */\\n}\\n\\nheader {\\n\\t/* border: 4px red solid; */\\n\\twidth: 100vw;\\n\\tbackground-color: yellow;\\n\\t/* margin: 1em; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\t/* display: flex; */\\n\\t/* flex-direction: column; */\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\t/* margin: 1em; */\\n\\t/* margin-right: 2em; */\\n\\t/* padding: 1rem; */\\n\\t/* padding-left: 10%;\\n\\tpadding-right: 10%; */\\n\\tz-index: 1000;\\n\\twidth: 100%;\\n\\tjustify-content: space-between;\\n\\tdisplay: flex;\\n\\t/* position: relative; */\\n\\tbackground-color: white;\\n}\\n\\n.nav-bar-items {\\n\\tborder: 1px red solid;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\tflex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n}\\n\\n.project-page {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\t/* height: 45vh; */\\n\\tbackground-position: center center;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n\\tobject-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\tpadding-left: 15%;\\n\\tpadding-right: 15%;\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid {\\n\\tdisplay: -webkit-box; /* Not needed if autoprefixing */\\n\\tdisplay: -ms-flexbox; /* Not needed if autoprefixing */\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RCw4QkFBOEIsUUFBUywrRUFBK0UsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE0sOEJBQThCLFFBQVMsa0dBQWtHO0FBQ3pJO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyxzQkFBc0IsbUJBQW1CLCtCQUErQixrREFBa0Qsb0JBQW9CLG9CQUFvQixpQkFBaUIsTUFBTSxVQUFVLG9CQUFvQixNQUFNLFlBQVksNkJBQTZCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLE1BQU0scUNBQXFDLHNCQUFzQixxQkFBcUIsaUNBQWlDLE1BQU0sY0FBYyxzQkFBc0IsdUJBQXVCLG1CQUFtQiw0QkFBNEIsd0JBQXdCLDRCQUE0Qix1QkFBdUIscUJBQXFCLGdCQUFnQiwyQkFBMkIsd0NBQXdDLHNCQUFzQixrQkFBa0IsMEJBQTBCLCtCQUErQixHQUFHLG9CQUFvQiwwQkFBMEIsR0FBRyxPQUFPLDBCQUEwQixpQkFBaUIsZ0NBQWdDLCtCQUErQiw2QkFBNkIsb0JBQW9CLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxhQUFhLCtCQUErQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQixvQkFBb0IsaUJBQWlCLGNBQWMsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsOEJBQThCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsa0NBQWtDLHNCQUFzQix3QkFBd0IsNkJBQTZCLGdDQUFnQywwQkFBMEIsa0JBQWtCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLE1BQU0seUJBQXlCLHNCQUFzQixxQkFBcUIsdUJBQXVCLFdBQVcsWUFBWSxjQUFjLGFBQWEsMkJBQTJCLGNBQWMsMkJBQTJCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHVCQUF1QixNQUFNLFlBQVksOEJBQThCLHlCQUF5QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsOEJBQThCLCtCQUErQixnQ0FBZ0Msd0JBQXdCLDBCQUEwQixpQ0FBaUMsMEJBQTBCLE1BQU0sZUFBZSxnQkFBZ0Isb0JBQW9CLDBDQUEwQyw4QkFBOEIsOEJBQThCLHFCQUFxQixvQ0FBb0Msb0NBQW9DLEdBQUcscURBQXFELDRCQUE0QixrQkFBa0IsdUNBQXVDLHFCQUFxQixpQkFBaUIsR0FBRyxjQUFjLHFCQUFxQix1QkFBdUIsc0JBQXNCLEdBQUcsc0JBQXNCLHNCQUFzQix1QkFBdUIscUJBQXFCLHdCQUF3QixHQUFHLGdCQUFnQiwyQkFBMkIscUJBQXFCLHFCQUFxQixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsc0JBQXNCLDBGQUEwRixrQkFBa0IsMkJBQTJCLG1CQUFtQixpQkFBaUIsR0FBRyw2QkFBNkIsMEJBQTBCLHVDQUF1QyxNQUFNLGtCQUFrQiwyQkFBMkIsb0JBQW9CLEdBQUcsY0FBYyxxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLDJCQUEyQiw2QkFBNkIsTUFBTSx1QkFBdUIsc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJBQXVCLHdCQUF3QixvQkFBb0IsR0FBRyx5QkFBeUIsMEJBQTBCLHdCQUF3QixrQkFBa0IsNkJBQTZCLE1BQU0saUNBQWlDLG9CQUFvQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRywrQkFBK0Isa0JBQWtCLDhCQUE4QixNQUFNLDBDQUEwQyx5QkFBeUIsMEJBQTBCLEtBQUssZ0JBQWdCLHVCQUF1Qiw2QkFBNkIseUJBQXlCLFFBQVEsa0JBQWtCLHlCQUF5QixLQUFLLEdBQUcsMENBQTBDLHlCQUF5QiwwQkFBMEIsS0FBSyxnQkFBZ0IsMEJBQTBCLHlCQUF5QixLQUFLLGtCQUFrQix1QkFBdUIseUJBQXlCLEtBQUssR0FBRyxTQUFTLG1GQUFtRixZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sU0FBUyxNQUFNLE1BQU0sTUFBTSxTQUFTLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxXQUFXLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxnQ0FBZ0MsWUFBWSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8s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IjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC8qIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjsgKi9cXG5cXHRmb250LWZhbWlseTogXFxcIkNvcm1vcmFudCBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHQvKiB3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDAlOyAqL1xcbn1cXG5cXG5odG1sIHtcXG5cXHQvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbmhlYWRlciB7XFxuXFx0LyogYm9yZGVyOiA0cHggcmVkIHNvbGlkOyAqL1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFx0LyogbWFyZ2luOiAxZW07ICovXFxufVxcblxcbi8qIExBWU9VVCBBTkQgTkFWICovXFxuXFxuLmxheW91dCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0LyogZGlzcGxheTogZmxleDsgKi9cXG5cXHQvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuXFx0LyogbWFyZ2luOiAwIGF1dG87ICovXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdC8qIG1hcmdpbjogMWVtOyAqL1xcblxcdC8qIG1hcmdpbi1yaWdodDogMmVtOyAqL1xcblxcdC8qIHBhZGRpbmc6IDFyZW07ICovXFxuXFx0LyogcGFkZGluZy1sZWZ0OiAxMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMTAlOyAqL1xcblxcdHotaW5kZXg6IDEwMDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LW1vei1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1iYXItaXRlbXMge1xcblxcdGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHQtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuXFx0LW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYTpob3ZlciB7XFxuXFx0Y29sb3I6IHJnYig0MCwgMTA3LCAxNDMpO1xcbn1cXG5cXG5hOmZvY3VzIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogLnByb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdHMtYXJlYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG59ICovXFxuXFxuLyogLnByb2plY3QtYm94IHAge1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufSAqL1xcblxcbi5sYW5kaW5nLXBhZ2Uge1xcblxcdC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuXFx0LyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuXFx0Lyogd2lkdGg6IDEwMCU7ICovXFxuXFx0LyogaGVpZ2h0OiAxMDB2aDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFx0LyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcblxcdC8qIHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHotaW5kZXg6IC0xOyAqL1xcbn1cXG5cXG4uaGVyby1pbWctY29udGFpbmVyIHtcXG5cXHQvKiBkaXNwbGF5OiBibG9jaztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7ICovXFxuXFxuXFx0LyogZGlzcGxheTogYmxvY2s7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3JkZXI6IDFweCBibHVlIHNvbGlkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuZm9vdGVyIHtcXG5cXHQvKiBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOyAqL1xcblxcdC8qIGNvbG9yOiAjYmJiYmJiOyAqL1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0LW1vei1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4uZmVhdC1pbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC8qIGhlaWdodDogNDV2aDsgKi9cXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdC13ZWJraXQtb2JqZWN0LWZpdDogY292ZXI7XFxuXFx0ICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdC13ZWJraXQtb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogYWxsIHRodW1ibW5haWwgaW4gYSBncmlkKi9cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IDNweCBncmVlbiBzb2xpZDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuXFx0Z3JpZC1nYXA6IDIwcHg7XFxuXFx0bWFyZ2luOiAycmVtO1xcbn0gKi9cXG5cXG4uY2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcblxcdHBhZGRpbmctbGVmdDogMTUlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDE1JTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pbmZvLXRleHQge1xcblxcdGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRsaW5lLWhlaWdodDogMWVtO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWQgeyAvKiBOb3QgbmVlZGVkIGlmIGF1dG9wcmVmaXhpbmcgKi8gLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IC0zMHB4OyAqL1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm15LW1hc29ucnktZ3JpZF9jb2x1bW4ge1xcblxcdC8qIHBhZGRpbmctbGVmdDogMzBweDsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAqL1xcbn1cXG5cXG4ubWFzb25yeS1pbWcge1xcblxcdC8qIG1hcmdpbi1ib3R0b206IC01cHg7ICovXFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAwLjZlbTtcXG5cXHRtYXJnaW4tdG9wOiAtNXB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmltZy1ncmlkIDpsYXN0LWNoaWxkIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbi5uYXYtcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiAtMS41cmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtcyB7XFxuXFx0cGFkZGluZy1yaWdodDogMC4ycmVtO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Lyogb3BhY2l0eTogMDsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIiB8XFxcIjtcXG59XFxuLnByb2plY3QtbGlzdC1pdGVtcyA6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zOmhvdmVyIHtcXG5cXHQvKiBvcGFjaXR5OiAxOyAqL1xcblxcdC8qIHZpc2liaWxpdHk6IHZpc2libGU7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0LyogbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHg7ICovXFxuXFx0fVxcblxcblxcdC5pbmZvLXRleHQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDAuOWVtO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLDJCQUEyQjtDQUMzQix3Q0FBd0M7Q0FDeEMsZUFBZTtDQUNm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aEI7dUJBQ3FCO0NBQ3RCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQzs7SUFFRzs7Q0FFSDtFQUNDLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LyogZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiOyAqL1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdC8qIHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbmh0bWwge1xcblxcdC8qIGhlaWdodDogMTAwJTsgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG5cXHQvKiBib3JkZXI6IDRweCByZWQgc29saWQ7ICovXFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG5cXHQvKiBtYXJnaW46IDFlbTsgKi9cXG59XFxuXFxuLyogTEFZT1VUIEFORCBOQVYgKi9cXG5cXG4ubGF5b3V0IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xcblxcdC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5uYXYtYmFyIHtcXG5cXHQvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0LyogbWFyZ2luOiAxZW07ICovXFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAyZW07ICovXFxuXFx0LyogcGFkZGluZzogMXJlbTsgKi9cXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7ICovXFxuXFx0ei1pbmRleDogMTAwMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtYmFyLWl0ZW1zIHtcXG5cXHRib3JkZXI6IDFweCByZWQgc29saWQ7XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmE6aG92ZXIge1xcblxcdGNvbG9yOiByZ2IoNDAsIDEwNywgMTQzKTtcXG59XFxuXFxuYTpmb2N1cyB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIC5wcm9qZWN0LWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59ICovXFxuXFxuLyogLnByb2plY3RzLWFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdG1hcmdpbjogMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LWJveCBwIHtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC10aHVtYm5haWwge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn0gKi9cXG5cXG4ubGFuZGluZy1wYWdlIHtcXG5cXHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xcblxcdC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcblxcdC8qIHdpZHRoOiAxMDAlOyAqL1xcblxcdC8qIGhlaWdodDogMTAwdmg7ICovXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcblxcdC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogZml4ZWQ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR6LWluZGV4OiAtMTsgKi9cXG59XFxuXFxuLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuXFx0LyogZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0bWFyZ2luOiAwOyAqL1xcblxcblxcdC8qIGRpc3BsYXk6IGJsb2NrO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb250YWluO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Ym9yZGVyOiAxcHggYmx1ZSBzb2xpZDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmZvb3RlciB7XFxuXFx0LyogYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgKi9cXG5cXHQvKiBjb2xvcjogI2JiYmJiYjsgKi9cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG59XFxuXFxuLnByb2plY3QtcGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5mZWF0LWltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LyogaGVpZ2h0OiA0NXZoOyAqL1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogYWxsIHRodW1ibW5haWwgaW4gYSBncmlkKi9cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IDNweCBncmVlbiBzb2xpZDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuXFx0Z3JpZC1nYXA6IDIwcHg7XFxuXFx0bWFyZ2luOiAycmVtO1xcbn0gKi9cXG5cXG4uY2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcblxcdHBhZGRpbmctbGVmdDogMTUlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDE1JTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pbmZvLXRleHQge1xcblxcdGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRsaW5lLWhlaWdodDogMWVtO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWQge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94OyAvKiBOb3QgbmVlZGVkIGlmIGF1dG9wcmVmaXhpbmcgKi9cXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IC0zMHB4OyAqL1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm15LW1hc29ucnktZ3JpZF9jb2x1bW4ge1xcblxcdC8qIHBhZGRpbmctbGVmdDogMzBweDsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAqL1xcbn1cXG5cXG4ubWFzb25yeS1pbWcge1xcblxcdC8qIG1hcmdpbi1ib3R0b206IC01cHg7ICovXFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAwLjZlbTtcXG5cXHRtYXJnaW4tdG9wOiAtNXB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmltZy1ncmlkIDpsYXN0LWNoaWxkIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbi5uYXYtcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiAtMS41cmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtcyB7XFxuXFx0cGFkZGluZy1yaWdodDogMC4ycmVtO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Lyogb3BhY2l0eTogMDsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIiB8XFxcIjtcXG59XFxuLnByb2plY3QtbGlzdC1pdGVtcyA6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zOmhvdmVyIHtcXG5cXHQvKiBvcGFjaXR5OiAxOyAqL1xcblxcdC8qIHZpc2liaWxpdHk6IHZpc2libGU7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0LyogbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHg7ICovXFxuXFx0fVxcblxcblxcdC5pbmZvLXRleHQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDAuOWVtO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})