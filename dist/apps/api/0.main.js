exports.ids = [0];
exports.modules = {

/***/ "./node_modules/cross-fetch/dist/node-ponyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/node-ponyfill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nodeFetch = __webpack_require__(/*! node-fetch */ "node-fetch");
var realFetch = nodeFetch.default || nodeFetch;
var fetch = function (url, options) {
    // Support schemaless URIs on the server for parity with the browser.
    // Ex: //github.com/ -> https://github.com/
    if (/^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return realFetch.call(this, url, options);
};
module.exports = exports = fetch;
exports.fetch = fetch;
exports.Headers = nodeFetch.Headers;
exports.Request = nodeFetch.Request;
exports.Response = nodeFetch.Response;
// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch;


/***/ })

};;
//# sourceMappingURL=0.main.js.map