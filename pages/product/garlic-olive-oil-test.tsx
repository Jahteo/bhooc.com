import React from 'react'
import ProductPage from '../../components/ProductPage'
import garlicOil from "../../data/products/oils/garlicOil"


export default function GarlicOliveOil (): JSX.Element {
  return (
    <ProductPage product={garlicOil}></ProductPage>
  )
}