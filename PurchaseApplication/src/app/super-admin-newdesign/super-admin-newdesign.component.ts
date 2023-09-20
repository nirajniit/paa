import { Component} from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-super-admin-newdesign',
  templateUrl: './super-admin-newdesign.component.html',
  styleUrls: ['./super-admin-newdesign.component.css']
})
export class SuperAdminNewdesignComponent {
     mainfoot: any;
  mainhead: any;
  l: any;
  s: any;

  showrow: boolean=false;
     constructor(private offcanvasService: NgbOffcanvas){
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

    // Togglevisibility():void{
    //   this.showrow=!this.showrow;
    // }

    
}
