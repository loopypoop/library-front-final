import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardDetailComponent} from './dashboard-detail/dashboard-detail.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'details/:id', component: DashboardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
