import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UIModule } from "../../shared/ui/ui.module";
import { RouterModule, Routes } from "@angular/router";
import { SelectTherapistComponent } from "./therapist-selection/therapist.component";

const route: Routes = [
  {
    path: "therapist-selection",
    component: SelectTherapistComponent,
  },
];

@NgModule({
  declarations: [SelectTherapistComponent],
  imports: [CommonModule, FormsModule, UIModule, RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class TherapistModule {}
