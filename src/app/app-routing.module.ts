import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './cart-page/address/address.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartComponent } from './cart-page/cart/cart.component';
import { PaymentComponent } from './cart-page/payment/payment.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart-page', component: CartPageComponent, children: [
    {path: '', component: CartComponent},
    {path: 'address', component: AddressComponent},
    {path: 'payment', component: PaymentComponent},
  ]},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ItemComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
