import styled from '@emotion/styled'
import React, { useState } from 'react'
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

  const handleNext = () => {
    if (page === pages.length - 1) return
    else setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === 0) return
    else setPage(page - 1)
  }
  return (
    <>
      <PageMenuWrapper className="container">
        <PageMenu className="container">
          <div onClick={handlePrev}>{'∧'}</div>
          <div onClick={handleNext}>{'∨'}</div>
        </PageMenu>
      </PageMenuWrapper>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
    </>
  )
}

const PageMenuWrapper = styled.div`
  position: relative;
  overflow-y: visible;
`

const PageMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 150px;
  transform: translate(100%, -50%);
`

export default Home
