import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  page: number
  onNext?: Function
  onPrev?: Function
  children: React.ReactNode[]
}

const FullPage = ({ page, children }: Props) => {
  const [heightList, setHeightList]: [number[], Function] = useState([])
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef.current) {
      const nodes = wrapperRef.current.childNodes
      const nodeHeights: number[] = Array.from(nodes).map(
        (node: any) => node.getBoundingClientRect().y
      )
      setHeightList(nodeHeights)
    }
  }, [wrapperRef])

  useEffect(() => {
    wrapperRef.current?.scrollTo(0, heightList[page])
  }, [page, heightList])

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-height: 100vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
`

export default FullPage
