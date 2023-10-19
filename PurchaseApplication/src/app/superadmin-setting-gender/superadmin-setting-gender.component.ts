import { Component } from '@angular/core';

@Component({
  selector: 'app-superadmin-setting-gender',
  templateUrl: './superadmin-setting-gender.component.html',
  styleUrls: ['./superadmin-setting-gender.component.css']
})
export class SuperadminSettingGenderComponent {
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
