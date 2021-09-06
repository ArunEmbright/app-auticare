import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Role } from 'src/app/core/models/role';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-therapist-login',
  templateUrl: './therapist-login.component.html',
  styleUrls: ['./therapist-login.component.scss']
})
export class TherapistLoginComponent implements OnInit {

  Role=Role;
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  carouselOption: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
      680: {
        items: 1
      },
    }
  }
  constructor(private authenRole:AuthenticationService,private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['78900011', [Validators.required]],
    });
  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  //role based plaese check it

loginRole(role: Role, 
  
 ){
  this.authenRole.login( role);
    this.router.navigate(['/admin/dashboard']);
}

}
