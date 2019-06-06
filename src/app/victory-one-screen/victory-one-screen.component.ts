import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../services/countdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-victory-one-screen',
  templateUrl: './victory-one-screen.component.html',
  styleUrls: ['./victory-one-screen.component.scss'],
})
export class VictoryOneScreenComponent implements OnInit {
  public intervalVar; 

  constructor(private countdownService: CountdownService, public router: Router) { }

  ngOnInit() {
    this.countdownService.endGame(); 

    let router = this.router; 
    this.intervalVar = setTimeout(function() {
      let element = document.getElementById("victoryOne"); 
      element.className = "ion-page-hidden";
      router.navigate(['/qrcode-1']); 
    }, 20000); 
  }

}
