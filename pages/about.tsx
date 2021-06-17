import React from 'react'

export default function About(): JSX.Element {
  return(
    <>
      <section id="main">
        <div className="container">
          <div className="row">

            {/* <!-- Content --> */}
            <div id="content" className="col-8 col-12-medium">

              {/* <!-- Post --> */}
              <article className="box post">
                <header>
                  {/* <h2><a href="#">I don’t want to say <strong>it’s the aliens</strong> ...<br />but it’s the aliens.</a></h2> */}
                  <h2><strong>It all began...</strong> </h2>
                </header>
                <a href="#" className="image featured"><img src="https://source.unsplash.com/800x300/?smile" alt="" /></a>
                <h3>...with a love of food.</h3>
                <p>The story behind the family of Big Horn Olive Oil Company is rich with memories of family, travels, and adventures. One of those adventures was a move to Reno, NV. Mercedes Burkavage began her search for the wonderful Ultra Premium Extra Virgin Olive Oils and Balsamic Vinegars her family had grown to love while living on the East Coast. In all of her searching, the world’s finest oils and vinegars were nowhere to be found.</p>
                <p>After much discussion one evening, and almost as much wine, Mercedes and her husband John agreed that introducing these simply delicious products to Northern Nevada was necessary. The details were worked out, and Big Horn Olive Oil Company was born. Since 2012, two stores have been established in Reno, and our Las Vegas store opened in 2014. We proudly serve customers throughout Nevada, and now all over the United States through our online store.</p>
                <p>Ultra Premium Extra Virgin Olive Oils and Balsamic Vinegars are what we provide. Passion for sharing simple, healthy and delicious foods and recipes is why we are here. We invite you to stop by the nearest Tasting Room whenever possible. We would love to share our obsession with you.</p>
              </article>

              {/* <!-- Post --> */}
              <article className="box post">
                <header>
                  <h2><a href="#">By the way, many thanks to <strong>regularjane</strong>
												for these awesome demo photos</a></h2>
                </header>
                <a href="#" className="image featured"><img src="https://source.unsplash.com/800x300/?smile" alt="" /></a>
                <h3>You should probably check out her work</h3>
                <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
											ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
											sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
											in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
											consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
											in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
											magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
											consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
											justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
											mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
											Curabitur leo nibh, rutrum malesuada.</p>
                <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat
											Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula
											vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet
											magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in,
											tristique at erat. Curabitur leo nibh, rutrum eu malesuada in, tristique
											at erat lorem ipsum dolor sit amet lorem ipsum sed consequat magna
											tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros consequat
											magna tempus.</p>
                <ul className="actions">
                  <li><a href="#" className="button icon solid fa-file">Continue Reading</a></li>
                </ul>
              </article>

            </div>

            {/* <!-- Sidebar --> */}
            <div id="sidebar" className="col-4 col-12-medium">

              {/* <!-- Excerpts --> */}
              <section>
                <ul className="divided">
                  <li>

                    {/* <!-- Excerpt --> */}
                    <article className="box excerpt">
                      <header>
                        <span className="date">July 30</span>
                        <h3><a href="#">Just another post</a></h3>
                      </header>
                      <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
															suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                    </article>

                  </li>
                  <li>

                    {/* <!-- Excerpt --> */}
                    <article className="box excerpt">
                      <header>
                        <span className="date">July 28</span>
                        <h3><a href="#">And another post</a></h3>
                      </header>
                      <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
															suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                    </article>

                  </li>
                  <li>

                    {/* <!-- Excerpt --> */}
                    <article className="box excerpt">
                      <header>
                        <span className="date">July 24</span>
                        <h3><a href="#">One more post</a></h3>
                      </header>
                      <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
															suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                    </article>

                  </li>
                </ul>
              </section>

              {/* <!-- Highlights --> */}
              <section>
                <ul className="divided">
                  <li>

                    {/* <!-- Highlight --> */}
                    <article className="box highlight">
                      <header>
                        <h3><a href="#">Something of note</a></h3>
                      </header>
                      <a href="#" className="image left"><img src="https://source.unsplash.com/300x300/" alt="" /></a>
                      <p>Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam
															viverra sit amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis
															convallis. Etiam non nunc vel est suscipit convallis non id orci. Ut interdum tempus
															facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci.</p>
                      <ul className="actions">
                        <li><a href="#" className="button icon solid fa-file">Learn More</a></li>
                      </ul>
                    </article>

                  </li>
                  <li>

                    {/* <!-- Highlight --> */}
                    <article className="box highlight">
                      <header>
                        <h3><a href="#">Something of less note</a></h3>
                      </header>
                      <a href="#" className="image left"><img src="https://source.unsplash.com/300x300/" alt="" /></a>
                      <p>Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam
															viverra sit amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis
															convallis. Etiam non nunc vel est suscipit convallis non id orci. Ut interdum tempus
															facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci.</p>
                      <ul className="actions">
                        <li><a href="#" className="button icon solid fa-file">Learn More</a></li>
                      </ul>
                    </article>

                  </li>
                </ul>
              </section>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}