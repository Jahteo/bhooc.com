// import { ProductSlugs } from "./ProductSlugs"

// type categories = "Dessert" | "Sides" | "Sauces" | "Mains" | "Soups" | "Salads" | "Drinks" | "Breakfast" | "uncategorized"

export interface Post {
    slug: string;
    name: string;
    img: string;
    ingredients: string[];
    steps: string[];
    description: string;

    categories: string[];
    products: string[];
}