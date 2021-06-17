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


export default function products({ children }: { children: React.ReactNode }): JSX.Element {
  // useEffect(() => {
  //   closeSidebar()
  // })

  return (
    <div >
    SHOP HERE
    </div>
  )
}
