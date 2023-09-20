import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-superadmin-setting-categories',
  templateUrl: './superadmin-setting-categories.component.html',
  styleUrls: ['./superadmin-setting-categories.component.css']
})
export class SuperadminSettingCategoriesComponent {
  showRow: any;
  router: any;
  route: any;
  apiService: any;
  productdata: any;
  
  temps: any;

  constructor(router: Router, apiService: ApiService,route:ActivatedRoute) {
    this.route = router
    this.apiService = apiService;

    this.apiService.categories().subscribe((response: any) => {

    // console.log(response);
    this.productdata = response;
    console.log(this.productdata);
    console.log(this.productdata.status);
    console.log(this.productdata.message);
    console.log(this.productdata.data);
    // pass the array data in variable and print in html file
    this.temps = this.productdata.data;
    });
    

  }



  toggleRowVisibility(): void {
    this.showRow = !this.showRow;

  }

  // add data function
  list: any[] = [];
  addtask(item: string) {
    console.log(item);
    if (item.length == 0) {
      alert("Enter Data");
    }
    else {
      this.list.push({ id: this.list.length, name: item })
      {
        console.log(this.list);
      }
    }
  }
}
