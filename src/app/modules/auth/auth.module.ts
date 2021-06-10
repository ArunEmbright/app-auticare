import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UIModule } from '../../shared/ui/ui.module';

import { SignupComponent } from './signup/signup.component';

import { ArchwizardModule } from 'angular-archwizard';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [ SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    ArchwizardModule,
    UIModule,
    AuthRoutingModule,
    CarouselModule,
  ]
})
export class AuthModule { }
