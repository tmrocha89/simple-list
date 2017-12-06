import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists/lists.component';
import { ListPageComponent } from './lists/list-page/list-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list-page', pathMatch: 'full'},
  {path: 'list', component: ListsComponent /*,data:{title: 'test'}*/},
  {path: 'list-page', component: ListPageComponent /*,data:{title: 'test'}*/}
  /*{ path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true /*debugging purpouse only*/})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
