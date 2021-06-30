import React from 'react'
import Link from 'next/link'
import NextJSImage from '../components/NextJSImage'
import { Product } from '../types/Product'
import allVinegars from '../data/products/vinegars'

export default function Vinegars (): JSX.Element {
  return(
    <>
      <section id="main">
        <div className="container">
          <h2>Balsamic Vinegars & Specialty Vinegars</h2>
          <ul className="no-bullets card-wrapper">
            {allVinegars.map((vinegar: Product) => {
              return (
                <li className="card" key={vinegar.slug}>
                  <Link href={`/product/${vinegar.slug}`}>
                    <a>
                      {NextJSImage(vinegar.img, vinegar.shortName)}
                      <h3>{vinegar.shortName}</h3>
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