(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header {\r\n    width: 100%; \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-description></app-description>\r\n<app-main-container></app-main-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tripassistant.service */ "./src/app/services/tripassistant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tripassistantServices) {
        this.tripassistantServices = tripassistantServices;
        this.title = 'TripAssistant';
        //   var myDiv = document.getElementsByClassName("")[0];
        //  myDiv.scrollTop = myDiv.scrollHeight;
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log("rewr"+this.tripassistantServices.getType());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tripassistant_service__WEBPACK_IMPORTED_MODULE_1__["TripAssistantService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _main_container_results_swiper_swiper_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-container/results/swiper/swiper.module */ "./src/app/main-container/results/swiper/swiper.module.ts");
/* harmony import */ var _main_container_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-container/searchbox/searchbox.module */ "./src/app/main-container/searchbox/searchbox.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_container_results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-container/results/results.component */ "./src/app/main-container/results/results.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-container/main-container.component */ "./src/app/main-container/main-container.component.ts");
/* harmony import */ var _main_container_results_speech_action_command_speech_action_command_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-container/results/speech-action-command/speech-action-command.component */ "./src/app/main-container/results/speech-action-command/speech-action-command.component.ts");
/* harmony import */ var _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/tripassistant.service */ "./src/app/services/tripassistant.service.ts");
/* harmony import */ var _services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/speech-recogniser.service */ "./src/app/services/speech-recogniser.service.ts");
/* harmony import */ var _main_container_results_mic_mic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-container/results/mic/mic.component */ "./src/app/main-container/results/mic/mic.component.ts");
/* harmony import */ var _main_container_chat_container_chat_container_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-container/chat-container/chat-container.module */ "./src/app/main-container/chat-container/chat-container.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _main_container_results_results_component__WEBPACK_IMPORTED_MODULE_9__["ResultsComponent"],
                _description_description_component__WEBPACK_IMPORTED_MODULE_10__["DescriptionComponent"],
                _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_11__["MainContainerComponent"],
                _main_container_results_speech_action_command_speech_action_command_component__WEBPACK_IMPORTED_MODULE_12__["SpeechActionCommandComponent"],
                _main_container_results_mic_mic_component__WEBPACK_IMPORTED_MODULE_15__["MicComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_5__["Ng2CarouselamosModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _main_container_results_swiper_swiper_module__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
                _main_container_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_7__["SearchboxModule"],
                _main_container_chat_container_chat_container_module__WEBPACK_IMPORTED_MODULE_16__["ChatContainerModule"]
            ],
            providers: [
                {
                    provide: 'SPEECH_LANG',
                    useValue: 'en-US'
                },
                _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_13__["TripAssistantService"],
                _services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_14__["SpeechRecogniserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/description/description.component.css":
/*!*******************************************************!*\
  !*** ./src/app/description/description.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-to-bottom .carousel-inner {\r\n  height: 100%;\r\n}\r\n\r\n.carousel {\r\n    background:#6BBDED;\r\n    text-align: center;\r\n    height: 20vh;\r\n}\r\n\r\n.carousel.top-to-bottom .item {\r\n   transition: 0.6s ease-in-out top;\r\n}\r\n\r\n.carousel.top-to-bottom .active {\r\n   top: 0;\r\n}\r\n\r\n.carousel.top-to-bottom .next {\r\n   top: 20vh;\r\n}\r\n\r\n.carousel.top-to-bottom .prev {\r\n   top: -20vh;\r\n}\r\n\r\n.carousel.top-to-bottom .item {\r\n   left: 0;\r\n}\r\n\r\n#my_text_slider {\r\n    text-transform:uppercase;\r\n    color:#FFFFFF;\r\n    font-size:5em;\r\n    height:180px;\r\n    font-family: 'Fjalla One';\r\n}\r\n\r\n.carousel-indicators {\r\n    margin-top: 1vh;\r\n    margin-bottom: 0;\r\n}"

/***/ }),

/***/ "./src/app/description/description.component.html":
/*!********************************************************!*\
  !*** ./src/app/description/description.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide top-to-bottom\"  data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\" id=\"my_text_slider\">\r\n        <div class=\"active item\"><p>WE ARE Travellers</p></div>\r\n        <div class=\"item\"><p>Exploring is amazing</p></div>\r\n        <div class=\"item\"><p>Think the Travel</p></div>\r\n    </div>\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n</div>"

/***/ }),

/***/ "./src/app/description/description.component.ts":
/*!******************************************************!*\
  !*** ./src/app/description/description.component.ts ***!
  \******************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/main-container/chat-container/chat-container.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/main-container/chat-container/chat-container.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    height: 60vh;\r\n    overflow-y: auto;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.assistant {\r\n    border-radius: 0 1rem 1rem 1rem;\r\n    background-color: #FFFFFF;\r\n    max-width: 25vw;\r\n    height: auto;\r\n    margin: 0.3rem;\r\n    float: left;\r\n    color:#44abff;\r\n}\r\n\r\n.message-box {\r\n    font-size: 1.7rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.user {\r\n    border-radius: 1rem 0 1rem 1rem;\r\n    background-color: #6BBDED;\r\n    color:#FFFFFF;\r\n    max-width: 25vw;\r\n    height: auto;\r\n    margin: 0.3rem;\r\n    float: right;\r\n}\r\n\r\n.loading {\r\n    border-radius: 0 1rem 1rem 1rem;\r\n    background-color: #FFFFFF;\r\n    max-width: 13rem;\r\n    height: 4rem;\r\n    margin: 0.3rem;\r\n    float: left;\r\n    color:#44abff;\r\n    font-weight: bold;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n    width: 1rem;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f100; \r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #5b91cb00; \r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #2E5BA7;\r\n    cursor: pointer; \r\n}"

/***/ }),

/***/ "./src/app/main-container/chat-container/chat-container.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main-container/chat-container/chat-container.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class = \"chat\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\r\n    <div *ngFor = \"let chat of chats\">\r\n        <div [ngClass] = \"{\r\n            'user': chat.sender == 'user',\r\n            'assistant' : chat.sender == 'assistant'}\" id=\"id1\">\r\n            <div class = \"message-box\" ><b>{{chat.message}}</b></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"loading\" *ngIf=\"tripassistantService.getShowSpinner()\">\r\n        <div class=\"message-box\">\r\n            Planning\r\n            <img src=\"../../../assets/img/loading.gif\"/>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-container/chat-container/chat-container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main-container/chat-container/chat-container.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChatContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContainerComponent", function() { return ChatContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chats.service */ "./src/app/main-container/chats.service.ts");
/* harmony import */ var _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tripassistant.service */ "./src/app/services/tripassistant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatContainerComponent = /** @class */ (function () {
    function ChatContainerComponent(chatsService, tripassistantService) {
        this.chatsService = chatsService;
        this.tripassistantService = tripassistantService;
    }
    ChatContainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChatContainerComponent.prototype, "chats", void 0);
    ChatContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-container',
            template: __webpack_require__(/*! ./chat-container.component.html */ "./src/app/main-container/chat-container/chat-container.component.html"),
            styles: [__webpack_require__(/*! ./chat-container.component.css */ "./src/app/main-container/chat-container/chat-container.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_chats_service__WEBPACK_IMPORTED_MODULE_1__["ChatsService"],
            _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_2__["TripAssistantService"]])
    ], ChatContainerComponent);
    return ChatContainerComponent;
}());



/***/ }),

/***/ "./src/app/main-container/chat-container/chat-container.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main-container/chat-container/chat-container.module.ts ***!
  \************************************************************************/
/*! exports provided: ChatContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContainerModule", function() { return ChatContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-container.component */ "./src/app/main-container/chat-container/chat-container.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatContainerModule = /** @class */ (function () {
    function ChatContainerModule() {
    }
    ChatContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _chat_container_component__WEBPACK_IMPORTED_MODULE_1__["ChatContainerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _chat_container_component__WEBPACK_IMPORTED_MODULE_1__["ChatContainerComponent"]
            ]
        })
    ], ChatContainerModule);
    return ChatContainerModule;
}());



/***/ }),

/***/ "./src/app/main-container/chats.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main-container/chats.service.ts ***!
  \*************************************************/
/*! exports provided: ChatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsService", function() { return ChatsService; });
var ChatsService = /** @class */ (function () {
    function ChatsService() {
        this.chats = [
            {
                sender: 'assistant',
                message: 'How May I Help You?'
            }
        ];
    }
    ChatsService.prototype.addChat = function (sender, message) {
        this.chats.push({
            sender: sender,
            message: message
        });
    };
    return ChatsService;
}());



/***/ }),

/***/ "./src/app/main-container/main-container.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-container/main-container.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\r\n    background-image: url('back-img3.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    height: 75vh;\r\n    background-position-y: 5vh;\r\n}\r\n\r\n.chat-container {\r\n    margin: 0 auto;\r\n    background-color: #d5e0e700;\r\n    height: 60vh;\r\n    width: 56vw;\r\n    padding: 0;\r\n    border: 0.1rem solid #3E92D2;\r\n    box-shadow: 0 1px 1px #3E92D2, 0 1px 1px #3E92D2;\r\n    border-radius: 3rem;\r\n}\r\n\r\n.check {\r\n    width: 55vw;\r\n    opacity: 2;\r\n    background-color: #d5e0e752;\r\n    margin: 0 auto;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.search-box {\r\n     margin: 0 auto;\r\n}\r\n\r\n.spinner {\r\n    margin: 2rem auto;\r\n    width: 5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-container/main-container.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-container/main-container.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"parent\" *ngIf = \"tripassistantServices.type == 'request'\"> \r\n    <div class = \"check\">\r\n        <div class = \"search-box\">\r\n            <app-searchbox></app-searchbox>\r\n        </div>\r\n    </div>\r\n    <div class = \"chat-container\">\r\n        <app-chat-container [chats] = \"chats\"></app-chat-container>\r\n    </div>\r\n</div>\r\n<div *ngIf = \"tripassistantServices.type == 'response'\">\r\n    <app-results></app-results>\r\n</div>"

/***/ }),

/***/ "./src/app/main-container/main-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-container/main-container.component.ts ***!
  \************************************************************/
/*! exports provided: MainContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function() { return MainContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.service */ "./src/app/main-container/chats.service.ts");
/* harmony import */ var _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tripassistant.service */ "./src/app/services/tripassistant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContainerComponent = /** @class */ (function () {
    function MainContainerComponent(chatsServices, tripassistantServices) {
        this.chatsServices = chatsServices;
        this.tripassistantServices = tripassistantServices;
        this.chats = [];
    }
    MainContainerComponent.prototype.ngOnInit = function () {
        this.chats = this.chatsServices.chats;
        this.type = this.tripassistantServices.getType();
        this.request = this.tripassistantServices.getRequest();
        this.response = this.tripassistantServices.getResponse();
        this.responseQuery = this.tripassistantServices.getResponseQuery();
    };
    MainContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-container',
            template: __webpack_require__(/*! ./main-container.component.html */ "./src/app/main-container/main-container.component.html"),
            styles: [__webpack_require__(/*! ./main-container.component.css */ "./src/app/main-container/main-container.component.css")],
            providers: [_chats_service__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]]
        }),
        __metadata("design:paramtypes", [_chats_service__WEBPACK_IMPORTED_MODULE_1__["ChatsService"],
            _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_2__["TripAssistantService"]])
    ], MainContainerComponent);
    return MainContainerComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/mic/mic.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main-container/results/mic/mic.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    left: 2rem;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/main-container/results/mic/mic.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-container/results/mic/mic.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"toggleMic()\">\n  mic works!\n</div>\n"

/***/ }),

/***/ "./src/app/main-container/results/mic/mic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-container/results/mic/mic.component.ts ***!
  \*************************************************************/
/*! exports provided: MicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicComponent", function() { return MicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/speech-recogniser.service */ "./src/app/services/speech-recogniser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MicComponent = /** @class */ (function () {
    function MicComponent(speechRecogniser) {
        this.speechRecogniser = speechRecogniser;
        this.micOn = true;
    }
    MicComponent.prototype.ngOnInit = function () {
        this.speechRecogniser.start();
    };
    MicComponent.prototype.toggleMic = function () {
        alert(1);
        if (this.micOn)
            this.speechRecogniser.stop();
        else
            this.speechRecogniser.start();
        this.micOn = !this.micOn;
    };
    MicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mic',
            template: __webpack_require__(/*! ./mic.component.html */ "./src/app/main-container/results/mic/mic.component.html"),
            styles: [__webpack_require__(/*! ./mic.component.css */ "./src/app/main-container/results/mic/mic.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecogniserService"]])
    ], MicComponent);
    return MicComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/results.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main-container/results/results.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\r\n    margin: 0px;\r\n    padding: 0;\r\n}\r\n\r\n.swiper-title {\r\n    padding: 0rem;\r\n    font-size: 2rem;\r\n    color:#000000;\r\n    width: 87vw;\r\n    margin: 0 auto;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/main-container/results/results.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-container/results/results.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-container\" *ngFor=\"let activity of activities\">\r\n    <div *ngIf=\"isActivityAvailable(activity.listActivity)\">\r\n        <app-speech-action-command \r\n            [type]=\"getType(activity.type)\"\r\n            (onChangelistenType)=\"onChangeListenSpeechType($event)\">\r\n        </app-speech-action-command>\r\n        <div class=\"swiper-title\">{{getType(activity.type)}}</div>\r\n        <app-swiper \r\n            [listenSpeechTypeChanged]=\"lsitenSpeechTypeChanged\"\r\n            [speechActionCommand]=\"getType(activity.type)\" \r\n            [items]=\"activity.listActivity\">\r\n        </app-swiper>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"isHotelsAvailable()\" class=\"swiper-container\">\r\n    <app-speech-action-command \r\n        [type]=\"getType(activity.type)\"\r\n        (onChangelistenType)=\"onChangeListenSpeechType($event)\">\r\n    </app-speech-action-command>\r\n    <div class=\"swiper-title\">Hotels</div>\r\n    <app-swiper \r\n        [listenSpeechTypeChanged]=\"lsitenSpeechTypeChanged\"\r\n        [speechActionCommand]=\"'hotels'\"\r\n        [items]=\"hotels\">\r\n    </app-swiper>\r\n</div>\r\n<app-mic *ngIf=\"speechRecogniser.isSpeechRecognitionAvailable\"></app-mic>"

/***/ }),

/***/ "./src/app/main-container/results/results.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-container/results/results.component.ts ***!
  \*************************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tripassistant.service */ "./src/app/services/tripassistant.service.ts");
/* harmony import */ var src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/speech-recogniser.service */ "./src/app/services/speech-recogniser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(activityService, speechRecogniser) {
        this.activityService = activityService;
        this.speechRecogniser = speechRecogniser;
        this.listenSpeechType = 'attractions';
        this.lsitenSpeechTypeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.activities = this.activityService.getActivities();
        this.hotels = this.activityService.getHotels();
    };
    ResultsComponent.prototype.isHotelsAvailable = function () {
        return this.hotels.length !== 0;
    };
    ResultsComponent.prototype.isActivityAvailable = function (list) {
        return list.length !== 0;
    };
    ResultsComponent.prototype.onChangeListenSpeechType = function (listenSpeechType) {
        this.listenSpeechType = listenSpeechType;
        this.lsitenSpeechTypeChanged.emit(listenSpeechType);
    };
    ResultsComponent.prototype.getType = function (type) {
        switch (type) {
            case 'activity':
                return 'Activities';
            case 'attractions':
                return 'Attractions';
            case 'adventures':
                return 'Adventures';
            case 'amusement_park':
                return 'Amusement Parks';
            case 'aquarium':
                return 'Aquariums';
            case 'art_gallery':
                return 'Art Galleries';
            case 'church':
                return 'Churches';
            case 'hindu_temple':
                return 'Hindu Temples';
            case 'mosque':
                return 'Mosques';
            case 'museum':
                return 'Museums';
            case 'natural_feature':
                return 'Natural Features';
            case 'park':
                return 'Parks';
            case 'shopping_mall':
                return 'Shopping Malls';
            case 'zoo':
                return 'Zoo';
            default:
                return type;
        }
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/main-container/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/main-container/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tripassistant_service__WEBPACK_IMPORTED_MODULE_1__["TripAssistantService"],
            src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_2__["SpeechRecogniserService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/speech-action-command/speech-action-command.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/main-container/results/speech-action-command/speech-action-command.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-container/results/speech-action-command/speech-action-command.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/main-container/results/speech-action-command/speech-action-command.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p #scr>\n</p>\n"

/***/ }),

/***/ "./src/app/main-container/results/speech-action-command/speech-action-command.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main-container/results/speech-action-command/speech-action-command.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SpeechActionCommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechActionCommandComponent", function() { return SpeechActionCommandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/speech-recogniser.service */ "./src/app/services/speech-recogniser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechActionCommandComponent = /** @class */ (function () {
    function SpeechActionCommandComponent(speechRecogniser) {
        this.speechRecogniser = speechRecogniser;
        this.changeListenType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SpeechActionCommandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speechRecogniser.transcriptChanged
            .subscribe(function (speechCommand) {
            console.log(speechCommand);
            if (_this.command.toLowerCase() === speechCommand) {
                _this.changeListenType.emit(_this.command);
                _this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", String)
    ], SpeechActionCommandComponent.prototype, "command", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onChangelistenType'),
        __metadata("design:type", Object)
    ], SpeechActionCommandComponent.prototype, "changeListenType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("scr"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SpeechActionCommandComponent.prototype, "MyProp", void 0);
    SpeechActionCommandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speech-action-command',
            template: __webpack_require__(/*! ./speech-action-command.component.html */ "./src/app/main-container/results/speech-action-command/speech-action-command.component.html"),
            styles: [__webpack_require__(/*! ./speech-action-command.component.css */ "./src/app/main-container/results/speech-action-command/speech-action-command.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecogniserService"]])
    ], SpeechActionCommandComponent);
    return SpeechActionCommandComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/swiper/activity/activity.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/activity/activity.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-container/results/swiper/activity/activity.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/activity/activity.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <img mat-card-lg-image src=\"{{activity.photoUrl}}\">\r\n  <mat-card-title>{{ activity.name }}</mat-card-title>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/main-container/results/swiper/activity/activity.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/activity/activity.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _activity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.model */ "./src/app/main-container/results/swiper/activity/activity.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedItem'),
        __metadata("design:type", _activity_model__WEBPACK_IMPORTED_MODULE_1__["Activity"])
    ], ActivityComponent.prototype, "activity", void 0);
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/main-container/results/swiper/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/main-container/results/swiper/activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/swiper/activity/activity.model.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/activity/activity.model.ts ***!
  \**************************************************************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
var Activity = /** @class */ (function () {
    function Activity(name, photoUrl, placeId, rating, lattitude, longitude) {
        this.name = name;
        this.photoUrl = photoUrl;
        this.placeId = placeId;
        this.rating = rating;
        this.lattitude = lattitude;
        this.longitude = longitude;
    }
    return Activity;
}());



/***/ }),

/***/ "./src/app/main-container/results/swiper/speech-action/speech-action.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/speech-action/speech-action.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-container/results/swiper/speech-action/speech-action.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/speech-action/speech-action.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span #itemClick></span>\n"

/***/ }),

/***/ "./src/app/main-container/results/swiper/speech-action/speech-action.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/speech-action/speech-action.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SpeechActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechActionComponent", function() { return SpeechActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/speech-recogniser.service */ "./src/app/services/speech-recogniser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechActionComponent = /** @class */ (function () {
    // @ViewChild("itemClick") itemClick: ElementRef;
    function SpeechActionComponent(speechRecogniser) {
        this.speechRecogniser = speechRecogniser;
        this.speechActionItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SpeechActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speechRecogniser.transcriptChanged
            .subscribe(function (speechCommand) {
            console.log(speechCommand);
            if (_this.item.name.toLowerCase() === speechCommand) {
                _this.speechActionItem.emit(_this.item);
                // this.itemClick.nativeElement.dispatchEvent(event);
                console.log(_this.item);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('changeSelectedItem'),
        __metadata("design:type", Object)
    ], SpeechActionComponent.prototype, "speechActionItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeechActionComponent.prototype, "item", void 0);
    SpeechActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speech-action',
            template: __webpack_require__(/*! ./speech-action.component.html */ "./src/app/main-container/results/swiper/speech-action/speech-action.component.html"),
            styles: [__webpack_require__(/*! ./speech-action.component.css */ "./src/app/main-container/results/swiper/speech-action/speech-action.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_speech_recogniser_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecogniserService"]])
    ], SpeechActionComponent);
    return SpeechActionComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/swiper/star-rating/star-rating.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/star-rating/star-rating.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rate {\r\n    display: inline;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.star-rating {\r\n    float: left;\r\n}\r\n\r\nmat-icon {\r\n    color: #FFBF00;\r\n}"

/***/ }),

/***/ "./src/app/main-container/results/swiper/star-rating/star-rating.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/star-rating/star-rating.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"star-rating\">\n  <div *ngFor=\"let n of ratings\" class=\"rate\">\n    <mat-icon>star</mat-icon>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main-container/results/swiper/star-rating/star-rating.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main-container/results/swiper/star-rating/star-rating.component.ts ***!
  \************************************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        this.ratings = Array(Math.round(this.rating)).fill(0).map(function (x, i) { return i; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarRatingComponent.prototype, "rating", void 0);
    StarRatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__(/*! ./star-rating.component.html */ "./src/app/main-container/results/swiper/star-rating/star-rating.component.html"),
            styles: [__webpack_require__(/*! ./star-rating.component.css */ "./src/app/main-container/results/swiper/star-rating/star-rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/swiper/swiper.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main-container/results/swiper/swiper.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper {\r\n    /* margin: 10px 10px; */\r\n    margin:0px;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.arrows {\r\n    cursor: pointer;\r\n    background-color:#ffffff;\r\n    opacity: 0.95;\r\n    padding: 1rem 0rem;\r\n}\r\n\r\n.arrows:hover {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n.items {\r\n    cursor: pointer;\r\n    display: table;\r\n    width: 30rem;\r\n    height: 25vh;\r\n    text-align: center;\r\n    padding: 0;\r\n    border-radius: 2rem 2rem 0 0;\r\n    margin: 0 .5rem;\r\n}\r\n\r\n.items>img {\r\n    width: 30rem; \r\n    height: 30vh;\r\n}\r\n\r\n.item-img {\r\n    border-radius: 2rem 2rem 0 0;\r\n}\r\n\r\n.item-title {\r\n    font-size: 1.7rem;\r\n    font-weight: bold;\r\n    color: #FFFFFF;\r\n    text-align: left;\r\n    max-height: 5vh;\r\n    position: absolute;\r\n    bottom: 4rem;\r\n    left: 1rem;\r\n}\r\n\r\n.item-rating {\r\n    /* padding: 1rem; */\r\n    text-align: left;\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    z-index: 1;\r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto;\r\n    background-color: #000000;\r\n    background-color: #00000066;\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #000000;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    height: 2rem;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/main-container/results/swiper/swiper.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main-container/results/swiper/swiper.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"swiper\">\r\n  <div\r\n    ng2-carouselamos\r\n    [width] = \"1200\"\r\n    [items] = \"items\"\r\n    [$item] = \"item\"\r\n    [$prev] = \"prev\"\r\n    [$next] = \"next\">\r\n  </div>\r\n\r\n  <ng-template #prev>\r\n    <div class = \"arrows\">\r\n        <img src = \"../../../assets/img/left_arrow.png\"/>\r\n    </div>\r\n  </ng-template>\r\n   \r\n  <ng-template #next>\r\n    <div class = \"arrows\">\r\n        <img src = \"../../../assets/img/right_arrow.png\"/>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template let-item let-i = \"index\" #item>\r\n    <mat-card class = \"items\" (click) = \"onSelectItem(item)\">\r\n      <img class = \"item-img\" src=\"{{ item.photoUrl }}\"/>\r\n      <div class = \"item-title\">{{ item.name }}</div>\r\n      <app-star-rating [rating]=\"item.rating\"></app-star-rating>\r\n      <app-speech-action\r\n        *ngIf=\"isSpeechActionCommand\"\r\n        [item]=\"item\"\r\n        (changeSelectedItem)=\"onSelectItem($event)\">\r\n      </app-speech-action>\r\n    </mat-card>\r\n    \r\n    \r\n  </ng-template>\r\n</div>\r\n\r\n<!-- <div class = \"modal\" id = \"myModal\" *ngIf = \"selectedItem\">\r\n    <div class = \"modal-content\">X\r\n      <div class = \"close\" (click)=\"closepage()\">x</div>\r\n      <app-activity [selectedItem] = \"selectedItem\"></app-activity>\r\n    </div>\r\n</div> -->\r\n\r\n<div *ngIf=\"selectedItem\">\r\n  <app-activity [selectedItem]=\"selectedItem\"></app-activity>\r\n</div>"

/***/ }),

/***/ "./src/app/main-container/results/swiper/swiper.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main-container/results/swiper/swiper.component.ts ***!
  \*******************************************************************/
/*! exports provided: SwiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _activity_activity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity/activity.model */ "./src/app/main-container/results/swiper/activity/activity.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwiperComponent = /** @class */ (function () {
    function SwiperComponent() {
        this.isSpeechActionCommand = false;
    }
    SwiperComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.listenSpeechTypeChanged !== undefined)
            this.listenSpeechTypeChanged
                .subscribe(function (speechActionCommand) { return _this.isSpeechActionCommand = speechActionCommand.toLowerCase() === _this.speechActionCommand.toLowerCase(); });
    };
    SwiperComponent.prototype.onSelectItem = function (item) {
        console.log(item);
        this.selectedItem = item;
    };
    SwiperComponent.prototype.isActivity = function () {
        return this.selectedItem instanceof _activity_activity_model__WEBPACK_IMPORTED_MODULE_1__["Activity"];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwiperComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwiperComponent.prototype, "speechActionCommand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SwiperComponent.prototype, "listenSpeechTypeChanged", void 0);
    SwiperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-swiper',
            template: __webpack_require__(/*! ./swiper.component.html */ "./src/app/main-container/results/swiper/swiper.component.html"),
            styles: [__webpack_require__(/*! ./swiper.component.css */ "./src/app/main-container/results/swiper/swiper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwiperComponent);
    return SwiperComponent;
}());



/***/ }),

/***/ "./src/app/main-container/results/swiper/swiper.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main-container/results/swiper/swiper.module.ts ***!
  \****************************************************************/
/*! exports provided: SwiperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperModule", function() { return SwiperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star-rating/star-rating.component */ "./src/app/main-container/results/swiper/star-rating/star-rating.component.ts");
/* harmony import */ var _swiper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper.component */ "./src/app/main-container/results/swiper/swiper.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _speech_action_speech_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speech-action/speech-action.component */ "./src/app/main-container/results/swiper/speech-action/speech-action.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/main-container/results/swiper/activity/activity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SwiperModule = /** @class */ (function () {
    function SwiperModule() {
    }
    SwiperModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRatingComponent"],
                _swiper_component__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"],
                _speech_action_speech_action_component__WEBPACK_IMPORTED_MODULE_6__["SpeechActionComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_7__["ActivityComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_5__["Ng2CarouselamosModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            exports: [
                _swiper_component__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"],
                _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRatingComponent"]
            ]
        })
    ], SwiperModule);
    return SwiperModule;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/SpeechRecognition/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main-container/searchbox/SpeechRecognition/index.ts ***!
  \*********************************************************************/
/*! exports provided: SpeechModule, SpeechService, SpeechActionDirective, SpeechContextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./src/app/main-container/searchbox/SpeechRecognition/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SpeechModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SpeechService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechActionDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SpeechActionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechContextDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SpeechContextDirective"]; });




/***/ }),

/***/ "./src/app/main-container/searchbox/SpeechRecognition/module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-container/searchbox/SpeechRecognition/module.ts ***!
  \**********************************************************************/
/*! exports provided: SpeechModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechModule", function() { return SpeechModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speech.service */ "./src/app/main-container/searchbox/SpeechRecognition/speech.service.ts");
/* harmony import */ var _speech_action_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speech-action.directive */ "./src/app/main-container/searchbox/SpeechRecognition/speech-action.directive.ts");
/* harmony import */ var _speech_context_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speech-context.directive */ "./src/app/main-container/searchbox/SpeechRecognition/speech-context.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SpeechModule = /** @class */ (function () {
    function SpeechModule() {
    }
    SpeechModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _speech_action_directive__WEBPACK_IMPORTED_MODULE_3__["SpeechActionDirective"],
                _speech_context_directive__WEBPACK_IMPORTED_MODULE_4__["SpeechContextDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            providers: [_speech_service__WEBPACK_IMPORTED_MODULE_2__["SpeechService"]],
            exports: [
                _speech_action_directive__WEBPACK_IMPORTED_MODULE_3__["SpeechActionDirective"],
                _speech_context_directive__WEBPACK_IMPORTED_MODULE_4__["SpeechContextDirective"]
            ]
        })
    ], SpeechModule);
    return SpeechModule;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/SpeechRecognition/public_api.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main-container/searchbox/SpeechRecognition/public_api.ts ***!
  \**************************************************************************/
/*! exports provided: SpeechModule, SpeechService, SpeechActionDirective, SpeechContextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/app/main-container/searchbox/SpeechRecognition/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["SpeechModule"]; });

/* harmony import */ var _speech_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech.service */ "./src/app/main-container/searchbox/SpeechRecognition/speech.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechService", function() { return _speech_service__WEBPACK_IMPORTED_MODULE_1__["SpeechService"]; });

/* harmony import */ var _speech_action_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speech-action.directive */ "./src/app/main-container/searchbox/SpeechRecognition/speech-action.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechActionDirective", function() { return _speech_action_directive__WEBPACK_IMPORTED_MODULE_2__["SpeechActionDirective"]; });

/* harmony import */ var _speech_context_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speech-context.directive */ "./src/app/main-container/searchbox/SpeechRecognition/speech-context.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechContextDirective", function() { return _speech_context_directive__WEBPACK_IMPORTED_MODULE_3__["SpeechContextDirective"]; });







/***/ }),

/***/ "./src/app/main-container/searchbox/SpeechRecognition/speech-action.directive.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main-container/searchbox/SpeechRecognition/speech-action.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: SpeechActionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechActionDirective", function() { return SpeechActionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speech.service */ "./src/app/main-container/searchbox/SpeechRecognition/speech.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeechActionDirective = /** @class */ (function () {
    function SpeechActionDirective(_view, speech) {
        this._view = _view;
        this.speech = speech;
        this.ngSpeechActionContext = [];
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SpeechActionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.speech.declareCommand(this.ngSpeechActionCommand, this.ngSpeechActionContext);
        this.speech.command.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (command) { return _this.match(command); })).subscribe(function (_command) {
            var component = _this._view.injector.view.component;
            _this.ngSpeechAction.bind(component)();
        });
    };
    SpeechActionDirective.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    SpeechActionDirective.prototype.match = function (command) {
        var context = this.ngSpeechActionContext.map(function (w) { return w.toLowerCase(); }).join('/');
        return command.context === context && command.command === this.ngSpeechActionCommand.toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeechActionDirective.prototype, "ngSpeechAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SpeechActionDirective.prototype, "ngSpeechActionCommand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SpeechActionDirective.prototype, "ngSpeechActionContext", void 0);
    SpeechActionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngSpeechAction]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _speech_service__WEBPACK_IMPORTED_MODULE_3__["SpeechService"]])
    ], SpeechActionDirective);
    return SpeechActionDirective;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/SpeechRecognition/speech-context.directive.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main-container/searchbox/SpeechRecognition/speech-context.directive.ts ***!
  \****************************************************************************************/
/*! exports provided: SpeechContextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechContextDirective", function() { return SpeechContextDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speech.service */ "./src/app/main-container/searchbox/SpeechRecognition/speech.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeechContextDirective = /** @class */ (function () {
    function SpeechContextDirective(speech) {
        this.speech = speech;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SpeechContextDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.speech.declareContext(this.ngSpeechContext);
        var localContext = this.ngSpeechContext.map(function (w) { return w.toLowerCase(); });
        this.speech.context.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(function (context) {
            if (context === localContext.join('/')) {
                _this.speechClass = 'speech-active-context';
            }
            else if (context === localContext.slice(0, -1).join('/')) {
                _this.speechClass = 'speech-active-context-child';
            }
            else if (context.startsWith(localContext.join('/'))) {
                _this.speechClass = 'speech-active-context-ancestor';
            }
            else {
                _this.speechClass = '';
            }
        });
    };
    SpeechContextDirective.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SpeechContextDirective.prototype, "ngSpeechContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], SpeechContextDirective.prototype, "speechClass", void 0);
    SpeechContextDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngSpeechContext]'
        }),
        __metadata("design:paramtypes", [_speech_service__WEBPACK_IMPORTED_MODULE_3__["SpeechService"]])
    ], SpeechContextDirective);
    return SpeechContextDirective;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/SpeechRecognition/speech.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main-container/searchbox/SpeechRecognition/speech.service.ts ***!
  \******************************************************************************/
/*! exports provided: SpeechService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechService", function() { return SpeechService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DEFAULT_GRAMMAR = "#JSGF V1.0; grammar Digits;\npublic <Digits> = ( <digit> ) + ;\n<digit> = ( zero | one | two | three | four | five | six | seven | eight | nine );";
var SpeechService = /** @class */ (function () {
    function SpeechService(zone, lang) {
        var _this = this;
        this.zone = zone;
        this.lang = lang;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.command = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.commands = {};
        this.context = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.refreshGrammar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        var SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
        this.recognition = new SpeechRecognition();
        this.recognition.lang = lang;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
        this.recognition.continuous = true;
        this.recognition.onresult = function (event) {
            var message = {};
            var word = '';
            if (event.results) {
                var result = event.results[event.resultIndex];
                if (result.isFinal) {
                    if (result[0].confidence < 0.3) {
                        message = { error: true, message: 'Cannot recognize' };
                    }
                    else {
                        word = result[0].transcript.trim().toLowerCase();
                        message = { success: true, message: word };
                    }
                }
            }
            _this.zone.run(function () {
                if (message['error']) {
                    _this.message.error(message);
                }
                else {
                    _this.message.next(message);
                    var context = _this.getContextForWord(word);
                    if (context) {
                        _this.context.next(context);
                    }
                    else {
                        var isCommand = _this.commands[_this.context.value] && _this.commands[_this.context.value][word];
                        if (isCommand) {
                            _this.command.next({ context: _this.context.value, command: word });
                        }
                        else {
                            // try to match a global context command
                            var isGlobalCommand = _this.commands[''] && _this.commands[''][word];
                            if (isGlobalCommand) {
                                _this.command.next({ context: '', command: word });
                            }
                        }
                    }
                }
            });
        };
        this.recognition.onerror = function (error) {
            _this.zone.run(function () {
                _this.message.error(error);
            });
        };
        this.recognition.onstart = function () {
            _this.zone.run(function () {
                _this.started.next(true);
            });
        };
        this.recognition.onend = function () {
            _this.zone.run(function () {
                _this.started.next(false);
            });
        };
        this.refreshGrammar.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(function () {
            _this.setGrammar();
        });
    }
    SpeechService.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    SpeechService.prototype.start = function () {
        this.recognition.start();
    };
    SpeechService.prototype.stop = function () {
        this.recognition.stop();
    };
    SpeechService.prototype.declareContext = function (context) {
        var contextKey = context.map(function (w) { return w.toLowerCase(); }).join('/');
        if (!this.commands[contextKey]) {
            this.commands[contextKey] = {};
        }
        this.refreshGrammar.next(true);
    };
    SpeechService.prototype.declareCommand = function (command, context) {
        var contextKey = context.map(function (w) { return w.toLowerCase(); }).join('/');
        if (!this.commands[contextKey]) {
            this.commands[contextKey] = {};
        }
        this.commands[contextKey][command.toLowerCase()] = true;
        this.refreshGrammar.next(true);
    };
    SpeechService.prototype.setContext = function (context) {
        var contextKey = context.map(function (w) { return w.toLowerCase(); }).join('/');
        this.context.next(contextKey);
    };
    SpeechService.prototype.getContextForWord = function (word) {
        // first try to match a subcontext of the current context
        var context = this.context.value ? this.context.value + '/' + word : word;
        if (this.commands[context]) {
            return context;
        }
        // then try top-level context
        if (this.commands[word]) {
            return word;
        }
        return null;
    };
    SpeechService.prototype.setGrammar = function () {
        var _this = this;
        var SpeechGrammarList = window['SpeechGrammarList'] || window['webkitSpeechGrammarList'];
        var words = {};
        Object.keys(this.commands).forEach(function (context) {
            context.split('/').forEach(function (word) {
                words[word] = true;
            });
            Object.keys(_this.commands[context]).forEach(function (command) { return words[command] = true; });
        });
        var grammar = DEFAULT_GRAMMAR + ' public <command> = ' + Object.keys(words).join(' | ') + ' ;';
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        this.recognition.grammars = speechRecognitionList;
    };
    SpeechService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('SPEECH_LANG')),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], String])
    ], SpeechService);
    return SpeechService;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/searchbox.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main-container/searchbox/searchbox.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field {\r\n    height: 1.7rem;\r\n    width: 50vw; \r\n    border:0px;\r\n    margin: 1rem;\r\n    font-size: 1.5rem;\r\n    color: #0D47A1;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.search-box-container {\r\n    border: 0.1rem solid #3E92D2;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 12px #888888;\r\n    margin: 1rem auto;\r\n    border-radius: 1rem;\r\n    background-color: #FFFFFF;\r\n    width: 58vw;\r\n}\r\n\r\n.new-search-box {\r\n    border: 0.1rem solid #3E92D2;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 12px #888888;\r\n    margin: 1rem auto;\r\n    border-radius: 1rem;\r\n    background-color: #FFFFFF;\r\n    width: 55vw;\r\n}\r\n\r\n.input-field:focus {\r\n    outline: none;\r\n}\r\n\r\n.send {\r\n    cursor: pointer;\r\n    margin: 0.5rem; \r\n    margin-left: 1rem;\r\n    color:#3E92D2;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/main-container/searchbox/searchbox.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-container/searchbox/searchbox.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass] = \"{\r\n    'search-box-container': !(input == ' '|| input == ''),\r\n    'new-search-box':input == ' '|| input == ''\r\n    }\">\r\n    <input type = \"text\" class = \"input-field\" [(ngModel)] = \"input\" placeholder = \"Type Your Request Here...\"\r\n        (keyup.enter) = \"check()\"/>\r\n    <app-speech-recogniser \r\n        *ngIf = \"microphone\"\r\n        (onChangeInput) = \"onChangeInput($event)\">\r\n    </app-speech-recogniser>\r\n        <mat-icon class = \"send\" *ngIf = \"!(input == ' ' || input == '')\" (click) = \"check()\"> send </mat-icon>\r\n</div>"

/***/ }),

/***/ "./src/app/main-container/searchbox/searchbox.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-container/searchbox/searchbox.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchboxComponent", function() { return SearchboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chats.service */ "./src/app/main-container/chats.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tripassistant.service */ "./src/app/services/tripassistant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchboxComponent = /** @class */ (function () {
    function SearchboxComponent(chatsService, http, tripassistantService) {
        this.chatsService = chatsService;
        this.http = http;
        this.tripassistantService = tripassistantService;
        //@Input() usermessage:{sent:boolean,context:string};
        this.input = '';
        this.final = '';
        this.microphone = window['SpeechRecognition'] !== undefined || window['webkitSpeechRecognition'] !== undefined;
    }
    SearchboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var observe = _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyAGsJD6XqB9zheEOUoYFpOCGuPuDlUWhOc');
                observe.subscribe(function (response) {
                    _this.cityResults = response;
                    for (var indexer1 = 0; indexer1 < _this.cityResults.results[1].address_components.length; indexer1++) {
                        for (var indexer2 = 0; indexer2 < _this.cityResults.results[1].address_components[indexer1].types.length; indexer2++)
                            if (_this.cityResults.results[1].address_components[indexer1].types[indexer2] == 'locality')
                                _this.city = _this.cityResults.results[1].address_components[indexer1].long_name;
                    }
                });
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    SearchboxComponent.prototype.onChangeInput = function (message) {
        this.input = message;
    };
    SearchboxComponent.prototype.check = function () {
        var _this = this;
        this.final = this.input;
        this.input = '';
        if (this.final != '') {
            this.chatsService.addChat('user', this.final);
            this.tripassistantService.setShowSpinner(true);
            var observable = this.http.get('http://tripassistant-search-engine.ap-south-1.elasticbeanstalk.com/api/SearchResults?input=' + this.tripassistantService.getRequest() + ' ' + this.final + '&location=' + this.city);
            observable.subscribe(function (response) {
                _this.tripassistantService.setShowSpinner(false);
                _this.response = response;
                _this.tripassistantService.setType(_this.response.type);
                _this.tripassistantService.setResponse(_this.response.responseQuery);
                _this.tripassistantService.setResponseQuery(_this.response.responseQuery);
                _this.tripassistantService.setRequest(_this.response.request);
                _this.tripassistantService.setActivities(_this.response.activityList);
                _this.tripassistantService.setHotels(_this.response.hotelList);
                if (_this.tripassistantService.getType() == 'request') {
                    _this.chatsService.addChat('assistant', _this.tripassistantService.getResponse());
                }
            });
        }
    };
    SearchboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbox',
            template: __webpack_require__(/*! ./searchbox.component.html */ "./src/app/main-container/searchbox/searchbox.component.html"),
            styles: [__webpack_require__(/*! ./searchbox.component.css */ "./src/app/main-container/searchbox/searchbox.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_chats_service__WEBPACK_IMPORTED_MODULE_1__["ChatsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_tripassistant_service__WEBPACK_IMPORTED_MODULE_3__["TripAssistantService"]])
    ], SearchboxComponent);
    return SearchboxComponent;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/searchbox.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main-container/searchbox/searchbox.module.ts ***!
  \**************************************************************/
/*! exports provided: SearchboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchboxModule", function() { return SearchboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speech_recogniser_speech_recogniser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech-recogniser/speech-recogniser.component */ "./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.ts");
/* harmony import */ var _searchbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbox.component */ "./src/app/main-container/searchbox/searchbox.component.ts");
/* harmony import */ var _SpeechRecognition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeechRecognition */ "./src/app/main-container/searchbox/SpeechRecognition/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchboxModule = /** @class */ (function () {
    function SearchboxModule() {
    }
    SearchboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _speech_recogniser_speech_recogniser_component__WEBPACK_IMPORTED_MODULE_1__["SpeechRecogniserComponent"],
                _searchbox_component__WEBPACK_IMPORTED_MODULE_2__["SearchboxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _SpeechRecognition__WEBPACK_IMPORTED_MODULE_3__["SpeechModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            exports: [
                _searchbox_component__WEBPACK_IMPORTED_MODULE_2__["SearchboxComponent"]
            ]
        })
    ], SearchboxModule);
    return SearchboxModule;
}());



/***/ }),

/***/ "./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mic {\r\n    cursor: pointer;\r\n    color:#3E92D2;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.mic-btn {\r\n    background-color: #FFFFFF;\r\n    outline: none;\r\n    border: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img class=\"mic-icon\" src=\"../../../assets/img/mic.png\" alt=\"mic\" (click)=\"toggleVoiceRecognition()\"> -->\r\n<button (click) = \"toggleVoiceRecognition()\" class = \"mic-btn\"><mat-icon  class = \"mic\" > mic </mat-icon></button>\r\n"

/***/ }),

/***/ "./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpeechRecogniserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecogniserComponent", function() { return SpeechRecogniserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _SpeechRecognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SpeechRecognition */ "./src/app/main-container/searchbox/SpeechRecognition/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeechRecogniserComponent = /** @class */ (function () {
    function SpeechRecogniserComponent(speech) {
        this.speech = speech;
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.comment = '';
        this.started = false;
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SpeechRecogniserComponent.prototype.ngOnInit = function () {
    };
    SpeechRecogniserComponent.prototype.toggleVoiceRecognition = function () {
        if (this.started) {
            this.speech.stop();
            this.recordStart();
        }
        else {
            this.speech.start();
            this.recordStop();
        }
        this.started = !this.started;
    };
    SpeechRecogniserComponent.prototype.recordStart = function () {
        var _this = this;
        this.subscription = this.speech.message.subscribe(function (msg) {
            _this.comment = msg.message;
            _this.inputChanged.emit(_this.comment);
        });
    };
    SpeechRecogniserComponent.prototype.recordStop = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onChangeInput'),
        __metadata("design:type", Object)
    ], SpeechRecogniserComponent.prototype, "inputChanged", void 0);
    SpeechRecogniserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speech-recogniser',
            template: __webpack_require__(/*! ./speech-recogniser.component.html */ "./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.html"),
            styles: [__webpack_require__(/*! ./speech-recogniser.component.css */ "./src/app/main-container/searchbox/speech-recogniser/speech-recogniser.component.css")]
        }),
        __metadata("design:paramtypes", [_SpeechRecognition__WEBPACK_IMPORTED_MODULE_2__["SpeechService"]])
    ], SpeechRecogniserComponent);
    return SpeechRecogniserComponent;
}());



/***/ }),

/***/ "./src/app/services/speech-recogniser.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/speech-recogniser.service.ts ***!
  \*******************************************************/
/*! exports provided: SpeechRecogniserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecogniserService", function() { return SpeechRecogniserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SpeechRecogniserService = /** @class */ (function () {
    function SpeechRecogniserService(lang) {
        var _this = this;
        this.lang = lang;
        this.transcriptChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSpeechRecognitionAvailable = window['SpeechRecognition'] !== undefined || window['webkitSpeechRecognition'] !== undefined;
        if (this.isSpeechRecognitionAvailable) {
            var SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
            this.recognition = new SpeechRecognition();
            this.recognition.lang = lang;
            this.recognition.interimResults = false;
            this.recognition.maxAlternatives = 1;
            this.recognition.continuous = true;
            this.recognition.onresult = function (event) {
                if (event.results) {
                    _this.transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
                    _this.transcriptChanged.emit(_this.transcript);
                }
            };
        }
    }
    SpeechRecogniserService.prototype.start = function () {
        this.recognition.start();
    };
    SpeechRecogniserService.prototype.stop = function () {
        this.recognition.stop();
    };
    SpeechRecogniserService.prototype.getTranscript = function () {
        return this.transcript;
    };
    SpeechRecogniserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('SPEECH_LANG')),
        __metadata("design:paramtypes", [String])
    ], SpeechRecogniserService);
    return SpeechRecogniserService;
}());



/***/ }),

/***/ "./src/app/services/tripassistant.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tripassistant.service.ts ***!
  \***************************************************/
/*! exports provided: TripAssistantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripAssistantService", function() { return TripAssistantService; });
var TripAssistantService = /** @class */ (function () {
    function TripAssistantService() {
        this.type = 'request';
        this.request = '';
        this.showSpinner = false;
    }
    TripAssistantService.prototype.setActivities = function (activities) {
        this.activities = activities;
    };
    TripAssistantService.prototype.setHotels = function (hotels) {
        this.hotels = hotels;
    };
    TripAssistantService.prototype.setType = function (type) {
        this.type = type;
    };
    TripAssistantService.prototype.setRequest = function (request) {
        this.request = request;
    };
    TripAssistantService.prototype.setResponse = function (response) {
        this.response = response;
    };
    TripAssistantService.prototype.setResponseQuery = function (responseQuery) {
        this.responseQuery = responseQuery;
    };
    TripAssistantService.prototype.setShowSpinner = function (showSpinner) {
        this.showSpinner = showSpinner;
    };
    TripAssistantService.prototype.getActivities = function () {
        return this.activities.slice();
    };
    TripAssistantService.prototype.getHotels = function () {
        return this.hotels.slice();
    };
    TripAssistantService.prototype.getType = function () {
        return this.type;
    };
    TripAssistantService.prototype.getRequest = function () {
        return this.request;
    };
    TripAssistantService.prototype.getResponse = function () {
        return this.response;
    };
    TripAssistantService.prototype.getResponseQuery = function () {
        return this.responseQuery;
    };
    TripAssistantService.prototype.getShowSpinner = function () {
        return this.showSpinner;
    };
    return TripAssistantService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Krish\Desktop\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map