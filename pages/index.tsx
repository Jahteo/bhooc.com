// import Head from 'next/head'
import Layout from '../components/Layout'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import type { Post } from '../lib/posts'
// import { getSortedPostsData } from '../lib/posts'



//statically generated
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default function Home(): JSX.Element {
// export default function Home({ allPostsData }: {
//   allPostsData: Array<Post>
// }): JSX.Element {
  return (
    <Layout>
      {/* //Todo: setup head (aka page titles) */}
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      {/* <section className={utilStyles.headingMd}>
        <p>Blurby mcBlurb Blurbity Blurbing</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}

      {/* <!-- Features --> */}
      <section id="features">
        <div className="container">
          <header>
            <h2>Gentlemen, behold! This is <strong>Strongly Typed</strong>!</h2>
          </header>
          <div className="row aln-center">
            <div className="col-4 col-6-medium col-12-small">

              {/* <!-- Feature --> */}
              <section>
                <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                <header>
                  <h3>Okay, so what is this?</h3>
                </header>
                <p>This is <strong>Strongly Typed</strong>, a free, fully responsive site template
										by <a href="http://html5up.net">HTML5 UP</a>. Free for personal and commercial use under the
                <a href="http://html5up.net/license">CCA 3.0 license</a>.</p>
              </section>

            </div>
            <div className="col-4 col-6-medium col-12-small">

              {/* <!-- Feature --> */}
              <section>
                <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                <header>
                  <h3>Nice! What is HTML5 UP?</h3>
                </header>
                <p><a href="http://html5up.net">HTML5 UP</a> is a side project of <a href="http://twitter.com/ajlkn">AJ’s</a> (= me).
										I started it as a way to both test my responsive tools and sharpen up my coding
										and design skills a bit.</p>
              </section>

            </div>
            <div className="col-4 col-6-medium col-12-small">

              {/* <!-- Feature --> */}
              <section>
                <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                <header>
                  <h3>What's this built with?</h3>
                </header>
                <p><strong>Responsive Tools</strong> is a simple set of tools for building responsive
										sites and apps. All of my templates at <a href="http://html5up.net">HTML5 UP</a> are built using these tools.</p>
              </section>

            </div>
            <div className="col-12">
              <ul className="actions">
                <li><a href="#" className="button icon solid fa-file">Tell Me More</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner --> */}
      <section id="banner">
        <div className="container">
          <h2>No Fake Anything!</h2>
          <p>The freshest and best single-sourced olive oils and balsamic vinegars in the world!</p>
        </div>
      </section>

      {/* <!-- Main --> */}
      <section id="main">
        <div className="container">
          <div className="row">

            {/* <!-- Content --> */}
            <div id="content" className="col-8 col-12-medium">

              {/* <!-- Post --> */}
              <article className="box post">
                <header>
                  <h2><a href="#">I don’t want to say <strong>it’s the aliens</strong> ...<br />
												but it’s the aliens.</a></h2>
                </header>
                <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                <h3>I mean isn't it possible?</h3>
                <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
											ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
											sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
											in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
											magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
											consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
											justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
											mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
											Curabitur leo nibh, rutrum eu malesuada in tristique.</p>
                <ul className="actions">
                  <li><a href="#" className="button icon solid fa-file">Continue Reading</a></li>
                </ul>
              </article>

              {/* <!-- Post --> */}
              <article className="box post">
                <header>
                  <h2><a href="#">By the way, many thanks to <strong>regularjane</strong>
												for these awesome demo photos</a></h2>
                </header>
                <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
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
                      <a href="#" className="image left"><img src="images/pic06.jpg" alt="" /></a>
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
                      <a href="#" className="image left"><img src="images/pic07.jpg" alt="" /></a>
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
    </Layout>
  )
}