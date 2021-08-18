import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  email:string;
  submitted = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  otpPut(){
    this.submitted=true;
    
    this.authService.forgotPassword(this.email).subscribe(
      data=>{
        console.log('Send', data);
        this.router.navigate(['auth/verify-otp'])
      },
      error=>console.log(error)
    )
  }

}
