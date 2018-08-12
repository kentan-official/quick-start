import { Kentan, Sketch } from '@kentan-official/core';

import { ShoppingBasket } from '../../src/shopping-basket';
import { ForProduct } from './product.sketch';

export class ForShoppingBasket extends Sketch<ShoppingBasket> {
  constructor() {
    super(ShoppingBasket, {
      products: [
        Kentan.sketch(ForProduct).model(),
        Kentan.sketch(ForProduct).model({ id: 2 })
      ]
    });
  }
}
