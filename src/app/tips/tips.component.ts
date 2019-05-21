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
        element.innerHTML = "This is a tip for the development room. The tip is about the words game."
      }

      else if (this.page === "code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the development room. The tip is about the first code."
      }

      else if (this.page === "qr-code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the development room. The tip is about the first QR code."
      }

      else if (this.page === "qr-code-two") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the development room. The tip is about the second QR code."
      }

      else if (this.page === "qr-code-three") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the development room. The tip is about the third QR code."
      }

      else if (this.page === "qr-code-four") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the development room. The tip is about the fourth QR code."
      }

      else if (this.page === "game") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the development room. The tip is about the game."
      }
    }

    else if (this.room === "Creative") {
      if (this.page === "words") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the words game."
      }

      else if (this.page === "code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the first code."
      }

      else if (this.page === "qr-code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the first QR code."
      }

      else if (this.page === "qr-code-two") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the second QR code."
      }

      else if (this.page === "qr-code-three") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the third QR code."
      }

      else if (this.page === "qr-code-four") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the fourth QR code."
      }

      else if (this.page === "game") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the creative room. The tip is about the game."
      }
    }

    else if (this.room === "Broadcast") {
      if (this.page === "words") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the words game."
      }

      else if (this.page === "code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the first code."
      }

      else if (this.page === "qr-code-one") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the first QR code."
      }

      else if (this.page === "qr-code-two") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the second QR code."
      }

      else if (this.page === "qr-code-three") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the third QR code."
      }

      else if (this.page === "qr-code-four") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the fourth QR code."
      }

      else if (this.page === "game") {
        let element = document.getElementsByTagName("ion-card-content")[0]; 
        element.innerHTML = "This is a tip for the broadcast room. The tip is about the game."
      }
    }
  }

}
