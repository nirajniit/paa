import { Component } from '@angular/core';

@Component({
  selector: 'app-super-admin-add-seasons',
  templateUrl: './super-admin-add-seasons.component.html',
  styleUrls: ['./super-admin-add-seasons.component.css']
})
export class SuperAdminAddSeasonsComponent {
     teams: any;



     constructor(){

     }
     list:any[]=[];
     addtask(item:string, year :any){
      console.log(item,year);
      if (item.length==0) {
         alert("Enter Data");
      }
      else{
       this.list.push({"name":item,"year":year})
       {
        console.log(this.list);
       }
      }
     }
                                                              
  }