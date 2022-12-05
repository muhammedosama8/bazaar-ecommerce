import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart:any = [];
  totalPrice = 0;
  deleveryPrice = 20;
  discount = 0;
  price_after_discount = 0;
  totalAndDeleveyPrice = 0

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCart().subscribe((res: any[]) => { this.cart =res 
    })
    this.data.getCartTotalPrice().subscribe((res: any)=>{
      this.totalPrice = res;
      this.totalAndDeleveyPrice = this.totalPrice + this.deleveryPrice;
      this.price_after_discount = this.totalPrice;
      +this.deleveryPrice;
    })

    }

    onSubmit(form: NgForm){
      let text= form.value.text;
      this.discount =  this.data.getDiscount(text)
      this.price_after_discount= this.totalPrice - (this.totalPrice * 1/this.discount)
      this.totalAndDeleveyPrice = this.price_after_discount + this.deleveryPrice
    }
    
}
