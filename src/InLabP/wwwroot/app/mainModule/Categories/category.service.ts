import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from './category.component';

@Injectable()
export class CategoryService {
    private getCatUrl = "/Home/GetCategories";

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.getCatUrl)
            .map((res: Response) => res.json().data as Category[]);
    };
    
}
