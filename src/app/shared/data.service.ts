import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id:number,
  category: string,
  name: string,
  img: string,
  price: number,
  reviews: number,
  brand: string,
  stock:string,
  colors: Array<string>,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cart: any = [];
  numbersOfItems = 0;
  cartTotalPrice = 0;
  discount = 0;
  categories = ["clothes", "laptop", "desktop"]
  filterProduct: Product[] = []
  private numbersOfItemSubject = new BehaviorSubject<any>(Number);
  private cartTotalPriceItems = new BehaviorSubject<any>(Number);

  private prodList = new BehaviorSubject<any>([]);

  products: Product[] = [
    {
        id: 1,
        category: 'clothes',
        name: 'Silver High Neck Sweater',
        img: '../../../assets/orders/1.webp',
        price: 210.00,
        reviews: 12,
        brand: 'zara',
        stock: 'available',
        colors: ['red', 'blue'],
    },
    {
        id: 2,
        category: 'clothes',
        name: 'Yellow Casual Sweater',
        img: '../../../assets/orders/2.webp',
        price: 110.00,
        reviews: 22,
        brand: 'H&M',
        stock: 'available',
        colors: ['Yellow', 'blue'],
    },
    {
        id: 3,
        category: 'clothes',
        name: 'Denim Blue Jeans',
        img: '../../../assets/orders/3.webp',
        price: 140.00,
        reviews: 6,
        brand: 'H&M',
        stock: 'available',
        colors: ['Black', 'blue'],
    },
    {
        id: 4,
        category: 'clothes',
        name: 'Black White Sweater',
        img: '../../../assets/orders/4.webp',
        price: 180.00,
        reviews: 16,
        brand: 'LC',
        stock: 'available',
        colors: ['Black', 'White'],
    },
    {
        id: 5,
        category: 'clothes',
        name: 'Gray Overcoat Women',
        img: '../../../assets/orders/5.webp',
        price: 110.00,
        reviews: 10,
        brand: 'H&M',
        stock: 'not-available',
        colors: ['gray', 'blue'],
    },
    {
        id: 6,
        category: 'clothes',
        name: `Women's Fashion`,
        img: '../../../assets/orders/6.webp',
        price: 210.00,
        reviews: 12,
        brand: 'zara',
        stock: 'available',
        colors: ['green', 'blue'],
    },
    {
        id: 7,
        category: 'clothes',
        name: 'Nike Red',
        img: '../../../assets/orders/7.webp',
        price: 110.00,
        reviews: 22,
        brand: 'H&M',
        stock: 'available',
        colors: ['red', 'blue'],
    },
    {
        id: 8,
        category: 'clothes',
        name: 'North Star Blue',
        img: '../../../assets/orders/8.webp',
        price: 140.00,
        reviews: 6,
        brand: 'H&M',
        stock: 'not-available',
        colors: ['black', 'blue'],
    },
]
  constructor(){
  }

  getCategories(){
    return this.categories
  }
  getProducts(){
    return this.products;
  }

  filterProducts(filterType: string){
    if(filterType === 'all'){
      this.filterProduct = this.getProducts()
    } else{
      this.filterProduct = this.products.filter(product => product.category.includes(filterType))
    }
    return this.filterProduct
  }
  getProduct(id: number){
    return this.products.filter(pId => pId.id == id)
  }

  getDiscount(code: string){
    if(code === 'dis10'){
      this.discount = 10
    } else if(code === 'dis20'){
      this.discount = 20
    }

    return this.discount
  }

  addToCart(product: any ){
    if(this.cart.length == 0){
      this.cart.push({...product, totalPrice: product.quantity*product.price})
      this.numbersOfItems = 1;
    } else{
      let check = this.cart.filter((res: any) =>res.name == product.name)
      if(check.length >0){
        check[0].quantity += product.quantity
        check[0].totalPrice = check[0].quantity * check[0].price;
      } else if(check.length == 0){
        this.cart.push({...product, totalPrice: product.quantity * product.price})
        this.numbersOfItems++
      }
    } 
    this.calcTotalPrice()
    this.numbersOfItemSubject.next(this.numbersOfItems)
    this.prodList.next(this.cart);
  }

  getNumbersOfItems() {
    return this.numbersOfItemSubject.asObservable()
  }
  getCart(){
    this.calcTotalPrice()
    return this.prodList.asObservable();
  }
  incrementItem(id: any){
    this.cart.map((res: any) => {
      if(res.id === id){
        res.quantity ++
        res.totalPrice = res.quantity * res.price;
      }
    })
    this.calcTotalPrice()
  }
  decrementItem(id: any){
    this.cart.map((res: any) => {
      if(res.id == id){
        if(res.quantity> 1){
          res.quantity --
          res.totalPrice = res.quantity * res.price;
        }
      }
      this.calcTotalPrice()
    })
  }
  deleteItem(id: any){
    this.cart = this.cart.filter((res: any) => res.id != id)
    this.numbersOfItems--
    this.numbersOfItemSubject.next(this.numbersOfItems)
    
    this.prodList.next(this.cart);
    console.log(this.cart);
    this.calcTotalPrice()
  }
  calcTotalPrice(){
    this.cartTotalPrice = 0
    if(this.cart.length == 0){
      this.cartTotalPrice = 0
    }
    this.cart.map((res: any)=>{
      this.cartTotalPrice += (res.quantity*res.price)
    })
    this.cartTotalPriceItems.next(this.cartTotalPrice);
  }
  getCartTotalPrice(){
    return this.cartTotalPriceItems.asObservable()
  }
}