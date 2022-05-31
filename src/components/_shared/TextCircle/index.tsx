import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

type Props = {
  data: string
}

function TextCircle({ data }: Props) {
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
    <Wrapper>
      {Array.from(data).map((el, idx) => (
        <span
          ref={(el: HTMLSpanElement) => (circleTextRef.current[idx] = el)}
          className="circleText"
          key={idx}
        >
          {el}
        </span>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  right: 200px;
  bottom: 100px;
  & > span {
    text-transform: uppercase;
    position: absolute;
    top: -100px;
    transform-origin: 0 100px;
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

export default TextCircle
