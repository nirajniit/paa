import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from '../environments/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  tokenService: any;
  usered: any;

  apiUrl = environment.baseUrl;
  
  //apiUrl = 'http://192.168.1.18:8085/api';

  token = '';
  http: HttpClient;
  headers = new HttpHeaders({
    "Authorization": TokenService.getToken(),
    'Content-Type': "application/json",
    "accept": "*/*"
  });




  // my create for add vender product

  myheaders = new HttpHeaders({
    "Authorization": TokenService.getToken(),
    'Content-Type': "multipart/form-data",
    "accept": "*/*"
  });

  constructor(http: HttpClient) {
    this.http = http;
    this.apiUrl = environment.baseUrl;
   

    this.headers = new HttpHeaders({
      "Authorization": "Bearer " + environment.LOGIN_TOKEN,
      'Content-Type': "application/json",
      "accept": "*/*"
    });
    
    this.myheaders = new HttpHeaders({
      "Authorization": "Bearer "+TokenService.getToken(),
      'Content-Type': "multipart/form-data",
      "accept": "*/*"
    });

    // alert("ddd" +this.myheaders);
  }
  tokenKey(tokenKey: any) {
    throw new Error('Method not implemented.');
  }




  saveUserType(formData: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    console.log("============servie JSON.stringify(===================");
    console.log(JSON.stringify(formData));
    console.log("============servie ===================");
    return this.http.post<any>(this.apiUrl + "/login/save", formData, {});

  }

  

  // add vender product api

saveVendorProduct(formData:any): Observable<any> {
   
    const headers = {
      'Authorization': 'Bearer ' + TokenService.getToken(),
      // Remove the 'Content-Type' header, it will be set automatically for FormData
      'accept': '*/*'
    };

    const options = {
      headers: headers
    };



    console.log("=============saveVendorProduct option=============");
    console.log(options);
    console.log("=============saveVendorProduct option=============");
   
   
    return this.http.post<any>(this.apiUrl+"/managedesignerItem/add_designeritem",formData,options);
  
  }
  
// get size
  getSize() {
   let token = TokenService.getToken();
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get<any>(this.apiUrl + "/sizemaster/get_size_master", { reportProgress: true, responseType: 'json', headers });
  }


  // new register api define here TokenService.getToken

  userRegister(body: any): Observable<any> {
    console.log("======body========");
    console.log(body);
    console.log("======body========");
    this.myheaders = new HttpHeaders({
      "Authorization":"Bearer "+ TokenService.getToken(),
      'Content-Type': "application/json",
      "accept": "*/*"
    });
    
    const hh = { // Use const instead of let for 'hh' object
      "headers": this.myheaders // Change "header" to "headers"
    };

    return this.http.post<any>(this.apiUrl + "/Admin/user_registration",body,hh );
  }


  // new login api
  login(formData: any): Observable<any> {
    let he = this.headers;
    return this.http.post<any>(this.apiUrl + "/auth/login", { reportProgress: true, responseType: 'json', he, formData });
  }



  // new api working  on superadmin_setting_cetagories
  // categories(): Observable<any> {
  //   let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI4MjczMjY1NTYwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJvcmdfaWQiOiI5NzhlZjc1Yy03M2QxLTQzNzQtYjA4NS01OWYzMjdkMjVjMDgiLCJkb21haW5faWQiOiIyIiwiZG9tYWluX2d1aWQiOiJiN2Q3OTA2Mi0xNmM0LTQxOWEtYTFkNy1mN2EzM2JiODdhMmIiLCJvcmdfdGltZV96b25lIjoiSU5ESUEiLCJkb21haW5fdGltZV96b25lIjoiSU5ESUEiLCJhY2NvdW50X3R5cGUiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiNmQ3ODA4ODgtYmNkMy00MGUxLTllOGEtZjRjOGI0MjQ1ZjcyIiwiZXhwIjoxNjkyNjA1OTA2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvIn0.f_gqhIdrfhiQkwKVIJ6NoJSfFuGJfLhnjB2kRK-m2vU';
  //   let headers = new HttpHeaders().set("Authorization","Bearer "+token);
  //   return this.http.get<any>(this.apiUrl+"/manage_Dopdown/categories",{reportProgress: true,responseType: 'json',headers});
  // }  



  // user data jo register karne ke baad show ho rha he 
  user(token: any) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get<any>(this.apiUrl + "/Admin/Users", { reportProgress: true, responseType: 'json', headers });
  }




}








