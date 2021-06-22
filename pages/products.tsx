import React from "react"
// import Image from "next/image"
// import Link from "next/link"
import SwiperProducts from "../components/SwiperProducts";


export default function products({ children }: { children: React.ReactNode }): JSX.Element {

  return (
    <div >
      <section id="main">
        <div className="container">
          <div id="content">

            <h2>SearchBar here</h2>

            <article className="box post">
              <header>
                <h2><strong>Olive Oils</strong></h2>
              </header>
              <SwiperProducts slides={oilSlides}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all oils</a></li>
                <li><a href="/product/garlic-olive-oil" className="button icon solid">See Garlic Oil</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Vinegars</strong></h2>
              </header>
              <SwiperProducts slides={oilSlides}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all vinegars</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Pairings</strong></h2>
              </header>
              <SwiperProducts slides={oilSlides}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all pairings</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Gifts</strong></h2>
              </header>
              <SwiperProducts slides={oilSlides}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all gifts</a></li>
              </ul>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}


const oilSlides = [
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
  {
    name: "Garlic Olive Oil",
    description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
    img: "https://source.unsplash.com/200x200/?garlic",
    url: "/garlic-olive-oil",
    recipes: [
      {
        name: "Breadsticks",
        url: "recipes/breadsticks",
        img: "https://source.unsplash.com/20x20/?bread",
      },
    ],
    pairings: [
      "Peach White Balsamic", "Grapefruit White Balsamic",
    ],
    nutrition: "oil",
    ingredients: "Olives, garlic"
  },
]
