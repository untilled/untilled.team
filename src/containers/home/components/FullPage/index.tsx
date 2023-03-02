import styled from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { breakpoints, mobile } from 'styles/media'
import useMediaQuery from 'hooks/useMediaQuery'

type FullPageProps = {
  page: number | null
  onNext: Function
  onPrev: Function
  children: React.ReactNode[]
}

const FullPage: React.FC<FullPageProps> = ({
  page,
  children,
  onNext,
  onPrev,
}) => {
  const [heightList, setHeightList] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault()
    if (Math.abs(e.deltaY) < 30) return
    if (loading) return false

    if (e.deltaY > 0) {
      onNext()
    } else {
      onPrev()
    }
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (!isMobile && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault()
      if (loading) return

      switch (e.key) {
        case 'ArrowUp':
          onPrev()
          break
        case 'ArrowDown':
          onNext()
          break
      }
    }
  }

  const initHeightList = (): number[] => {
    if (wrapperRef.current) {
      const nodes = wrapperRef.current.childNodes
      const heights: number[] = Array.from(nodes).map(
        (node: any, idx: number) => {
          if (nodes.length - 1 === idx) {
            const prevNode: any = nodes[idx - 1]
            return prevNode.offsetTop + node.offsetHeight
          }
          const nodeHeight = node.offsetTop
          return nodeHeight
        }
      )
      setHeightList(heights)
      return heights
    }
    return []
  }

  // 페이지 높이값 변경시 높이 값 다시 받아온 뒤, 해당 페이지 위치로 이동
  const handleResize = () => {
    //page null 예외처리
    if (page === null) return

    const hightList = initHeightList()
    if (wrapperRef.current) {
      const parentNode = wrapperRef.current
      parentNode.scrollTo(0, hightList[page])
    }
  }

  useEffect(() => {
    if (page === null) return
    if (!wrapperRef.current) return
    animatedScrollTo(heightList[page], 500, () => {})
  }, [page])

  // 페이지 이동 이벤트 등록
  useEffect(() => {
    if (isMobile || page === null) {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
      return
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('keydown', handleKeyPress, { passive: false })
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [loading, isMobile])

  // 해당 컴포넌트 생성시 높이 초기화
  useEffect(() => {
    initHeightList()
  }, [wrapperRef])

  function animatedScrollTo(
    scrollTo: number,
    duration: number,
    callback: () => void
  ) {
    if (!wrapperRef.current) return
    setLoading(true)
    const parentNode = wrapperRef.current
    const scrollFrom = parentNode.scrollTop || 0
    const scrollDiff = scrollTo - scrollFrom
    let currentTime = 0
    const increment = 5

    function animateScroll() {
      currentTime += increment

      const newScrollPos = easeInOutCubic(
        currentTime,
        scrollFrom,
        scrollDiff,
        duration
      )

      parentNode.scrollTo(0, newScrollPos)
      if (currentTime > duration) {
        parentNode.scrollTo(0, scrollTo)
        setLoading(false)
        callback()
        return
      }

      setTimeout(animateScroll, increment)
    }

    animateScroll()
  }

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  /* scroll-behavior: smooth; */
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  ${mobile} {
    /* overflow-y: scroll; */
  }
`

export default FullPage

function easeInOutCubic(
  currentTime: number,
  startValue: number,
  changeInValue: number,
  duration: number
) {
  const time = currentTime / duration - 1
  const timeCubic = time * time * time
  return changeInValue * (timeCubic + 1) + startValue
}
