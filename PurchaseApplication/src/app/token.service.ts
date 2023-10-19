import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  tokenKey :any;
  
  static  getToken() {    

   
    let tokenKey:any;
      tokenKey = localStorage.getItem('tokenKey') != undefined ? localStorage.getItem('tokenKey') : "";
      console.log(" ======================getter Token =========================");
      console.log(tokenKey);
      console.log(" ======================getter Token =========================");
       return tokenKey;
  }
  static  setToken(token: any): void {

    console.log(" ======================setter Token =========================");
    console.log(token);
    console.log(" ======================setter Token =========================");
    localStorage.setItem('tokenKey', token);
    
  }
}




