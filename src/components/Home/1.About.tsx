import styled from '@emotion/styled'
import React from 'react'

type Props = {}
// 발전적인 서비스를 만들며 발전하고자 합니다.
// 단순한 토이 프로젝트를 만드는 팀이 아닙니다.
const About = (props: Props) => {
  return (
    <Wrapper>
      <div className="container">
        {/* <h1>언틸드는 누구나 참여할 수 있는 개발팀입니다.</h1> */}
        <h1>발전적인 서비스를 만들며 발전하고자 합니다.</h1>
        <h1></h1>
        {/* <h1>Developing Developers</h1> */}
      </div>
    </Wrapper>
  )
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
