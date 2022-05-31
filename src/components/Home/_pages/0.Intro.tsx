import styled from '@emotion/styled'
import WordSlider from 'components/_shared/WordSlider'
import WordSlide from 'components/_shared/WordSlider'
import { mobile } from 'styles/media'

type Props = {}

const words = ['Worlds🌏', 'Products😻', 'Designers👨‍🎨', 'Developers🧑‍💻']

const Intro = (props: Props) => {
  return (
    <Wrapper>
      <video src="/videos/intro.mp4" autoPlay loop muted playsInline />
      <Title className=" container">
        We are developing <br />
        <Span>Developers🧑‍💻</Span> by <br />
        making products
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: scroll;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  ${mobile} {
  }
`

const Title = styled.div`
  font-family: 'Prompt', sans-serif;
  font-style: italic;
  font-weight: 500;
  flex-shrink: 0;
  font-size: 6rem;
  width: 100%;
  z-index: 1;
`

const Span = styled.span`
  background-color: #212529;
`

export default Intro
