import styled from '@emotion/styled'
import WordSlide from 'components/_shared/WordSlider'
import { mobile } from 'styles/media'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

//글씨 왼쪽
//원 오른쪽
const Intro = (props: Props) => {
  return (
    <Wrapper>
      <video src="/videos/intro.mp4" autoPlay loop muted playsInline />
      <TitleWrapper>
        <Title className="title_1">
          Hi there,
          <br />
          We{`'`}re Untilled.
          <br />
          <br />
          <div>We{`'`}re developing</div>
          <WordSlide words={words} background height={80} />
        </Title>
      </TitleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  ${mobile} {
    height: fit-content;
  }
`
const TitleWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  height: calc(100vh - 0px);
`

const Title = styled.div`
  /* font-family: 'Lato', 'Noto Sans KR', sans-serif; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
  flex-shrink: 0;
  font-style: Italic;
  /* font-size: 5rem; */
`

export default Intro
