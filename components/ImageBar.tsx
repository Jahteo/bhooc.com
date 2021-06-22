import React from 'react'

export default function ImageBar({ImgList}
  : {ImgList: {
    header: string;
    name: string;
    url: string;
    img: string;
    text: string;
    // products: string;
  }[]}): JSX.Element {

  return (
    <section id="features">
      <div className="container">
        <header>
          <h2>{ImgList[0].header}</h2>
        </header>
        <div className="row aln-center">
          {ImgList.map(({name, url, img, text}) => {
            return(
              <>
                <div className="col-3 col-4-medium col-6-small">
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
                        <li><a href={url} className="button icon solid fa-file">Full Recipe</a></li>
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