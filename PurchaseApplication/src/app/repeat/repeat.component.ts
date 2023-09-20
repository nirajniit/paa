import { Component } from '@angular/core';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent {

  mainhead :any;
  mainfoot:any;

  constructor()
  {


      this.mainhead = document.getElementById('mainhead');
      this.mainhead.style.display = 'none'; 
    



    
  }

}
