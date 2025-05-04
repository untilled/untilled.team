import React, { useRef, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import * as Styled from './index.styled'

import Footer from 'components/Footer'
import Toolbar from 'components/Toolbar'
import useMediaQuery from 'hooks/useMediaQuery'
import { Pageify, PageifyRef } from 'libs/react-pageify'
import { breakpoints } from 'styles/media'
import * as Menus from './menus'

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
    name: 'Achievement',
    component: Menus.Achievement,
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

  return (
    <Styled.Wrapper>
      <Pageify ref={pageifyRef} disabled={!!isMobile} onChange={setPage}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </Pageify>
      <Toolbar direction="left">
        <Styled.ShareMessage
          style={{ cursor: 'pointer' }}
          href={'https://github.com/untilled/untilled'}
          target="_blank"
          visible={page === 0 || page === 4 || page === 5}
        >
          {(page === 0 || page === 1) &&
            'Please visit and star this repository! 😎'}
          {(page === 3 || page === 4 || page === 5 || page === 6) &&
            'We are recruiting members! 🥰'}
        </Styled.ShareMessage>
      </Toolbar>
      <Toolbar direction="right" align="start">
        <Styled.PageMenu accented={page === 4}>
          <Styled.MenuHeader>{page ? pages[page].name : ''}</Styled.MenuHeader>
          {pages.map((menu, idx) => (
            <Styled.Menu
              style={{ cursor: 'pointer' }}
              selected={page === idx}
              key={idx}
              onClick={() => pageifyRef.current?.movePage(idx)}
            >
              <div>{menu.name}</div>
            </Styled.Menu>
          ))}
        </Styled.PageMenu>
      </Toolbar>
      <Toolbar direction="right">
        <Styled.ArrowList visible={page !== null && page !== 6}>
          <Styled.Arrow
            style={{ cursor: 'pointer' }}
            activated={page !== 0}
            onClick={pageifyRef.current?.movePrevPage}
          >
            <MdKeyboardArrowUp />
          </Styled.Arrow>
          <Styled.Arrow
            style={{ cursor: 'pointer' }}
            activated={true}
            onClick={pageifyRef.current?.moveNextPage}
          >
            <MdKeyboardArrowDown />
          </Styled.Arrow>
        </Styled.ArrowList>
      </Toolbar>
    </Styled.Wrapper>
  )
}

export default Home
