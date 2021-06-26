import React, { useState } from 'react'
import bighornTheme from '../data/stores/bighornTheme'
import allProducts from '../data/products'
import { Product } from '../types/Product'
import Image from 'next/image'
import { useLineitems, useCart } from '../services/shopify'
// import _template from '../data/products/_template'

function getProduct(shopifyId: string) {
  return allProducts.find((product) => product.shopifyId === shopifyId)
}

function calculateShipping(cart: {product: Product, quantity: number}[])
  : JSX.Element {
  let bottleCount = 0
  cart.map(({product, quantity}) => {
    //in case we put a zero-cost non-bottle item (like pairing recipe or gift bag)
    if(product.price > 0){
      bottleCount += quantity
    }
  })
  const boxCount = Math.ceil(bottleCount/5)
  const boxTotal = boxCount * 15
  return(
    <tr>
      <td></td>
      <td>Shipping</td>
      <td>
        {/* <span className="quantity fas fa-plus">
          <span className="icon-label">Increase quantity</span>
        </span> */}
        <span>{bottleCount} bottles = {boxCount} boxes</span>
        <div><sup>(1 for every 5 bottles)</sup></div>
        {/* <span className=" quantity fas fa-minus">
          <span className="icon-label">Decrease quantity</span>
        </span> */}
      </td>
      <td>$ {boxTotal}</td>
    </tr>
  )
}


export default function Cart (): JSX.Element {
  const [cart, setCart] = useState(mockCart2)
  const lineItems = useLineitems()

  const { pay } = useCart()

  function increaseQuantity(){
    //
  }
  function decreaseQuantity(){
    //
  }

  return (
    <>
      <section id="main">
        <div className="container">
          <h2 style={{
            backgroundColor: bighornTheme.color,
            padding: "20px",
            color: "black"
          }}>
            Your Cart
          </h2>
          <table>
            {/* <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead> */}
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>SubTotal: ____</th>
              </tr>
            </tfoot>
            <tbody>
              {lineItems?.map(({
                id,
                //@ts-ignore: shopify has bad types
                variant,
                title,
                linePrice,
                price,
                quantity,
              }) => {
                const product = getProduct(variant.id as string)
                return(
                  <tr key={id}>
                    <td>
                      {product && <Image src={product.img} width={100} height={100}/>}
                    </td>
                    <td>{product?.name || title}</td>
                    <td>
                      <span className="quantity fas fa-plus" onClick={() => increaseQuantity()}>
                        <span className="icon-label">Increase quantity</span>
                      </span>
                      <span>{quantity}</span>
                      <span className=" quantity fas fa-minus" onClick={() => decreaseQuantity()}>
                        <span className="icon-label">Decrease quantity</span>
                      </span>
                    </td>
                    <td>${parseFloat(variant.price) * quantity}</td>
                  </tr>
                )
              })}
              {calculateShipping(cart)}
            </tbody>
          </table>
          <div style={{textAlign: 'right'}}>
            <button
              onClick={() => pay()}
              className="button icon solid"
            >
              Checkout
            </button>
          </div>
          <hr className="double-line"/>

        </div>
      </section>
    </>
  )
}

const mockCart2: {product: Product, quantity: number}[] = [
  {
    product: allProducts[1],
    quantity: 4
  },
  {
    product: allProducts[0],
    quantity: 2
  },
]

// const mockCart:  {itemSlug: string, quantity: number, price: number}[] = [
//   {
//     //this will actually be shoppifyID, after they're added
//     itemSlug: "garlic-olive-oil",
//     quantity: 2,
//     price: 20,
//   },
//   {
//     itemSlug: "lemon-olive-oil",
//     quantity: 3,
//     price: 20,
//   },
// ]