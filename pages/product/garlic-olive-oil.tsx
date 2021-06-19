import React from 'react'
import ProductPage from '../../components/ProductPage'

export default function GarlicOliveOil (): JSX.Element {
  return (
    <ProductPage product={product}></ProductPage>
  )
}

const product = {
  name: "Garlic Olive Oil",
  description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
  img: "/images/products/garlic.png",
  url: "/garlic-olive-oil",
  ingredients: "Extra Virgin Olive Oil, Essential Oil of Garlic",
  nutritionImg: "/images/nutrition/OilNutrition-1.png",
  recipes: [
    {
      name: "Breadsticks",
      url: "recipes/breadsticks",
      img: "https://source.unsplash.com/200x200/?bread",
    },
    {
      name: "Breadsticks",
      url: "recipes/breadsticks",
      img: "https://source.unsplash.com/200x200/?bread",
    },
    {
      name: "Breadsticks",
      url: "recipes/breadsticks",
      img: "https://source.unsplash.com/200x200/?bread",
    },
  ],
  pairings: [
    {name: "Peach White Balsamic", url: "/peach-white-balsamic"},
    {name: "Grapefruit White Balsamic", url: "/grapefruit-white-balsamic"},
  ],
  nutrition: "oil",
  price: 20,
}
