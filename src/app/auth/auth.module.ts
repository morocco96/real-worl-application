import { ModuleWithProviders,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module';
import { ReactiveFormsModule } from '@angular/forms';



const authRouting: ModuleWithProviders<any> = RouterModule.forChild([

  {path: 'login', component: AuthComponent},
  {path: 'register', component: AuthComponent}
])

@NgModule({
  declarations: [
    AuthComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    authRouting,
    ReactiveFormsModule,
   
    
  ],
  providers:[]
})
export class AuthModule { }
