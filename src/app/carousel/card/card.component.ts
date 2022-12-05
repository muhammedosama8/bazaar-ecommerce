import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: any ;
  quantity = 1;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
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
}
