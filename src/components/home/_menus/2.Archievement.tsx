import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

//멤버수, 프로젝트수, 시작한지
const Archivement = (props: Props) => {
  return (
    <Wrapper>
      <Title>
        <h1>함께 성장해온 언틸드📈</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </Title>
      <CardWrapper className="container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardWrapper>
    </Wrapper>
  )
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 40px;
  width: 100%;
`

const Card = styled.div`
  width: 100%;
  height: 300px;
  background-color: #212529;
  border-radius: 15px;
`

const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 80px;
  ${mobile} {
    height: fit-content;
  }
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  gap: 40px;
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

export default Archivement
