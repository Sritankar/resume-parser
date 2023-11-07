/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unicode-trie";
exports.ids = ["vendor-chunks/unicode-trie"];
exports.modules = {

/***/ "(ssr)/./node_modules/unicode-trie/index.js":
/*!********************************************!*\
  !*** ./node_modules/unicode-trie/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const inflate = __webpack_require__(/*! tiny-inflate */ \"(ssr)/./node_modules/tiny-inflate/index.js\");\nconst { swap32LE } = __webpack_require__(/*! ./swap */ \"(ssr)/./node_modules/unicode-trie/swap.js\");\n\n// Shift size for getting the index-1 table offset.\nconst SHIFT_1 = 6 + 5;\n\n// Shift size for getting the index-2 table offset.\nconst SHIFT_2 = 5;\n\n// Difference between the two shift sizes,\n// for getting an index-1 offset from an index-2 offset. 6=11-5\nconst SHIFT_1_2 = SHIFT_1 - SHIFT_2;\n\n// Number of index-1 entries for the BMP. 32=0x20\n// This part of the index-1 table is omitted from the serialized form.\nconst OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;\n\n// Number of entries in an index-2 block. 64=0x40\nconst INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;\n\n// Mask for getting the lower bits for the in-index-2-block offset. */\nconst INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;\n\n// Shift size for shifting left the index array values.\n// Increases possible data size with 16-bit index values at the cost\n// of compactability.\n// This requires data blocks to be aligned by DATA_GRANULARITY.\nconst INDEX_SHIFT = 2;\n\n// Number of entries in a data block. 32=0x20\nconst DATA_BLOCK_LENGTH = 1 << SHIFT_2;\n\n// Mask for getting the lower bits for the in-data-block offset.\nconst DATA_MASK = DATA_BLOCK_LENGTH - 1;\n\n// The part of the index-2 table for U+D800..U+DBFF stores values for\n// lead surrogate code _units_ not code _points_.\n// Values for lead surrogate code _points_ are indexed with this portion of the table.\n// Length=32=0x20=0x400>>SHIFT_2. (There are 1024=0x400 lead surrogates.)\nconst LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;\nconst LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;\n\n// Count the lengths of both BMP pieces. 2080=0x820\nconst INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;\n\n// The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.\n// Length 32=0x20 for lead bytes C0..DF, regardless of SHIFT_2.\nconst UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;\nconst UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;  // U+0800 is the first code point after 2-byte UTF-8\n\n// The index-1 table, only used for supplementary code points, at offset 2112=0x840.\n// Variable length, for code points up to highStart, where the last single-value range starts.\n// Maximum length 512=0x200=0x100000>>SHIFT_1.\n// (For 0x100000 supplementary code points U+10000..U+10ffff.)\n//\n// The part of the index-2 table for supplementary code points starts\n// after this index-1 table.\n//\n// Both the index-1 table and the following part of the index-2 table\n// are omitted completely if there is only BMP data.\nconst INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;\n\n// The alignment size of a data block. Also the granularity for compaction.\nconst DATA_GRANULARITY = 1 << INDEX_SHIFT;\n\nclass UnicodeTrie {\n  constructor(data) {\n    const isBuffer = (typeof data.readUInt32BE === 'function') && (typeof data.slice === 'function');\n\n    if (isBuffer || data instanceof Uint8Array) {\n      // read binary format\n      let uncompressedLength;\n      if (isBuffer) {\n        this.highStart = data.readUInt32LE(0);\n        this.errorValue = data.readUInt32LE(4);\n        uncompressedLength = data.readUInt32LE(8);\n        data = data.slice(12);\n      } else {\n        const view = new DataView(data.buffer);\n        this.highStart = view.getUint32(0, true);\n        this.errorValue = view.getUint32(4, true);\n        uncompressedLength = view.getUint32(8, true);\n        data = data.subarray(12);\n      }\n\n      // double inflate the actual trie data\n      data = inflate(data, new Uint8Array(uncompressedLength));\n      data = inflate(data, new Uint8Array(uncompressedLength));\n\n      // swap bytes from little-endian\n      swap32LE(data);\n\n      this.data = new Uint32Array(data.buffer);\n\n    } else {\n      // pre-parsed data\n      ({ data: this.data, highStart: this.highStart, errorValue: this.errorValue } = data);\n    }\n  }\n\n  get(codePoint) {\n    let index;\n    if ((codePoint < 0) || (codePoint > 0x10ffff)) {\n      return this.errorValue;\n    }\n\n    if ((codePoint < 0xd800) || ((codePoint > 0xdbff) && (codePoint <= 0xffff))) {\n      // Ordinary BMP code point, excluding leading surrogates.\n      // BMP uses a single level lookup.  BMP index starts at offset 0 in the index.\n      // data is stored in the index array itself.\n      index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);\n      return this.data[index];\n    }\n\n    if (codePoint <= 0xffff) {\n      // Lead Surrogate Code Point.  A Separate index section is stored for\n      // lead surrogate code units and code points.\n      //   The main index has the code unit data.\n      //   For this function, we need the code point data.\n      index = (this.data[LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);\n      return this.data[index];\n    }\n\n    if (codePoint < this.highStart) {\n      // Supplemental code point, use two-level lookup.\n      index = this.data[(INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH) + (codePoint >> SHIFT_1)];\n      index = this.data[index + ((codePoint >> SHIFT_2) & INDEX_2_MASK)];\n      index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);\n      return this.data[index];\n    }\n\n    return this.data[this.data.length - DATA_GRANULARITY];\n  }\n}\n\nmodule.exports = UnicodeTrie;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pY29kZS10cmllL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBTyxDQUFDLGdFQUFjO0FBQ3RDLFFBQVEsV0FBVyxFQUFFLG1CQUFPLENBQUMseURBQVE7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0EsU0FBUywwRUFBMEU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3Blbi1yZXN1bWUvLi9ub2RlX21vZHVsZXMvdW5pY29kZS10cmllL2luZGV4LmpzPzI4OWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5mbGF0ZSA9IHJlcXVpcmUoJ3RpbnktaW5mbGF0ZScpO1xuY29uc3QgeyBzd2FwMzJMRSB9ID0gcmVxdWlyZSgnLi9zd2FwJyk7XG5cbi8vIFNoaWZ0IHNpemUgZm9yIGdldHRpbmcgdGhlIGluZGV4LTEgdGFibGUgb2Zmc2V0LlxuY29uc3QgU0hJRlRfMSA9IDYgKyA1O1xuXG4vLyBTaGlmdCBzaXplIGZvciBnZXR0aW5nIHRoZSBpbmRleC0yIHRhYmxlIG9mZnNldC5cbmNvbnN0IFNISUZUXzIgPSA1O1xuXG4vLyBEaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBzaGlmdCBzaXplcyxcbi8vIGZvciBnZXR0aW5nIGFuIGluZGV4LTEgb2Zmc2V0IGZyb20gYW4gaW5kZXgtMiBvZmZzZXQuIDY9MTEtNVxuY29uc3QgU0hJRlRfMV8yID0gU0hJRlRfMSAtIFNISUZUXzI7XG5cbi8vIE51bWJlciBvZiBpbmRleC0xIGVudHJpZXMgZm9yIHRoZSBCTVAuIDMyPTB4MjBcbi8vIFRoaXMgcGFydCBvZiB0aGUgaW5kZXgtMSB0YWJsZSBpcyBvbWl0dGVkIGZyb20gdGhlIHNlcmlhbGl6ZWQgZm9ybS5cbmNvbnN0IE9NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gMHgxMDAwMCA+PiBTSElGVF8xO1xuXG4vLyBOdW1iZXIgb2YgZW50cmllcyBpbiBhbiBpbmRleC0yIGJsb2NrLiA2ND0weDQwXG5jb25zdCBJTkRFWF8yX0JMT0NLX0xFTkdUSCA9IDEgPDwgU0hJRlRfMV8yO1xuXG4vLyBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4taW5kZXgtMi1ibG9jayBvZmZzZXQuICovXG5jb25zdCBJTkRFWF8yX01BU0sgPSBJTkRFWF8yX0JMT0NLX0xFTkdUSCAtIDE7XG5cbi8vIFNoaWZ0IHNpemUgZm9yIHNoaWZ0aW5nIGxlZnQgdGhlIGluZGV4IGFycmF5IHZhbHVlcy5cbi8vIEluY3JlYXNlcyBwb3NzaWJsZSBkYXRhIHNpemUgd2l0aCAxNi1iaXQgaW5kZXggdmFsdWVzIGF0IHRoZSBjb3N0XG4vLyBvZiBjb21wYWN0YWJpbGl0eS5cbi8vIFRoaXMgcmVxdWlyZXMgZGF0YSBibG9ja3MgdG8gYmUgYWxpZ25lZCBieSBEQVRBX0dSQU5VTEFSSVRZLlxuY29uc3QgSU5ERVhfU0hJRlQgPSAyO1xuXG4vLyBOdW1iZXIgb2YgZW50cmllcyBpbiBhIGRhdGEgYmxvY2suIDMyPTB4MjBcbmNvbnN0IERBVEFfQkxPQ0tfTEVOR1RIID0gMSA8PCBTSElGVF8yO1xuXG4vLyBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4tZGF0YS1ibG9jayBvZmZzZXQuXG5jb25zdCBEQVRBX01BU0sgPSBEQVRBX0JMT0NLX0xFTkdUSCAtIDE7XG5cbi8vIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBVK0Q4MDAuLlUrREJGRiBzdG9yZXMgdmFsdWVzIGZvclxuLy8gbGVhZCBzdXJyb2dhdGUgY29kZSBfdW5pdHNfIG5vdCBjb2RlIF9wb2ludHNfLlxuLy8gVmFsdWVzIGZvciBsZWFkIHN1cnJvZ2F0ZSBjb2RlIF9wb2ludHNfIGFyZSBpbmRleGVkIHdpdGggdGhpcyBwb3J0aW9uIG9mIHRoZSB0YWJsZS5cbi8vIExlbmd0aD0zMj0weDIwPTB4NDAwPj5TSElGVF8yLiAoVGhlcmUgYXJlIDEwMjQ9MHg0MDAgbGVhZCBzdXJyb2dhdGVzLilcbmNvbnN0IExTQ1BfSU5ERVhfMl9PRkZTRVQgPSAweDEwMDAwID4+IFNISUZUXzI7XG5jb25zdCBMU0NQX0lOREVYXzJfTEVOR1RIID0gMHg0MDAgPj4gU0hJRlRfMjtcblxuLy8gQ291bnQgdGhlIGxlbmd0aHMgb2YgYm90aCBCTVAgcGllY2VzLiAyMDgwPTB4ODIwXG5jb25zdCBJTkRFWF8yX0JNUF9MRU5HVEggPSBMU0NQX0lOREVYXzJfT0ZGU0VUICsgTFNDUF9JTkRFWF8yX0xFTkdUSDtcblxuLy8gVGhlIDItYnl0ZSBVVEYtOCB2ZXJzaW9uIG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvbGxvd3MgYXQgb2Zmc2V0IDIwODA9MHg4MjAuXG4vLyBMZW5ndGggMzI9MHgyMCBmb3IgbGVhZCBieXRlcyBDMC4uREYsIHJlZ2FyZGxlc3Mgb2YgU0hJRlRfMi5cbmNvbnN0IFVURjhfMkJfSU5ERVhfMl9PRkZTRVQgPSBJTkRFWF8yX0JNUF9MRU5HVEg7XG5jb25zdCBVVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gMHg4MDAgPj4gNjsgIC8vIFUrMDgwMCBpcyB0aGUgZmlyc3QgY29kZSBwb2ludCBhZnRlciAyLWJ5dGUgVVRGLThcblxuLy8gVGhlIGluZGV4LTEgdGFibGUsIG9ubHkgdXNlZCBmb3Igc3VwcGxlbWVudGFyeSBjb2RlIHBvaW50cywgYXQgb2Zmc2V0IDIxMTI9MHg4NDAuXG4vLyBWYXJpYWJsZSBsZW5ndGgsIGZvciBjb2RlIHBvaW50cyB1cCB0byBoaWdoU3RhcnQsIHdoZXJlIHRoZSBsYXN0IHNpbmdsZS12YWx1ZSByYW5nZSBzdGFydHMuXG4vLyBNYXhpbXVtIGxlbmd0aCA1MTI9MHgyMDA9MHgxMDAwMDA+PlNISUZUXzEuXG4vLyAoRm9yIDB4MTAwMDAwIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMgVSsxMDAwMC4uVSsxMGZmZmYuKVxuLy9cbi8vIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzIHN0YXJ0c1xuLy8gYWZ0ZXIgdGhpcyBpbmRleC0xIHRhYmxlLlxuLy9cbi8vIEJvdGggdGhlIGluZGV4LTEgdGFibGUgYW5kIHRoZSBmb2xsb3dpbmcgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZVxuLy8gYXJlIG9taXR0ZWQgY29tcGxldGVseSBpZiB0aGVyZSBpcyBvbmx5IEJNUCBkYXRhLlxuY29uc3QgSU5ERVhfMV9PRkZTRVQgPSBVVEY4XzJCX0lOREVYXzJfT0ZGU0VUICsgVVRGOF8yQl9JTkRFWF8yX0xFTkdUSDtcblxuLy8gVGhlIGFsaWdubWVudCBzaXplIG9mIGEgZGF0YSBibG9jay4gQWxzbyB0aGUgZ3JhbnVsYXJpdHkgZm9yIGNvbXBhY3Rpb24uXG5jb25zdCBEQVRBX0dSQU5VTEFSSVRZID0gMSA8PCBJTkRFWF9TSElGVDtcblxuY2xhc3MgVW5pY29kZVRyaWUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgY29uc3QgaXNCdWZmZXIgPSAodHlwZW9mIGRhdGEucmVhZFVJbnQzMkJFID09PSAnZnVuY3Rpb24nKSAmJiAodHlwZW9mIGRhdGEuc2xpY2UgPT09ICdmdW5jdGlvbicpO1xuXG4gICAgaWYgKGlzQnVmZmVyIHx8IGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAvLyByZWFkIGJpbmFyeSBmb3JtYXRcbiAgICAgIGxldCB1bmNvbXByZXNzZWRMZW5ndGg7XG4gICAgICBpZiAoaXNCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5oaWdoU3RhcnQgPSBkYXRhLnJlYWRVSW50MzJMRSgwKTtcbiAgICAgICAgdGhpcy5lcnJvclZhbHVlID0gZGF0YS5yZWFkVUludDMyTEUoNCk7XG4gICAgICAgIHVuY29tcHJlc3NlZExlbmd0aCA9IGRhdGEucmVhZFVJbnQzMkxFKDgpO1xuICAgICAgICBkYXRhID0gZGF0YS5zbGljZSgxMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGRhdGEuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5oaWdoU3RhcnQgPSB2aWV3LmdldFVpbnQzMigwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5lcnJvclZhbHVlID0gdmlldy5nZXRVaW50MzIoNCwgdHJ1ZSk7XG4gICAgICAgIHVuY29tcHJlc3NlZExlbmd0aCA9IHZpZXcuZ2V0VWludDMyKDgsIHRydWUpO1xuICAgICAgICBkYXRhID0gZGF0YS5zdWJhcnJheSgxMik7XG4gICAgICB9XG5cbiAgICAgIC8vIGRvdWJsZSBpbmZsYXRlIHRoZSBhY3R1YWwgdHJpZSBkYXRhXG4gICAgICBkYXRhID0gaW5mbGF0ZShkYXRhLCBuZXcgVWludDhBcnJheSh1bmNvbXByZXNzZWRMZW5ndGgpKTtcbiAgICAgIGRhdGEgPSBpbmZsYXRlKGRhdGEsIG5ldyBVaW50OEFycmF5KHVuY29tcHJlc3NlZExlbmd0aCkpO1xuXG4gICAgICAvLyBzd2FwIGJ5dGVzIGZyb20gbGl0dGxlLWVuZGlhblxuICAgICAgc3dhcDMyTEUoZGF0YSk7XG5cbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50MzJBcnJheShkYXRhLmJ1ZmZlcik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHJlLXBhcnNlZCBkYXRhXG4gICAgICAoeyBkYXRhOiB0aGlzLmRhdGEsIGhpZ2hTdGFydDogdGhpcy5oaWdoU3RhcnQsIGVycm9yVmFsdWU6IHRoaXMuZXJyb3JWYWx1ZSB9ID0gZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGNvZGVQb2ludCkge1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAoKGNvZGVQb2ludCA8IDApIHx8IChjb2RlUG9pbnQgPiAweDEwZmZmZikpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKChjb2RlUG9pbnQgPCAweGQ4MDApIHx8ICgoY29kZVBvaW50ID4gMHhkYmZmKSAmJiAoY29kZVBvaW50IDw9IDB4ZmZmZikpKSB7XG4gICAgICAvLyBPcmRpbmFyeSBCTVAgY29kZSBwb2ludCwgZXhjbHVkaW5nIGxlYWRpbmcgc3Vycm9nYXRlcy5cbiAgICAgIC8vIEJNUCB1c2VzIGEgc2luZ2xlIGxldmVsIGxvb2t1cC4gIEJNUCBpbmRleCBzdGFydHMgYXQgb2Zmc2V0IDAgaW4gdGhlIGluZGV4LlxuICAgICAgLy8gZGF0YSBpcyBzdG9yZWQgaW4gdGhlIGluZGV4IGFycmF5IGl0c2VsZi5cbiAgICAgIGluZGV4ID0gKHRoaXMuZGF0YVtjb2RlUG9pbnQgPj4gU0hJRlRfMl0gPDwgSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIERBVEFfTUFTSyk7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgLy8gTGVhZCBTdXJyb2dhdGUgQ29kZSBQb2ludC4gIEEgU2VwYXJhdGUgaW5kZXggc2VjdGlvbiBpcyBzdG9yZWQgZm9yXG4gICAgICAvLyBsZWFkIHN1cnJvZ2F0ZSBjb2RlIHVuaXRzIGFuZCBjb2RlIHBvaW50cy5cbiAgICAgIC8vICAgVGhlIG1haW4gaW5kZXggaGFzIHRoZSBjb2RlIHVuaXQgZGF0YS5cbiAgICAgIC8vICAgRm9yIHRoaXMgZnVuY3Rpb24sIHdlIG5lZWQgdGhlIGNvZGUgcG9pbnQgZGF0YS5cbiAgICAgIGluZGV4ID0gKHRoaXMuZGF0YVtMU0NQX0lOREVYXzJfT0ZGU0VUICsgKChjb2RlUG9pbnQgLSAweGQ4MDApID4+IFNISUZUXzIpXSA8PCBJTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgREFUQV9NQVNLKTtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPCB0aGlzLmhpZ2hTdGFydCkge1xuICAgICAgLy8gU3VwcGxlbWVudGFsIGNvZGUgcG9pbnQsIHVzZSB0d28tbGV2ZWwgbG9va3VwLlxuICAgICAgaW5kZXggPSB0aGlzLmRhdGFbKElOREVYXzFfT0ZGU0VUIC0gT01JVFRFRF9CTVBfSU5ERVhfMV9MRU5HVEgpICsgKGNvZGVQb2ludCA+PiBTSElGVF8xKV07XG4gICAgICBpbmRleCA9IHRoaXMuZGF0YVtpbmRleCArICgoY29kZVBvaW50ID4+IFNISUZUXzIpICYgSU5ERVhfMl9NQVNLKV07XG4gICAgICBpbmRleCA9IChpbmRleCA8PCBJTkRFWF9TSElGVCkgKyAoY29kZVBvaW50ICYgREFUQV9NQVNLKTtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIERBVEFfR1JBTlVMQVJJVFldO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pY29kZVRyaWU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unicode-trie/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/unicode-trie/swap.js":
/*!*******************************************!*\
  !*** ./node_modules/unicode-trie/swap.js ***!
  \*******************************************/
/***/ ((module) => {

eval("const isBigEndian = (new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x12);\n\nconst swap = (b, n, m) => {\n  let i = b[n];\n  b[n] = b[m];\n  b[m] = i;\n};\n\nconst swap32 = array => {\n  const len = array.length;\n  for (let i = 0; i < len; i += 4) {\n    swap(array, i, i + 3);\n    swap(array, i + 1, i + 2);\n  }\n};\n\nconst swap32LE = array => {\n  if (isBigEndian) {\n    swap32(array);\n  }\n};\n\nmodule.exports = {\n  swap32LE: swap32LE\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pY29kZS10cmllL3N3YXAuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuLXJlc3VtZS8uL25vZGVfbW9kdWxlcy91bmljb2RlLXRyaWUvc3dhcC5qcz9kODIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlzQmlnRW5kaWFuID0gKG5ldyBVaW50OEFycmF5KG5ldyBVaW50MzJBcnJheShbMHgxMjM0NTY3OF0pLmJ1ZmZlcilbMF0gPT09IDB4MTIpO1xuXG5jb25zdCBzd2FwID0gKGIsIG4sIG0pID0+IHtcbiAgbGV0IGkgPSBiW25dO1xuICBiW25dID0gYlttXTtcbiAgYlttXSA9IGk7XG59O1xuXG5jb25zdCBzd2FwMzIgPSBhcnJheSA9PiB7XG4gIGNvbnN0IGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAoYXJyYXksIGksIGkgKyAzKTtcbiAgICBzd2FwKGFycmF5LCBpICsgMSwgaSArIDIpO1xuICB9XG59O1xuXG5jb25zdCBzd2FwMzJMRSA9IGFycmF5ID0+IHtcbiAgaWYgKGlzQmlnRW5kaWFuKSB7XG4gICAgc3dhcDMyKGFycmF5KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN3YXAzMkxFOiBzd2FwMzJMRVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unicode-trie/swap.js\n");

/***/ })

};
;