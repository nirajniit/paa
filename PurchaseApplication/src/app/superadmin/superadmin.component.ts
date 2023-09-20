import { Component } from '@angular/core';
import {HeaderFooterService} from '../header-footer.service' 
import { TokenService } from "../token.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent {

  mainhead:any
  headerFooterService :any;
  tokenSubscription: any;
  authToken: any;
  user: any;
  router: any;
  tokenService: any;
  constructor(headerFooterService :HeaderFooterService,tokenService:TokenService, router: Router){
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
   this.tokenService=tokenService;
  }
}
