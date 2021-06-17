import React from 'react'

export default function RecentRecipes(): JSX.Element {
  const recipes = [
    {
      name: "Breadsticks",
      page: "/breadsticks",
      img: "https://source.unsplash.com/200x200/?bread",
      text: "Great for Friday with friends",
      products: [
        "BHOOC EVOO",
        "Garlic Olive Oil"
      ]
    },
    {
      name: "Breadsticks",
      page: "/breadsticks",
      img: "https://source.unsplash.com/200x200/?bread",
      text: "Great for Friday with friends",
      products: [
        "BHOOC EVOO",
        "Garlic Olive Oil"
      ]
    },
    {
      name: "Breadsticks",
      page: "/breadsticks",
      img: "https://source.unsplash.com/200x200/?bread",
      text: "Great for Friday with friends",
      products: [
        "BHOOC EVOO",
        "Garlic Olive Oil"
      ]
    },
  ]

  return (
    <section id="features">
      <div className="container">
        <header>
          <h2>Recent Recipes</h2>
        </header>
        <div className="row aln-center">
          {recipes.map(({name, page, img, text, products}) => {
            return(
              <>
                <div className="col-4 col-6-medium col-12-small">
                  <section>
                    <a href="#" className="image featured"><img src={img} alt={name} /></a>
                    <header>
                      <h3>{name}</h3>
                    </header>
                    <p>{text}</p>
                    {/* <ul>
                      {products.map((product) => {
                        return <li>{product}</li>
                      })}
                    </ul> */}
                    <div className="col-12">
                      <ul className="actions">
                        <li><a href="#" className="button icon solid fa-file">Full Recipe</a></li>
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