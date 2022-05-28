import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import FullPage from '../_shared/FullPage'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { mobile } from 'styles/media'
import { useRecoilState } from 'recoil'
import { home } from 'states'
import { css } from '@emotion/react'
import Image from 'next/image'
import { members, pages } from 'libs/data'
import imageLoader from 'libs/loader'

type Props = {}

const Home = (props: Props) => {
  const [page, setPage] = useRecoilState(home)
  const rightBarRef = useRef<HTMLDivElement>(null)
  const leftBarRef = useRef<HTMLDivElement>(null)
  const handleResize = () => {
    if (
      rightBarRef.current &&
      leftBarRef.current &&
      typeof window === 'object'
    ) {
      let distance = 0
      if (window.innerWidth > 1280) distance = (window.innerWidth - 1280) / 2
      rightBarRef.current.style.right = `${distance + 10}px`
      rightBarRef.current.style.display = `flex`
      leftBarRef.current.style.left = `${distance + 10}px`
      leftBarRef.current.style.display = `flex`
    }
  }
  useEffect(() => {
    setPage(0)
    window.addEventListener('resize', handleResize)
    return () => {
      setPage(null)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    handleResize()
  }, [rightBarRef])

  const handleNext = () => {
    if (page === null || page === pages.length - 1) return
    else setPage(page + 1)
  }
  const handlePrev = () => {
    if (page === null || page === 0) return
    else setPage(page - 1)
  }

  return (
    <Wrapper>
      <ToolBar direction="left" ref={leftBarRef}>
        <div></div>
        <div></div>
        <IconList>
          {/* <div>
            <AiOutlineInstagram />
          </div>
          <div>
            <AiFillFacebook />
          </div> */}
        </IconList>
      </ToolBar>
      <ToolBar direction="right" ref={rightBarRef}>
        <div></div>
        <PageMenu>
          <MenuHeader>{page ? pages[page].name : ''}</MenuHeader>
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

        <ArrowList>
          {/* <div>
            <MdKeyboardArrowUp />
          </div> */}
          <Arrow activated={page !== 0} onClick={handlePrev}>
            <MdKeyboardArrowUp />
          </Arrow>
          <Arrow activated={page !== pages.length - 1} onClick={handleNext}>
            <MdKeyboardArrowDown />
          </Arrow>
        </ArrowList>
      </ToolBar>
      <FullPage page={page} onNext={handleNext} onPrev={handlePrev}>
        {pages.map((page, idx) => (
          <page.component key={idx} />
        ))}
      </FullPage>

      {/* 이미지를 미리 로드하기 위함 */}
      <PreloadImg>
        {members.map((member) => (
          <div key={member.id}>
            <Image
              src={member.images[0]}
              loader={imageLoader}
              alt=""
              width={1}
              height={1}
            />
            <Image
              src={member.images[1]}
              loader={imageLoader}
              alt=""
              width={1}
              height={1}
            />
          </div>
        ))}
      </PreloadImg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
`
type ToolBar = {
  direction: string
}

const ToolBar = styled.div<ToolBar>`
  z-index: 20;
  top: 0;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ direction }) =>
    direction === 'left' ? 'flex-start' : 'flex-end'};
  position: absolute;
  font-size: 0.8rem;

  ${mobile} {
    display: none !important;
  }
`

const PageMenu = styled.div`
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
  width: 8px;
  height: 8px;
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

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  & > * {
    border-radius: 50%;
    background-color: #494949;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    cursor: pointer;
  }
`

const ArrowList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`
type ArrowProps = {
  activated: boolean
}

const Arrow = styled.div<ArrowProps>`
  border-radius: 50%;
  background-color: #494949;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
  cursor: pointer;
  visibility: ${(props) => (props.activated ? 'visible' : 'hidden')};
`

const PreloadImg = styled.div`
  position: absolute;
  overflow: hidden;
  left: -9999px;
  top: -9999px;
  height: 1px;
  width: 1px;
`

export default Home
