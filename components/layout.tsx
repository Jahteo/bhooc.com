// import styles from './layout.module.css'
import Image from "next/image"
import Link from "next/link"
import React from "react"

// init layout if using styles.containter from layout.module.css = NEXTJS REFERENCE
// export default function Layout({ children }: any) {
//   return <div className={styles.container}>{children}</div>
// }

//fast setup for a blank layout - TEMP
// export default function Layout({ children }: any) {
//   return <div>{children}</div>
// }

//statically generated - REFERENCE
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

const isBrowser = typeof document !== 'undefined'

// const navList = [
//   {
//     to: '/products',
//     label: 'Shop',
//     nest: [
//       {
//         to: '/oils',
//         label: 'Oils',
//         // nest: 1,
//       },
//       {
//         to: '/vinegars',
//         label: 'Vinegars',
//         // nest: 1,
//       },
//     ],
//   },
//   {
//     to: '/gifts',
//     label: 'Gifts',
//     // nest: 0,
//   },
//   {
//     to: '/recipes',
//     label: 'Recipes',
//     // nest: 0,
//   },
// ]

const navList = [
  {
    to: '/products',
    label: 'Shop',
    nest: 0,
  },
  {
    to: '/oils',
    label: 'Oils',
    nest: 1,
  },
  {
    to: '/vinegars',
    label: 'Vinegars',
    nest: 1,
  },
  {
    to: '/gifts',
    label: 'Gifts',
    nest: 0,
  },
  {
    to: '/recipes',
    label: 'Recipes',
    nest: 0,
  },
]

const learnMoreLinks = [
  {
    to: '/about',
    label: 'About Us',
    nest: 0,
  },
  {
    to: '/faq',
    label: 'Faq',
    nest: 0,
  },
  {
    to: '/shipping',
    label: 'Shipping',
    nest: 0,
  },
]

const openSidebar = () => {
  // document.body.classList.add('navPanel-visible')
  if (document.body.classList.contains('navPanel-visible')) {
    return
  }
  setTimeout(() => { document.body.classList.add('navPanel-visible') }, 0)
}

function closeSidebar() {
  if (!isBrowser) return
  if (document.body.classList.contains('navPanel-visible')) {
    document.body.classList.remove('navPanel-visible')
  }
}

function buildLink(link: {
  //Todo: Figure out how to reshape NavList and nest dropdown menu
  to: string,
  label: string,
  nest: number,
}) {
  return <li><Link href={link.to}>

    <a className="icon ">
      <span>{link.label}</span>
    </a>
  </Link>
  </li>
}

function buildSideLink(link: {
  to: string,
  label: string,
  nest: number,
}) {
  return (
    <Link href={link.to}>
      <a className={`link depth-${link.nest}`}>
        <span className={`indent-${link.nest}`} />
        {link.label}
      </a>
    </Link>
  )
}

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  // useEffect(() => {
  //   closeSidebar()
  // })

  return (
    // Setup Mobile Menu
    <div onClick={() => closeSidebar()}>
      <div id="titleBar">
        <i onClick={() => openSidebar()} className="toggle"></i>
      </div>
      <div id="navPanel">
        <nav>
          {navList.map((link) => {
            return buildSideLink(link)
          })}
        </nav>
      </div>

      <section id="header">
        <div className="container">
          <h1>
            <a href="/">Bighorn Olive Oil</a>
          </h1>
          {/* <p>The freshest and best single-sourced olive oils and balsamic vinegars in the world!</p> */}
          <ul className="alt">
            <li>
              <a className="icon alt solid fas fa-search">
                <div className="label">Search</div>
              </a>
            </li>
            <li>
              <a className="icon alt solid fas fa-user">
                <div className="label">My Account</div>
              </a>
            </li>
            <li>
              <a className="icon alt solid fas fa-shopping-cart">
                <div className="label">Shopping Cart</div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- Nav --> */}
      <nav id="nav">
        <ul>
          {navList.map((link) => {
            return buildLink(link)
          })}
        </ul>
      </nav>

      {/* <!-- Main --> */}
      {children}

      {/* <!-- Footer --> */}
      <section id="footer">
        <div className="container">
          <header>
            <h2>
              Questions or comments? <strong>Call us at (775) 870-1500.</strong>{" "}
            </h2>
          </header>
          <div className="row">
            <div className="col-6 col-12-medium">
              <section>
                {/* <header>
                    <h2>Gentlemen, behold! This is <strong>Strongly Typed</strong>!</h2>
                  </header> */}
                <h3>Partner Locations</h3>
                <div className="container">
                  <div className="row aln-center">
                    <div className="col-4 col-6-medium col-12-small">
                      <section>
                        <Image
                          priority
                          src="/images/BHLogo.jpeg"
                          // className={utilStyles.borderCircle}
                          height={144}
                          width={144}
                          alt="Bighorn Logo"
                        />
                        {/* <header>
                          <h3>Reno, NV</h3>
                        </header> */}
                        <p>
                          3888 Mayberry Dr <br />
                          Reno, NV <br />
                          <a href="tel:1-775-870-1500">(775) 870-1500</a>
                          <br />

                          {/* // Todo: fix column spacing so this never overlaps */}
                          <a href="mailto:BHOOCMedia@gmail.com">
                            bhoocmedia@gmail.com
                          </a>
                          <br/>
                          <a
                            href="https://bhooc.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            BHOOC.com
                          </a>
                        </p>

                        <p>
                          M-Sat 10am-6pm
                          <br />
                          Sun Closed
                        </p>

                        <ul className="alt">
                          <li>
                            <a
                              className="icon alt brands fa-facebook-f"
                              href="https://www.facebook.com/bighornoliveoilcompany"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="label">Facebook</div>
                            </a>
                          </li>
                          <li >
                            <a
                              className="icon alt brands fa-instagram"
                              href="https://www.instagram.com/bighornoliveoilcompany/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="label">Instagram</div>
                            </a>
                          </li>
                        </ul>

                      </section>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <section>
                        <Image
                          priority
                          src="/images/BHLogo.jpeg"
                          // className={utilStyles.borderCircle}
                          height={144}
                          width={144}
                          // alt={name}
                        />
                        {/* <header>
                          <h3>Port Angeles, WA</h3>
                        </header> */}
                        <p>
                          109 N. Oak St <br />
                          Port Angeles, WA
                          <br />
                          <a href="tel:1-360-477-4171">(360) 477-4171</a>
                          <br />
                          <a href="mailto:foghornpa@gmail.com">
                            foghornpa@gmail.com
                          </a>
                          <br />
                          <a
                            href="http://pafoghorn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            pafoghorn.com
                          </a>
                        </p>

                        <p>
                          M-Sat 10am-5pm
                          <br />
                          Sun Closed
                        </p>

                        <ul className="alt">
                          <li>
                            <a
                              className="icon alt brands fa-facebook-f"
                              href="https://www.facebook.com/foghornoliveoil/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="label">Facebook</div>
                            </a>
                          </li>
                          {/* <li >
                              <a
                                className="icon alt brands fa-instagram"
                                href="https://www.instagram.com/bighornoliveoilcompany/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="label">Instagram</div>
                              </a>
                            </li> */}
                        </ul>
                      </section>
                    </div>
                    {/* <div className="col-12">
								<ul className="actions">
									<li><a href="#" className="button icon solid fa-file">Tell Me More</a></li>
								</ul>
							</div> */}
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="col-6 col-12-medium">
              <section>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <header><h3>Learn More</h3></header>
                    <ul className="no-bullets">
                      {learnMoreLinks.map((link) => {
                        return <li>{buildSideLink(link)}</li>
                      })}
                    </ul>
                  </div>
                  <div className="col-6 col-12-small">
                    <header><h3>Navigate</h3></header>
                    <ul className="no-bullets">
                      {navList.map((link) => {
                        return <li>{buildSideLink(link)}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div id="copyright" className="container">
          <ul className="links">
            <li>&copy; Untitled. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
