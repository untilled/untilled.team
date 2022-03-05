import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import WordSlide from 'components/_shared/WordSlide'
import React from 'react'

type Props = {}

const words = ['🙋‍♂️', '🙋🏼‍♀️', '👨🏼‍💻', '🧙🏼‍♂️']

const Contact = (props: Props) => {
  return (
    <Wrapper className="container">
      <h1>
        프로젝트 혼자 할 순 없잖아요? <br />
      </h1>
      <Content>
        <h1>언틸드와 함께 프로젝트를 시작해보세요</h1>
        <h1>
          <WordSlide words={words} height={80} />
        </h1>
      </Content>
      <h3>
        성장에 대한 관심과 열정이 있는 분은 남녀노소 국적, 나이불문 누구나
        참여할 수 있어요! <br />
        (고양이 키우시는 분 우대)
      </h3>
      <Button>지원하기</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 100px;
  h1 {
    margin: 0;
  }
`

const Content = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export default Contact
