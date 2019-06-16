import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { PopoverController } from '@ionic/angular';
import { TipsComponent } from '../tips/tips.component';

@Component({
  selector: 'app-words-page-two',
  templateUrl: './words-page-two.component.html',
  styleUrls: ['./words-page-two.component.scss'],
})
export class WordsPageTwoComponent implements OnInit {
  private words: string[] = ["Boek", "boek", "boek", "boek", "boek", "boek", "boek", "dino", "pop", "kan", "boek", "bloem", "bloem", "bloem", "bloem", "bloem", "boek", "boek", "boek", "boek", "kan", "kan", "boek", "kan", "dino", "boek", "boek", "boek", "boek", "boek", "boek", "boek", "dino", "pop", "kan", "boek", "bloem", "bloem", "bloem", "bloem", "bloem", "boek", "boek", "boek", "dino", "dino", "bloem", "kan", "pop"]; 
  private word = "bal"; 
  public intervalVar; 
  public intervalVar2; 
  public intervalVar3; 
  public startWordPosition = 0; 
  public fullWidth = 400; 
  public fullHeight = 400; 
  private song = "kerstmis"; 
  private form: FormGroup; 

  constructor(private formBuilder: FormBuilder, public router: Router, private countdownService: CountdownService, public popoverController: PopoverController) { }

  ngOnInit() {
    this.setForm(); 
    this.intervalVar = setInterval(function() {
      var element = document.getElementById("word2") as HTMLElement; 
      this.intervalVar3 = setTimeout(() => {
        element.style.color = "#fff"; 
        this.word = this.words[this.startWordPosition]; 
        element.textContent = this.word;
        if (this.startWordPosition === ((this.words.length)-1)) {
          this.startWordPosition = 0; 
        }
        else {
          this.startWordPosition++; 
        }
      }, 100);

      this.intervalVar2 = setTimeout(() => {
        element.style.color = "#000"; 
        element.textContent = this.word;
      }, 400); 
    }.bind(this), 500)
  }

  setForm() {
    this.form = this.formBuilder.group({
      song: ['', Validators.required], 
    })
  }

  verifySong() {
    if (this.form.value["song"].toLowerCase() === "bells" || this.form.value["song"].toLowerCase() === "kerstmis") {
      let element = document.getElementById("words2"); 
      element.className = "ion-page-hidden"; 
      this.router.navigate(['broadcasting-code']); 
    }
    else {
      document.getElementById("pianoImage").setAttribute("src", "assets/icon/pianored.png"); 
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
      componentProps: {page: "words", room: room}, 
      cssClass: "custom-popover"
    }); 

    return await popover.present();
  }
}
