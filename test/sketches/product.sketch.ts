import { Sketch } from '@kentan-official/core';

import { Product } from '../../src/product';

export class ForProduct extends Sketch<Product> {
  constructor() {
    super({
      id: 1,
      title: 'XBox One',
      description: 'Gaming Console',
      priceInDollars: 300
    });
  }
}
