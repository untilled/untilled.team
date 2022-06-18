import * as styled from './Intro.styled'
import TextCircle from 'components/home/_shared/TextCircle'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
import BackgroundVideos from '../_shared/BackgroundVideos'
import Image from 'next/image'
import imageLoader from 'libs/loader'
import WordSlider from 'components/_shared/WordSlider'
type Props = {}

const words = ['Worlds', 'Products', 'Designers', 'Developers']
const videos = ['/videos/intro0.mp4']

const circleTexts = 'scroll down scroll down scroll down '
const degree = Number(360 / circleTexts.length)

//133 72
const Intro = (props: Props) => {
  const isMobile = useRecoilValue(isMobileState)

  return (
    <styled.Wrapper>
      <BackgroundVideos data={videos} />
      <div></div>
      <styled.Middle className=" container">
        <styled.Subtitle>
          <span>UNTILLED ARE A OPEN-SOURCE DEVELOP TEAM</span>
        </styled.Subtitle>
        <styled.TitleWrapper>
          <div>We are developing</div>
          <styled.Title>
            the
            {/* <styled.Span>Worlds</styled.Span> */}
            <WordSlider data={words} background height={isMobile ? 72 : 133} />
          </styled.Title>
          <div>by making products</div>
        </styled.TitleWrapper>
      </styled.Middle>
      <styled.Bottom className=" container">
        <TextCircle
          style={styled.TextCircleCss}
          data="scroll down scroll down scroll down "
          size={isMobile ? 80 : 100}
        >
          <styled.CircleInner>
            {/* <Image
              loader={imageLoader}
              src="/svgs/arrow.svg"
              alt=""
              width={60}
              height={60}
            /> */}
          </styled.CircleInner>
        </TextCircle>
      </styled.Bottom>
    </styled.Wrapper>
  )
}

export default Intro
