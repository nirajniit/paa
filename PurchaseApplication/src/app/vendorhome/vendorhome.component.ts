import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent {
  apiService: any;
  mainhead: any;
  mainfoot: any;
  user: any;
  router: any;

  constructor(router: Router) {
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'block';
    this.router = router;
    console.log("=======================User DAta by session 22 ================================ ");
    this.user = localStorage.getItem('user');
    

    console.log(this.user);

    console.log("=======================User DAta  by session 22================================ ");
  }

  addNewDesign() {
  
    this.router.navigateByUrl('/vendor-new-design.component');
   
  }




}
