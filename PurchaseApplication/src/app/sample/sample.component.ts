
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { IPConfigService } from '../ipconfig.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {


      vendorForm  : any;
      formBuilder : any;
      apiService  : any;
      docPictureinput:any;
      docTopimage:any;
      formData : any ;
      london:any;
      tokyo:any;
      router:any;
      route:any;
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
      setBackgroundImage: any;
      docPictureinput1:any;
      imageSrc1 : any;
      imageSrcbottom1: any;
      imageSrcbottom2: any;
      imageSrcbottom3: any;
      imageSrcbottom4: any;
      docPictureinput2: any;
      imageSrcbottomimage: any;
      docPictureinput3 : any;
      docPictureinput4 :any;
      

      constructor(formBuilder:FormBuilder, apiService :ApiService , router : Router, serviceService :ServiceService,route:ActivatedRoute)
      {

        this.router = router;
        this.route = route;
        this.serviceService = serviceService;
        this.brandidval= this.serviceService.brandidval;
        this.brandvalue=this.serviceService.brandvalue;
        this.categoryvalue=this.serviceService.categoryvalue;
        this.seasonvalue=this.serviceService.seasonvalue;

        
        this.formData = new FormData();
        this.docTopimage=null;
        this.docPictureinput = null; this.docPictureinput = null;
        this.docPictureinput1 = null;
        this.docPictureinput2 = null;
        this.docPictureinput3 = null;
        this.docPictureinput4 = null;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.mainhead = document.getElementById('mainhead');
        this.mainhead.style.display = 'none'; 
        this.productdata=null;



        this.route.queryParams
        .subscribe((params:any) => {
         
          this.apiService.getAllVendorProductbyid(params.prodid).subscribe(
            (response : any) => {

              this.productdata = response;
              console.log("    Sample  Component======================= ");
              console.log(this.productdata);
              console.log("    Sample  Component======================= ");
     
            

        this.vendorForm = this.formBuilder.group({
          
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
          pictureinput1:this.productdata.pictureinput1,
          file1: this.productdata.file1,
          file2: this.productdata.file2,
          file3: this.productdata.file3,
          file4: this.productdata.file4,
          file5: this.productdata.file5,
          file6: this.productdata.file6,
          color:this.productdata.color,
          color1:this.productdata.color1,
          color2:this.productdata.color2,
          color3:this.productdata.color3,
          color4:this.productdata.color4,
          price:this.productdata.price,
          vendorid:JSON.parse(this.user)
                  
        });

      })
    })

        
      }


  ngOnInit(): void {


    

      
  }
      





      onSubmit()
      {
       
           


              console.log("============== this.vendorForm.valu==================");
               console.log(JSON.stringify(this.vendorForm.value));
              console.log("============== this.vendorForm.valu==================");






              this.formData.append("vendorProduct", JSON.stringify(this.vendorForm.value)); 

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
                       this.setBackgroundImage(this.imageSrc);
                          
       
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
             this.setBackgroundImage(this.imageSrcbottom);
      
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


