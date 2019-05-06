import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  public intervalVar; 
  public timer = 1800; 
  public time = '30:00';

  constructor() { }

  startTimer() {
    this.intervalVar = setInterval(function() {
      this.timer--;
      this.time = moment.utc(this.timer*1000).format("mm:ss");

      if(this.timer === 0) {
        clearInterval(this.intervalVar);
      }
    }.bind(this), 1000)
  }

  showTimer() {
    return this.time; 
  }
}
