import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { Transition, TransitionGroup } from 'react-transition-group'

import { BsFillMoonFill } from 'react-icons/bs'

import * as Styled from './index.styled'
import Cursor from 'components/Cursor'
import { isVisibleFooterState } from 'atoms'
import MobileHeader from './MobileHeader'
import Toolbar from 'components/Toolbar'
import useMouseHover from 'hooks/useMouseHover'
import useMediaQuery from 'hooks/useMediaQuery'
import { breakpoints } from 'styles/media'
import Header from './Header'

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isVisibleFooter = useRecoilValue(isVisibleFooterState)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const hoverHandlers = useMouseHover()

  //페이지가 변경될 경우 스크롤 이벤트 발생
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0)
    }
  }, [router])

  return (
    <>
      <Styled.Wrapper ref={wrapperRef}>
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
          <Styled.ShareBox visible={!isVisibleFooter}>
            <Styled.ShareBtn {...hoverHandlers}>
              <BsFillMoonFill />
            </Styled.ShareBtn>
          </Styled.ShareBox>
        </Toolbar>
      </Styled.Wrapper>
      {isMobile === false && <Cursor />}
    </>
  )
}

export default Layout
