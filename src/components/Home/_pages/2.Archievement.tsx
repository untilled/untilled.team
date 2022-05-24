import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

const Archivement = (props: Props) => {
  return (
    <Wrapper className="">
      <Browser>
        <div className="container">
          <Title>
            <h1>함께 성장해온 언틸드</h1>
            <h3>팀원들과 함께 끊임없이 성장해 나가고 있어요.</h3>
          </Title>
          <BoxList>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </BoxList>
        </div>
      </Browser>
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
const Browser = styled.div`
  max-width: 1280px;
  width: 100%;
  height: fit-content;
  min-height: 100%;
  margin: 0 auto;
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
    font-weight: 500;
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

export default Archivement