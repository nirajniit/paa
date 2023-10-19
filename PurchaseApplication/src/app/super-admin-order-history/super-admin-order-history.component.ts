import { Component } from '@angular/core';
import { TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HeaderFooterService } from "../header-footer.service";

@Component({
  selector: 'app-super-admin-order-history',
  templateUrl: './super-admin-order-history.component.html',
  styleUrls: ['./super-admin-order-history.component.css']
})
export class SuperAdminOrderHistoryComponent {
l:any;
s:any;

mainhead:any
headerFooterService :any;
  mainfoot:any;
  constructor(private offcanvasService: NgbOffcanvas,headerFooterService :HeaderFooterService){

    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block'; 

  }
  openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}


  opencity1(city: any) {
    this.l = document.getElementById('vender');
    this.s = document.getElementById('other');
    this.l.style.display = 'block';
    this.s.style.display = 'none';
    console.warn('HELLO');
  }
  
  opencity2(city: any) {
    this.l = document.getElementById('vender');
    this.s = document.getElementById('other');
    this.l.style.display = 'none';
    this.s.style.display = 'block'; // Changed 'l' to 's' here
    console.warn('HELLO');
  }
  

}
