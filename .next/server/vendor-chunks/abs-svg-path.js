/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/abs-svg-path";
exports.ids = ["vendor-chunks/abs-svg-path"];
exports.modules = {

/***/ "(ssr)/./node_modules/abs-svg-path/index.js":
/*!********************************************!*\
  !*** ./node_modules/abs-svg-path/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nmodule.exports = absolutize\n\n/**\n * redefine `path` with absolute coordinates\n *\n * @param {Array} path\n * @return {Array}\n */\n\nfunction absolutize(path){\n\tvar startX = 0\n\tvar startY = 0\n\tvar x = 0\n\tvar y = 0\n\n\treturn path.map(function(seg){\n\t\tseg = seg.slice()\n\t\tvar type = seg[0]\n\t\tvar command = type.toUpperCase()\n\n\t\t// is relative\n\t\tif (type != command) {\n\t\t\tseg[0] = command\n\t\t\tswitch (type) {\n\t\t\t\tcase 'a':\n\t\t\t\t\tseg[6] += x\n\t\t\t\t\tseg[7] += y\n\t\t\t\t\tbreak\n\t\t\t\tcase 'v':\n\t\t\t\t\tseg[1] += y\n\t\t\t\t\tbreak\n\t\t\t\tcase 'h':\n\t\t\t\t\tseg[1] += x\n\t\t\t\t\tbreak\n\t\t\t\tdefault:\n\t\t\t\t\tfor (var i = 1; i < seg.length;) {\n\t\t\t\t\t\tseg[i++] += x\n\t\t\t\t\t\tseg[i++] += y\n\t\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// update cursor state\n\t\tswitch (command) {\n\t\t\tcase 'Z':\n\t\t\t\tx = startX\n\t\t\t\ty = startY\n\t\t\t\tbreak\n\t\t\tcase 'H':\n\t\t\t\tx = seg[1]\n\t\t\t\tbreak\n\t\t\tcase 'V':\n\t\t\t\ty = seg[1]\n\t\t\t\tbreak\n\t\t\tcase 'M':\n\t\t\t\tx = startX = seg[1]\n\t\t\t\ty = startY = seg[2]\n\t\t\t\tbreak\n\t\t\tdefault:\n\t\t\t\tx = seg[seg.length - 2]\n\t\t\t\ty = seg[seg.length - 1]\n\t\t}\n\n\t\treturn seg\n\t})\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYWJzLXN2Zy1wYXRoL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3Blbi1yZXN1bWUvLi9ub2RlX21vZHVsZXMvYWJzLXN2Zy1wYXRoL2luZGV4LmpzP2FiNzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IGFic29sdXRpemVcblxuLyoqXG4gKiByZWRlZmluZSBgcGF0aGAgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIGFic29sdXRpemUocGF0aCl7XG5cdHZhciBzdGFydFggPSAwXG5cdHZhciBzdGFydFkgPSAwXG5cdHZhciB4ID0gMFxuXHR2YXIgeSA9IDBcblxuXHRyZXR1cm4gcGF0aC5tYXAoZnVuY3Rpb24oc2VnKXtcblx0XHRzZWcgPSBzZWcuc2xpY2UoKVxuXHRcdHZhciB0eXBlID0gc2VnWzBdXG5cdFx0dmFyIGNvbW1hbmQgPSB0eXBlLnRvVXBwZXJDYXNlKClcblxuXHRcdC8vIGlzIHJlbGF0aXZlXG5cdFx0aWYgKHR5cGUgIT0gY29tbWFuZCkge1xuXHRcdFx0c2VnWzBdID0gY29tbWFuZFxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2EnOlxuXHRcdFx0XHRcdHNlZ1s2XSArPSB4XG5cdFx0XHRcdFx0c2VnWzddICs9IHlcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRjYXNlICd2Jzpcblx0XHRcdFx0XHRzZWdbMV0gKz0geVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdGNhc2UgJ2gnOlxuXHRcdFx0XHRcdHNlZ1sxXSArPSB4XG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHNlZy5sZW5ndGg7KSB7XG5cdFx0XHRcdFx0XHRzZWdbaSsrXSArPSB4XG5cdFx0XHRcdFx0XHRzZWdbaSsrXSArPSB5XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHVwZGF0ZSBjdXJzb3Igc3RhdGVcblx0XHRzd2l0Y2ggKGNvbW1hbmQpIHtcblx0XHRcdGNhc2UgJ1onOlxuXHRcdFx0XHR4ID0gc3RhcnRYXG5cdFx0XHRcdHkgPSBzdGFydFlcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ0gnOlxuXHRcdFx0XHR4ID0gc2VnWzFdXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdWJzpcblx0XHRcdFx0eSA9IHNlZ1sxXVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnTSc6XG5cdFx0XHRcdHggPSBzdGFydFggPSBzZWdbMV1cblx0XHRcdFx0eSA9IHN0YXJ0WSA9IHNlZ1syXVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0eCA9IHNlZ1tzZWcubGVuZ3RoIC0gMl1cblx0XHRcdFx0eSA9IHNlZ1tzZWcubGVuZ3RoIC0gMV1cblx0XHR9XG5cblx0XHRyZXR1cm4gc2VnXG5cdH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/abs-svg-path/index.js\n");

/***/ })

};
;