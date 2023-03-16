import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'

type CursorifyOptions = {
  delay?: number
}

const useCursorify = (options: CursorifyOptions = {}) => {
  const { delay = 4 } = options

  // TODO: hover 여부 스타일 및 button, a tag를 통해 확인
  const handleMouseOver = (e: MouseEvent) => {
    const cursor = e.target.style.cursor
    console.log(cursor)
  }

  useEffect(() => {
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [window])

  // https://developer.mozilla.org/ko/docs/Web/CSS/cursor
  return {
    isHover: true,
  }
}

export default useCursorify
