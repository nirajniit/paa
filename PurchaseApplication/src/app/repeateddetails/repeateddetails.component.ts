import { Component } from '@angular/core';

@Component({
  selector: 'app-repeateddetails',
  templateUrl: './repeateddetails.component.html',
  styleUrls: ['./repeateddetails.component.css']
})
export class RepeateddetailsComponent {
  mainhead :any;
  constructor()
  {
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none'; 
  }
  

  
}
