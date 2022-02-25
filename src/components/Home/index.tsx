import styled from '@emotion/styled'
import Members from 'components/Home/Members'
import React, { useEffect, useRef, useState } from 'react'
import FullPage from '../_shared/FullPage'
import Footer from './Footer'
import PageOne from './Page'

type Props = {}

const pages = [
  {
    name: '',
    component: PageOne,
  },
  {
    name: 'About',
    component: PageOne,
  },
  {
    name: 'Achievement',
    component: PageOne,
  },
  {
    name: 'Projects',
    component: PageOne,
  },
  {
    name: 'Members',
    component: Members,
  },
  {
    name: 'Contact',
    component: PageOne,
  },

  {
    name: '',
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
        <MenuHeader>{pages[page].name}</MenuHeader>
        {/* <div onClick={handlePrev}>{'∧'}</div> */}
        {pages.map((_, idx) => (
          <Menu
            selected={page === idx}
            key={idx}
            onClick={() => setPage(idx)}
          />
        ))}
        {/* <div onClick={handleNext}>{'∨'}</div> */}
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
  z-index: 10;
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 0.7rem;
`

type MenuProps = {
  selected: boolean
}

const Menu = styled.div<MenuProps>`
  background-color: #494949;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.selected ? 'white' : '#494949')};
`

const MenuHeader = styled.div`
  position: absolute;
  top: 0;
  width: 10px;
  transform: translate(-20%, -150%) rotate(-90deg); ;
`

export default Home
