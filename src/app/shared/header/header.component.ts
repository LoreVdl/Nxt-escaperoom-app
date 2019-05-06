import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  time: string; 

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.time = this.countdownService.showTimer();
  }
}