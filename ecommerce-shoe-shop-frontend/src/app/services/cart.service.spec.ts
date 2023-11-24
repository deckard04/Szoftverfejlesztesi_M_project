import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs/internal/Subject';

describe('CartService', () => {
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
    });
    cartService = TestBed.inject(CartService);
  });

  //default test
  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });


  describe('addToCart', () => {
    it('should add a new item to the cart', () => {
      const cartItem: CartItem = {
        id: 1,
        brand: 'Nike',
        model: 'Air Max',
        imageUrl: "",
        price: 100,
        quantity: 1,
        sizeId: 10,
        size: 44
      };
  
      cartService.addToCart(cartItem);

      expect(cartService.cartItems.length).toBe(1);

      cartService.removeItemFromCart(cartItem);
    });

    it('should increment quantity if item already exists in the cart', () => {
      const cartItem: CartItem = {
        id: 1,
        brand: 'Nike',
        model: 'Air Max',
        imageUrl: "",
        price: 100,
        quantity: 1,
        sizeId: 10,
        size: 45
      };


      cartService.addToCart(cartItem);
      cartService.addToCart(cartItem);
      cartService.addToCart(cartItem);
      
      expect(cartService.cartItems[0].quantity).toBe(3);

      cartService.decrementQuantity(cartItem);
      cartService.decrementQuantity(cartItem);
      cartService.decrementQuantity(cartItem);
    });
  });

  describe('decrementQuantity', () => {
  
    it('should decrement quantity and remove item if quantity becomes 0', () => {
      const cartItem: CartItem = {
        id: 1,
        brand: 'Nike',
        model: 'Air Max',
        imageUrl: "",
        price: 100,
        quantity: 1,
        sizeId: 10,
        size: 44
      };

      cartService.addToCart(cartItem);
      cartService.decrementQuantity(cartItem);

      expect(cartService.cartItems.length).toBe(0);

      cartService.removeItemFromCart(cartItem);
    });

    it('should decrement quantity and compute totals if quantity > 0', () => {
      const cartItem: CartItem = {
        id: 1,
        brand: 'Nike',
        model: 'Air Max',
        imageUrl: "",
        price: 100,
        quantity: 2,
        sizeId: 10,
        size: 44
      };

      cartService.addToCart(cartItem);
      cartService.decrementQuantity(cartItem);

      expect(cartService.cartItems.length).toBe(1);
      expect(cartService.cartItems[0].quantity).toBe(1);

      cartService.removeItemFromCart(cartItem);

    });
  });

  describe('removeItemFromCart', () => {
    it('should remove item from the cart', () => {
      const cartItem: CartItem = {
        id: 1,
        brand: 'Nike',
        model: 'Air Max',
        imageUrl: "",
        price: 100,
        quantity: 1,
        sizeId: 10,
        size: 44
      };

      cartService.addToCart(cartItem);
      cartService.removeItemFromCart(cartItem);

      expect(cartService.cartItems.length).toBe(0);
    });
  });
});
