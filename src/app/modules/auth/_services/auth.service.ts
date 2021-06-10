import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(params: any) {
    return this.http.post('http://localhost:4001/api/auth/register', params)
  }
}
