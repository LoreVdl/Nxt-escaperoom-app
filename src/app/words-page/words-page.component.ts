import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-words-page',
  templateUrl: './words-page.component.html',
  styleUrls: ['./words-page.component.scss'],
})
export class WordsPageComponent implements OnInit {
  private words: string[] = ["bal", "aap", "fiets", "test"]; 
  private word = "bal"; 
  public intervalVar; 
  public intervalVar2; 
  public startWordPosition = 0; 
  public fullWidth = 400; 
  public fullHeight = 400; 

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.intervalVar = setInterval(function() {
      this.word = this.words[this.startWordPosition]; 
      var element = document.getElementById("word") as HTMLElement; 
      element.textContent = this.word;

      this.intervalVar2 = setTimeout(function() {
        if (this.startWordPosition === ((this.words.length)-1)) {
          this.startWordPosition = 0; 
        }
        else {
          this.startWordPosition++; 
        }
      }.bind(this), 500)
    }.bind(this), 500)
  }

  ngOnChange() {
    
  }
}
