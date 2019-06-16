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
    if (this.room === "Development") {
      if (this.page === "words") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "Zoek goed. Sommige code is verstopt."
      }

      else if (this.page === "code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "Je kan elk stukje code op de muur gebruiken."
      }
    }

    else if (this.room === "Creative") {
      if (this.page === "words") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "Volg de rode draad!"
      }

      else if (this.page === "code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "Om sommige verbanden te kunnen leggen, heb je de andere kamers nodig. "
      }
    }

    else if (this.room === "Broadcast") {
      if (this.page === "words") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "Hoor je de juiste melodie niet, laat dan een lampje branden"
      }
    }
    else if (this.page === "game") {
      let element = document.getElementsByTagName("ion-card-content")[0]; 
      element.innerHTML = "Gebruik de blacklight!"
    }
  }

}
