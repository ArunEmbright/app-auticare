import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user: User;

    constructor(private http:HttpClient) {
    }
signup(body:any)
{
    return  this.http.post('http://localhost:4001/api/auth/register',body,{
        observe:'body',
        headers:new HttpHeaders().append('Content-Type','application/json')
    })
}
   
}

