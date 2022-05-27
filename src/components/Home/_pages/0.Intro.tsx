import styled from '@emotion/styled'
import Header from 'components/_shared/Header'
import WordSlide from 'components/_shared/WordSlider'
import imageLoader from 'libs/loader'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { mobile } from 'styles/media'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

const Intro = (props: Props) => {
  return (
    <Wrapper>
      <TitleWrapper className="container title_1">
        <TitleBox>
          <br />
          Hi there,
          <br />
          We{`'`}re Untilled.
          <br />
          <br />
          <div>We{`'`}re developing</div>
          <WordSlide words={words} background height={80} />
        </TitleBox>
        {/* <ImageBox>
          <img
            src="/images/about/conversation.svg"
            // loader={imageLoader}
          />
        </ImageBox> */}
      </TitleWrapper>
      <BrowserBox>
        <Header title="" height={40} />
        <div className="container">{/* <h2>About</h2> */}</div>
      </BrowserBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* font-family: 'Merriweather', serif; */
  /* max-width: 1280px;
  margin: 0 auto; */
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  ${mobile} {
    height: fit-content;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  padding: 100px 0px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;

  ${mobile} {
    padding: 50px 0;
  }
`

const TitleBox = styled.div`
  flex-shrink: 0;
`

const ImageBox = styled.div`
  width: 100%;
  img {
    width: 100%;
    padding: 100px;
  }
`

const BrowserBox = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color: #e9ecef;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  h2 {
    border-bottom: 5px solid white;
  }
`

export default Intro
