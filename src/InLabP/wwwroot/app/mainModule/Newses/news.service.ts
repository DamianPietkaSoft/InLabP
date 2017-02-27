import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { News } from './news.component';

@Injectable()
export class NewsService {
    private getNewsUrl = "/Home/GetNewses";
    private getNewsForCat = "/Home/GetNewsesForSelectedCategory";
    private getNewsDetails = "/Home/GetNewsDetails";

    constructor(private http: Http) { }

    getNewes(): Observable<News[]> {
        return this.http.get(this.getNewsUrl)
            .map((res: Response) => res.json().data as News[]);
    };

    getNewsesForCategory(selectedId: number): Observable<News[]> {
        let params = new URLSearchParams();
        params.set('id', selectedId.toString()); // the user's search value

        return this.http.get(this.getNewsForCat, { search: params })
            .map((res: Response) => res.json().data as News[]);
    }

    getSelectedNews(id: number): Observable<News> {
        let params = new URLSearchParams();
        params.set('id', id.toString()); // the user's search value

        return this.http.get(this.getNewsDetails, { search: params })
            .map((res: Response) => res.json().data as News);
    }
}
