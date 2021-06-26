import '../styles/assets/sass/main.scss'
import '../components/Slideshow.module.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { ShopifyProvider } from '../services/shopify'

function MyApp({ Component, pageProps }: AppProps) : JSX.Element {
  return (
    <ShopifyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopifyProvider>
  )
}
export default MyApp
