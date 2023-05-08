/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// Hamburger Menu\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\tconst menu = document.querySelector('.menu'),\r\n\t\tmenuItem = document.querySelectorAll('.menu_item'),\r\n\t\thamburger = document.querySelector('.hamburger');\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\thamburger.classList.toggle('hamburger_active');\r\n\t\tmenu.classList.toggle('menu_active');\r\n\t});\r\n\r\n\tmenuItem.forEach(item => {\r\n\t\titem.addEventListener('click', () => {\r\n\t\t\thamburger.classList.toggle('hamburger_active');\r\n\t\t\tmenu.classList.toggle('menu_active');\r\n\t\t})\r\n\t})\r\n})\r\n\r\nlet readMoreBtn = document.querySelector(\".js-btn-menu\"),\r\n\treadMoreContent = document.querySelector(\".js-description-info\"),\r\n\thamburgerLink = document.querySelector(\".hamburger__link\");\r\n\r\nreadMoreBtn.addEventListener(\"click\", function (event) {\r\n\tevent.preventDefault();\r\n\t// readMoreContent.classList.toggle(\"js-readmore-show\");\r\n\thamburgerLink.textContent = hamburgerLink.textContent === 'Меню' ? 'Закрыть' : 'Меню';\r\n});\r\n\r\n// Tabs\r\n$('.tabs-wrapper').each(function () {\r\n\tlet ths = $(this);\r\n\tths.find('.tab-item').not(':first').hide();\r\n\tths.find('.tab').click(function () {\r\n\t\tths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');\r\n\t\tths.find('.tab-item').hide().eq($(this).index()).fadeIn()\r\n\t}).eq(0).addClass('active');\r\n});\r\n\r\n// Calculator\r\nconst range = document.querySelectorAll('.tab');\r\nconst checkboxCalculator = document.querySelectorAll('calculator-checkbox');\r\n\r\nconst ranges = [\r\n\t{\r\n\t\tname: 'option1',\r\n\t\tprices: 9500\r\n\t},\r\n\t{\r\n\t\tname: 'option2',\r\n\t\tprices: 11400\r\n\t},\r\n\t{\r\n\t\tname: 'option3',\r\n\t\tprices: 15200\r\n\t},\r\n\t{\r\n\t\tname: 'option4',\r\n\t\tprices: 19000\r\n\t},\r\n\t{\r\n\t\tname: 'option5',\r\n\t\tprices: 19000\r\n\t},\r\n]\r\n\r\nlet currentRange = ranges[0].prices;\r\n\r\nfor (let rangeItem of range) {\r\n\trangeItem.addEventListener('click', () => {\r\n\t\ttakeActiveRange(rangeItem);\r\n\t})\r\n}\r\n\r\nconst takeActiveRange = currentActive => {\r\n\tconst dataAttrValue = currentActive.dataset.name;\r\n\tconst currentRange = ranges.find(ranges => ranges.name === dataAttrValue);\r\n\tcurrentPrice = currentRange.prices;\r\n\tconsole.log(currentPrice);\r\n};\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;