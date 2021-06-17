import Head from 'next/head'
import Slideshow from '../components/Slideshow'
import RecentRecipes from '../components/RecentRecipes'

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

      {/* <Slideshow ImgSlide={imgSlides}/> */}
      <Slideshow/>

      <RecentRecipes/>

      <section id="banner">
        <div className="container">
          <p>The freshest and best single-sourced olive oils and balsamic vinegars in the world!</p>
          <a href="/about" className="button icon solid">Learn More</a>
        </div>
      </section>
    </>
  )
}