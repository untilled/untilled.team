import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from 'components/Layout'
import PreloadImage from 'hooks/PreloadImage'
import { globalStyles } from 'styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Untilled.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Global styles={globalStyles} />
      <PreloadImage />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
