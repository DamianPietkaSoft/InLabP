"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var news_component_1 = require("./Newses/news.component");
var category_component_1 = require("./Categories/category.component");
var welcome_component_1 = require("./Welcome/welcome.component");
var routes = [
    { path: 'categories', component: category_component_1.CategoryComponent },
    { path: 'newses', component: news_component_1.NewsComponent },
    { path: 'newses/:id', component: news_component_1.NewsComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map