import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {

  constructor(private countdownService: CountdownService, public router: Router) {}

  ngOnInit() {}

  startTimer() {
    this.countdownService.startTimer(); 
    this.router.navigate(['/victory-2']);
  }
}
