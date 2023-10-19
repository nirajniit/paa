import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HeaderFooterService } from '../header-footer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { TokenService } from "../token.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  template: `
  <button (click)="generateToken()">Generate Token</button>
`
})
export class AdduserComponent {

  mainhead: any
  merchant: any;
  vendor: any;
  admin: any;
  divvendor: any;
  divadmin: any;
  divmerchant: any;
  headerFooterService: any;
  green: any;
  color: any;
  red: any;
  blue: any;

  merchantval: any;
  vendorval: any;
  adminval: any;

  mobileNumberError: any;

  userForm: any;
  formBuilder: any;
  apiService: any;
  isChecked: any;

  name = 'Dynamic Add Fields';
  values: any;
  globalError: any;
  tokenService: any;




  constructor(headerFooterService: HeaderFooterService, formBuilder: FormBuilder, apiService: ApiService, private renderer: Renderer2, private el: ElementRef ) {

    this.values = new Array();
    this.globalError = false;

 alert(TokenService.getToken());
    this.isChecked = true;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();



    this.formBuilder = formBuilder;
    this.apiService = apiService;

    this.userForm = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.required, Validators.min(10), Validators.max(10)])],
      pass: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      roleid: ['3', [Validators.required]],
      brandid: ['', Validators.compose([Validators.required])],
      iamgename: null,
      latone: ['', Validators.compose([Validators.required])],
      lattwo: ['', Validators.compose([Validators.required])],
      longone: ['', Validators.compose([Validators.required])],
      longtwo: ['', Validators.compose([Validators.required])]
    });


    this.apiService.userRegister(FormData).subscribe(
      (response: any) => {
        //  console.log(response);
        //  console.log(response.roleId);
        
        let data = response.data;
        // this.tokenService.setToken(data.token);



        this.merchantval = 0;
        this.vendorval = 0;
        this.adminval = 0;
        console.log(response);
        let ctr = 0;
        data.forEach((item: any) => {

          console.log(item)
          if (item[ctr] == "Admin") {
            this.adminval = item[3];
          }
          else if (item[ctr] == "Merchant") {
            this.merchantval = item[3];

          }
          if (item[ctr] == "Vendor") {
            this.vendorval = item[3];
          }

        });






      },
      (err: any) => {
        console.log(" ===============err ================= ");
        console.log(err);
        console.log(" ===============err ================= ");
      })


  }




  //End token gerrater


  removevalue(i: any) {
    this.values.splice(i, 1);
  }

  addvalue() {
    if (this.userForm.value.firstName != undefined && this.userForm.value.firstName.length > 0)
      this.values.push({ value: "", error: "" });
    else
      alert(" Kinldy add the Vendor Name first ")

  }


  searchChanged(event: any) {
    console.log(event);
    //vendorid/getAllByVendorId?vendorid=BAAA\

    this.apiService.searchVendorId(event).subscribe(
      (response: any) => {

        console.log(response)
        if (response.data != undefined) {
          if (response.data.vendorID == event) {
            alert(event + " all ready taken By " + response.data.vendorName);
          }
          else {
            //event.values[event.values.length-1].error="";



          }

        }



      })

  }





  userType(useType: any) {



    if (useType == "merchant") {
      this.divmerchant = document.getElementById('divmerchant');
      this.divvendor = document.getElementById('divvendor');
      this.divadmin = document.getElementById('divadmin');
      this.green = document.getElementById('green');
      this.red = document.getElementById('red');
      this.color = document.getElementById('color');
      this.blue = document.getElementById('blue');
      this.divmerchant.style.display = 'block';
      this.divvendor.style.display = 'none';
      this.divadmin.style.display = 'none';
      this.color.style.color = '#ffbe00';
      this.green.style.color = '#ffbe00';
      this.red.style.color = '#ffbe00';
      this.blue.style.color = '#ffbe00';

    }
    else if (useType == "vendor") {
      this.divmerchant = document.getElementById('divmerchant');
      this.divvendor = document.getElementById('divvendor');
      this.divadmin = document.getElementById('divadmin');
      this.green = document.getElementById('green');
      this.color = document.getElementById('color');
      this.red = document.getElementById('red');
      this.blue = document.getElementById('blue');
      this.divmerchant.style.display = 'none';
      this.divvendor.style.display = 'block';
      this.divadmin.style.display = 'none';
      this.color.style.color = '#000';
      this.green.style.color = '#116418';
      this.red.style.color = '#c51724';
      this.blue.style.color = '#204c77';




    }

    else if (useType == "admin") {
      this.divmerchant = document.getElementById('divmerchant');
      this.color = document.getElementById('color');
      this.divadmin = document.getElementById('divadmin');
      this.green = document.getElementById('green');
      this.divvendor = document.getElementById('divvendor');
      this.blue = document.getElementById('blue');
      this.divmerchant.style.display = 'none';
      this.red = document.getElementById('red');
      this.divvendor.style.display = 'none';
      this.divadmin.style.display = 'block';
      this.green.style.color = '#116418';
      this.color.style.color = '#000';
      this.red.style.color = '#c51724';
      this.blue.style.color = '#204c77';



    }
    else {



    }





  }

  onSubmit() {

    if (this.userForm.value.roleid == 3) {


      if (this.userForm.value.firstName.length != 0 && this.userForm.value.mobile.toString().length == 10 && this.userForm.value.pass.length != 0 && this.userForm.value.brandid.length != 0) {

        console.log(this.userForm.value.firstName);
        console.log(this.userForm.value.mobile);
        console.log(this.userForm.value.pass);
        console.log(this.userForm.value.brandid);


        var bodyvender = {
          "username": this.userForm.value.firstName,
          "first_name": "",
          "last_name": "",
          "mobile": this.userForm.value.mobile.toString(),
          "alternative_mobile": "",
          "email_address": "",
          "address": "",
          "city": "",
          "state": "",
          "country": "",
          "roleName": "vendor",
          "roleId": "3",
          "password": this.userForm.value.pass,
          "description": "",
          "latitude": "",
          "longitude": "",
          "brandId":this.userForm.value.brandid
        }



        this.apiService.userRegister(bodyvender).subscribe(
          (response: any) => {
            console.log("=====================================add================================");
            console.log(response);
            // alert(TokenService.getToken());
            console.log("=====================================add================================");
            alert("Vendor Add");

          })
      }
      else {
        alert(" All Fields can not be left blank and Mobile length should be 10.");
        return;
      }

    }
    else if (this.userForm.value.roleid == 2) {

      if (this.userForm.value.firstName.length != 0 && this.userForm.value.mobile.toString().length == 10 && this.userForm.value.pass.toString().length != 0) {

        console.log(this.userForm.value.firstName);
        console.log(this.userForm.value.mobile);
        console.log(this.userForm.value.pass);

        var bodyadmin = {
          "username": this.userForm.value.firstName,
          "first_name": "",
          "last_name": "",
          "mobile": this.userForm.value.mobile.toString(),
          "alternative_mobile": "",
          "email_address": "",
          "address": "",
          "city": "",
          "state": "",
          "country": "",
          "roleName": "admin",
          "roleId": "2",
          "password": this.userForm.value.pass.toString(),
          "description": "",
          "latitude": "",
          "longitude": "",
         
        }


        this.apiService.userRegister(bodyadmin).subscribe(
          (response: any) => {
            console.log("===================================add================================");
            console.log(response);
            //  alert(TokenService.getToken());
            console.log("=====================================add================================");
            alert("Admin Add");

          })
      }
      else {
        alert(" All Fields can not be left blank and Mobile length should be 10.");
        return;
      }

    }
    else if (this.userForm.value.roleid == 4) {

      console.log(this.userForm.value.firstName);
      console.log(this.userForm.value.mobile);
      console.log(this.userForm.value.pass);
      console.log(this.userForm.value.latone);
      console.log(this.userForm.value.longone);
      console.log(this.userForm.value.longtwo);
      console.log(this.userForm.value.lattwo);


      if (this.userForm.value.firstName.length != 0 && this.userForm.value.mobile.toString().length == 10 && this.userForm.value.pass.length != 0 && this.userForm.value.latone.length != 0 && this.userForm.value.longone.length != 0 && this.userForm.value.longtwo.length != 0 && this.userForm.value.lattwo.length != 0) {


        var bodymarchant = {
          "username": this.userForm.value.firstName,
          "first_name": "",
          "last_name": "",
          "mobile": this.userForm.value.mobile.toString(),
          "alternative_mobile": "",
          "email_address": "",
          "address": "",
          "city": "",
          "state": "",
          "country": "",
          "roleName": "merchant",
          "roleId": "4",
          "description": "",
          "password": this.userForm.value.pass,
          "latitude": this.userForm.value.latone.toString(),
          "longitude": this.userForm.value.longone.toString()
        }

        this.apiService.userRegister(bodymarchant).subscribe(
          (response: any) => {
            console.log("===================================add================================");
            console.log(response);
            // alert("token"+TokenService.getToken());
            console.log("=====================================add================================");
            alert("Merchant Add");

          })
      }
      else {
        alert(" All Fields can not be left blank and Mobile length should be 10.");
        return;

      }

    }




  }




  get f() {
    return this.userForm.controls;

  }



}