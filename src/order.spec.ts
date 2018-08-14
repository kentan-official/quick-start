import { Kentan, Sketch } from '@kentan-official/core';
import { ForOrder } from '../test/sketches/order.sketch';
import { Order } from './order';

describe('Order', () => {
  describe('When an order is created', () => {
    let sketch: Sketch<Order>;

    beforeEach(() => (sketch = Kentan.sketch(ForOrder)));

    it('should have no products', () => {
      const order = sketch.model();
      expect(order.products).toHaveLength(0);
    });

    it('should be possible to make method calls', () => {
      const order = sketch.model();
      expect(() => order.firstProduct).not.toThrow();
    });
  });
});
