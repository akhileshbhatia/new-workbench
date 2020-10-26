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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _migrations_migration1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrations/migration1 */ "./src/migrations/migration1.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
 // TODO: Convert this into dynamic import
chrome.runtime.onInstalled.addListener((details) => __awaiter(void 0, void 0, void 0, function* () {
    if (details && details.reason === 'update') {
        yield Object(_migrations_migration1__WEBPACK_IMPORTED_MODULE_0__["migration1"])();
    }
}));


/***/ }),

/***/ "./src/common/HelperFunctions.ts":
/*!***************************************!*\
  !*** ./src/common/HelperFunctions.ts ***!
  \***************************************/
/*! exports provided: getDataForPath, clearStorage, setDataToPath, serializeMap, deserializeToMap, deserializeData, getFormattedTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataForPath", function() { return getDataForPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataToPath", function() { return setDataToPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeMap", function() { return serializeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeToMap", function() { return deserializeToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeData", function() { return deserializeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedTime", function() { return getFormattedTime; });
function getDataForPath(path) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.get(path, (data) => {
                path === null ? resolve(data) : resolve(data[path]);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
function clearStorage() {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.clear(() => resolve());
        }
        catch (err) {
            reject(err);
        }
    });
}
function setDataToPath(path, data) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.set({ [path]: data }, () => {
                if (chrome.runtime.lastError) {
                    reject('Error in setting data to chrome storage');
                }
                resolve();
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
function serializeMap(map) {
    return JSON.stringify(Array.from(map.entries()));
}
function deserializeToMap(data) {
    return new Map(JSON.parse(data));
}
function deserializeData(data) {
    const dateMap = deserializeToMap(data);
    const finalMap = new Map();
    for (const [date, info] of dateMap.entries()) {
        const newValue = deserializeToMap(info);
        finalMap.set(date, newValue);
    }
    return { output: finalMap };
}
function getFormattedTime(timestamp) {
    const date = new Date(+timestamp * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
}


/***/ }),

/***/ "./src/migrations/migration1.ts":
/*!**************************************!*\
  !*** ./src/migrations/migration1.ts ***!
  \**************************************/
/*! exports provided: migration1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migration1", function() { return migration1; });
/* harmony import */ var _common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/HelperFunctions */ "./src/common/HelperFunctions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Converts obj in each path (query, search and execute) to
 * new data structure into map
 */
class Migration1 {
    constructor() {
        this.statesKey = 'extension_states';
    }
    shouldUpgrade() {
        return __awaiter(this, void 0, void 0, function* () {
            this.allData = yield Object(_common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["getDataForPath"])(null); // 'null' gets all the data for all paths
            if (this.allData.hasOwnProperty(this.statesKey)) {
                this.extensionState = this.allData[this.statesKey];
                delete this.allData[this.statesKey]; // no need to migrate extension_states
            }
            let doUpgrade = false;
            const allKeys = Object.keys(this.allData);
            if (allKeys.length > 0) {
                for (let i = 0; i < allKeys.length; i++) {
                    if (this.allData[allKeys[i]].constructor === Object) {
                        doUpgrade = true;
                        break;
                    }
                }
            }
            return doUpgrade;
        });
    }
    upgrade() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Object(_common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["clearStorage"])();
            for (const [path, data] of Object.entries(this.allData)) {
                const dateMap = new Map();
                const sortedDates = Object.keys(data).sort((a, b) => new Date(b).valueOf() - new Date(a).valueOf());
                for (const currentDate of sortedDates) {
                    const timeQueryMap = new Map();
                    // Set timestamp as key and query as value in timeQueryMap
                    data[currentDate].map(info => timeQueryMap.set(info[0], info[1]));
                    dateMap.set(currentDate, Object(_common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["serializeMap"])(timeQueryMap));
                }
                yield Object(_common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["setDataToPath"])(path, Object(_common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["serializeMap"])(dateMap));
                if (Object.keys(this.extensionState).length) {
                    yield Object(_common_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["setDataToPath"])(this.statesKey, this.extensionState);
                }
            }
        });
    }
}
function migration1() {
    return __awaiter(this, void 0, void 0, function* () {
        const migration1 = new Migration1();
        if (yield migration1.shouldUpgrade()) {
            yield migration1.upgrade();
        }
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9IZWxwZXJGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZ3JhdGlvbnMvbWlncmF0aW9uMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRnFELENBQUMseUNBQXlDO0FBRS9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFPLE9BQU8sRUFBRSxFQUFFO0lBQ3ZELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzFDLE1BQU0seUVBQVUsRUFBRSxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQyxFQUFDLENBQUM7Ozs7Ozs7Ozs7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Q3BDLElBQUksTUFBTSxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBQUEiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQudHNcIik7XG4iLCJpbXBvcnQgeyBtaWdyYXRpb24xIH0gZnJvbSAnLi9taWdyYXRpb25zL21pZ3JhdGlvbjEnOyAvLyBUT0RPOiBDb252ZXJ0IHRoaXMgaW50byBkeW5hbWljIGltcG9ydFxuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xuICBpZiAoZGV0YWlscyAmJiBkZXRhaWxzLnJlYXNvbiA9PT0gJ3VwZGF0ZScpIHtcbiAgICBhd2FpdCBtaWdyYXRpb24xKCk7XG4gIH1cbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFGb3JQYXRoKHBhdGg6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQocGF0aCwgKGRhdGEpID0+IHtcbiAgICAgICAgcGF0aCA9PT0gbnVsbCA/IHJlc29sdmUoZGF0YSkgOiByZXNvbHZlKGRhdGFbcGF0aF0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb1BhdGgocGF0aDogc3RyaW5nLCBkYXRhOiBzdHJpbmcgfCBPYmplY3QpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3BhdGhdOiBkYXRhIH0sICgpID0+IHtcbiAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHJlamVjdCgnRXJyb3IgaW4gc2V0dGluZyBkYXRhIHRvIGNocm9tZSBzdG9yYWdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTWFwKG1hcCkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShtYXAuZW50cmllcygpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVRvTWFwKGRhdGE6IGFueSkge1xuICByZXR1cm4gbmV3IE1hcChKU09OLnBhcnNlKGRhdGEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplRGF0YShkYXRhOiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0ZU1hcCA9IGRlc2VyaWFsaXplVG9NYXAoZGF0YSk7XG4gIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IFtkYXRlLCBpbmZvXSBvZiBkYXRlTWFwLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZGVzZXJpYWxpemVUb01hcChpbmZvKTtcbiAgICBmaW5hbE1hcC5zZXQoZGF0ZSwgbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiB7IG91dHB1dDogZmluYWxNYXAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZFRpbWUodGltZXN0YW1wOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoK3RpbWVzdGFtcCAqIDEwMDApO1xuICByZXR1cm4gYCR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfWA7XG59XG4iLCJpbXBvcnQgeyBNaWdyYXRpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXREYXRhRm9yUGF0aCwgY2xlYXJTdG9yYWdlLCBzZXREYXRhVG9QYXRoLCBzZXJpYWxpemVNYXAgfSBmcm9tICcuLi9jb21tb24vSGVscGVyRnVuY3Rpb25zJztcbi8qKlxuICogQ29udmVydHMgb2JqIGluIGVhY2ggcGF0aCAocXVlcnksIHNlYXJjaCBhbmQgZXhlY3V0ZSkgdG9cbiAqIG5ldyBkYXRhIHN0cnVjdHVyZSBpbnRvIG1hcFxuICovXG5jbGFzcyBNaWdyYXRpb24xIGltcGxlbWVudHMgTWlncmF0aW9uIHtcbiAgcHJpdmF0ZSBhbGxEYXRhOiBPYmplY3Q7XG4gIHByaXZhdGUgZXh0ZW5zaW9uU3RhdGU6IE9iamVjdDtcbiAgcHJpdmF0ZSBzdGF0ZXNLZXkgPSAnZXh0ZW5zaW9uX3N0YXRlcyc7XG5cbiAgYXN5bmMgc2hvdWxkVXBncmFkZSgpIHtcbiAgICB0aGlzLmFsbERhdGEgPSBhd2FpdCBnZXREYXRhRm9yUGF0aChudWxsKTsgLy8gJ251bGwnIGdldHMgYWxsIHRoZSBkYXRhIGZvciBhbGwgcGF0aHNcbiAgICBpZiAodGhpcy5hbGxEYXRhLmhhc093blByb3BlcnR5KHRoaXMuc3RhdGVzS2V5KSkge1xuICAgICAgdGhpcy5leHRlbnNpb25TdGF0ZSA9IHRoaXMuYWxsRGF0YVt0aGlzLnN0YXRlc0tleV07XG4gICAgICBkZWxldGUgdGhpcy5hbGxEYXRhW3RoaXMuc3RhdGVzS2V5XTsgLy8gbm8gbmVlZCB0byBtaWdyYXRlIGV4dGVuc2lvbl9zdGF0ZXNcbiAgICB9XG4gICAgbGV0IGRvVXBncmFkZSA9IGZhbHNlO1xuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFsbERhdGEpO1xuICAgIGlmIChhbGxLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hbGxEYXRhW2FsbEtleXNbaV1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBkb1VwZ3JhZGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb1VwZ3JhZGU7XG4gIH1cblxuICBhc3luYyB1cGdyYWRlKCkge1xuICAgIGF3YWl0IGNsZWFyU3RvcmFnZSgpO1xuICAgIGZvciAoY29uc3QgW3BhdGgsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuYWxsRGF0YSkpIHtcbiAgICAgIGNvbnN0IGRhdGVNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgICAgY29uc3Qgc29ydGVkRGF0ZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiKS52YWx1ZU9mKCkgLSBuZXcgRGF0ZShhKS52YWx1ZU9mKCkpO1xuICAgICAgZm9yIChjb25zdCBjdXJyZW50RGF0ZSBvZiBzb3J0ZWREYXRlcykge1xuICAgICAgICBjb25zdCB0aW1lUXVlcnlNYXAgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgICAvLyBTZXQgdGltZXN0YW1wIGFzIGtleSBhbmQgcXVlcnkgYXMgdmFsdWUgaW4gdGltZVF1ZXJ5TWFwXG4gICAgICAgIGRhdGFbY3VycmVudERhdGVdLm1hcChpbmZvID0+IHRpbWVRdWVyeU1hcC5zZXQoaW5mb1swXSwgaW5mb1sxXSkpO1xuICAgICAgICBkYXRlTWFwLnNldChjdXJyZW50RGF0ZSwgc2VyaWFsaXplTWFwKHRpbWVRdWVyeU1hcCkpO1xuICAgICAgfVxuICAgICAgYXdhaXQgc2V0RGF0YVRvUGF0aChwYXRoLCBzZXJpYWxpemVNYXAoZGF0ZU1hcCkpO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXh0ZW5zaW9uU3RhdGUpLmxlbmd0aCkge1xuICAgICAgICBhd2FpdCBzZXREYXRhVG9QYXRoKHRoaXMuc3RhdGVzS2V5LCB0aGlzLmV4dGVuc2lvblN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZ3JhdGlvbjEoKSB7XG4gIGNvbnN0IG1pZ3JhdGlvbjEgPSBuZXcgTWlncmF0aW9uMSgpO1xuICBpZiAoYXdhaXQgbWlncmF0aW9uMS5zaG91bGRVcGdyYWRlKCkpIHtcbiAgICBhd2FpdCBtaWdyYXRpb24xLnVwZ3JhZGUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==