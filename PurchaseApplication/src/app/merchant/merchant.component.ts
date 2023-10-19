import { Component } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent {
  mainhead :any;
  mainfoot:any;
  constructor(){
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none'; 
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 
  }
}
