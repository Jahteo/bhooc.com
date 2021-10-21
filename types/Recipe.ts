import { ProductSlugs } from "./ProductSlugs"

type categories = "Dessert" | "Sides" | "Sauces" | "Mains" | "Soups" | "Salads" | "Drinks" | "Breakfast"

export interface Recipe {
    slug: string;
    name: string;
    img: string;
    ingredients: string[];
    steps: string[];
    description: string;

    categories: categories[];
    products: ProductSlugs[];
}