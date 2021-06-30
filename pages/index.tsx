import Head from 'next/head'
import Slideshow from '../components/Slideshow'
import RecentRecipes from '../components/RecentRecipes'
import allRecipes from '../data/recipes'
import { Product } from '../types/Product'
// import GarlicOliveOil from './product/garlic-olive-oil2'
import allProducts from '../data/products'
import { ProductSlugs } from '../types/ProductSlugs'
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
const imgSlides = [
  {url: 'https://source.unsplash.com/1600x900/?olive,oil', header: "What's for dinner?", text: "Check out all our recipes"},
  {url: 'https://source.unsplash.com/1600x900/?olive,tree', header: "Location, Location, Location", text: "Where do our olive oils come from?"},
  {url: 'https://source.unsplash.com/1600x900/?grapes', header: "Grapes & Barrels", text: "Baslamic making 101"}
];

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* <Slideshow/> */}
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

const pairings: [ProductSlugs[]] = [
  [
    "garlic-olive-oil",
  ]
]