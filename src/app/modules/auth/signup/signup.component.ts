import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { User } from '../../../core/models/auth.models';
import { CustomValidationService } from './custom-validation.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
profiles:User|any;
  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
hide=true;
cnfpassword='';
  // set the currenr year
  year: number = new Date().getFullYear();
  userItem=new User();
  relationship: any = ['Father', 'Mother','Siblings']
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private userService: UserProfileService,private customValidator:CustomValidationService) { }

  ngOnInit():void {
    this.signupForm = this.formBuilder.group({
      firstname: [this.userItem.firstname, [Validators.required,Validators.pattern(/^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$){1}/)]],
      lastname: [this.userItem.lastname, [Validators.required,Validators.pattern(/^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$){1}/)]],
      relationship:[this.userItem.relationship,[Validators.required]],
      email: [this.userItem.email, [Validators.required, Validators.email]],
      mobile:[this.userItem.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: [this.userItem.password, [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]],
      cnfpassword:[this.cnfpassword,[Validators.required]]
    },
    {
      validator:this.customValidator.passwordMatchValidator('password','cnfpassword')
    
    
     });
  }
  changeRelation(e) {
    console.log(e.value)
    this.relationship.setValue(e.target.value, {
      onlySelf: true
    })
  }


  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      if (environment.defaultauth === 'firebase') {
        this.authenticationService.register(this.f.email.value, this.f.password.value).then((res: any) => {
          this.successmsg = true;
          if (this.successmsg) {
           alert("successfully registered");
            this.router.navigate(['/dashboard']);
          }
        })
          .catch(error => {
            this.error = error ? error : '';
          });
      } else {
        this.userService.register(this.signupForm.value)
          .pipe(first())
          .subscribe(
            data => {
              this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/account/login']);
              }
            },
            error => {
              this.error = error ? error : '';
            });
      }
    }
  }
}
