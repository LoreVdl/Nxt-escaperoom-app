import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CountdownService } from '../services/countdown.service';
import { Router } from '@angular/router';
import { TipsComponent } from '../tips/tips.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code-one',
  templateUrl: './qr-code-one.component.html',
  styleUrls: ['./qr-code-one.component.scss'],
})
export class QRCodeOneComponent implements OnInit {
  qrData = null; 
  createdCode = null; 
  scannedCode = null; 
  private code = "ABCDEF"; 

  constructor(public popoverController: PopoverController, public router: Router, private countdownService: CountdownService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.countdownService.startTimer(); 
  }

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
      document.getElementById("bug").setAttribute("src", "assets/icon/bugGreen.svg"); 
    }
    else {
      document.getElementById("bug").setAttribute("src", "assets/icon/bugr.svg"); 
    }
  }

  navigate() {
      this.router.navigate(['/qrcode-2'])
  }

  async openTip(event, ev: any) {
    let room = event.target.id; 
    this.countdownService.loseTime(); 

    const popover = await this.popoverController.create({
      component: TipsComponent, 
      event: ev, 
      animated: true, 
      translucent: true, 
      componentProps: {page: "qr-code-one", room: room}
    }); 

    return await popover.present();
  }

}
