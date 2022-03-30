import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { mobile } from 'styles/media'
type Props = {}

// 팀원과 함께 협업하며 프로젝트 진행합니다.
// 다양한 배경의 팀원들과~

// 온라인으로 진행하는 다양한 개발 활동
// 모든 업무가 온라인으로 진행되는 시대에서, 온라인에서의 커뮤니티는 중요해요.

// 지역, 시간에 상관없이 언제, 어디서나, 누구든지
// 지역, 시간에 제약받지 않고 활동이 가능해요.

const About = (props: Props) => {
  return (
    <Wrapper>
      <Browser>
        <div className="container">
          <Title>
            <h1>모두의 발전을 위해서, 모두의 성장을 위해서</h1>
            <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
            <h3>팀 언틸드는 성장을 원하는 모든 이들을 돕고 있어요.</h3>
          </Title>
          <CardList>
            <Card>
              <Paint></Paint>
              <Content>
                <h2>팀원과 함께 협업하며 프로젝트 진행합니다.</h2>
                <div>다양한 배경의 팀원들과~</div>
              </Content>
            </Card>
            <Card>
              <Content>
                <h2>온라인으로 진행하는 다양한 개발 활동</h2>
                <div>
                  모든 업무가 온라인으로 진행되는 시대에서, 온라인에서의
                  커뮤니케이션은 중요해요.
                </div>
              </Content>
              <Paint></Paint>
            </Card>
            <Card>
              <Paint></Paint>
              <Content>
                <h2>지역, 시간에 상관없이 언제, 어디서나, 누구든지</h2>
                <div>지역, 시간에 제약받지 않고 활동이 가능해요.</div>
              </Content>
            </Card>
          </CardList>

          {/* <Card>
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
            </Card> */}
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
  ${mobile} {
    padding-top: 0px;
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
  display: flex;
  height: 100%;
  flex-direction: column;
`

const Card = styled.div`
  background-color: #dee2e6;
  height: 100%;
  border-radius: 15px;
  color: black;
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  & > div {
    padding: 15px;
    border-radius: 15px;
  }
`

const Paint = styled.div`
  background-color: #cecece;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px;
`

export default About
