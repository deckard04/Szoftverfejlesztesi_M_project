import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  currentCategoryId: string = "";
  searchMode: boolean = false;
  currentSearchKeyword: string = "";
  
  constructor(private productService: ProductService, private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProducts();
    });
  }

  handleProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode){
      this.searchProduct();
    }else{
      this.listProduct();
    }
  }

  listProduct(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId){
      this.currentCategoryId = this.route.snapshot.paramMap.get('id')!;
      this.productService.getSpecificProductList(this.currentCategoryId).subscribe(
        elements =>{
          this.products = elements;
        }
      );
    }else {
      this.productService.getProductList().subscribe(
        elements =>{
          this.products = elements;
        }
      );
    }
  
  }

  searchProduct() {
    this.currentSearchKeyword = this.route.snapshot.paramMap.get('keyword')!;
    this.productService.getSearchResult(this.currentSearchKeyword).subscribe(
      elements =>{
        this.products = elements
      }
    )
    
  }

}
