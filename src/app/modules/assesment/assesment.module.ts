import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';

import { AssesmentRoutingModule } from './assesment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

import { PatientresultComponent } from './patientresult/patientresult.component';
import { AssessmentComponent } from './extrea/assessment/assessment.component';


@NgModule({
  declarations: [
 
    PatientDataComponent,

   
    PatientresultComponent,
   
    AssessmentComponent,
   

   
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    AssesmentRoutingModule
  ],
})
export class AssesmentModule { }
