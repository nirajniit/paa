import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';



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

  inputs: string[] = ['image0'];
  imageDataBottom: File[] = [];

  topimage: any;
  pictureinput: any;
  formGroup: any;
  sizes: any;

  colorData: any;

  image1: any;
  public user_id: any;
  route: any;
  params: any;
  venderdata: any;

  constructor(private fb: FormBuilder, apiService: ApiService, router: Router, serviceService: ServiceService, route: ActivatedRoute) {

    // alert(" Cons "+TokenService.getToken());


    this.route = route;
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
    this.colorData = [];



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

    this.route.queryParams.subscribe((params: { [vendorid: string]: string }) => {
      console.log(params);
      this.user_id = params['vendorid']; 
      console.log(this.user_id);
    });

  }



  onSubmit() {

    var formData = new FormData();
    console.log("======== this.vendorForm.value ========================== ");
    console.log(this.vendorForm.value);
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
    formData.append("item_color", this.colorData);

    this.imageDataBottom.forEach((file) => {
      formData.append("item_picture", file);
    });
    formData.append("vender_id", this.user_id);




    formData.append("price", this.vendorForm.value.price);
    //ll.append("brandid", this.vendorForm.value.brandid.toString());

    this.apiService.saveVendorProduct(formData).subscribe(
      (response: any) => {
        alert(response.message);
        this.router.navigate(['/sample.component', { "admin": response.user_id }]);
      },
    );

  }


  


  onFileSelectBottom(event: any, index: number) {

    let fileInput1 = event.target;
    if (fileInput1.files && fileInput1.files.length > 0) {

      let file = event.target.files[0];
      this.imageDataBottom.push(file);


      if (file) {
        // Read the selected file as a Data URL
        const reader = new FileReader();
        reader.readAsDataURL(file);

        // Set the selectedImage variable when the file is loaded
        reader.onload = () => {
          this.image1 = reader.result;
        };
      }


      console.log("=========== onFileSelectBottom Arrays ===========");
      console.log(this.inputs);
      console.log(this.imageDataBottom);
      console.log(this.colorData);
      console.log("=========== onFileSelectBottom Arrays ===========");
    }


  }


  addInput() {
    const newIndex = this.inputs.length;
    this.inputs.push('image' + newIndex);


    console.log("=========== addInput Arrays ===========");
    console.log(this.inputs);
    console.log(this.imageDataBottom);
    console.log(this.colorData);
    console.log("=========== addInput Arrays ===========");


  }

  removeInput(index: number) {
    if (index >= 0 && index < this.inputs.length) {

      // Remove the corresponding elements from the arrays
      this.inputs.splice(index, 1);
      this.imageDataBottom.splice(index, 1);
      this.colorData.splice(index, 1);


      console.log("=========== Updated Arrays ===========");
      console.log(this.inputs);
      console.log(this.imageDataBottom);
      console.log(this.colorData);
      console.log("=========== Updated Arrays ===========");

    }


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



  getSelectedColor(event: any, index: number) {
    console.log(event.target.value + "  " + index);

    if (index >= 0 && index < this.colorData.length) {
      this.colorData[index] = event.target.value;
    } else if (index === this.colorData.length) {
      // If index is equal to the length of the array, you can use push to add a new element at the end.
      this.colorData.push(event.target.value);
    }

    console.log("=========== getSelectedColor Arrays ===========");
    console.log(this.inputs);
    console.log(this.imageDataBottom);
    console.log(this.colorData);
    console.log("=========== getSelectedColor Arrays ===========");
  }
}




