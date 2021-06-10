import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  doctors: any;
  data: any;
  dropDownItem: Array<String>;
  isLoading: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.breadCrumbItems = [
      { label: "UI Elements" },
      { label: "Filter", active: true },
    ];

    // Fetch data for the dropdown as well as the cards
    this._fetchTherapistData();
  }

  private _fetchTherapistData() {
    const _dataFetchUrl = "http://localhost:4001/api/therapist/all";
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get(_dataFetchUrl)
        .toPromise()
        .then(
          (res) => {
            this.data = res["data"];
            let locations: Array<string> = [];
            for (var i in this.data) {
              if (locations.indexOf(this.data[i].location) === -1) {
                locations.push(this.data[i].location);
              }
            }
            this.doctors = this.data;
            this.dropDownItem = locations;
            resolve();
            this.isLoading = false;
          },
          (msg) => console.log(msg)
        );
    });
  }

  // Filter the data based on the location selected
  public selectedLocation: any;
  public locationFilter() {
    let filteredContent = [];
    for (var i in this.data) {
      if (
        this.data[i].location.toLowerCase() ===
        this.selectedLocation.toLowerCase()
      ) {
        filteredContent.push(this.data[i]);
      }
    }
    this.doctors = filteredContent;
  }

}
