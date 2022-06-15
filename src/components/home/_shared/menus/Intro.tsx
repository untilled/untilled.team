import * as styled from './Intro.styled'
import TextCircle from 'components/home/_shared/TextCircle'
import { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
import BackgroundVideos from '../BackgroundVideos'
type Props = {}

const words = ['Worlds🌏', 'Products😻', 'Designers👨‍🎨', 'Developers🧑‍💻']
const videos = [
  '/videos/intro0.mp4',
  // '/videos/intro1.mp4',
  // '/videos/intro2.mp4',
]

const circleTexts = 'scroll down scroll down scroll down '
const degree = Number(360 / circleTexts.length)

const Intro = (props: Props) => {
  const circleTextRef = useRef<HTMLSpanElement[]>([])
  const isMobile = useRecoilValue(isMobileState)

  useEffect(() => {
    if (circleTextRef.current.length > 0) {
      circleTextRef.current.forEach((node, idx) => {
        if (node === null) return
        node.style.transform = `rotate(${idx * degree}deg)`
      })
    }
  }, [circleTextRef])

  return (
    <styled.Wrapper>
      <BackgroundVideos data={videos} />
      <div></div>
      <styled.Middle className=" container">
        <styled.Subtitle>
          <span>UNTILLED ARE A OPEN-SOURCE DEVELOP TEAM</span>
        </styled.Subtitle>
        <styled.Title>
          We are developing <br />
          the <styled.Span>Worlds</styled.Span> by <br />
          making products
        </styled.Title>
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
