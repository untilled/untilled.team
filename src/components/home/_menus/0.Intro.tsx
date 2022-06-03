import { css } from '@emotion/react'
import styled from '@emotion/styled'
import TextCircle from 'components/_shared/TextCircle'
import WordSlider from 'components/_shared/WordSlider'
import useMobile from 'hooks/useMobile'
import imageLoader from 'libs/loader'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { mobile } from 'styles/media'
import HalfArrow from '/svgs/half-arrow-buttom.svg'
type Props = {}

const words = ['Worlds🌏', 'Products😻', 'Designers👨‍🎨', 'Developers🧑‍💻']
const videos = [
  '/videos/intro0.mp4',
  '/videos/intro1.mp4',
  '/videos/intro2.mp4',
]

const circleTexts = 'scroll down scroll down scroll down '
const degree = Number(360 / circleTexts.length)

const Intro = (props: Props) => {
  const [videoIdx, setvideoIdx] = useState(0)
  const circleTextRef = useRef<HTMLSpanElement[]>([])
  const [isMobile] = useMobile()

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleEnded = async () => {
    if (videoIdx >= videos.length - 1) {
      setvideoIdx(0)
    } else {
      setvideoIdx(videoIdx + 1)
    }
    try {
      await videoRef.current?.play()
    } catch (e) {}
  }

  useEffect(() => {
    if (circleTextRef.current.length > 0) {
      circleTextRef.current.forEach((node, idx) => {
        if (node === null) return
        node.style.transform = `rotate(${idx * degree}deg)`
      })
    }
  }, [circleTextRef])

  return (
    <Wrapper>
      <video
        ref={videoRef}
        src={videos[videoIdx]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
      <div></div>
      <Middle className=" container">
        <Subtitle>
          <span>UNTILLED ARE A OPEN-SOURCE DEVELOP TEAM</span>
        </Subtitle>
        <Title>
          We are developing <br />
          <Span>Worlds</Span> by <br />
          making products
        </Title>
      </Middle>
      <Bottom className=" container">
        <TextCircle
          style={TextCircleCss}
          data="scroll down scroll down scroll down "
          size={isMobile ? 80 : 100}
        >
          <CircleInner>
            {/* <Image
              loader={imageLoader}
              src="/svgs/arrow.svg"
              alt=""
              width={60}
              height={60}
            /> */}
          </CircleInner>
        </TextCircle>
      </Bottom>
    </Wrapper>
  )
}

const TextCircleCss = css`
  right: 200px;
  bottom: 100px;
  ${mobile} {
    right: 0px;
    bottom: 50px;
  }
`

const CircleInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 100px;
  }
`

const Wrapper = styled.div`
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  ${mobile} {
  }
`

const Middle = styled.div`
  font-family: 'Prompt', sans-serif;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-style: italic;
`

const Title = styled.div`
  font-weight: 600;
  flex-shrink: 0;
  font-size: 5.5rem;
  ${mobile} {
    font-size: 3rem;
  }
`

const Subtitle = styled.div`
  width: 100%;
  font-weight: 200;
  font-size: 0.9rem;
  & > span {
    padding: 3px 0;
    border-bottom: 1px solid white;
  }
  ${mobile} {
    font-size: 0.5rem;
  }
`

const Bottom = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  margin-bottom: 100px;
  ${mobile} {
    height: 50px;
    margin-bottom: 50px;
  }
`

const Span = styled.span`
  background-color: #212529;
`

export default Intro
