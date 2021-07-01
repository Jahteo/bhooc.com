import React from "react";
import storeData from '../data/stores'

export default function shipping (): JSX.Element {
  return(
    <>
      <section id="main">
        <div className="container">
          <div className="row">

            <div id="content" className="col-8 col-12-medium">

              <article className="box post">
                <header>
                  <h2><strong>Shipping</strong> </h2>
                </header>
                <img className="image featured" src="/images/banners/USPSTrucks.jpg" alt="" />
                <h3>Let us make it easy by packaging and delivering for you.</h3>
                <p>We offer USPS Priority shipping both for virtual purchases and for in-store purchases. We use custom foam inserts to ensure that bottles are well protected and as snug as possible. Our inserts can hold 1-5 bottles per box at a flat rate of $15 per box.</p>
                <p>Example: 1-5 bottles all shipped to the same location will fit in 1 box. 6-10 bottles will require 2 boxes, 11-15 need 3 boxes, etc...</p>
                <h3>Pro-tip: A shipping box costs $15 whether you buy 1 bottle or 5, so fill each box with 5 bottles to save the most money on shipping!</h3>
                <p>We currently do not ship products other than our 375ml oils & vinegars, to avoid broken bottles from too many items jostling in a box.</p>
              </article>

              <article className="box post">
                <header>
                  <h2>FAQ</h2>
                </header>
                {/* <img src="/images/banners/wineCheers.jpg" alt="" /> */}
                <h3>In the works...</h3>
                <p>...but feel free to give us a call or stop by in the meantime!</p>
                {/* <ul className="actions">
                <li><a href="#" className="button icon solid fa-file">Continue Reading</a></li>
              </ul> */}
              </article>

            </div>

            <div id="sidebar" className="col-4 col-12-medium">

              <section>
                <ul className="divided">
                  <li>
                    <article className="box excerpt">
                      <header>
                        <h3><a href="#">USPS Priority Mail</a></h3>
                      </header>
                      <p>includes tracking and deliver in 2-5 business days. Deliver times may increase during holidays, so be sure to order early!</p>
                    </article>
                  </li>
                  <li>
                    <article className="box excerpt">
                      <header>
                        <h3><a href="#">For Gifting or Groceries</a></h3>
                      </header>
                      <p>We love to gussy up gifts! Let us know if the order is for a gift, and what you'd like us to include in a handwritten note, and we'll make the best possible gift at no extra charge</p>
                    </article>
                  </li>
                  <li>
                    <article className="box excerpt">
                      <header>
                        <h3><a href="#">Extra Questions?</a></h3>
                      </header>
                      <p>Call us today at {storeData.phone}!</p>
                    </article>
                  </li>

                  {/* <li>
                    <article className="box excerpt">
                      <header>
                        <h3><a href="#">If we run out of a product</a></h3>
                      </header>
                      <p>First, we try our best to always keep the website as up-to-date as possible. If you d</p>
                    </article>
                  </li> */}

                </ul>
              </section>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
