import { CartItem } from './cart-item';
import { Product } from './product';
import { Availables } from './sizes';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem(new Product(5,"nike","af1","blue",new Date('2002-05-01 14:05:00'),50000,"",""),new Availables(5,5,1))).toBeTruthy();
  });
});

