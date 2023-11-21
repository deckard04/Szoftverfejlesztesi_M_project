import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { Availables } from 'src/app/common/sizes';
import { ProductService } from 'src/app/services/product.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/CartService';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})

export class ProductDetailsComponent implements OnInit{

  product!: Product;
  sizes: Availables[] = [];
  selectedValue!: Availables;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    })
  }

  handleProductDetails(){
    const theProdId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProdId).subscribe(
      data => {
        this.product = data
        console.log(data);
      }
    )
    console.log("lol");
    this.productService.getSizes(theProdId).subscribe(
      size => {
        this.sizes = size
        console.log(size);
      }
    )
  }

  addToCart(theProduct: Product){
    console.log(`adding to cart ${theProduct.brand} ${theProduct.model} ${theProduct.price} ${this.selectedValue.size}`);
    const theCartItem = new CartItem(theProduct, this.selectedValue);
    this.cartService.addToCart(theCartItem);
  }

}
