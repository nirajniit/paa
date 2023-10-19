import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-superadmin-repeatorder-history',
  templateUrl: './superadmin-repeatorder-history.component.html',
  styleUrls: ['./superadmin-repeatorder-history.component.css']
  // encapsulation: ViewEncapsulation.None,
})
export class SuperadminRepeatorderHistoryComponent {
    showrow: boolean=false;
  isChecked: boolean | undefined;
  listItems: any;
  value: any;
  mainfoot: any;
  mainhead: any;
  // closeResult: string;
    constructor(private offcanvasService: NgbOffcanvas){
      this.showrow=false;
   
      this.mainfoot = document.getElementById('mainfoot');
      this.mainfoot.style.display = 'none'; 
      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'block'; 
    }
    openScroll(content: TemplateRef<any>) {
      this.offcanvasService.open(content, { scroll: true });
    }

    Togglevisibility():void{
      this.showrow=!this.showrow;
    }


}
