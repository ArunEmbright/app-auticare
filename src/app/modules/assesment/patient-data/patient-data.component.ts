import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  name: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
 onSubmit(data){
   
   this.router.navigate(['/auth/signup'])
 }
}
