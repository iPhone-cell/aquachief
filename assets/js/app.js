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

eval("// Hamburger Menu\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\tconst menu = document.querySelector('.menu'),\r\n\t\tmenuItem = document.querySelectorAll('.menu_item'),\r\n\t\thamburger = document.querySelector('.hamburger');\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\thamburger.classList.toggle('hamburger_active');\r\n\t\tmenu.classList.toggle('menu_active');\r\n\t});\r\n\r\n\tmenuItem.forEach(item => {\r\n\t\titem.addEventListener('click', () => {\r\n\t\t\thamburger.classList.toggle('hamburger_active');\r\n\t\t\tmenu.classList.toggle('menu_active');\r\n\t\t})\r\n\t})\r\n})\r\n\r\nlet readMoreBtn = document.querySelector(\".js-btn-menu\"),\r\n\treadMoreContent = document.querySelector(\".js-description-info\"),\r\n\thamburgerLink = document.querySelector(\".hamburger__link\");\r\n\r\nreadMoreBtn.addEventListener(\"click\", function (event) {\r\n\tevent.preventDefault();\r\n\t// readMoreContent.classList.toggle(\"js-readmore-show\");\r\n\thamburgerLink.textContent = hamburgerLink.textContent === 'Меню' ? 'Закрыть' : 'Меню';\r\n});\r\n\r\n// Tabs\r\n$('.tabs-wrapper').each(function () {\r\n\tlet ths = $(this);\r\n\tths.find('.tab-item').not(':first').hide();\r\n\tths.find('.tab').click(function () {\r\n\t\tths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');\r\n\t\tths.find('.tab-item').hide().eq($(this).index()).fadeIn()\r\n\t}).eq(0).addClass('active');\r\n});\r\n\r\n// Calculator\r\nconst range = Array.from(document.querySelectorAll(\".range\"));\r\nlet range1 = document.querySelector(\"#range1.active\");\r\nlet range2 = document.querySelector(\"#range2.active\");\r\nlet range3 = document.querySelector(\"#range3.active\");\r\nlet range4 = document.querySelector(\"#range4.active\");\r\nlet range5 = document.querySelector(\"#range5.active\");\r\nlet total = document.querySelector('#total');\r\nlet option = Array.from(document.querySelectorAll(\".option\"));\r\n\r\nrange.forEach((el) => {\r\n\tel.addEventListener(\"click\", rangeUpdate);\r\n});\r\n\r\noption.forEach((el) => {\r\n\tel.addEventListener(\"change\", optionUpdate);\r\n});\r\n\r\nfunction rangeUpdate(e) {\r\n\tcurrentSet.range = e.target.id;\r\n\tupdatePrice();\r\n}\r\n\r\nfunction optionUpdate(e) {\r\n\te.stopPropagation();\r\n\tif (e.target.checked) {\r\n\t\tcurrentSet.option.push(e.target.id);\r\n\t} else {\r\n\t\tlet index = currentSet.option.indexOf(e.target.id);\r\n\t\tcurrentSet.option.splice(index, 1);\r\n\t}\r\n\tupdatePrice();\r\n}\r\n\r\nfunction updatePrice() {\r\n\tlet rangePrice = currentSet.getRangePrice();\r\n\tlet optionPrice = currentSet.getOptionPrice();\r\n\tlet totalPrice = rangePrice + optionPrice;\r\n\ttotal.value = totalPrice;\r\n}\r\n\r\nlet priceInfo = {\r\n\trange: {\r\n\t\trange1: 9500,\r\n\t\trange2: 11400,\r\n\t\trange3: 15200,\r\n\t\trange4: 19000,\r\n\t\trange5: 19000,\r\n\t},\r\n\toption: {\r\n\t\toption1: 18300,\r\n\t\toption2: 3500,\r\n\t\toption3: 18300,\r\n\t\toption4: 18300,\r\n\t\toption5: 2800,\r\n\t},\r\n};\r\n\r\nlet currentSet = {\r\n\trange: \"range1\",\r\n\toption: [],\r\n\tgetRangePrice() {\r\n\t\treturn priceInfo.range[this.range];\r\n\t},\r\n\tgetOptionPrice() {\r\n\t\tlet optionPrice = 0;\r\n\t\tif (!this.option.length == 0) {\r\n\t\t\tthis.option.forEach((el) => {\r\n\t\t\t\toptionPrice += priceInfo.option[el];\r\n\t\t\t});\r\n\t\t}\r\n\t\treturn optionPrice;\r\n\t},\r\n};\r\n\r\n// Add File in Form\r\nvar contactFileElem = document.querySelector('.selection__file'),\r\n\tcontactFileInput = contactFileElem.querySelector('#upload'),\r\n\tcontactFileText = contactFileElem.querySelector('.selection__file-label');\r\n\r\ncontactFileInput.addEventListener('change', function (e) {\r\n\tlet fileName = e.target.files[0].name;\r\n\tcontactFileText.innerHTML = fileName;\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;