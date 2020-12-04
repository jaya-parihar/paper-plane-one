import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorComponent } from './vendor.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
const routes: Routes = [
  { path: '', component: VendorComponent },
  { path: 'auth/login', component: LoginComponent }, 
  { path: 'auth/register', component: RegisterComponent } 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
