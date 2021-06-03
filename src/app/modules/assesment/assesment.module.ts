import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import {  RouterModule, Routes } from '@angular/router';

const route: Routes=[
{
  path:'patient-data',
  component:PatientDataComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AssesmentModule { }
