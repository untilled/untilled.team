import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import FullPage from './_shared/FullPage'
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { pageState } from 'states'
import { css } from '@emotion/react'
import { members } from 'libs/data'

import Intro from 'components/home/_shared/menus/0.Intro'
import About from 'components/home/_shared/menus/1.About'
import Archivement from 'components/home/_shared/menus/2.Archievement'
import Projects from 'components/home/_shared/menus/3.Projects'
import Members from 'components/home/_shared/menus/4.Members'
import Contact from 'components/home/_shared/menus/5.Contact'
import Footer from 'components/_shared/Footer'
import Toolbar from 'components/home/_shared/Toolbar'
import PreloadImg from 'components/_shared/PreloadImg'
import { mobile } from 'styles/media'

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
    <Wrapper>
      <Toolbar direction="left">
        <div></div>
        <div></div>
        <IconList page={page}>
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
        </IconList>
      </Toolbar>
      <Toolbar direction="right">
        <div></div>
        <PageMenu page={page}>
          <MenuHeader>{page !== null ? pages[page].name : ''}</MenuHeader>
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
        <ArrowList page={page}>
          <Arrow activated={page !== 0} onClick={handlePrev}>
            <MdKeyboardArrowUp />
          </Arrow>
          {/* <Arrow activated={page !== pages.length - 1} onClick={handleNext}> */}
          <Arrow activated={true} onClick={handleNext}>
            <MdKeyboardArrowDown />
          </Arrow>
        </ArrowList>
      </Toolbar>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>
      <PreloadImg data={preloadMembersData} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

type PageMenu = {
  page: number | null
}

const PageMenu = styled.div<PageMenu>`
  font-family: 'Prompt', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 15px;
  ${({ page }) =>
    (page === 4 || page === 4) &&
    css`
      background-color: #212529;
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
      & > div {
        /* color: black; */
      }
    `};
  ${mobile} {
    display: none !important;
  }
`

const MenuHeader = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 0;
  width: 10px;
  transform: translate(-20%, -150%) rotate(-90deg); ;
`

type MenuProps = {
  selected: boolean
}

const Menu = styled.div<MenuProps>`
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.selected ? 'white' : '#797979')};
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

const IconList = styled.div<PageMenu>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  & > * {
    border-radius: 50%;
    background-color: #212529;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 23px;
      height: 23px;
      border-radius: 50%;
    }
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  }
  /* transform: translate(0px, 110px); */
  transition: transform ease-in-out 0.3s;

  ${(props) =>
    props.page === 6 &&
    css`
      transform: translate(0px, 110px);
    `}

  ${mobile} {
    display: none;
  }
`

type ArrowList = {
  page: number | null
}

const ArrowList = styled.div<ArrowList>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  transition: transform ease-in-out 0.3s;
  ${(props) =>
    props.page === 6 &&
    css`
      transform: translate(0px, 110px);
    `}

  ${mobile} {
    display: none !important;
  }
`
type ArrowProps = {
  activated: boolean
}

const Arrow = styled.div<ArrowProps>`
  border-radius: 50%;
  background-color: #212529;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);

  svg {
    width: 30px;
    height: 30px;
  }
  cursor: pointer;
  visibility: ${(props) => (props.activated ? 'visible' : 'hidden')};
`

export default Home
