import styled from '@emotion/styled'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: any
}

export default function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  min-height: 100vh;
`
