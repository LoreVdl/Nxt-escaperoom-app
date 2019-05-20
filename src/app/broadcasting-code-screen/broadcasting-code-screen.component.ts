import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broadcasting-code-screen',
  templateUrl: './broadcasting-code-screen.component.html',
  styleUrls: ['./broadcasting-code-screen.component.scss'],
})
export class BroadcastingCodeScreenComponent implements OnInit {
  public intervalVar; 

  constructor(public router: Router) { }

  ngOnInit() {
    let router = this.router; 
    this.intervalVar = setTimeout(function() {
      router.navigate(['/code-1']); 
    }, 5000); 
  }

}
