import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';


import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { filter } from 'rxjs';
import { TokenService } from '../token.service';
import { environment } from 'src/environments/environments/environment';
// import {AuthInterceptorService} from '../auth-interceptor.service'
// AuthInterceptorService : AuthInterceptorService


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // phone:any;
  router: any;
  user: any;
  productdata: any;
  mydata: any;
  temps: any;



  ngOnInit(): void {

    const inputElement = document.getElementById('#phone');
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: 'US',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }

  }

  LoginForm: any;
  formBuilder: any;
  apiService: any;
  mainhead: any;
  mainfoot: any;
  vendorProduct: any;




  constructor(formBuilder: FormBuilder, apiService: ApiService, router: Router) {

    this.router = router;
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none';
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';
    this.apiService = apiService;
    this.formBuilder = formBuilder;



    console.log(this.user);


    this.LoginForm = this.formBuilder.group({
      'mobile': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      password: ""

    });



  }




  onSubmit() {


    console.log(" ============================== ");
    console.log(this.LoginForm.value);
    console.log(" ============================== ")


    var formData = new FormData();
    formData.append("mobile", this.LoginForm.value.mobile);
    formData.append("password", this.LoginForm.value.password);



    // call login api and user api and compare both
    this.apiService.login(formData).subscribe(
      (response: any) => {

        this.productdata = response;

        console.log("===============================================nnn Login ===============");
        // genrate token 
        console.log("nn " + this.productdata.token);
        TokenService.setToken(this.productdata.token);

        console.log("===============================================nnn Login===============");


        this.apiService.user(TokenService.getToken()).subscribe(
          (response: any) => {

            console.log("===============================================All Data===============");

            console.log(response.data);
            console.log("====================================All Data ===============");

            // filter data
            let filteredUsers = response.data.filter((user: any) => {
              return user.mobile === this.LoginForm.value.mobile;

            });

            console.log("======================filteredUsers ==================");
            console.log(filteredUsers[0]);
            console.log("======================filteredUsers ==================");


            if (filteredUsers[0].roleId == "1") {

              this.router.navigate(['/superadmin.component', { "Super_admin": filteredUsers[0].user_id }]);

            }

            else if (filteredUsers[0].roleId == "2") {
              this.router.navigate(['/orderhistory.component', { "admin": filteredUsers[0].user_id }]);
            }


            else if (filteredUsers[0].roleId == "3") {

              //  this.router.navigate(['vendorhome.component', { "vender": filteredUsers[0].user_id}]); 
              // this.apiService.user(response.data.user_id).subscribe(
              //   (responseVendor: any) => {
              //     alert("working")

              //     console.log(responseVendor)
                  // if (responseVendor.length == 0) {
                    this.router.navigate(['vendorhome.component'],{queryParams: { "vendorid": filteredUsers[0].user_id }})
                    // this.router.navigate(['vendorhome.component', { "vender": filteredUsers[0].user_id }]);
                  // }
                  // else {
                    // this.router.navigate(['products.component', { "vender": filteredUsers[0].user_id }]);
                  // }

              //   }
              // )


            }


            else if (filteredUsers[0].roleId == "4") {

              this.router.navigate(['/merchant.component', { "marchant": filteredUsers[0].user_id }]);

            }
            else {
              alert(" Invalid credentail");
            }

          },
          (error: any) => {
            console.log(" ========================err ===============");
            console.log(error);
            console.log(" ========================err ===============");
          }



        )

      }



    )
  }

  get f() {
    return this.LoginForm.controls;
  }

}

function LoginForm() {

}

