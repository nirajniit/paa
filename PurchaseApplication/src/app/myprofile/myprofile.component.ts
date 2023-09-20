import { Component } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  router: any;
  route: any;
  mainhead: any;
  mainfoot: any;
  apiService: any;
  productdata: any;
  LoginForm: any;
  venderdata: any;

  constructor() {

    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none';

  }







}
