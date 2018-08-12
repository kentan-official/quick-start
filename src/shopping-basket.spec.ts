import { Kentan } from '@kentan-official/core';

import { ForProduct } from '../test/sketches/product.sketch';
import { ShoppingBasket } from './shopping-basket';

describe('Shopping Basket', () => {
  describe('When one product is removed', () => {
    it('should update the total price', () => {
      const xBox = Kentan.sketch(ForProduct).model();
      const playStation = Kentan.sketch(ForProduct).model({ id: 2 });
      const shoppingBasket = new ShoppingBasket();

      shoppingBasket.products = [xBox, playStation];
      shoppingBasket.remove(xBox);

      expect(shoppingBasket.total).toBe(300);
    });
  });
});
