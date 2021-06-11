import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { QuestionAssesmentComponent } from './question-assesment/question-assesment.component';


const routes: Routes = [
  
  {path:'', redirectTo:'patient', pathMatch:'full'},
  {
    path: 'patient',
    component: PatientDataComponent,
  },
  {
    path: 'question',
    component: QuestionAssesmentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AssesmentRoutingModule { }
