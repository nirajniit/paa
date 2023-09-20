import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { IPConfigService } from '../ipconfig.service';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-supernewdesign',
  templateUrl: './supernewdesign.component.html',
  styleUrls: ['./supernewdesign.component.css']
})
export class SupernewdesignComponent implements OnInit {
 
 
  vendorForm  : any;
  formBuilder : any;
  apiService  : any;
  iPConfigService :any;
  mainhead:any;
  mainfoot:any;
  file1:any;
  file2:any;
  serviceService:any;
      brandidval:any;
      brandvalue:any;
      categoryvalue:any;
      seasonvalue:any;
  imgConfig : any;
  brandid:any;
  brandnumber:any;
 
  user : any;

  vendorProduct :any;
  router:any;


  
  constructor(formBuilder:FormBuilder, apiService :ApiService, iPConfigService : IPConfigService,router : Router, serviceService :ServiceService ){
  

    this.router=router;

    console.log("=======================User DAta by session ================================ ");
      this.user = localStorage.getItem('user');

      this.user = JSON.parse(this.user);
      console.log(this.user)


      this.vendorProduct = [];


    console.log("=======================User DAta  by session================================ ");


   

    this.serviceService = serviceService;
    this.brandidval= this.serviceService.brandidval;
    this.brandvalue=this.serviceService.brandvalue;
    this.categoryvalue=this.serviceService.categoryvalue;
    this.seasonvalue=this.serviceService.seasonvalue;
      this.apiService = apiService;
      this.formBuilder = formBuilder;
      this.iPConfigService = iPConfigService;
      this.imgConfig = this.iPConfigService.getImageConfig();

    
      
      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'block'; 
      this.mainfoot = document.getElementById('mainfoot');
      this.mainfoot.style.display = 'none'; 







    this.apiService.getAllVendorProductAll(this.user.id).subscribe(
                
      (response : any) => {
      

        console.log(" =============== vendor product by id  NN ======================== ");
        this.vendorProduct = response;

        console.log(this.vendorProduct);
        console.log(" =============== vendor product by id  NN ======================== ");


        

        let index = response.length -1;
        
         this.file1=response[index].file1;
         this.file2=response[index].file2;
         this.brandid=response[index].brandid;
         this.brandnumber=response[index].brandnumber;
         
        
          },
          (error:any) => {
            console.log(" ========================err ===============");
            console.log(error);
            console.log(" ========================err ===============");
          }
        );





  }
  ngOnInit(): void {


    
    
  }

  
sample(proddata:any)
{

  
  console.log("=======nn==============");
  console.log(proddata);
  console.log("=====================");



    //this.router.navigateByUrl('/adminapprove.component', { "proddata" : proddata });

   // this.router.navigate(['/adminapprove.component'], { queryParams : { prodid: 'watches' } }); 

}


parseINT(val:any)
{

  alert(val);
  return parseInt(val)
}

  }
