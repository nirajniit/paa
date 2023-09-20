import { Component } from '@angular/core';

@Component({
  selector: 'app-super-admin-user-profile',
  templateUrl: './super-admin-user-profile.component.html',
  styleUrls: ['./super-admin-user-profile.component.css']
})
export class SuperAdminUserProfileComponent {
  mainfoot:any;
  mainhead: any;

  constructor(){

    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block'; 
  }
}
