import { Component } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  mainhead :any;
  mainfoot:any;

  constructor()
  {

      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'none'; 
    



    
  }
}
