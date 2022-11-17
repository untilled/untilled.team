import * as styled from './index.style'
import Cursor from 'components/_shared/Cursor'
import Footer from 'components/_shared/Footer'
import useMobileEffect from 'hooks/useMobileEffect'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isMobileState, isVisibleFooterState, pageState } from 'states'
import Header from './Header'
import MobileHeader from './MobileHeader'
import Toolbar from 'components/_shared/Toolbar'
import { BsFillMoonFill } from 'react-icons/bs'
import useMouseHover from 'hooks/useMouseHover'
import {
  CSSTransition,
  SwitchTransition,
  Transition,
  TransitionGroup,
} from 'react-transition-group'
import { css } from '@emotion/react'

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isVisibleFooter = useRecoilValue(isVisibleFooterState)
  const isMobile = useRecoilValue(isMobileState)

  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const page = useRecoilValue(pageState)
  const hoverHandlers = useMouseHover()
  const isHome = page !== null
  useMobileEffect()

  //페이지를 사용하지 않으면서 footer 가 안보이거나, page를 사용하는 페이지 이면서 footer 페이지가 아니거나
  const visible =
    (page === null && !isVisibleFooter) || (page !== null && page !== 6)

  //페이지가 변경될 경우 스크롤 이벤트 발생
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0)
    }
  }, [router])

  return (
    <>
      <styled.Wrapper ref={wrapperRef} isScrollHidden={isHome && !isMobile}>
        {isMobile === false && <Header />}
        {isMobile === true && <MobileHeader />}
        <TransitionGroup>
          <Transition key={router.pathname} timeout={200}>
            {(state: any) => {
              return <div className={`main ${state}`}>{children}</div>
            }}
          </Transition>
        </TransitionGroup>
        <Toolbar direction="left">
          <styled.ShareBox visible={visible}>
            <styled.ShareBtn {...hoverHandlers}>
              <BsFillMoonFill />
            </styled.ShareBtn>
          </styled.ShareBox>
        </Toolbar>
        {router.route !== '/' && <Footer />}
      </styled.Wrapper>
      {isMobile === false && <Cursor />}
    </>
  )
}

export default Layout
