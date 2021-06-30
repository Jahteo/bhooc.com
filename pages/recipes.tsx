import React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import SwiperProducts from "../components/SwiperProducts";
// import oils from '../data/products/oils'
import allRecipes from '../data/recipes'
import RecipeGallery from '../components/RecipeGallery'


export default function recipes({ children }: { children: React.ReactNode }): JSX.Element {

  return (
    <div >
      <section id="main">
        <div className="container">
          <div id="content">

            {/* <h2>SearchBar here</h2> */}
            <h2>More Recipes coming soon</h2>

            <article className="box post">
              <header>
                <h2><strong>Recipes</strong></h2>
              </header>
              {RecipeGallery(allRecipes)}
              {/* <SwiperProducts slides={allRecipes}></SwiperProducts> */}
              {/* <ul className="actions">
                <li><a href="#" className="button icon solid">See all oils</a></li>
                <li><a href="/product/garlic-olive-oil" className="button icon solid">See Garlic Oil</a></li>
              </ul> */}
            </article>

            {/* <article className="box post">
              <header>
                <h2><strong>Vinegars</strong></h2>
              </header>
              <SwiperProducts slides={oils}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all vinegars</a></li>
              </ul>
            </article> */}

            {/* <article className="box post">
              <header>
                <h2><strong>Pairings</strong></h2>
              </header>
              <SwiperProducts slides={oils}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all pairings</a></li>
              </ul>
            </article> */}

            {/* <article className="box post">
              <header>
                <h2><strong>Gifts</strong></h2>
              </header>
              <SwiperProducts slides={oils}></SwiperProducts>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all gifts</a></li>
              </ul>
            </article> */}

          </div>
        </div>
      </section>
    </div>
  )
}
