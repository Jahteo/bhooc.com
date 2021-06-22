//Todo: I'd like to be able to export a single list like the react-slideshow-images file
//this is currenlty an unused file. Eventually, I'll learn how to use it.

declare namespace customTypes{
  export interface Product {
    id: number;
    name: string;
    description: string;
    img: string;
    url: string;
    ingredients: string;
    nutritionImg: string;
    recipes: {
        name: string;
        url: string;
        img: string;
    }[];
    pairings: {
        name: string;
        url: string;
    }[];
    price: number;
  }
}
