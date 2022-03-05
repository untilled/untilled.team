import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <Wrapper className="">
      <div className="container">
        <h1>언틸드는 끊임없이 성장하고 있어요</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`

export default Page
