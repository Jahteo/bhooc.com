import React from 'react'
import Image from 'next/image'
import { Product } from '../types/Product'
import recipes from '../data/recipes'
import { useCart } from '../services/shopify'
import allProducts from '../data/products/'
import _template from '../data/products/_template'

import SwiperProducts from "../components/SwiperProducts"
// todo: replace with lookupProducts,(filter over relevant recipes)
function prettifyName(str: string) {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function relevantRecipes(product: Product){
  return recipes.filter((recipe) =>
    recipe.products.includes(product.slug)
  )
}

function checkImg (image: string): JSX.Element {
  if (image == "") {
    return <Image src="/images/recipes/norecipeImg.jpg" height={200} width={200} layout="responsive"></Image>
  } else {
    return <Image src={image} height={200} width={200} layout="responsive"></Image>
  }
}

export default function ProductPage (): JSX.Element {
  const { addProduct } = useCart()

  //passing product as a prop fails when refreshing page. solution was to pull product from url, with the caveat that nextjs's ssr doesn't have a window.
  let product = _template
  if(typeof window != "undefined") {
    product = allProducts.find((product: Product) => product.slug === window.location.pathname.replace("/product/", "").replace("/recipe/", "")) as Product
  }
  return (
    <section id="main">

      <div className="container">
        <div className="row">

          <div id="sidebar" className="col-4 col-12-medium">
            <section>
              {checkImg(product.img)}
              {/* <Image src={product.img} height={200} width={200} layout="responsive"></Image> */}
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
                <li>
                  <button
                    className="button icon solid fa-plus"
                    onClick={() => addProduct(product.shopifyId, 1)}
                  >
                    Add to cart
                  </button>
                </li>
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
                      const name = prettifyName(pair)
                      // return <li><a href={`product/${pair}`}><strong>{pair}</strong></a></li>
                      return <li><a href={pair}><strong>{name}</strong></a></li>
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
                <SwiperProducts
                  slides={relevantRecipes(product)}
                  urlType="recipe"
                />
              </header>
            </article>
          </div>

        </div>
      </div>

      <hr className="double-line" style={{maxWidth: "70%"}}/>
      <div className="container">
        <div className="row">
          <div id="sidebar" className="col-4 col-12-medium">
            {checkImg(product.nutritionImg)}
            {/* <Image src={product.nutritionImg} height={400} width={200} ></Image> */}
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