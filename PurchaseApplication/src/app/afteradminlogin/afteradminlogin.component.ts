import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import {HeaderFooterService} from '../header-footer.service'; 

@Component({
  selector: 'app-afteradminlogin',
  templateUrl: './afteradminlogin.component.html',
  styleUrls: ['./afteradminlogin.component.css']
})
export class AfteradminloginComponent  {
  mainhead:any
  mainfoot:any;
  headerFooterService :any;
  
  constructor(headerFooterService :HeaderFooterService){
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();
  }
    
}
