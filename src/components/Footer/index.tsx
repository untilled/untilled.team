import { menus } from 'constants/menus'
import Link from 'next/link'
import React, { useCallback, useRef } from 'react'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { useStore } from 'stores'
import Logo from '../Logo'
import * as Styled from './index.styled'

const Footer: React.FC = () => {
  const setIsVisibleFooterState = useStore(
    (store) => store.setIsVisibleFooterState
  )
  const observer = useRef<IntersectionObserver>(null)

  const elementRef = useCallback(
    (node: any) => {
      // if (isFullyLoaded) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsVisibleFooterState(true)
        else setIsVisibleFooterState(false)
      })

      if (node) observer.current.observe(node)
    },
    [setIsVisibleFooterState]
  )

  return (
    <Styled.Wrapper ref={elementRef}>
      <Styled.Content className="container">
        <Styled.Top>
          <Styled.TopLeft>
            <Logo color="white" />
            <Styled.Menus style={{ cursor: 'pointer' }}>
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
              style={{ cursor: 'pointer' }}
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/more_dev_min"
              target="_blank"
              style={{ cursor: 'pointer' }}
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/morethanmin"
              target="_blank"
              style={{ cursor: 'pointer' }}
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <div style={{ cursor: 'pointer' }}>
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
                style={{ cursor: 'pointer' }}
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
