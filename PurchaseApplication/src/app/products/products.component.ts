import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { IPConfigService } from '../ipconfig.service';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  mainhead: any;
  apiService: any;
  iPConfigService: any;
  imgConfig: any;
  mainfoot: any;
  user: any;
  vendorProduct: any;
  router: any;
 
 



  constructor(apiService: ApiService, iPConfigService: IPConfigService, router: Router) {

    this.router = router;
    
    this.vendorProduct = [];

    console.log("=======================User DAta by session ================================ ");
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.user)
    console.log("=======================User DAta  by session================================ ");


    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'block';


    this.apiService = apiService;
    this.iPConfigService = iPConfigService;
    this.imgConfig = this.iPConfigService.getImageConfig();



    this.apiService.GetAllDesignerItemsById(this.user.user_id).subscribe(
      (response: any) => {
        console.log("============== Vendor Product by ID ========================");
        console.log(response);
        // this.alldata = JSON.parse(response.data);
        console.log("============== Vendor Product by ID ========================");
      },
      (error: any) => {
        console.error("======================== Error ========================");
        console.error(error);
        console.error("======================== Error ========================");
      }
    );

  }
}
