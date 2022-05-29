import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import Header from 'components/_shared/Header'
import WordSlide from 'components/_shared/WordSlider'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const handleClick: React.MouseEventHandler<Element> = () => {
    router.push('/contact')
  }

  return (
    <Wrapper>
      <Title>
        <h1>프로젝트 혼자 할 순 없잖아요?</h1>
        <Content className="container">
          <h1>언틸드와 함께 프로젝트를 만들어 보세요.</h1>
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
      <ContactButton className="container" color="white" onClick={handleClick}>
        문의하기
      </ContactButton>
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
  justify-content: space-between;
  overflow: scroll;
  padding-bottom: 150px;
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`
const ContactButton = styled(Button)`
  padding: 15px 90px;
`

export default Contact
