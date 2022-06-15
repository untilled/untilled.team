import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ReactChildren, useEffect, useRef } from 'react'
import { mobile } from 'styles/media'

type Props = {
  direction: 'left' | 'right'
  align?: 'start' | 'end'
  children: JSX.Element | JSX.Element[]
}

function Toolbar({ direction, align = 'end', children }: Props) {
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
    <Wrapper ref={wrapperRef} direction={direction} align={align}>
      {children}
    </Wrapper>
  )
}

type Wrapper = {
  direction: 'left' | 'right'
  align: 'start' | 'end'
}

const Wrapper = styled.div<Wrapper>`
  position: fixed;
  z-index: 20;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ direction }) =>
    direction === 'left' ? 'flex-start' : 'flex-end'};
  font-size: 0.8rem;
  height: fit-content;

  ${(props) =>
    props.align === 'start' &&
    css`
      top: 50%;
      transform: translate(0, -50%);
    `}
  ${(props) =>
    props.align === 'end' &&
    css`
      bottom: 0;
    `}
`

export default Toolbar
