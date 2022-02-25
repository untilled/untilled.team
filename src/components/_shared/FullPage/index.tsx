import styled from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  page: number
  onNext: Function
  onPrev: Function
  children: React.ReactNode[]
}

const FullPage = ({ page, children, onNext, onPrev }: Props) => {
  const [heightList, setHeightList]: [number[], Function] = useState([])
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(
    (e: any) => {
      if (wrapperRef.current?.scrollTop !== heightList[page]) return
      e.deltaY > 0 ? onNext() : onPrev()
    },
    [page, heightList, onNext, onPrev]
  )

  //페이지 변경시 스크룰 이동해야하는 y값 정의
  const initHeightList = (): number[] => {
    if (wrapperRef.current) {
      const nodes = wrapperRef.current.childNodes
      const nodeHeights: number[] = Array.from(nodes).map(
        (node: any, idx: number) => {
          if (nodes.length - 1 === idx) {
            const prevNode: any = nodes[idx - 1]
            return prevNode.offsetTop + node.offsetHeight
          }
          const nodeHeight = node.offsetTop
          return nodeHeight
        }
      )
      setHeightList(nodeHeights)
      return nodeHeights
    }
    return []
  }

  //페이지 높이값 변경시 높이 값 다시 받아온 뒤, 해당 페이지 높이값으로 이동
  const handleResize = () => {
    const hightList = initHeightList()
    if (wrapperRef.current) {
      const parentNode = wrapperRef.current
      console.log(hightList, page)

      parentNode.scrollTo(0, hightList[page])
    }
  }

  useEffect(() => {}, [page])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (wrapperRef.current) {
      const parentNode = wrapperRef.current
      parentNode.scrollTo(0, heightList[page])
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [page])

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll)
    return () => {
      window.removeEventListener('mousewheel', handleScroll)
    }
  }, [page, handleScroll])

  useEffect(() => {
    initHeightList()
  }, [wrapperRef])

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-height: 100vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
`

export default FullPage
