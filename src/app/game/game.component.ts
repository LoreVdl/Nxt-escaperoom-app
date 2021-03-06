import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { TipsComponent } from '../tips/tips.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private button1; 
  private icon1; 
  private answer1 = "option1"; 
  private answer2 = "option1"; 
  private answer3 = "option2"; 
  private answer4 = "option1";
  private answer5 = "option2";
  private count = 1; 
  private correctAnswers = 0;
  private correctAnswer; 
  private win = false; 

  constructor(public popoverController: PopoverController, public router: Router, private countdownService: CountdownService) { }

  ngOnInit() {
    /*let element = document.getElementsByClassName("buttons")[0]; 
    this.button1 = document.createElement("ion-button"); 
    this.button1.setAttribute("class", "option1");
    element.appendChild(this.button1); 

    this.icon1 = document.createElement("ion-icon"); 
    this.icon1.setAttribute("name", "checkmark");
    this.button1.appendChild(this.icon1);*/
  }

  checkAnswer(event) {
    let answer = event.target.id; 

    if (this.count === 1) {
      document.getElementById("icon1").setAttribute("src", "assets/icon/h.svg"); 
      document.getElementById("icon2").setAttribute("src", "assets/icon/t.svg"); 
      this.correctAnswer = this.answer1; 
    } 

    else if (this.count === 2) {
      document.getElementById("icon1").setAttribute("src", "assets/icon/dino.svg"); 
      document.getElementById("icon2").setAttribute("src", "assets/icon/olaf.svg");  
      this.correctAnswer = this.answer2; 
    } 

    else if (this.count === 3) {
      document.getElementById("icon1").setAttribute("src", "assets/icon/apple.svg"); 
      document.getElementById("icon2").setAttribute("src", "assets/icon/windows.svg"); 
      this.correctAnswer = this.answer3; 
    } 

    else if (this.count === 4) {
      document.getElementById("icon1").setAttribute("src", "assets/icon/e.svg"); 
      document.getElementById("icon2").setAttribute("src", "assets/icon/s.svg"); 
      this.correctAnswer = this.answer4; 
    } 

    else if (this.count === 5 && this.correctAnswers < 5) {
      document.getElementById("icon1").setAttribute("src", "assets/icon/pollock.svg"); 
      document.getElementById("icon2").setAttribute("src", "assets/icon/feet.svg"); 
      this.correctAnswer = this.answer5; 
    } 

    let element1 = document.getElementsByClassName("button1")[0]; 
    let element2 = document.getElementsByClassName("button2")[0]; 
    let element3 = document.getElementsByClassName("circle" + this.count.toString())[0] as HTMLElement; 

    if (answer === this.correctAnswer) {
      this.correctAnswers++;
      element3.style.color = "#0BE900"; 
    }
    else {
      this.countdownService.loseTime(); 
      element3.style.color = "#E90000"; 
    }

    if (this.count === 5 && this.correctAnswers < 5) {
      this.count = 0; 
      this.correctAnswers = 0; 

      for (let i = 1; i <= 5; i++ ) {
        let element = document.getElementsByClassName("circle" + i)[0] as HTMLElement; 
        element.style.color = "#fff"; 
      }
    }
    else if (this.count === 5 && this.correctAnswers === 5) {
      this.win = true; 
    }

    this.count++; 
  }

  verifyCode() {
    let element = document.getElementById("game"); 
    element.className = "ion-page-hidden";
    this.router.navigate(['qrcode-3']); 
  }

  async openTip(ev: any) {
    this.countdownService.loseTime(); 

    const popover = await this.popoverController.create({
      component: TipsComponent, 
      event: ev, 
      animated: true, 
      translucent: true, 
      componentProps: {page: "game"}, 
      cssClass: "custom-popover"
    }); 

    return await popover.present();
  }

}
