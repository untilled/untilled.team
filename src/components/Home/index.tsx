import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import FullPage from '../_shared/FullPage'
import Footer from './Footer'
import PageOne from './Page'

type Props = {}

const pages = [
  {
    component: PageOne,
  },
  {
    component: PageOne,
  },
  {
    component: PageOne,
  },
  {
    component: Footer,
  },
]

const Home = (props: Props) => {
  const [page, setPage] = useState(0)
  const pageRef = useRef<HTMLDivElement>(null)

  const handleResize = () => {
    if (pageRef.current && typeof window === 'object') {
      let right = 0
      if (window.innerWidth > 1024) right = (window.innerWidth - 1024) / 2
      pageRef.current.style.right = `${right + 10}px`
      pageRef.current.style.display = `flex`
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    handleResize()
  }, [pageRef])

  const handleNext = () => {
    if (page === pages.length - 1) return
    else setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === 0) return
    else setPage(page - 1)
  }

  return (
    <Wrapper>
      <PageMenu ref={pageRef}>
        <div onClick={handlePrev}>{'∧'}</div>
        <div onClick={handleNext}>{'∨'}</div>
      </PageMenu>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
`

const PageMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translate(0, -100%);
`

export default Home
