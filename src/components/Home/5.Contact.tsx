import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import WordSlide from 'components/_shared/WordSlide'
import React from 'react'

type Props = {}

const words = ['🙋‍♂️', '🙋🏼‍♀️', '👨🏼‍💻', '🧙🏼‍♂️']

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
          <h3 className="container">
            성장에 대한 관심과 열정이 있는 분은 남녀노소 국적, 나이불문 누구나
            참여할 수 있어요!
          </h3>
        </Content>
        <br />
        {/* <h1>Developing Developers</h1> */}
      </Title>
      {/* <h1 className="container">
        프로젝트 혼자 할 순 없잖아요? <br />
      </h1>
      <Content className="container">
        <h1>언틸드와 함께 프로젝트를 시작해보세요</h1>
        <h1>
          <WordSlide words={words} height={80} />
        </h1>
      </Content> */}

      {/* <Button>지원하기</Button> */}
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
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: fit-content;
`

export default Contact
