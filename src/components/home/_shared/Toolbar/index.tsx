import styled from '@emotion/styled'
import React, { ReactChildren, useEffect, useRef } from 'react'
import { mobile } from 'styles/media'

type Props = {
  direction: 'left' | 'right'
  children: JSX.Element | JSX.Element[]
}

function Toolbar({ direction, children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  //resize handler for toolbar
  const handleResize = () => {
    if (wrapperRef.current && typeof window === 'object') {
      let distance = 0
      if (window.innerWidth > 1280) distance = (window.innerWidth - 1280) / 2
      wrapperRef.current.style[direction] = `${distance + 10}px`
      wrapperRef.current.style.display = `flex`
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef} direction={direction}>
      {children}
    </Wrapper>
  )
}

type Wrapper = {
  direction: string
}

const Wrapper = styled.div<Wrapper>`
  z-index: 20;
  top: 0;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ direction }) =>
    direction === 'left' ? 'flex-start' : 'flex-end'};
  position: absolute;
  font-size: 0.8rem;
`

export default Toolbar
