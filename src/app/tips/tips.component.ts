import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
})
export class TipsComponent implements OnInit {
  private page; 
  private room; 

  constructor(public navParams: NavParams) {
    this.page = navParams.get('page'); 
    this.room = navParams.get('room'); 
  }

  ngOnInit() {
    if (this.page === "words" && this.room === "Development") {
      let element = document.getElementsByTagName("ion-card-content")[0]; 
      element.innerHTML = "This is a tip for the development room. The tip is about the words game."
    }

    else if (this.page === "words" && this.room === "Creative") {
      let element = document.getElementsByTagName("ion-card-content")[0]; 
      element.innerHTML = "This is a tip for the creative room. The tip is about the words game."
    }

    else if (this.page === "words" && this.room === "Broadcast") {
      let element = document.getElementsByTagName("ion-card-content")[0]; 
      element.innerHTML = "This is a tip for the broadcast room. The tip is about the words game."
    }

    else if (this.page === "code-one" && this.room === "Development") {
      let element = document.getElementsByTagName("ion-card-content")[0]; 
      element.innerHTML = "This is a tip for the development room. The tip is about the first code."
    }
  }

}
