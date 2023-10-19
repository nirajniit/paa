import { Component } from '@angular/core';

@Component({
  selector: 'app-superadmin-setting-brand',
  templateUrl: './superadmin-setting-brand.component.html',
  styleUrls: ['./superadmin-setting-brand.component.css']
})
export class SuperadminSettingBrandComponent {

  showRow: boolean = false;
 

   constructor(){
    this.showRow = false;


   }
 
   toggleRowVisibility(): void {
    this.showRow = !this.showRow;

  }

  // add data function
  list:any[]=[];
  addtask(item:string){
   console.log(item);
   if (item.length==0) {
      alert("Enter Data");
   }
   else{
    this.list.push({id:this.list.length,name:item})
    {
     console.log(this.list);
    }
   }
  }

  // end add data function
  
 

}


