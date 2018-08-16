import { Kentan } from '@kentan-official/core';

import { ForProduct } from '../test/sketches/product.sketch';
import { Product } from './product';

describe('Product', () => {
  describe('When a price is given', () => {
    it('should yield the actual price', () => {
      const givenPrice = 300;
      const product = Kentan.sketch(ForProduct).model();

      expect(product.priceInDollars).toBe(givenPrice);
    });
  });

  describe('Cases', () => {
    const products: Product[] = Kentan.sketch(ForProduct)
      .take(2)
      .models({
        id: i => i + 1
      });

    describe.each(products)(
      'When product a product is created',
      (m: Product) => {
        it(`${m.id} should have a price of ${m.priceInDollars}$ `, () => {
          expect(m.priceInDollars).toBe(m.priceInDollars);
        });
      }
    );
  });
});
