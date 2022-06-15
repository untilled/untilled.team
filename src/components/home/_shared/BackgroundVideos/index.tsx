import styled from '@emotion/styled'
import { useRef, useState } from 'react'

type Props = {
  data: string[]
}

function BackgroundVideos({ data }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoIdx, setvideoIdx] = useState(0)

  const handleEnded = async () => {
    if (videoIdx >= data.length - 1) {
      setvideoIdx(0)
    } else {
      setvideoIdx(videoIdx + 1)
    }
    try {
      await videoRef.current?.play()
    } catch (e) {}
  }

  return (
    <StyledVideo
      ref={videoRef}
      src={data[videoIdx]}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
    />
  )
}

const StyledVideo = styled.video`
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
  z-index: 0;
`

export default BackgroundVideos
