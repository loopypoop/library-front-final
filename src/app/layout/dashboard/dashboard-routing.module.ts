import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardDetailComponent} from './dashboard-detail/dashboard-detail.component';
import {AuthorDetailComponent} from './author-detail/author-detail.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'details/:id', component: DashboardDetailComponent
  },
  {
    path: 'author/:id', component: AuthorDetailComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
