import {ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModuleModule } from '../shared-module';
import { RouterModule } from '@angular/router';

const homeRouting: ModuleWithProviders<any> = RouterModule.forChild([
  {
    path: '', component: HomeComponent
  }
])

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    homeRouting,
   
  ]
})
export class HomeModule { }
