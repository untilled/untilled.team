import {
  Wrapper,
  Content,
  Top,
  TopLeft,
  Menus,
  TopRight,
  Mid,
  Bottom,
} from './index.style'
import Link from 'next/link'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineInstagram,
} from 'react-icons/ai'
import Logo from '../Logo'
import { isVisibleFooterState } from 'states'
import { useRecoilState } from 'recoil'
import React, { useCallback, useRef } from 'react'
import { menus } from 'constants/menus'

type Props = {}
const Footer = ({}: Props) => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleFooterState)
  const observer = useRef<IntersectionObserver>()

  const elementRef = useCallback(
    (node) => {
      // if (isFullyLoaded) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
        else setIsVisible(false)
      })

      if (node) observer.current.observe(node)
    },
    [setIsVisible]
  )

  return (
    <Wrapper ref={elementRef}>
      <Content className="container">
        <Top>
          <TopLeft>
            <Logo color="gray" />
            <Menus>
              {menus.map((menu, idx) => (
                <Link key={idx} href={menu.href}>
                  <a>
                    <div>{menu.name}</div>
                  </a>
                </Link>
              ))}
            </Menus>
          </TopLeft>
          <TopRight>
            <a
              href="https://github.com/morethanmin"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/more_dev_min"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/morethanmin"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <div>
              <AiFillFacebook />
            </div>
          </TopRight>
        </Top>
        <Mid></Mid>
        <Bottom>
          <div> Copyright ©2022. Untilled All rights reserved.</div>
          <div>
            Powerd by{' '}
            <span>
              <a
                href="https://github.com/morethanmin"
                target="_blank"
                rel="noreferrer"
              >
                morethanmin
              </a>
            </span>
            {' | '}
            <span>Korean</span>
          </div>
        </Bottom>
      </Content>
    </Wrapper>
  )
}

export default Footer
