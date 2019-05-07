import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words-page',
  templateUrl: './words-page.component.html',
  styleUrls: ['./words-page.component.scss'],
})
export class WordsPageComponent implements OnInit {
  private words: string[] = ["bal", "aap", "fiets", "test"]; 
  private word; 
  public intervalVar; 
  public intervalVar2; 
  public startWordPosition = 0; 

  constructor() { }

  ngOnInit() {
    this.intervalVar = setInterval(function() {
      this.word = this.words[this.startWordPosition]; 
      this.intervalVar2 = setTimeout(function() {
        if (this.startWordPosition === ((this.words.length)-1)) {
          this.startWordPosition = 0; 
        }
        else {
          this.startWordPosition++; 
        }
      }.bind(this), 3000)
    }.bind(this), 3000)
  }
}
