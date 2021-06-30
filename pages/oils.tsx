import React from 'react'
import Link from 'next/link'
import NextJSImage from '../components/NextJSImage'
import { Product } from '../types/Product'
import allOils from '../data/products/oils'

export default function Oils (): JSX.Element {
  return(
    <>
      <section id="main">
        <div className="container">
          <h2>Olive Oils & Specialty Oils</h2>
          <ul className="no-bullets card-wrapper">
            {allOils.map((oil: Product) => {
              return (
                <li className="card" key={oil.slug}>
                  <Link href={`/product/${oil.slug}`}>
                    <a>
                      {NextJSImage(oil.img, oil.shortName)}
                      <h3>{oil.shortName}</h3>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}