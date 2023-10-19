import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent implements OnInit {
    mainhead: any;
    mainfoot: any;
    headerTital:any;
    constructor(){
    
    
      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'none';
      this.mainfoot = document.getElementById('mainfoot');
      this.mainfoot.style.display = 'none';
    }
  ngOnInit(): void {
      
    this.headerTital=  document.getElementById('headertitle')?.textContent ;
  }

    setTitle(title:any)
    {
      this.headerTital = title;
    }
}
