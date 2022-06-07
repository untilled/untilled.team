import styled from '@emotion/styled'
import imageLoader from 'libs/loader'
import Image from 'next/image'
import React, { useRef } from 'react'
import { mobile } from 'styles/media'
type Props = {}

// Developing Delvelopers / Designers / Worlds / Products

const images = [
  '/images/about/logo.png',
  '/images/about/logo1.png',
  '/images/about/logo2.png',
  '/images/about/logo3.png',
  '/images/about/logo4.png',
  '/images/about/logo5.png',
  '/images/about/logo6.png',
]

const About = (props: Props) => {
  const sliderItems = useRef<HTMLDivElement[]>([])

  return (
    <Wrapper>
      <Title className="container">
        {/* <h1>About</h1> */}
        <h1>모두의 발전을 위해서, 모두의 성장을 위해서 🎉</h1>
        <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
        <h3>팀 언틸드는 성장을 원하는 모두를 돕고 있어요.</h3>
      </Title>
      <ContentWrapper>
        <CardWrapper className="container">
          <Card>Service</Card>
          <Card>Team</Card>
          <Card>Global</Card>
        </CardWrapper>
        <CommentBox className="container"></CommentBox>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding: 80px 0px;
  overflow: scroll;
  ${mobile} {
    height: fit-content;
    padding-bottom: 0;
  }
`

const Title = styled.div`
  /* font-family: 'Prompt', sans-serif; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-bottom: 80px;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    font-size: 2.5rem;
  }

  h3 {
    color: #ced4da;
    font-weight: 500;
    font-size: 1.2rem;
  }

  ${mobile} {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`
const ContentWrapper = styled.div`
  height: fit-content;
`

const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
  height: fit-content;
  align-items: center;
  height: 300px;
  padding: 0;
  margin-bottom: 40px;
  ${mobile} {
    flex-direction: column;
    height: fit-content;
  }
`

const Card = styled.div`
  width: 100%;
  background-color: #212529;
  border-radius: 15px;
  height: 300px;
  color: #212529;
  ${mobile} {
    border-radius: 0;
  }
`

const CommentBox = styled.div`
  background-color: #212529;
  padding: 10px 0;
  height: 180px;
  width: 100%;
  border-radius: 15px;
  padding-bottom: 50px;
  ${mobile} {
    border-radius: 0px;
  }
`

export default About
