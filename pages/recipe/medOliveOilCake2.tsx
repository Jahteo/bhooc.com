import React from "react"
import RecipePage from "../../components/RecipePage"
import recipe from "../../data/recipes/medOliveOilCake"

export default function medOliveOilCake(): JSX.Element {
  return (
    <>
      <RecipePage recipe={recipe}/>
    </>
  )
}