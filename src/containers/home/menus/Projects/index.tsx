import * as Styled from './index.styled'
import React from 'react'

const Projects: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title className="container">
        <h1>우리가 만들어온 것들</h1>
        <h3>발전적인 사람으로부터 발전적인 서비스가 나온다고 믿고 있어요.</h3>
      </Styled.Title>
      <Styled.List>아직 프로젝트가 없어요!</Styled.List>
      <Styled.BtnBox>
        <Styled.MoreButton className="cursorify-pointer" href="/projects">
          더 보기
        </Styled.MoreButton>
      </Styled.BtnBox>
    </Styled.Wrapper>
  )
}

export default Projects
