import { Component } from '@angular/core';

@Component({
  selector: 'app-superadmin-setting-size',
  templateUrl: './superadmin-setting-size.component.html',
  styleUrls: ['./superadmin-setting-size.component.css']
})
export class SuperadminSettingSizeComponent {
  showRow: any;
  



  constructor(){

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
}
