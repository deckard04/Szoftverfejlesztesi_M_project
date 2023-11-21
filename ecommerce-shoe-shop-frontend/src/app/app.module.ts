import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
const routes: Routes = [
{path: 'category/:id', component: ProductListComponent},
{path: 'product/:id', component: ProductDetailsComponent},
{path: 'search/:keyword', component: ProductListComponent},
{path: 'category', component: ProductListComponent},
{path: 'products', component: ProductListComponent},
{path: '', redirectTo: '/products', pathMatch: 'full'},
{path: '**', redirectTo: '/products', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchComponent,
    CartStatusComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgxWebstorageModule.forRoot(),
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ProductDetailsComponent,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
