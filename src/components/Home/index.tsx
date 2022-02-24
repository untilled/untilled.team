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
      <PageMenu>
        <button onClick={handlePrev}>{'<'}</button>
        <button onClick={handleNext}>{'>'}</button>
      </PageMenu>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
    </>
  )
}

const PageMenu = styled.div`
  position: fixed;
`

export default Home
