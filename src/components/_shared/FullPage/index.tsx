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

  const handleTouch = (e: any) => {
    console.log(e)
  }

  useEffect(() => {
    document.addEventListener('mousewheel', handleScroll)
    document.addEventListener('touchmove', handleTouch)
    return () => {
      document.removeEventListener('mousewheel', handleScroll)
      document.removeEventListener('touchmove', handleTouch)
    }
  }, [page, handleScroll])

  useEffect(() => {
    if (wrapperRef.current) {
      const nodes = wrapperRef.current.childNodes
      const nodeHeights: number[] = Array.from(nodes).map(
        (node: any, idx: number) => {
          if (nodes.length - 1 === idx) {
            const prevNode: any = nodes[idx - 1]
            return prevNode.getBoundingClientRect().y + node.offsetHeight
          }
          const nodeHeight = node.getBoundingClientRect().y
          return nodeHeight
        }
      )
      setHeightList(nodeHeights)
    }
  }, [wrapperRef])

  useEffect(() => {
    if (wrapperRef.current) {
      const parentNode = wrapperRef.current
      parentNode.scrollTo(0, heightList[page])
    }
  }, [page, heightList])

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-height: 100vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
`

export default FullPage
