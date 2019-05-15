import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  public intervalVar; 
  public timer = 1800; 
  public time = '30:00';
  public gameStarted = false;

  constructor(private router: Router) { }

  startTimer() {
    this.gameStarted = true; 
    this.intervalVar = setInterval(function() {
      this.timer--;
      this.time = moment.utc(this.timer*1000).format("mm:ss");

      if(this.timer <= 0) {
        this.timer = 0; 
        this.time = '00:00'; 
        clearInterval(this.intervalVar);
        this.gameOver(); 

      }
    }.bind(this), 1000);
  }

  showTimer() {
    return [this.time, this.gameStarted]; 
  }

  loseTime() {
    this.timer = this.timer - 60; 
  }

  gameOver() {
    let element = document.getElementsByClassName("countdown")[0] as HTMLElement; 
    element.style.color = "red"; 
    this.router.navigate(['/game-over']); 
  }
}
