import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { CodeScreenOneComponent } from './code-screen-one/code-screen-one.component';
import { WordsPageComponent } from './words-page/words-page.component';
import { QRCodeOneComponent } from './qr-code-one/qr-code-one.component';
import { VicoryScreenTwoComponent } from './vicory-screen-two/vicory-screen-two.component';
import { GameOverScreenComponent } from './game-over-screen/game-over-screen.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'words', component: WordsPageComponent },
  { path: 'code-1', component: CodeScreenOneComponent },
  { path: 'qrcode-1', component: QRCodeOneComponent },
  { path: 'victory-2', component: VicoryScreenTwoComponent },
  { path: 'game-over', component: GameOverScreenComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
