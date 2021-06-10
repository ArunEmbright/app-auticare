import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UIModule } from "../../shared/ui/ui.module";
import { RouterModule } from "@angular/router";
import { SelectTherapistComponent } from "./therapist-selection/therapist.component";
import { TherapistRoutingModule } from "./therapist-routing.module";
import { TherapistListComponent } from './therapist-list/therapist-list.component';



@NgModule({
  declarations: [SelectTherapistComponent, TherapistListComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    UIModule, 
    TherapistRoutingModule
  ],
  exports: [RouterModule],
})
export class TherapistModule {}
