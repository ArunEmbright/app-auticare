import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientresultComponent } from './patientresult/patientresult.component';

import { AssessmentComponent } from './extrea/assessment/assessment.component';


const routes: Routes = [
  
  {path:'', redirectTo:'child', pathMatch:'full'},
 
  {
    path: 'child',
    component: PatientDataComponent,
  },
   {
    path: 'result',
    component: PatientresultComponent,
  },
  {
    path:"assessment",
    component:AssessmentComponent
  }

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AssesmentRoutingModule { }
