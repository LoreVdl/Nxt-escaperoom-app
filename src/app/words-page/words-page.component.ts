import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';

@Component({
  selector: 'app-words-page',
  templateUrl: './words-page.component.html',
  styleUrls: ['./words-page.component.scss'],
})
export class WordsPageComponent implements OnInit {
  private words: string[] = ["Bal", "Aap", "Fiets", "Test"]; 
  private word = "bal"; 
  public intervalVar; 
  public intervalVar2; 
  public startWordPosition = 0; 
  public fullWidth = 400; 
  public fullHeight = 400; 
  private song = "broeder jacob"; 
  private form: FormGroup; 

  constructor(private formBuilder: FormBuilder, public router: Router, private countdownService: CountdownService) { }

  ngOnInit() {
    this.setForm(); 
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

  setForm() {
    this.form = this.formBuilder.group({
      song: ['', Validators.required], 
    })
  }

  verifySong() {
    if (this.form.value["song"].toLowerCase() === this.song) {
      this.router.navigate(['code-1']); 
    }
    else {
      this.countdownService.loseTime(); 
    }
  }
}
