import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './Newses/news.component';
import { CategoryComponent } from './Categories/category.component';
import { WelcomeComponent } from './Welcome/welcome.component';

const routes: Routes = [
    { path: 'categories', component: CategoryComponent },
    { path: 'newses', component: NewsComponent },
    { path: 'newses/:id', component: NewsComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch:'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }