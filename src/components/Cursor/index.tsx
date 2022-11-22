import { css } from '@emotion/react'
import styled from '@emotion/styled'
import useMouseHover from 'hooks/useMouseHover'
import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { isMouseHoveredState } from 'atoms'
import { mobile } from 'styles/media'

const delay = 4

const Cursor: React.FC = () => {
  const [isMouseHovered, setIsMouseHovered] =
    useRecoilState(isMouseHoveredState)
  const cursorVisible = useRef(false)
  const cursorEnlared = useRef(false)

  const endX = useRef(0)
  const endY = useRef(0)

  const _x: React.MutableRefObject<number | null> = useRef(null)
  const _y: React.MutableRefObject<number | null> = useRef(null)

  const dotOutline: React.LegacyRef<HTMLDivElement> = useRef(null)
  const dot: React.LegacyRef<HTMLDivElement> = useRef(null)

  const requestRef = useRef(0)

  const animateDotOutline = () => {
    if (dotOutline.current === null) return

    if (_x.current !== null && _y.current !== null) {
      _x.current += (endX.current - _x.current) / delay
      _y.current += (endY.current - _y.current) / delay
    }

    dotOutline.current.style.top = `${_y.current}px`
    dotOutline.current.style.left = `${_x.current}px`

    requestRef.current = requestAnimationFrame(animateDotOutline)
  }

  const toggleCursorVisibility = () => {
    if (dotOutline.current === null || dot.current === null) return
    if (cursorVisible.current) {
      dotOutline.current.style.opacity = '1'
      dot.current.style.opacity = '1'
    } else {
      dotOutline.current.style.opacity = '0'
      dot.current.style.opacity = '0'
    }
  }

  const toggleCursorSize = () => {
    if (dotOutline.current === null || dot.current === null) return
    if (cursorEnlared.current) {
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.7)'
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
    } else {
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)'
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  const handleMouseMove: (this: Window, ev: MouseEvent) => any = (e) => {
    if (dot.current === null || dotOutline.current === null) return

    cursorVisible.current = true
    toggleCursorVisibility()
    endX.current = e.pageX
    endY.current = e.pageY

    if (_x.current === null || _y.current === null) {
      _x.current = endX.current
      _y.current = endY.current
      dotOutline.current.style.top = `${_x.current}px`
      dotOutline.current.style.left = `${_y.current}px`
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
    // window.addEventListener('mouseover', handleMouseOver)
    // window.addEventListener('mouseout', handleMouseOut)
    // window.addEventListener('mouseEnter', handleMouseEnter)
    // window.addEventListener('mouseLeave', handleMouseLeave)
    animateDotOutline()
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      // window.removeEventListener('mouseover', handleMouseOver)
      // window.removeEventListener('mouseout', handleMouseOut)
      // window.removeEventListener('mouseEnter', handleMouseEnter)
      // window.removeEventListener('mouseLeave', handleMouseLeave)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <>
      <CursorDotOutline ref={dotOutline} css={cursor} />
      <CursorDot ref={dot} css={cursor} />
    </>
  )
}

const cursor = css`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`

const CursorDotOutline = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-color: rgba(224, 224, 224, 0.5);
  z-index: 99;
  ${mobile} {
    display: none;
  }
`

const CursorDot = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  background-color: #d4d4d4;
  z-index: 99;
  ${mobile} {
    display: none;
  }
`

export default Cursor
