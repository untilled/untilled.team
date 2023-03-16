import React, {
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { easeInOutCubic } from './Pageify.module'
import StyledWrapper from './Pageify.styled'
import { PageifyProps, PageifyRef } from './Pageify.types'

const Pageify: ForwardRefRenderFunction<PageifyRef, PageifyProps> = (
  { defaultPage = 0, disabled = false, children, onChange = () => {} },
  pageifyRef
) => {
  const [page, setPage] = useState(0)
  const [heightList, setHeightList] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage(defaultPage)
  }, [])

  useEffect(() => {
    onChange(page)
  }, [page])

  const moveNextPage = () => {
    if (page === children.length - 1) return
    setPage(page + 1)
  }
  const movePrevPage = () => {
    if (page === 0) return
    setPage(page - 1)
  }

  useImperativeHandle(pageifyRef, () => {
    return {
      moveNextPage,
      movePrevPage,
      movePage: (targetPage) => {
        setPage(targetPage)
      },
    }
  })

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault()
    if (Math.abs(e.deltaY) < 30) return
    if (loading) return false

    if (e.deltaY > 0) {
      moveNextPage()
    } else {
      movePrevPage()
    }
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (!disabled && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault()
      if (loading) return

      switch (e.key) {
        case 'ArrowDown':
          moveNextPage()
          break
        case 'ArrowUp':
          movePrevPage()
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
    if (disabled || page === null) {
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
  }, [loading, disabled])

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

  return <StyledWrapper ref={wrapperRef}>{children}</StyledWrapper>
}

export default forwardRef(Pageify)
