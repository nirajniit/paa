import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-footer',
  templateUrl: './vendor-footer.component.html',
  styleUrls: ['./vendor-footer.component.css']
})
export class VendorFooterComponent {
  mainhead: any;
  mainfoot: any;
  constructor(){
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';
  }
}
