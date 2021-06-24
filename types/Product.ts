import { ProductSlugs } from './ProductSlugs'

export interface Product {
  slug: ProductSlugs;
  name: string;
  description: string;
  price: number;
  img: string;
  ingredients: string;
  nutritionImg: string;
  shopifyId: string;

  pairings: string[];
}