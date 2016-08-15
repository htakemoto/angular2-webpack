import {Routes} from '@angular/router';
import {AboutComponent} from './about/about';
import {HomeComponent} from './home/home';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser';
import {RepoListComponent} from './github/repo-list/repo-list';
import {RepoDetailComponent} from './github/repo-detail/repo-detail';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'github', component: RepoBrowserComponent,
    children: [
      {path: '', component: RepoListComponent},
      {path: ':org', component: RepoListComponent,
        children: [
          {path: '', component: RepoDetailComponent},
          {path: ':repo', component: RepoDetailComponent}
        ]
      }]
  }
];