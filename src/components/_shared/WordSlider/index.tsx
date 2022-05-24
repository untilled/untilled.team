import styled from '@emotion/styled'
import React from 'react'

type Props = {
  words: string[]
  background?: boolean
  height?: number
}

//words현재는 4개로 고정. 유동적으로 변경 가능하도록 수정 필요
const WordSlider = ({ words, background = false, height = 80 }: Props) => {
  return (
    <Wrapper height={height}>
      {words.map((word, idx) => (
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

const Wrapper = styled.div<Wrapper>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: ${({ height }) => height}px;
  overflow: hidden;
  & > div:first-of-type {
    animation: show 10s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -${({ height }) => height * 3}px;
    }
    24% {
      margin-top: -${({ height }) => height * 3}px;
    }
    25% {
      margin-top: -${({ height }) => height * 2}px;
    }
    49% {
      margin-top: -${({ height }) => height * 2}px;
    }
    50% {
      margin-top: -${({ height }) => height}px;
    }
    74% {
      margin-top: -${({ height }) => height}px;
    }
    75% {
      margin-top: 0px;
    }
    99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -${({ height }) => height * 3}px;
    }
  }
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
