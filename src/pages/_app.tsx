import { globalStyles } from 'styles/globals'
import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import Layout from 'components/_base/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
