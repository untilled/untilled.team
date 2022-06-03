import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

//멤버수, 프로젝트수, 시작한지, 추천사?
const Archivement = (props: Props) => {
  return (
    <Wrapper>
      <Title>
        <h1>함께 성장해온 언틸드</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: calc(100vh - 100px);
  padding-top: 80px;
  ${mobile} {
    height: fit-content;
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
    color: #ced4da;
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
