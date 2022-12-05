import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayPosition: boolean = false;
  displayLoginModal: boolean = false;
  position!: string;
  numOfProducts: number = 0

  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.data.getNumbersOfItems().subscribe(res => {
      this.numOfProducts = res
    })
  }
  showLoginDialog(){
    this.displayLoginModal = true
  }
  showCartDialog() {
    this.displayPosition = true;
  }
  openDropdown(){
    document.getElementById('dropdown-menu')?.classList.toggle('show')
  }
}
