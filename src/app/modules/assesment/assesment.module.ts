import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { QuestionAssesmentComponent } from './question-assesment/question-assesment.component';
import { AssesmentRoutingModule } from './assesment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import { QuestionAssement2Component } from './question-assement2/question-assement2.component';
import { QuestionAssement3Component } from './question-assement3/question-assement3.component';
import { QuestionAssement4Component } from './question-assement4/question-assement4.component';
import { QuestionAssement5Component } from './question-assement5/question-assement5.component';
import { QuestionAssement6Component } from './question-assement6/question-assement6.component';
import { QuestionAssement1Component } from './question-assement1/question-assement1.component';
import { AssessmentPage2Component } from './assessment-page2/assessment-page2.component';
import { AssessmentPage3Component } from './assessment-page3/assessment-page3.component';
import { AssessmentPage4Component } from './assessment-page4/assessment-page4.component';
import { AssessmentPage5Component } from './assessment-page5/assessment-page5.component';
import { AssessmentPage6Component } from './assessment-page6/assessment-page6.component';

import { PatientresultComponent } from './patientresult/patientresult.component';


@NgModule({
  declarations: [
    QuestionAssesmentComponent,
    PatientDataComponent,
    AssessmentPageComponent,
    QuestionAssement2Component,
    QuestionAssement3Component,
    QuestionAssement4Component,
    QuestionAssement5Component,
    QuestionAssement6Component,
    QuestionAssement1Component,
    AssessmentPage2Component,
    AssessmentPage3Component,
    AssessmentPage4Component,
    AssessmentPage5Component,
    AssessmentPage6Component,
   
    PatientresultComponent
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
