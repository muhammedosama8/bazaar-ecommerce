import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getCart().subscribe((res: any[]) => { this.cart =res 
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
