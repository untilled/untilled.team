import styled from '@emotion/styled'
import React from 'react'
import Header from './Header'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 100vh;
`
const Main = styled.div``

export default Layout
