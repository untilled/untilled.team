import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { mobile } from 'styles/media'
import imageLoader from 'libs/loader'
import Header from 'components/_shared/Header'
type Props = {}

// 기획자 개발자 디자이너 한줄씩 토스ref

// 만드는 사람을 위한, 사용하는 사람을 위한 프로젝트 개발
const About = (props: Props) => {
  return (
    <Wrapper>
      <Browser>
        <div className="container">
          <Title>
            <h1>모두의 발전을 위해서, 모두의 성장을 위해서</h1>
            <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
            <h3>팀 언틸드는 모든 이들의 성장을 돕고 있어요.</h3>
            {/* <h3>팀 언틸드는 다양한 프로젝트를 만들고 개발해요.</h3> */}
            {/* <h3>기획부터 개발 그리고 서비스까지의 모든 과정을 함께해요.</h3> */}
          </Title>

          {/* <CardList>
            <Card>
              <Header title="🐽pigma" height={40} />
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
              <ContentBox>최대 규모의 오피스에서 함께하는 개발</ContentBox>
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
          </CardList> */}
        </div>
      </Browser>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: black;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;

  ${mobile} {
    height: fit-content;
  }
`

const Browser = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: #e9ecef;
  padding-top: 80px;
  height: 100%;
  & > div {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 60px;
    & > div {
      font-size: 0.9rem;
    }
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
  }

  h3 {
    color: #495057;
    font-weight: 500;
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
  background-color: #dee2e6;
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
