import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  
  {path: 'productList', component: ProductListComponent},
  // {path: 'productList/:id', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/:id', component: CartComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
