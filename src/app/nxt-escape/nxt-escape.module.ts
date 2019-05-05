import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', component: StartPageComponent },
];

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    IonicModule
  ]
})
export class NxtEscapeModule { }
