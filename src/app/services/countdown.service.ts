import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  public intervalVar; 
  public timer = 2700; 
  public time = '45:00';
  public gameStarted = false;
  public endOfGame = false; 
  public startedPartTwo = false;

  constructor(private router: Router) { }

  startTimer() {
    if (this.startedPartTwo) {
      this.timer += 900; 
      this.time = moment.utc(this.timer*1000).format("mm:ss");
    }
    this.gameStarted = true; 
    let element = document.getElementsByClassName("countdown")[0] as HTMLElement; 
    element.style.color = "#fff"; 
    this.endOfGame = false; 
    this.intervalVar = setInterval(function() {
      this.timer--;
      this.time = moment.utc(this.timer*1000).format("mm:ss");

      if (this.timer <= 0) {
        this.timer = 0; 
        this.time = '00:00'; 
        clearInterval(this.intervalVar);
        this.gameOver(); 

      }

      if (this.endOfGame) {
        clearInterval(this.intervalVar); 
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
    element.style.color = "#E90000"; 
    this.router.navigate(['/game-over']); 
  }

  endGame() {
    let element = document.getElementsByClassName("countdown")[0] as HTMLElement; 
    element.style.color = "#0BE900"; 
    this.endOfGame = true;  
  }

  startTimer2() {
    this.startedPartTwo = true; 
  }
}
