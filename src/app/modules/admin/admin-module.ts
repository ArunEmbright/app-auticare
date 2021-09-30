import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserScoreComponent } from './user-score/user-score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select'

import { TherapistFormComponent } from './therapist/therapist-form/therapist-form.component';
import { TherapistDetailsComponent } from './therapist/therapist-details/therapist-details.component';
import { FreeAppointmentComponent } from './appointment/free-appointment/free-appointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { TherapySessionComponent } from './appointment/therapy-session/therapy-session.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { TherapyBookingComponent } from './appointment/therapy-booking/therapy-booking.component';
import { SessionBookingComponent } from './booking/session-booking/session-booking.component';
import { EditTherapistComponent } from './therapist/edit-therapist/edit-therapist.component';
@NgModule({
  declarations: [AdminDashboardComponent,TherapySessionComponent,UserDetailComponent, AddUserComponent, FreeAppointmentComponent,TherapyBookingComponent,TherapistDetailsComponent,UserScoreComponent,EditTherapistComponent, TherapistFormComponent,SessionBookingComponent,EditUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgSelectModule ,
    FormsModule,
    ReactiveFormsModule,  

 
    
     
  ]
})
export class AdminModule { }
 