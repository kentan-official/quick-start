import { Product } from './product';

export class ShoppingBasket {
  products: Product[] = [];

  get total(): number {
    return this.products.reduce(
      (total: number, product: Product) => (total += product.priceInDollars),
      0
    );
  }

  remove(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}
