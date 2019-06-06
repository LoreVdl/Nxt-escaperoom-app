import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private time: any;
  private startGame: any; 

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.time = this.countdownService.showTimer()[0];
    this.startGame = this.countdownService.showTimer()[1];
   // this.startGame = true;

    if(this.startGame) {
      let element = document.getElementsByTagName('p')[0]; 
      element.style.marginTop = "0"; 
    }
  }
}