import { Product } from './product';

export class Order {
  get firstProduct() {
    return this.products[0];
  }

  constructor(public products: Product[]) {}
}
