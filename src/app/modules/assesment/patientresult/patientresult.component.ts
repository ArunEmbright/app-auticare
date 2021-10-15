import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from "../../auth/_services/auth.service";
import { User } from 'src/app/core/models/auth.models';
@Component({
  selector: 'app-patientresult',
  templateUrl: './patientresult.component.html',
  styleUrls: ['./patientresult.component.scss']
})
export class PatientresultComponent implements OnInit {
  data:any;
  score: number;
  AutismState:any;
  patientName:string;
  age:Number;
  userId:string;
  users:User[];
  constructor(private auth:AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.auth.getList().subscribe(data =>{
      console.log(data)
      this.score =data[0].sum
      this.patientName = data[0].patientName
      this.age = data[0].age
      this.userId = data[0].userId
    this.AutismState=data[0].degreeOfAutism
    })
  
    
      
     
    
   
  }
 


  

}
