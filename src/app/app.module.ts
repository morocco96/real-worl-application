import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModuleModule, ApiService, UserService } from './shared-module';
import { AuthModule } from './auth/auth.module';



const rootRouting: ModuleWithProviders<any> = RouterModule.forRoot([], { useHash: false });


@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    HomeModule,
    rootRouting,
    AuthModule
   
    
    
    
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
