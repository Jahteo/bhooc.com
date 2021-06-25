import React from "react"
import { useRouter } from 'next/router'

import { Product } from "../../types/Product"
import ProductPage from "../../components/ProductPage"
import allProducts from '../../data/products'
import blankProduct from '../../data/products/_template'

const ProductRoute = (): JSX.Element => {
  const router = useRouter()
  const { pid } = router.query
  let product: Product = blankProduct
  allProducts.map((tempProduct) => {
    if (tempProduct.slug == pid) {
      product = tempProduct
    }
  })
  return <><ProductPage product={product}/></>
}

export default ProductRoute