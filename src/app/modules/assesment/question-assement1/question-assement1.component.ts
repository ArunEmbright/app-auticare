import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../auth/_services/auth.service";
import { ScoreModel } from "../Assessment.model"
import {AssessmentService} from '../assessment.service'
@Component({
  selector: "app-question-assement1",
  templateUrl: "./question-assement1.component.html",
  styleUrls: ["./question-assement1.component.scss"],
})
export class QuestionAssement1Component implements OnInit {
  form: FormGroup;
  value: string = "";
  total: number;

  sum: any = "0";
  present: number;

  constructor(private auth: AssessmentService) {}

  ngOnInit(): void {}

  onItemChange(val: any) {
    // console.log(this.value)
  }

  increment() {
    var first = parseInt(this.value);
    var second = parseInt(this.sum);
    this.sum = Number(first + second);
    //  console.log(first)
    //  console.log(second)
    console.log(this.sum);
  }

  PostScore() {
    this.auth.score(this.sum)
  }

  // onItemChange(value: number) {
  //   var result = this.num;
  //   result = result + value;
  //   console.log(result);
  // }
  // onItemChange(value){
  //   var value = value
  //   var result = 0;
  //   console.log(value)
  //   // var DiffOfYear = newDate.getTime() - date.getTime()
  //   // var DiffOfDays = DiffOfYear/(a00 * 3600 * 24)
  //   // this.age=(Math.round(DiffOfDays/360)-1);
  //   // console.log(this.age);
  //   this.result = Math.abs(value+result);

  //   console.log(this.result)
  // }

  // addition(){
  //   this.result = parseInt(this.firstNum) + parseInt(this.secondNum)
  //   console.log(this.result)
  // }
}
