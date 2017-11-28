import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: AppComponent /*,data:{title: 'test'}*/},
  /*{ path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true /*debugging purpouse only*/})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
