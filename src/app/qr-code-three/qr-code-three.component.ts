import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TipsComponent } from '../tips/tips.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code-three',
  templateUrl: './qr-code-three.component.html',
  styleUrls: ['./qr-code-three.component.scss'],
})
export class QrCodeThreeComponent implements OnInit {

  qrData = null; 
  createdCode = null; 
  scannedCode = null; 
  private code = "ABCDE"; 

  constructor(public popoverController: PopoverController, public router: Router, private countdownService: CountdownService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {}

  ngDoCheck() {
    if (this.scannedCode) {
      this.checkCode(); 
    }
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

  checkCode() {
    if (this.code === this.scannedCode) {
      document.getElementById("bug3").setAttribute("src", "assets/icon/bugGreen.svg"); 
    }
    else {
      document.getElementById("bug3").setAttribute("src", "assets/icon/bugr.svg"); 
    }
  }

  navigate() {
    let element = document.getElementById("qrscanner3"); 
    element.className = "ion-page-hidden";
    this.router.navigate(['qrcode-4'])
  }

  async openTip(event, ev: any) {
    let room = event.target.id; 
    this.countdownService.loseTime(); 

    const popover = await this.popoverController.create({
      component: TipsComponent, 
      event: ev, 
      animated: true, 
      translucent: true, 
      componentProps: {page: "qr-code-three", room: room}
    }); 

    return await popover.present();
  }

}
