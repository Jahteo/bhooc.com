import Head from 'next/head'
import Layout from '../components/layout'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

//statically generated
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
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

<section id="header">
					<div className="container">

						{/* <!-- Logo --> */}
							<h1 id="logo"><a href="index.html">Strongly Typed</a></h1>
							<p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>

						{/* <!-- Nav --> */}
							<nav id="nav">
								<ul>
									<li><a className="icon solid fa-home" href="index.html"><span>Introduction</span></a></li>
									<li>
										<a href="#" className="icon fa-chart-bar"><span>Dropdown</span></a>
										<ul>
											<li><a href="#">Lorem ipsum dolor</a></li>
											<li><a href="#">Magna phasellus</a></li>
											<li><a href="#">Etiam dolore nisl</a></li>
											<li>
												<a href="#">Phasellus consequat</a>
												<ul>
													<li><a href="#">Magna phasellus</a></li>
													<li><a href="#">Etiam dolore nisl</a></li>
													<li><a href="#">Phasellus consequat</a></li>
												</ul>
											</li>
											<li><a href="#">Veroeros feugiat</a></li>
										</ul>
									</li>
									<li><a className="icon solid fa-cog" href="left-sidebar.html"><span>Left Sidebar</span></a></li>
									<li><a className="icon solid fa-retweet" href="right-sidebar.html"><span>Right Sidebar</span></a></li>
									<li><a className="icon solid fa-sitemap" href="no-sidebar.html"><span>No Sidebar</span></a></li>
								</ul>
							</nav>

					</div>
				</section>

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
						<p>Use this space for <strong>profound thoughts</strong>.<br />
						Or an enormous ad. Whatever.</p>
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

			{/* <!-- Footer --> */}
				<section id="footer">
					<div className="container">
						<header>
							<h2>Questions or comments? <strong>Get in touch:</strong></h2>
						</header>
						<div className="row">
							<div className="col-6 col-12-medium">
								<section>
									<form method="post" action="#">
										<div className="row gtr-50">
											<div className="col-6 col-12-small">
												<input name="name" placeholder="Name" type="text" />
											</div>
											<div className="col-6 col-12-small">
												<input name="email" placeholder="Email" type="text" />
											</div>
											<div className="col-12">
												<textarea name="message" placeholder="Message"></textarea>
											</div>
											<div className="col-12">
												<a href="#" className="form-button-submit button icon solid fa-envelope">Send Message</a>
											</div>
										</div>
									</form>
								</section>
							</div>
							<div className="col-6 col-12-medium">
								<section>
									<p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
									mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
									leo nibh, rutrum eu malesuada.</p>
									<div className="row">
										<div className="col-6 col-12-small">
											<ul className="icons">
												<li className="icon solid fa-home">
													1234 Somewhere Road<br />
													Nashville, TN 00000<br />
													USA
												</li>
												<li className="icon solid fa-phone">
													(000) 000-0000
												</li>
												<li className="icon solid fa-envelope">
													<a href="#">info@untitled.tld</a>
												</li>
											</ul>
										</div>
										<div className="col-6 col-12-small">
											<ul className="icons">
												<li className="icon brands fa-twitter">
													<a href="#">@untitled</a>
												</li>
												<li className="icon brands fa-instagram">
													<a href="#">instagram.com/untitled</a>
												</li>
												<li className="icon brands fa-dribbble">
													<a href="#">dribbble.com/untitled</a>
												</li>
												<li className="icon brands fa-facebook-f">
													<a href="#">facebook.com/untitled</a>
												</li>
											</ul>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
					<div id="copyright" className="container">
						<ul className="links">
							<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</div>
				</section>
    </Layout>
  )
}