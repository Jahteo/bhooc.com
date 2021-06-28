import { ProductSlugs } from './ProductSlugs'

export interface Product {
  slug: ProductSlugs;
  name: string;
  shortName: string;
  description: string;
  price: number;
  img: string;
  ingredients: string;
  nutritionImg: string;
  shopifyId: string;

  pairings: ProductSlugs[];
}