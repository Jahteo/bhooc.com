import React from 'react'
import Image from 'next/image'
import { Product } from '../types/Product'
import { Recipe } from '../types/Recipe'
import recipes from '../data/recipes'

import SwiperProducts from "../components/SwiperProducts"
function prettifyName(str: string) {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function relevantRecipes(product: Product){
  const recipeList: Recipe[] = []
  recipes.map((recipe) => {
    if (recipe.products.includes(product.slug)){
      recipeList.push(recipe)
    }
  })
  return recipeList
}

export default function ProductPage ({ product }: { product: Product }): JSX.Element {
  return (
    <section id="main">

      <div className="container">
        <div className="row">

          <div id="sidebar" className="col-4 col-12-medium">
            <section>
              <Image src={product.img} height={200} width={200} layout="responsive"></Image>
            </section>
          </div>

          <div id="content" className="col-8 col-12-medium imp-medium">
            <article className="box post">
              <header>
                <h2><strong>{product.name}</strong></h2>
              </header>
              <p>{product.description}</p>
              {/* <span className="image featured"><img src="images/pic04.jpg" alt="" /></span> */}
              <h3>$ {product.price}</h3>
              <ul className="actions">
                <li><a href="#" className="button icon solid fa-plus">Add to cart</a></li>
              </ul>
            </article>
          </div>

        </div>
      </div>

      <hr className="double-line" style={{maxWidth: "70%"}}/>

      <div className="container">
        <div className="row">

          <div id="sidebar" className="col-4 col-12-medium">
            <section>
              <article className="box excerpt">
                <header>
                  <h2>Mix it with:</h2>
                  <ul className="no-bullets">
                    {product.pairings.map((pair) => {
                      console.log(typeof(pair))
                      const name = prettifyName(pair)
                      // return <li><a href={`product/${pair}`}><strong>{pair}</strong></a></li>
                      return <li><a href={`product/${pair}`}><strong>{name}</strong></a></li>
                    })}
                  </ul>
                </header>
              </article>
            </section>
          </div>

          <div id="content" className="col-8 col-12-medium imp-medium">
            <article className="box excerpt alt">
              <header>
                <h2>Recipes:</h2>
                <SwiperProducts slides={relevantRecipes(product)}/>
              </header>
            </article>
          </div>

        </div>
      </div>

      <hr className="double-line" style={{maxWidth: "70%"}}/>
      <div className="container">
        <div className="row">
          <div id="sidebar" className="col-4 col-12-medium">
            <Image src={product.nutritionImg} height={400} width={200} ></Image>
          </div>
          <div id="content" className="col-8 col-12-medium imp-medium">
            <h3>Ingredients</h3>
            <p>{product.ingredients}</p>
          </div>
        </div>
      </div>

    </section>
  )
}