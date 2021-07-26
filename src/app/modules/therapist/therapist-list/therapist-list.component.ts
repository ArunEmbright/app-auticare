
import { Component, OnInit } from '@angular/core';
import { therapistList } from './data';
import { TherapistModel } from './therapist-model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  therapistList:TherapistModel[];
  // doctors: any;
  // data: any;
  // dropDownItem: Array<String>;
  isLoading: boolean;
  public therapist: TherapistModel[]=[];

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    this.breadCrumbItems = [
    ];

    this.therapist = Object.assign([],therapistList );
    this.therapistList = therapistList;
  }

  

searchFilter(e){
  const searchStr = e.target.value;
  this.therapist = therapistList.filter(
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
