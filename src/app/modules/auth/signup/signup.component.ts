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
  signupForm1:FormGroup;
  signupForm2:FormGroup;
  signup_form1=false;
  submitted = false;
  error = '';
  successmsg = false;
hide=true;
confirmPassword='';
  // set the currenr year
  year: number = new Date().getFullYear();
  userItem=new User();
  relationship: any = ['Father', 'Mother','Siblings']
  addVendorForm: any;
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService,private customValidator:CustomValidationService) { }

  ngOnInit():void {
    this.signupForm = this.formBuilder.group({

      signupForm1:this.formBuilder.group({ 
      
      firstName: [this.userItem.firstName, [Validators.required,Validators.pattern(/^[a-zA-Z]+ ?([a-zA-Z]+$){1}/)]],
      lastName: [this.userItem.lastName, [Validators.required,Validators.pattern(/^[a-zA-Z]+ ?([a-zA-Z]+$){1}/)]],
      relationType:[this.userItem.relationType,[Validators.required]],
      }),
      
      signupForm2: this.formBuilder.group({
      email: [this.userItem.email, [Validators.required, Validators.email]],
      mobileNumber:[this.userItem.mobileNumber,[Validators.required, Validators.pattern(/^\+?[1-9]\d{9,14}$/)]],
      
      password: [this.userItem.password, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]],
      confirmPassword:[this.confirmPassword,[Validators.required]]
    },
    {
      validator:this.customValidator.passwordMatchValidator('password','confirmPassword')
    
    
     })
    })
  }
  changeRelation(e) {
    console.log(e.target.value)
    
  }


  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

 
  /**
   * On submit form
   */
  onSubmit() {
    // this.submitted = true;
    // console.log(data);
    alert('successfully registered');
  
    this.authenticationService.signup(JSON.stringify(this.signupForm.value))
    .subscribe(data=>{console.log(data)
  
     this.router.navigateByUrl('/patient-data')
   
   });
    
   
  }
}
