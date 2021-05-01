import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from "@angular/router";
import { Http } from '@angular/http';
import { ListErrorsComponent } from './list-errors/list-errors.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ListErrorsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    
   
  ],
  exports:[ FooterComponent,
    HeaderComponent,
    ListErrorsComponent
    
    ]
    
})
export class SharedModuleModule { }
