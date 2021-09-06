import { Component, OnInit } from "@angular/core";
import { Therapist } from "../therapist.model";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { AuthService } from "src/app/modules/auth/_services/auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminService } from '../../admin.service';
import Swal from 'sweetalert2';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({ 
  selector: "app-therapist-form",
  templateUrl: "./therapist-form.component.html",
  styleUrls: ["./therapist-form.component.scss"],
})
export class TherapistFormComponent implements OnInit {
  pageTitle = 'ADD Therapist';
  menuForm: FormGroup;
  selectedImage: ImageSnippet;
  imagePreview: string;
  fileData: File;
  categories: any;
  subCategories: any;
  restaurants: any;
  constructor(private auth: AdminService,private title: Title,
    private fb: FormBuilder,
    private location: Location, private http: HttpClient) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);

    //Instantiat form
    this.menuForm = this.fb.group({
     
      therapistName: [null],
      experience: [null],
      specialization: [null],
      qualification: [null],
      location: [null],
      image: [null],
      
  })
}
get f() {
  return this.menuForm.controls;
}
public tags = [];
processImage(image: any) {
  const file: File = image.files[0];
  this.fileData = file;

  const reader = new FileReader();
  reader.addEventListener('load', (event: any) => {
    this.selectedImage = new ImageSnippet(event.target.result, file); 
  });
  reader.readAsDataURL(file);
}

save() {
 
  var therapistName = this.menuForm.value.therapistName;
  var specialization = this.menuForm.value.specialization;
  var experience = this.menuForm.value.experience;
  var qualification = this.menuForm.value.qualification;
  var location = this.menuForm.value.location;
  const formData = new FormData();

  
  formData.append('therapistName', therapistName);
  formData.append('specialization',specialization);
  formData.append('experience', experience);
  formData.append('qualification', qualification);
  formData.append('location', location);
  formData.append('image', this.fileData);

  console.log("Form Data", formData)

  this.auth.uploadTherapist(formData)
    this.isUploaded()
}
back() {
  this.location.back();
}
isUploaded(){
  Swal.fire({
    position:'top-end',
    icon:'success',
    title:'Therapist Registration Successfully',
    showConfirmButton:false,
    timer:1500
  })
}
}
