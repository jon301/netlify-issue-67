(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nx_crusher_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nx-crusher/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");

var _a, _b;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof _nx_crusher_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"] !== "undefined" && _nx_crusher_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"]) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
AppController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]) === "function" ? _b : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _todo_todo_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo.entity */ "./apps/api/src/app/todo/todo.entity.ts");
/* harmony import */ var _todo_todo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo.module */ "./apps/api/src/app/todo/todo.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forRoot({
                type: 'sqlite',
                database: `${__webpack_require__(/*! os */ "os").homedir()}/db.sqlite`,
                keepConnectionAlive: true,
                entities: [_todo_todo_entity__WEBPACK_IMPORTED_MODULE_6__["Todo"]]
            }),
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["GraphQLModule"].forRoot({
                useGlobalPrefix: true,
                installSubscriptionHandlers: true,
                autoSchemaFile: 'schema.gql',
                playground: true
            }),
            _todo_todo_module__WEBPACK_IMPORTED_MODULE_7__["TodoModule"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_4__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/app/todo/todo.entity.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/todo/todo.entity.ts ***!
  \**********************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_2__);



let Todo = class Todo {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["PrimaryGeneratedColumn"])(),
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => type_graphql__WEBPACK_IMPORTED_MODULE_1__["ID"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Todo.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], Todo.prototype, "title", void 0);
Todo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Entity"])(),
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])()
], Todo);



/***/ }),

/***/ "./apps/api/src/app/todo/todo.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/todo/todo.module.ts ***!
  \**********************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todo_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.entity */ "./apps/api/src/app/todo/todo.entity.ts");
/* harmony import */ var _todo_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.resolver */ "./apps/api/src/app/todo/todo.resolver.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo.service */ "./apps/api/src/app/todo/todo.service.ts");






let TodoModule = class TodoModule {
};
TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_todo_entity__WEBPACK_IMPORTED_MODULE_3__["Todo"]])],
        providers: [_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"], _todo_resolver__WEBPACK_IMPORTED_MODULE_4__["TodoResolver"]],
        exports: [_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]]
    })
], TodoModule);



/***/ }),

/***/ "./apps/api/src/app/todo/todo.resolver.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/todo/todo.resolver.ts ***!
  \************************************************/
/*! exports provided: TodoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoResolver", function() { return TodoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todo_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.entity */ "./apps/api/src/app/todo/todo.entity.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.service */ "./apps/api/src/app/todo/todo.service.ts");

var _a, _b, _c;


// import { PubSub } from 'apollo-server-express';


// const pubSub = new PubSub();
let TodoResolver = class TodoResolver {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    todo(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const todo = yield this.recipesService.findOne({
                where: {
                    id
                }
            });
            if (!todo) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"](id);
            }
            return todo;
        });
    }
    todos() {
        return this.recipesService.findAll();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Query"])(returns => _todo_entity__WEBPACK_IMPORTED_MODULE_3__["Todo"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Args"])('id')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], TodoResolver.prototype, "todo", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Query"])(returns => [_todo_entity__WEBPACK_IMPORTED_MODULE_3__["Todo"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TodoResolver.prototype, "todos", null);
TodoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Resolver"])(of => _todo_entity__WEBPACK_IMPORTED_MODULE_3__["Todo"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_c = typeof _todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] !== "undefined" && _todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]) === "function" ? _c : Object])
], TodoResolver);



/***/ }),

/***/ "./apps/api/src/app/todo/todo.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/todo/todo.service.ts ***!
  \***********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.entity */ "./apps/api/src/app/todo/todo.entity.ts");

var _a;




let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    findOne(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.todoRepository.findOne(options);
        });
    }
    findAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.todoRepository.find();
        });
    }
};
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_todo_entity__WEBPACK_IMPORTED_MODULE_4__["Todo"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"]) === "function" ? _a : Object])
], TodoService);



/***/ }),

/***/ "./apps/api/src/development.ts":
/*!*************************************!*\
  !*** ./apps/api/src/development.ts ***!
  \*************************************/
/*! exports provided: localServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localServer", function() { return localServer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./apps/api/src/server.ts");


function localServer() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        const globalPrefix = '.netlify/functions/main';
        const server = yield Object(_server__WEBPACK_IMPORTED_MODULE_1__["nestServer"])(globalPrefix);
        const port = process.env.port || 8888;
        yield server.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}


/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-serverless-express */ "aws-serverless-express");
/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_serverless_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _development__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./development */ "./apps/api/src/development.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./apps/api/src/environments/environment.ts");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server */ "./apps/api/src/server.ts");





let cachedServer;
/**
 * Netlify Function
 */
const handler = (event, context, callback) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    if (!cachedServer) {
        const globalPrefix = '.netlify/functions/main';
        cachedServer = yield Object(_server__WEBPACK_IMPORTED_MODULE_4__["nestServer"])(globalPrefix);
    }
    return Object(aws_serverless_express__WEBPACK_IMPORTED_MODULE_1__["proxy"])(cachedServer, event, context, 'PROMISE').promise;
});
if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_development__WEBPACK_IMPORTED_MODULE_2__["localServer"])();
}



/***/ }),

/***/ "./apps/api/src/server.ts":
/*!********************************!*\
  !*** ./apps/api/src/server.ts ***!
  \********************************/
/*! exports provided: nestServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestServer", function() { return nestServer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-serverless-express */ "aws-serverless-express");
/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_serverless_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");






function nestServer(globalPrefix = 'api') {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        const instance = express__WEBPACK_IMPORTED_MODULE_4__();
        const adpater = new _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__["ExpressAdapter"](instance);
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"], adpater);
        app.setGlobalPrefix(globalPrefix);
        yield app.init();
        return Object(aws_serverless_express__WEBPACK_IMPORTED_MODULE_3__["createServer"])(instance);
    });
}


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts");
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonjon/work/nx-crusher/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-serverless-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "type-graphql":
/*!*******************************!*\
  !*** external "type-graphql" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("type-graphql");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map