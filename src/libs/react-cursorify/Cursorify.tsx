import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { isMouseHoveredState } from 'atoms'
import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import DefaultCursor from './DefaultCursor'

const delay = 4

type Props = {
  cursor?: React.FC
}

const Cursorify: React.FC<Props> = ({ cursor: Cursor = DefaultCursor }) => {
  const [isMouseHovered, setIsMouseHovered] =
    useRecoilState(isMouseHoveredState)
  const cursorVisible = useRef(false)
  const cursorEnlared = useRef(false)

  const endX = useRef(0)
  const endY = useRef(0)

  const _x: React.MutableRefObject<number | null> = useRef(null)
  const _y: React.MutableRefObject<number | null> = useRef(null)

  const dot: React.LegacyRef<HTMLDivElement> = useRef(null)

  const requestRef = useRef(0)

  const toggleCursorVisibility = () => {
    if (dot.current === null) return
    if (cursorVisible.current) {
      dot.current.style.opacity = '1'
    } else {
      dot.current.style.opacity = '0'
    }
  }

  const toggleCursorSize = () => {
    if (dot.current === null) return
    if (cursorEnlared.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  const handleMouseMove: (this: Window, ev: MouseEvent) => any = (e) => {
    if (dot.current === null) return

    cursorVisible.current = true
    toggleCursorVisibility()
    endX.current = e.pageX
    endY.current = e.pageY

    if (_x.current === null || _y.current === null) {
      _x.current = endX.current
      _y.current = endY.current
    }

    dot.current.style.top = `${endY.current}px`
    dot.current.style.left = `${endX.current}px`
  }

  const handleMouseOver = () => {
    cursorEnlared.current = true
    toggleCursorSize()
  }

  const handleMouseOut = () => {
    cursorEnlared.current = false
    toggleCursorSize()
  }

  const handleMouseEnter = () => {
    cursorVisible.current = true
    toggleCursorVisibility()
  }

  const handleMouseLeave = () => {
    cursorVisible.current = false
    toggleCursorVisibility()
  }

  const mouseOverEvent = () => {
    cursorEnlared.current = true
    toggleCursorSize()
  }
  const mouseOutEvent = () => {
    cursorEnlared.current = false
    toggleCursorSize()
  }

  useEffect(() => {
    if (isMouseHovered) {
      mouseOverEvent()
    } else {
      mouseOutEvent()
    }
  }, [isMouseHovered])

  useEffect(() => {
    toggleCursorVisibility()
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])
  return (
    <StyledWrapper ref={dot}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify

const StyledWrapper = styled.div`
  z-index: 99;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`
