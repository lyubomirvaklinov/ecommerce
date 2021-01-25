import { Product } from './Product';

export interface Basket {
  total: number;
  numOfItems: number;
  items: (Product & { quantity: number })[];
}
