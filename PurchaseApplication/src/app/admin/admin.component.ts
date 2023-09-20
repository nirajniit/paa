import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  mainhead :any;
  mainfoot:any;
  constructor(){
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none'; 
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 
  }
}
