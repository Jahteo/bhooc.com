import Link from 'next/link'
// import Image from 'next/image'
import Head from 'next/head'
// import Layout from '../../components/Layout'

export default function FirstPost (): JSX.Element {
  return (
    <>
      <Head>
        <title>First Post</title>

      </Head>

      <h1> First Post Test here</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      {/* <Image
    src="/images/profile.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  /> */}
    </>
  )
}