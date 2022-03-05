import styled from '@emotion/styled'
import React from 'react'

type Props = {}
// 발전적인 서비스를 만들며 발전하고자 합니다.
// 단순한 토이 프로젝트를 만드는 팀이 아닙니다.

// 업계 최대 크기의 사옥 (in gather town)
// 업계 최대 유연 근무제 (0~24hours)
// 업계 최소 급여 지원 (0~0원)
const About = (props: Props) => {
  return (
    <Wrapper>
      <Middle>
        <div className="container">
          <div>
            <h1>IT 플랫폼 개발 모임 언틸드입니다</h1>
            <h1>발전적인 플랫폼을 만들며 발전하고자 합니다.</h1>
            {/* <h1>Developing Developers</h1> */}
          </div>
          <h1>Archivement</h1>
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
  height: 100vh;
`

const Middle = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: #212529;
  padding-top: 100px;
  height: 100%;
  height: 100vh;
  & > div {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    & > h1 {
      border-bottom: 5px solid white;
    }
  }
`

export default About
