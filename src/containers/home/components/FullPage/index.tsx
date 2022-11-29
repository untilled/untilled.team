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
  const [nodes, setNodes] = useState<any>([])
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  // const isMobile = useMediaQuery({
  //   query: '(max-width: 1024px)',
  // })

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      //page null 예외처리
      if (page === null) return

      // 스크룰 강도가 30보다 작은 경우 리턴
      if (Math.abs(e.deltaY) < 30) return

      // 현재 스크룰된 값과 높이값이 다른 경우 리턴
      const currentScrollTop = wrapperRef.current?.scrollTop
        ? Math.floor(wrapperRef.current?.scrollTop)
        : 0

      if (
        currentScrollTop - 10 > heightList[page] ||
        heightList[page] > currentScrollTop + 10
      )
        return

      const currentHeight = Math.floor(
        nodes[page].scrollTop + nodes[page].offsetHeight
      )
      //아래로 이동
      if (e.deltaY > 0) {
        onNext()
      }
      //위로 이동
      else {
        onPrev()
      }
    },
    [page, heightList, nodes, onNext, onPrev]
  )

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault()
      //page null 예외처리
      if (page === null) return

      if (wrapperRef.current?.scrollTop !== heightList[page]) return
      switch (e.key) {
        case 'ArrowUp':
          onPrev()
          break
        case 'ArrowDown':
          onNext()
          break
      }
    },
    [page, heightList, onNext, onPrev]
  )

  // 페이지 변경시 스크룰 이동해야하는 y값 정의
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
      setNodes(nodes)
      return heights
    }
    return []
  }

  // 페이지 높이값 변경시 높이 값 다시 받아온 뒤, 해당 페이지 위치로 이동
  const handleResize = useCallback(() => {
    //page null 예외처리
    if (page === null) return

    const hightList = initHeightList()
    if (wrapperRef.current) {
      const parentNode = wrapperRef.current
      parentNode.scrollTo(0, hightList[page])
    }
  }, [page])

  // 페이지 크기 변경시 이벤트 등록
  useEffect(() => {
    //page null 예외처리
    if (page === null) return

    if (isMobile) {
      window.removeEventListener('resize', handleResize)
      return
    }
    window.addEventListener('resize', handleResize)
    if (wrapperRef.current) {
      const parentNode = wrapperRef.current
      parentNode.scrollTo(0, heightList[page])
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [page, heightList, handleResize, isMobile])

  // 페이지 이동 이벤트 등록
  useEffect(() => {
    if (isMobile) {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
      return
    }
    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('keydown', handleKeyPress, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [page, handleScroll, handleKeyPress, isMobile])

  // 해당 컴포넌트 생성시 높이 초기화
  useEffect(() => {
    initHeightList()
  }, [wrapperRef])

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  scroll-behavior: smooth;
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
    max-height: fit-content;
    /* overflow-y: scroll; */
  }
`

export default FullPage
