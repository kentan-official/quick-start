import { Kentan } from '@kentan-official/core';

import { ForProduct } from '../test/sketches/product.sketch';

describe('Product', () => {
  describe('When a price is given', () => {
    it('should yield the actual price', () => {
      const product = Kentan.sketch(ForProduct).model();

      expect(product.priceInDollars).toBeGreaterThan(0);
    });
  });
});
