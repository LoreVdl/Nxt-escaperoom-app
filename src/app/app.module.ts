import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxQRCodeModule } from "ngx-qrcode2";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx"; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'; 
import { SharedModule } from './shared/shared.module';
import { CountdownService } from './services/countdown.service';
import { StartPageComponent } from './start-page/start-page.component';
import { CodeScreenOneComponent } from './code-screen-one/code-screen-one.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WordsPageComponent } from './words-page/words-page.component';
import { QRCodeOneComponent } from './qr-code-one/qr-code-one.component';
import { Camera } from "@ionic-native/camera/ngx"; 
import { VicoryScreenTwoComponent } from './vicory-screen-two/vicory-screen-two.component';
import * as firebase from 'firebase';
import { GameOverScreenComponent } from './game-over-screen/game-over-screen.component';
import { EndPartOneScreenComponent } from './end-part-one-screen/end-part-one-screen.component';
import { VictoryOneScreenComponent } from './victory-one-screen/victory-one-screen.component';
import { QrCodeTwoComponent } from './qr-code-two/qr-code-two.component';
import { GameComponent } from './game/game.component';
import { QrCodeThreeComponent } from './qr-code-three/qr-code-three.component';
import { QrCodeFourComponent } from './qr-code-four/qr-code-four.component';
import { BroadcastingCodeScreenComponent } from './broadcasting-code-screen/broadcasting-code-screen.component';
import { TipsComponent } from './tips/tips.component';
import { WordsPageTwoComponent } from './words-page-two/words-page-two.component';
import { QrCodeFiveComponent } from './qr-code-five/qr-code-five.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';

firebase.initializeApp(environment.firebase); 

@NgModule({
  declarations: [
    AppComponent, 
    StartPageComponent, 
    CodeScreenOneComponent, 
    WordsPageComponent, 
    QRCodeOneComponent, 
    VicoryScreenTwoComponent, 
    GameOverScreenComponent, 
    EndPartOneScreenComponent, 
    VictoryOneScreenComponent, 
    QrCodeTwoComponent, 
    GameComponent, 
    QrCodeThreeComponent, 
    QrCodeFourComponent, 
    BroadcastingCodeScreenComponent, 
    TipsComponent, 
    WordsPageTwoComponent, 
    QrCodeFiveComponent, 
    QrScannerComponent
  ],
  entryComponents: [
    TipsComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,  
    ReactiveFormsModule, 
    FormsModule, 
    NgxQRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountdownService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: FirestoreSettingsToken, useValue: {} }, 
    BarcodeScanner, 
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
