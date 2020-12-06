import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';



@NgModule({
  declarations: [VendorComponent, VendorHomeComponent],
  imports: [
    CommonModule,
    VendorRoutingModule
  ],
  exports: [VendorComponent]
})
export class VendorModule { 


  

}
