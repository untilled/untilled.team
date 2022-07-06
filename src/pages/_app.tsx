import { globalStyles } from 'styles/globals'
import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import Layout from 'components/_base/Layout'
import Head from 'next/head'
import ChannelService from 'libs/channelService'
import { NextPage } from 'next'

if (typeof window === 'object') {
  const channelService = new ChannelService()
  // channelService.boot({
  //   pluginKey: process.env.NEXT_PUBLIC_CHANNEL_KEY,
  // })
}

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
