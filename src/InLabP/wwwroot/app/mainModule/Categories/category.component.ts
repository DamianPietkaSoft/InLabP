import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule, Response } from '@angular/http';


import { News } from '../Newses/news.component';
import { CategoryService } from './category.service';
import { NewsService } from '../Newses/news.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export class Category {
    id: number;
    name: string;
    newses: News[];
}

@Component({
    selector: 'my-category',
    templateUrl: './app/mainModule/Categories/categoryView.html',
    providers: [CategoryService, NewsService]
})
export class CategoryComponent implements OnInit {
    selectedCategory: Category;
    categories: Category[];

    constructor(private _categoryService: CategoryService, private _newsService: NewsService, private router: Router) { }

    showCategory(cat: Category): void {
        this.selectedCategory = cat;
        this._newsService.getNewsesForCategory(cat.id)
            .subscribe(res => {
                this.selectedCategory.newses = res;
                console.log(res);
            });
    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this._categoryService.getCategories()
            .subscribe(res => {
                this.categories = res;
                console.log(res);
            }
            );
    }

    showSelectedNews(news: News) {
        this.router.navigate(['/newses', news.id]);
    }
}