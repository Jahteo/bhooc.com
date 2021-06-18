// import styles from './layout.module.css'
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function products({ children }: { children: React.ReactNode }): JSX.Element {
  // useEffect(() => {
  //   closeSidebar()
  // })

  return (
    <div >
      <section id="main">
        <div className="container">
          <div id="content">

            <h2>SearchBar here</h2>

            <article className="box post">
              <header>
                <h2><strong>Olive Oils</strong></h2>
              </header>
              {/* <span className="image featured"><img src="images/pic04.jpg" alt="" /></span> */}
              <h3>And yeah, that's basically it</h3>
              <p>Phasellus laoreet massa id justo mattis pharetra. </p>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all oils</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Vinegars</strong></h2>
              </header>
              {/* <span className="image featured"><img src="images/pic04.jpg" alt="" /></span> */}
              <h3>And yeah, that's basically it</h3>
              <p>Phasellus laoreet massa id justo mattis pharetra. </p>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all vinegars</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Pairings</strong></h2>
              </header>
              {/* <span className="image featured"><img src="images/pic04.jpg" alt="" /></span> */}
              <h3>And yeah, that's basically it</h3>
              <p>Phasellus laoreet massa id justo mattis pharetra. </p>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all pairings</a></li>
              </ul>
            </article>

            <article className="box post">
              <header>
                <h2><strong>Gifts</strong></h2>
              </header>
              {/* <span className="image featured"><img src="images/pic04.jpg" alt="" /></span> */}
              <h3>And yeah, that's basically it</h3>
              <p>Phasellus laoreet massa id justo mattis pharetra. </p>
              <ul className="actions">
                <li><a href="#" className="button icon solid">See all gifts</a></li>
              </ul>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}
