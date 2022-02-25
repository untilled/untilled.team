import styled from '@emotion/styled'
import React from 'react'

type Props = {}

//언틸드는 다양한 개발 프로젝트를 전행하는
//프로젝트를 혼자서 할 순 없잖아요?
//
const About = (props: Props) => {
  return <Wrapper>About</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  & > div {
    height: 50vh;
    /* background-color: #8d8d8d; */
    width: 100%;
  }
`

export default About
