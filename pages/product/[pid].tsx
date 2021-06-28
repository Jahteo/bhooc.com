import React from "react"
import { useRouter } from 'next/router'

import { Product } from "../../types/Product"
import ProductPage from "../../components/ProductPage"
import allProducts from '../../data/products'

//Todo: use getStaticProps from nextJS for products
//Todo: repeat for recipes
//https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

const ProductRoute = (): JSX.Element => {
  const router = useRouter()
  const { pid } = router.query
  const product: Product = allProducts.find((tempProduct) => tempProduct.slug == pid) as Product
  return <><ProductPage product={product}/></>
}

export default ProductRoute