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
var category_service_1 = require("./category.service");
var news_service_1 = require("../Newses/news.service");
var router_1 = require("@angular/router");
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var CategoryComponent = (function () {
    function CategoryComponent(_categoryService, _newsService, router) {
        this._categoryService = _categoryService;
        this._newsService = _newsService;
        this.router = router;
    }
    CategoryComponent.prototype.showCategory = function (cat) {
        var _this = this;
        this.selectedCategory = cat;
        this._newsService.getNewsesForCategory(cat.id)
            .subscribe(function (res) {
            _this.selectedCategory.newses = res;
            console.log(res);
        });
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
            console.log(res);
        });
    };
    CategoryComponent.prototype.showSelectedNews = function (news) {
        this.router.navigate(['/newses', news.id]);
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'my-category',
        templateUrl: './app/mainModule/Categories/categoryView.html',
        providers: [category_service_1.CategoryService, news_service_1.NewsService]
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, news_service_1.NewsService, router_1.Router])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map