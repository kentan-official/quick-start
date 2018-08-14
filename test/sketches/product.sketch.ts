import { Sketch } from '@kentan-official/core';

import { Product } from '../../src/product';

import { Chance } from 'chance';

const chance = new Chance();

export class ForProduct extends Sketch<Product> {
  constructor() {
    super({
      id: 1,
      title: chance.name(),
      description: chance.sentence({ words: 9 }),
      priceInDollars: chance.natural({ min: 400, max: 1500 })
    });
  }
}
