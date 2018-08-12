import { Product } from './product';
import { ShoppingBasket } from './shopping-basket';

describe('Shopping Basket', () => {
  describe('When one product is removed', () => {
    it('should update the total price', () => {
      const xBox: Product = {
        id: 1,
        title: 'XBox One',
        description: 'Gaming Console',
        priceInDollars: 300
      };

      const playStation: Product = {
        id: 2,
        title: 'PlayStation',
        description: 'Gaming Console',
        priceInDollars: 300
      };

      const shoppingBasket = new ShoppingBasket();
      shoppingBasket.products = [xBox, playStation];

      shoppingBasket.remove(xBox);

      expect(shoppingBasket.total).toBe(300);
    });
  });
});
