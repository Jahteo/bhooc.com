import Head from 'next/head'
import Slideshow from '../components/Slideshow'
import RecentRecipes from '../components/RecentRecipes'
import allRecipes from '../data/recipes'
// import { Product } from '../types/Product'
// import allProducts from '../data/products'
// import { ProductSlugs } from '../types/ProductSlugs'
import store from '../data/stores'


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
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Slideshow imgSlides={store.bannerSlides}/>

      <RecentRecipes recipes={allRecipes}/>
      <section id="features">
        <div className="container">
          <header>
            <h2>Featured Pairings</h2>
          </header>
          <div className="row aln-center">
            <p>Coming Soon!</p>
          </div>
        </div>
      </section>
      {/* <FeaturedPairings pairings={pairings}/> */}
      {/* <ImageBar ImgList={pairings}/> */}


      <section id="banner">
        <div className="container">
          <p>The freshest and best single-sourced olive oils and balsamic vinegars in the world!</p>
          <a href="/about" className="button icon solid">Learn More</a>
        </div>
      </section>
    </>
  )
}
