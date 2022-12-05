import { Component, OnInit } from '@angular/core';
import { DataService, Product } from '../shared/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isList = true
  isOpen = false
  quantity = 1;
  products: Product[] =[]
 categories
  constructor(private data: DataService) {
    this.categories = this.data.getCategories();
    this.products = this.data.getProducts().filter(res => res.stock === 'available');
   }

  sort(sort: string){
    if(sort === 'relevance'){ 
      this.products = this.data.getProducts().filter(res => res.stock === 'available');
    }
    if(sort === 'lowToHigh'){ 
      this.products = this.products.sort((a,b) => a.price - b.price)
    }
    if(sort === 'highToLow'){ 
      this.products = this.products.sort((a,b) => b.price - a.price)
    }
  }

  openMenu(){
    this.isOpen = !this.isOpen
  }

  ngOnInit(): void {
  }

  filter(filterType: string){
    this.products = this.data.filterProducts(filterType)
  }

  increase(){
    this.quantity++;
  }
  decrease(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }
  addToCart(product: any,quantity: any){
    this.data.addToCart({...product,"quantity": this.quantity})
  }
  viewList(){
    this.isList= true
  }
  viewTable(){
    this.isList = false
  }
}
