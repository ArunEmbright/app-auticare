import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIModule } from "../../shared/ui/ui.module";
import { RouterModule } from "@angular/router";
import { SelectTherapistComponent } from "./therapist-selection/therapist.component";
import { TherapistRoutingModule } from "./therapist-routing.module";
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { ArchwizardModule } from "angular-archwizard";
import { NgbAccordionModule, NgbCollapseModule, NgbNavModule, NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    SelectTherapistComponent,
     TherapistListComponent
    ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule, 
    UIModule, 
    TherapistRoutingModule,

    ArchwizardModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbCollapseModule,

  ],
  exports: [RouterModule],
})
export class TherapistModule {}
