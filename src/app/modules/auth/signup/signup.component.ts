import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../core/models/auth.models';
import { CustomValidationService } from '../_validators/custom-validation.service';
import { AuthService } from '../_services/auth.service';
import Swal from 'sweetalert2';

const lettersPattern = /^[a-zA-Z]+ ?([a-zA-Z]+$){1}/;

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
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,private customValidator:CustomValidationService) { }

  ngOnInit():void {
    this.signupForm = this.formBuilder.group({

      signupForm1:this.formBuilder.group({ 
      
      firstName: [this.userItem.firstName, [Validators.required,Validators.pattern(lettersPattern)]],
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
    // alert('successfully registered');


    const patientData = JSON.parse(localStorage.getItem('patient'));
    const form1 = this.signupForm.get('signupForm1').value;
    const form2 = this.signupForm.get('signupForm2').value;

    const registerForm = Object.assign({}, form1, form2, patientData);
    console.log("🚀 ~ file: signup.component.ts ~ line 84 ~ SignupComponent ~ onSubmit ~ registerForm", registerForm);


  
    this.authService.register(registerForm).subscribe(data=>{
      console.log("🚀 ~ file: signup.component.ts ~ line 90 ~ SignupComponent ~ this.authService.signup ~ data", data)
     this.successAlert();
   
   },
   (err) => {
   console.log("🚀 ~ file: signup.component.ts ~ line 95 ~ SignupComponent ~ onSubmit ~ err", err)
    let errMsg = err.error.message;
    this.errorAlert(errMsg);
   });
    
   
  }


  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Your registeration has been successfull, Please check your email for verification',
      showConfirmButton: false,
      timer: 3000
    }).then((result) => {
      this.router.navigate(['/auth/login']);
    });
  }

  errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      title: message,
      showConfirmButton: false,
    })
  }


}
