import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorHeaderComponent } from '../vendor-header/vendor-header.component';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',

  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit {
  apiService: any;
  mainhead: any;
  mainfoot: any;
  user: any;
  router: any;
  route: ActivatedRoute;
  // public venderid: number = 0;

  user_id: any;
  // sachin = "hello world";
  headerTital:any;
  


  constructor(router: Router, route: ActivatedRoute) {
     
     this.headerTital = document.getElementById('headertitle');
  
    //  alert(document.getElementById('headertitle'))


 //this.vendorHeaderComponent=vendorHeaderComponent;
 
   // this.vendorHeaderComponent.setTitle(" My Custome Title");


    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';
    this.router = router;
    this.route = route;
    console.log("=======================User DAta by session 22 ================================ ");
    this.user = localStorage.getItem('user');
    console.log(this.user);

    console.log("=======================User DAta  by session 22================================ ");
  }


  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.user_id = params['vendorid']; 
      console.log(this.user_id);

      alert( document.getElementById('headertitle')?.textContent )
    });
  }
  
  addNewDesign() {
    this.router.navigate(['/vendor-new-design.component'], { queryParams: { "vendorid": this.user_id } });
    
  }
  
 


}
