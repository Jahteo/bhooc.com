import React from 'react'
// import bighornTheme from '../data/stores/bighornTheme'
import allProducts from '../data/products'
import Image from 'next/image'
import { useLineitems, useCart } from '../services/shopify'
import Link from 'next/link'
// import _template from '../data/products/_template'

function getProduct(shopifyId: string) {
  return allProducts.find((product) => product.shopifyId === shopifyId)
}

function calcBoxes (lineItems: ShopifyBuy.LineItem[]) {
  // console.log(lineItems)
  const reducer = (accumulator: number, item: {quantity: number}) => {
    // console.log("item", item.quantity)
    return accumulator + item.quantity
  }
  return lineItems && Math.ceil(lineItems.reduce(reducer, 0)/5)
}

function calcSubtotal(lineItems: ShopifyBuy.LineItem[]) {
  const reducer = (accumulator: number, item: {quantity: number, variant: {price: number}}) => {
    console.log("item", item.quantity, item.variant.price)
    return accumulator + (item.quantity * item.variant.price)
  }
  //@ts-ignore: shopify's types insist there is no lineItem.variant, which is outdated/wrong
  const productSubtotal: number = lineItems.reduce(reducer, 0)
  return  productSubtotal + (calcBoxes(lineItems) * 15)
}

export default function Cart (): JSX.Element {
  const lineItems = useLineitems()

  const { pay, updateQuantity } = useCart()

  return (
    <>
      <section id="main">
        <div className="container">
          <h2 className="cart-header"
          // style={{
          //   backgroundColor: bighornTheme.color,
          //   padding: "20px",
          //   color: "black"
          // }}
          >
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
                <th></th>
                <th>SubTotal: ${lineItems && calcSubtotal(lineItems)}</th>
              </tr>
            </tfoot>
            <tbody>
              {lineItems?.map(({
                id,
                //@ts-ignore: shopify has bad types
                variant,
                title,
                // linePrice,
                // price,
                quantity,
              }) => {
                const product = getProduct(variant.id as string)
                return(
                  <tr key={id}>
                    <td>
                      <Link href={`/product/${product?.slug}`}>
                        {product && <Image src={product.img} width={100} height={100}/>}
                      </Link>
                    </td>
                    <td>
                      <Link href={`/product/${product?.slug}`}>
                        {product?.name || title}
                      </Link>
                    </td>
                    <td>
                      <span className="quantity fas fa-plus" onClick={() => updateQuantity(id as string, (quantity+1))}>
                        <span className="icon-label">Increase quantity</span>
                      </span>
                      <span>{quantity}</span>
                      <span className=" quantity fas fa-minus" onClick={() => updateQuantity(id as string, (quantity-1))}>
                        <span className="icon-label">Decrease quantity</span>
                      </span>
                    </td>
                    <td><sub>${variant.price}/each</sub></td>
                    <td>${parseFloat(variant.price) * quantity}</td>
                  </tr>
                )
              })}
              <tr>
                <td></td>
                <td>Shipping</td>
                <td>
                  {lineItems && calcBoxes(lineItems)} boxes
                </td>
                <td><sup>$15/box (holds 5 bottles)</sup></td>
                <td>
                  ${lineItems && calcBoxes(lineItems)*15}
                </td>
              </tr>
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
