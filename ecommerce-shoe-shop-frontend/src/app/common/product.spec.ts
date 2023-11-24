import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(5,"nike","af1","blue",new Date('2002-05-01 14:05:00'),50000,"","")).toBeTruthy();
  });
});
