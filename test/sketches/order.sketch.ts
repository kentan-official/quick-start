import { Sketch } from '@kentan-official/core';

import { Order } from '../../src/order';

const model = new Order([]);

export class ForOrder extends Sketch<Order> {
  constructor() {
    super(model);
  }
}
