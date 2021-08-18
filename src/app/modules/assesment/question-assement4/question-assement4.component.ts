import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/_services/auth.service";
import {AssessmentService} from '../assessment.service'
@Component({
  selector: "app-question-assement4",
  templateUrl: "./question-assement4.component.html",
  styleUrls: ["./question-assement4.component.scss"],
})
export class QuestionAssement4Component implements OnInit {
  value: string = "";
  total: number;

  sum: any = "0";
  constructor(private auth: AssessmentService) {}

  ngOnInit(): void {}

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
}