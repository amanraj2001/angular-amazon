import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './amazon/product/product.component';

const routes: Routes = [
  {path:'product',
  loadChildren: () => import('./amazon/amazon.module').then(m => m.AmazonModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
