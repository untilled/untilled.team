import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import FullPage from '../_shared/FullPage'
import Intro from './0.Intro'
import About from './1.About'
import Projects from './2.Projects'
import Archivement from './3.Archivement'
import Members from './4.Members'
import Contact from './5.Contact'
import Footer from 'components/_shared/Footer'

type Props = {}

const pages = [
  {
    name: '',
    component: Intro,
  },
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Projects',
    component: Projects,
  },
  // {
  //   name: 'Achievement',
  //   component: Archivement,
  // },
  {
    name: 'Members',
    component: Members,
  },
  {
    name: 'Contact',
    component: Contact,
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
        {/* <Arrow onClick={handlePrev}>{'∧'}</Arrow> */}
        {pages.map((menu, idx) => (
          <Menu selected={page === idx} key={idx} onClick={() => setPage(idx)}>
            <div>{menu.name}</div>
          </Menu>
        ))}
        {/* <Arrow onClick={handleNext}>{'∨'}</Arrow> */}
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
  font-size: 0.8rem;
`

const Arrow = styled.div`
  color: #494949;
  font-weight: 600;
`

type MenuProps = {
  selected: boolean
}

const Menu = styled.div<MenuProps>`
  position: relative;
  background-color: #494949;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.selected ? 'white' : '#494949')};
  & > div {
    display: none;
    position: absolute;
    top: -5px;
    right: 100%;
    margin-right: 10px;
    white-space: nowrap;
  }
  &:hover {
    & > div {
      display: block;
    }
  }
`

const MenuHeader = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 0;
  width: 10px;
  transform: translate(-20%, -150%) rotate(-90deg); ;
`

export default Home
