import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Product } from '../common/product';
import { Availables } from '../common/sizes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8080/api/products' 

  constructor(private httpClient: HttpClient) { }

  getSpecificProductList(categoryId: string): Observable<Product[]>{
    const searchUrl = `${this.url}/search/findByBrand?id=${categoryId}`;
    return this.getProducts(searchUrl);
  }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.url).pipe(
      map(elements => elements._embedded.products)
    );
  }

  getSearchResult(searchKeyword: string): Observable<Product[]>{
    const searchUrl = `${this.url}/search/findByModelContaining?name=${searchKeyword}`;
    return this.getProducts(searchUrl);
  }

  getProducts(searchUrl: string): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(elements => elements._embedded.products)
    )
  }

  getSizes(theProdId: number): Observable<Availables[]>{
    const sizeUrl = `${this.url}/${theProdId}/sizes`;
    console.log(sizeUrl);
    return this.httpClient.get<GetResponseSize>(sizeUrl).pipe(
      map(elements => elements._embedded.availables)
    )
  }

  getProduct(theProdId: number): Observable<Product> {
    
    const itemUrl = `${this.url}/${theProdId}`;
    return this.httpClient.get<Product>(itemUrl);

  }
}

interface GetResponse{
  _embedded: {
    products: Product[];
  }
}
interface GetResponseSize{
  _embedded: {
    availables: Availables[];
  }
}
