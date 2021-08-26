import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientresultComponent } from './patientresult/patientresult.component';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import { QuestionAssement1Component } from './question-assement1/question-assement1.component'
import { QuestionAssement2Component } from './question-assement2/question-assement2.component';
import { QuestionAssement3Component } from './question-assement3/question-assement3.component';
import { QuestionAssement4Component } from './question-assement4/question-assement4.component';
import { QuestionAssement5Component } from './question-assement5/question-assement5.component';
import { QuestionAssement6Component } from './question-assement6/question-assement6.component';
import { AssessmentPage2Component } from './assessment-page2/assessment-page2.component';
import { AssessmentPage3Component } from './assessment-page3/assessment-page3.component';
import { AssessmentPage4Component } from './assessment-page4/assessment-page4.component';
import { AssessmentPage5Component } from './assessment-page5/assessment-page5.component';
import { AssessmentPage6Component } from './assessment-page6/assessment-page6.component';
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
