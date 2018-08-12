import { Kentan } from '@kentan-official/core';

import { ForShoppingBasket } from '../test/sketches/shopping-basket.sketch';

describe('Shopping Basket', () => {
  describe('When one product is removed', () => {
    it('should update the total price', () => {
      const shoppingBasket = Kentan.sketch(ForShoppingBasket).model();
      shoppingBasket.remove(shoppingBasket.products[0]);

      expect(shoppingBasket.total).toBe(300);
    });
  });
});
