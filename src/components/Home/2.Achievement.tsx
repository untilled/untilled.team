import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

const Page = (props: Props) => {
  return (
    <Wrapper className="">
      <Middle>
        <div className="container">
          <h2>언틸드는 끊임없이 성장하고 있어요</h2>
          <BoxList>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </BoxList>
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
  height: calc(100vh - 100px);
  ${mobile} {
    height: fit-content;
  }
`
const Middle = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #212529;
  padding-top: 100px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
  }
`

const BoxList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`
const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #cecece;
  border-radius: 15px;
`

export default Page
