/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_blocks__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__);\n/**\r\n * BLOCK: floating-callout\r\n *\r\n * Registering a basic block with Gutenberg.\r\n * Simple block, renders and saves the same content without any interactivity.\r\n */\n\n//  Import CSS.\n\n\n\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar attributes = {\n\t// Parsed automatically from hidden JSON literal block comments in the post_content\n\ttextColor: {\n\t\ttype: 'string'\n\t},\n\twidth: {\n\t\ttype: 'string',\n\t\tdefault: '50'\n\t}\n\t/**\r\n  * Register: aa Gutenberg Block.\r\n  *\r\n  * Registers a new block provided a unique name and an object defining its\r\n  * behavior. Once registered, the block is made editor as an option to any\r\n  * editor interface where blocks are implemented.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/\r\n  * @param  {string}   name     Block name.\r\n  * @param  {Object}   settings Block settings.\r\n  * @return {?WPBlock}          The block, if it has been successfully\r\n  *                             registered; otherwise `undefined`.\r\n  */\n};registerBlockType('cgb/block-floating-callout', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('floating-callout - CGB Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Floating Callout'), __('Add a promotional callout, 30% to 50% of content width, float right'), __('callout, sidebar, float')],\n\n\t/**\r\n  * The edit function describes the structure of your block in the context of the editor.\r\n  * This represents what the editor will render when the block is used.\r\n  *\r\n  * The \"edit\" property must be a valid function.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-block-cgb-block-floating-callout'></p>.\n\t\tvar isSelected = props.isSelected,\n\t\t    attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar textColor = attributes.textColor,\n\t\t    width = attributes.width;\n\t\t/*\t\t\r\n  \t\tfunction calloutInspector() {\r\n  \t\t\treturn ( <InspectorControls>\r\n          <div>\r\n            <h2>{__('Text Color', 'example')}</h2>\r\n            <BaseControl>\r\n              <ColorPalette \r\n                value={textColor}\r\n                onChange={(textColor) => setAttributes({ textColor })} />\r\n              </BaseControl>\r\n          </div>\r\n        </InspectorCon0ols>\r\n  );\t\t}\r\n  */\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ 'class': 'calloutwrapper' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'calloutheader' },\n\t\t\t\t'Click here to focus on callout sidebar content.',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'form',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'select',\n\t\t\t\t\t\t{ onChange: function onChange(width) {\n\t\t\t\t\t\t\t\treturn setAttributes({ width: width });\n\t\t\t\t\t\t\t}, defaultValue: width },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: '50' },\n\t\t\t\t\t\t\t'50%'\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: '45' },\n\t\t\t\t\t\t\t'45%'\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: '40' },\n\t\t\t\t\t\t\t'40%'\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: '35' },\n\t\t\t\t\t\t\t'35%'\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t{ value: '35' },\n\t\t\t\t\t\t\t'35%'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: props.className, style: { width: width.value + '%' } },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_editor__[\"InnerBlocks\"], null)\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\r\n <form>\r\n <input type=\"text\" defaultValue={textColor} />\r\n </form>\r\n <div class=\"placeholder\">\r\n \t{\r\n \t\tisSelected && calloutInspector()\r\n \t\t}\r\n \n  * The save function defines the way in which the different attributes should be combined\r\n  * into the final markup, which is then serialized by Gutenberg into post_content.\r\n  *\r\n  * The \"save\" property must be specified and must be a valid functiprops.attributes.on.\r\n  *\r\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\r\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className, style: { width: props.attributes.width.value + '%' } },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_editor__[\"InnerBlocks\"].Content, null)\n\t\t);\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCTE9DSzogZmxvYXRpbmctY2FsbG91dFxyXG4gKlxyXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxyXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cclxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCB7IElubmVyQmxvY2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG5pbXBvcnQgeyBDb2xvclBhbGV0dGUsIEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgYXR0cmlidXRlcyA9IHtcblx0Ly8gUGFyc2VkIGF1dG9tYXRpY2FsbHkgZnJvbSBoaWRkZW4gSlNPTiBsaXRlcmFsIGJsb2NrIGNvbW1lbnRzIGluIHRoZSBwb3N0X2NvbnRlbnRcblx0dGV4dENvbG9yOiB7XG5cdFx0dHlwZTogJ3N0cmluZydcblx0fSxcblx0d2lkdGg6IHtcblx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRkZWZhdWx0OiAnNTAnXG5cdH1cblx0LyoqXHJcbiAgKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxyXG4gICpcclxuICAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXHJcbiAgKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxyXG4gICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxyXG4gICpcclxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xyXG4gICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXHJcbiAgKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXHJcbiAgKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcclxuICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXHJcbiAgKi9cbn07cmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1mbG9hdGluZy1jYWxsb3V0Jywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdmbG9hdGluZy1jYWxsb3V0IC0gQ0dCIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdGbG9hdGluZyBDYWxsb3V0JyksIF9fKCdBZGQgYSBwcm9tb3Rpb25hbCBjYWxsb3V0LCAzMCUgdG8gNTAlIG9mIGNvbnRlbnQgd2lkdGgsIGZsb2F0IHJpZ2h0JyksIF9fKCdjYWxsb3V0LCBzaWRlYmFyLCBmbG9hdCcpXSxcblxuXHQvKipcclxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cclxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cclxuICAqXHJcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxyXG4gICpcclxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cclxuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0Ly8gQ3JlYXRlcyBhIDxwIGNsYXNzPSd3cC1ibG9jay1jZ2ItYmxvY2stZmxvYXRpbmctY2FsbG91dCc+PC9wPi5cblx0XHR2YXIgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblx0XHR2YXIgdGV4dENvbG9yID0gYXR0cmlidXRlcy50ZXh0Q29sb3IsXG5cdFx0ICAgIHdpZHRoID0gYXR0cmlidXRlcy53aWR0aDtcblx0XHQvKlx0XHRcclxuICBcdFx0ZnVuY3Rpb24gY2FsbG91dEluc3BlY3RvcigpIHtcclxuICBcdFx0XHRyZXR1cm4gKCA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e19fKCdUZXh0IENvbG9yJywgJ2V4YW1wbGUnKX08L2gyPlxyXG4gICAgICAgICAgICA8QmFzZUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRleHRDb2xvcikgPT4gc2V0QXR0cmlidXRlcyh7IHRleHRDb2xvciB9KX0gLz5cclxuICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9JbnNwZWN0b3JDb24wb2xzPlxyXG4gICk7XHRcdH1cclxuICAqL1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyAnY2xhc3MnOiAnY2FsbG91dHdyYXBwZXInIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7ICdjbGFzcyc6ICdjYWxsb3V0aGVhZGVyJyB9LFxuXHRcdFx0XHQnQ2xpY2sgaGVyZSB0byBmb2N1cyBvbiBjYWxsb3V0IHNpZGViYXIgY29udGVudC4nLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2Zvcm0nLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J3NlbGVjdCcsXG5cdFx0XHRcdFx0XHR7IG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh3aWR0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgd2lkdGg6IHdpZHRoIH0pO1xuXHRcdFx0XHRcdFx0XHR9LCBkZWZhdWx0VmFsdWU6IHdpZHRoIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdvcHRpb24nLFxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnNTAnIH0sXG5cdFx0XHRcdFx0XHRcdCc1MCUnXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnb3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJzQ1JyB9LFxuXHRcdFx0XHRcdFx0XHQnNDUlJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J29wdGlvbicsXG5cdFx0XHRcdFx0XHRcdHsgdmFsdWU6ICc0MCcgfSxcblx0XHRcdFx0XHRcdFx0JzQwJSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdvcHRpb24nLFxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnMzUnIH0sXG5cdFx0XHRcdFx0XHRcdCczNSUnXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnb3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJzM1JyB9LFxuXHRcdFx0XHRcdFx0XHQnMzUlJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsIHN0eWxlOiB7IHdpZHRoOiB3aWR0aC52YWx1ZSArICclJyB9IH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2NrcywgbnVsbClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxyXG4gPGZvcm0+XHJcbiA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RleHRDb2xvcn0gLz5cclxuIDwvZm9ybT5cclxuIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlclwiPlxyXG4gXHR7XHJcbiBcdFx0aXNTZWxlY3RlZCAmJiBjYWxsb3V0SW5zcGVjdG9yKClcclxuIFx0XHR9XHJcbiBcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxyXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxyXG4gICpcclxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aXByb3BzLmF0dHJpYnV0ZXMub24uXHJcbiAgKlxyXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xyXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLCBzdHlsZTogeyB3aWR0aDogcHJvcHMuYXR0cmlidXRlcy53aWR0aC52YWx1ZSArICclJyB9IH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG5cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************!*\
  !*** external "wp.editor" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: InnerBlocks */
/***/ (function(module, exports) {

module.exports = wp.editor;

/***/ }),
/* 5 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),
/* 6 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ })
/******/ ]);