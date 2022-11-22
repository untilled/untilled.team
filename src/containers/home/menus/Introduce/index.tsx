import * as Styled from './index.styled'
import TextCircle from 'containers/home/components/TextCircle'
import React from 'react'
import BackgroundVideos from '../../components/BackgroundVideos'
import WordSlider from 'components/WordSlider'
import useMediaQuery from 'hooks/useMediaQuery'
import { breakpoints } from 'styles/media'

const words = ['Worlds', 'Products', 'Designers', 'Developers']
const videos = ['/videos/intro0.mp4']

const circleTexts = 'scroll down scroll down scroll down '
const degree = Number(360 / circleTexts.length)

//133 72
const Introduce: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  return (
    <Styled.Wrapper>
      <BackgroundVideos data={videos} />
      <div></div>
      <Styled.Middle className=" container">
        <Styled.Subtitle>
          <span>UNTILLED ARE A OPEN-SOURCE DEVELOP TEAM</span>
        </Styled.Subtitle>
        <Styled.TitleWrapper>
          <div>We are developing</div>
          <Styled.Title>
            the
            {isMobile !== null && (
              <WordSlider
                data={words}
                background
                height={isMobile ? 72 : 133}
              />
            )}
          </Styled.Title>
          <div>by making products</div>
        </Styled.TitleWrapper>
      </Styled.Middle>
      <Styled.Bottom className=" container">
        <TextCircle
          style={Styled.TextCircleCss}
          data="scroll down scroll down scroll down "
          size={isMobile ? 80 : 100}
        ></TextCircle>
      </Styled.Bottom>
    </Styled.Wrapper>
  )
}

export default Introduce
