import {
  Wrapper,
  Title,
  ContentWrapper,
  CardWrapper,
  CardHeader,
  CardTitle,
  CardContent,
  Card,
  CommentWrapper,
  CommentProfile,
  StyledTag,
  CommentContent,
} from './About.style'
import React, { useRef } from 'react'
import Member from 'components/_shared/Member'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
import Tag from 'components/_shared/Tag'
import { BsFillMouseFill } from 'react-icons/bs'
import { members } from 'constants/members'
type Props = {}

const images = [
  '/images/about/logo.png',
  '/images/about/logo1.png',
  '/images/about/logo2.png',
  '/images/about/logo3.png',
  '/images/about/logo4.png',
  '/images/about/logo5.png',
  '/images/about/logo6.png',
]

const About = (props: Props) => {
  const isMobile = useRecoilValue(isMobileState)

  //card는 현재는 열린형태임
  return (
    <Wrapper>
      <Title className="container">
        {/* <h1>About</h1> */}
        <h1>모두의 발전을 위해서, {isMobile && <br />} 모두의 성장을 위해서</h1>
        <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
      </Title>
      <ContentWrapper>
        <CardWrapper className="container">
          {/* service */}
          <Card>
            <CardHeader>Service</CardHeader>
            <CardTitle>
              발전적인 서비스를 <br /> 만들고 운영해요👽
            </CardTitle>
            <CardContent>
              단순한 토이 프로젝트가 아닌 실제 서비스를 만들고 운영하고 있어요.
              발전하는 사람들이 모여 발전하는 서비스를 만들어요.
            </CardContent>
            <BsFillMouseFill />
          </Card>
          {/* 단순한 토이 프로젝트가 아니라 실제로 여러 서비스를 만들고~~ */}
          <Card>
            {/* Team */}
            <CardHeader>Team</CardHeader>
            <CardTitle>
              성장을 원하는 <br /> 팀원들과 함께해요🙋‍♂️
            </CardTitle>
            <CardContent>
              장소, 나이, 성별등에 제약 받지않고 다양한 사람이 함께하고 있어요.
              오로지 발전을 갈망하는 사람들이 모여 발전적인 서비스를
              만들어나가고 있어요.
            </CardContent>
            <BsFillMouseFill />
          </Card>
          <Card>
            {/* Global */}
            <CardHeader>Global</CardHeader>
            <CardTitle>
              플랫폼에는 국경이 <br /> 없다고 믿고 있어요🌏
            </CardTitle>
            <CardContent>
              이용하는 사람에게도 어떠한 제약도 없이 누구나 이용할 수 있는
              서비스를 만들기 위해 노력하고 있어요.
            </CardContent>
            <BsFillMouseFill />
          </Card>
        </CardWrapper>
        <CommentWrapper className="container">
          <CommentProfile>
            <Member data={members[0].images} />
            <StyledTag>Developer</StyledTag>
          </CommentProfile>
          <CommentContent>
            언틸드와 함께 프로젝트를 진행하면서 평소에 배우고 싶었던 다양한
            기술스택을 사용해 볼 수 있었습니다. 무엇보다 혼자 프로젝트를
            진행하거나 작은 팀을 만들어 프로젝트를 진행할 때에는 단순히
            토이프로젝트에서 그치는 경우가 대부분이고, 실제 현업에서 요구하는
            실제 서비스를 운영해보는 경험을 해볼 수 없어서 아쉬웠었는데
            언틸드에서는 이런 부분까지도 충족시켜줄 수 있었던 경험이였습니다.
            <br />
            <span>frontend engineer, 이상민</span>
          </CommentContent>
        </CommentWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default About
