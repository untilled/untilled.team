import * as Styled from './index.styled'
import React from 'react'
import Gradient from 'components/Gradient'
import Button from 'components/Button'

const Contact: React.FC = () => {
  return (
    <Styled.Wrapper>
      {/* <BackgroundVideos data={videos} /> */}
      <Gradient />
      <Styled.Content className="container">
        <Styled.Title>
          <h1>프로젝트 혼자 할 순 없잖아요?</h1>
          <h1>언틸드와 함께 프로젝트를 진행해 보세요</h1>
        </Styled.Title>
        <Styled.ContentBottom>
          <Button color="white" href="https://open.kakao.com/o/sv92htLe">
            Contact
          </Button>
          <Button color="gray_2">Share</Button>
        </Styled.ContentBottom>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Contact
