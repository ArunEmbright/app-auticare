import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin/admin.service';
import {Therapist} from '../../admin/therapist/therapist.model'
import { AuthService } from '../../auth/_services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  therapist: Therapist[];
  // doctors: any;
  // data: any;
  // dropDownItem: Array<String>;
  isLoading: boolean;
 

  constructor(private auth:AdminService) {}

  ngOnInit() {
    this.auth.getDoctor().subscribe((therapist:Therapist[]
      )=>{
        this.therapist =therapist
        console.log(this.therapist)
      })
  
  
   

   
    console.log(this.therapist)
    
  }
 


searchFilter(e){
  const searchStr = e.target.value;
  this.therapist = this.therapist.filter(
  (doctor)=>{
    return doctor.location.toLowerCase().search(
      searchStr.toLowerCase())!==-1;
    
  });
}

custom() {
  
  Swal.fire({
    title: '<strong> Your Booking Confirmed! </strong>',
    icon: 'success',
   html:'<p> Our Team wiil contact you. Have a nice day!!!</p>',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    // confirmButtonText: '<i class="fa fa-thumbs-up"></i> Back to Home!',
    confirmButtonAriaLabel: 'Thumbs up, Back to Home',
    
  });
  
}
}