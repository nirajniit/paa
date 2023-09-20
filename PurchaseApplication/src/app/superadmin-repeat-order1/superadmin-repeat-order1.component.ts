import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-superadmin-repeat-order1',
  templateUrl: './superadmin-repeat-order1.component.html',
  styleUrls: ['./superadmin-repeat-order1.component.css'],


})

export class SuperadminRepeatOrder1Component {

  
            
   constructor(private modalService: NgbModal){

   }
   openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}
}
