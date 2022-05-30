import styled from '@emotion/styled'
import WordSlide from 'components/_shared/WordSlider'
import { mobile } from 'styles/media'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

const Intro = (props: Props) => {
  return (
    <Wrapper>
      <video src="/videos/intro.mp4" autoPlay loop muted playsInline />
      <TitleLine />
      <Title className="title_1">We{`'`}re Untilled.</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: scroll;
  width: 100%;
  height: 100vh;
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
  }
`

const TitleLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  width: calc(50% - 250px - 50px);
  transform: translate(0%, -50%);
  background-color: white;
  height: 6px;
  margin-right: 100px;
  z-index: 0;
`
const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
  flex-shrink: 0;
  font-style: italic;
  z-index: 1;
  width: 500px;
`

export default Intro
