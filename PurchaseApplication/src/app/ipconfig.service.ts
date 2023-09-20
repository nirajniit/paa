import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IPConfigService {
 
  

     imagePath = "http://103.139.59.165:8085/image";
    //imagePath = "http://192.168.1.18:8085";

  constructor(  ) 
  {
     this.imagePath = "http://103.139.59.165:8085/image";
     // this.imagePath= "http://192.168.1.18:8085";
     
   }

   getImageConfig()
   {
     return this.imagePath;  
   }

   


}
