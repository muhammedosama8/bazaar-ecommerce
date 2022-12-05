import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numOfBanners = [
    {type: 'Men' , img:`../../assets/banners/banner-1.jpg`},
    {type: 'Women',img: `../../assets/banners/banner-2.jpg`}
  ]

  show:string = 'd-none';

  changeStyle($event: { type: string; }){
    this.show = $event.type == 'mouseover' ? 'd-block' : 'd-none';
  }

  constructor() { }
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
    },
  ];
  ngOnInit(): void {
  }

}
