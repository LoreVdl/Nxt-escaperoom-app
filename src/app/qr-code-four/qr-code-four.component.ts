import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownService } from '../services/countdown.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-code-four',
  templateUrl: './qr-code-four.component.html',
  styleUrls: ['./qr-code-four.component.scss'],
})
export class QrCodeFourComponent implements OnInit {

  qrData = null; 
  createdCode = null; 
  scannedCode = null; 
  private code = "ABCDE"; 

  constructor(public router: Router, private countdownService: CountdownService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {}

  ngDoCheck() {
    if (this.scannedCode) {
      console.log("check");
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
      this.router.navigate(['qrcode-4'])
  }

}
