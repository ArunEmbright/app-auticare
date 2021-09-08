import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/_services/auth.service';
import { AdminService } from '../admin.service';
import { User } from 'src/app/core/models/auth.models';
import { Score } from '../../assesment/score.model';
import { Therapist } from '../therapist/therapist.model';
import { NumericValidator } from 'survey-angular';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users:User[];
  scores:Score[];
  therapist: Therapist[];
  length:number
  assesment:number;
  doctor:number;
  FreeAppointment:number;
  constructor(private accountService: AdminService) { }

  ngOnInit(): void {
   this.userDetail()
  this.Assessment()
  this.therapists()
  this.appointment()
  }
  private userDetail(){
    this.accountService.getUser().subscribe((
      users:User[]
    )=>{
      this.users=users;
     this.length = users.length
    })
  }
  private Assessment(){
    this.accountService.getScore().subscribe((scores:Score[]
      )=>{
     this.scores = scores
     this.assesment = this.scores.length
    })
   

  }
  private   therapists(){
    this.accountService.getDoctor().subscribe((therapist:Therapist[]
      )=>{
        this.therapist =therapist
        this.doctor = this.therapist.length
        console.log(this.doctor)
      })
  }
  private appointment(){
    this.accountService.getAppointment().subscribe((
      users:User[]
    )=>{
      this.users=users;
     this.FreeAppointment =this.users.length
    })
  }
  
}
