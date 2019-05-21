import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { PopoverController } from '@ionic/angular';
import { TipsComponent } from '../tips/tips.component';

@Component({
  selector: 'app-words-page',
  templateUrl: './words-page.component.html',
  styleUrls: ['./words-page.component.scss'],
})
export class WordsPageComponent implements OnInit {
  private words: string[] = ["Bal", "aap", "fiets", "test"]; 
  private word = "bal"; 
  public intervalVar; 
  public intervalVar2; 
  public intervalVar3; 
  public startWordPosition = 0; 
  public fullWidth = 400; 
  public fullHeight = 400; 
  private song = "broeder jacob"; 
  private form: FormGroup; 

  constructor(private formBuilder: FormBuilder, public router: Router, private countdownService: CountdownService, public popoverController: PopoverController) { }

  ngOnInit() {
    this.setForm(); 
    this.intervalVar = setInterval(function() {
      this.word = this.words[this.startWordPosition]; 
      var element = document.getElementById("word") as HTMLElement; 
      element.textContent = this.word;
      if (this.startWordPosition === ((this.words.length)-1)) {
        this.startWordPosition = 0; 
      }
      else {
        this.startWordPosition++; 
      }
    }.bind(this), 500)
  }

  setForm() {
    this.form = this.formBuilder.group({
      song: ['', Validators.required], 
    })
  }

  verifySong() {
    if (this.form.value["song"].toLowerCase() === this.song) {
      this.router.navigate(['broadcasting-code']); 
    }
    else {
      let element = document.getElementsByTagName("ion-item")[0] as HTMLElement;
      element.style.borderColor = "#E90000";  
      document.getElementById("pianoImage").setAttribute("src", "assets/icon/pianored.png"); 
      this.countdownService.loseTime(); 
    }
  }

  async openTip(event, ev: any) {
    let room = event.target.id; 
    this.countdownService.loseTime(); 

    const popover = await this.popoverController.create({
      component: TipsComponent, 
      event: ev, 
      animated: true, 
      translucent: true, 
      componentProps: {page: "words", room: room} 
    }); 

    return await popover.present();
  }
}
