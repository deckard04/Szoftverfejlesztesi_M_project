import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';
import { CartStatusComponent } from './cart-status.component';

describe('CartStatusComponent', () => {
  let component: CartStatusComponent;
  let fixture: ComponentFixture<CartStatusComponent>;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartStatusComponent],
      providers: [CartService]
    });
    fixture = TestBed.createComponent(CartStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    cartService = TestBed.inject(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate totalPrice after adding items', () => {

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
      cartService.addToCart(cartItem);
      cartService.addToCart(cartItem);
      component.updateCartStatus();

      expect(component.totalPrice).toBe(300);
      cartService.removeItemFromCart(cartItem);
  });

  it('should calculate totalQuantity after adding items', () => {

    const cartItem: CartItem = {
      id: 1,
      brand: 'Nike',
      model: 'Air Max',
      imageUrl: "",
      price: 100,
      quantity: 1,
      sizeId: 10,
      size: 39
      };

      cartService.addToCart(cartItem);
      cartService.addToCart(cartItem);
      component.updateCartStatus();

      expect(component.totalQuantity).toBe(2);

      cartService.removeItemFromCart(cartItem);
  });

  it('should price not go into negative', () => {

    const cartItem: CartItem = {
      id: 1,
      brand: 'Nike',
      model: 'Air Max',
      imageUrl: "",
      price: 100,
      quantity: 1,
      sizeId: 10,
      size: 40
      };

      cartService.addToCart(cartItem);
      cartService.removeItemFromCart(cartItem);
      cartService.removeItemFromCart(cartItem);
      component.updateCartStatus();

      expect(component.totalPrice).toBe(0);

      cartService.removeItemFromCart(cartItem);
  });
});