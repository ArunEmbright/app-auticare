import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { WebRequestService } from "../auth/_services/Web-RequestURL";
import { Router } from "@angular/router";
import { User } from "src/app/core/models/auth.models";
import { catchError, map, tap } from "rxjs/operators";
const backURL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private webService: WebRequestService,
    private http: HttpClient,
    private router: Router) { }

  getUser() {
    return this.http.get(`${backURL}/admin/users`, {
      // headers: {
      //   'x-access-token': this.getAccessToken(),
      // }
    });
  }
  getScore() {
    return this.http.get(`${backURL}/admin/result`, {
      
    });
  }
  getDoctor() {
    return this.http.get(`${backURL}/therapist/therapist`, {
      
    });
  }
  getAppointment() {
    return this.http.get(`${backURL}/admin/appointment`, {
      // headers: {
      //   'x-access-token': this.getAccessToken(),
      // }
    });
  }
  addUser(params: any) {
    return this.http.post<any>(`${backURL}/admin/addUser`, params).pipe(
      map((res) => {
        // login successful if there's a jwt token in the response
        return res;
      })
    );
  }
  uploadTherapist(formData){
    this.http.post(`${backURL}/therapist/therapist`, formData)
    .subscribe((res) => {
        console.log('From server', res);
        //this.successMsg = 'Contestant submit successfully';
       
      },
     
    );
  }
}
