import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <Wrapper className="">
      <Middle>
        <div className="container">
          <h2>언틸드는 끊임없이 성장하고 있어요</h2>
        </div>
      </Middle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-bottom: 100px;
`
const Middle = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: #212529;
  padding-top: 100px;
  height: 100%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export default Page
