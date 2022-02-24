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
    if (page === pages.length - 1) setPage(0)
    else setPage(page + 1)
  }
  return (
    <>
      <PageMenu>
        <button onClick={handleNext}>plus</button>
      </PageMenu>
      <FullPage page={page}>
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
