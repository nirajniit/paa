import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { IPConfigService } from '../ipconfig.service';


@Component({
  selector: 'app-approvedbyadmin',
  templateUrl: './approvedbyadmin.component.html',
  styleUrls: ['./approvedbyadmin.component.css']
})
export class ApprovedbyadminComponent implements OnInit {
  superForm: any;
  formBuilder: any;
  apiService: any;
  docPictureinput: any;
  docTopimage: any;
  formData: any;
  london: any;
  tokyo: any;
  router: any;
  mainhead: any;
  imageSrc: any;
  user: any;
  mainfoot: any
  productdata: any;
  imageSrcbottom: any;
  route: any;
  imgConfig: any;
  iPConfigService: any;
  item_picture: any;
  size: any;
  color: any;
  alldata: any;
  user_id: any;






  constructor(route: ActivatedRoute, formBuilder: FormBuilder, apiService: ApiService, iPConfigService: IPConfigService, router: Router, serviceService: ServiceService) {

    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';



    this.router = router;
    this.route = route;
    this.apiService = apiService;
    this.formBuilder=formBuilder;
    this.iPConfigService = iPConfigService;
    this.imgConfig = this.iPConfigService.getImageConfig();
    this.user = localStorage.getItem('user');
    this.size = []
    this.item_picture = [];
    this.color = [];
    this.alldata = [];

    this.route.queryParamMap.subscribe((params: any) => {
    var productid = JSON.parse(params.productid);


      this.apiService.GetAllDesignerItemsById(productid).subscribe(
        (response: any) => {
        alert("enter")
           console.log(" Single produt resposne")
            console.log(response);
            this.productdata = response.data;
            this.alldata = JSON.parse(this.productdata);
            console.log(" product data ");
            console.log(this.productdata);
            console.log(" product data ");
            console.log(" Single produt resposne ")

          //  this.item_picture=[this.productdata.file1, this.productdata.file2, this.productdata.file3,  this.productdata.file4, this.productdata.file5, this.productdata.file6 ];

          //  console.log("===============================");
          //  console.log(this.item_picture);
          //  console.log("===============================");




          this.superForm = this.formBuilder.group({
            Item_Id: this.productdata.Item_Id,
            topimage_url: "",
            brandId: this.productdata.brandId,
            brand: this.productdata.brand,
            category: this.productdata.category,
            season: this.productdata.season,
            designer: this.productdata.designer,
            male: this.productdata.male,
            female: this.productdata.female,
            gender: this.productdata.gender,
            fabric: this.productdata.fabric,

            size: this.productdata.size,

            item_picture: this.productdata.item_picture,

            pictureinput: this.productdata.pictureinput,

            color: this.productdata.color,
            price: this.productdata.price,
            vendorid: JSON.parse(this.user)

          });




        })


    });






    // this.formData = new FormData();
    // this.docTopimage=null;
    // this.docPictureinput = null;
    // this.apiService = apiService;
    // this.formBuilder = formBuilder;




  }



  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: { [productid: string]: string }) => {
      console.log(params);
      this.user_id = params['productid']; 

      console.log("===============user_id===================");
      
      console.log(this.user_id);

      console.log("===============user_id===================");

    });
   
    
  }






  onSubmit() {




    console.log("============== this.superForm.valu==================");
    console.log(JSON.stringify(this.superForm.value));
    console.log("============== this.superForm.valu==================");






    this.formData.append("vendorProduct", JSON.stringify(this.superForm.value));

    console.log("===========this.formData=====================");
    console.log(this.formData)
    console.log("============this.formData====================");


    this.apiService.updateVendorProduct(this.formData).subscribe(
      (response: any) => {

        console.log(" ========================res nnnnnnnnnnnnnnnnnnnnnn===============");
        console.log(response);
        console.log(" ========================resnnnnnnnnnnnnnnnnnnn ===============");

      },
      (error: any) => {
        console.log(" ========================err ===============");
        console.log(error);
        alert(" Data not stored.")
        console.log(" ========================err ===============");
      }

    );


  }


  onFileSelected(event: any): void {


    this.docTopimage = event.target.files[0];
    this.formData.append('file', this.docTopimage, this.docTopimage.name);
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;


      };

    }

  }



  onFileSelectBottom(event: any): void {

    this.docPictureinput = event.target.files[0];
    this.formData.append('file', this.docPictureinput, this.docPictureinput.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrcbottom = reader.result as string;

      };

    }

  }

  openCityLondon(city: any) {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
    this.london.style.display = 'none';
    this.tokyo.style.display = 'block';
  }


  openCitytokyo(city: any) {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
    this.london.style.display = 'block';
    this.tokyo.style.display = 'none';

  }






  sample() {

    this.router.navigateByUrl('/placeorder.component', { "proddata": this.productdata });

  }



}

