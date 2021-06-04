import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { QuestionAssesmentComponent } from './question-assesment/question-assesment.component';
import {HttpClientModule} from "@angular/common/http"
import { AssesmentRoutingModule } from './assessment.routing.module';
import { BrowserModule } from '@angular/platform-browser';
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
    BrowserModule,
    HttpClientModule,
    ArchwizardModule,
    AssesmentRoutingModule
  ],
})
export class AssesmentModule { }
