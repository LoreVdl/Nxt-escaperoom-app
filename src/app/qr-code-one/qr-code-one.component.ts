import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CountdownService } from '../services/countdown.service';

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

  constructor(private countdownService: CountdownService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.countdownService.startTimer2(); 
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

}
