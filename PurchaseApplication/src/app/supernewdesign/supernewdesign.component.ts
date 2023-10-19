import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { IPConfigService } from '../ipconfig.service';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-supernewdesign',
  templateUrl: './supernewdesign.component.html',
  styleUrls: ['./supernewdesign.component.css']
})

export class SupernewdesignComponent {


  apiService: any;
  iPConfigService: any;
  mainhead: any;
  mainfoot: any;
  serviceService: any;
  user: any;
  router: any;
  alldata: any;
  mydata: any;
  imgConfig : any;
  config: any;
 




  constructor(apiService: ApiService, iPConfigService: IPConfigService, router: Router) {


    this.router = router;

    this.alldata = [];

    console.log("=======================User DAta by session ================================ ");
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.user)
    console.log("=======================User DAta  by session================================ ");


    this.apiService = apiService;
    this.iPConfigService = iPConfigService;
    this.imgConfig = this.iPConfigService.getImageConfig();



    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';





    this.apiService.GetallDesignerItems().subscribe(
      (response: any) => {
        // this.alldata=response;
        console.log(" ===================Niraj================aa")
        console.log(response.data);
        this.alldata = JSON.parse(response.data);
        console.log(" ===================Niraj================aa")
     
      },
      (error: any) => {
        console.log("========================errnn======================");
        console.log(error);
        console.log("========================errnnnnnn======================");
      }
    );



    



  }


 

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

