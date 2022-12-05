import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() products: any ;
  @Input() title!: string;
  quantity = 1;
  constructor(private data: DataService) {}

  responsiveOptions = [
    {
      breakpoint: '1440px',
      numVisible: 5,
      numScroll: 2
  },
  {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 2
  },
  {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
  },{
      breakpoint: '500px',
      numVisible: 2,
      numScroll: 1
  },{
      breakpoint: '376px',
      numVisible: 2,
      numScroll: 1
  },
  ];

  ngOnInit(): void {
  }

  increase(){
    this.quantity++;
  }
  decrease(){
    this.quantity--;
  }
  addToCart(product: any,quantity: any){
    this.data.addToCart({...product,"quantity": this.quantity})
  }
}
