import styled from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { mobile } from 'styles/media'

type Props = {
  page: number | null
  onNext: Function
  onPrev: Function
  children: React.ReactNode[]
}

const FullPage = ({ page, children, onNext, onPrev }: Props) => {
  const [heightList, setHeightList] = useState<number[]>([])
  const [nodes, setNodes] = useState<any>([])
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  })

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      //page null 예외처리
      if (page === null) return

      // 스크룰 강도가 30보다 작은 경우 리턴
      if (Math.abs(e.deltaY) < 30) return
      // 현재 스크룰된 값과 높이값이 다른 경우 리턴
      const currentScroll = wrapperRef.current?.scrollTop
        ? Math.floor(wrapperRef.current?.scrollTop)
        : 0
      if (
        currentScroll - 1 > heightList[page] ||
        heightList[page] > currentScroll + 1
      )
        return
      //아래로 이동
      if (e.deltaY > 0) {
        //스크룰 가장 아래까지 가지 않은 경우 리턴
        if (
          nodes[page].scrollHeight !==
          Math.floor(nodes[page].scrollTop + nodes[page].offsetHeight)
        )
          return

        onNext()
      }
      //위로 이동
      else {
        //스크룰 가장 위까지 가지 않은 경우 리턴
        if (nodes[page].scrollTop !== 0) return
        onPrev()
      }
    },
    [page, heightList, nodes, onNext, onPrev]
  )

  const handleKeyPress = useCallback(
    (e: any) => {
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
    window.addEventListener('wheel', handleScroll)
    window.addEventListener('keydown', handleKeyPress)
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
  max-height: 100vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  ${mobile} {
    overflow-y: scroll;
  }
`

export default FullPage
