import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/auth.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
      return this.http.post<any>(this.url + 'auth/login', { email, password })
          .pipe(map(res => {
              if (res.data && res.token) {
                  localStorage.setItem('currentUser', JSON.stringify(res.data));
                  localStorage.setItem('token', res.token);
                  this.currentUserSubject.next(res.data);
              }
              return res;
          }));
  }

    register(params: any) {
      return this.http.post<any>(this.url + 'auth/register', params)
        .pipe(map(res => {
            // login successful if there's a jwt token in the response
            return res;
        }));
  }

  otpVerify(params: any) {
    return this.http.post<any>(this.url + 'auth/verify/otp', params)
      .pipe(map(res => {
          // login successful if there's a jwt token in the response
          return res;
      }));
}

}
