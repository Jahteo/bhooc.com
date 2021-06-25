import React from 'react'
import Link from 'next/link'
import NextJSImage from './NextJSImage'
import { Recipe } from '../types/Recipe';


export default function RecipeGallery (recipes: Recipe[]): JSX.Element{
  return(
    <>
      <ul className="no-bullets card-wrapper">
        {recipes.map((recipe) => {
          return (<>
            <li className="card"><Link href={`/recipe/${recipe.slug}`}><a>
              {NextJSImage(recipe.img, recipe.name)}
              {/* <Image src={prod.img} width="150" height="150" alt={prod.name}/> */}
              <h3>{recipe.name}</h3>
            </a></Link></li>
          </>)
        })}
      </ul>
    </>
  )
}