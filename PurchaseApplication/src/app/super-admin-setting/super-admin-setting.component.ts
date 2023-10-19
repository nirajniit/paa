import { Component } from '@angular/core';

@Component({
  selector: 'app-super-admin-setting',
  templateUrl: './super-admin-setting.component.html',
  styleUrls: ['./super-admin-setting.component.css']
})
export class SuperAdminSettingComponent {
  mainfoot: any;
  mainhead: any;
 
  constructor(){
    this.mainfoot = document.getElementById('mainfoot');
      this.mainfoot.style.display = 'none'; 
      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'block'; 
  }
}
