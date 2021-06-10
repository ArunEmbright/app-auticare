import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UIModule } from '../../shared/ui/ui.module';

import { SignupComponent } from './signup/signup.component';

// import {MatIconModule} from '@angular/material/icon';
import { AuthRoutingModule } from './auth-routing';
// import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';
@NgModule({
  declarations: [ SignupComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbAlertModule,
    ArchwizardModule,
    UIModule,
    AuthRoutingModule,
    CarouselModule,
    // MatIconModule
  ]
})
export class AuthModule { }
