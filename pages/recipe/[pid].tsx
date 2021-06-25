import React from "react"
import { useRouter } from 'next/router'

import { Recipe } from "../../types/Recipe"
import RecipePage from "../../components/RecipePage"
import allRecipes from '../../data/recipes'
import blankRecipe from '../../data/recipes/_template'

const RecipeRoute = (): JSX.Element => {
  const router = useRouter()
  const { pid } = router.query
  let recipe: Recipe = blankRecipe
  allRecipes.map((tempRecipe) => {
    if (tempRecipe.slug == pid) {
      recipe = tempRecipe
    }
  })
  return <><RecipePage recipe={recipe}/></>
}

export default RecipeRoute