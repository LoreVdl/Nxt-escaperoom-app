import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'test', component: TestPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
