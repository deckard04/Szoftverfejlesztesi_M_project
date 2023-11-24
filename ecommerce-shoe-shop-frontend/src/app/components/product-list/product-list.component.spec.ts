import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'category/:id', component: ProductListComponent},
{path: 'search/:keyword', component: ProductListComponent},
{path: 'category', component: ProductListComponent},
{path: 'products', component: ProductListComponent},
{path: '', redirectTo: '/products', pathMatch: 'full'},
{path: '**', redirectTo: '/products', pathMatch: 'full'},
]

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [
        RouterModule.forRoot(routes),
        HttpClientModule,
      ],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
