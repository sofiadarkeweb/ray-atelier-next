webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n\\tmargin: 0 auto;\\n\\tpadding: 0px;\\n\\t-moz-box-sizing: border-box;\\n\\t     box-sizing: border-box;\\n}\\n\\nbody {\\n\\tbackground: white;\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n}\\n\\nhtml {\\n\\t/* height: 100%; */\\n}\\n\\nheader {\\n\\t/* width: 100vw; */\\n\\t/* height: 2rem; */\\n\\t/* background-color: yellow; */\\n\\n\\t/* margin: 1em; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\t/* display: flex; */\\n\\t/* flex-direction: column; */\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\tpadding-top: 1em;\\n\\tpadding-bottom: 1em;\\n\\n\\t/* padding: 1rem; */\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tz-index: 1000;\\n\\twidth: 100%;\\n\\t-moz-box-pack: justify;\\n\\t     justify-content: space-between;\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\n\\t/* position: relative; */\\n\\tbackground-color: white;\\n}\\n\\n.nav-bar-items {\\n\\t/* border: 1px red solid; */\\n\\tmargin: 0;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\t-moz-box-orient: horizontal;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n}\\n\\n.text-section {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tpadding-top: 5rem;\\n}\\n\\n.project-page {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t-moz-box-align: center;\\n\\t     align-items: center;\\n\\t-moz-box-orient: vertical;\\n\\t-moz-box-direction: normal;\\n\\t     flex-direction: column;\\n\\talign-items: center;\\n\\t-moz-box-pack: center;\\n\\t     justify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\t/* height: 45vh; */\\n\\tbackground-position: center center;\\n\\t-webkit-object-fit: cover;\\n\\t        object-fit: cover;\\n\\toverflow: hidden;\\n\\t-webkit-object-position: center;\\n\\t        object-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\t/* padding-left: 15%;\\n\\tpadding-right: 15%; */\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid { /* Not needed if autoprefixing */ /* Not needed if autoprefixing */\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: -moz-box;\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap\\\");\\n\\n* {\\n\\tmargin: 0 auto;\\n\\tpadding: 0px;\\n\\tbox-sizing: border-box;\\n}\\n\\nbody {\\n\\tbackground: white;\\n\\tfont-family: \\\"Cormorant Garamond\\\", serif;\\n\\tfont-size: 1rem;\\n}\\n\\nhtml {\\n\\t/* height: 100%; */\\n}\\n\\nheader {\\n\\t/* width: 100vw; */\\n\\t/* height: 2rem; */\\n\\t/* background-color: yellow; */\\n\\n\\t/* margin: 1em; */\\n}\\n\\n/* LAYOUT AND NAV */\\n\\n.layout {\\n\\tmin-height: 100vh;\\n\\t/* display: flex; */\\n\\t/* flex-direction: column; */\\n}\\n\\n.nav-bar {\\n\\t/* margin: 0 auto; */\\n\\tposition: fixed;\\n\\tpadding-top: 1em;\\n\\tpadding-bottom: 1em;\\n\\n\\t/* padding: 1rem; */\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tz-index: 1000;\\n\\twidth: 100%;\\n\\tjustify-content: space-between;\\n\\tdisplay: flex;\\n\\n\\t/* position: relative; */\\n\\tbackground-color: white;\\n}\\n\\n.nav-bar-items {\\n\\t/* border: 1px red solid; */\\n\\tmargin: 0;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: black;\\n\\tflex-direction: row;\\n\\tcursor: pointer;\\n}\\na:hover {\\n\\tcolor: rgb(40, 107, 143);\\n}\\n\\na:focus {\\n\\ttext-decoration: underline;\\n}\\n\\n/* .project-list {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n} */\\n\\n/* .projects-area {\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin: 1rem;\\n\\tgap: 1rem;\\n} */\\n\\n/* .project-box p {\\n\\tfont-size: 0.8em;\\n} */\\n\\n/* .project-thumbnail {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n} */\\n\\n.landing-page {\\n\\t/* display: flex; */\\n\\t/* justify-content: center; */\\n\\t/* width: 100%; */\\n\\t/* height: 100vh; */\\n\\t/* position: relative; */\\n\\t/* border: 1px red solid; */\\n\\t/* position: fixed;\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\toverflow: hidden;\\n\\tz-index: -1; */\\n}\\n\\n.hero-img-container {\\n\\t/* display: block;\\n\\toverflow: hidden;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\tbox-sizing: border-box;\\n\\tmargin: 0; */\\n\\n\\t/* display: block;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: contain;\\n\\toverflow: hidden;\\n\\tborder: 1px blue solid;\\n\\tposition: relative; */\\n}\\n\\nfooter {\\n\\t/* background: whitesmoke; */\\n\\t/* color: #bbbbbb; */\\n\\tpadding: 20px;\\n\\ttext-align: center;\\n\\tmargin-top: auto;\\n\\tfont-size: 0.8em;\\n}\\n\\n.page-content {\\n}\\n\\n.text-section {\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tpadding-top: 5rem;\\n}\\n\\n.project-page {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\t/* text-align: center; */\\n}\\n\\n.feat-img {\\n\\twidth: 100%;\\n\\t/* height: 45vh; */\\n\\tbackground-position: center center;\\n\\tobject-fit: cover;\\n\\toverflow: hidden;\\n\\tobject-position: center;\\n}\\n\\n/* all thumbmnail in a grid*/\\n/* .project-list {\\n\\tborder: 3px green solid;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr;\\n\\n\\tgrid-gap: 20px;\\n\\tmargin: 2rem;\\n} */\\n\\n.card {\\n\\tmargin-top: 2rem;\\n\\tmargin-right: 10px;\\n\\tmargin-left: 10px;\\n}\\n\\n.project-content {\\n\\t/* padding-left: 15%;\\n\\tpadding-right: 15%; */\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 4rem;\\n}\\n\\n.info-text {\\n\\tcolor: rgb(58, 58, 58);\\n\\tfont-size: 0.8em;\\n\\tline-height: 1em;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\n.my-masonry-grid {\\n\\tdisplay: -webkit-box; /* Not needed if autoprefixing */\\n\\tdisplay: -ms-flexbox; /* Not needed if autoprefixing */\\n\\tdisplay: flex;\\n\\t/* margin-right: -30px; */\\n\\twidth: auto;\\n\\tmargin: 10px;\\n}\\n\\n.my-masonry-grid_column {\\n\\t/* padding-left: 30px; */\\n\\t/* background-clip: padding-box; */\\n}\\n\\n.masonry-img {\\n\\t/* margin-bottom: -5px; */\\n\\tmargin: 1rem;\\n}\\n\\n.caption {\\n\\tfont-size: 0.6em;\\n\\tmargin-top: -5px;\\n\\tfont-style: italic;\\n}\\n\\n.img-grid :last-child {\\n\\t/* border: 1px red solid; */\\n}\\n\\n.nav-project-list {\\n\\tdisplay: flex;\\n\\tpadding-left: 10%;\\n\\tpadding-right: 10%;\\n\\tmargin-top: -1.5rem;\\n\\tflex-wrap: wrap;\\n}\\n\\n.project-list-items {\\n\\tpadding-right: 0.2rem;\\n\\twhite-space: nowrap;\\n\\t/* opacity: 0; */\\n\\t/* visibility: hidden; */\\n}\\n\\n.project-list-items ::after {\\n\\tcontent: \\\" |\\\";\\n}\\n.project-list-items ::before {\\n\\tcontent: \\\" \\\";\\n}\\n\\n.project-list-items:hover {\\n\\t/* opacity: 1; */\\n\\t/* visibility: visible; */\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-top: 2rem;\\n\\t\\t/* margin-right: -10px;\\n\\t\\tmargin-left: -10px; */\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\\n@media screen and (max-width: 500px) {\\n\\t/* .my-masonry-grid {\\n\\t\\tmargin-right: -30px;\\n\\t} */\\n\\n\\t.card {\\n\\t\\tmargin-right: -10px;\\n\\t\\tmargin-left: -10px;\\n\\t}\\n\\n\\t.info-text {\\n\\t\\tfont-size: 0.9em;\\n\\t\\tmargin-left: 0.5em;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RCw4QkFBOEIsUUFBUywrRUFBK0UsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE0sOEJBQThCLFFBQVMsa0dBQWtHO0FBQ3pJO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSxtQkFBbUIsaUJBQWlCLGdDQUFnQyxnQ0FBZ0MsR0FBRyxVQUFVLHNCQUFzQiwrQ0FBK0Msb0JBQW9CLEdBQUcsVUFBVSxvQkFBb0IsTUFBTSxZQUFZLG9CQUFvQix1QkFBdUIsbUNBQW1DLHdCQUF3QixNQUFNLHFDQUFxQyxzQkFBc0IscUJBQXFCLGlDQUFpQyxNQUFNLGNBQWMsc0JBQXNCLHVCQUF1QixxQkFBcUIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsMkJBQTJCLHdDQUF3QyxzQkFBc0Isa0JBQWtCLDRCQUE0QiwrQkFBK0IsR0FBRyxvQkFBb0IsNkJBQTZCLGlCQUFpQixHQUFHLE9BQU8sMEJBQTBCLGlCQUFpQixnQ0FBZ0MsK0JBQStCLDZCQUE2QixvQkFBb0IsR0FBRyxXQUFXLDZCQUE2QixHQUFHLGFBQWEsK0JBQStCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsR0FBRywwQkFBMEIsa0JBQWtCLG9CQUFvQixpQkFBaUIsY0FBYyxHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyw4QkFBOEIsZ0JBQWdCLGlCQUFpQixzQkFBc0IscUJBQXFCLEdBQUcsc0JBQXNCLHFCQUFxQixrQ0FBa0Msc0JBQXNCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLDBCQUEwQixrQkFBa0IsaUJBQWlCLHFCQUFxQixnQkFBZ0IsTUFBTSx5QkFBeUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZ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LGdCQUFnQiwwQkFBMEIseUJBQXlCLEtBQUssa0JBQWtCLHVCQUF1Qix5QkFBeUIsS0FBSyxHQUFHLHFCQUFxQjtBQUNuMVg7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0cGFkZGluZzogMHB4O1xcblxcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5odG1sIHtcXG5cXHQvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbmhlYWRlciB7XFxuXFx0Lyogd2lkdGg6IDEwMHZ3OyAqL1xcblxcdC8qIGhlaWdodDogMnJlbTsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxuXFxuXFx0LyogbWFyZ2luOiAxZW07ICovXFxufVxcblxcbi8qIExBWU9VVCBBTkQgTkFWICovXFxuXFxuLmxheW91dCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0LyogZGlzcGxheTogZmxleDsgKi9cXG5cXHQvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuXFx0LyogbWFyZ2luOiAwIGF1dG87ICovXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHBhZGRpbmctdG9wOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFlbTtcXG5cXG5cXHQvKiBwYWRkaW5nOiAxcmVtOyAqL1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHR6LWluZGV4OiAxMDAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtYmFyLWl0ZW1zIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG5cXHQtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5hOmhvdmVyIHtcXG5cXHRjb2xvcjogcmdiKDQwLCAxMDcsIDE0Myk7XFxufVxcblxcbmE6Zm9jdXMge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0cy1hcmVhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRtYXJnaW46IDFyZW07XFxuXFx0Z2FwOiAxcmVtO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC1ib3ggcCB7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG59ICovXFxuXFxuLyogLnByb2plY3QtdGh1bWJuYWlsIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59ICovXFxuXFxuLmxhbmRpbmctcGFnZSB7XFxuXFx0LyogZGlzcGxheTogZmxleDsgKi9cXG5cXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG5cXHQvKiB3aWR0aDogMTAwJTsgKi9cXG5cXHQvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuXFx0LyogcG9zaXRpb246IGZpeGVkO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0ei1pbmRleDogLTE7ICovXFxufVxcblxcbi5oZXJvLWltZy1jb250YWluZXIge1xcblxcdC8qIGRpc3BsYXk6IGJsb2NrO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG1hcmdpbjogMDsgKi9cXG5cXG5cXHQvKiBkaXNwbGF5OiBibG9jaztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b2JqZWN0LWZpdDogY29udGFpbjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJvcmRlcjogMXB4IGJsdWUgc29saWQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG5mb290ZXIge1xcblxcdC8qIGJhY2tncm91bmQ6IHdoaXRlc21va2U7ICovXFxuXFx0LyogY29sb3I6ICNiYmJiYmI7ICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4ucGFnZS1jb250ZW50IHtcXG59XFxuXFxuLnRleHQtc2VjdGlvbiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMCU7XFxuXFx0cGFkZGluZy1yaWdodDogMTAlO1xcblxcdHBhZGRpbmctdG9wOiA1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0ICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0LW1vei1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4uZmVhdC1pbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC8qIGhlaWdodDogNDV2aDsgKi9cXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdC13ZWJraXQtb2JqZWN0LWZpdDogY292ZXI7XFxuXFx0ICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdC13ZWJraXQtb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0ICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLyogYWxsIHRodW1ibW5haWwgaW4gYSBncmlkKi9cXG4vKiAucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IDNweCBncmVlbiBzb2xpZDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuXFx0Z3JpZC1nYXA6IDIwcHg7XFxuXFx0bWFyZ2luOiAycmVtO1xcbn0gKi9cXG5cXG4uY2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcblxcdC8qIHBhZGRpbmctbGVmdDogMTUlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDE1JTsgKi9cXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi5pbmZvLXRleHQge1xcblxcdGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRsaW5lLWhlaWdodDogMWVtO1xcbn1cXG5cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWQgeyAvKiBOb3QgbmVlZGVkIGlmIGF1dG9wcmVmaXhpbmcgKi8gLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IC0zMHB4OyAqL1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm15LW1hc29ucnktZ3JpZF9jb2x1bW4ge1xcblxcdC8qIHBhZGRpbmctbGVmdDogMzBweDsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAqL1xcbn1cXG5cXG4ubWFzb25yeS1pbWcge1xcblxcdC8qIG1hcmdpbi1ib3R0b206IC01cHg7ICovXFxuXFx0bWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2FwdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAwLjZlbTtcXG5cXHRtYXJnaW4tdG9wOiAtNXB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmltZy1ncmlkIDpsYXN0LWNoaWxkIHtcXG5cXHQvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbi5uYXYtcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHRtYXJnaW4tdG9wOiAtMS41cmVtO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtcyB7XFxuXFx0cGFkZGluZy1yaWdodDogMC4ycmVtO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0Lyogb3BhY2l0eTogMDsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIiB8XFxcIjtcXG59XFxuLnByb2plY3QtbGlzdC1pdGVtcyA6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zOmhvdmVyIHtcXG5cXHQvKiBvcGFjaXR5OiAxOyAqL1xcblxcdC8qIHZpc2liaWxpdHk6IHZpc2libGU7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0LyogbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHg7ICovXFxuXFx0fVxcblxcblxcdC5pbmZvLXRleHQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LyogLm15LW1hc29ucnktZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzBweDtcXG5cXHR9ICovXFxuXFxuXFx0LmNhcmQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDAuOWVtO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLDJCQUFzQjtNQUF0QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsd0NBQXdDO0NBQ3hDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLDhCQUE4Qjs7Q0FFOUIsaUJBQWlCO0FBQ2xCOztBQUVBLG1CQUFtQjs7QUFFbkI7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjs7Q0FFbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFdBQVc7Q0FDWCxzQkFBOEI7TUFBOUIsOEJBQThCO0NBQzlCLGlCQUFhO0NBQWIsYUFBYTs7Q0FFYix3QkFBd0I7Q0FDeEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osMkJBQW1CO0NBQW5CLDBCQUFtQjtNQUFuQixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBOzs7R0FHRzs7QUFFSDs7Ozs7R0FLRzs7QUFFSDs7R0FFRzs7QUFFSDs7Ozs7R0FLRzs7QUFFSDtDQUNDLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQix3QkFBd0I7Q0FDeEIsMkJBQTJCO0NBQzNCOzs7O2VBSWM7QUFDZjs7QUFFQTtDQUNDOzs7Ozs7OzthQVFZOztDQUVaOzs7Ozs7O3NCQU9xQjtBQUN0Qjs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFhO0NBQWIsYUFBYTtDQUNiLHNCQUFtQjtNQUFuQixtQkFBbUI7Q0FDbkIseUJBQXNCO0NBQXRCLDBCQUFzQjtNQUF0QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHFCQUF1QjtNQUF2Qix1QkFBdUI7Q0FDdkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixrQ0FBa0M7Q0FDbEMseUJBQWlCO1NBQWpCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsK0JBQXVCO1NBQXZCLHVCQUF1QjtBQUN4Qjs7QUFFQSw0QkFBNEI7QUFDNUI7Ozs7Ozs7R0FPRzs7QUFFSDtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0M7c0JBQ3FCO0NBQ3JCLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQSxtQkFDdUIsZ0NBQWdDLEVBQ2hDLGdDQUFnQztDQUN0RCxpQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxpQkFBYTtDQUFiLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0M7O0lBRUc7O0NBRUg7RUFDQyxnQkFBZ0I7RUFDaEI7dUJBQ3FCO0NBQ3RCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQzs7SUFFRzs7Q0FFSDtFQUNDLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0cGFkZGluZzogMHB4O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5odG1sIHtcXG5cXHQvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbmhlYWRlciB7XFxuXFx0Lyogd2lkdGg6IDEwMHZ3OyAqL1xcblxcdC8qIGhlaWdodDogMnJlbTsgKi9cXG5cXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxuXFxuXFx0LyogbWFyZ2luOiAxZW07ICovXFxufVxcblxcbi8qIExBWU9VVCBBTkQgTkFWICovXFxuXFxuLmxheW91dCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0LyogZGlzcGxheTogZmxleDsgKi9cXG5cXHQvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuXFx0LyogbWFyZ2luOiAwIGF1dG87ICovXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHBhZGRpbmctdG9wOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFlbTtcXG5cXG5cXHQvKiBwYWRkaW5nOiAxcmVtOyAqL1xcblxcdHBhZGRpbmctbGVmdDogMTAlO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwJTtcXG5cXHR6LWluZGV4OiAxMDAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1iYXItaXRlbXMge1xcblxcdC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmE6aG92ZXIge1xcblxcdGNvbG9yOiByZ2IoNDAsIDEwNywgMTQzKTtcXG59XFxuXFxuYTpmb2N1cyB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIC5wcm9qZWN0LWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59ICovXFxuXFxuLyogLnByb2plY3RzLWFyZWEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdG1hcmdpbjogMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LWJveCBwIHtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC10aHVtYm5haWwge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn0gKi9cXG5cXG4ubGFuZGluZy1wYWdlIHtcXG5cXHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xcblxcdC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcblxcdC8qIHdpZHRoOiAxMDAlOyAqL1xcblxcdC8qIGhlaWdodDogMTAwdmg7ICovXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcblxcdC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogZml4ZWQ7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR6LWluZGV4OiAtMTsgKi9cXG59XFxuXFxuLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuXFx0LyogZGlzcGxheTogYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0bWFyZ2luOiAwOyAqL1xcblxcblxcdC8qIGRpc3BsYXk6IGJsb2NrO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvYmplY3QtZml0OiBjb250YWluO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Ym9yZGVyOiAxcHggYmx1ZSBzb2xpZDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmZvb3RlciB7XFxuXFx0LyogYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgKi9cXG5cXHQvKiBjb2xvcjogI2JiYmJiYjsgKi9cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbn1cXG5cXG4udGV4dC1zZWN0aW9uIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuXFx0cGFkZGluZy10b3A6IDVyZW07XFxufVxcblxcbi5wcm9qZWN0LXBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4uZmVhdC1pbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC8qIGhlaWdodDogNDV2aDsgKi9cXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi8qIGFsbCB0aHVtYm1uYWlsIGluIGEgZ3JpZCovXFxuLyogLnByb2plY3QtbGlzdCB7XFxuXFx0Ym9yZGVyOiAzcHggZ3JlZW4gc29saWQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcblxcdGdyaWQtZ2FwOiAyMHB4O1xcblxcdG1hcmdpbjogMnJlbTtcXG59ICovXFxuXFxuLmNhcmQge1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50IHtcXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDE1JTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxNSU7ICovXFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uaW5mby10ZXh0IHtcXG5cXHRjb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDFlbTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubXktbWFzb25yeS1ncmlkIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIE5vdCBuZWVkZWQgaWYgYXV0b3ByZWZpeGluZyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAtMzBweDsgKi9cXG5cXHR3aWR0aDogYXV0bztcXG5cXHRtYXJnaW46IDEwcHg7XFxufVxcblxcbi5teS1tYXNvbnJ5LWdyaWRfY29sdW1uIHtcXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDMwcHg7ICovXFxuXFx0LyogYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgKi9cXG59XFxuXFxuLm1hc29ucnktaW1nIHtcXG5cXHQvKiBtYXJnaW4tYm90dG9tOiAtNXB4OyAqL1xcblxcdG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNhcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMC42ZW07XFxuXFx0bWFyZ2luLXRvcDogLTVweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5pbWctZ3JpZCA6bGFzdC1jaGlsZCB7XFxuXFx0LyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbn1cXG5cXG4ubmF2LXByb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwJTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuXFx0bWFyZ2luLXRvcDogLTEuNXJlbTtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXMge1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdC8qIG9wYWNpdHk6IDA7ICovXFxuXFx0LyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW1zIDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCIgfFxcXCI7XFxufVxcbi5wcm9qZWN0LWxpc3QtaXRlbXMgOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtczpob3ZlciB7XFxuXFx0Lyogb3BhY2l0eTogMTsgKi9cXG5cXHQvKiB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC8qIC5teS1tYXNvbnJ5LWdyaWQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTMwcHg7XFxuXFx0fSAqL1xcblxcblxcdC5jYXJkIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdC8qIG1hcmdpbi1yaWdodDogLTEwcHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4OyAqL1xcblxcdH1cXG5cXG5cXHQuaW5mby10ZXh0IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41ZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC8qIC5teS1tYXNvbnJ5LWdyaWQge1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTMwcHg7XFxuXFx0fSAqL1xcblxcblxcdC5jYXJkIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMTBweDtcXG5cXHR9XFxuXFxuXFx0LmluZm8tdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjllbTtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41ZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})