import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { CodeScreenOneComponent } from './code-screen-one/code-screen-one.component';
import { WordsPageComponent } from './words-page/words-page.component';
import { QRCodeOneComponent } from './qr-code-one/qr-code-one.component';
import { VicoryScreenTwoComponent } from './vicory-screen-two/vicory-screen-two.component';
import { GameOverScreenComponent } from './game-over-screen/game-over-screen.component';
import { EndPartOneScreenComponent } from './end-part-one-screen/end-part-one-screen.component';
import { VictoryOneScreenComponent } from './victory-one-screen/victory-one-screen.component';
import { QrCodeTwoComponent } from './qr-code-two/qr-code-two.component';
import { GameComponent } from './game/game.component';
import { QrCodeThreeComponent } from './qr-code-three/qr-code-three.component';
import { QrCodeFourComponent } from './qr-code-four/qr-code-four.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'words', component: WordsPageComponent },
  { path: 'code-1', component: CodeScreenOneComponent },
  { path: 'qrcode-1', component: QRCodeOneComponent },
  { path: 'victory-2', component: VicoryScreenTwoComponent },
  { path: 'game-over', component: GameOverScreenComponent },
  { path: 'end-part-1', component: EndPartOneScreenComponent },
  { path: 'victory-1', component: VictoryOneScreenComponent },
  { path: 'qrcode-2', component: QrCodeTwoComponent },
  { path: 'game', component: GameComponent },
  { path: 'qrcode-3', component: QrCodeThreeComponent },
  { path: 'qrcode-4', component: QrCodeFourComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
