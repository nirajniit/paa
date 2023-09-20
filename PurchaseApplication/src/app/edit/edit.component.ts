import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { IPConfigService } from '../ipconfig.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formBuilder : any;
  apiService  : any;
  docPictureinput:any;
  docTopimage:any;
  formData : any ;
  london:any;
  tokyo:any;
  router:any;
  mainhead :any;
  imageSrc: any;
  imageSrcbottom : any;
  user:any;
  serviceService:any;
  brandidval:any;
  brandvalue:any;
  categoryvalue:any;
  seasonvalue:any;

  productdata : any;
  editForm:any;

  
  
  



  constructor(formBuilder:FormBuilder, apiService :ApiService , router : Router, serviceService :ServiceService)
  {

    this.router = router;
    this.apiService = apiService;
    this.serviceService = serviceService;
    this.brandidval= this.serviceService.brandidval;
    this.brandvalue=this.serviceService.brandvalue;
    this.categoryvalue=this.serviceService.categoryvalue;
    this.seasonvalue=this.serviceService.seasonvalue;

   this.productdata = this.router.getCurrentNavigation().extras.proddata;
   this.user = localStorage.getItem('user');
   
   console.log("===============pppppp===============");
   console.log(this.productdata);
   console.log("=============ppppppp=================");



   
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none'; 
    

  
    this.formData = new FormData();
    this.docTopimage=null;
    this.docPictureinput = null;
    this.apiService = apiService;
    this.formBuilder = formBuilder;
  

    this.editForm = this.formBuilder.group({
      
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
    
  }


ngOnInit(): void {




   this.apiService.getAllVendorProduct().subscribe(
              
          (response : any) => {
               
            this.editForm = this.formBuilder.group({
              
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
  





  onedit()
  {
   
       


          console.log("============== this.vendorForm.valu==================");
           console.log(JSON.stringify(this.editForm.value));
          console.log("============== this.vendorForm.valu==================");






          this.formData.append("vendorProduct", JSON.stringify(this.editForm.value)); 

          console.log("===========this.formData=====================");
          console.log(this.formData)
          console.log("============this.formData====================");


          this.apiService.updateVendorProduct(this.formData).subscribe(
              (response : any) => {
               
                console.log(" ========================res nnnnnnnnnnnnnnnnnnnnnn===============");
                console.log(response);
                alert(response.mesage);


                if(response.status==200)
                this.router.navigateByUrl('/products.component');


                console.log(" ========================resnnnnnnnnnnnnnnnnnnn ===============");
                
              },
              (error:any) => {
                console.log(" ========================err ===============");
                console.log(error);
                alert(" Data not stored.")
                console.log(" ========================err ===============");
              }
              
            );


  }


   onFileSelected (event:any):void { 

    
         this.docTopimage = event.target.files[0];  
         this.formData.append('file', this.docTopimage,this.docTopimage.name);
         const reader = new FileReader();
    
         if(event.target.files && event.target.files.length) {
          const [file] = event.target.files;
          reader.readAsDataURL(file);
           reader.onload = () => {
                   this.imageSrc = reader.result as string;
                      
   
          };
   
        }     

 }



 onFileSelectBottom (event:any):void { 

  this.docPictureinput = event.target.files[0];  
  this.formData.append('file', this.docPictureinput,this.docPictureinput.name);
  const reader = new FileReader();
  if(event.target.files && event.target.files.length) {
   const [file] = event.target.files;
   reader.readAsDataURL(file);
   reader.onload = () => {
         this.imageSrcbottom = reader.result as string;
  
      };
  
    }

  }
  

  openCityLondon(city:any)
  {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
    this.london.style.display = 'none';
    this.tokyo.style.display = 'block';
  }


  openCitytokyo(city:any)
  {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
    this.london.style.display = 'block';
    this.tokyo.style.display = 'none';

  }
  
  
  

}