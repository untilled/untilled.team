import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

type Props = {
  data: string
  children?: JSX.Element | JSX.Element[] | string
  size?: number
  style?: any
}

function TextCircle({ data, children, style, size = 100 }: Props) {
  const circleTextRef = useRef<HTMLSpanElement[]>([])
  const degree = Number(360 / data.length)

  useEffect(() => {
    if (circleTextRef.current.length > 0) {
      circleTextRef.current.forEach((node, idx) => {
        if (node === null) return
        node.style.transform = `rotate(${idx * degree}deg)`
      })
    }
  }, [circleTextRef, degree])

  return (
    <Wrapper css={style}>
      <Cricle size={size}>
        {Array.from(data).map((el, idx) => (
          <span
            ref={(el: HTMLSpanElement) => (circleTextRef.current[idx] = el)}
            className="circleText"
            key={idx}
          >
            {el}
          </span>
        ))}
      </Cricle>
      <Content size={size}>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
`

type Cricle = {
  size: number
}

const Cricle = styled.div<Cricle>`
  position: absolute;
  z-index: 1;
  /*  */
  & > span {
    text-transform: uppercase;
    position: absolute;
    top: ${({ size }) => `-${size}px`};
    transform-origin: 0 ${({ size }) => `${size}px`};
  }
  animation: animate 10s linear infinite;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

type Content = {
  size: number
}

const Content = styled.div<Content>`
  position: absolute;
  width: ${({ size }) => `${size * 2}px`};
  height: ${({ size }) => `${size * 2}px`};
  z-index: 0;
  transform: translate(${({ size }) => `-${size}px, -${size}px`});
`

export default TextCircle
