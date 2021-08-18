import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UserScoreComponent} from './user-score/user-score.component'
const routes: Routes = [
  
  {path:'', redirectTo:'child', pathMatch:'full'},
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'users',
    component: UserDetailComponent,
  },
  {
    path: 'score',
    component: UserScoreComponent,
  },
  

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
 