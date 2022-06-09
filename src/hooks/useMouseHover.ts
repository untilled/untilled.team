import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { isMouseHoveredState } from 'states'

function useMouseHover(): [
  boolean,
  React.MouseEventHandler,
  React.MouseEventHandler
] {
  const [isMouseHovered, setIsMouseHovered] =
    useRecoilState(isMouseHoveredState)

  const handleMouseOver: React.MouseEventHandler = () => {
    setIsMouseHovered(true)
  }

  const handleMouseOut: React.MouseEventHandler = () => {
    setIsMouseHovered(false)
  }

  return [isMouseHovered, handleMouseOver, handleMouseOut]
}

export default useMouseHover
