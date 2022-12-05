import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService, Product } from '../shared/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  product:any;
  id?: number;
  quantity = 1
  products?: Product[];
  title ='Related Products'
  selectColor : any
  numOfProducts = 0
  
  constructor(private data: DataService,
      private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.products = this.data.getProducts()
    
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.data.getProduct(this.id)[0];
      this.selectColor = this.product.colors[0];
      this.quantity = 1;
      window.scrollTo(0,0)
    }
    )

  }
  increase(){
    this.quantity++
  }
  decrease(){
    if(this.quantity > 1){
      this.quantity--
    }
  }
  handleAddToCart(){
    this.data.addToCart({...this.product,"quantity": this.quantity, "selectColor": this.selectColor})
  }
}
