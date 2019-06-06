import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  public intervalVar; 

  constructor(private countdownService: CountdownService, public router: Router) {}

  ngOnInit() {}

  startTimer() {
    this.countdownService.startTimer(); 
    this.router.navigate(['/words']);
  }

  startAnimation() {
    let element = document.getElementsByTagName('img')[1]; 
    element.src = "../../assets/images/start.gif"; 
    this.intervalVar = setTimeout(function() {
      element.className = "ion-page-hidden"; 
      this.startTimer(); 
    }.bind(this), 800);
  }
}
