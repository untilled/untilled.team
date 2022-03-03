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
  const rightBarRef = useRef<HTMLDivElement>(null)
  const leftBarRef = useRef<HTMLDivElement>(null)

  const handleResize = () => {
    if (
      rightBarRef.current &&
      leftBarRef.current &&
      typeof window === 'object'
    ) {
      let distance = 0
      if (window.innerWidth > 1024) distance = (window.innerWidth - 1024) / 2
      rightBarRef.current.style.right = `${distance + 10}px`
      rightBarRef.current.style.display = `flex`
      leftBarRef.current.style.left = `${distance + 10}px`
      leftBarRef.current.style.display = `flex`
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
  }, [rightBarRef])

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
      <ToolBar ref={leftBarRef}>
        <div></div>
        <div></div>
        <IconList></IconList>
      </ToolBar>
      <ToolBar ref={rightBarRef}>
        <div></div>
        <PageMenu>
          <MenuHeader>{pages[page].name}</MenuHeader>
          {pages.map((menu, idx) => (
            <Menu
              selected={page === idx}
              key={idx}
              onClick={() => setPage(idx)}
            >
              <div>{menu.name}</div>
            </Menu>
          ))}
        </PageMenu>
        <div></div>
      </ToolBar>
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

const ToolBar = styled.div`
  z-index: 10;
  top: 0;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  font-size: 0.8rem;
`
const PageMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.8rem;
`

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
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
