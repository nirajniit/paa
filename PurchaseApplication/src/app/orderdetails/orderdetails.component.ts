
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { IPConfigService } from '../ipconfig.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})


export class OrderdetailsComponent implements OnInit {
  superForm  : any;
  formBuilder : any;
  apiService  : any;
  docPictureinput:any;
  docTopimage:any;
  formData : any ;
  london :any;
  tokyo : any;
  router:any;
  route:any;
  mainhead :any;
  imageSrc: any;
  user:any;
  serviceService:any;
  brandidval:any;
  brandvalue:any;
  categoryvalue:any;
  seasonvalue:any;
  mainfoot:any

  productdata : any;
  imageSrcbottom: any;
  IPConfigService:any;
  imgConfig:any;
  iPConfigService :any;
  // allImages:any;

 

  

  constructor(formBuilder:FormBuilder, apiService :ApiService ,iPConfigService :IPConfigService,router : Router, serviceService :ServiceService, route : ActivatedRoute)
  {
    this.apiService = apiService;
    this.router = router;
    this.route = route;
    this.serviceService = serviceService;
    this.brandidval= this.serviceService.brandidval;
    this.brandvalue=this.serviceService.brandvalue;
    this.categoryvalue=this.serviceService.categoryvalue;
    this.seasonvalue=this.serviceService.seasonvalue;


    this.iPConfigService = iPConfigService;
    this.imgConfig = this.iPConfigService.getImageConfig();
     this.user = localStorage.getItem('user');

// this.allImages = [];

    this.route.queryParams
    .subscribe((params:any) => {
     
      console.log("======nn===========");
      console.log(params.proddata);
      console.log("=======nn==========");


      this.apiService.getAllVendorProductbyid(params.proddata).subscribe(
                  
        (response : any) => {

          console.log("===========================nnnnn==========================");
          console.log(response);
          console.log("===========================nnnnn==========================");
          this.productdata = response;
          console.log(" product data ");
          console.log(this.productdata);
          console.log(" product data ");

          // this.allImages=[this.productdata.file1, this.productdata.file2, this.productdata.file3,  this.productdata.file4, this.productdata.file5, this.productdata.file6 ];
          
          // console.log("==============sa=================");
          // console.log(this.allImages);
          // console.log("==============sa=================");

          


          this.productdata = response;
          this.superForm = this.formBuilder.group({
            
            id:this.productdata.id,
            topimage:"",
            brandid:this.productdata.brandid,
            brandnumber:this.productdata.brandnumber,
            brand:this.productdata.brand,
            category:this.productdata.category,
            season:this.productdata.season,
            designer:this.productdata.designer,
            male:this.productdata.male,
            female:this.productdata.female,
            gender:this.productdata.gender,
            fabric:this.productdata.fabric,
            s:this.productdata.s,
            m:this.productdata.m,
            l:this.productdata.l,
            xl:this.productdata.xl,
            twoxl:this.productdata.twoxl,
            threexl:this.productdata.threexl,
            fourxl:this.productdata.fourxl,
            fivexl:this.productdata.fivexl,
            sixxl:this.productdata.sixxl,
            pictureinput:this.productdata.pictureinput,
            file1: this.productdata.file1,
            file2: this.productdata.file2,
            file3: this.productdata.file3,
            file4: this.productdata.file4,
            color:this.productdata.color,
            price:this.productdata.price,
            vendorid:JSON.parse(this.user)
           
          });
          
            },
            (error:any) => {
              console.log(" ========================err ===============");
              console.log(error);
              console.log(" ========================err ===============");
            }
          );


      
    }
  );
      
    
    this.route.params.subscribe((params:any) => {

        this.productdata = params.proddata;

  
    this.formData = new FormData();
    this.docTopimage=null;
    this.docPictureinput = null;
    this.apiService = apiService;
    this.formBuilder = formBuilder;
  

    
  });

    
  }


ngOnInit(): void {

  this.apiService.getAllVendorProduct().subscribe(
              
    (response : any) => {
         
      this.superForm = this.formBuilder.group({
        
        id:this.productdata.id,
            topimage:"",
            brandid:this.productdata.brandid,
            brandnumber:this.productdata.brandnumber,
            brand:this.productdata.brand,
            category:this.productdata.category,
            season:this.productdata.season,
            designer:this.productdata.designer,
            male:this.productdata.male,
            female:this.productdata.female,
            gender:this.productdata.gender,
            fabric:this.productdata.fabric,
            s:this.productdata.s,
            m:this.productdata.m,
            l:this.productdata.l,
            xl:this.productdata.xl,
            twoxl:this.productdata.twoxl,
            threexl:this.productdata.threexl,
            fourxl:this.productdata.fourxl,
            fivexl:this.productdata.fivexl,
            sixxl:this.productdata.sixxl,
            pictureinput:this.productdata.pictureinput,
            file1: this.productdata.file1,
            file2: this.productdata.file2,
            color:this.productdata.color,
            price:this.productdata.price,
            vendorid:JSON.parse(this.user)

       

                
      });
      
        },
        (error:any) => {
          console.log(" ========================err ===============");
          console.log(error);
          console.log(" ========================err ===============");
        }
      );



  
}
  





  onSubmit()
  {
   
       


        


  }


  
}