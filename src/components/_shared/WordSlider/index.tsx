import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

interface WordSliderProps {
  data: string[]
  background?: boolean
  height: number
}

//words현재는 4개로 고정. 유동적으로 변경 가능하도록 수정 필요
const WordSlider: React.FC<WordSliderProps> = ({
  data,
  background = false,
  height,
}) => {
  return (
    <Wrapper height={height}>
      {data.map((word, idx) => (
        <Word background={background} height={height} key={idx}>
          {word}
        </Word>
      ))}
    </Wrapper>
  )
}

type Wrapper = {
  height: number
}

const show = (height: number) => keyframes`
  0% {
        margin-top: -${height * 3}px;
      }
      24% {
        margin-top: -${height * 3}px;
      }
      25% {
        margin-top: -${height * 2}px;
      }
      49% {
        margin-top: -${height * 2}px;
      }
      50% {
        margin-top: -${height}px;
      }
      74% {
        margin-top: -${height}px;
      }
      75% {
        margin-top: 0px;
      }
      99% {
        margin-top: 0px;
      }
      100% {
        margin-top: -${height * 3}px;
      }
`

const Wrapper = styled.div<Wrapper>`
  width: fit-content;
  overflow: hidden;

  ${({ height }) => css`
    height: ${height}px;
    & > div:first-of-type {
      animation: ${show(height)} 15s linear infinite;
    }
  `}
`

type Word = {
  background: boolean
  height: number
}

const Word = styled.div<Word>`
  width: fit-content;
  flex-shrink: 0;
  height: ${({ height }) => height}px;
  background-color: ${({ background }) => background && '#212529'};
  color: white;
`

export default WordSlider
