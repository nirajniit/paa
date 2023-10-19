import { Component } from '@angular/core';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent {
  london :any;
  tokyo : any;
  mainhead :any;
  mainfoot:any;

  constructor()
  {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
   
    
    
  }

  openCityLondon(city:any)
  {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
    this.london.style.display = 'none';
    this.tokyo.style.display = 'block';
  }


  openCitytokyo(city:any)
  {
    this.london = document.getElementById('London');
    this.tokyo = document.getElementById('Tokyo');
    this.london.style.display = 'block';
    this.tokyo.style.display = 'none';

  }

}
