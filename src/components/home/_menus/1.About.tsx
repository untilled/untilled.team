import styled from '@emotion/styled'
import imageLoader from 'libs/loader'
import Image from 'next/image'
import React from 'react'
import { mobile } from 'styles/media'
type Props = {}

// 박스 6개
// Global Team
// Global Service
// Developing Delvelopers / Designers / Worlds / Products

const About = (props: Props) => {
  return (
    <Wrapper>
      <Title className="container">
        {/* <h1>About</h1> */}
        <h1>모두의 발전을 위해서, 모두의 성장을 위해서</h1>
        <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
        <h3>팀 언틸드는 성장을 원하는 모두를 돕고 있어요.</h3>
      </Title>
      <CardWrapper className="container">
        <div>Service</div>
        <div>Team</div>
        <div>Global</div>
      </CardWrapper>
      <LogoLine></LogoLine>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 80px 0;

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  /* font-family: 'Prompt', sans-serif; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    /* font-size: 4rem; */
    /* font-style: italic; */
  }

  h3 {
    color: #ced4da;
    font-weight: 500;
  }
`

const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-grow: 1;
  width: 100%;
  height: fit-content;
  align-items: center;

  & > div {
    width: 100%;
    background-color: #212529;
    /* border-radius: 15px; */
    height: 300px;
    color: #212529;
  }
  ${mobile} {
    flex-direction: column;
    height: fit-content;
  }
`

const LogoLine = styled.div`
  /* background-color: #212529; */
  color: #adb5bd;
  padding: 10px 0;
  font-family: 'Prompt', sans-serif;
  height: 150px;
  position: relative;
  & > div {
    display: block;
    width: 200%;
    position: absolute;
    overflow: hidden;
    font-size: 3rem;
    font-weight: 600;

    /* font-style: italic; */
    animation: marquee 30s linear infinite;
    @keyframes marquee {
      0% {
        left: 0;
      }
      100% {
        left: -100%;
      }
    }
  }
`



export default About
