import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { CartPageModule } from './cart-page/cart-page.module';

import { CartModalComponent } from './modal/cart-modal/cart-modal.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './home/details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HoverClassDirective } from './home/header/hover-class.directive';
import { OrdersComponent } from './home/orders/orders.component';
import { LoginComponent } from './modal/login/login.component';
import { ItemComponent } from './item/item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './carousel/card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DetailsComponent,
    FooterComponent,
    HoverClassDirective,
    OrdersComponent,
    CartModalComponent,
    LoginComponent,
    ItemComponent,
    CarouselComponent,
    HomeComponent,
    CardComponent,
    PageNotFoundComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    FormsModule, 
    ReactiveFormsModule,
    SidebarModule,
    CartPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
