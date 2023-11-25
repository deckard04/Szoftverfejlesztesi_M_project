import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Shopvalidator } from 'src/app/validators/shopvalidator';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private router: Router){}


  ngOnInit(): void {
    this.calculateCartTotal();

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        first_name: new FormControl('', [Validators.required, Validators.minLength(2), Shopvalidator.notOnlyWhiteSpace]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(2), Shopvalidator.notOnlyWhiteSpace]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^(?:\\+36|06)(?:(20|30|31|50|70)\\d{7})$')]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        region: [''],
        zipcode: ['']
      })
    });
  }

  get first_name(){
    return this.checkoutFormGroup.get('customer.first_name');
  }

  get last_name(){
    return this.checkoutFormGroup.get('customer.last_name');
  }

  get email(){
    return this.checkoutFormGroup.get('customer.email');
  }

  get phone(){
    return this.checkoutFormGroup.get('customer.phone');
  }

  calculateCartTotal() {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }

  onSubmit(){

    if (this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
    }else {

    console.log(this.checkoutFormGroup.get('customer')?.value);
    console.log(this.checkoutFormGroup.get('shippingAddress')?.value);

    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;

    const cartItems = this.cartService.cartItems
    let orderItems: OrderItem[] = cartItems.map(tempCartItem => new OrderItem(tempCartItem));

    let purchase = new Purchase();

    purchase.customer = this.checkoutFormGroup.controls['customer'].value;
    purchase.address = this.checkoutFormGroup.controls['shippingAddress'].value;
    purchase.order = order;
    purchase.orderItems = orderItems;

    this.checkoutService.placeOrder(purchase).subscribe(
      {
        next: response => {
          alert(`A rendelésed megkaptuk!\nRendelési azonosítód: ${response.orderTrackingNumber}`);
          this.resetCart();
        },
        error: err => {
          alert(`Hiba van a mátrixban: ${err.message}`);
        }
      }
    )
    }
  }

  resetCart(){
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
    this.checkoutFormGroup.reset();
    this.cartService.storage.clear();
    this.router.navigateByUrl("/products");
  
  }

}
