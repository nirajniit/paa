import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ElementRef } from '@angular/core';
import { TokenService } from "../token.service";

@Component({
  selector: 'app-vendor-new-design',
  templateUrl: './vendor-new-design.component.html',
  styleUrls: ['./vendor-new-design.component.css']
})

export class VendorNewDesignComponent implements OnInit {
  vendorForm: any;
  backgroundElement: any;
  apiService: any;
  docTopimage: any;
  router: any;
  mainhead: any;

  imageSrc: any;
  user: any;
  serviceService: any;
  brandidval: any;
  brandvalue: any;
  categoryvalue: any;
  seasonvalue: any;
  
  inputs: string[] = [''];
  imageDataBottom: File[] = [];
    
  topimage: any;
  pictureinput: any;
  formGroup: any;
  sizes: any;



  constructor(private fb: FormBuilder, apiService: ApiService, router: Router, serviceService: ServiceService) {

    // alert(" Cons "+TokenService.getToken());


    this.router = router;
    this.serviceService = serviceService;
    this.brandidval = this.serviceService.brandidval;
    this.brandvalue = this.serviceService.brandvalue;
    this.categoryvalue = this.serviceService.categoryvalue;
    this.seasonvalue = this.serviceService.seasonvalue;
    
    this.user = localStorage.getItem('user');
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none';
    // this.tokenService=tokenService
    this.apiService = apiService;
    


    this.apiService.getSize().subscribe(
      (response: any) => {
        console.log('===============================responseSize=============');
        console.log(response);
        console.log('===============================responseSize=============');

        // Assuming your response contains the 'size' data as an array, you can assign it to the 'sizes' property
        this.sizes = response.data;
        console.log(this.sizes);
      },
      (error: any) => {
        console.error('Error fetching sizes:', error);
      }
    );


    this.vendorForm = this.fb.group({
      topimage: [''],
      brandid: 0,
      brandnumber: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      brand: "",
      category: "",
      season: "",
      designer: "",
      gender: "",
      fabric: "",
      size: [this.sizes],
      item_color: [""],
      item_picture: [""],
      price: 0,
      vendorid: JSON.parse(this.user)
    });

    
  }


  ngOnInit(): void {

  }


  onSubmit() {

  var formData = new FormData();
    console.log("======== this.vendorForm.value ========================== ");
    console.log( this.vendorForm.value );
    console.log("======== this.vendorForm.value ========================== ");
    formData.append("topimage", this.docTopimage);
    formData.append("brandid", this.vendorForm.value.brandid);
    formData.append("brandnumber", this.vendorForm.value.brandnumber);
    formData.append("brand", this.vendorForm.value.brand);
    formData.append("category", this.vendorForm.value.category);
    formData.append("season", this.vendorForm.value.season);
    formData.append("designer", this.vendorForm.value.designer);
    formData.append("gender", this.vendorForm.value.gender);
    formData.append("fabric", this.vendorForm.value.fabric);
    formData.append("size", this.vendorForm.value.size);
    formData.append("item_color", this.vendorForm.value.item_color);
    
    this.imageDataBottom.forEach((file) => {
      formData.append("item_picture",file);
    });
   



    formData.append("price", this.vendorForm.value.price);
   //ll.append("brandid", this.vendorForm.value.brandid.toString());
  
  this.apiService.saveVendorProduct(formData).subscribe(
    (response: any) => {
         alert(response.message);
    },
  );

  }


onFileSelectBottom(event: any, index: number) {
  const file = event.target.files[0];
  this.imageDataBottom.push(file);
  this.formGroup.get(`picture__input${index}`).setValue(file);
}


  addInput() {
    const newIndex = this.inputs.length;
    this.inputs.push('');
    this.formGroup.addControl(`pictureinput${newIndex}`, new FormControl(''));
    this.formGroup.addControl(`color${newIndex}`, new FormControl(''));
  }

  removeInput(index: number) {
    this.inputs.splice(index, 1);
    this.imageDataBottom.splice(index,1);
    console.log("========================this.imageDataBottom==================");
    console.log(this.imageDataBottom);
    console.log("========================this.imageDataBottom==================");

    this.formGroup.removeControl(`pictureinput${index}`);
    this.formGroup.removeControl(`color${index}`);
    
  }


  // topimage  
  onFileSelected(event: any): void {
    const fileInput = event.target;
  
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.docTopimage = file;
  
      const reader = new FileReader();
  
  
      reader.onload = () => {
          this.imageSrc = reader.result as string;
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  get f() {
    return this.vendorForm.controls;

  }


}



