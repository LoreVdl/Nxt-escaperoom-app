import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-code-one',
  templateUrl: './qr-code-one.component.html',
  styleUrls: ['./qr-code-one.component.scss'],
})
export class QRCodeOneComponent implements OnInit {
  qrData = null; 
  createdCode = null; 
  scannedCode = null; 

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

}
