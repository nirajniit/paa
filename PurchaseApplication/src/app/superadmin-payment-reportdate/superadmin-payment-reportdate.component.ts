import { Component } from '@angular/core';

@Component({
  selector: 'app-superadmin-payment-reportdate',
  templateUrl: './superadmin-payment-reportdate.component.html',
  styleUrls: ['./superadmin-payment-reportdate.component.css']
})
export class SuperadminPaymentReportdateComponent {
  london: any;
  tokyo: any;
  india: any;
  uk: any;
  constructor()
  {

  }


  openCity1(ciity:any){
    this.london = document.getElementById('sachin');
    this.tokyo = document.getElementById('aman');
    this.india = document.getElementById('pooja');
    this.uk = document.getElementById('laxmi');
    this.london.style.display = 'block';
    this.tokyo.style.display = 'none';
    this.india.style.display = 'none';
    this.uk.style.display = 'none';
  }
  openCity2(ciity:any){
    this.london = document.getElementById('sachin');
    this.tokyo = document.getElementById('aman');
    this.india = document.getElementById('pooja');
    this.uk = document.getElementById('laxmi');
    this.london.style.display = 'none';
    this.tokyo.style.display = 'block';
    this.india.style.display = 'none';
    this.uk.style.display = 'none';
    
  }
  openCity3(ciity:any){
    this.london = document.getElementById('sachin');
    this.tokyo = document.getElementById('aman');
    this.india = document.getElementById('pooja');
    this.uk = document.getElementById('laxmi');
    this.london.style.display = 'none';
    this.tokyo.style.display = 'none';
    this.india.style.display = 'block';
    this.uk.style.display = 'none';
    
  }
  openCity4(ciity:any){
    this.london = document.getElementById('sachin');
    this.tokyo = document.getElementById('aman');
    this.india = document.getElementById('pooja');
    this.uk = document.getElementById('laxmi');
    this.london.style.display = 'none';
    this.tokyo.style.display = 'none';
    this.india.style.display = 'none';
    this.uk.style.display = 'block';
  }
}
