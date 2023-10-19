import { Component } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  mainhead :any;
  mainfoot:any;

  constructor()
  {
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none'; 
   



    
  }
}
