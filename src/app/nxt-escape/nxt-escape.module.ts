import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { IonicModule } from '@ionic/angular';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [
    StartPageComponent, 
    TestPageComponent
  ],
  imports: [
    CommonModule, 
    IonicModule, 
    RouterModule
  ], 
  exports: [
    StartPageComponent, 
    TestPageComponent
  ]
})
export class NxtEscapeModule { }
