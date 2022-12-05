import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  cart:any = [];
  totalPrice = 0;
  deleveryPrice = 20;
  totalAndDeleveyPrice = 0


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCart().subscribe((res: any[]) => { this.cart =res 
    })
    this.data.getCartTotalPrice().subscribe((res: any)=>{
      this.totalPrice = res;
      this.totalAndDeleveyPrice = this.totalPrice+this.deleveryPrice
    })
    }

    increment(id: number){
      this.data.incrementItem(id)
    }
    decrement(id: number){
      this.data.decrementItem(id)
    }
    delete(id: number){
      this.data.deleteItem(id);
    }

}
