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
   console.warn(data)
  /**  this.http.post('http://localhost:4200/patient/data', data)
   .subscribe((result)=>{
     console.warn("resule", result)
   })*/
  this.router.navigate(['/signup'])
 }
}
