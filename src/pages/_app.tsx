import { globalStyles } from 'styles/globals'
import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import Layout from 'components/_base/Layout'
import Head from 'next/head'
import Cursor from 'components/_shared/Cursor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Untilled.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Cursor />
    </RecoilRoot>
  )
}

export default MyApp
