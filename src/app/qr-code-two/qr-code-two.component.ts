import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TipsComponent } from '../tips/tips.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code-two',
  templateUrl: './qr-code-two.component.html',
  styleUrls: ['./qr-code-two.component.scss'],
})
export class QrCodeTwoComponent implements OnInit {

  qrData = null; 
  createdCode = null; 
  scannedCode = null; 
  private code = "972"; 

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

      if (this.code != this.scannedCode) {
        this.countdownService.loseTime(); 
      }
    })
  }

  checkCode() {
    if (this.code === this.scannedCode) {
      document.getElementById("bug2").setAttribute("src", "assets/icon/bugGr.svg"); 
    }
    else {
      document.getElementById("bug2").setAttribute("src", "assets/icon/bugr.svg"); 
    }
  }

  navigate() {
      let element = document.getElementById("qrscanner2"); 
      element.className = "ion-page-hidden";
      this.router.navigate(['/game'])
  }
}
