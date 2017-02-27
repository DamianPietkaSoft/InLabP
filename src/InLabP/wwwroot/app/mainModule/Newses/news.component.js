"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var news_service_1 = require("./news.service");
var router_1 = require("@angular/router");
var News = (function () {
    function News() {
    }
    return News;
}());
exports.News = News;
var NewsComponent = (function () {
    function NewsComponent(_newsService, route) {
        this._newsService = _newsService;
        this.route = route;
        this.paramId = 0;
    }
    ;
    NewsComponent.prototype.showNews = function (news) {
        this.selectedNews = news;
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNewses();
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            if (id != null && id > 0) {
                _this._newsService
                    .getSelectedNews(id)
                    .subscribe(function (res) { return _this.selectedNews = res; });
            }
        });
    };
    NewsComponent.prototype.getNewses = function () {
        var _this = this;
        this._newsService.getNewes()
            .subscribe(function (res) {
            _this.newses = res;
            console.log(res);
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        selector: 'my-news',
        templateUrl: './app/mainModule/Newses/newsView.html',
        providers: [news_service_1.NewsService]
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService, router_1.ActivatedRoute])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map