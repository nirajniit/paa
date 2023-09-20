import { Component } from '@angular/core';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {
  mainhead :any;
  mainfoot:any;

  constructor()
  {
      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'none'; 
     
    
    
  }

}
