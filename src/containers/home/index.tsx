import * as Styled from './index.styled'
import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import * as Menus from './menus'
import Footer from 'components/Footer'
import Toolbar from 'components/Toolbar'
import useMouseHover from 'hooks/useMouseHover'
import useMediaQuery from 'hooks/useMediaQuery'
import { breakpoints } from 'styles/media'
import { Pageify, PageifyRef } from 'libs/react-pageify'

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
  const pageifyRef = useRef<PageifyRef>(null)
  const [page, setPage] = useState(0)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)
  const hoverHandlers = useMouseHover()

  return (
    <Styled.Wrapper>
      {/* message toolbar */}
      <Toolbar direction="left">
        <Styled.ShareMessage
          href={'https://github.com/untilled/untilled'}
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
      <input type="text" disabled />
      {/* menu toolbar */}
      <Toolbar direction="right" align="start">
        <Styled.PageMenu accented={page === 4}>
          <Styled.MenuHeader>{page ? pages[page].name : ''}</Styled.MenuHeader>
          {pages.map((menu, idx) => (
            <Styled.Menu
              selected={page === idx}
              key={idx}
              onClick={() => pageifyRef.current?.movePage(idx)}
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
            onClick={pageifyRef.current?.moveNextPage}
            {...hoverHandlers}
          >
            <MdKeyboardArrowUp />
          </Styled.Arrow>
          {/* <Arrow activated={page !== pages.length - 1} onClick={handleNext}> */}
          <Styled.Arrow
            activated={true}
            onClick={pageifyRef.current?.movePrevPage}
            {...hoverHandlers}
          >
            <MdKeyboardArrowDown />
          </Styled.Arrow>
        </Styled.ArrowList>
      </Toolbar>
      <Pageify ref={pageifyRef} disabled={!!isMobile} onChange={setPage}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </Pageify>
    </Styled.Wrapper>
  )
}

export default Home
