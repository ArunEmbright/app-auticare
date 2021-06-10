import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { QuestionAssesmentComponent } from './question-assesment/question-assesment.component';
import { AssesmentRoutingModule } from './assesment-routing.module';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';


@NgModule({
  declarations: [
    QuestionAssesmentComponent,
    PatientDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArchwizardModule,
    AssesmentRoutingModule
  ],
})
export class AssesmentModule { }
