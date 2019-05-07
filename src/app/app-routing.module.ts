import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { CodeScreenOneComponent } from './code-screen-one/code-screen-one.component';
import { WordsPageComponent } from './words-page/words-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'words', component: WordsPageComponent },
  { path: 'code-1', component: CodeScreenOneComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
