import styled from '@emotion/styled'
import WordSlide from 'components/_shared/WordSlide'
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
          <WordSlide words={words} background height={80} />
        </Content>
      </TitleBox>
      <Line />
      <Middle>
        <div className="container">
          <h1>About</h1>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Line = styled.div`
  width: 100%;
  /* border-top: 3px solid white; */
`

const Middle = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: #212529;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 30px;
  h1 {
    border-bottom: 5px solid white;
  }
`

export default Page
