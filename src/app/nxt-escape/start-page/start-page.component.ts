import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  public intervalVar; 
  public timer = 1800; 
  public time = '30:00'; 

  constructor(private router: Router) {}

  ngOnInit() {}

  startGame()  {
    this.intervalVar = setInterval(function() {
      this.timer--;
      this.time = moment.utc(this.timer*1000).format("mm:ss");

      if(this.timer === 0) {
        clearInterval(this.intervalVar);
      }
    }.bind(this), 1000)

    let navigationExtras: NavigationExtras = {
      state: {
        intervalVar: this.intervalVar, 
        timer: this.timer, 
        time: this.time
      }
    };
    this.router.navigate(['nxt-escape'], navigationExtras);
  }    
}
