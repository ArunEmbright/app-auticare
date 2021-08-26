import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/_services/auth.service';
import { User } from 'src/app/core/models/auth.models';
import { Score } from '../../assesment/score.model';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users:User[];
  scores:Score[];
  length:number
  assesment:number;
  constructor(private accountService: AuthService) { }

  ngOnInit(): void {
   this.userDetail()
  this.Assessment()
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
    
}
