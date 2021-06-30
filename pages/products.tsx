import React from "react"
// import Image from "next/image"
// import Link from "next/link"
import SwiperProducts from "../components/SwiperProducts";
import oils from '../data/products/oils'
import vinegars from '../data/products/vinegars'
// import Accordian from "../components/Accordian";


export default function products({ children }: { children: React.ReactNode }): JSX.Element {

  return (
    <div >
      <section id="main">
        <div className="container">
          <div id="content">

            {/* <h2>SearchBar here</h2> */}
            {/* <Accordian ></Accordian> */}

            <article className="box post">
              <header>
                <h2><strong>Olive Oils</strong></h2>
              </header>
              <SwiperProducts
                slides={oils}
                urlType="product"
              />
              <ul className="actions">
                <li><a href="/oils" className="button icon solid">See all oils</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Vinegars</strong></h2>
              </header>
              <SwiperProducts
                slides={vinegars}
                urlType="product"
              />
              <ul className="actions">
                <li><a href="/vinegars" className="button icon solid">See all vinegars</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Pairings</strong></h2>
              </header>
              <h3>Coming soon</h3>
              {/* <SwiperProducts slides={oils}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all pairings</a></li>
              </ul> */}
            </article>

            <article className="box post">
              <header>
                <h2><strong>Gifts</strong></h2>
              </header>
              <h3>Coming Soon</h3>
              {/* <SwiperProducts slides={oils}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all gifts</a></li>
              </ul> */}
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}


// const oilSlides = [
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
//   {
//     name: "Garlic Olive Oil",
//     description: "Garlic Olive Oil is very versatile and can be used in everything from cooking eggs to enhancing chicken, pork and beef. Try it on your roasted vegetables, baked potatoes and pasta. Tastes great as a bread dipper when paired with Traditional Dark Balsamic. It even goes well with our fruity Balsamic Vinegars.",
//     img: "https://source.unsplash.com/200x200/?garlic",
//     url: "/garlic-olive-oil",
//     recipes: [
//       {
//         name: "Breadsticks",
//         url: "recipes/breadsticks",
//         img: "https://source.unsplash.com/20x20/?bread",
//       },
//     ],
//     pairings: [
//       "Peach White Balsamic", "Grapefruit White Balsamic",
//     ],
//     nutrition: "oil",
//     ingredients: "Olives, garlic"
//   },
// ]
