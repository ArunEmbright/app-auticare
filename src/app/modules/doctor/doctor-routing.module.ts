import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

const routes: Routes=[
  {path:'',redirectTo:'patient-log',pathMatch:'full'},
  {
    path:'patient-log',
    component:DashbaordComponent
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
