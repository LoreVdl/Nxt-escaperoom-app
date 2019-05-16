import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../services/countdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-part-one-screen',
  templateUrl: './end-part-one-screen.component.html',
  styleUrls: ['./end-part-one-screen.component.scss'],
})
export class EndPartOneScreenComponent implements OnInit {
  public intervalVar; 

  constructor(private countdownService: CountdownService, public router: Router) { }

  ngOnInit() {
    let router = this.router; 
    this.intervalVar = setTimeout(function() {
      router.navigate(['/victory-1']); 
    }, 5000); 
  }

}
