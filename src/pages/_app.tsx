import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import { Global } from '@emotion/react'

import { globalStyles } from 'styles/globals'
import Layout from 'containers/base'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Team Untilled</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
