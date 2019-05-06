import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'; 
import { SharedModule } from './shared/shared.module';
import { NxtEscapeModule } from './nxt-escape/nxt-escape.module';
import { CountdownService } from './services/countdown.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule, 
    NxtEscapeModule, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountdownService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
