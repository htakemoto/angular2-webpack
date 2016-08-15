import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AboutComponent} from './about/about';
import {HomeComponent} from './home/home';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser';
import {RepoListComponent} from './github/repo-list/repo-list';
import {RepoDetailComponent} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, AboutComponent, RepoBrowserComponent, RepoListComponent, RepoDetailComponent, HomeComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}