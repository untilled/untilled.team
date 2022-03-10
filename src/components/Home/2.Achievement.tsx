import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

const Page = (props: Props) => {
  return (
    <Wrapper className="">
      <Middle>
        <div className="container">
          <Title>
            <h1>언틸드는 끊임없이 성장하고 있어요</h1>
            <h3>팀 언틸드에서는 다양한 프로젝트를 만들고, 개발해요.</h3>
            <br />
            {/* <h1>Developing Developers</h1> */}
          </Title>
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
  color: black;
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
  /* background-color: #212529; */
  background-color: #e9ecef;
  padding-top: 80px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    gap: 60px;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
  }
  h3 {
    color: #495057;
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
