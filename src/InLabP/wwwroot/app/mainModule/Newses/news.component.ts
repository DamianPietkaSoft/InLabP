import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule, Response } from '@angular/http';
import { NewsService } from './news.service';
import { ActivatedRoute } from '@angular/router';

export class News {
    id: number;
    title: string;
    body: string;
}


@Component({
    selector: 'my-news',
    templateUrl: './app/mainModule/Newses/newsView.html',
    providers: [NewsService]
})
export class NewsComponent implements OnInit {
    selectedNews: News;
    newses: News[];
    paramId: number = 0;

    constructor(private _newsService: NewsService, private route: ActivatedRoute) {  };



    showNews(news: News): void {
        this.selectedNews = news;
    }

    ngOnInit() {
        this.getNewses();

        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                if (id != null && id > 0) {
                    this._newsService
                        .getSelectedNews(id)
                        .subscribe(res => this.selectedNews = res);
                }
            });
        
    }

    getNewses(): void {
        this._newsService.getNewes()
            .subscribe(res => {
                this.newses = res;
                console.log(res);
            });
    }
}