import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserScoreComponent } from './user-score/user-score.component';


@NgModule({
  declarations: [UserDetailComponent, UserScoreComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
