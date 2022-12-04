import * as Styled from './index.styled'
import Link from 'next/link'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import Logo from '../Logo'
import { isVisibleFooterState } from 'atoms'
import { useRecoilState } from 'recoil'
import React, { useCallback, useRef } from 'react'
import { menus } from 'constants/menus'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleFooterState)
  const observer = useRef<IntersectionObserver>()

  const elementRef = useCallback(
    (node: any) => {
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
    <Styled.Wrapper ref={elementRef}>
      <Styled.Content className="container">
        <Styled.Top>
          <Styled.TopLeft>
            <Logo color="white" />
            <Styled.Menus>
              {menus.map((menu, idx) => (
                <Link key={idx} href={menu.href}>
                  <div>{menu.name}</div>
                </Link>
              ))}
            </Styled.Menus>
          </Styled.TopLeft>
          <Styled.TopRight>
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
          </Styled.TopRight>
        </Styled.Top>
        <Styled.Mid></Styled.Mid>
        <Styled.Bottom>
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
        </Styled.Bottom>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Footer
