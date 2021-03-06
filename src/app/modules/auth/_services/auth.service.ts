import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { shareReplay } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { WebRequestService } from "./Web-RequestURL";
import { Router } from "@angular/router";
import { User } from "src/app/core/models/auth.models";
import { catchError, map, tap } from "rxjs/operators";
const backURL = `${environment.apiURL}`;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  data: any;
  Mail: string;
  preValue : any ="0";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private webService: WebRequestService,
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
 
  getNewAccessToken() {
    return this.http 
      .get(`${backURL}/auth/me/access-token`, { 
        headers: {
          "x-refresh-token": this.getRefreshToken(),
          _id: this.getUserId(),
        },
        observe: "response",
      })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.setAccessToken(res.headers.get("x-access-token"));
        })
      );
  }

  login(email: string, password: string) {
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(
          res.body._id,
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        console.log("Successfully logged!");
      })
    );
  }
  isAuthenticated() {
    let token = localStorage.getItem("x-access-token");
    if (token) {
      return true;
    }

    return false;
  }
 
  register(params: any) {
    return this.http.post<any>(`${backURL}/auth/register`, params).pipe(
      map((res) => {
        // login successful if there's a jwt token in the response
        return res;
      })
    );
  }
  
  // score(sum: any) {
    
  //   var first = parseInt(sum);
  //   var second = parseInt(this.preValue);
  //   this.preValue = Number(first + second);
  //   //  console.log(first)
  //   //  console.log(second)
  //   console.log(this.preValue);
  // }

// scoreApi(){
//   this.data = {
//     sum: this.preValue,
    
//   };
//   console.log("data",this.preValue)
//   return this.http.post(`${backURL}/auth/score`, this.data, {
//     headers: {
//       "x-access-token": this.getAccessToken(),
//     },
//     responseType: 'text'});
  
// }
getList() {
  return this.http.get(`${backURL}/auth/score`, {
    headers: {
      "x-access-token": this.getAccessToken(),
    },
  });
}


  otpVerify(params: any) {
    return this.http.post<any>(`${backURL} + 'auth/verify/otp`, params).pipe(
      map((res) => {
        // login successful if there's a jwt token in the response
        return res;
      })
    );
  }

  getUsers() {
    return this.http.get(`${backURL}/auth/user`, {
      headers: {
        "x-access-token": this.getAccessToken(),
      },
    });
  }

bookAppointment(email,patientName:string,age:Number,userId:string){
  this.data = {
    email:email,
    patientName:patientName,
    age:age,
    userId:userId
  }
  console.log("Dta",this.data)
  return this.http.post(`${backURL}/auth/freeAppointment`, this.data, {
    observe: "response",
    
  });
}


  getUser() {
    return this.http.get(`${backURL}/auth/users`, {
      // headers: {
      //   'x-access-token': this.getAccessToken(),
      // }
    });
  }
  getScore() {
    return this.http.get(`${backURL}/auth/result`, {
      // headers: {
      //   'x-access-token': this.getAccessToken(),
      // }
    });
  }

  activate(token: any) {
    return this.http.put(`${backURL}/auth/activate/${token}`, {
      observe: "body",
    });
  }
  forgotPassword(email: string) {
    this.Mail = email;
    this.data = {
      email: email,
    };
    return this.http.post(`${backURL}/auth/sendOTP`, this.data);
  }

  OTPVarification(otp: string) {
    this.data = {
      otp: otp,
    };
    return this.http.post(`${backURL}/auth/confirmOTP`, this.data, {
      observe: "response",
    });
  }

  UpdatePassword(email: string, password: string) {
    this.data = {
      password: password,
      email: this.Mail,
    };
    return this.http.put(`${backURL}/auth/updatePassword`, this.data);
  }

  logout() {
    this.removeSession();

    this.router.navigate(["/mindcare/auth/login"]);
  }
  getAccessToken() {
    return localStorage.getItem("x-access-token");
  }

  getRefreshToken() {
    return localStorage.getItem("x-refresh-token");
  }

  getUserId() {
    return localStorage.getItem("user-id");
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem("x-access-token", accessToken);
  }

  private setSession(
    userId: string,
    accessToken: string,
    refreshToken: string
  ) {
    localStorage.setItem("user-id", userId);
    localStorage.setItem("x-access-token", accessToken);
    localStorage.setItem("x-refresh-token", refreshToken);
  }

  public removeSession() {
    localStorage.removeItem("user-id");
    localStorage.removeItem("x-access-token");
    localStorage.removeItem("x-refresh-token");
  }
}
