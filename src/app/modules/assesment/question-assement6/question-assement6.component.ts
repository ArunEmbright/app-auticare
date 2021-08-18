import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/_services/auth.service";
import {AssessmentService} from '../assessment.service'
@Component({
  selector: "app-question-assement6",
  templateUrl: "./question-assement6.component.html",
  styleUrls: ["./question-assement6.component.scss"],
})
export class QuestionAssement6Component implements OnInit {
  value: string = "";
  patientName:string;
  age:Number;
  userId:string;
  
   clicked = false;
  sum: any = "0";
  constructor(private assessment: AssessmentService,private auth: AuthService ) {
    this.auth.getUsers().subscribe(res=>{
      this.patientName = res[0].patientName
      this.age = res[0].age
      this.userId = res[0].userId
      // console.log(res[0])
      
    })
  }

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
    
    this.assessment.score(this.sum)
    
  }
  ScoreApi(patientName:string,age:Number,userId:string){
    
   this.assessment.scoreApi(patientName,age,userId).subscribe((res)=>{
     
   })
   console.log("clcik")
  }
  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    
}
}