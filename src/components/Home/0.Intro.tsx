import styled from '@emotion/styled'
import React, { useState } from 'react'

type Props = {}

const words = ['Developer🧑‍💻', 'Designer👨‍🎨', 'Product🤍', 'World🌏']

const Page = (props: Props) => {
  const [count, setCount] = useState(0)
  return (
    <Wrapper className="">
      <div className="container">
        <div>We are Untilled.</div>
        <div>
          We are <br />
          developing <br />
          <WordList>
            {words.map((word, idx) => (
              <Word key={idx}>{word}</Word>
            ))}
          </WordList>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 5rem;
    font-weight: 600;
    padding: 100px 0px;
    width: 100%;
  }
`

const WordList = styled.div`
  display: flex;
  flex-direction: column;
  height: 116px;
  overflow: hidden;
  & > div:first-child {
    animation: show 5s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -348px;
    }
    24% {
      margin-top: -348px;
    }
    25% {
      margin-top: -232px;
    }
    49% {
      margin-top: -232px;
    }
    50% {
      margin-top: -116px;
    }
    74% {
      margin-top: -116px;
    }
    75% {
      margin-top: -116px;
    }
    99% {
      margin-top: -116px;
    }
    100% {
      margin-top: -348px;
    }
  }
`

const Word = styled.div`
  display: inline-block;
  /* background-color: white; */
  /* color: black; */
`

export default Page
