import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartgGuard } from '../cartg.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'cart ',component:CartComponent,canActivate:[CartgGuard]},
  {path:'login' ,component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmazonRoutingModule { }
