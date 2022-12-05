import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AddressComponent } from "./address/address.component";
import { CartPageComponent } from "./cart-page.component";
import { CartComponent } from "./cart/cart.component";
import { PaymentComponent } from './payment/payment.component';

@NgModule({
    declarations:[
        AddressComponent,
        CartComponent,
        CartPageComponent,
        PaymentComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports:[
        AddressComponent,
        CartComponent,
        CartPageComponent
    ]
})
export class CartPageModule{}