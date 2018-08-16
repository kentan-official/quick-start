import { Sketch } from '@kentan-official/core';

import { Order } from '../../src/order';


export class ForOrder extends Sketch<Order> {
  private static readonly model = new Order([]);
  
  constructor() {
    super(ForOrder.model);
  }
}
