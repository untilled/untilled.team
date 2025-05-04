import WordSlider from 'components/WordSlider'
import TextCircle from 'containers/home/components/TextCircle'
import useMediaQuery from 'hooks/useMediaQuery'
import React from 'react'
import { breakpoints } from 'styles/media'
import BackgroundVideos from '../../components/BackgroundVideos'
import * as Styled from './index.styled'

const words = ['Developers', 'Designers', 'Products', 'World']
const videos = ['/videos/intro0.mp4']

const Introduce: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  return (
    <Styled.Wrapper>
      <BackgroundVideos data={videos} />
      <div></div>
      <Styled.Middle className=" container">
        <Styled.Subtitle>
          <span>UNTILLED IS A SERVICE DEVELOPMENT AGENCY</span>
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
