import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import {UserScoreComponent} from './user-score/user-score.component'
import { FreeAppointmentComponent } from './free-appointment/free-appointment.component';
import { TherapistDetailsComponent } from './therapist/therapist-details/therapist-details.component'
import { TherapistFormComponent } from './therapist/therapist-form/therapist-form.component';
import { AddUserComponent } from './user/add-user/add-user.component';
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
  {
    path: 'appointment',
    component: FreeAppointmentComponent,
  },
  {
    path: 'therapist-details',
    component: TherapistDetailsComponent,
  },
  {
    path: 'therapist-form',
    component: TherapistFormComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
 