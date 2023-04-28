import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmazonRoutingModule } from './amazon-routing.module';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    AmazonRoutingModule,
    ReactiveFormsModule
  ]
})
export class AmazonModule { }
