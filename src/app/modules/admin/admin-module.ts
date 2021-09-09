import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserScoreComponent } from './user-score/user-score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RlTagInputModule} from 'angular2-tag-input';
import { TherapistFormComponent } from './therapist/therapist-form/therapist-form.component';
import { TherapistDetailsComponent } from './therapist/therapist-details/therapist-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FreeAppointmentComponent } from './appointment/free-appointment/free-appointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { TherapySessionComponent } from './appointment/therapy-session/therapy-session.component';

@NgModule({
  declarations: [AdminDashboardComponent,TherapySessionComponent,UserDetailComponent, AddUserComponent, FreeAppointmentComponent,TherapistDetailsComponent, AdminLoginComponent,UserScoreComponent, TherapistFormComponent,],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RlTagInputModule 
    
  ]
})
export class AdminModule { }
