import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/_services/auth.service';

import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  users:User[];

  statData;
  constructor(private accountService: AuthService) { }

  ngOnInit() {
    this.accountService.getUser().subscribe((
      users:User[]
    )=>{
      this.users=users;
      console.log(users.length)
    })


    // fetches the data
   

  /**
   * Fetches the data
   */

  }
  
}
