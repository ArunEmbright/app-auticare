import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/core/models/auth.models';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  relationship: any = ['Father', 'Mother','Siblings']

  constructor(public formbuilder: FormBuilder, private authService: AdminService) { }

  subjectId: any;
  roleId: number;
  ngOnInit() {
    this.addForm = this.formbuilder.group({
      userId: ['auticare'+Math.floor(Math.random()*10000)],
      FirstName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      LastName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      patientName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      email: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$")]],
      mobileNumber: ["", [Validators.required, Validators.maxLength(10)]],
      dob: ["", Validators.required],
      relationType: ["",Validators.required],
      
});
  }
  onSubmit() {


console.log("!")
   
  
    this.authService.addUser(this.addForm.value).subscribe(data=>{
      console.log("🚀 ~ file: signup.component.ts ~ line 90 ~ SignupComponent ~ this.authService.signup ~ data", data)

   
   },
   (err) => {
   console.log("🚀 ~ file: signup.component.ts ~ line 95 ~ SignupComponent ~ onSubmit ~ err", err)
    let errMsg = err.error.message;
    
   });
    
   
  }
  


}



