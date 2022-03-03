import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

const Page = (props: Props) => {
  return (
    <Wrapper>
      <TitleBox className="container">
        <div>
          <br />
          Hi there, We{`'`}re Untilled.
          <br />
          <br />
        </div>
        <Content>
          <div>We{`'`}re developing</div>
          <WordList>
            {words.map((word, idx) => (
              <Word key={idx}>{word}</Word>
            ))}
          </WordList>
        </Content>
      </TitleBox>
      <Middle className="container">{/* <h1>About</h1> */}</Middle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* background-color: #212529; */
`

const TitleBox = styled.div`
  width: 100%;
  padding: 100px 0px;
  font-size: 55px;
  font-weight: 600;
  /* border-radius: 10px;
  border: 1px; */
`

const Content = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`

const WordList = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  overflow: hidden;
  & > div:first-child {
    animation: show 10s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -240px;
    }
    24% {
      margin-top: -240px;
    }
    25% {
      margin-top: -160px;
    }
    49% {
      margin-top: -160px;
    }
    50% {
      margin-top: -80px;
    }
    74% {
      margin-top: -80px;
    }
    75% {
      margin-top: 0px;
    }
    99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -240px;
    }
  }
`

const Word = styled.div`
  width: fit-content;
  height: 116px;
  background-color: #212529;
  color: white;
`

const Middle = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: #212529;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  padding-top: 50px;
`

export default Page
