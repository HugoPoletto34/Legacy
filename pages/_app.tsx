import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/utils/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
