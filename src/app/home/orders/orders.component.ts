import { Component, OnInit } from '@angular/core';
import { DataService, Product } from '../../shared/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  products?: Product[];
  firstTitle= 'Deals Of The Day' ;
  secondTitle= 'New Arrivals' ;
  constructor(private data: DataService) { }
  
  ngOnInit(): void {
    this.products = this.data.getProducts()
  }

}
