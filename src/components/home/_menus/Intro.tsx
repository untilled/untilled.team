import {
  Wrapper,
  Middle,
  TitleWrapper,
  Title,
  Subtitle,
  Bottom,
  Span,
  TextCircleCss,
  CircleInner,
} from './Intro.style'
import TextCircle from 'components/home/_shared/TextCircle'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
import BackgroundVideos from '../_shared/BackgroundVideos'
import Image from 'next/image'
import imageLoader from 'libs/loader'
import WordSlider from 'components/_shared/WordSlider'
type Props = {}

// const words = ['Worlds🌏', 'Products😻', 'Designers👨‍🎨', 'Developers🧑‍💻']
const words = ['Worlds', 'Products', 'Designers', 'Developers']
const videos = ['/videos/intro0.mp4']

const circleTexts = 'scroll down scroll down scroll down '
const degree = Number(360 / circleTexts.length)

//133 72
const Intro = (props: Props) => {
  const isMobile = useRecoilValue(isMobileState)

  return (
    <Wrapper>
      <BackgroundVideos data={videos} />
      <div></div>
      <Middle className=" container">
        <Subtitle>
          <span>UNTILLED ARE A OPEN-SOURCE DEVELOP TEAM</span>
        </Subtitle>
        <TitleWrapper>
          <div>We are developing</div>
          <Title>
            the
            {isMobile !== null && (
              <WordSlider
                data={words}
                background
                height={isMobile ? 72 : 133}
              />
            )}
          </Title>
          <div>by making products</div>
        </TitleWrapper>
      </Middle>
      <Bottom className=" container">
        <TextCircle
          style={TextCircleCss}
          data="scroll down scroll down scroll down "
          size={isMobile ? 80 : 100}
        ></TextCircle>
      </Bottom>
    </Wrapper>
  )
}

export default Intro
