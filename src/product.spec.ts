import { Product } from './product';

describe('Product', () => {
  describe('When a price is given', () => {
    it('should yield the actual price', () => {
      const givenPrice = 300;
      
      const product: Product = {
        id: 1,
        title: 'XBox One',
        description: 'Gaming Console',
        priceInDollars: givenPrice
      };

      expect(product.priceInDollars).toBe(300);
    });
  });
});
