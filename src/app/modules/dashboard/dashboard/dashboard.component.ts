import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartType } from './dashboard.model';
import { emailSentBarChart, monthlyEarningChart, transactions, statData } from './data';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions;
  statData;
  @ViewChild('content') content;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    /**
     * Fetches the data
     */
    this.fetchData();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      // this.openModal();
    }, 2000);
  }
  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;
    this.transactions = transactions;
    this.statData = statData;
  }
  openModal() {
    this.modalService.open(this.content, { centered: true });
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


