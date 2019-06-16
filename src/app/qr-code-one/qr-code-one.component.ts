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
  private code = "872"; 

  constructor(public popoverController: PopoverController, public router: Router, private countdownService: CountdownService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.countdownService.startTimer2(); 
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
      if (this.code != this.scannedCode) {
        this.countdownService.loseTime(); 
      }
    }); 
  }

  checkCode() {
    if (this.code === this.scannedCode) {
      document.getElementById("bug").setAttribute("src", "assets/icon/bugGr.svg"); 
    }
    else {
      document.getElementById("bug").setAttribute("src", "assets/icon/bugr.svg"); 
    }
  }

  navigate() {
    let element = document.getElementById("qrscanner"); 
    element.className = "ion-page-hidden";
    this.router.navigate(['/qrcode-2'])
  }
}
