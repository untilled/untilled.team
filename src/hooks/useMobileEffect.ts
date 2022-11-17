import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { isMobileState } from 'states'

// 모바일 크기인지 확인하는 hook
function useMobileEffect() {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState)

  const checkIsMobile = () => {
    if (typeof window === 'object') {
      if (window.innerWidth <= 1024) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }
  const checkIsMobileMemo = useCallback(checkIsMobile, [setIsMobile])

  useEffect(() => {
    checkIsMobileMemo()
    window.addEventListener('resize', checkIsMobileMemo)
    return () => {
      window.removeEventListener('resize', checkIsMobileMemo)
    }
  }, [isMobile, checkIsMobileMemo])

  return null
}

export default useMobileEffect
