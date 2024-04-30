/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name, todos) {
        this.name = name;
        this.todos = todos ? todos : [];
    }
}


/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    displayTodo() {
        console.table(this);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/project */ "./src/js/project.js");
/* harmony import */ var _js_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/todo */ "./src/js/todo.js");



let todos = [];
let projects = [];

function getLocalStorageItems() {
    return localStorage.getItem('projects')
        ? JSON.parse(localStorage.getItem('projects'))
        : [];
}

// const myTodo = new Todo(
//     'Test todo',
//     'This is a test todo',
//     '04-23-1997',
//     'high'
// );
// myTodo.displayTodo();

// localStorage.setItem(myTodo.title, JSON.stringify(myTodo));
// console.log(JSON.parse(localStorage.getItem(myTodo.title)));

function addTodo(title, description, dueDate, priority, projectName) {
    const todo = new _js_todo__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority, projectName);
    todos.push(todo);
    if (projects.some((p) => p.name === projectName)) {
        const existingProject = projects.find((p) => p.name === projectName);
        existingProject.todos.push(todo);
    } else {
        const newProject = new _js_project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName, [todo]);
        projects.push(newProject);
    }

    // Add and update localStorage
    const localStorageProjects = getLocalStorageItems();
    localStorageProjects.push();
    localStorage.setItem('projects', JSON.stringify(localStorageProjects));
}

function updateTodo(todoTitle, projectName) {}

addTodo('Test', 'This is a test todo', '04-23-1997', 'high', 'testProject');
console.table(todos);
console.table(projects);
console.log(JSON.parse(localStorage.getItem('testProject')));

addTodo('Test2', 'This is a test todo 2', '04-23-19asas', 'low', 'testProject');
console.table(todos);
console.table(projects);
console.log(JSON.parse(localStorage.getItem('testProject')));

addTodo(
    'Test3',
    'This is a test todo 2',
    '04-23-19asas',
    'low',
    'testProject v4'
);
console.table(todos);
console.table(projects);
console.log(JSON.parse(localStorage.getItem('projects')));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDTjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zID8gdG9kb3MgOiBbXTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZGlzcGxheVRvZG8oKSB7XG4gICAgICAgIGNvbnNvbGUudGFibGUodGhpcyk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL2pzL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9qcy90b2RvJztcblxubGV0IHRvZG9zID0gW107XG5sZXQgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlSXRlbXMoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcbiAgICAgICAgOiBbXTtcbn1cblxuLy8gY29uc3QgbXlUb2RvID0gbmV3IFRvZG8oXG4vLyAgICAgJ1Rlc3QgdG9kbycsXG4vLyAgICAgJ1RoaXMgaXMgYSB0ZXN0IHRvZG8nLFxuLy8gICAgICcwNC0yMy0xOTk3Jyxcbi8vICAgICAnaGlnaCdcbi8vICk7XG4vLyBteVRvZG8uZGlzcGxheVRvZG8oKTtcblxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0obXlUb2RvLnRpdGxlLCBKU09OLnN0cmluZ2lmeShteVRvZG8pKTtcbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obXlUb2RvLnRpdGxlKSkpO1xuXG5mdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lKTtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIGlmIChwcm9qZWN0cy5zb21lKChwKSA9PiBwLm5hbWUgPT09IHByb2plY3ROYW1lKSkge1xuICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0cy5maW5kKChwKSA9PiBwLm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBbdG9kb10pO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzID0gZ2V0TG9jYWxTdG9yYWdlSXRlbXMoKTtcbiAgICBsb2NhbFN0b3JhZ2VQcm9qZWN0cy5wdXNoKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlUHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kbyh0b2RvVGl0bGUsIHByb2plY3ROYW1lKSB7fVxuXG5hZGRUb2RvKCdUZXN0JywgJ1RoaXMgaXMgYSB0ZXN0IHRvZG8nLCAnMDQtMjMtMTk5NycsICdoaWdoJywgJ3Rlc3RQcm9qZWN0Jyk7XG5jb25zb2xlLnRhYmxlKHRvZG9zKTtcbmNvbnNvbGUudGFibGUocHJvamVjdHMpO1xuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdFByb2plY3QnKSkpO1xuXG5hZGRUb2RvKCdUZXN0MicsICdUaGlzIGlzIGEgdGVzdCB0b2RvIDInLCAnMDQtMjMtMTlhc2FzJywgJ2xvdycsICd0ZXN0UHJvamVjdCcpO1xuY29uc29sZS50YWJsZSh0b2Rvcyk7XG5jb25zb2xlLnRhYmxlKHByb2plY3RzKTtcbmNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RQcm9qZWN0JykpKTtcblxuYWRkVG9kbyhcbiAgICAnVGVzdDMnLFxuICAgICdUaGlzIGlzIGEgdGVzdCB0b2RvIDInLFxuICAgICcwNC0yMy0xOWFzYXMnLFxuICAgICdsb3cnLFxuICAgICd0ZXN0UHJvamVjdCB2NCdcbik7XG5jb25zb2xlLnRhYmxlKHRvZG9zKTtcbmNvbnNvbGUudGFibGUocHJvamVjdHMpO1xuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9