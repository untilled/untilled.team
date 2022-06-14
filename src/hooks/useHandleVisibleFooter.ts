import { useRouter } from 'next/router'
import { DependencyList, useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { isVisibleFooterState } from 'states'

export default function useHandleVisibleFooter(
  deps: DependencyList = []
): (node: any) => void {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleFooterState)
  const observer = useRef<IntersectionObserver>()

  const elementRef = useCallback(
    (node) => {
      // if (isFullyLoaded) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
        else setIsVisible(false)
      })

      if (node) observer.current.observe(node)
    },
    [...deps]
  )

  return elementRef
}
