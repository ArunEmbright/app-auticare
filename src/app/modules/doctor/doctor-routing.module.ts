import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes=[
  {path:'',redirectTo:'patient-log',pathMatch:'full'},
  {
    path:'patient-log',
    component:DashbaordComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorRoutingModule { }
