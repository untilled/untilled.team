import * as styled from './About.styled'
import { useRef } from 'react'
type Props = {}

// Developing Delvelopers / Designers / Worlds / Products

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
  const sliderItems = useRef<HTMLDivElement[]>([])

  return (
    <styled.Wrapper>
      <styled.Title className="container">
        {/* <h1>About</h1> */}
        <h1>모두의 발전을 위해서, 모두의 성장을 위해서 🎉</h1>
        <h3>처음부터 잘하는 사람은 존재하지 않습니다.</h3>
        <h3>팀 언틸드는 성장을 원하는 모두를 돕고 있어요.</h3>
      </styled.Title>
      <styled.ContentWrapper>
        <styled.CardWrapper className="container">
          <styled.Card>Service</styled.Card>
          <styled.Card>Team</styled.Card>
          <styled.Card>Global 국경없는 플랫폼을 만들어요.</styled.Card>
        </styled.CardWrapper>
        <styled.CommentBox className="container"></styled.CommentBox>
      </styled.ContentWrapper>
    </styled.Wrapper>
  )
}

export default About
