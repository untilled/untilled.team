import * as styled from './index.styled'
import { useEffect } from 'react'
import FullPage from './_shared/FullPage'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { pageState } from 'states'
import { members } from 'libs/data'

import Intro from 'components/home/_shared/menus/Intro'
import About from 'components/home/_shared/menus/About'
import Archivement from 'components/home/_shared/menus/Archievement'
import Projects from 'components/home/_shared/menus/Projects'
import Members from 'components/home/_shared/menus/Members'
import Contact from 'components/home/_shared/menus/Contact'
import Footer from 'components/_shared/Footer'
import Toolbar from 'components/home/_shared/Toolbar'
import PreloadImg from 'components/_shared/PreloadImg'

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
    name: 'Archivement',
    component: Archivement,
  },
  {
    name: 'Projects',
    component: Projects,
  },
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

type Props = {}

const Home = (props: Props) => {
  const [page, setPage] = useRecoilState(pageState)

  useEffect(() => {
    setPage(0)
    return () => {
      setPage(null)
    }
  }, [setPage])

  const handleNext = () => {
    if (page === null || page === pages.length - 1) return
    setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === null || page === 0) return
    setPage(page - 1)
  }

  const preloadMembersData = members.reduce(
    (prevVal: string[], currVal): string[] => {
      return [...prevVal, ...currVal.images]
    },
    []
  )

  return (
    <styled.Wrapper>
      <Toolbar direction="left">
        <div></div>
        <div></div>
        <styled.IconList page={page}>
          <a
            href="https://github.com/morethanmin"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/morethanmin/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </styled.IconList>
      </Toolbar>
      <Toolbar direction="right">
        <div></div>
        <styled.PageMenu page={page}>
          <styled.MenuHeader>
            {page !== null ? pages[page].name : ''}
          </styled.MenuHeader>
          {pages.map((menu, idx) => (
            <styled.Menu
              selected={page === idx}
              key={idx}
              onClick={() => setPage(idx)}
            >
              <div>{menu.name}</div>
            </styled.Menu>
          ))}
        </styled.PageMenu>
        <styled.ArrowList page={page}>
          <styled.Arrow activated={page !== 0} onClick={handlePrev}>
            <MdKeyboardArrowUp />
          </styled.Arrow>
          {/* <Arrow activated={page !== pages.length - 1} onClick={handleNext}> */}
          <styled.Arrow activated={true} onClick={handleNext}>
            <MdKeyboardArrowDown />
          </styled.Arrow>
        </styled.ArrowList>
      </Toolbar>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
      <PreloadImg data={preloadMembersData} />
    </styled.Wrapper>
  )
}

export default Home
