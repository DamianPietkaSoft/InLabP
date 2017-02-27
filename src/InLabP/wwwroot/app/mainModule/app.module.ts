import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routes';


import { AppComponent } from './app.component';
import { NewsComponent } from './Newses/news.component';
import { CategoryComponent } from './Categories/category.component';
import { WelcomeComponent } from './Welcome/welcome.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, JsonpModule, AppRoutingModule],
    declarations: [
        AppComponent,
        NewsComponent,
        CategoryComponent,
        WelcomeComponent
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }