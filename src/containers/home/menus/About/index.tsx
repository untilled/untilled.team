import * as Styled from './index.styled'
import React, { useRef } from 'react'
import Member from 'components/Member'
import { BsFillMouseFill } from 'react-icons/bs'
import { members } from 'constants/members'
import useMediaQuery from 'hooks/useMediaQuery'
import { breakpoints } from 'styles/media'

const About: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  //card는 현재는 열린형태임
  return (
    <Styled.Wrapper>
      <Styled.Title className="container">
        {/* <h1>About</h1> */}
        <h1>모두의 발전을 위해서, {isMobile && <br />} 모두의 성장을 위해서</h1>
        <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
      </Styled.Title>
      <Styled.ContentWrapper>
        <Styled.CardWrapper className="container">
          {/* service */}
          <Styled.Card>
            <Styled.CardHeader>Service</Styled.CardHeader>
            <Styled.CardTitle>
              발전적인 서비스를 <br /> 만들고 운영해요👽
            </Styled.CardTitle>
            <Styled.CardContent>
              단순한 토이 프로젝트가 아닌 실제 서비스를 만들고 운영하고 있어요.
              서비스 출시는 끝이 아닌 새로운 시작이라고 생각해요.
            </Styled.CardContent>
            <BsFillMouseFill />
          </Styled.Card>
          <Styled.Card>
            {/* Team */}
            <Styled.CardHeader>Team</Styled.CardHeader>
            <Styled.CardTitle>
              성장을 원하는 <br /> 팀원들과 함께해요🙋‍♂️
            </Styled.CardTitle>
            <Styled.CardContent>
              장소, 나이, 성별등에 제약 받지않고 다양한 사람이 함께하고 있어요.
              발전하는 사람들이 모여 발전하는 서비스를 만들어요.
            </Styled.CardContent>
            <BsFillMouseFill />
          </Styled.Card>
          <Styled.Card>
            {/* Global */}
            <Styled.CardHeader>Global</Styled.CardHeader>
            <Styled.CardTitle>
              플랫폼에는 국경이 <br /> 없다고 믿고 있어요🌏
            </Styled.CardTitle>
            <Styled.CardContent>
              이용하는 사람에게도 어떠한 제약도 없이 누구든지 이용할 수 있는
              서비스를 만들기 위해 노력하고 있어요.
            </Styled.CardContent>
            <BsFillMouseFill />
          </Styled.Card>
        </Styled.CardWrapper>
        <Styled.CommentWrapper className="container">
          <Styled.CommentProfile>
            <Member data={members[0].images} />
            <Styled.StyledTag>Developer</Styled.StyledTag>
          </Styled.CommentProfile>
          <Styled.CommentContent>
            언틸드와 함께 프로젝트를 진행하면서 평소에 배우고 싶었던 다양한
            기술스택을 사용해 볼 수 있었습니다. 무엇보다 혼자 프로젝트를
            진행하거나 작은 팀을 만들어 프로젝트를 진행할 때에는 단순히
            토이프로젝트에서 그치는 경우가 대부분이고, 실제 현업에서 요구하는
            실제 서비스를 운영해보는 경험을 해볼 수 없어서 아쉬웠었는데
            언틸드에서는 이런 부분까지도 충족시켜줄 수 있었던 경험이였습니다.
            <br />
            <span>frontend engineer, 이상민</span>
          </Styled.CommentContent>
        </Styled.CommentWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  )
}

export default About
