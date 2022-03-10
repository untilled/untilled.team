import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { mobile } from 'styles/media'
import imageLoader from 'libs/loader'
import Header from 'components/_shared/Header'
type Props = {}
// 발전적인 서비스를 만들며 발전하고자 합니다.
// 단순한 토이 프로젝트를 만드는 팀이 아닙니다.

// 각각
// 업계 최대 크기의 사옥 gather 타운 창처럼
// 업계 최대 유연 근무제 slack 메신저처럼
// 업계 최소 급여 지원 (0~0원)
const About = (props: Props) => {
  return (
    <Wrapper>
      <Middle>
        <div className="container">
          <div>
            <h2>
              IT 플랫폼 개발 모임 언틸드입니다.
              <br />
              발전적인 서비스를 만들며 성장하고자 합니다.
              {/* <br />
              단순한 토이프로젝트를 만드는 게 아닌 기획부터 실제 서비스까지
              진행합니다. */}
            </h2>
            <div>
              단순한 토이프로젝트가 아닌 기획부터 설계, 그리고 실제 운영까지
              진행합니다.
            </div>
            <div>
              다양한 개발 활동을 진행하며, 성장을 위해 끊임없이 노력하고
              있습니다.
            </div>
            <br />
            {/* <h1>Developing Developers</h1> */}
          </div>
          <CardList>
            <Card>
              <Header title="😺Cathub" height={40} />
              <ImgBox></ImgBox>
              <ContentBox>다양한 개발 프로젝트 진행</ContentBox>
            </Card>
            <Card>
              <Header title="🍇Together" height={40} color="#333a64" />
              <ImgBox>
                <Image
                  layout="fill"
                  src="About/gather.jpg"
                  loader={imageLoader}
                  alt=""
                />
              </ImgBox>
              <ContentBox>팀원과 함께하는 최대 규모의 오피스 제공</ContentBox>
            </Card>
            <Card>
              <Header title="Sleck" height={40} color="#350d36" />
              <MsgList>
                <MsgBox>저 오늘 코딩 안하겠습니다.</MsgBox>
                <MsgBox>아무도 없나요?</MsgBox>
                <MsgBox>저기요?</MsgBox>
                <MsgBox>....</MsgBox>
              </MsgList>
              <ContentBox>업계 최대 유연 근무제 도입</ContentBox>
            </Card>
          </CardList>
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

  ${mobile} {
    height: fit-content;
  }
`

const Middle = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: #212529;
  padding-top: 100px;
  height: 100%;
  & > div {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    & > h1 {
      border-bottom: 5px solid white;
    }
    & > div {
      font-size: 0.9rem;
    }
  }
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  ${mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Card = styled.div`
  background-color: white;
  height: fit-content;
  border-radius: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`
const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 250px;
  background-color: #cecece;
`

const MsgList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  height: 250px;
`
const MsgBox = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 15px;
  border-bottom-right-radius: 0px;
  padding: 10px;
`

const ContentBox = styled.div`
  font-size: 0.9rem;
  padding-top: 10px;
`

export default About
