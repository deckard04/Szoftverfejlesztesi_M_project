import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorage, SessionStorage, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice!: number;
 
  // store the totalQuantity in session with name totalQuantity
  totalQuantity!: number;

  constructor(private cartservice: CartService){

  }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartservice.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    this.cartservice.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}