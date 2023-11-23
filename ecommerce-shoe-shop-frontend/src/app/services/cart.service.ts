import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { StorageService } from 'ngx-webstorage/lib/core/interfaces/storageService';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;

    if (cartItem.quantity === 0){
      this.removeItemFromCart(cartItem);
    }
    else{
      this.computeCartTotals();
    }
  }
  
  removeItemFromCart(cartItem: CartItem) {
    let index = this.cartItems.findIndex(tempCartItem => tempCartItem.id == cartItem.id && tempCartItem.sizeId === cartItem.sizeId);
    this.cartItems.splice(index, 1);
    this.computeCartTotals();
  }

  
  cartItems: CartItem[] = [];
  
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  storage: Storage = sessionStorage;

  constructor() {
    let data = JSON.parse(this.storage.getItem('cartItems')!);

    if (data != null){
      this.cartItems = data;
      this.computeCartTotals();
    }
   }

  addToCart(theCartItem: CartItem) {
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem | undefined = undefined;

    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => (tempCartItem.id === theCartItem.id && tempCartItem.sizeId == theCartItem.sizeId));
      alreadyExistsInCart = (existingCartItem != undefined);
    }
    if (alreadyExistsInCart) {
      existingCartItem!.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }
    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);

    this.persistCartItem();
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log("content of the cart");
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.price;
      console.log(`name: ${tempCartItem.brand} ${tempCartItem.model} ${tempCartItem.price} ${subTotalPrice}`);
    }

    console.log(`${totalPriceValue} ${totalQuantityValue}`)
  }

  persistCartItem() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
