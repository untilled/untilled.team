import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { isMouseHoveredState } from 'atoms'

function useMouseHover(): {
  onMouseOver: React.MouseEventHandler
  onMouseOut: React.MouseEventHandler
} {
  const [isMouseHovered, setIsMouseHovered] =
    useRecoilState(isMouseHoveredState)

  const onMouseOver: React.MouseEventHandler = () => {
    setIsMouseHovered(true)
  }

  const onMouseOut: React.MouseEventHandler = () => {
    setIsMouseHovered(false)
  }

  return { onMouseOver, onMouseOut }
}

export default useMouseHover
