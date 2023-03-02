import * as Styled from './index.styled'
import React, { useEffect } from 'react'
import FullPage from './components/FullPage'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { pageState } from 'atoms'

import * as Menus from './menus'
import Footer from 'components/Footer'
import Toolbar from 'components/Toolbar'
import useMouseHover from 'hooks/useMouseHover'
import useMediaQuery from 'hooks/useMediaQuery'
import { breakpoints } from 'styles/media'
import { polyfill } from 'smoothscroll-polyfill'

const pages = [
  {
    name: '',
    component: Menus.Introduce,
  },
  {
    name: 'About',
    component: Menus.About,
  },
  {
    name: 'Archivement',
    component: Menus.Archivement,
  },
  {
    name: 'Projects',
    component: Menus.Projects,
  },
  {
    name: 'Members',
    component: Menus.Members,
  },
  {
    name: 'Contact',
    component: Menus.Contact,
  },
  {
    name: '',
    component: Footer,
  },
]

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [page, setPage] = useRecoilState(pageState)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)
  const hoverHandlers = useMouseHover()

  useEffect(() => {
    setPage(0)
    return () => {
      setPage(null)
    }
  }, [setPage])

  useEffect(() => {
    if (isMobile) setPage(null)
    else setPage(0)
  }, [isMobile, setPage])

  const handleNext = () => {
    if (page === null || page === pages.length - 1) return
    setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === null || page === 0) return
    setPage(page - 1)
  }



  useEffect(() => {
    if (window) {
      polyfill()
    }
  }, [])

  return (
    <Styled.Wrapper>
      {/* message toolbar */}
      <Toolbar direction="left">
        <Styled.ShareMessage
          href={
            page === 0
              ? 'https://github.com/untilled/untilled'
              : 'https://github.com/untilled/untilled'
          }
          target="_blank"
          visible={page === 0 || page === 4 || page === 5}
          {...hoverHandlers}
        >
          {(page === 0 || page === 1) &&
            'Please visit and star this repository! 😎'}
          {(page === 3 || page === 4 || page === 5 || page === 6) &&
            'We are recruiting members! 🥰'}
        </Styled.ShareMessage>
      </Toolbar>
      {/* menu toolbar */}
      <Toolbar direction="right" align="start">
        <Styled.PageMenu accented={page === 4}>
          <Styled.MenuHeader>
            {page !== null ? pages[page].name : ''}
          </Styled.MenuHeader>
          {pages.map((menu, idx) => (
            <Styled.Menu
              selected={page === idx}
              key={idx}
              onClick={() => setPage(idx)}
            >
              <div>{menu.name}</div>
            </Styled.Menu>
          ))}
        </Styled.PageMenu>
      </Toolbar>
      {/* arrow toolbar */}
      <Toolbar direction="right">
        <Styled.ArrowList visible={page !== null && page !== 6}>
          <Styled.Arrow
            activated={page !== 0}
            onClick={handlePrev}
            {...hoverHandlers}
          >
            <MdKeyboardArrowUp />
          </Styled.Arrow>
          {/* <Arrow activated={page !== pages.length - 1} onClick={handleNext}> */}
          <Styled.Arrow
            activated={true}
            onClick={handleNext}
            {...hoverHandlers}
          >
            <MdKeyboardArrowDown />
          </Styled.Arrow>
        </Styled.ArrowList>
      </Toolbar>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
    </Styled.Wrapper>
  )
}

export default Home
