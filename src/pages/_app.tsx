import { globalStyles } from 'styles/globals'
import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
