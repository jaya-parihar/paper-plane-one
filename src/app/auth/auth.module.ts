import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';



import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AuthComponent, 
    LoginComponent, 
    RegisterComponent,
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
