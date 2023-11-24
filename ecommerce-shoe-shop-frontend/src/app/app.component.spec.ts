import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
{path: 'checkout', component: CheckoutComponent},
{path: 'cart', component: CartDetailsComponent},
{path: 'category/:id', component: ProductListComponent},
{path: 'product/:id', component: ProductDetailsComponent},
{path: 'search/:keyword', component: ProductListComponent},
{path: 'category', component: ProductListComponent},
{path: 'products', component: ProductListComponent},
{path: '', redirectTo: '/products', pathMatch: 'full'},
{path: '**', redirectTo: '/products', pathMatch: 'full'},
]

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      ProductListComponent,
      SearchComponent,
      CartStatusComponent,
      CartDetailsComponent,
      CheckoutComponent,
    ],
    imports: [
      RouterModule.forRoot(routes),
      NgxWebstorageModule.forRoot()
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ecommerce-shoe-shop-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ecommerce-shoe-shop-frontend');
  });
});
