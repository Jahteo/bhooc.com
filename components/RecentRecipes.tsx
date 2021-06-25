import React from 'react'
import NextJSImage from './NextJSImage'
import { Recipe } from '../types/Recipe'

export default function RecentRecipes({recipes}
  : {recipes: Recipe[]}
): JSX.Element {
  return (
    <section id="features">
      <div className="container">
        <header>
          <h2>Recent Recipes</h2>
        </header>
        <div className="row aln-center">
          {recipes.map((recipe) => {
            return(
              <>
                <div className="col-3 col-4-medium col-6-small">
                  <section>
                    <a href={`/recipe/${recipe.slug}`} className="image featured">
                      {NextJSImage(recipe.img, recipe.name)}
                    </a>
                    <header>
                      <h3>{recipe.name}</h3>
                    </header>
                    {/* <p>{text}</p> */}
                    <div className="col-12">
                      <ul className="actions">
                        <li><a href={`/recipe/${recipe.slug}`} className="button icon solid fa-file">See Recipe</a></li>
                      </ul>
                    </div>
                  </section>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}