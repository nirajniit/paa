import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mainhead:any;
  mainfoot:any;
    constructor()
    {
      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'none'; 
      this.mainfoot = document.getElementById('mainfoot');
      this.mainfoot.style.display = 'none'; 
    }

}
