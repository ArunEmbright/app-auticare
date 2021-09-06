import { Component, OnInit } from '@angular/core';
import { Therapist } from '../therapist.model';
import { AdminService } from '../../admin.service';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
@Component({
  selector: 'app-therapist-details',
  templateUrl: './therapist-details.component.html',
  styleUrls: ['./therapist-details.component.scss']
})
export class TherapistDetailsComponent implements OnInit {
therapist: Therapist[];
  constructor(private auth:AdminService) { }

  ngOnInit(): void {
    this.auth.getDoctor().subscribe((therapist:Therapist[]
      )=>{
        this.therapist =therapist
        console.log(this.therapist)
      })
  }

}
 