import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/_services/auth.service';
import { Score } from '../../assesment/score.model';
@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.scss']
})
export class UserScoreComponent implements OnInit {
 scores:Score[];
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getScore().subscribe((scores:Score[]
      )=>{
     this.scores = scores
    })
  }

}
