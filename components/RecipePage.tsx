import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../types/Product'
import { Recipe } from '../types/Recipe'
// import recipes from '../data/recipes'
import allProducts from '../data/products'
import { useCart } from '../services/shopify'

// import SwiperNoNav from "./SwiperNoNav"
// function prettifyName(str: string) {
//   return str.replace(/-/g, " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }

function checkImg (image: string): JSX.Element {
  if (image == "") {
    return <Image src="/images/recipes/norecipeImg.jpg" height={200} width={200} layout="responsive"></Image>
  } else {
    return <Image src={image} height={200} width={200} layout="responsive"></Image>
  }
}

export default function RecipePage ({ recipe }: { recipe: Recipe }): JSX.Element {
  const { addProduct } = useCart()

  function buildProdList (recipe: Recipe) {
    const prodList: Product[] = []
    allProducts.map((product) => {
      recipe.products.map((recipeProduct) => {
        if (product.slug == recipeProduct) {
          prodList.push(product)
          //Break or return loop
        }
      })
    })
    return prodList
  }

  return (
    <section id="main">

      <div className="container">
        <div className="row">
          <div id="sidebar" className="col-4 col-12-medium">
            <section>
              {checkImg(recipe.img)}
            </section>
          </div>
          <div id="content" className="col-8 col-12-medium imp-medium">
            <article className="box post">
              <header>
                <h2><strong>{recipe.name}</strong></h2>
              </header>
              {/* <h3>Bighorn Products:</h3> */}
              {/* <SwiperNoNav slides={buildProdList(recipe)}/> */}
              {buildProdList(recipe).map((prod) => {
                return (<>
                  <ul className="no-bullets inline">
                    <li key={prod.slug}><Link href={`/product/${prod.slug}`}><a>
                      <Image src={prod.img} width="150" height="150" alt={prod.name}/>
                      {/* {prod.name} */}
                    </a></Link></li>
                    <li key={`button-${prod.slug}`}>
                      <button
                        onClick={() => {addProduct(prod.shopifyId, 1)}}
                        className="button icon solid fa-plus">
                          Add to cart
                      </button>
                    </li>
                    {/* <br/> */}
                  </ul>
                </>)
              })}
            </article>
          </div>
        </div>
      </div>

      <hr className="double-line" style={{maxWidth: "70%"}}/>
      <div className="container">
        <div className="row">
          <div id="sidebar" className="col-4 col-12-medium">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                return <li key={`ingredient-${ingredient}`}>{ingredient}</li>
              })}
            </ul>
          </div>
          <div id="content" className="col-8 col-12-medium imp-medium">
            <h3>Directions</h3>
            <ol>
              {recipe.steps.map((step, i) => {
                return <li key={i}>{step}</li>
              })}
            </ol>
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
                  <h2>Tags:</h2>
                  <ul className="no-bullets">
                    {recipe.categories.map((category) => {
                      return (
                        <li key={category}>
                          <a href={`recipe/${category}`}>
                            <strong>{category}</strong>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </header>
              </article>
            </section>
          </div>
          <div id="content" className="col-8 col-12-medium imp-medium">
            <article className="box excerpt alt">
              <header>
                {/* <h2>Description:</h2> */}
                <p>{recipe.description}</p>
              </header>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}