import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import Header from 'components/_shared/Header'
import WordSlide from 'components/_shared/WordSlide'
import React from 'react'

type Props = {}

const words = ['🙋‍♂️', '🙋🏼‍♀️', '👨🏼‍💻', '🧙🏼‍♂️']

const questions = [
  {
    id: 0,
    question: 'What is your github nickname?',
    answer: '',
  },
  {
    id: 1,
    question: 'What is your email?',
    answer: '',
  },
]

const Contact = (props: Props) => {
  return (
    <Wrapper>
      <Title>
        <h1>프로젝트 혼자 할 순 없잖아요?</h1>
        <Content className="container">
          <h1>언틸드와 함께 프로젝트를 시작해보세요</h1>
          <h1>
            <WordSlide words={words} height={80} />
          </h1>
        </Content>
        <h3 className="container">
          성장에 대한 관심만 있다면 누구든지 참여할 수 있어요.
        </h3>
        <h3 className="container">
          저희가 그 안에서 열정과 즐거움을 찾아드릴게요!
        </h3>
        <br />
        {/* <h1>Developing Developers</h1> */}
      </Title>
      <div></div>
      <ConsoleWrapper className="container">
        <Header title="" height={40} />
        <div className="container"></div>
      </ConsoleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 900;
    font-size: 40px;
  }
  h3 {
    color: #ced4da;
    font-weight: 500;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: fit-content;
`

const ConsoleWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #212529;
  padding: 0px;
  border-radius: 30px;
  border-radius: 30px;
  margin-bottom: 30px;
`

export default Contact
