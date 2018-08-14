import { Kentan } from '@kentan-official/core';

import { ForShoppingBasket } from '../test/sketches/shopping-basket.sketch';

describe('Shopping Basket', () => {
  describe('When one product is removed', () => {
    it('should update the total price', () => {
      const shoppingBasket = Kentan.sketch(ForShoppingBasket).model();
      const firstProduct = shoppingBasket.products[0];
      const expectedPrice = shoppingBasket.total - firstProduct.priceInDollars;
      
      shoppingBasket.remove(firstProduct);

      expect(shoppingBasket.total).toBe(expectedPrice);
    });
  });
});
