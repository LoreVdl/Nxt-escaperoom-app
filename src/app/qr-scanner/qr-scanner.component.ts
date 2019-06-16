import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit {
  qrData = null; 
  createdCode = null; 
  scannedCode = null; 
  private code = "990"; 

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
      document.getElementById("bug6").setAttribute("src", "assets/icon/bugGr.svg"); 
    }
    else {
      document.getElementById("bug6").setAttribute("src", "assets/icon/bugr.svg"); 
    }
  }

  navigate() {
    let element = document.getElementById("qrscannerFirst"); 
    element.className = "ion-page-hidden";
    this.router.navigate(['/victory-1']);
  }
}

