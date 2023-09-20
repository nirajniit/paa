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
export class ProductsComponent implements OnInit {

  mainhead: any;
  vendorForm: any;
  formBuilder: any;
  apiService: any;
  iPConfigService: any;


  file1: any;
  file2: any;

  imgConfig: any;
  brandid: any;
  brandnumber: any;
  mainfoot: any;
  user: any;

  vendorProduct: any;
  router: any;
  serviceService: ServiceService;
  brandidval: any;



  constructor(formBuilder: FormBuilder, apiService: ApiService, iPConfigService: IPConfigService, router: Router, serviceService: ServiceService) {

    this.router = router;
    this.serviceService = serviceService;
    this.brandidval = this.serviceService.brandidval;
    console.log("=======================User DAta by session ================================ ");
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.user)
    this.vendorProduct = [];
    console.log("=======================User DAta  by session================================ ");
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'block';
    this.apiService = apiService;
    this.formBuilder = formBuilder;
    this.iPConfigService = iPConfigService;
    this.imgConfig = this.iPConfigService.getImageConfig();



    // this.apiService.getAllVendorProductAll().subscribe(

    //   (response : any) => {

    //     let index = response.length - 1;






    //      this.file1=response[index].file1;
    //      this.file2=response[index].file2;
    //      this.brandid=response[index].brandid;
    //      this.brandnumber=response[index].brandnumber;


    //       },
    //       (error:any) => {
    //         console.log(" ========================err ===============");
    //         console.log(error);
    //         console.log(" ========================err ===============");
    //       }
    //     );







    this.apiService.getAllByVendorid(this.user.id).subscribe(

      (response: any) => {


        console.log(" =============== vendor product by id  NN ======================== ");
        this.vendorProduct = response;
        console.log(this.vendorProduct);
        console.log(" =============== vendor product by id  NN ======================== ");




        let index = response.length - 1;

        this.file1 = response[index].file1;
        this.file2 = response[index].file2;
        this.brandid = response[index].brandid;
        this.brandnumber = response[index].brandnumber;


      },
      (error: any) => {
        console.log(" ========================err ===============");
        console.log(error);
        console.log(" ========================err ===============");
      }
    );





  }
  ngOnInit(): void {




  }


  sample(proddata: any) {
    console.log(proddata);
    this.router.navigateByUrl('/sample.component', { "proddata": proddata });

  }



}
