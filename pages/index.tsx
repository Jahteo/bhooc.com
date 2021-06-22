import Head from 'next/head'
import Slideshow from '../components/Slideshow'
// import RecentRecipes from '../components/RecentRecipes'
import ImageBar from '../components/ImageBar'

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

// const imgSlides = [
//   {url: 'https://source.unsplash.com/1600x900/?olive,oil', text: "Check out all our recipes"},
//   {url: 'https://source.unsplash.com/1600x900/?olive,tree', text: "Where do our olive oils come from?"},
//   {url: 'https://source.unsplash.com/1600x900/?grapes', text: "Baslamic making 101"}
// ];

export default function Home(): JSX.Element {
// export default function Home({ allPostsData }: {
//   allPostsData: Array<Post>
// }): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* <Slideshow ImgSlide={imgSlides}/> */}
      <Slideshow/>

      <ImageBar ImgList={recipes}/>
      <ImageBar ImgList={pairings}/>
      {/* <RecentRecipes/> */}

      <section id="banner">
        <div className="container">
          <p>The freshest and best single-sourced olive oils and balsamic vinegars in the world!</p>
          <a href="/about" className="button icon solid">Learn More</a>
        </div>
      </section>
    </>
  )
}

const recipes = [
  {
    header: "Recent Recipes",
    name: "Breadsticks",
    url: "/breadsticks",
    img: "https://source.unsplash.com/200x200/?bread",
    text: "Great for Friday with friends",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
  {
    header: "Recent Recipes",
    name: "Breadsticks",
    url: "/breadsticks",
    img: "https://source.unsplash.com/200x200/?bread",
    text: "Great for Friday with friends",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
  {
    header: "Recent Recipes",
    name: "Breadsticks",
    url: "/breadsticks",
    img: "https://source.unsplash.com/200x200/?bread",
    text: "Great for Friday with friends",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
  {
    header: "Recent Recipes",
    name: "Breadsticks",
    url: "/breadsticks",
    img: "https://source.unsplash.com/200x200/?bread",
    text: "Great for Friday with friends",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
]

const pairings = [
  {
    header: "Featured Pairings",
    name: "Garlic and Neopolitan Herb",
    url: "/Garlic and Neopolitan Herb",
    img: "https://source.unsplash.com/200x200/?garlic",
    text: "Bread Dipping and Steaks",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
  {
    header: "Featured Pairings",
    name: "Garlic and Neopolitan Herb",
    url: "/Garlic and Neopolitan Herb",
    img: "https://source.unsplash.com/200x200/?garlic",
    text: "Bread Dipping and Steaks",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
  {
    header: "Featured Pairings",
    name: "Garlic and Neopolitan Herb",
    url: "/Garlic and Neopolitan Herb",
    img: "https://source.unsplash.com/200x200/?garlic",
    text: "Bread Dipping and Steaks",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
  {
    header: "Featured Pairings",
    name: "Garlic and Neopolitan Herb",
    url: "/Garlic and Neopolitan Herb",
    img: "https://source.unsplash.com/200x200/?garlic",
    text: "Bread Dipping and Steaks",
    products: [
      "BHOOC EVOO",
      "Garlic Olive Oil"
    ]
  },
]