import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  name: string;
  patientForm: FormGroup;
  submitted = false;
  error = '';
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.patientForm = this.formBuilder.group({
      patientName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
  }


  get f() { return this.patientForm.controls; }


 onSubmit(){
   
  this.submitted = true;

    // stop here if form is invalid
    if (this.patientForm.invalid) {
      return;
    } else {      
       localStorage.setItem('patient', JSON.stringify(this.patientForm.value));
       
       this.router.navigate(['/auth/signup']);
    }
  }

    
}
